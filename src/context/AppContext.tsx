import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from 'react';
import { Coordinates } from '../types/attractions';

// Define the shape of our context state
interface AppContextState {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  location: string;
  setLocation: (location: string) => void;
  locationCoordinates: Coordinates | null;
  setLocationCoordinates: (coordinates: Coordinates | null, isGeo?: boolean) => void; // Add optional flag
  days: number;
  setDays: (days: number) => void;
  isUsingGeoLocation: boolean; // Track if initial location was from geo
  liveUserCoordinates: Coordinates | null; // Track live updates
  showRouteView: boolean;
  setShowRouteView: (show: boolean) => void;
  showError: boolean;
  setShowError: (show: boolean) => void;
  showSuccess: boolean;
  setShowSuccess: (show: boolean) => void;
  showLegalPage: boolean;
  setShowLegalPage: (show: boolean) => void;
  skippedAttractions: string[];
  toggleSkipAttraction: (attractionId: string) => void;
  isAttractionSkipped: (attractionId: string) => boolean;
  resetSkippedAttractions: () => void; // Add this line
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isGeolocating: boolean;
  setIsGeolocating: (isGeolocating: boolean) => void;
  onGenerateRoute: () => void;
  // No need for explicit start/update functions, handled internally
}

// Create the context with a default undefined value
const AppContext = createContext<AppContextState | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState('');
  const [location, setLocation] = useState('');
  const [locationCoordinates, setLocationCoordinatesState] = useState<Coordinates | null>(null);
  const [days, setDays] = useState(1);
  const [showRouteView, setShowRouteView] = useState(false);
  const [isUsingGeoLocation, setIsUsingGeoLocation] = useState(false); // State for tracking geo usage
  const [liveUserCoordinates, setLiveUserCoordinates] = useState<Coordinates | null>(null); // State for live updates
  const watchIdRef = useRef<number | null>(null); // Ref to store watchPosition ID
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showLegalPage, setShowLegalPage] = useState(false);
  const [skippedAttractions, setSkippedAttractions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeolocating, setIsGeolocating] = useState(false); // Still needed for button state

  // --- Geolocation Watch Logic ---
  useEffect(() => {
    // Cleanup function to clear watchPosition when provider unmounts
    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        console.log('Geolocation watch cleared on unmount.');
      }
    };
  }, []);

  // Add a ref to track the last update time for throttling
  const lastUpdateTimeRef = useRef<number>(0);

  const handleLocationUpdate = (position: GeolocationPosition) => {
    const currentTime = Date.now();
    // Throttle updates to once per second (1000ms)
    if (currentTime - lastUpdateTimeRef.current < 1000) {
      return; // Skip this update if it's too soon after the last one
    }

    lastUpdateTimeRef.current = currentTime;
    const coords: Coordinates = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    console.log('Live location update:', coords);
    setLiveUserCoordinates(coords);
    // We only update live coordinates here, not the initial locationCoordinates
  };

  const handleLocationError = (error: GeolocationPositionError) => {
    console.error('Error watching geolocation:', error);
    // Optionally handle errors, maybe stop watching?
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
      setIsUsingGeoLocation(false); // Stop tracking if watch fails
      setLiveUserCoordinates(null);
      console.log('Geolocation watch stopped due to error.');
    }
  };

  // Modified setLocationCoordinates to handle starting/stopping the watch
  const setLocationCoordinates = useCallback((coordinates: Coordinates | null, isGeo: boolean = false) => {
    setLocationCoordinatesState(coordinates);
    setIsUsingGeoLocation(isGeo); // Set based on the flag

    // Clear existing watch if setting a non-geo location or null
    if (!isGeo && watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
      setLiveUserCoordinates(null); // Clear live coords
      console.log('Geolocation watch cleared because location changed to non-geo.');
    }

    // Start watching only if it's a geo location and not already watching
    if (isGeo && coordinates && watchIdRef.current === null) {
      console.log('Starting geolocation watch...');
      setLiveUserCoordinates(coordinates); // Set initial live coords
      watchIdRef.current = navigator.geolocation.watchPosition(
        handleLocationUpdate,
        handleLocationError,
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else if (!isGeo) {
        setLiveUserCoordinates(null); // Ensure live coords are null if not geo
    }
  }, []); // Dependencies managed internally

  const resetSkippedAttractions = useCallback(() => {
    setSkippedAttractions([]);
  }, []);

  const toggleSkipAttraction = useCallback((attractionId: string) => {
    setSkippedAttractions(prev => {
      if (prev.includes(attractionId)) {
        return prev.filter(id => id !== attractionId);
      } else {
        return [...prev, attractionId];
      }
    });
  }, []);

  const isAttractionSkipped = useCallback(
    (attractionId: string) => skippedAttractions.includes(attractionId),
    [skippedAttractions]
  );

  const onGenerateRoute = useCallback(() => {
    if (!selectedCity || !location || !locationCoordinates || days < 1) {
      console.log('Route generation validation failed:', {
        selectedCity,
        location,
        locationCoordinates,
        days
      });
      setShowError(true);
      return;
    }
    setShowRouteView(true);
  }, [selectedCity, location, locationCoordinates, days, setShowError, setShowRouteView]);

  const value = {
    selectedCity,
    setSelectedCity,
    location,
    setLocation,
    locationCoordinates, // The initial/selected start location
    setLocationCoordinates, // The function to set initial location (now handles watch)
    days,
    setDays,
    isUsingGeoLocation, // Flag indicating if start was geo
    liveUserCoordinates, // Live coordinates if tracking
    showRouteView,
    setShowRouteView,
    showError,
    setShowError,
    showSuccess,
    setShowSuccess,
    showLegalPage,
    setShowLegalPage,
    skippedAttractions,
    toggleSkipAttraction,
    isAttractionSkipped,
    resetSkippedAttractions, // Add this line
    isLoading,
    setIsLoading,
    isGeolocating,
    setIsGeolocating,
    onGenerateRoute,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook for using the context
export const useAppContext = (): AppContextState => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
