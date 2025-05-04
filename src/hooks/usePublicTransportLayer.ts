import { useState, useCallback, useRef, MutableRefObject } from 'react';
import L, { LatLngTuple } from 'leaflet';
import { TransportService, PublicTransportRouteResult, DetailedRouteStep, TransitDetails } from '../services/TransportService';
import { Coordinates, Attraction } from '../types/attractions';
import walkingIconUrl from '/icons/walking.png'; // Assuming this path is correct relative to the public dir

// Define icon creation logic within the hook or import from utils
const smallWalkingIcon = L.icon({
  iconUrl: walkingIconUrl,
  iconSize: [17, 17],
  iconAnchor: [8, 8]
});

const createPublicTransitIcon = (details: TransitDetails): L.DivIcon => {
  const vehicleDisplayType = (details.vehicleType === 'HEAVY_RAIL' ? 'Train' : details.vehicleType);
  const iconVehicleText = vehicleDisplayType.substring(0, 1);
  const fullText = `${iconVehicleText}:${details.line}`;
  const height = 22;

  // Determine width based on text length categories
  let width: number;
  const textLength = fullText.length;
  if (textLength <= 5) {
    width = 50; // Short
  } else if (textLength <= 10) {
    width = 80; // Medium
  } else {
    width = 110; // Long
  }
  // Use calculated width directly in iconSize

  const iconHtml = `
    <div style="
      display: flex; /* Use flex for centering */
      justify-content: center;
      align-items: center;
      background-color: white;
      border: 1px solid black;
      border-radius: 3px;
      padding: 2px 6px;
      font-family: Arial, sans-serif;
      font-size: 11px;
      font-weight: bold;
      text-align: center;
      line-height: ${height - 4}px; /* Adjusted for padding */
      height: ${height}px; /* Set fixed height */
      width: ${width}px !important; /* Re-add inline width with !important */
      overflow: hidden; /* Keep hidden overflow */
      text-overflow: ellipsis; /* Add ellipsis for overflow */
      box-sizing: border-box; /* Use border-box for easier sizing */
    ">${fullText}</div>
  `;

  // No need for totalWidth calculation with fixed categories

  const divIconOptions: L.DivIconOptions = {
    html: iconHtml,
    className: '', // No specific class needed now
    // iconSize: [width, height], // Remove iconSize, rely on inline style
    iconAnchor: [0, height / 2], // Anchor left-middle for simplicity with inline width
    popupAnchor: [0, -height / 2] // Adjust popup anchor relative to icon center
  };

  console.log(`[createPublicTransitIcon] Text: "${fullText}", Length: ${textLength}, Calculated Width: ${width}px`);
  console.log("[createPublicTransitIcon] iconHtml:", iconHtml);
  console.log("[createPublicTransitIcon] divIconOptions:", divIconOptions);


  return L.divIcon(divIconOptions);
};


interface UsePublicTransportLayerProps {
  mapInstanceRef: MutableRefObject<L.Map | null>;
  startLocation: Coordinates | null;
}

export const usePublicTransportLayer = ({ mapInstanceRef, startLocation }: UsePublicTransportLayerProps) => {
  const [activePtRouteAttractionId, setActivePtRouteAttractionId] = useState<string | null>(null);
  const [isPtLoading, setIsPtLoading] = useState(false);
  const publicTransportPolylineRef = useRef<L.Polyline | null>(null);
  const publicTransportMarkersRef = useRef<L.LayerGroup | null>(null);

  // Initialize the marker group when the map is available
  // This should ideally be called from the component using the hook, e.g., in onMapLoad
  const initializeMarkerGroup = useCallback(() => {
    if (!mapInstanceRef.current) {
        console.error("[usePublicTransportLayer] Map instance not available for marker group initialization.");
        return;
    }
    const map = mapInstanceRef.current;
    const paneName = 'publicTransportMarkersPane'; // Must match pane created in LeafletMap

    if (!map.getPane(paneName)) {
        console.error(`[usePublicTransportLayer] Pane '${paneName}' not found! Creating as fallback.`);
        map.createPane(paneName);
        map.getPane(paneName)!.style.zIndex = '700'; // Ensure z-index
    }

    if (!publicTransportMarkersRef.current) {
        publicTransportMarkersRef.current = L.layerGroup([], { pane: paneName }).addTo(map);
        console.log(`[usePublicTransportLayer] Initialized publicTransportMarkersRef group on pane: ${paneName}`);
    } else if (!map.hasLayer(publicTransportMarkersRef.current)) {
        publicTransportMarkersRef.current.addTo(map); // Add back if removed
        console.log(`[usePublicTransportLayer] Re-added publicTransportMarkersRef group to map.`);
    }
  }, [mapInstanceRef]);


  // Function to clear the drawn public transport route
  const handleClosePublicTransportRoute = useCallback(() => {
    if (publicTransportPolylineRef.current) {
      publicTransportPolylineRef.current.remove();
      publicTransportPolylineRef.current = null;
    }
    if (publicTransportMarkersRef.current) {
      publicTransportMarkersRef.current.clearLayers();
    }
    setActivePtRouteAttractionId(null); // Reset the active route ID
    console.log("[usePublicTransportLayer] Cleared PT route.");
  }, []);

  // Function to draw the public transport route
  const handleDrawPublicTransportRoute = useCallback(async (destination: Attraction) => {
    if (!startLocation || !mapInstanceRef.current) {
      console.error("[usePublicTransportLayer] Start location or map instance not available.");
      return;
    }
    // Ensure marker group is initialized before drawing
    if (!publicTransportMarkersRef.current) {
        console.warn("[usePublicTransportLayer] Marker group not initialized. Attempting initialization.");
        initializeMarkerGroup(); // Try to initialize it now
        if (!publicTransportMarkersRef.current) { // Check again
             console.error("[usePublicTransportLayer] Marker group initialization failed! Aborting draw.");
             return;
        }
    }

    setIsPtLoading(true);
    console.log("[usePublicTransportLayer] Drawing PT route to:", destination.name);

    // Clear any existing route first
    handleClosePublicTransportRoute();

    try {
      const routeDetails: PublicTransportRouteResult | null = await TransportService.fetchPublicTransportRouteDetails(
        startLocation,
        destination.coordinates
      );

      if (routeDetails && routeDetails.overviewPath.length > 0 && mapInstanceRef.current) {
        const map = mapInstanceRef.current;
        const latLngPath: LatLngTuple[] = routeDetails.overviewPath.map((coord: Coordinates) => [coord.lat, coord.lng]);

        const polylinePaneName = 'publicTransportPane';
        const markerPaneName = 'publicTransportMarkersPane';

        if (!map.getPane(polylinePaneName) || !map.getPane(markerPaneName)) {
           console.error("[usePublicTransportLayer] Required map panes not found!");
           setIsPtLoading(false);
           return;
        }

        // Draw polyline
        const polyline = L.polyline(latLngPath, {
          color: 'black',
          weight: 4,
          opacity: 0.8,
          pane: polylinePaneName
        }).addTo(map);
        publicTransportPolylineRef.current = polyline;

        // Add markers to the group
        routeDetails.steps.forEach((step: DetailedRouteStep) => {
          if (!publicTransportMarkersRef.current) return;

          if (step.travelMode === 'TRANSIT' && step.transitDetails) {
            const transitIcon = createPublicTransitIcon(step.transitDetails);
            const marker = L.marker(
              [step.transitDetails.departureCoords.lat, step.transitDetails.departureCoords.lng],
              { icon: transitIcon }
            );
            publicTransportMarkersRef.current.addLayer(marker);
          } else if (step.travelMode === 'WALKING' && step.path.length > 0) {
            const startWalkingCoord = step.path[0];
            const marker = L.marker(
              [startWalkingCoord.lat, startWalkingCoord.lng],
              { icon: smallWalkingIcon }
            );
            publicTransportMarkersRef.current.addLayer(marker);
          }
        });

        setActivePtRouteAttractionId(destination.id); // Set active ID after successful draw
        console.log("[usePublicTransportLayer] Successfully drawn PT route.");

      } else {
        console.warn("[usePublicTransportLayer] Received empty or invalid route details.");
        setActivePtRouteAttractionId(null);
      }
    } catch (error) {
      console.error('[usePublicTransportLayer] Error drawing PT route:', error);
      setActivePtRouteAttractionId(null);
    } finally {
      setIsPtLoading(false);
    }
  }, [startLocation, mapInstanceRef, handleClosePublicTransportRoute, initializeMarkerGroup]); // Added dependencies

  return {
    activePtRouteAttractionId,
    isPtLoading,
    initializeMarkerGroup, // Expose initializer
    handleDrawPublicTransportRoute,
    handleClosePublicTransportRoute,
  };
};
