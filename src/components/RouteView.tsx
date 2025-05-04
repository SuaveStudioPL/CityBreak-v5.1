import React, { useState, useCallback, useRef, useMemo } from 'react'; // Removed useEffect
import L from 'leaflet';

// Import Hooks
import { useAppContext } from '../context/AppContext';
import { useRoutes } from '../hooks/useRoutes';
import { useCityData } from '../hooks/useCityData';
import { useInfoWindow, AttractionWithClickPoint } from '../hooks/useInfoWindow';
import { usePublicTransportLayer } from '../hooks/usePublicTransportLayer';

// Import Components
import { RouteHeader } from './RouteHeader';
import { RouteNavigationBar } from './RouteNavigationBar';
import { RouteMapArea } from './RouteMapArea';
// Import AttractionInfoWindow removed as it's not used
import InfoWindowPortal from './InfoWindowPortal';
import { WeatherModal, FoodDrinksModal, AttractionsModal, ToiletsModal } from './Modals';

// Import Types
import { Coordinates, Attraction } from '../types/attractions';

// Import Styles (ensure necessary styles are still available or moved)
import './map/MapControlStyles.css';
import './map/LeafletStyles.css';

interface RouteViewProps {
  selectedCity: string; // City Name
  days: number;
  startLocation: Coordinates | null; // Initial start location from App/Context
  isUsingGeoLocation: boolean; // Was the start location from geo?
  liveUserCoordinates: Coordinates | null; // Live updates if geo is used
  onBack: () => void;
}

export const RouteView: React.FC<RouteViewProps> = ({
  selectedCity: selectedCityName, // Rename prop for clarity
  days,
  startLocation: initialStartLocation,
  isUsingGeoLocation, // Receive prop
  liveUserCoordinates, // Receive prop
  onBack
}) => {
  // --- State ---
  const [showWeather, setShowWeather] = useState(false);
  const [showFoodDrinks, setShowFoodDrinks] = useState(false);
  const [showAttractions, setShowAttractions] = useState(false);
  const [showToilets, setShowToilets] = useState(false);
  // const [mapKey, setMapKey] = useState(0); // Removed: Rely on prop changes
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapInstanceRef = useRef<L.Map | null>(null); // Ref for the map instance

  // --- Hooks ---
  const { skippedAttractions, toggleSkipAttraction, isAttractionSkipped, resetSkippedAttractions } = useAppContext(); // Add resetSkippedAttractions
  const { currentCityData, allCityAttractions, cityTime, isLoading: isCityDataLoading } = useCityData(selectedCityName);
  const {
    // Standard route state (still needed for header/variant logic)
    routes, // Keep for variant list generation if needed
    activeDay,
    activeRouteVariant,
    // Custom route state & functions
    isCustomRouteMode,
    activateCustomRouteMode,
    // deactivateCustomRouteMode, // Not used directly here yet
    customRouteAttractions: selectedCustomAttractions, // Renamed for clarity
    addAttractionToCustomRoute,
    removeAttractionFromCustomRoute,
    currentEffectiveRoute, // Use this for map display
    // Loading & Refresh state
    isLoading: isRouteLoading,
    routeNeedsRefresh,
    refreshRoutes,
    markRouteNeedsRefresh,
    wrappedSetActiveDay,
    wrappedSetActiveRouteVariant,
    resetRouteState // Add resetRouteState
  } = useRoutes({ selectedCity: selectedCityName, days, startLocation: initialStartLocation });

  const {
    selectedAttraction: selectedAttractionWithPoint,
    setSelectedAttraction: setSelectedAttractionWithPoint,
    isInfoWindowOpen,
    attractionImageUrl,
    handleAttractionClick,
    handleCloseInfoWindow,
  } = useInfoWindow();

  const {
    activePtRouteAttractionId,
    isPtLoading,
    initializeMarkerGroup,
    handleDrawPublicTransportRoute,
    handleClosePublicTransportRoute,
  } = usePublicTransportLayer({ mapInstanceRef, startLocation: initialStartLocation }); // Pass map ref and start location

  // --- Derived State ---
  const selectedAttraction = useMemo(() => {
    if (!selectedAttractionWithPoint) return null;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { clickPoint, ...baseAttraction } = selectedAttractionWithPoint;
    return baseAttraction as Attraction;
  }, [selectedAttractionWithPoint]);

  // --- Derived State based on Mode ---

  // Use currentEffectiveRoute provided by useRoutes hook
  const currentRouteAttractions = useMemo(() => currentEffectiveRoute?.attractions || [], [currentEffectiveRoute]);
  const currentRouteSegments = useMemo(() => currentEffectiveRoute?.segments || [], [currentEffectiveRoute]);

  // Determine which attractions to show on the map
  const allAttractionsForMap = useMemo(() => {
    if (isCustomRouteMode) {
      // In custom mode, show ALL attractions for the city
      return allCityAttractions;
    } else {
      // In standard mode, show attractions on the current route + skipped ones not on the route
      const currentAttractionIds = currentRouteAttractions.map(a => a.id);
      const skippedAttractionsToDisplay = allCityAttractions.filter(attraction =>
        skippedAttractions.includes(attraction.id) &&
        !currentAttractionIds.includes(attraction.id)
      );
      return [...currentRouteAttractions, ...skippedAttractionsToDisplay];
    }
  }, [isCustomRouteMode, allCityAttractions, currentRouteAttractions, skippedAttractions]);

  // Variants for the header (only relevant for day 1 standard mode)
  const routeVariantsForHeader = useMemo(() => {
    // ZAWSZE pokazuj wszystkie warianty (również w trybie custom), aby umożliwić powrót
    if (days === 1) {
      return [...new Set(routes.map(route => route.routeVariant).filter(Boolean) as string[])];
    }
    // Multi-day: nie pokazuj wariantów, obsługuje dni
    return [];
  }, [days, routes]); // Usunięto isCustomRouteMode z zależności

  // --- Callbacks ---
  // --- Callbacks ---
  const handleDayChange = useCallback((day: number) => {
    wrappedSetActiveDay(day);
    handleClosePublicTransportRoute();
  }, [wrappedSetActiveDay, handleClosePublicTransportRoute]);

  const handleRouteVariantChange = useCallback((variant: string) => {
    // Wywołaj wrappedSetActiveRouteVariant, która prawidłowo obsługuje przełączanie między trybami
    // Ta funkcja resetuje tryb własnej trasy przy przełączaniu na standardowe warianty
    wrappedSetActiveRouteVariant(variant);
    handleClosePublicTransportRoute();
  }, [wrappedSetActiveRouteVariant, handleClosePublicTransportRoute]);

  // Removed useEffect that forced mapKey update on custom attraction change


  const handleMapAttractionClick = useCallback((attraction: AttractionWithClickPoint) => {
    setSelectedAttractionWithPoint(attraction);
    handleAttractionClick(attraction); // From useInfoWindow
  }, [handleAttractionClick, setSelectedAttractionWithPoint]);

  const handleSkipAttractionCallback = useCallback(() => {
    if (selectedAttraction) {
      // Skipping only applies to standard routes
      if (!isCustomRouteMode) {
        toggleSkipAttraction(selectedAttraction.id);
        markRouteNeedsRefresh(); // Mark standard route for refresh
        handleCloseInfoWindow();
      }
    }
  }, [selectedAttraction, toggleSkipAttraction, markRouteNeedsRefresh, handleCloseInfoWindow, isCustomRouteMode]);

  const handleToggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  // New handler for the Home button
  const handleGoHome = useCallback(() => {
    console.log("Navigating home and resetting state...");
    resetSkippedAttractions(); // Reset skipped attractions in context
    resetRouteState(); // Reset route state in hook
    onBack(); // Call the original onBack function to navigate
  }, [resetSkippedAttractions, resetRouteState, onBack]);

  // Removed navBarRef and useEffect for CSS variable

  // --- Render ---
  if (isCityDataLoading || !currentCityData) {
    // Show loading state while city data is fetched
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mb-4 mx-auto"></div>
          <p>Loading city data...</p>
        </div>
      </div>
    );
  }

  if (!initialStartLocation) {
    // Handle case where start location is missing (should ideally not happen if App validates)
     return (
       <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
         <div className="text-white text-center">Error: Start location not provided.</div>
       </div>
     );
   }

  return (
    <div className={`flex flex-col h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 ${isFullscreen ? 'fixed inset-0 z-[1100]' : ''}`}>
      {/* Header (conditionally rendered or adjusted based on fullscreen) */}
      {!isFullscreen && (
        <RouteHeader
          selectedCity={selectedCityName}
          days={days}
          activeDay={activeDay}
          activeRouteVariant={activeRouteVariant}
          routeVariantsForCurrentDay={routeVariantsForHeader}
          onDayChange={handleDayChange}
          onRouteVariantChange={handleRouteVariantChange}
          activateCustomRouteMode={activateCustomRouteMode}
        />
      )}

      {/* Map Area */}
       <RouteMapArea
         // mapKey={mapKey} // Removed
         startLocation={initialStartLocation}
         isUsingGeoLocation={isUsingGeoLocation} // Pass down
         liveUserCoordinates={liveUserCoordinates} // Pass down
         // Attractions to display on map (all in custom mode, filtered in standard)
         attractions={allAttractionsForMap}
        // Active attractions (those part of the calculated route, standard or custom)
        activeAttractions={currentRouteAttractions}
        segments={currentRouteSegments} // Segments for the current route (standard or custom)
        onAttractionClick={handleMapAttractionClick}
        skippedAttractions={skippedAttractions} // Still needed for styling skipped markers
        isCustomRouteMode={isCustomRouteMode} // Pass mode to map
        cityTime={cityTime}
        routeNeedsRefresh={routeNeedsRefresh}
        onRefreshRoute={refreshRoutes} // Pass refresh function from useRoutes
        isLoading={isRouteLoading} // Pass route loading state
        // PT Layer Integration
        activePtRouteAttractionId={activePtRouteAttractionId}
        initializeMarkerGroup={initializeMarkerGroup} // Pass initializer from PT hook
        isPtLoading={isPtLoading} // Pass PT loading state
        // Pass map instance ref and fullscreen state/toggle
        mapInstanceRef={mapInstanceRef} // Pass the ref down
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        // selectedCustomAttractions={selectedCustomAttractions} // Prop removed from RouteMapArea
      />

      {/* Navigation Bar (conditionally rendered) */}
      {!isFullscreen && (
        // Removed div wrapper and ref
        <RouteNavigationBar
          onBack={handleGoHome} // Use the new handler for the Home button
          onShowWeather={() => setShowWeather(true)}
          onShowFoodDrinks={() => setShowFoodDrinks(true)}
          onShowAttractions={() => setShowAttractions(true)}
          // Removed duplicate props below
          // onShowFoodDrinks={() => setShowFoodDrinks(true)}
          // onShowAttractions={() => setShowAttractions(true)}
          onShowToilets={() => setShowToilets(true)}
        />
      )}

      {/* Info Window - używamy nowego komponentu InfoWindowPortal */}
      {selectedAttraction && isInfoWindowOpen && (
        <InfoWindowPortal
          attraction={selectedAttraction}
          cityTime={cityTime}
          isOpen={isInfoWindowOpen}
          imageUrl={attractionImageUrl}
          onClose={handleCloseInfoWindow}
          onDrawPublicTransportRoute={() => handleDrawPublicTransportRoute(selectedAttraction)}
          onClosePublicTransportRoute={handleClosePublicTransportRoute}
          activePtRouteAttractionId={activePtRouteAttractionId}
          onSkipAttraction={handleSkipAttractionCallback} // Handles mode internally
          isSkipped={isAttractionSkipped(selectedAttraction.id)} // Still needed for standard mode
          position={selectedAttractionWithPoint?.clickPoint}
          // Custom Route Props for InfoWindow
          isCustomRouteMode={isCustomRouteMode}
          customRouteAttractions={selectedCustomAttractions} // Pass the list of selected attractions
          onAddToCustomRoute={addAttractionToCustomRoute}
          onRemoveFromCustomRoute={removeAttractionFromCustomRoute}
        />
      )}

      {/* Modals */}
      <WeatherModal show={showWeather} onClose={() => setShowWeather(false)} city={selectedCityName} />
      <FoodDrinksModal show={showFoodDrinks} onClose={() => setShowFoodDrinks(false)} city={selectedCityName} />
      {/* Pass current *effective* route attractions to the modal */}
      <AttractionsModal show={showAttractions} onClose={() => setShowAttractions(false)} city={selectedCityName} attractions={currentRouteAttractions} />
      <ToiletsModal show={showToilets} onClose={() => setShowToilets(false)} city={selectedCityName} userLocation={initialStartLocation} />
    </div>
  );
};

export default RouteView; // Ensure default export if it was there before
