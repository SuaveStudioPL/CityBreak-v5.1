import React, { useState, useEffect, useRef } from 'react';
import { availableCities } from '../utils/cityDataManager';

interface CitySelectorProps {
  onCitySelect: (city: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({ onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Aktualizacja sugestii przy zmianie searchTerm
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      return;
    }

    const cityNames = availableCities.map(city => city.name);
    const filtered = cityNames.filter(city => 
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSuggestions(filtered);
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleCitySelect = (city: string) => {
    setSearchTerm(city);
    setSuggestions([]);
    setShowSuggestions(false);
    onCitySelect(city);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  // Zamknij sugestie przy kliknięciu poza inputem
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder="Search for a city..."
          className="w-full px-4 py-3 rounded-xl bg-slate-800 text-white border-2 border-slate-700 focus:border-blue-500 focus:outline-none"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          <i className="fas fa-search"></i>
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 bg-slate-800 rounded-xl border-2 border-slate-700 shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((city) => (
            <li 
              key={city}
              onClick={() => handleCitySelect(city)}
              className="px-4 py-2 cursor-pointer hover:bg-slate-700"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
      
      {showSuggestions && searchTerm && suggestions.length === 0 && (
        <div className="absolute z-10 w-full mt-2 bg-slate-800 rounded-xl border-2 border-slate-700 shadow-lg p-4 text-center text-slate-400">
          No cities found
        </div>
      )}
    </div>
  );
};

export default CitySelector; 