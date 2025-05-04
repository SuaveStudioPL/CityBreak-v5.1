import { useState, useCallback, useEffect, useMemo } from 'react';
import { generateRoute, getRouteSegment, optimizeAttractionOrder, generateSimpleRoute } from '../utils/routeGenerator';
import { Coordinates, Attraction, RouteSegment, DayRoute } from '../types/attractions';
import { useAppContext } from '../context/AppContext';

interface Route {
  day: number;
  routeVariant?: string | undefined;
  attractions: Attraction[];
  segments: RouteSegment[];
  path: Coordinates[];
}

// Define the structure for the custom route object
interface CustomRoute extends Omit<DayRoute, 'day' | 'routeVariant'> {}


interface UseRoutesProps {
  selectedCity: string;
  days: number;
  startLocation: Coordinates | null;
}

export const useRoutes = ({ selectedCity, days, startLocation }: UseRoutesProps) => {
  const { skippedAttractions } = useAppContext();
  const [routes, setRoutes] = useState<Route[]>([]);
  const [activeDay, setActiveDay] = useState(1);
  const [activeRouteVariant, setActiveRouteVariant] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [routeNeedsRefresh, setRouteNeedsRefresh] = useState(false);
  const [isCustomRouteMode, setIsCustomRouteMode] = useState(false);
  const [selectedCustomAttractions, setSelectedCustomAttractions] = useState<Attraction[]>([]);
  const [calculatedCustomRoute, setCalculatedCustomRoute] = useState<CustomRoute | null>(null);
  const [isRecalculating, setIsRecalculating] = useState(false);


  // --- Custom Route Calculation ---
  const recalculateCustomRoute = useCallback(async (attractionsToCalculate: Attraction[]) => {
    if (isRecalculating) return;
    if (!startLocation || attractionsToCalculate.length === 0) {
      setCalculatedCustomRoute(null);
      return;
    }
    setIsRecalculating(true);
    console.log("[useRoutes] Starting custom route recalculation...");
    try {
      const orderedAttractions = optimizeAttractionOrder(attractionsToCalculate, startLocation);
      const segments: RouteSegment[] = [];
      let previousLocation = startLocation;
      let combinedPath: Coordinates[] = [];
      for (const attraction of orderedAttractions) {
        try {
          const segment = await getRouteSegment(previousLocation, attraction.coordinates);
          segments.push(segment);
          combinedPath = combinedPath.concat(segment.path);
          previousLocation = attraction.coordinates;
        } catch (error) { console.error(`Error getting segment: ${error}`); }
      }
      const finalAttractions = orderedAttractions.map((att: Attraction, index: number) => ({ ...att, order: index + 1 }));
      setCalculatedCustomRoute({ attractions: finalAttractions, segments, path: combinedPath });
      console.log("[useRoutes] Custom route recalculation finished.");
    } catch (error) {
      console.error("Error recalculating custom route:", error);
      setCalculatedCustomRoute(null);
    } finally {
      setIsRecalculating(false);
    }
  }, [startLocation, isRecalculating]);

  // Effect to recalculate custom route when selections change
  useEffect(() => {
    if (isCustomRouteMode) {
      recalculateCustomRoute(selectedCustomAttractions);
    }
  }, [isCustomRouteMode, selectedCustomAttractions, recalculateCustomRoute]);


  // --- Standard Route Fetching (for initial load & refresh) ---
  const fetchRoutes = useCallback(async (variantToPreserve?: string) => {
    // This fetch is for initial load and explicit refresh ONLY
    if (isCustomRouteMode || !startLocation || !selectedCity) {
      console.log(`[useRoutes fetchRoutes] Skipping initial/refresh fetch (isCustom: ${isCustomRouteMode}, startLoc: ${!!startLocation}, city: ${selectedCity})`);
      return;
    }
    console.log(`[useRoutes fetchRoutes] Initial/Refresh Fetching for day ${activeDay}, variant ${variantToPreserve || 'default'}`);
    setIsLoading(true);
    setRouteNeedsRefresh(false);
    try {
      // Special case: refresh Top variant without adding new attractions
      if (days === 1 && variantToPreserve && (variantToPreserve === 'Top 4 attractions' || variantToPreserve === 'Top 5 attractions')) {
        console.log(`[useRoutes fetchRoutes] Refreshing top variant ${variantToPreserve} without refilling attractions.`);
        const prev = routes.find(r => r.routeVariant === variantToPreserve);
        const remaining = prev ? prev.attractions.filter(a => !skippedAttractions.includes(a.id)) : [];
        if (remaining.length > 0) {
          const simpleRoute = await generateSimpleRoute(remaining, startLocation);
          if (simpleRoute) {
            simpleRoute.day = 1;
            simpleRoute.routeVariant = variantToPreserve;
            setRoutes([simpleRoute]);
          }
        } else {
          setRoutes([]);
        }
        return;
      }
      let generatedRoutes: DayRoute[] = await generateRoute(selectedCity, startLocation, days, undefined, skippedAttractions);
      if (days === 1) {
        const topRoutes = await generateRoute(selectedCity, startLocation, days, 'top-5', skippedAttractions);
        if (topRoutes.length > 0) generatedRoutes = [...generatedRoutes, ...topRoutes];
      }
      setRoutes(generatedRoutes);

      // Set active variant/day *after* routes are fetched
      if (days === 1) {
        const availableVariants = generatedRoutes.map(r => r.routeVariant).filter(Boolean) as string[];
        const finalVariant = (variantToPreserve && availableVariants.includes(variantToPreserve))
                             ? variantToPreserve
                             : (availableVariants[0] || undefined);
        setActiveRouteVariant(finalVariant);
        setActiveDay(1);
        console.log(`[useRoutes fetchRoutes] Single-day. Set variant: ${finalVariant}`);
      } else {
        // Multi-day: Ensure variant is cleared after fetch
        console.log(`[useRoutes fetchRoutes] Multi-day. Using activeDay: ${activeDay}. Ensuring variant cleared.`);
        if (activeRouteVariant !== undefined) {
             setActiveRouteVariant(undefined);
         }
      }
    } catch (error) {
      console.error('[useRoutes fetchRoutes] Error:', error);
      setRoutes([]);
    } finally {
      setIsLoading(false);
    }
  }, [selectedCity, startLocation, days, skippedAttractions, isCustomRouteMode, activeDay, activeRouteVariant]);


  // --- Effects ---
  // Effect to clear custom state when entering custom mode
  useEffect(() => {
    if (isCustomRouteMode) {
      console.log("[useRoutes Effect] Entering custom mode, clearing calculation state.");
      setCalculatedCustomRoute(null);
      setSelectedCustomAttractions([]);
    }
    // No fetch logic here anymore
  }, [isCustomRouteMode]);

  // Effect for initial load/core param changes
  useEffect(() => {
    console.log("[useRoutes Effect] Initial load / core params changed.");
    if (!isCustomRouteMode) {
      fetchRoutes(); // Call main fetch for initial load
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity, startLocation, days]); // Core dependencies

  // Effect to refresh standard routes when skipped attractions change
  useEffect(() => {
    if (routeNeedsRefresh && !isCustomRouteMode) {
      console.log("[useRoutes Effect - Refresh] Refresh needed, checking if refresh is necessary.");
      // Only explicit refresh should generate new routes
      if (routes.length === 0) {
        console.log("[useRoutes Effect - Refresh] No routes available, generating initial routes.");
        fetchRoutes(days === 1 ? activeRouteVariant : undefined);
      }
    } else if (routeNeedsRefresh && isCustomRouteMode) {
      console.log("[useRoutes Effect - Refresh] Skipping standard refresh (custom mode).");
      setRouteNeedsRefresh(false);
    }
  }, [routeNeedsRefresh, isCustomRouteMode, fetchRoutes, days, activeRouteVariant, skippedAttractions]);


  // --- Mode Activation ---
  const activateCustomRouteMode = useCallback(() => {
    console.log("[useRoutes] Activating custom mode.");
    setActiveRouteVariant('custom');
    setActiveDay(1);
    setIsCustomRouteMode(true); // Triggers effect to clear state
  }, []);


  // --- Custom Route Item Management ---
  const addAttractionToCustomRoute = useCallback((attraction: Attraction) => {
    setSelectedCustomAttractions(prev => prev.some(a => a.id === attraction.id) ? prev : [...prev, { ...attraction }]);
  }, []);

  const removeAttractionFromCustomRoute = useCallback((attractionId: string) => {
    setCalculatedCustomRoute(null);
    setSelectedCustomAttractions(prev => prev.filter(a => a.id !== attractionId));
  }, []);

  // --- Reset Function ---
  const resetRouteState = useCallback(() => {
    console.log("[useRoutes] Resetting route state.");
    setIsCustomRouteMode(false);
    setSelectedCustomAttractions([]);
    setCalculatedCustomRoute(null);
    setActiveDay(1);
    setActiveRouteVariant(undefined);
    setRoutes([]); // Clear existing routes
    setRouteNeedsRefresh(false); // Reset refresh flag
    // No need to call fetchRoutes here, it will be triggered by core param changes if needed
  }, []);


  // --- Public Interface ---
  const currentEffectiveRoute = useMemo(() => {
    if (isCustomRouteMode) {
      return calculatedCustomRoute ? { ...calculatedCustomRoute, day: 1, routeVariant: 'custom' } : null;
    } else {
      if (days === 1 && activeRouteVariant) {
        return routes.find(route => route.routeVariant === activeRouteVariant) || null;
      } else {
        return routes.find(route => route.day === activeDay) || null;
      }
    }
  }, [isCustomRouteMode, calculatedCustomRoute, days, activeRouteVariant, routes, activeDay]);

  // Wrapped setters handle mode switching and trigger fetches directly
  const wrappedSetActiveDay = useCallback((day: number) => {
    // ZAWSZE resetuj tryb własnej trasy przy zmianie dnia (niezależnie od trybu)
    setIsCustomRouteMode(false);
    setCalculatedCustomRoute(null);
    setSelectedCustomAttractions([]);
    setActiveDay(day);
    setActiveRouteVariant(undefined);
    console.log(`[useRoutes wrappedSetActiveDay] Zmieniono dzień na ${day} i zresetowano wariant trasy.`);
  // Dependencies for the outer useCallback
  }, [isCustomRouteMode, days, selectedCity, startLocation, skippedAttractions]);


  const wrappedSetActiveRouteVariant = useCallback((variant: string | undefined) => {
    if (variant === 'custom') {
        activateCustomRouteMode();
    } else {
        // ZAWSZE resetuj tryb własnej trasy przy zmianie wariantu
        setIsCustomRouteMode(false);
        setCalculatedCustomRoute(null);
        setSelectedCustomAttractions([]);
        // Selecting a standard variant
        if (isCustomRouteMode) {
            console.log(`[useRoutes wrappedSetActiveRouteVariant] Exiting custom mode for variant ${variant}.`);

            // Set state synchronously first
            setIsCustomRouteMode(false);
            setCalculatedCustomRoute(null);
            setSelectedCustomAttractions([]);
            setActiveRouteVariant(variant); // Set target variant
            if (days === 1) setActiveDay(1); // Ensure day 1
            setRouteNeedsRefresh(false); // Prevent immediate refresh trigger

            // USUNIĘTO: Nie wywołujemy ponownego generowania tras przy zmianie wariantu
            // To zapobiega automatycznej zmianie trasy po jej wygenerowaniu
            // fetchRoutes(variant); // Removed this line to prevent automatic route regeneration
        } else {
            // Standard mode
            console.log(`[useRoutes wrappedSetActiveRouteVariant] Standard mode, setting variant: ${variant}`);
            setActiveRouteVariant(variant);
            if (days === 1) setActiveDay(1);
        }
    }
  // Dependencies for the outer useCallback
  }, [isCustomRouteMode, activateCustomRouteMode, days]);


  const refreshRoutes = useCallback(() => {
    console.log("[useRoutes] Manual refresh requested.");
    if (!isCustomRouteMode) {
        // Przy jawnym żądaniu odświeżenia ustawiamy flagę, która pozwoli na faktyczne odświeżenie
        setRouteNeedsRefresh(true);
        // Bezpośrednio wywołujemy fetchRoutes, ponieważ jest to jawne żądanie odświeżenia
        fetchRoutes(days === 1 ? activeRouteVariant : undefined);
    } else {
        recalculateCustomRoute(selectedCustomAttractions); // Recalculate custom
    }
  }, [isCustomRouteMode, recalculateCustomRoute, selectedCustomAttractions, fetchRoutes, days, activeRouteVariant]);

  // Nowa funkcja do oznaczania, że trasa wymaga odświeżenia, ale bez faktycznego odświeżania
  // Używana głównie przy zmianie skippedAttractions

  const markRouteNeedsRefresh = useCallback(() => {
      if (!isCustomRouteMode) {
        setRouteNeedsRefresh(true);
      }
  }, [isCustomRouteMode]);


  return {
    routes,
    currentEffectiveRoute,
    isCustomRouteMode,
    activateCustomRouteMode,
    customRouteAttractions: selectedCustomAttractions,
    addAttractionToCustomRoute,
    removeAttractionFromCustomRoute,
    resetRouteState, // Expose the reset function
    isLoading,
    routeNeedsRefresh,
    refreshRoutes,
    markRouteNeedsRefresh,
    activeDay, // Export activeDay
    activeRouteVariant, // Export activeRouteVariant
    wrappedSetActiveDay,
    wrappedSetActiveRouteVariant
  };
};
