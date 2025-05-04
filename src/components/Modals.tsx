import React, { useState, useEffect } from 'react';
import { fetchImageAttribution, formatAttribution } from '../utils/imageUtils';
import { Attraction } from '../types/attractions';
import TruncatedText from './TruncatedText'; // Import the new component
import {
  getWeatherForecast,
  getCityCoordinates,
  WeatherForecast,
  getWeatherIconUrl,
  formatDate,
  formatTime
} from '../services/WeatherService';
import ToiletMapView from './ToiletMapView';
import { LocalFood } from '../types/localFood';
// Import bariFood statically for testing
import { bariFood } from '../data/localFood/bari';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  city: string;
  title?: string;
}

// Interfejs dla modalu atrakcji
interface AttractionsModalProps extends ModalProps {
  attractions: Attraction[];
}

// Interfejs dla modalu toalet
interface ToiletsModalProps extends ModalProps {
  userLocation: { lat: number; lng: number } | null;
}

// Komponent bazowy dla wszystkich modali
const Modal: React.FC<ModalProps & { children: React.ReactNode }> = ({ show, onClose, city, children, title }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-slate-800 rounded-lg p-8 max-w-lg w-full mx-4 border-2 border-slate-600 relative">
        {title && <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>}
        <h3 className="text-2xl font-bold text-white mb-4">{city}</h3>
        {children}
        <button
          onClick={onClose}
          className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Interface for FullScreenModal props including the new noPadding prop
interface FullScreenModalProps extends ModalProps {
  children: React.ReactNode;
  noPadding?: boolean; // Optional prop to disable padding
}

// Rozszerzony komponent modalu dla atrakcji - zajmuje cały ekran
const FullScreenModal: React.FC<FullScreenModalProps> = ({ show, onClose, city, children, title, noPadding = false }) => { // Destructure noPadding, default to false
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-black bg-opacity-80">
      {/* Use flex flex-col to allow header and content to stack */}
      <div className="bg-slate-900 rounded-lg w-full h-full max-h-full border-2 border-slate-700 relative flex flex-col overflow-hidden"> {/* Moved overflow-hidden here */}
        {/* Header Section - Always has padding */}
        <div className="p-6 flex justify-between items-center flex-shrink-0 border-b border-slate-700"> {/* Added border */}
          {/* Display Title OR City */}
          <h3 className="text-2xl font-bold text-white">{title || city}</h3>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white text-2xl"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        {/* Content Section - Conditionally apply padding and make it grow and scrollable */}
        <div className={`flex-grow overflow-y-auto ${noPadding ? '' : 'p-6'}`}> {/* Apply p-6 only if noPadding is false, make it grow and scrollable */}
          {children}
        </div>
      </div>
    </div>
  );
};

export const WeatherModal: React.FC<ModalProps> = ({ show, onClose, city }) => {
  const [weather, setWeather] = useState<WeatherForecast | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  useEffect(() => {
    if (show && city) {
      setIsLoading(true);
      setError(null);

      const fetchWeatherData = async () => {
        try {
          // Get city coordinates
          const coordinates = await getCityCoordinates(city);

          // Get weather forecast
          const forecast = await getWeatherForecast(coordinates);

          // Validate the data structure
          if (!forecast || !forecast.current || !forecast.weather) {
            throw new Error('Invalid weather data structure');
          }

          setWeather(forecast);
          setSelectedDate(null); // Reset selected date on new data
        } catch (err) {
          console.error('Error fetching weather data:', err);
          setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
        } finally {
          setIsLoading(false);
        }
      };

      fetchWeatherData();
    }
  }, [show, city]);

  // Get today's hourly forecast
  const getTodayHourlyForecast = () => {
    if (!weather) return [];

    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime() / 1000;
    const endOfDay = startOfDay + 86400; // 24 hours in seconds

    return weather.hourly?.filter(hour => hour.dt >= startOfDay && hour.dt < endOfDay) || [];
  };

  // Get selected day's hourly forecast
  const getSelectedDayHourlyForecast = () => {
    if (!weather || !selectedDate) return [];

    const startOfDay = selectedDate;
    const endOfDay = startOfDay + 86400; // 24 hours in seconds

    return weather.hourly?.filter(hour => hour.dt >= startOfDay && hour.dt < endOfDay) || [];
  };

  // Function to get weather card background color based on temperature
  const getTemperatureColor = (temp: number): string => {
    if (temp <= 0) return 'bg-blue-900';
    if (temp <= 10) return 'bg-blue-700';
    if (temp <= 20) return 'bg-blue-500';
    if (temp <= 25) return 'bg-yellow-600';
    if (temp <= 30) return 'bg-orange-500';
    return 'bg-red-600';
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
  };

  return (
    <FullScreenModal show={show} onClose={onClose} city={city} title="Weather Forecast">
      {isLoading && (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          <span className="ml-3 text-white">Loading weather forecast...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg">
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && weather && (
        <div className="space-y-8">
          {/* Current Weather */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">Current Weather</h3>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <img
                  src={getWeatherIconUrl(weather.weather?.[0]?.icon || '01d')}
                  alt={weather.weather?.[0]?.description || 'Weather Icon'}
                  className="w-20 h-20 mr-4"
                />
                <div>
                  <p className="text-3xl font-bold text-white">{Math.round(weather.current?.temp || 0)}°C</p>
                  <p className="text-gray-300 capitalize">{weather.weather?.[0]?.description || 'Loading...'}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-slate-700 p-3 rounded-lg">
                  <p className="text-gray-300">Feels Like</p>
                  <p className="text-white font-semibold">{Math.round(weather.current?.feels_like || 0)}°C</p>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg">
                  <p className="text-gray-300">Humidity</p>
                  <p className="text-white font-semibold">{Math.round(weather.current?.humidity || 0)}%</p>
                </div>
                <div className="bg-slate-700 p-3 rounded-lg">
                  <p className="text-gray-300">Wind</p>
                  <p className="text-white font-semibold">{Math.round(weather.hourly?.[0]?.wind_speed || 0)} m/s</p>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Hourly Forecast */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">
              {selectedDate ? formatDate(selectedDate) : 'Today'}'s Hourly Forecast
            </h3>
            <div className="overflow-x-auto">
              <div className="inline-flex space-x-4 pb-4 min-w-full">
                {(selectedDate ? getSelectedDayHourlyForecast() : getTodayHourlyForecast()).map((hour) => (
                  <div
                    key={hour.dt}
                    className={`flex flex-col items-center p-3 rounded-lg min-w-20 ${getTemperatureColor(hour.temp)}`}
                  >
                    <p className="text-white font-semibold">{formatTime(hour.dt)}</p>
                    <img
                      src={getWeatherIconUrl(hour.weather?.[0]?.icon || '01d')}
                      alt={hour.weather?.[0]?.description || 'Weather Icon'}
                      className="w-12 h-12 my-2"
                    />
                    <p className="text-white font-bold">{Math.round(hour.temp)}°C</p>
                    <p className="text-white text-sm">{Math.round((hour.pop || 0) * 100)}%</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3-Day Forecast */}
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">3-Day Forecast</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {weather.daily?.slice(0, 3).map((day) => (
                <div
                  key={day.dt}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedDate === day.dt
                      ? 'border-blue-400 bg-slate-700'
                      : 'border-slate-700 bg-slate-800 hover:border-slate-500'
                  }`}
                  onClick={() => handleDateSelect(day.dt)}
                >
                  <p className="text-white font-bold">{formatDate(day.dt)}</p>
                  <div className="flex items-center justify-between my-3">
                    <img
                      src={getWeatherIconUrl(day.weather?.[0]?.icon || '01d')}
                      alt={day.weather?.[0]?.description || 'Weather Icon'}
                      className="w-16 h-16"
                    />
                    <div className="text-right">
                      <p className="text-white font-bold">{Math.round(day.temp.max)}°C</p>
                      <p className="text-gray-400">{Math.round(day.temp.min)}°C</p>
                    </div>
                  </div>
                  <p className="text-gray-300 capitalize">{day.weather?.[0]?.description || 'Loading...'}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <p className="text-gray-300">Rain: {Math.round(day.pop * 100)}%</p>
                    <p className="text-gray-300">Humidity: {day.humidity}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </FullScreenModal>
  );
};

// --- Helper Functions & Data Moved to Shared Scope ---

// Map cities to potential Wikipedia language codes
const cityToLangMap: Record<string, string> = {
  Warsaw: 'pl', Krakow: 'pl', Gdansk: 'pl',
  Paris: 'fr', Nice: 'fr',
  Rome: 'it', Milan: 'it', Florence: 'it', Venice: 'it', Naples: 'it', Bari: 'it', Bologna: 'it', Verona: 'it',
  Berlin: 'de', Munich: 'de', Dresden: 'de', Salzburg: 'de', Zurich: 'de', Vienna: 'de',
  Madrid: 'es', Barcelona: 'es', Seville: 'es', Valencia: 'es', Malaga: 'es', Bilbao: 'es', Toledo: 'es',
  Lisbon: 'pt', Porto: 'pt',
  Amsterdam: 'nl', Brussels: 'nl', // Brussels also uses 'fr'
  Budapest: 'hu',
  Prague: 'cs',
  Bratislava: 'sk',
  Copenhagen: 'da',
  Stockholm: 'sv',
  Oslo: 'no',
  Athens: 'el',
  Istanbul: 'tr',
  Bucharest: 'ro',
  Sofia: 'bg',
  Belgrade: 'sr',
  Zagreb: 'hr',
  Dublin: 'en', Edinburgh: 'en', London: 'en', Liverpool: 'en', Manchester: 'en', // Primarily English
  Vilnius: 'lt',
  Riga: 'lv',
  Tallinn: 'et',
  Geneva: 'fr', // Geneva also uses 'de', 'it'
  // Add more mappings as needed
};


// Importuj funkcję z serwisu WikipediaService
import { fetchWikipediaImageByLang as fetchWikipediaImageByLangService } from '../services/WikipediaService';

// Funkcja do pobierania obrazów z Wikipedii w określonym języku
const fetchWikipediaImageByLang = async (name: string, lang: string = 'en'): Promise<string | null> => {
  // Użyj funkcji z serwisu WikipediaService
  return fetchWikipediaImageByLangService(name, lang);
};

// --- End Helper Functions ---


export const FoodDrinksModal: React.FC<ModalProps> = ({ show, onClose, city }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cityFoods, setCityFoods] = useState<LocalFood[]>([]);
  // State to hold resolved URL arrays for each food item
  const [resolvedImageUrls, setResolvedImageUrls] = useState<Record<string, string[]>>({});
  // State to track the current image index being attempted for each food item
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});
  const [foodAttributions, setFoodAttributions] = useState<Record<string, string>>({});

  // Function to determine the prioritized list of image URLs for each food item
  const determineImageUrls = async (foods: LocalFood[]): Promise<Record<string, string[]>> => {
    const urlsMap: Record<string, string[]> = {};
    const attributionPromises: Promise<void>[] = []; // For fetching attributions later

    for (const food of foods) {
      const potentialUrls: string[] = [];
      const foodName = food.name;

      // 1. Try English Wikipedia
      const wikiEnUrl = await fetchWikipediaImageByLang(foodName, 'en');
      if (wikiEnUrl) potentialUrls.push(wikiEnUrl);

      // 2. Try Local Language Wikipedia (if different and not already found)
      const localLang = cityToLangMap[city];
      // Ensure wikiEnUrl is checked correctly even if null
      if (localLang && localLang !== 'en' && (!wikiEnUrl || !potentialUrls.includes(wikiEnUrl))) {
        const wikiLocalUrl = await fetchWikipediaImageByLang(foodName, localLang);
        if (wikiLocalUrl) potentialUrls.push(wikiLocalUrl);
      }

      // 3. Add URLs from data file (if they exist and are not already included)
      if (food.imageUrls && food.imageUrls.length > 0) {
        food.imageUrls.forEach(url => {
          if (url && url.startsWith('http') && !potentialUrls.includes(url)) {
            potentialUrls.push(url);
          }
        });
      }

      // 4. Add Unsplash fallback if no other URLs were found
      if (potentialUrls.length === 0) {
        potentialUrls.push(`https://source.unsplash.com/featured/?${encodeURIComponent(foodName)},food&w=300&h=200`);
      }

      urlsMap[foodName] = potentialUrls;

      // Prepare to fetch attribution for the first valid URL
      if (potentialUrls.length > 0) {
         attributionPromises.push(
             fetchImageAttribution(potentialUrls[0]).then(attributionData => {
                 setFoodAttributions(prev => ({
                     ...prev,
                     [foodName]: formatAttribution(attributionData)
                 }));
             }).catch(err => console.error(`Error fetching attribution for ${potentialUrls[0]}:`, err)) // Add catch for attribution fetch
         );
      }
    }

    // Wait for all initial attribution fetches to complete (best effort)
    await Promise.allSettled(attributionPromises);

    return urlsMap;
  };

  // Refactored useEffect for clarity and static import testing
  useEffect(() => {
    const loadFoodData = async () => {
      setIsLoading(true);
      setCityFoods([]);
      setResolvedImageUrls({});
      setCurrentImageIndices({});
      setFoodAttributions({});

      let foods: LocalFood[] = [];
      try {
        // --- Static Import Test for Bari ---
        if (city === 'Bari') {
          console.log('[FoodDrinksModal] Using static import for Bari');
          foods = bariFood; // Use statically imported data
        } else {
          // --- Dynamic Import Logic for other cities ---
          const cityKey = city.toLowerCase().replace(/\s+/g, '');
          const expectedExportKey = `${cityKey}Food`;
          console.log(`[FoodDrinksModal] Attempting dynamic import for city: ${city}, key: ${expectedExportKey}, path: ../data/localFood/${cityKey}.ts`);

          const module = await import(`../data/localFood/${cityKey}.ts`);
          console.log(`[FoodDrinksModal] Module loaded for ${cityKey}:`, module);

          if (module && typeof module === 'object' && expectedExportKey in module && Array.isArray(module[expectedExportKey])) {
            console.log(`[FoodDrinksModal] Found expected export key "${expectedExportKey}"`);
            foods = module[expectedExportKey] as LocalFood[];
          } else if (Array.isArray(module.default)) {
            console.warn(`[FoodDrinksModal] Expected key "${expectedExportKey}" not found. Using default export.`);
            foods = module.default as LocalFood[];
          } else {
            const firstExportKey = Object.keys(module).find(key => Array.isArray(module[key]));
            if (firstExportKey) {
              console.warn(`[FoodDrinksModal] Expected key "${expectedExportKey}" not found. Using first exported array key: "${firstExportKey}"`);
              foods = module[firstExportKey] as LocalFood[];
            } else {
              console.error(`[FoodDrinksModal] No suitable food data array found in module for city: ${city}`);
            }
          }
        }

        setCityFoods(foods);

        if (foods.length > 0) {
          console.log(`[FoodDrinksModal] Processing ${foods.length} food items for ${city}`);
          const urlsMap = await determineImageUrls(foods);
          setResolvedImageUrls(urlsMap);

          const initialIndices: Record<string, number> = {};
          foods.forEach(food => {
            initialIndices[food.name] = 0;
          });
          setCurrentImageIndices(initialIndices);
        } else {
          console.warn(`[FoodDrinksModal] Food data array is empty for ${city}`);
        }

      } catch (err) {
        console.error(`[FoodDrinksModal] Error loading or processing local food module for ${city}:`, err);
        setCityFoods([]); // Ensure foods is empty on error
      } finally {
        setIsLoading(false); // Ensure loading is set to false in all cases
      }
    };

    if (show && city) {
      loadFoodData();
    } else if (!show) {
      setIsLoading(false); // Ensure loading is false when modal is hidden
    }
  }, [show, city]); // Dependency array remains correct

  const handleImageError = (foodName: string) => {
    setCurrentImageIndices(prevIndices => {
      const currentIndex = prevIndices[foodName] ?? 0;
      const availableUrls = resolvedImageUrls[foodName] ?? [];
      // Try next index only if it's within bounds
      if (currentIndex < availableUrls.length - 1) {
        // Fetch attribution for the next image before updating the index
        const nextUrl = availableUrls[currentIndex + 1];
        fetchImageAttribution(nextUrl)
          .then(attributionData => {
            setFoodAttributions(prevAttr => ({
              ...prevAttr,
              [foodName]: formatAttribution(attributionData)
            }));
          })
          .catch(err => {
             console.error(`Error fetching attribution for fallback ${nextUrl}:`, err);
             // Clear attribution if fetch fails for fallback
             setFoodAttributions(prevAttr => ({ ...prevAttr, [foodName]: '' }));
          });
        return { ...prevIndices, [foodName]: currentIndex + 1 };
      }
      // If no more fallbacks, keep the last index (or handle as needed, e.g., show placeholder)
      console.warn(`All image URLs failed for ${foodName}`);
      // Clear attribution if all fallbacks fail
      setFoodAttributions(prevAttr => ({ ...prevAttr, [foodName]: '' }));
      return prevIndices; // Keep the current state to avoid loops
    });
  };


  return (
    <FullScreenModal show={show} onClose={onClose} city={city} title="Local cuisine">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          <span className="ml-3 text-white">Loading local cuisine...</span>
        </div>
      ) : cityFoods.length === 0 ? ( // Check if cityFoods is empty after loading
        <div className="text-center text-gray-400 py-10">
           <p>No local food information available for {city}.</p>
         </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cityFoods.map((food) => {
            const currentImageIndex = currentImageIndices[food.name] ?? 0;
            const imageUrls = resolvedImageUrls[food.name] ?? [];
            // Use a generic placeholder if all URLs fail
            const currentImageUrl = imageUrls[currentImageIndex] || `https://source.unsplash.com/300x200/?food,dish&sig=${encodeURIComponent(food.name)}`; // Final fallback

            return (
              <div
                key={food.name} // Use name as key assuming it's unique per city
                className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 transition-all hover:border-blue-500"
              >
                <div className="relative">
                  <img
                    src={currentImageUrl}
                    alt={food.name}
                    className="w-full h-40 object-cover"
                    onError={() => handleImageError(food.name)} // Call handler on error
                  />
                  {/* Display attribution based on the current index and fetched data */}
                  {foodAttributions[food.name] && (
                    <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-1 rounded">
                      {foodAttributions[food.name]}
                    </div>
                  )}
                  <div className="absolute top-2 left-2 bg-blue-600 text-white font-bold rounded-full px-2 py-1 text-xs">
                  {food.type}
                </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    {food.name}
                    {(food.isVegetarian || food.isVegan) && (
                      <span className="ml-2 text-green-400" title={food.isVegan ? "Vegan" : "Vegetarian"}>
                        <i className="fas fa-leaf"></i>
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {food.description}
                    {(food.isVegetarian || food.isVegan) && (
                      <span className="text-green-400 ml-1">
                        {food.isVegan ? " Suitable for vegans." : " Suitable for vegetarians."}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </FullScreenModal>
  );
};

export const AttractionsModal: React.FC<AttractionsModalProps> = ({ show, onClose, city, attractions }) => {
  const [expandedAttractions, setExpandedAttractions] = useState<Set<string>>(new Set());
  const [attractionImages, setAttractionImages] = useState<Record<string, string>>({});
  const [attractionAttributions, setAttractionAttributions] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Pobierz obrazy z Wikipedii po pierwszym renderowaniu
  useEffect(() => {
    if (show && attractions.length > 0) {
      setIsLoading(true);
      // console.log('Fetching images for attractions:', attractions); // Less verbose logging

      // Sprawdź, czy mamy już obrazy dla wszystkich atrakcji
      const allAttractionsHaveImages = attractions.every(attraction =>
        attractionImages[attraction.id] !== undefined
      );

      // Jeśli wszystkie atrakcje mają już obrazy, nie pobieraj ich ponownie
      if (allAttractionsHaveImages) {
        setIsLoading(false);
        return;
      }

      const fetchAllImages = async () => {
        try {
          const imagePromises = attractions.map(async (attraction) => {
            // Jeśli już mamy obraz dla tej atrakcji, użyj go
            if (attractionImages[attraction.id]) {
              return {
                id: attraction.id,
                image: attractionImages[attraction.id]
              };
            }

            // Najpierw spróbuj pobrać zdjęcie z Wikipedii
            const wikipediaImage = await fetchWikipediaImageByLang(attraction.name, 'en');
            if (wikipediaImage) {
              return {
                id: attraction.id,
                image: wikipediaImage
              };
            }

            // Jeśli nie udało się pobrać zdjęcia z Wikipedii, a atrakcja ma zdjęcia w imageUrls, użyj pierwszego
            if (attraction.imageUrls && attraction.imageUrls.length > 0) {
              return {
                id: attraction.id,
                image: attraction.imageUrls[0]
              };
            }

            // Jeśli nie ma ani zdjęcia z Wikipedii, ani z imageUrls, użyj placeholdera
            return {
              id: attraction.id,
              image: getPlaceholderImage(attraction.category, parseInt(attraction.id))
            };
          });

          const results = await Promise.all(imagePromises);
          console.log('Fetched images:', results);
          const newImages: Record<string, string> = {...attractionImages};

          results.forEach(result => {
            newImages[result.id] = result.image;
          });

          setAttractionImages(newImages);

          // Fetch attributions for all images
          const fetchAttributions = async () => {
            const attributions: Record<string, string> = {...attractionAttributions};

            for (const attraction of attractions) {
              // Pobierz atrybucje tylko dla nowych obrazów
              if (newImages[attraction.id] && !attributions[attraction.id]) {
                const attributionData = await fetchImageAttribution(newImages[attraction.id]);
                attributions[attraction.id] = formatAttribution(attributionData);
              }
            }

            setAttractionAttributions(attributions);
            console.log('Fetched attributions:', attributions);
            setIsLoading(false);
          };

          await fetchAttributions();
        } catch (error) {
          console.error('Error fetching images or attributions:', error);
          setIsLoading(false);
        }
      };

      fetchAllImages();
    }
  }, [show, attractions, attractionImages, attractionAttributions]);

  const toggleExpand = (id: string) => {
    setExpandedAttractions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <FullScreenModal show={show} onClose={onClose} city={city}>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
          <span className="ml-3 text-white">Loading attractions...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {attractions.map((attraction, index) => (
            <div
              key={attraction.id}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 transition-all hover:border-blue-500"
            >
              <div className="relative">
                <img
                  src={attractionImages[attraction.id]}
                  alt={attraction.name}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.currentTarget.src = getPlaceholderImage(attraction.category, index);
                  }}
                />
                {attractionAttributions[attraction.id] && (
                  <TruncatedText
                    text={attractionAttributions[attraction.id]}
                    maxLength={70}
                    className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-1 rounded"
                  />
                )}
                <div className="absolute top-2 left-2 bg-blue-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2">{attraction.name}</h3>
                <p className="text-gray-300 text-sm mb-3 overflow-hidden" style={{
                  maxHeight: expandedAttractions.has(attraction.id) ? 'none' : '4.5rem',
                  display: '-webkit-box',
                  WebkitLineClamp: expandedAttractions.has(attraction.id) ? 'unset' : '3',
                  WebkitBoxOrient: 'vertical',
                  overflow: expandedAttractions.has(attraction.id) ? 'visible' : 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {attraction.description}
                </p>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => toggleExpand(attraction.id)}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    {expandedAttractions.has(attraction.id) ? 'Show Less' : 'Show More'}
                  </button>
                  <a
                    href={generateWikipediaLink(attraction.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                  >
                    <i className="fab fa-wikipedia-w mr-1"></i> Wiki
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </FullScreenModal>
  );
};

export const EventsModal: React.FC<ModalProps> = ({ show, onClose, city }) => (
  <Modal show={show} onClose={onClose} city={city}>
    <div className="space-y-4">
      <div className="p-4 bg-slate-700 rounded-xl">
        <h4 className="text-lg font-semibold text-white">Light Festival</h4>
        <p className="text-gray-300">March 16-17, 2025</p>
        <p className="text-gray-300">Spectacular light shows on historic buildings</p>
        <p className="text-blue-400">
          <i className="fas fa-ticket-alt mr-2"></i>Tickets from $15
        </p>
      </div>
    </div>
  </Modal>
);

export const ToiletsModal: React.FC<ToiletsModalProps> = ({ show, onClose, city, userLocation }) => (
  <FullScreenModal show={show} onClose={onClose} city={city} title="Public Toilets" noPadding={true}> {/* Pass noPadding={true} */}
    {/* Ensure ToiletMapView itself fills the container */}
    {show && <ToiletMapView city={city} userLocation={userLocation} />}
  </FullScreenModal>
);

export const ErrorModal: React.FC<{ show: boolean; onClose: () => void }> = ({
  show,
  onClose,
}) => (
  <Modal show={show} onClose={onClose} city="Error">
    <p className="text-gray-300 mb-6">
      Please fill in all fields before generating the route.
    </p>
  </Modal>
);

export const SuccessModal: React.FC<{ show: boolean; onClose: () => void }> = ({
  show,
  onClose,
}) => (
  <Modal show={show} onClose={onClose} city="Success!">
    <p className="text-gray-300 mb-6">The route has been generated successfully.</p>
  </Modal>
);

// Funkcja pomocnicza do generowania linku do Wikipedii na podstawie nazwy atrakcji
// Funkcja pomocnicza do generowania linku do Wikipedii na podstawie nazwy atrakcji
const generateWikipediaLink = (attractionName: string): string => {
  // 1. Replace spaces with underscores
  const underscoredName = attractionName.replace(/\s+/g, '_');
  // 2. URL-encode the result to handle special characters and parentheses correctly
  const encodedName = encodeURIComponent(underscoredName);
  return `https://en.wikipedia.org/wiki/${encodedName}`;
};

// // Removed redundant fetchWikipediaImage function - use fetchWikipediaImageByLang(name, 'en') instead.
// const fetchWikipediaImage = async (name: string): Promise<string | null> => { ... };

// Funkcja pomocnicza do generowania placeholder URL dla zdjęcia
const getPlaceholderImage = (category: string | undefined, index: number): string => {
  // Placeholder images jako fallback
  const placeholders: Record<string, string> = {
    'historical': 'https://source.unsplash.com/300x200/?castle,monument',
    'cultural': 'https://source.unsplash.com/300x200/?culture,museum',
    'nature': 'https://source.unsplash.com/300x200/?park,nature',
    'landmark': 'https://source.unsplash.com/300x200/?landmark,architecture',
    'historic': 'https://source.unsplash.com/300x200/?history,palace',
  };

  return placeholders[category?.toLowerCase() || ''] || `https://source.unsplash.com/300x200/?city,travel${index}`;
};
