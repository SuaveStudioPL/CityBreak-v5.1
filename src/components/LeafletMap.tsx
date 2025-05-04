import React, { useEffect, useRef, useMemo } from 'react'; // Removed useState
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map/LeafletStyles.css';
import { Coordinates, Attraction, RouteSegment, JourneyStep } from '../types/attractions'; // Import correct types
import { getIcon } from '../utils/markerIcons';
import { createUserLocationIcon, createWalkingIcon } from '../utils/locationIcons';
import { getCustomMapTileUrl, getFallbackMapTileUrl, getPrimaryMapTileUrl, getCustomMapStyleJsonUrl, mapTilerOptions, PRIMARY_MAP_STYLE, OUTDOOR_STYLE } from './MapTilerConfig';
// Removed unused imports: useAppContext, getCityByName, CityData

// Unused icon imports removed
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// DefaultIcon constant removed as it's unused after removing prototype modification

interface LeafletMapProps {
  startLocation: Coordinates | null;
  isUsingGeoLocation: boolean; // Add prop for geolocation status
  liveUserCoordinates: Coordinates | null; // Add prop for live coordinates
  attractions: Attraction[]; // All attractions for the city
  activeAttractions: Attraction[]; // Attractions currently in the route (standard or custom, ordered)
  segments: RouteSegment[]; // Use imported RouteSegment
  onAttractionClick: (attraction: Attraction & { clickPoint: { x: number; y: number } }) => void;
  onMapLoad?: (map: L.Map) => void;
  skippedAttractions: string[];
  activePtRouteAttractionId?: string | null; // Add the new prop
  cityTime: Date; // Add cityTime prop
  isCustomRouteMode: boolean; // Add custom mode prop
}

// --- Helper Functions ---

// Helper function to create a basic placeholder DivIcon for attractions
const getPlaceholderAttractionIcon = (text: string): L.DivIcon => {
  const htmlContent = `
    <div style="
      width: 45px; /* Increased size */
      height: 45px; /* Increased size */
      background-color: #8b5cf6; /* Purple fallback */
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      color: #ffffff;
      font-size: 14px; /* Match final icon font size */
      border: 3px solid #ffffff; /* Match final icon border thickness */
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3); /* Match final icon shadow */
      line-height: 1;
      overflow: hidden;
    ">
      ${text || ''}
    </div>
  `;
  return L.divIcon({
    html: htmlContent,
    className: 'custom-div-icon placeholder-icon',
    iconSize: L.point(45, 45), // Increased size
    iconAnchor: L.point(22, 22), // Adjusted anchor
  });
};


// Helper function to find a point at a specific fraction along a path
function findPointAtFraction(path: L.LatLngTuple[], fraction: number): L.LatLng | null {
    if (!path || path.length < 2 || fraction < 0 || fraction > 1) {
        return null;
    }

    const totalPathDistance = path.reduce((dist, point, index) => {
        if (index === 0) return 0;
        const p1 = L.latLng(path[index-1][0], path[index-1][1]);
        const p2 = L.latLng(point[0], point[1]);
        return dist + p1.distanceTo(p2);
    }, 0);

    if (totalPathDistance === 0) {
        return L.latLng(path[0][0], path[0][1]);
    }

    const targetDistance = totalPathDistance * fraction;
    let cumulativeDistance = 0;

    for (let i = 1; i < path.length; i++) {
        const p1 = L.latLng(path[i-1][0], path[i-1][1]);
        const p2 = L.latLng(path[i][0], path[i][1]);
        const segmentDistance = p1.distanceTo(p2);

        if (cumulativeDistance + segmentDistance >= targetDistance - 0.01) {
            const distanceIntoSegment = targetDistance - cumulativeDistance;
            const ratio = segmentDistance > 0 ? distanceIntoSegment / segmentDistance : 0;
            const lat = p1.lat + (p2.lat - p1.lat) * ratio;
            const lng = p1.lng + (p2.lng - p1.lng) * ratio;
            return L.latLng(lat, lng);
        }
        cumulativeDistance += segmentDistance;
    }

    return L.latLng(path[path.length - 1][0], path[path.length - 1][1]);
}


const LeafletMap: React.FC<LeafletMapProps> = ({
  startLocation,
  isUsingGeoLocation,
  liveUserCoordinates,
  attractions,
  activeAttractions, // These are the ones in the current route (standard or custom, ordered)
  segments,
  onAttractionClick,
  onMapLoad,
  skippedAttractions,
  activePtRouteAttractionId,
  cityTime,
  isCustomRouteMode
  // selectedCustomAttractions // Removed prop
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);
  const routeMarkersRef = useRef<L.LayerGroup | null>(null);
  const polylinesRef = useRef<L.LayerGroup | null>(null);
  const startMarkerRef = useRef<L.Marker | null>(null);
  const userLocationMarkerRef = useRef<L.Marker | null>(null); // Add ref for user location marker
  const attractionMarkersRef = useRef<L.Marker[]>([]);
  // const prevActiveAttractionsLength = useRef<number>(0); // Removed - Unused
  // const initialCustomBoundsSet = useRef(false); // Removed - Replaced by transition logic
  const prevIsCustomMode = useRef(isCustomRouteMode); // Track previous mode state

  // Import icons from shared utils
  const userLocationIcon = createUserLocationIcon();
  const walkingIcon = createWalkingIcon();

  const walkingRouteStyle: L.PolylineOptions = {
    color: '#333',
    weight: 3,
    opacity: 0.7,
    dashArray: '5, 5'
  };

  // Map Initialization
  useEffect(() => {
    let map: L.Map;
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
    markersRef.current = null;
    routeMarkersRef.current = null;
    polylinesRef.current = null;
    startMarkerRef.current = null;
    userLocationMarkerRef.current = null; // Reset user location marker reference
    attractionMarkersRef.current = [];

    if (!mapContainerRef.current) return;

    console.log("Initializing map with startLocation:", startLocation);

    map = L.map(mapContainerRef.current, {
      center: startLocation ? [startLocation.lat, startLocation.lng] : [52.237049, 21.017532],
      zoom: startLocation ? 13 : 6,
      zoomControl: false,
      preferCanvas: true
    });

    // Create panes with proper z-index order
    map.createPane('userLocationPane'); // New pane for user location
    map.getPane('userLocationPane')!.style.zIndex = '1000'; // Highest z-index

    map.createPane('attractionMarkersPane');
    map.getPane('attractionMarkersPane')!.style.zIndex = '800';

    map.createPane('routeMarkersPane');
    map.getPane('routeMarkersPane')!.style.zIndex = '750';

    map.createPane('publicTransportMarkersPane');
    map.getPane('publicTransportMarkersPane')!.style.zIndex = '700';

    map.createPane('polylinesPane');
    map.getPane('polylinesPane')!.style.zIndex = '600';

    map.createPane('publicTransportPane');
    map.getPane('publicTransportPane')!.style.zIndex = '550';

    // Use the streets-v2 style as requested
    try {
      console.log(`Using ${PRIMARY_MAP_STYLE} style as requested`);
      const primaryLayer = L.tileLayer(getPrimaryMapTileUrl(), mapTilerOptions);

      // Add error handling
      primaryLayer.on('tileerror', (primaryError) => {
        console.error(`Error loading ${PRIMARY_MAP_STYLE} style, trying outdoor style`, primaryError);
        primaryLayer.remove();

        // Try outdoor style
        console.log('Trying outdoor style');
        const outdoorLayer = L.tileLayer(
          `https://api.maptiler.com/maps/${OUTDOOR_STYLE}/{z}/{x}/{y}.png?key=${MAPTILER_API_KEY}`,
          mapTilerOptions
        );

        outdoorLayer.on('tileerror', (outdoorError) => {
          console.error('Error loading outdoor style, using fallback', outdoorError);
          outdoorLayer.remove();

          // Use fallback as last resort
          console.log('Using fallback style');
          L.tileLayer(getFallbackMapTileUrl(), mapTilerOptions).addTo(map);
        });

        outdoorLayer.addTo(map);
      });

      // Add the primary layer to the map
      primaryLayer.addTo(map);
    } catch (error) {
      console.error('Error setting up map tiles, using fallback', error);

      // Use fallback in case of any errors
      L.tileLayer(getFallbackMapTileUrl(), mapTilerOptions).addTo(map);
    }

    // Ensure the attribution control is visible above bottom panels
    map.attributionControl.setPosition('topright');

    markersRef.current = L.layerGroup([], { pane: 'attractionMarkersPane' }).addTo(map);
    routeMarkersRef.current = L.layerGroup([], { pane: 'routeMarkersPane' }).addTo(map);
    polylinesRef.current = L.layerGroup([], { pane: 'polylinesPane' }).addTo(map);

    mapRef.current = map;

    // If using geolocation and we have live coordinates, add the user location marker immediately
    if (isUsingGeoLocation && liveUserCoordinates) {
      console.log("Adding initial user location marker during map initialization");
      userLocationMarkerRef.current = L.marker(
        [liveUserCoordinates.lat, liveUserCoordinates.lng],
        {
          icon: userLocationIcon,
          zIndexOffset: 1000,
          pane: 'userLocationPane'
        }
      ).addTo(map);
    }

    if (onMapLoad) {
      onMapLoad(map);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // --- Refined Effects ---

  // Effect: Update user location marker separately from other markers
  useEffect(() => {
    const map = mapRef.current;
    if (!map) {
      console.log("Map reference is not available yet");
      return;
    }

    console.log("User location effect running. isUsingGeoLocation:", isUsingGeoLocation, "liveUserCoordinates:", liveUserCoordinates);

    // Only handle user location marker updates here
    if (isUsingGeoLocation && liveUserCoordinates) {
      if (userLocationMarkerRef.current) {
        // Update existing marker position without recreating it
        console.log("Updating existing user location marker position");
        userLocationMarkerRef.current.setLatLng([liveUserCoordinates.lat, liveUserCoordinates.lng]);
      } else {
        // Create marker if it doesn't exist yet
        console.log("Creating new user location marker with start icon at", liveUserCoordinates);

        // Create the marker directly on the map, using the userLocationPane
        userLocationMarkerRef.current = L.marker(
          [liveUserCoordinates.lat, liveUserCoordinates.lng],
          {
            icon: userLocationIcon,
            zIndexOffset: 1000, // Ensure it's on top of other markers
            pane: 'userLocationPane' // Use the dedicated pane
          }
        ).addTo(map);

        console.log("User location marker created and added to map");
      }
    } else if (!isUsingGeoLocation && userLocationMarkerRef.current) {
      // Remove user location marker if geolocation is disabled
      console.log("Removing user location marker as geolocation is disabled");
      userLocationMarkerRef.current.remove();
      userLocationMarkerRef.current = null;
    }
  }, [isUsingGeoLocation, liveUserCoordinates, userLocationIcon]);

  // Effect 2: Update Markers (Icons, Opacity, Visibility) - NO view changes here
  useEffect(() => {
    const map = mapRef.current;
    const markersGroup = markersRef.current;
    if (!map || !markersGroup) return;

    console.log("[LeafletMap Effect 2] Updating attraction markers.");

    // Clear existing attraction markers before redrawing
    // But don't clear user location marker which is handled separately
    markersGroup.clearLayers();
    startMarkerRef.current = null;
    // Don't reset userLocationMarkerRef here anymore
    attractionMarkersRef.current = []; // Clear the ref array too

    // Note: User location marker is now handled in a separate effect

    // Add Start Marker only if not using geolocation
    if (startLocation && !isUsingGeoLocation) {
      // Create marker with default Leaflet icon initially
      const startMarker = L.marker([startLocation.lat, startLocation.lng]).addTo(markersGroup);
      startMarkerRef.current = startMarker;

      // Asynchronously fetch and set the final start icon
      getIcon('start')
        .then(finalIcon => {
          // Check if marker still exists and is on the map
          if (startMarker && map?.hasLayer(startMarker)) {
            startMarker.setIcon(finalIcon);
          }
        })
        .catch(error => {
          console.error("Error setting start marker icon:", error);
          // Marker keeps the default icon on error
        });
    }

    // Click Handler
    const handleMarkerClick = (attraction: Attraction, e: L.LeafletMouseEvent) => {
      map?.panTo([attraction.coordinates.lat, attraction.coordinates.lng]);
      const containerPoint = e.containerPoint;
      onAttractionClick({
        ...attraction,
        clickPoint: { x: containerPoint.x, y: containerPoint.y }
      });
    };

    // Determine which attractions to draw markers for (based on PT mode or all)
    const attractionsToDraw = activePtRouteAttractionId
      ? attractions.filter(a => a.id === activePtRouteAttractionId)
      : attractions;

    // Add/Update Attraction Markers
    attractionsToDraw.forEach((attraction) => {
      let iconNumber = '';
      let opacity = 1;
      let shouldDisplay = true;
      const isActive = activeAttractions.some(a => a.id === attraction.id);

      // --- Determine Marker Style based on Mode ---
      if (isCustomRouteMode) {
        // Custom mode: Style based on selection status
        opacity = isActive ? 1 : 0.5;
        iconNumber = isActive ? (activeAttractions.find(a => a.id === attraction.id)?.order?.toString() || '') : '';
        shouldDisplay = true; // Always show markers in custom mode
      } else if (activePtRouteAttractionId) {
        // PT mode: Only show the target
        shouldDisplay = attraction.id === activePtRouteAttractionId;
        opacity = 1;
        iconNumber = '';
      } else {
        // Standard mode: Style based on active route and skipped status
        const isSkipped = skippedAttractions.includes(attraction.id);
        shouldDisplay = !isSkipped;
        opacity = isSkipped ? 0.5 : 1;
        iconNumber = isActive ? ((activeAttractions.findIndex(a => a.id === attraction.id) + 1).toString()) : '';
      }
      // --- ---

      if (shouldDisplay) {
        // Create marker with placeholder icon first
        const placeholderIcon = getPlaceholderAttractionIcon(iconNumber);
        const marker = L.marker([attraction.coordinates.lat, attraction.coordinates.lng], {
          icon: placeholderIcon,
          opacity: opacity, // Set initial opacity
        }).addTo(markersGroup).on('click', (e) => handleMarkerClick(attraction, e));
        attractionMarkersRef.current.push(marker); // Keep track of added markers

        // Asynchronously fetch the final icon and update the marker
        getIcon('attraction', iconNumber, attraction, cityTime)
          .then(finalIcon => {
            // Check if marker still exists and is on the map
            if (marker && map?.hasLayer(marker)) {
              marker.setIcon(finalIcon);
              // Re-apply opacity in case it needs to be updated after async operation
              // Although opacity is primarily determined by mode/skipped status set synchronously
              marker.setOpacity(opacity);
            }
          })
          .catch(error => {
            console.error(`Error getting final icon for ${attraction.name}:`, error);
            // Marker remains with the placeholder icon on error
          });
      }
    });

    // Dependencies: Things that affect marker appearance or which markers are shown
  }, [
    startLocation,
    attractions, // Need all attractions to potentially draw them in custom mode
    activeAttractions, // Need for styling (order, isActive)
    skippedAttractions, // Need for styling in standard mode
    onAttractionClick,
    activePtRouteAttractionId, // Determines if we are in PT mode
    cityTime, // Affects icon styling
    isCustomRouteMode, // Affects styling logic
    isUsingGeoLocation // Only needed to determine if we should show start marker
    // Removed liveUserCoordinates and userLocationIcon as they're handled in the separate effect
  ]);


  // Effect 3: Adjust Map View (fitBounds/flyToBounds) - ONLY view changes here
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const justEnteredCustomMode = !prevIsCustomMode.current && isCustomRouteMode;
    // const justExitedCustomMode = prevIsCustomMode.current && !isCustomRouteMode; // Removed - Unused

    // Update previous mode state *before* deciding on action
    prevIsCustomMode.current = isCustomRouteMode;

    let shouldFlyToBounds = false;
    let boundsToFly: L.LatLngBounds | null = null;

    if (justEnteredCustomMode) {
      // --- Transitioned INTO Custom Mode ---
      console.log("[LeafletMap View] Entered Custom Mode - Setting initial bounds.");
      const allAttractionsLatLngs: L.LatLng[] = attractions.map(a => L.latLng(a.coordinates.lat, a.coordinates.lng));
      if (startLocation) {
        allAttractionsLatLngs.push(L.latLng(startLocation.lat, startLocation.lng));
      }
      if (allAttractionsLatLngs.length > 0) {
        boundsToFly = L.latLngBounds(allAttractionsLatLngs);
        shouldFlyToBounds = true;
      } else if (startLocation) {
        // Fallback if only start location exists
        map.flyTo([startLocation.lat, startLocation.lng], 13, { duration: 0.5 }); // Fly to start
      }
      // No need for initialCustomBoundsSet ref anymore with this transition logic

    } else if (!isCustomRouteMode) {
      // --- Standard Mode or PT Mode ---
      console.log("[LeafletMap View] In Standard/PT Mode - Checking bounds.");
      const boundsLatLngs: L.LatLng[] = [];
      if (startLocation) {
        boundsLatLngs.push(L.latLng(startLocation.lat, startLocation.lng));
      }

      const relevantAttractions = activePtRouteAttractionId
        ? attractions.filter(a => a.id === activePtRouteAttractionId) // Only PT target
        : activeAttractions; // Active attractions in the standard route

      relevantAttractions.forEach(attraction => {
        // Exclude skipped only in standard mode (not PT mode)
        if (!activePtRouteAttractionId && skippedAttractions.includes(attraction.id)) {
          return; // Skip this attraction for bounds calculation
        }
        boundsLatLngs.push(L.latLng(attraction.coordinates.lat, attraction.coordinates.lng));
      });

      if (boundsLatLngs.length > 0) {
        const potentialBounds = L.latLngBounds(boundsLatLngs);
        // Check if bounds are valid and potentially different enough to warrant a flyTo
        // (This check might be overly simplistic, could compare centers/zoom levels)
        if (potentialBounds.isValid()) {
             // Simple check: always fly if bounds are valid in standard/PT mode
             // More complex checks could compare current view bounds to potentialBounds
             boundsToFly = potentialBounds;
             shouldFlyToBounds = true;
             console.log("[LeafletMap View] Standard/PT - Valid bounds found.");
        }
      }

      // Fallback for standard/PT mode if no valid bounds were calculated but start location exists
      if (!shouldFlyToBounds && startLocation) {
          console.log("[LeafletMap View] Standard/PT - No valid bounds, flying to start location.");
          // Check if map is already centered near start location to avoid unnecessary flyTo?
          // For simplicity now, just fly if no bounds.
          map.flyTo([startLocation.lat, startLocation.lng], 13, { duration: 0.5 });
      }
    }
    // else: Already in Custom Mode - DO NOTHING to the view automatically

    // Perform flyToBounds if needed
    if (shouldFlyToBounds && boundsToFly && boundsToFly.isValid()) {
      const paddingPoint = L.point(60, 60);
      console.log("[LeafletMap View] Flying to bounds:", boundsToFly.toBBoxString());
      map.flyToBounds(boundsToFly, { padding: paddingPoint, duration: 0.5, maxZoom: 16 }); // Added maxZoom
    }

    // Dependencies: Recalculate view ONLY when these change.
    // `attractions` is needed for the initial custom mode fit.
    // `activeAttractions` is needed for standard mode fit.
  }, [
    startLocation,
    attractions,
    activeAttractions,
    isCustomRouteMode,
    activePtRouteAttractionId,
    skippedAttractions
  ]);


  // Effect 4: Drawing Polylines (Keep as is)

  // Helper function to determine color for transit lines
  const getTransitLineColor = useMemo(() => {
    const colorCache: Record<string, string> = {
        'M1': '#00599D', 'M2': '#E30613', 'BUS': '#FFA500', 'TRAM': '#008000',
        'SUBWAY': '#800080', 'TRAIN': '#A52A2A', 'WALKING': '#333333', 'default': '#3388FF',
    };
    return (lineId: string): string => {
      if (!lineId) return colorCache['default'];
      if (colorCache[lineId]) return colorCache[lineId];
      if (colorCache[lineId.toUpperCase()]) return colorCache[lineId.toUpperCase()];
      let hash = 0;
      for (let i = 0; i < lineId.length; i++) {
        hash = lineId.charCodeAt(i) + ((hash << 5) - hash); hash = hash & hash;
      }
      const h = Math.abs(hash % 360);
      const color = `hsl(${h}, 70%, 50%)`;
      colorCache[lineId] = color;
      return color;
    };
  }, []);

  // Effect 3: Drawing Main Route Polylines and Step Markers
  useEffect(() => {
    const map = mapRef.current;
    const polylinesGroup = polylinesRef.current;
    const routeMarkersGroup = routeMarkersRef.current;
    if (!map || !polylinesGroup || !routeMarkersGroup) return;

    polylinesGroup.clearLayers();
    routeMarkersGroup.clearLayers();

    // Draw route segments if available and no PT route is active
    // Use the 'segments' prop which comes from currentEffectiveRoute (calculated route)
    if (segments && segments.length > 0 && !activePtRouteAttractionId) {
      segments.forEach((segment) => {
        // --- Handle Inter-Attraction Walking Segment ---
        if (segment.transportType === 'walking' && segment.steps && segment.steps.length > 0) {
            let combinedPathCoords: Coordinates[] = [];
            segment.steps.forEach(step => {
                if (step.travelMode === 'WALKING') {
                    combinedPathCoords = combinedPathCoords.concat(step.path);
                }
            });

            if (combinedPathCoords.length < 2) return;

            const leafletPath = combinedPathCoords.map(c => [c.lat, c.lng] as L.LatLngTuple);
            L.polyline(leafletPath, { ...walkingRouteStyle }).addTo(polylinesGroup);

            if (leafletPath.length > 0) {
                const fraction = 0.5;
                const pos = findPointAtFraction(leafletPath, fraction);
                if (pos) {
                    L.marker(pos, { icon: walkingIcon }).addTo(routeMarkersGroup);
                }
            }

        // --- Handle Transit Segment (including walking steps within it) ---
        } else if (segment.transportType === 'transit' && segment.steps && segment.steps.length > 0) {
            segment.steps.forEach((step: JourneyStep) => {
                const stepPath = step.path.map(coord => [coord.lat, coord.lng] as L.LatLngTuple);
                if (stepPath.length < 2) return;

                let polylineStyle: L.PolylineOptions = {};
                let stepPopupContent = '';

                if (step.travelMode === 'WALKING') {
                    polylineStyle = { ...walkingRouteStyle };
                    stepPopupContent = `<div><h4>Walk</h4>${step.walkingDetails?.instructions ? `<p>${step.walkingDetails.instructions}</p>` : ''}<p>Distance: ${step.distance}m</p><p>Duration: ${Math.round(step.duration / 60)} min</p></div>`;
                    const walkingPolyline = L.polyline(stepPath, polylineStyle).addTo(polylinesGroup);
                    walkingPolyline.bindPopup(stepPopupContent);

                    if (stepPath.length > 1) {
                        const midpointIndex = Math.floor(stepPath.length / 2);
                        const midpointLatLng = L.latLng(stepPath[midpointIndex][0], stepPath[midpointIndex][1]);
                        L.marker(midpointLatLng, { icon: walkingIcon }).addTo(routeMarkersGroup);
                    }
                } else if (step.travelMode === 'TRANSIT' && step.transitDetails) {
                    const details = step.transitDetails;
                    const transitColor = getTransitLineColor(details.line);
                    polylineStyle = { color: transitColor, weight: 5, opacity: 0.85 };
                    const vehicleDisplayType = details.vehicleType === 'HEAVY_RAIL' ? 'Train' : details.vehicleType;
                    stepPopupContent = `<div><h4>${vehicleDisplayType} ${details.line}</h4><p>Direction: ${details.headsign || 'N/A'}</p><p>From: ${details.departureStop}</p><p>To: ${details.arrivalStop}</p>${details.numStops ? `<p>Stops: ${details.numStops}</p>` : ''}</div>`;

                    L.polyline(stepPath, polylineStyle).addTo(polylinesGroup);

                    const startPoint = stepPath[0];
                    const iconVehicleText = (details.vehicleType === 'HEAVY_RAIL' ? 'Train' : details.vehicleType).substring(0,1);
                    const fullText = `${iconVehicleText}:${details.line}`;
                    const height = 18;
                    let width: number;
                    const textLength = fullText.length;
                    if (textLength <= 5) { width = 50; }
                    else if (textLength <= 10) { width = 80; }
                    else { width = 110; }

                    const transitIconHtml = `<div style="background-color: ${transitColor}; color: white; padding: 1px 5px; border-radius: 8px; font-size: 11px; font-weight: bold; border: 1px solid rgba(0,0,0,0.2); box-shadow: 0 1px 2px rgba(0,0,0,0.3); white-space: nowrap; display: flex; align-items: center; justify-content: center; height: 100%; width: 100%; overflow: hidden; text-overflow: ellipsis; box-sizing: border-box;">${fullText}</div>`;

                    const transitStepIcon = L.divIcon({
                        className: 'transit-step-icon',
                        html: transitIconHtml,
                        iconSize: L.point(width, height),
                        iconAnchor: L.point(width / 2, height / 2)
                    });

                    L.marker(L.latLng(startPoint[0], startPoint[1]), { icon: transitStepIcon })
                        .addTo(routeMarkersGroup)
                        .bindPopup(stepPopupContent);
                }
            });
        }
      });
    }
    // Depend on segments which comes from currentEffectiveRoute (calculated route)
  }, [segments, getTransitLineColor, walkingIcon, activePtRouteAttractionId, isCustomRouteMode]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div ref={mapContainerRef} id="leaflet-map" style={{ height: '100%', width: '100%' }} />

      {/* Style CSS dla markera lokalizacji użytkownika */}
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

export default LeafletMap;
