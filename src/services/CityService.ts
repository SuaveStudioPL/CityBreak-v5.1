import { Attraction, Coordinates } from '../types/attractions';
import { getCityMetadata } from '../data/cityMetadata'; // Import metadata getter only

/**
 * Interface for city data structure
 */
export interface CityData {
  name: string;
  country: string;
  description: string;
  image: string;
  coordinates: Coordinates;
  zoom: number; // Add zoom level
  timezone: string; // Add IANA timezone
  attractions: Attraction[];
}

// Memoization cache for city modules
let citiesCache: Map<string, CityData> = new Map();
let allCitiesLoaded = false;
let availableCitiesArray: CityData[] = [];

/**
 * Get a list of all available cities
 * Uses cached data if available
 *
 * @returns Promise resolving to array of CityData objects
 */
export async function getAvailableCities(): Promise<CityData[]> {
  // Return cached data if already loaded
  if (allCitiesLoaded && availableCitiesArray.length > 0) {
    return availableCitiesArray;
  }

  try {
    // Import all city attraction modules from all continents
    const europeModules = import.meta.glob('../data/cities/europe/*.{ts,js}') as Record<string, () => Promise<any>>;
    const asiaModules = import.meta.glob('../data/cities/asia/*.{ts,js}') as Record<string, () => Promise<any>>;
    const africaModules = import.meta.glob('../data/cities/africa/*.{ts,js}') as Record<string, () => Promise<any>>;
    const australiaModules = import.meta.glob('../data/cities/australia/*.{ts,js}') as Record<string, () => Promise<any>>;
    const northAmericaModules = import.meta.glob('../data/cities/northamerica/*.{ts,js}') as Record<string, () => Promise<any>>;
    const southAmericaModules = import.meta.glob('../data/cities/southamerica/*.{ts,js}') as Record<string, () => Promise<any>>;

    // Combine all modules
    const attractionModules = {
      ...europeModules,
      ...asiaModules,
      ...africaModules,
      ...australiaModules,
      ...northAmericaModules,
      ...southAmericaModules
    };

    if (Object.keys(attractionModules).length === 0) {
      console.error('No city modules found! Check the paths in import.meta.glob.');
      return [];
    }

    // Process each city attraction module
    const cityDataPromises = Object.entries(attractionModules).map(async ([path, loadAttractions]) => {
      try {
        // Extract city key (lowercase) from file path
        const fileNameMatch = path.match(/([^/]+)\.(?:ts|js)$/);
        if (!fileNameMatch) {
          console.error(`Cannot extract city name from path: ${path}`);
          return null;
        }

        const cityKey = fileNameMatch[1]; // e.g., 'warsaw'
        console.log(`Processing city from file: ${path}, extracted key: ${cityKey}`);

        // Check if already cached
        if (citiesCache.has(cityKey)) {
          return citiesCache.get(cityKey)!;
        }

        // --- Get Metadata ---
        const metadata = getCityMetadata(cityKey);
        if (!metadata) {
          console.error(`Metadata not found for city key: ${cityKey}. Ensure it exists in cityMetadata.ts`);
          return null;
        }
        console.log(`Found metadata for ${cityKey}: ${metadata.name}`);

        // --- Load Attractions ---
        const attractionModule = await loadAttractions();

        // Special handling for thehague
        let attractionsKey = `${cityKey}Attractions`; // e.g., warsawAttractions

        // Log available exports in the module for debugging
        console.log(`Available exports in module ${path}:`, Object.keys(attractionModule));

        if (cityKey === 'thehague' && !attractionModule[attractionsKey] && attractionModule['theHagueAttractions']) {
          console.log(`Using 'theHagueAttractions' instead of '${attractionsKey}' for The Hague`);
          attractionsKey = 'theHagueAttractions';
        }

        if (!attractionModule[attractionsKey] || !Array.isArray(attractionModule[attractionsKey])) {
          console.error(`Attractions export '${attractionsKey}' not found or not an array in module: ${path}`);
          return null;
        }
        const attractions: Attraction[] = attractionModule[attractionsKey];

        // --- Merge Metadata and Attractions ---
        const cityData: CityData = {
          ...metadata, // Spread all properties from metadata
          attractions: attractions, // Add the loaded attractions
        };

        // Cache the complete city data using the lowercase key
        citiesCache.set(cityKey, cityData);

        return cityData;
      } catch (error) {
        console.error(`Error loading city data from ${path}:`, error);
        return null;
      }
    });

    // Wait for all city data to be processed
    const cities = (await Promise.all(cityDataPromises)).filter(city => city !== null) as CityData[];

    // Sort cities alphabetically
    const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));

    // Log all loaded cities for debugging
    console.log("Loaded cities:", sortedCities.map(city => city.name));

    // Update cache state
    availableCitiesArray = sortedCities;
    allCitiesLoaded = true;

    return sortedCities;
  } catch (error) {
    console.error('Error importing city data:', error);
    return [];
  }
}

/**
 * Get city data by name
 *
 * @param cityName Name of the city to get
 * @returns Promise resolving to CityData or undefined if not found
 */
export async function getCityByName(cityName: string): Promise<CityData | undefined> {
  const cities = await getAvailableCities();
  console.log(`Searching for city: "${cityName}" among ${cities.length} cities`);

  // Normalize the search term (lowercase, remove spaces)
  const normalizedSearch = cityName.toLowerCase().replace(/\s+/g, '');

  // First try exact match
  let foundCity = cities.find(city => city.name === cityName);

  // If not found, try case-insensitive match
  if (!foundCity) {
    foundCity = cities.find(city => city.name.toLowerCase() === cityName.toLowerCase());
  }

  // If still not found, try more flexible matching (ignoring spaces)
  if (!foundCity) {
    foundCity = cities.find(city => city.name.toLowerCase().replace(/\s+/g, '') === normalizedSearch);
  }

  // If still not found, try partial match
  if (!foundCity) {
    foundCity = cities.find(city =>
      city.name.toLowerCase().includes(cityName.toLowerCase()) ||
      cityName.toLowerCase().includes(city.name.toLowerCase())
    );
  }

  if (foundCity) {
    console.log(`Found city: ${foundCity.name}`);
  } else {
    console.log(`City not found: ${cityName}`);
  }

  return foundCity;
}

/**
 * Get attractions for a specific city
 *
 * @param cityName Name of the city
 * @returns Promise resolving to array of Attraction objects
 */
export async function getCityAttractions(cityName: string): Promise<Attraction[]> {
  const city = await getCityByName(cityName);
  return city ? city.attractions : [];
}

/**
 * Clear the cities cache
 * Useful when testing or when city data needs to be reloaded
 */
export function clearCitiesCache(): void {
  citiesCache.clear();
  allCitiesLoaded = false;
  availableCitiesArray = [];
}
