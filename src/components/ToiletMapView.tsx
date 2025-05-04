import React, { useState, useEffect, useCallback, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map/LeafletStyles.css'; // Keep this for general Leaflet styles
import './map/MapControlStyles.css'; // Import the styles for zoom-control-button
import { Toilet, getPublicToilets, getWalkingDirectionsToToilet } from '../services/ToiletService';
import ToiletInfoWindow from './ToiletInfoWindow';
import { getCityCoordinates } from '../services/WeatherService';
import { useAppContext } from '../context/AppContext'; // Import useAppContext

// Manually import Leaflet icons to fix webpack issues
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default Leaflet icons
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Import icons from shared utils
import { createUserLocationIcon, createWalkingIcon } from '../utils/locationIcons';

// Use shared icons
const walkingIcon = createWalkingIcon();
const userIcon = createUserLocationIcon();

interface ToiletMapViewProps {
  city: string;
  userLocation: { lat: number; lng: number } | null;
}

interface ToiletWithClickPoint extends Toilet {
  clickPoint?: { x: number; y: number };
  id: string;
  name: string;
  coordinates: { lat: number; lng: number };
}

const ToiletMapView: React.FC<ToiletMapViewProps> = ({ city, userLocation }) => {
  const { liveUserCoordinates, isUsingGeoLocation } = useAppContext(); // Get live coordinates and flag
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const toiletMarkersRef = useRef<L.LayerGroup | null>(null);
  const walkingPathRef = useRef<L.Polyline | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const infoWindowRef = useRef<HTMLDivElement>(null);

  // State for toilet info window
  const [selectedToilet, setSelectedToilet] = useState<ToiletWithClickPoint | null>(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [isLoadingDirections, setIsLoadingDirections] = useState(false);
  const [walkingDirections, setWalkingDirections] = useState<{ distance: string; duration: string } | null>(null);
  const [directionsError, setDirectionsError] = useState<string | null>(null);
  const [cityCoords, setCityCoords] = useState<{lat: number, lng: number} | null>(null);

  // Fixed info window position at bottom right corner of the map
  const infoWindowPosition = {
    bottom: '20px',
    right: '20px'
  };

  // State to track walking icon markers
  const [walkingIconMarkers, setWalkingIconMarkers] = useState<L.Marker[]>([]);

  // Track the last time we updated the user marker to prevent too frequent updates
  const lastUserMarkerUpdateRef = useRef<number>(0);

  // Effect to update user marker based on live location
  useEffect(() => {
    if (isUsingGeoLocation && liveUserCoordinates && mapRef.current) {
      const currentTime = Date.now();
      // Throttle updates to once per second (1000ms)
      if (currentTime - lastUserMarkerUpdateRef.current < 1000) {
        return; // Skip this update if it's too soon after the last one
      }

      lastUserMarkerUpdateRef.current = currentTime;
      console.log("Updating user marker position with live coordinates:", liveUserCoordinates);

      if (userMarkerRef.current) {
        // Update existing marker position
        userMarkerRef.current.setLatLng([liveUserCoordinates.lat, liveUserCoordinates.lng]);
      } else {
        // Create marker if it doesn't exist yet
        userMarkerRef.current = L.marker(
          [liveUserCoordinates.lat, liveUserCoordinates.lng],
          {
            icon: userIcon,
            zIndexOffset: 1000, // Ensure it's on top of other markers
            pane: 'userLocationPane' // Use the dedicated pane
          }
        ).addTo(mapRef.current);
        console.log("Live user location marker created with start icon.");
      }
      // Optionally, keep the user in view if they move significantly
      // mapRef.current.panTo([liveUserCoordinates.lat, liveUserCoordinates.lng]);
    } else if (!isUsingGeoLocation && userMarkerRef.current) {
      // Remove user location marker if geolocation is disabled
      userMarkerRef.current.remove();
      userMarkerRef.current = null;
    }
    // If geolocation stops, we might want to remove the live marker or leave it at the last known position.
    // Currently, it just stops updating.
  }, [liveUserCoordinates, isUsingGeoLocation]); // Removed mapRef.current from dependencies

  // Initialize map when component mounts
  useEffect(() => {
    console.log("Initializing map...");

    // Cleanup any existing map (important!)
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    // Check if container exists
    if (!mapContainerRef.current) {
      console.error("Map container reference is not available");
      return;
    }

    console.log("Map container exists, initializing Leaflet...");

    try {
      // Create new map instance with default view of Poland
      const map = L.map(mapContainerRef.current, {
        center: [52.237049, 21.017532], // Default center (Poland)
        zoom: 12, // Zmiana poziomu zoomu na bardziej zbliżony do lokalizacji użytkownika
        zoomControl: false // Disable default Leaflet controls
      });

      // Create panes with proper z-index order
      map.createPane('userLocationPane'); // New pane for user location
      map.getPane('userLocationPane')!.style.zIndex = '1000'; // Highest z-index

      map.createPane('toiletMarkersPane');
      map.getPane('toiletMarkersPane')!.style.zIndex = '800';

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Create layer group for toilet markers
      toiletMarkersRef.current = L.layerGroup([], { pane: 'toiletMarkersPane' }).addTo(map);

      // Save map reference
      mapRef.current = map;

      // Force map to refresh its container dimensions
      setTimeout(() => {
        if (mapRef.current) {
          console.log("Invalidating map size...");
          mapRef.current.invalidateSize();
        }
      }, 100);

      // Get city coordinates once map is initialized
      if (city) {
        getCityCoordsAndUpdateMap(city, map);
      }
    } catch (error) {
      console.error("Error initializing map:", error);
      setError("Failed to initialize map. Please try refreshing the page.");
    }

    // Clean up on unmount
    return () => {
      console.log("Cleaning up map...");
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [city]); // Re-initialize map when city changes

  // Helper function to get city coordinates and update map
  const getCityCoordsAndUpdateMap = async (cityName: string, map: L.Map) => {
    console.log(`Getting coordinates for city: ${cityName}`);

    try {
      const coords = await getCityCoordinates(cityName);
      console.log(`Received coordinates for ${cityName}:`, coords);
      setCityCoords(coords);

      // Update map view to center on city
      map.setView([coords.lat, coords.lng], 13);
      console.log(`Map view updated to ${coords.lat}, ${coords.lng}`);

      // Now fetch toilets
      fetchToilets(cityName, map);
    } catch (err) {
      console.error('Error getting city coordinates:', err);
      setError('Failed to locate the city on the map.');
      setIsLoading(false);
    }
  };

  // Fetch toilets data
  const fetchToilets = async (cityName: string, map: L.Map) => {
    if (!cityName) {
      console.log("Cannot fetch toilets: city not provided");
      return;
    }

    setIsLoading(true);
    setError(null);

    console.log(`Fetching toilets for ${cityName}...`);

    try {
      const toiletsData = await getPublicToilets(cityName);
      console.log(`Received ${toiletsData.length} toilets for ${cityName}`);

      // Update markers on map
      updateToiletMarkers(toiletsData, map);

      // Show error if no toilets found
      if (toiletsData.length === 0) {
        setError('No public toilets found in this area.');
      }
    } catch (err) {
      console.error('Error fetching toilets:', err);
      setError('Failed to load public toilets data.');
    } finally {
      setIsLoading(false);
    }
  };

  // Update toilet markers on map
  const updateToiletMarkers = (toiletsData: Toilet[], map: L.Map) => {
    if (!map || !toiletMarkersRef.current) {
      console.log("Cannot update markers: map or layer group not initialized");
      return;
    }

    // Clear existing toilet markers
    toiletMarkersRef.current.clearLayers();
    console.log("Cleared existing toilet markers");

    if (toiletsData.length === 0) {
      console.log("No toilets to display on map");
      return;
    }

    console.log(`Adding ${toiletsData.length} toilet markers to map...`);

    // Create custom toilet icon (75% of the size of attraction markers)
    const toiletIcon = L.icon({
      iconUrl: '/icons/wc.png',
      iconSize: [24, 24], // 75% of the size of attraction markers (assumed to be 32x32)
      iconAnchor: [12, 12],
      popupAnchor: [0, -12],
      // Add fallback icon in case the main one fails to load
      iconRetinaUrl: '/icons/wc.png'
    });

    // Add markers for each toilet
    const bounds = L.latLngBounds([]);

    toiletsData.forEach(toilet => {
      const marker = L.marker([toilet.coordinates.lat, toilet.coordinates.lng], { icon: toiletIcon })
        .addTo(toiletMarkersRef.current!);

      // Add click handler
      marker.on('click', (e) => {
        const clickPoint = map.containerPointToLayerPoint([e.originalEvent.clientX, e.originalEvent.clientY]);
        handleToiletClick(toilet, clickPoint ? { x: clickPoint.x, y: clickPoint.y } : undefined);
      });

      // Extend bounds to include this toilet
      bounds.extend([toilet.coordinates.lat, toilet.coordinates.lng]);
    });

    console.log("Toilet markers added to map");

    // Add INITIAL user location marker if available (based on prop)
    // The useEffect hook above handles the LIVE updates
    if (userLocation && !isUsingGeoLocation) { // Only add initial marker if not using live geo initially
      if (userMarkerRef.current) {
        userMarkerRef.current.remove(); // Remove previous if any
      }
      userMarkerRef.current = L.marker(
        [userLocation.lat, userLocation.lng],
        {
          icon: userIcon,
          zIndexOffset: 1000,
          pane: 'userLocationPane' // Use the dedicated pane
        }
      ).addTo(map);
      bounds.extend([userLocation.lat, userLocation.lng]);
      console.log("Initial user location marker added to map (not live) with start icon.");
    } else if (userLocation && isUsingGeoLocation && !userMarkerRef.current) {
        // If using geo and live marker isn't created yet by the effect, create it here initially
        userMarkerRef.current = L.marker(
          [userLocation.lat, userLocation.lng],
          {
            icon: userIcon,
            zIndexOffset: 1000,
            pane: 'userLocationPane' // Use the dedicated pane
          }
        ).addTo(map);
        bounds.extend([userLocation.lat, userLocation.lng]);
        console.log("Initial user location marker added (live tracking enabled) with start icon.");
    }

    // Focus map logic (adjust as needed)
    if (userLocation) {
      map.setView([userLocation.lat, userLocation.lng], 15);
      console.log("Map centered on initial user location");
    } else if (bounds.isValid() && bounds.getNorthEast().lat !== bounds.getSouthWest().lat) {
      console.log("Fitting map to bounds of all markers");
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (cityCoords) {
      console.log(`Centering map on city coordinates: ${cityCoords.lat}, ${cityCoords.lng}`);
      map.setView([cityCoords.lat, cityCoords.lng], 13);
    }

    // Force a resize to ensure map displays correctly
    setTimeout(() => map?.invalidateSize(), 100);
  };

  // Handle toilet marker click
  const handleToiletClick = useCallback((toilet: Toilet, clickPoint?: { x: number; y: number }) => {
    setSelectedToilet({ ...toilet, clickPoint });
    setIsInfoWindowOpen(true);
    setWalkingDirections(null);
    setDirectionsError(null);
  }, []);

  // Handle info window close
  const handleCloseInfoWindow = useCallback(() => {
    setIsInfoWindowOpen(false);
    setSelectedToilet(null);

    // Remove walking path if any
    if (walkingPathRef.current && mapRef.current) {
      walkingPathRef.current.remove();
      walkingPathRef.current = null;
    }

    // Remove all walking icon markers
    walkingIconMarkers.forEach(marker => {
      if (mapRef.current) {
        marker.remove();
      }
    });
    setWalkingIconMarkers([]);
  }, [walkingIconMarkers]);

  // Handle get walking directions button click
  const handleGetWalkingDirections = useCallback(async () => {
    if (!selectedToilet || !userLocation) {
      setDirectionsError('User location is not available');
      return;
    }

    setIsLoadingDirections(true);
    setDirectionsError(null);

    try {
      const directions = await getWalkingDirectionsToToilet(
        userLocation,
        selectedToilet.coordinates
      );

      setWalkingDirections({
        distance: directions.distance,
        duration: directions.duration
      });

      // Draw path on map
      if (mapRef.current) {
        // Remove existing path if any
        if (walkingPathRef.current) {
          walkingPathRef.current.remove();
        }

        // Remove all existing walking icon markers
        walkingIconMarkers.forEach(marker => {
          marker.remove();
        });
        setWalkingIconMarkers([]);

        // Create new path with dashed line style
        const pathCoordinates = directions.path.map(point => [point.lat, point.lng] as L.LatLngTuple);
        walkingPathRef.current = L.polyline(
          pathCoordinates,
          {
            color: '#000000', // Black color for the path
            weight: 4,
            opacity: 0.8,
            dashArray: '10, 10', // Create dashed line
            lineCap: 'round'
          }
        ).addTo(mapRef.current);

        // Add walking icon to the path
        if (pathCoordinates.length > 0) {
          // Calculate a position about 1/3 along the path for the icon
          const iconPosition = Math.floor(pathCoordinates.length / 3);

          // Add the walking icon marker
          const marker = L.marker(pathCoordinates[iconPosition] as L.LatLngExpression, {
            icon: walkingIcon,
            interactive: false // Make it non-interactive to prevent clicks
          }).addTo(mapRef.current);

          // Store the marker reference to remove it later
          setWalkingIconMarkers([marker]);
        }

        // Fit map to include the path
        const bounds = L.latLngBounds(directions.path.map(point => [point.lat, point.lng]));
        mapRef.current.fitBounds(bounds, { padding: [50, 50] });
      }
    } catch (error) {
      console.error('Error getting walking directions:', error);
      setDirectionsError('Failed to get walking directions');
    } finally {
      setIsLoadingDirections(false);
    }
  }, [selectedToilet, userLocation, walkingIconMarkers]);

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Map container */}
      <div
        ref={mapContainerRef}
        id="map-container"
        className="w-full flex-grow" // Removed inline style with explicit height
        style={{ zIndex: 1 }} // Keep zIndex if needed, remove height/minHeight
      >
        {/* New map-centered loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-[1001] pointer-events-none"> {/* Use higher z-index */}
            <div className="bg-slate-800 bg-opacity-80 text-white text-lg font-semibold px-4 py-2 rounded-md shadow-lg border border-slate-600">
              Loading...
            </div>
          </div>
        )}
      </div>

      {/* Error message */}
      {!isLoading && error && (
        <div className="absolute top-4 left-0 right-0 mx-auto w-max z-10">
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
            <p>{error}</p>
          </div>
        </div>
      )}

      {/* Toilet info window */}
      {selectedToilet && (
        <div
          ref={infoWindowRef}
          className="absolute z-20"
          style={{
            bottom: infoWindowPosition.bottom,
            right: infoWindowPosition.right,
            maxHeight: 'calc(100% - 40px)',
            maxWidth: 'calc(100% - 40px)',
            overflow: 'auto'
          }}
        >
          <ToiletInfoWindow
            isOpen={isInfoWindowOpen}
            toilet={selectedToilet}
            onClose={handleCloseInfoWindow}
            onGetWalkingDirections={handleGetWalkingDirections}
            isLoadingDirections={isLoadingDirections}
            walkingDirections={walkingDirections}
            directionsError={directionsError}
          />
        </div>
      )}

      {/* Map controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2"> {/* Increased z-index to match RouteView */}
        <button
          className="zoom-control-button" // Apply the shared style class
          onClick={() => mapRef.current?.zoomIn()}
          title="Zoom in" // Add title for accessibility
        >
          <i className="fas fa-plus"></i> {/* Icon color is handled by the CSS class */}
        </button>
        <button
          className="zoom-control-button" // Apply the shared style class
          onClick={() => mapRef.current?.zoomOut()}
          title="Zoom out" // Add title for accessibility
        >
          <i className="fas fa-minus"></i> {/* Icon color is handled by the CSS class */}
        </button>
      </div>

      {/* Add CSS for user location marker */}
      <style>{`
        .user-location-marker {
          position: relative;
        }

        .user-location-pulse {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.4);
          position: absolute;
          top: -5px;
          left: -5px;
          animation: userLocationPulse 2s ease-in-out infinite;
          z-index: 1000;
        }

        @keyframes userLocationPulse {
          0% {
            transform: scale(0.9);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.7;
          }
        }

        .start-icon-marker {
          z-index: 1001;
          position: relative;
        }
      `}</style>
    </div>
  );
};

export default ToiletMapView;
