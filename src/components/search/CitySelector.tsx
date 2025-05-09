import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { getAvailableCities, clearCitiesCache } from '../../services/CityService';

/**
 * Component for selecting a city from the available options
 */
export const CitySelector: React.FC = () => {
  const { selectedCity, setSelectedCity, setLocation, setLocationCoordinates } = useAppContext();
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [cityOptions, setCityOptions] = useState<string[]>([]);

  // Load available cities
  useEffect(() => {
    async function loadCities() {
      try {
        // Clear the cities cache to force a fresh load
        console.log("Clearing cities cache to force reload");
        clearCitiesCache();

        const cities = await getAvailableCities();
        const cityNames = cities.map(city => city.name);
        console.log("City options loaded:", cityNames);

        // Check if The Hague is in the list
        const hasTheHague = cityNames.includes('The Hague');
        console.log("Is 'The Hague' in the list?", hasTheHague);

        // Log all cities that contain "hague" in their name (case insensitive)
        const hagueRelatedCities = cityNames.filter(name =>
          name.toLowerCase().includes('hague')
        );
        console.log("Cities containing 'hague':", hagueRelatedCities);

        // Add The Hague manually if it's not in the list
        if (!hasTheHague) {
          console.log("Adding 'The Hague' manually to the list");
          cityNames.push('The Hague');
        }

        // Sort the city names alphabetically
        cityNames.sort();

        setCityOptions(cityNames);
      } catch (error) {
        console.error('Failed to load cities:', error);
      }
    }

    loadCities();
  }, []);

  // Removed useEffect that attempted to auto-open dropdown based on input length

  // Reset location when city changes
  const handleCitySelect = (city: string) => {
    console.log(`City selected: "${city}"`);
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
    setLocation('');
    setLocationCoordinates(null);
  };

  return (
    <div className="relative">
      <label className="block text-purple-200 mb-2">Select City</label>
      <div className="relative">
        <input
          type="text"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          // onClick={() => setIsCityDropdownOpen(true)} // Replaced onClick with onFocus
          onFocus={() => setIsCityDropdownOpen(true)} // Open dropdown on focus
          onBlur={() => setTimeout(() => setIsCityDropdownOpen(false), 200)} // Close dropdown on blur (with delay)
          className="w-full px-4 py-3 bg-slate-900 bg-opacity-50 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 border-none"
          placeholder="Enter city name"
        />
        <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-blue-300"></i>
        {isCityDropdownOpen && (
          <div className="absolute w-full mt-2 bg-slate-900 bg-opacity-95 rounded-2xl shadow-xl z-10 border-2 border-slate-600 max-h-60 overflow-y-auto">
            {cityOptions
              .filter((city) => {
                // Filtruj miasta niezależnie od wielkości liter
                // Wyświetl wszystkie miasta, jeśli nie wpisano tekstu
                if (selectedCity.length === 0) return true;

                // Normalizacja nazw (usunięcie spacji, zamiana na małe litery)
                const normalizedCity = city.toLowerCase().replace(/\s+/g, '');
                const normalizedSearch = selectedCity.toLowerCase().replace(/\s+/g, '');

                // Sprawdź różne warianty dopasowania
                return city.toLowerCase().includes(selectedCity.toLowerCase()) ||
                       normalizedCity.includes(normalizedSearch) ||
                       selectedCity.toLowerCase().includes(city.toLowerCase());
              })
              .map((city, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-slate-700 cursor-pointer text-white first:rounded-t-2xl last:rounded-b-2xl"
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
