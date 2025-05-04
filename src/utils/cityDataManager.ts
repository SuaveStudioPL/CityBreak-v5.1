import { Attraction } from '../types/attractions';

// Interfejs dla danych miasta
export interface CityData {
  name: string;
  country: string;
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  attractions: Attraction[];
}

// Interfejs dla modułu miasta
interface CityModule {
  [key: string]: Attraction[];
}

// Lista dostępnych miast - to będzie zaimportowane ze wszystkich plików
export const availableCities: CityData[] = [];

// Importuj dynamicznie wszystkie miasta
async function importCityData() {
  try {
    // Importuj pliki ze wszystkich kontynentów
    const europeModules = import.meta.glob('../data/cities/europe/*.{ts,js}') as Record<string, () => Promise<CityModule>>;
    const asiaModules = import.meta.glob('../data/cities/asia/*.{ts,js}') as Record<string, () => Promise<CityModule>>;
    const africaModules = import.meta.glob('../data/cities/africa/*.{ts,js}') as Record<string, () => Promise<CityModule>>;
    const australiaModules = import.meta.glob('../data/cities/australia/*.{ts,js}') as Record<string, () => Promise<CityModule>>;
    const northAmericaModules = import.meta.glob('../data/cities/northamerica/*.{ts,js}') as Record<string, () => Promise<CityModule>>;
    const southAmericaModules = import.meta.glob('../data/cities/southamerica/*.{ts,js}') as Record<string, () => Promise<CityModule>>;

    // Połącz wszystkie moduły
    const modules = {
      ...europeModules,
      ...asiaModules,
      ...africaModules,
      ...australiaModules,
      ...northAmericaModules,
      ...southAmericaModules
    };

    console.log('Found modules:', Object.keys(modules));

    if (Object.keys(modules).length === 0) {
      console.error('No city modules found! Check the paths in import.meta.glob.');
      return;
    }

    for (const [path, load] of Object.entries(modules)) {
      try {
        console.log('Loading module:', path);
        const module = await load();
        console.log('Loaded module:', Object.keys(module));

        // Pobierz nazwę miasta z nazwy pliku (bez rozszerzenia)
        const fileNameMatch = path.match(/([^/]+)\.(?:ts|js)$/);
        if (!fileNameMatch) {
          console.error(`Cannot extract city name from path: ${path}`);
          continue;
        }

        const cityName = fileNameMatch[1];
        console.log('City name extracted from path:', cityName);

        // Sprawdź czy moduł ma odpowiedni eksport
        const attractionsKey = `${cityName}Attractions`;
        if (cityName && module[attractionsKey]) {
          console.log(`Found ${attractionsKey} export in module`);
          const attractions = module[attractionsKey];

          if (!attractions || !Array.isArray(attractions) || attractions.length === 0) {
            console.error(`No valid attractions found for ${cityName}`);
            continue;
          }

          // Formatuj nazwę miasta tak, aby pierwsza litera była wielka, a reszta małe
          const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

          // Stwórz obiekt CityData
          const cityData: CityData = {
            name: formattedCityName,
            country: 'Poland', // Domyślnie Polska, można rozszerzyć
            description: `Explore ${formattedCityName} attractions`,
            image: '', // Domyślnie puste, można dodać później
            coordinates: {
              lat: attractions[0].coordinates.lat,
              lng: attractions[0].coordinates.lng
            },
            attractions: attractions
          };

          // Dodaj do listy dostępnych miast
          availableCities.push(cityData);
          console.log('Added city:', cityData.name);
        } else {
          console.log(`No ${attractionsKey} export found in module, available exports:`, Object.keys(module));
        }
      } catch (error) {
        console.error(`Error loading city data from ${path}:`, error);
      }
    }

    // Sortuj miasta alfabetycznie
    availableCities.sort((a, b) => a.name.localeCompare(b.name));
    console.log(`Loaded ${availableCities.length} cities`);
    console.log('Available cities:', availableCities.map(city => city.name));
  } catch (error) {
    console.error('Error importing city data:', error);
  }
}

// Wywołaj import przy ładowaniu modułu
importCityData();

// Funkcja do pobrania danych miasta po nazwie
export function getCityByName(cityName: string): CityData | undefined {
  return availableCities.find(city => city.name === cityName);
}

// Funkcja do pobrania atrakcji dla danego miasta
export function getAttractions(cityName: string): Attraction[] {
  const city = getCityByName(cityName);
  return city ? city.attractions : [];
}