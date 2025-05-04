import React from 'react';
import logoStyles from './Logo.module.css'; // Assuming logo styles are needed

interface RouteHeaderProps {
  selectedCity: string;
  days: number;
  activeDay: number;
  activeRouteVariant?: string; // Can be 'custom'
  routeVariantsForCurrentDay: string[]; // Standard variants
  onDayChange: (day: number) => void;
  onRouteVariantChange: (variant: string) => void; // For standard variants
  // Add new props for custom mode
  // isCustomRouteMode: boolean; // Removed as it's not read
  activateCustomRouteMode: () => void;
  // deactivateCustomRouteMode: () => void; // Potentially needed later?
}

export const RouteHeader: React.FC<RouteHeaderProps> = ({
  selectedCity,
  days,
  activeDay,
  activeRouteVariant,
  routeVariantsForCurrentDay,
  onDayChange,
  onRouteVariantChange,
  // Destructure new props
  // isCustomRouteMode, // Removed
  activateCustomRouteMode,
}) => {

  // const allOptionsForDay1 = days === 1 ? [...routeVariantsForCurrentDay, 'custom'] : []; // Removed unused variable

  const handleOptionClick = (option: string) => {
    if (option === 'custom') {
      activateCustomRouteMode();
    } else {
      // Zawsze używaj onRouteVariantChange, która korzysta z wrappedSetActiveRouteVariant
      // Ta funkcja prawidłowo obsługuje przełączanie z trybu własnej trasy na standardowe warianty
      onRouteVariantChange(option);
    }
  };


  return (
    <div className="bg-slate-900 border-b-2 border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div>
          <img src="/icons/CityBreak.png" alt="CityBreak" className={logoStyles.logo} />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <h1 className="text-lg sm:text-xl font-bold text-white">{selectedCity}</h1>
          <div className="flex items-center gap-1 sm:gap-2"> {/* Added items-center */}
            {/* Standard Day/Variant Buttons */}
            {days > 1 && ( // Multi-day view: Show day buttons
              Array.from({ length: days }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => onDayChange(i + 1)} // Reverted: Let useRoutes handle mode switching via wrappedSetActiveDay
                  className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg transition-all border-2 text-xs sm:text-base text-white ${
                    activeDay === i + 1 && activeRouteVariant !== 'custom'
                      ? 'bg-gradient-to-br from-[rgba(0,140,255,0.678)] to-[rgba(128,0,128,0.308)] border-blue-400'
                      : 'bg-slate-800 hover:bg-slate-700 border-slate-600'
                  }`}
                >
                  Day {i + 1}
                </button>
              ))
            )}
            {days === 1 && routeVariantsForCurrentDay.length > 0 && ( // Single-day view with variants: Show variant buttons
              routeVariantsForCurrentDay.map(variant => (
                <button
                  key={variant}
                  onClick={() => handleOptionClick(variant)} // Use handleOptionClick
                  className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg transition-all border-2 text-xs sm:text-base text-white ${
                    activeRouteVariant === variant && activeRouteVariant !== 'custom' // Check activeRouteVariant directly and ensure custom mode is not active
                      ? 'bg-gradient-to-br from-[rgba(0,140,255,0.678)] to-[rgba(128,0,128,0.308)] border-blue-400'
                      : 'bg-slate-800 hover:bg-slate-700 border-slate-600'
                  }`}
                >
                  {/* Use shorter labels on small screens */}
                  <span className="hidden sm:inline">{variant === 'Short distance route' ? 'Nearby attractions' : variant}</span>
                  <span className="sm:hidden">{variant === 'Short distance route' ? 'Nearby attractions' : variant.replace(' route', '').replace(' - full', '').replace(' attractions', '')}</span>
                </button>
              ))
            )}

            {/* "Create your route" Button (Always visible, styled differently when active) */}
            <button
              key="custom"
              onClick={() => handleOptionClick('custom')}
              className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-lg transition-all border-2 text-xs sm:text-base text-white ${
                activeRouteVariant === 'custom' // Check if custom mode is active
                  ? 'bg-gradient-to-br from-[rgba(100,0,150,0.8)] to-[rgba(50,0,75,0.5)] border-purple-400' // Active custom style
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-600' // Inactive style
              }`}
            >
              <span className="hidden sm:inline">Create your route</span>
              <span className="sm:hidden">Create your route</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
