import React, { useEffect, useRef, useState } from 'react'; // Re-added useState
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './InfoWindowNew.css';

interface InfoWindowLeafletProps {
  attraction: string;
  onClose: () => void;
  onDrawPublicTransportRoute: (destination: google.maps.LatLngLiteral) => void; // Renamed and updated signature
  position: google.maps.LatLngLiteral;
  isOpen: boolean;
  // map: google.maps.Map | null; // Removed unused map prop from interface
}

const InfoWindowLeaflet: React.FC<InfoWindowLeafletProps> = ({
  attraction,
  onClose,
  onDrawPublicTransportRoute, // Use the new prop name
  position,
  isOpen
  // map // Removed unused map prop
}) => {
  const infoWindowRef = useRef<HTMLDivElement>(null);
  const [calculatedTopStyle, setCalculatedTopStyle] = useState<string | number>(0); // State for inline top style
  const mapContainer = document.querySelector<HTMLElement>('.gm-style');

  // Remove unused effect for calculating pixelPosition
  /*
  useEffect(() => {
    if (!map || !isOpen) return;

    const overlay = new google.maps.OverlayView();
    overlay.setMap(map);

    overlay.draw = () => {
      const projection = overlay.getProjection();
      if (!projection) return;

      const pos = projection.fromLatLngToDivPixel(new google.maps.LatLng(position));
      if (!pos) return;

      setPixelPosition({ x: pos.x, y: pos.y });
    };

    return () => {
      overlay.setMap(null);
    };
  }, [map, position, isOpen]);
  */

  // Effect to calculate and set the top position
  useEffect(() => {
    const calculatePosition = () => {
      if (!mapContainer || !infoWindowRef.current) return;

      const mapRect = mapContainer.getBoundingClientRect();
      const navBar = document.querySelector<HTMLElement>('.fixed.bottom-0.bg-slate-900');
      const navBarHeight = navBar?.offsetHeight ?? 0;
      const infoWindowHeight = infoWindowRef.current.offsetHeight;

      // Calculate available height within map container, above navbar
      // Note: mapRect.height might already exclude the navbar if map container is sized correctly.
      // Let's assume mapRect covers the full area initially and subtract navbar.
      const availableHeight = mapRect.height - navBarHeight;

      // Calculate the desired center Y position within the available space, relative to viewport
      const targetCenterY = mapRect.top + (availableHeight / 2);

      // Calculate the top position needed to center the info window at targetCenterY
      let newTop = targetCenterY - (infoWindowHeight / 2);

      // Ensure the top doesn't go above the map container's top edge
      newTop = Math.max(mapRect.top, newTop);

      // Ensure the bottom doesn't go below the available space bottom edge
      const availableBottom = mapRect.top + availableHeight;
      if (newTop + infoWindowHeight > availableBottom) {
        newTop = availableBottom - infoWindowHeight;
        // Double-check if it pushes above the top edge again
        newTop = Math.max(mapRect.top, newTop);
      }


      // Set the style - position is absolute relative to .gm-style, so adjust for its top offset
      setCalculatedTopStyle(`${newTop - mapRect.top}px`);
    };

    // Calculate position when the window opens and if it's already open (for resize)
    if (isOpen) {
      // Use a small timeout to allow the info window to render and have height
      const timer = setTimeout(calculatePosition, 50);
      window.addEventListener('resize', calculatePosition);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('resize', calculatePosition);
      };
    }
  }, [isOpen, mapContainer]); // Rerun when isOpen or mapContainer changes

  // Effect for handling clicks outside the info window
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (infoWindowRef.current && !infoWindowRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!mapContainer || !isOpen) return null;

  // Remove the inline style calculation and application
  // const style = {
  //   left: `${pixelPosition.x}px`,
  //   top: `${pixelPosition.y}px`
  // };

  // Portal directly into mapContainer if it exists
  if (!mapContainer || !isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="custom-info-window-wrapper"
          ref={infoWindowRef}
          style={{ top: calculatedTopStyle }} // Apply calculated top style
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="custom-info-window">
            <div className="custom-info-window-content">
              <div className="custom-info-window-header">
                <span>{attraction}</span>
                <button
                  className="custom-info-window-close"
                  onClick={onClose}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="custom-info-window-body">
                <p>Explore alternative public transport routes.</p>
                <button
                  className="custom-info-window-button"
                  onClick={() => {
                    onDrawPublicTransportRoute(position); // Call the new function with position
                    onClose(); // Close the window immediately
                  }}
                >
                  Get public transport
                </button>
              </div>
            </div>
            {/* Remove the tip element */}
            {/* <div className="custom-info-window-tip"></div> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    mapContainer // Portal directly into mapContainer
  );
};

export default InfoWindowLeaflet;
