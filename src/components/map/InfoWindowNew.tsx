import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './InfoWindowNew.css';
import { motion, AnimatePresence } from 'framer-motion';

interface InfoWindowNewProps {
  attraction: string;
  onClose: () => void;
  onGetPublicTransport: () => void;
  // position: google.maps.LatLngLiteral; // Removed position prop
  isOpen?: boolean;
  description?: string;
  category?: string;
  funFact?: string;
  openingHours?: string;
  freeEntryInfo?: string;
}

// Removed unused type declaration

// Simple InfoWindow implementation that doesn't depend on Google Maps API internals
const InfoWindowNew: React.FC<InfoWindowNewProps> = ({
  attraction,
  onClose,
  onGetPublicTransport,
  // position, // Removed position prop
  isOpen = true, // Domyślnie okno jest otwarte, gdy komponent jest renderowany
  description,
  category,
  funFact,
  openingHours,
  freeEntryInfo
}) => {
  // Removed pixelPosition state and related useEffect
  const [showFullDescription, setShowFullDescription] = useState(false);
  const infoWindowRef = useRef<HTMLDivElement>(null);
  // Target the Leaflet map container by its ID
  const mapContainer = document.getElementById('leaflet-map');

  // Removed useEffect for calculating pixel position

  // Removed style object

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only close if clicking outside the info window and not on a Leaflet marker
      if (infoWindowRef.current &&
          !infoWindowRef.current.contains(event.target as Node) &&
          !(event.target as HTMLElement).closest('.leaflet-marker-icon')) { // Check for Leaflet marker class
        onClose();
      }
    };

    if (isOpen) {
      // Use a slight delay to prevent immediate closing
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!mapContainer) return null;
  
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="custom-info-window-wrapper"
          // style={style} // Removed style prop
          ref={infoWindowRef}
          initial={{ opacity: 0, scale: 0.8 }} // Removed y animation
          animate={{ opacity: 1, scale: 1 }} // Removed y animation
          exit={{ opacity: 0, scale: 0.8 }} // Removed y animation
            transition={{ duration: 0.2 }}
          >
            <div className="custom-info-window">
              {/* <div className="custom-info-window-content"> */} {/* Removed content wrapper */}
                <div className="custom-info-window-header">
                  <span className="text-sm sm:text-base">{attraction}</span>
                  <button
                  className="custom-info-window-close"
                  onClick={onClose}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="custom-info-window-body">
                {category && (
                  <div className="custom-info-window-category">
                    <span className="category-badge">{category}</span>
                  </div>
                )}
                {description && (
                  <div className="custom-info-window-description-container">
                    <p className="custom-info-window-description">
                      {showFullDescription ? description : (
                        description.length > 150 ? description.substring(0, 150) + '...' : description
                      )}
                    </p>
                    {description.length > 150 && (
                      <button 
                        className="custom-info-window-more-button"
                        onClick={() => setShowFullDescription(!showFullDescription)}
                      >
                        {showFullDescription ? 'Less' : 'More'}
                      </button>
                    )}
                  </div>
                )}
                {openingHours && (
                  <div className="custom-info-window-opening-hours">
                    <h4>Opening hours:</h4>
                    <p>{openingHours}</p>
                  </div>
                )}
                {freeEntryInfo && (
                  <div className="custom-info-window-free-entry">
                    <h4>Free entry:</h4>
                    <p>{freeEntryInfo}</p>
                  </div>
                )}
                {funFact && (
                  <div className="custom-info-window-fun-fact">
                    <h4>Fun Fact:</h4>
                    <p>{funFact}</p>
                  </div>
                )}
                <p>Explore alternative public transport routes.</p>
                <button
                  className="custom-info-window-button"
                  onClick={onGetPublicTransport}
                >
                  Get Alternative Route
                </button>
              </div> {/* Restored closing tag for custom-info-window-body */}
            {/* </div> */} {/* Removed content wrapper closing tag - This remains removed */}
            <div className="custom-info-window-tip"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    mapContainer
  );
};

export default InfoWindowNew;
