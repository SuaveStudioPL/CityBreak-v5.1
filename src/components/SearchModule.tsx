import React from 'react';
import { useAppContext } from '../context/AppContext'; // Corrected import path
import { CitySelector } from './search/CitySelector'; // Import the new component
import { LocationSelector } from './search/LocationSelector'; // Import the new component
import { DaysSelector } from './search/DaysSelector'; // Import the new component

/**
 * Main search module component composed of smaller selector components.
 */
export const SearchModule: React.FC = () => {
  // Get necessary state and functions from context for the Generate button
  const {
    selectedCity,
    locationCoordinates, // Use coordinates to check if location is selected
    onGenerateRoute,
    isLoading, // Use context loading state for the main button
    isGeolocating, // Use context geolocating state for the main button
  } = useAppContext();

  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl p-8 mb-16 shadow-2xl border-2 border-slate-600">
      <div className="flex flex-col gap-6">
        {/* Render the extracted components */}
        <CitySelector />
        <LocationSelector />
        <DaysSelector />
      </div>

      {/* Generate Route Button - uses context function and states */}
      <button
        onClick={onGenerateRoute} // Use context function
        // Disable based on context states: city selected and location coordinates available
        disabled={!selectedCity || !locationCoordinates || isLoading || isGeolocating}
        className={`w-full mt-8 relative text-white text-lg font-semibold uppercase tracking-wider rounded-xl bg-gradient-to-br from-[rgba(0,140,255,0.678)] to-[rgba(128,0,128,0.308)] shadow-[0_5px_15px_rgba(0,0,0,0.308)] border-none py-5 transition-all duration-300
          ${!selectedCity || !locationCoordinates || isLoading || isGeolocating // Use context states
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:shadow-[0_8px_25px_rgba(0,140,255,0.4)] hover:translate-y-[-2px]'
          }`}
      >
        <span className="relative">
          {/* Use context loading/geolocating states for button text/icon */}
          {isLoading || isGeolocating ? (
            <>
              <i className="fas fa-spinner fa-spin mr-2"></i>
              Generating Route...
            </>
          ) : (
            <>
              Generate Route
              <i className="fas fa-route ml-2"></i>
            </>
          )}
        </span>
      </button>
    </div>
  );
};
