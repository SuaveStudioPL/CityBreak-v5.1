import { useState, useCallback, useEffect } from 'react';
import { DayRoute } from '../../../types/attractions';

interface MapLogicProps {
  currentRoute: DayRoute | undefined;
  startLocation: google.maps.LatLngLiteral | null;
}

export const useMapLogic = ({ currentRoute, startLocation }: MapLogicProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [mapError, setMapError] = useState<string | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    try {
      setMap(map);
      
      if (currentRoute && currentRoute.path.length > 0) {
        const bounds = new google.maps.LatLngBounds();
      
        if (startLocation) {
          bounds.extend(startLocation);
        }
        
        currentRoute.attractions.forEach(attraction => bounds.extend(attraction.coordinates));
        
        map.fitBounds(bounds, {
          padding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50
          }
        });
      } else if (startLocation) {
        map.setCenter(startLocation);
        map.setZoom(14);
      }
    } catch (error) {
      console.error('Error loading map:', error);
      setMapError('Failed to initialize map properly');
    }
  }, [currentRoute, startLocation]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return { map, mapError, onLoad, onUnmount };
}; 