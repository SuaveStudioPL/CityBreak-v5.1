import React, { useState, useMemo } from 'react';
import { useAppContext } from '../../context/AppContext';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { Search, MapPin } from 'lucide-react';
import { getCurrentPosition, isGeolocationAvailable } from '../../services/LocationService';
import { getCityMetadata } from '../../data/cityMetadata';
import { searchLocationNominatim } from '../../utils/nominatim'; // Import the Nominatim search function

/**
 * Component for selecting a starting location with autocomplete and geolocation
 */
export const LocationSelector: React.FC = () => {
  const {
    selectedCity,
    // location, // Removed unused variable
    setLocation,
    setLocationCoordinates
  } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGeolocating, setIsGeolocating] = useState(false); // Ensure only one declaration

  // Dynamically create requestOptions based on selectedCity for Google Autocomplete
  const requestOptions = useMemo(() => {
    const cityMeta = getCityMetadata(selectedCity);
    
    // Domyślne granice dla Europy zamiast tylko Polski
    const defaultBounds = { 
      north: 60.0, // Północna Europa
      south: 35.0, // Południowa Europa
      west: -10.0, // Zachodnia Europa
      east: 30.0   // Wschodnia Europa
    };

    let cityBounds = defaultBounds;
    if (cityMeta) {
      const { lat, lng } = cityMeta.coordinates;
      const radiusDegrees = 0.5; // Approx 55km radius, adjust as needed
      cityBounds = {
        north: lat + radiusDegrees,
        south: lat - radiusDegrees,
        east: lng + radiusDegrees,
        west: lng - radiusDegrees,
      };
      console.log(`[LocationSelector] Setting Google Autocomplete bounds for ${selectedCity}:`, cityBounds);
    } else {
       console.log(`[LocationSelector] Using default Google Autocomplete bounds for Europe.`);
    }

    // Sprawdź, czy miasto jest w Polsce
    const isPolishCity = selectedCity?.toLowerCase().includes('warszawa') || 
                        selectedCity?.toLowerCase().includes('krakow') || 
                        selectedCity?.toLowerCase().includes('gdansk');

    return {
      // Usuń ograniczenie do Polski, jeśli miasto nie jest w Polsce
      componentRestrictions: isPolishCity ? { country: 'pl' } : undefined,
      // Focus types on lodging/establishments for potentially better hotel results
      types: ['lodging', 'establishment'], 
      locationBias: cityBounds, // Use dynamic bounds
      locationRestriction: cityBounds, // Use dynamic bounds
    };
  }, [selectedCity]); // Recalculate when selectedCity changes

  // Set up Google Places Autocomplete hook
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: requestOptions, // Pass the dynamic options calculated above
    debounce: 300,
    cache: 24 * 60 * 60, // Cache results for 24 hours
    googleMaps: {
      apiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
    },
  });

  // Handle location selection from Google Autocomplete suggestions
  const handleLocationSelect = async (suggestion: google.maps.places.AutocompletePrediction) => {
    setValue(suggestion.description, false); // Set input field immediately
    clearSuggestions();
    setIsLoading(true);
    setError(null);
  
    try { // Corrected try block start
      // Get coordinates directly from the place_id of the suggestion
      const results = await getGeocode({ placeId: suggestion.place_id });
      
      if (results && results.length > 0) {
        const { lat, lng } = await getLatLng(results[0]); // Use getLatLng helper
        const coordinates = { lat, lng };
  
        // Directly set the location based on the suggestion provided by the hook
        setLocation(results[0].formatted_address); // Use formatted_address from geocode result
        setLocationCoordinates(coordinates);
        // Update input value to match the formatted address for consistency
        setValue(results[0].formatted_address, false); 
        console.log(`[handleLocationSelect] Using Google suggestion: ${results[0].formatted_address}`, coordinates);
  
      } else {
        throw new Error('Could not get geocode details for place ID');
      }
    } catch (error) { // Corrected catch block
      setError('Wystąpił błąd podczas pobierania szczegółów lokalizacji');
      console.error('Error in handleLocationSelect: ', error);
      setLocationCoordinates(null); // Clear coordinates on error
      setLocation(''); // Clear location name on error
    } finally { // Corrected finally block
      setIsLoading(false);
    }
  }; // Corrected function closing brace

  // Handle manual search button click - Using Nominatim
  const handleManualSearch = async () => {
    const trimmedValue = value.trim();
    if (!trimmedValue) {
      setError('Proszę wprowadzić nazwę hotelu lub adres');
      return;
    }

    setIsLoading(true);
    setError(null);
    clearSuggestions(); // Clear any Google suggestions

    try {
      console.log(`[handleManualSearch] Searching Nominatim for: "${trimmedValue}" in city: "${selectedCity}"`);
      
      // Rozszerzona lista słów kluczowych dla hoteli w różnych językach
      const hotelKeywords = [
        'hotel', 'hostel', 'motel', 'apartament', 'pensjonat', 'inn', 'resort', 
        'lodge', 'guest house', 'guesthouse', 'b&b', 'bed and breakfast', 'the hat'
      ];
      
      // Sprawdź, czy zapytanie dotyczy hotelu
      const isHotelQuery = hotelKeywords.some(keyword => trimmedValue.toLowerCase().includes(keyword));
      
      if (isHotelQuery) {
        console.log(`[handleManualSearch] Wykryto zapytanie o hotel: "${trimmedValue}"`);
      }
      
      const coordinates = await searchLocationNominatim(trimmedValue, selectedCity);

      if (coordinates) {
        // Found coordinates via Nominatim
        setLocation(trimmedValue); // Use the user's input as the name for now
        setValue(trimmedValue, false); // Keep user input in the box
        setLocationCoordinates(coordinates);
        console.log(`[handleManualSearch] Nominatim search successful for "${trimmedValue}"`, coordinates);
      } else {
        // Nominatim did not find the location
        if (isHotelQuery) {
          setError(`Nie znaleziono hotelu "${trimmedValue}". Spróbuj podać pełną nazwę hotelu z adresem lub wyszukaj inny obiekt.`);
        } else {
          setError(`Nie znaleziono lokalizacji dla "${trimmedValue}". Spróbuj podać dokładniejszą nazwę lub adres.`);
        }
        setLocationCoordinates(null);
        // Don't clear the input value here, let the user retry or modify
      }
    } catch (error) {
      console.error('Error during Nominatim search in handleManualSearch:', error);
      setError('Wystąpił błąd podczas wyszukiwania lokalizacji.');
      setLocationCoordinates(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle getting user's geolocation
  const handleGeolocation = () => {
    if (!isGeolocationAvailable()) {
      setError('Geolocation requires a secure context (HTTPS) or is not supported by your browser');
      return;
    }

    setIsGeolocating(true);
    setError(null);

    getCurrentPosition()
      .then(async (position) => {
        try {
          // Store the coordinates from geolocation
          const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
 
           // Always set the coordinates first, indicating it's from geolocation
           setLocationCoordinates(coordinates, true);
 
           try {
            // Try to get address information from the coordinates using Google Geocode
            const results = await getGeocode({
              location: coordinates,
              language: 'en', // Use 'en' for consistency? Or 'pl'?
              region: 'pl',
            });

            if (results && results.length > 0) {
              setLocation(results[0].formatted_address);
              setValue(results[0].formatted_address, false);
            } else {
              throw new Error('No geocoding results found for current position');
            }
          } catch (error) {
            console.error('Geocoding error:', error);
            // Set fallback location name
            setLocation('Current Location');
            setValue('Current Location', false);
            setError('Could not get your address details, but your location will be used');
          }
        } catch (error) {
          console.error('Geolocation error:', error);
          setError('Failed to process your location');
          setLocationCoordinates(null);
          setLocation('');
        } finally {
          setIsGeolocating(false);
        }
      })
      .catch((error: GeolocationPositionError) => {
        setIsGeolocating(false);
        setLocationCoordinates(null);
        setLocation('');

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError('Please allow location access in your browser settings');
            break;
          case error.POSITION_UNAVAILABLE:
            setError('Unable to determine your location');
            break;
          case error.TIMEOUT:
            setError('Location request timed out. Please try again');
            break;
          default:
            setError('An error occurred while getting your location');
        }
      });
  };

  return (
    <div className="relative">
      <label className="block text-purple-200 mb-2">Starting Location</label>
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(null);
            }}
            disabled={!ready || !selectedCity}
            className="w-full px-4 py-3 bg-slate-900 bg-opacity-50 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 border-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={selectedCity ? "Enter address or hotel name" : "Select a city first"}
          />

          {/* Loading indicator */}
          {(isLoading || isGeolocating) && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
            </div>
          )}
        </div>

        {/* Search button (triggers Nominatim search) */}
        <button
          onClick={handleManualSearch}
          disabled={!ready || !selectedCity || isLoading || isGeolocating}
          className="px-4 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Search location (using Nominatim)"
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Geolocation button */}
        <button
          onClick={handleGeolocation}
          disabled={!ready || !selectedCity || isLoading || isGeolocating}
          className="px-4 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Use my location"
        >
          <MapPin className="w-5 h-5" />
        </button>
      </div>

      {/* Autocomplete suggestions (from Google) */}
      {status === "OK" && (
        <div className="absolute w-full mt-2 bg-slate-900 bg-opacity-95 rounded-2xl shadow-xl z-10 border-2 border-slate-600 max-h-60 overflow-y-auto">
          {data.map((suggestion) => (
            <div
              key={suggestion.place_id}
              className="px-4 py-2 hover:bg-slate-700 cursor-pointer text-white first:rounded-t-2xl last:rounded-b-2xl"
              // Clicking a suggestion uses Google Geocode via handleLocationSelect
              onClick={() => handleLocationSelect(suggestion)} 
            >
              {suggestion.description}
            </div>
          ))}
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className="text-red-400 mt-2 text-sm">
          <i className="fas fa-exclamation-circle mr-2"></i>
          {error}
        </p>
      )}
    </div>
  );
};
