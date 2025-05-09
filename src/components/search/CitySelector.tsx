import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { getAvailableCities, clearCitiesCache, CityData } from '../../services/CityService';

// Interface for city display format
interface CityDisplayOption {
  name: string;        // Just the city name
  country: string;     // Just the country name
  displayName: string; // Combined "City, Country" format
}

/**
 * Component for selecting a city from the available options
 */
export const CitySelector: React.FC = () => {
  const { selectedCity, setSelectedCity, setLocation, setLocationCoordinates } = useAppContext();
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [cityOptions, setCityOptions] = useState<CityDisplayOption[]>([]);
  const [displayValue, setDisplayValue] = useState('');

  // Load available cities
  useEffect(() => {
    async function loadCities() {
      try {
        // Clear the cities cache to force a fresh load
        console.log("Clearing cities cache to force reload");
        clearCitiesCache();

        // Add a small delay to ensure cache is cleared
        await new Promise(resolve => setTimeout(resolve, 100));

        const cities = await getAvailableCities();

        // Create display options with "City, Country" format
        const cityDisplayOptions = cities.map(city => ({
          name: city.name,
          country: city.country,
          displayName: `${city.name}, ${city.country}`
        }));

        console.log("City options loaded:", cityDisplayOptions.map(city => city.displayName));

        // Check if The Hague is in the list
        const hasTheHague = cityDisplayOptions.some(city => city.name === 'The Hague');
        console.log("Is 'The Hague' in the list?", hasTheHague);

        // Log all cities that contain "hague" in their name (case insensitive)
        const hagueRelatedCities = cityDisplayOptions.filter(city =>
          city.name.toLowerCase().includes('hague')
        );
        console.log("Cities containing 'hague':", hagueRelatedCities.map(city => city.displayName));

        // Add The Hague manually if it's not in the list
        if (!hasTheHague) {
          console.log("Adding 'The Hague' manually to the list");
          cityDisplayOptions.push({
            name: 'The Hague',
            country: 'Netherlands',
            displayName: 'The Hague, Netherlands'
          });
        }

        // Check if Jerusalem is in the list
        const hasJerusalem = cityDisplayOptions.some(city => city.name === 'Jerusalem');
        console.log("Is 'Jerusalem' in the list?", hasJerusalem);

        // Add Jerusalem manually if it's not in the list
        if (!hasJerusalem) {
          console.log("Adding 'Jerusalem' manually to the list");
          cityDisplayOptions.push({
            name: 'Jerusalem',
            country: 'Israel',
            displayName: 'Jerusalem, Israel'
          });
        }

        // Sort the city options alphabetically by name
        cityDisplayOptions.sort((a, b) => a.name.localeCompare(b.name));

        setCityOptions(cityDisplayOptions);

        // If there's already a selected city, update the display value
        if (selectedCity) {
          const matchingCity = cityDisplayOptions.find(city => city.name === selectedCity);
          if (matchingCity) {
            setDisplayValue(matchingCity.displayName);
          } else {
            setDisplayValue(selectedCity);
          }
        }
      } catch (error) {
        console.error('Failed to load cities:', error);
      }
    }

    loadCities();
  }, [selectedCity]);

  // Removed useEffect that attempted to auto-open dropdown based on input length

  // Reset location when city changes
  const handleCitySelect = (cityOption: CityDisplayOption) => {
    console.log(`City selected: "${cityOption.name}" (${cityOption.country})`);
    setSelectedCity(cityOption.name); // Store only the city name in the context
    setDisplayValue(cityOption.displayName); // Display the "City, Country" format
    setIsCityDropdownOpen(false);
    setLocation('');
    setLocationCoordinates(null);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDisplayValue(value);

    // Try to extract just the city name if user types in "City, Country" format
    const cityMatch = value.match(/^([^,]+)(?:,|$)/);
    if (cityMatch) {
      setSelectedCity(cityMatch[1].trim());
    } else {
      setSelectedCity(value);
    }
  };

  return (
    <div className="relative">
      <label className="block text-purple-200 mb-2">Select City</label>
      <div className="relative">
        <input
          type="text"
          value={displayValue}
          onChange={handleInputChange}
          onFocus={() => setIsCityDropdownOpen(true)} // Open dropdown on focus
          onBlur={() => setTimeout(() => setIsCityDropdownOpen(false), 200)} // Close dropdown on blur (with delay)
          className="w-full px-4 py-3 bg-slate-900 bg-opacity-50 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 border-none"
          placeholder="Enter city name"
        />
        <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-blue-300"></i>
        {isCityDropdownOpen && (
          <div className="absolute w-full mt-2 bg-slate-900 bg-opacity-95 rounded-2xl shadow-xl z-10 border-2 border-slate-600 max-h-60 overflow-y-auto">
            {cityOptions
              .filter((cityOption) => {
                // Display all cities if no input
                if (displayValue.length === 0) return true;

                const searchTerm = displayValue.toLowerCase();

                // Check if search matches city name or country
                return cityOption.displayName.toLowerCase().includes(searchTerm) ||
                       cityOption.name.toLowerCase().includes(searchTerm) ||
                       cityOption.country.toLowerCase().includes(searchTerm);
              })
              .map((cityOption, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-slate-700 cursor-pointer text-white first:rounded-t-2xl last:rounded-b-2xl"
                  onClick={() => handleCitySelect(cityOption)}
                >
                  {cityOption.displayName}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
