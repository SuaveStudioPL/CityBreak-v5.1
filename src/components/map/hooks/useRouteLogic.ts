import { useState, useEffect } from 'react';
import { generateRoute } from '../../../utils/routeGenerator';
import { DayRoute } from '../../../types/attractions';
import { Coordinates } from '../../../types/common';

export const useRouteLogic = (
  selectedCity: string,
  initialStartLocation: Coordinates | null,
  days: number
) => {
  const [routes, setRoutes] = useState<DayRoute[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleRoutes, setVisibleRoutes] = useState<DayRoute[]>([]);
  const [activeDay, setActiveDay] = useState(1);
  const [showAllDays, setShowAllDays] = useState(false);

  useEffect(() => {
    if (!initialStartLocation || !selectedCity) return;
    
    setIsLoading(true);
    try {
      generateRoute(selectedCity, initialStartLocation, days)
        .then(generatedRoutes => {
          setRoutes(generatedRoutes);
        })
        .catch(error => {
          console.error('Error generating routes:', error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      console.error('Error setting up route generation:', error);
      setIsLoading(false);
    }
  }, [selectedCity, initialStartLocation, days]);

  useEffect(() => {
    if (routes.length > 0) {
      setVisibleRoutes(showAllDays ? routes : [routes[activeDay - 1]]);
    }
  }, [showAllDays, activeDay, routes]);

  return {
    routes,
    isLoading,
    visibleRoutes,
    activeDay,
    showAllDays,
    setActiveDay,
    setShowAllDays
  };
}; 