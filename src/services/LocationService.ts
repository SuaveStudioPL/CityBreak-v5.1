import { Coordinates } from '../types'; // Ensure Coordinates is imported correctly
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { getCityMetadata } from '../data/cityMetadata'; // Import city metadata
import { calculateDistance } from '../utils/geoUtils'; // Import distance calculation utility
import { searchLocationNominatim } from '../utils/nominatim'; // Import Nominatim search function

// Types for location search results
export interface LocationSearchResult {
  formattedAddress: string;
  coordinates: Coordinates;
  isInSelectedCity: boolean;
  isInPoland: boolean;
}

/**
 * Search for a location using Google Places API
 * 
 * @param placeId Google place_id to search for
 * @param selectedCity The currently selected city
 * @returns Location search result with address and coordinates
 */
export async function searchLocationByPlaceId(
  placeId: string,
  selectedCity: string
): Promise<LocationSearchResult> {
  const encodedPlaceId = encodeURIComponent(placeId);
  
  const results = await getGeocode({
    placeId: encodedPlaceId,
    language: 'en',
    region: 'pl',
  });

  const { lat, lng } = await getLatLng(results[0]);
  const coordinates: Coordinates = { lat, lng };
  
  // Check multiple address components for city matches
  const cityComponent = results[0].address_components.find(
    component => component.types.includes('locality')
  );
  
  const subLocalityComponent = results[0].address_components.find(
    component => component.types.includes('sublocality') || component.types.includes('sublocality_level_1')
  );
  
  const administrativeArea = results[0].address_components.find(
    component => component.types.includes('administrative_area_level_1')
  );
  
  const administrativeArea2 = results[0].address_components.find(
    component => component.types.includes('administrative_area_level_2')
  );

  // Check if the location is in the selected city
  const isInSelectedCity = [
    cityComponent, 
    subLocalityComponent, 
    administrativeArea, 
    administrativeArea2
  ].some(component => 
    component && isCityMatch(component.long_name, selectedCity)
  );

  // Check if the location is in Poland
  const countryComponent = results[0].address_components.find(
    component => component.types.includes('country')
  );
  // Ensure isInPoland is always boolean
  const isInPoland = !!(countryComponent && countryComponent.short_name === 'PL'); 

  // --- Geographical Check ---
  let isGeographicallyClose = false;
  let distance = Infinity; // Initialize distance
  const cityMeta = getCityMetadata(selectedCity);
  if (cityMeta) {
    const cityCenterCoords = cityMeta.coordinates;
    distance = calculateDistance(coordinates, cityCenterCoords);
    const DISTANCE_THRESHOLD_KM = 20; // Allow locations within 20km of city center
    isGeographicallyClose = distance <= DISTANCE_THRESHOLD_KM;
    console.log(`[searchLocationByPlaceId] Distance from ${selectedCity} center: ${distance.toFixed(2)} km. Threshold: ${DISTANCE_THRESHOLD_KM} km. Is Close: ${isGeographicallyClose}`); // Log distance check
  } else {
    console.warn(`[searchLocationByPlaceId] Could not get metadata for city: ${selectedCity} to perform distance check.`);
  }

  // Update isInSelectedCity logic: True if name matches OR geographically close
  const finalIsInSelectedCity = isInSelectedCity || isGeographicallyClose;
  
  console.log(`[searchLocationByPlaceId] Final Result (finalIsInSelectedCity): ${finalIsInSelectedCity}`); // Log final decision
  
  if (finalIsInSelectedCity && !isInSelectedCity && cityMeta) { // Added cityMeta check for distance log
    console.log(`[searchLocationByPlaceId] Location accepted based on proximity (${distance.toFixed(2)} km) despite name mismatch.`); // Debugging proximity acceptance
  }
  
  // Correct return statement
  return {
    formattedAddress: results[0].formatted_address,
    coordinates,
    isInSelectedCity: finalIsInSelectedCity, // Use the combined logic result
    isInPoland
  };
}

/**
 * Helper function to check if an API city name matches the selected city
 * Handles different spellings and normalizes names
 * 
 * @param apiCityName City name from the API
 * @param selectedCity Currently selected city
 * @returns Boolean indicating if the cities match
 */
export function isCityMatch(apiCityName: string, selectedCity: string): boolean {
  // Helper function to normalize Polish characters
  const normalizeName = (name: string): string => {
    return name.toLowerCase()
      .replace('ą', 'a')
      .replace('ć', 'c')
      .replace('ę', 'e')
      .replace('ł', 'l')
      .replace('ń', 'n')
      .replace('ó', 'o')
      .replace('ś', 's')
      .replace('ź', 'z')
      .replace('ż', 'z')
      .trim();
  };

  const normalizedApiCity = normalizeName(apiCityName);
  const normalizedSelectedCity = normalizeName(selectedCity);

  return normalizedApiCity === normalizedSelectedCity || 
         normalizedApiCity.includes(normalizedSelectedCity) || 
         normalizedSelectedCity.includes(normalizedApiCity);
}

/**
 * Get user's current location
 * 
 * @returns Promise with coordinates
 */
export function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      error => reject(error),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
}

/**
 * Check if geolocation is available in the current context
 * 
 * @returns Boolean indicating if geolocation is available
 */
export function isGeolocationAvailable(): boolean {
  return window.isSecureContext && !!navigator.geolocation;
}

/**
 * Enhanced location search using Nominatim API
 * 
 * @param query Search query
 * @param city Current city context
 * @returns Location search result
 */
export async function searchLocation(
  query: string,
  city: string
): Promise<LocationSearchResult> {
  // Implementacja wykorzystująca funkcję searchLocationNominatim z utils/nominatim.ts
  try {
    console.log(`[LocationService] Searching for location: "${query}" in city: "${city}"`);
    
    // Wywołanie funkcji searchLocationNominatim
    const coordinates = await searchLocationNominatim(query, city);
    
    if (!coordinates) {
      console.error(`[LocationService] No coordinates found for query: "${query}" in city: "${city}"`);
      throw new Error('No results found');
    }
    
    // Tworzymy obiekt LocationSearchResult na podstawie znalezionych współrzędnych
    // Uwaga: Nie mamy pełnych informacji o adresie, więc używamy zapytania jako formattedAddress
    const result: LocationSearchResult = {
      formattedAddress: query, // Używamy zapytania jako adresu
      coordinates,
      isInSelectedCity: true, // Zakładamy, że wynik jest w wybranym mieście
      isInPoland: city.toLowerCase().includes('warszawa') || city.toLowerCase().includes('krakow') // Prosta heurystyka
    };
    
    console.log(`[LocationService] Found location for "${query}": `, result);
    return result;
  } catch (error) {
    console.error('[LocationService] Nominatim search failed:', error);
    throw new Error('No results found');
  }
}
