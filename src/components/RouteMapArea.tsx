import React, { useCallback, MutableRefObject } from 'react'; // Removed useState, useRef, useEffect
import L from 'leaflet';
import LeafletMap from './LeafletMap'; // Assuming LeafletMap is in the same directory or adjust path
// usePublicTransportLayer is used in the parent (RouteView)
import { Coordinates, Attraction, RouteSegment } from '../types/attractions';
import { AttractionWithClickPoint } from '../hooks/useInfoWindow'; // Import the type
import styles from './RouteView.module.css'; // Import styles for pulsing button

interface RouteMapAreaProps {
  // mapKey: number; // Removed prop
  startLocation: Coordinates | null;
  isUsingGeoLocation: boolean; // Add prop
  liveUserCoordinates: Coordinates | null; // Add prop
  attractions: Attraction[]; // All attractions to display (including skipped)
  activeAttractions: Attraction[]; // Attractions for the current route (ordered)
  segments: RouteSegment[];
  onAttractionClick: (attraction: AttractionWithClickPoint) => void;
  skippedAttractions: string[];
  cityTime: Date;
  routeNeedsRefresh: boolean;
  onRefreshRoute: () => void;
  isLoading: boolean; // Loading state for the main route generation
  activePtRouteAttractionId: string | null; // From PT hook
  initializeMarkerGroup: () => void; // From PT hook
  isPtLoading: boolean; // Loading state specific to PT route fetching
  // Add mapInstanceRef prop
  mapInstanceRef: MutableRefObject<L.Map | null>;
  isFullscreen: boolean; // Add isFullscreen prop
  onToggleFullscreen: () => void; // Add fullscreen toggle prop
  // Add custom mode prop
  isCustomRouteMode: boolean;
  // selectedCustomAttractions: Attraction[]; // Removed prop
}

export const RouteMapArea: React.FC<RouteMapAreaProps> = ({
  // mapKey, // Removed prop
  startLocation,
  isUsingGeoLocation, // Destructure prop
  liveUserCoordinates, // Destructure prop
  attractions,
  activeAttractions, // This is the calculated/ordered list
  segments,
  onAttractionClick,
  skippedAttractions,
  cityTime,
  routeNeedsRefresh,
  onRefreshRoute,
  isLoading,
  activePtRouteAttractionId,
  initializeMarkerGroup,
  isPtLoading,
  mapInstanceRef, // Use the passed-in ref
  isFullscreen, // Use the passed-in state
  onToggleFullscreen, // Use the passed-in handler
  isCustomRouteMode, // Destructure the new prop
  // selectedCustomAttractions, // Removed prop
}) => {
  // Internal state for this component is no longer needed for isFullscreen

  // Callback for when the LeafletMap component mounts and the map instance is ready
  const handleMapLoad = useCallback((map: L.Map) => {
    // Assign the loaded map instance to the ref passed from the parent
    mapInstanceRef.current = map;
    // Initialize the PT marker group once the map is loaded
    initializeMarkerGroup();
  }, [initializeMarkerGroup]);

  const handleZoomIn = useCallback(() => {
    mapInstanceRef.current?.zoomIn();
  }, []);

  const handleZoomOut = useCallback(() => {
    mapInstanceRef.current?.zoomOut();
  }, []);

  // Fullscreen toggle is handled by the parent (RouteView) via onToggleFullscreen prop

  // Combine loading states for the overlay indicator
  // Show standard route loading only when NOT in custom mode
  const showStandardRouteLoading = isLoading && !isCustomRouteMode;
  const showLoadingIndicator = showStandardRouteLoading || isPtLoading;

  return (
    <div className={`flex-grow relative h-full ${isFullscreen ? 'absolute inset-0 pt-[50px] z-[900]' : ''}`}>
      <div className="absolute inset-0">
        {/* Map-centered loading indicator */}
        {showLoadingIndicator && (
          <div className="absolute inset-0 flex items-center justify-center z-[1001] pointer-events-none">
            <div className="bg-slate-800 bg-opacity-80 text-white text-lg font-semibold px-4 py-2 rounded-md shadow-lg border border-slate-600">
              {/* Adjust text based on which loading is active */}
              {isPtLoading ? 'Loading transport...' : (showStandardRouteLoading ? 'Loading route...' : '')}
            </div>
          </div>
        )}
         <LeafletMap
           // key={mapKey} // Removed key prop
           startLocation={startLocation}
           isUsingGeoLocation={isUsingGeoLocation} // Pass down
           liveUserCoordinates={liveUserCoordinates} // Pass down
           attractions={attractions} // Pass all attractions for potential display
           activeAttractions={activeAttractions} // Pass calculated/ordered attractions
          segments={segments}
          onAttractionClick={onAttractionClick}
          onMapLoad={handleMapLoad}
          skippedAttractions={skippedAttractions}
          activePtRouteAttractionId={activePtRouteAttractionId}
          cityTime={cityTime}
          isCustomRouteMode={isCustomRouteMode} // Pass down to LeafletMap
          // selectedCustomAttractions prop removed here
        />
        {/* Map Controls */}
        <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
          <button className="zoom-control-button" onClick={handleZoomIn} title="Zoom In">
            <i className="fas fa-plus"></i>
          </button>
          <button className="zoom-control-button" onClick={handleZoomOut} title="Zoom Out">
            <i className="fas fa-minus"></i>
          </button>
          {/* Use the passed-in handler and state for the fullscreen button */}
          <button className="zoom-control-button" onClick={onToggleFullscreen} title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}>
            <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
          </button>
        </div>
        {/* Refresh Button */}
        {routeNeedsRefresh && (
          <button
            onClick={onRefreshRoute}
            className={`bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors absolute top-4 left-4 z-[1000] ${styles.pulsingButton}`}
            title="Refresh route"
          >
            <i className="fas fa-sync-alt"></i>
          </button>
        )}
      </div>
    </div>
  );
};
