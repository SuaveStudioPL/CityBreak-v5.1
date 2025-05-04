import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { CitySelector } from './CitySelector';
import { LocationSelector } from './LocationSelector';
import { DaysSelector } from './DaysSelector';

/**
 * Main search module component that combines city selection, location input, and days selection
 */
export const SearchModule: React.FC = () => {
  const { 
    selectedCity, 
    location, 
    isLoading, 
    isGeolocating, 
    onGenerateRoute 
  } = useAppContext();

  return (
    <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl p-8 mb-16 shadow-2xl border-2 border-slate-600">
      <div className="flex flex-col gap-6">
        {/* City Selection */}
        <CitySelector />

        {/* Location Selection */}
        <LocationSelector />

        {/* Days Selection */}
        <DaysSelector />
      </div>

      {/* Generate Route Button */}
      <button
        onClick={onGenerateRoute}
        disabled={!selectedCity || !location || isLoading || isGeolocating}
        className={`w-full mt-8 relative text-white text-lg font-semibold uppercase tracking-wider rounded-xl bg-gradient-to-br from-[rgba(0,140,255,0.678)] to-[rgba(128,0,128,0.308)] shadow-[0_5px_15px_rgba(0,0,0,0.308)] border-none py-5 transition-all duration-300 
          ${!selectedCity || !location || isLoading || isGeolocating
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:shadow-[0_8px_25px_rgba(0,140,255,0.4)] hover:translate-y-[-2px]'
          }`}
      >
        <span className="relative">
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

      {/* Affiliate Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        {/* Booking.com Button */}
        <a 
          href="https://trip.tp.st/O1AFEQFx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center text-white text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md border-none py-3 px-4 transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px]"
        >
          <i className="fas fa-bed mr-2"></i>
          Book Hotels & Flights
        </a>

        {/* Airalo Button */}
        <a 
          href="https://airalo.tp.st/FvrguH6S" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 text-center text-white text-base font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 shadow-md border-none py-3 px-4 transition-all duration-300 hover:shadow-lg hover:translate-y-[-1px]"
        >
          <i className="fas fa-sim-card mr-2"></i>
          Get Cheap Travel Internet
        </a>
      </div>

      {/* Attribution Text */}
      <p className="text-center text-xs text-slate-400 mt-4">
        Powered by Trip.com & Airalo
      </p>
    </div>
  );
};
