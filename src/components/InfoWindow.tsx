import React, { useState, useEffect } from 'react';
import { fetchImageAttribution, formatAttribution } from '../utils/imageUtils';
import { Attraction } from '../types/attractions'; // Import Attraction type
import TruncatedText from './TruncatedText'; // Import the new component
import { getAttractionStatus, AttractionStatus } from '../utils/timeUtils'; // Import status logic

// Interfejs dla komponentu InfoWindow
interface InfoWindowProps {
  isOpen: boolean;
  attraction: Attraction; // Pass the full attraction object
  cityTime: Date; // Pass the current city time
  imageUrl: string | null;
  onClose: () => void;
  onDrawPublicTransportRoute: () => void;
  onClosePublicTransportRoute: () => void; // Handler to close the PT route
  onSkipAttraction: () => void;
  isSkipped: boolean;
  // attractionId is now attraction.id
  activePtRouteAttractionId: string | null; // ID of the attraction whose PT route is active
  // openingHours is now attraction.openingHours
  // freeEntryInfo is now attraction.freeEntryInfo
}

// Komponent InfoWindow
const AttractionInfoWindow: React.FC<InfoWindowProps> = ({
  isOpen,
  attraction, // Destructure the full attraction object
  cityTime, // Destructure cityTime
  imageUrl,
  onClose,
  onDrawPublicTransportRoute,
  onClosePublicTransportRoute,
  onSkipAttraction,
  isSkipped,
  activePtRouteAttractionId,
}) => {
  const [attribution, setAttribution] = useState<string>('');
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [status, setStatus] = useState<AttractionStatus>('unknown');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Funkcja do obsługi błędów ładowania zdjęcia
  const handleImageError = () => {
    if (attraction.imageUrls && currentImageIndex < attraction.imageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setImageError(false);
    } else {
      setImageError(true);
    };
  };

  // Calculate status when attraction or cityTime changes
  useEffect(() => {
    if (attraction && cityTime) {
      setStatus(getAttractionStatus(attraction, cityTime));
    } else {
      setStatus('unknown'); // Default if data is missing
    }
  }, [attraction, cityTime]);

  useEffect(() => {
    const getAttribution = async () => {
      if (!imageUrl) {
        setAttribution('');
        return;
      }
      
      const attributionData = await fetchImageAttribution(imageUrl);
      setAttribution(formatAttribution(attributionData));
    };
    
    getAttribution();
  }, [imageUrl]);
  if (!isOpen) return null;

  return (
    // Removed fixed positioning, handled by parent. Adjusted width/max-width, removed overflow, adjusted max-h.
    <div className="bg-gray-800 text-white rounded-lg p-2 sm:p-3 md:p-4 w-[95vw] max-w-[320px] sm:w-[85vw] sm:max-w-[370px] md:w-[75vw] md:max-w-[420px] shadow-lg transition-all duration-300 max-h-[85vh]"> {/* Removed overflow-y-auto, adjusted max-h */}
      {/* Adjusted spacing and font sizes (decreased) */}
      <div className="flex justify-between items-start mb-2 sm:mb-3">
        {/* Use attraction.name */}
        <h2 className="text-sm sm:text-base md:text-lg font-bold mr-2">{attraction.name}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white text-base sm:text-lg md:text-xl leading-none" // Decreased size
        >
          &times; {/* Using HTML entity for better rendering */}
        </button>
      </div>

      {attraction.imageUrls && attraction.imageUrls.length > 0 && !imageError ? (
        <div className="relative mb-2 sm:mb-3">
          <img
            src={attraction.imageUrls[currentImageIndex]}
            alt={attraction.name}
            onError={handleImageError}
            className="w-full h-24 sm:h-32 md:h-40 object-cover rounded"
          />
          {attribution && (
            <TruncatedText
              text={attribution}
              maxLength={70}
              className="absolute bottom-0.5 right-0.5 bg-black bg-opacity-60 text-white text-[9px] sm:text-[11px] px-1 rounded"
            />
          )}
        </div>
      ) : imageUrl && !imageError && (
        <div className="relative mb-2 sm:mb-3">
          <img
            src={imageUrl}
            alt={attraction.name}
            className="w-full h-24 sm:h-32 md:h-40 object-cover rounded"
          />
          {attribution && (
            <TruncatedText
              text={attribution}
              maxLength={70}
              className="absolute bottom-0.5 right-0.5 bg-black bg-opacity-60 text-white text-[9px] sm:text-[11px] px-1 rounded"
            />
          )}
        </div>
      )}

      {/* Status Message */}
      {status === 'closed' && (
        <p className="text-red-500 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
          Might be closed right now. Please check site.
        </p>
      )}
      {status === 'free' && (
         <p className="text-green-500 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
           Free today. Check site.
         </p>
      )}

      {/* Adjusted spacing */}
      <div className="space-y-2 sm:space-y-3">
        {/* Description with show more/less functionality */}
        <div className="text-gray-300 text-[11px] sm:text-xs">
           {/* Use attraction.description */}
          {attraction.description.length > 150 && !showFullDescription ? (
            <>
              <div dangerouslySetInnerHTML={{ __html: attraction.description.substring(0, 150) + '...' }} />
              <button
                onClick={() => setShowFullDescription(true)}
                className="text-blue-400 hover:text-blue-300 text-[10px] sm:text-[11px] mt-1"
              >
                More
              </button>
            </>
          ) : (
            <>
               {/* Use attraction.description */}
              <div dangerouslySetInnerHTML={{ __html: attraction.description }} />
              {attraction.description.length > 150 && (
                <button
                  onClick={() => setShowFullDescription(false)}
                  className="text-blue-400 hover:text-blue-300 text-[10px] sm:text-[11px] mt-1"
                >
                  Less
                </button>
              )}
            </>
          )}
        </div>

        {/* Opening hours section */}
         {/* Use attraction.openingHours */}
        {attraction.openingHours && (
          <div className="text-[10px] sm:text-[11px] text-gray-300">
            <span className="font-semibold text-gray-200">Opening hours:</span> {attraction.openingHours}
          </div>
        )}

        {/* Free entry information */}
         {/* Use attraction.freeEntryInfo */}
        {attraction.freeEntryInfo && (
          <div className="text-[10px] sm:text-[11px] text-gray-300">
            <span className="font-semibold text-gray-200">Free entry:</span> {attraction.freeEntryInfo}
          </div>
        )}
        {/* Adjusted gap */}
        <div className="flex flex-col gap-1 sm:gap-1.5">
          {/* Conditionally render Get/Close PT route button */}
           {/* Use attraction.id */}
          {activePtRouteAttractionId === attraction.id ? (
            <button
              onClick={onClosePublicTransportRoute} // Call close handler
              className="w-full py-1 sm:py-1.5 px-2 sm:px-3 rounded text-[11px] sm:text-xs bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              Close generated route
            </button>
          ) : (
            <button
              onClick={() => {
                onDrawPublicTransportRoute(); // Call the drawing function
                onClose(); // Close the window immediately after clicking
              }}
              className="w-full py-1 sm:py-1.5 px-2 sm:px-3 rounded text-[11px] sm:text-xs bg-blue-600 hover:bg-blue-700 text-white"
            >
              Get public transport
            </button>
          )}

          <button
            onClick={onSkipAttraction}
             // Adjusted padding and decreased font size
            className={`w-full py-1 sm:py-1.5 px-2 sm:px-3 rounded text-[11px] sm:text-xs ${ 
              isSkipped
                ? 'bg-green-600 hover:bg-green-700 text-white'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            {isSkipped ? 'Restore attraction' : 'Skip attraction'} {/* Shortened text */}
          </button>
        </div>

        {/* Removed transportError and publicTransportInfo display sections */}
      </div>
    </div>
  );
};

export default AttractionInfoWindow;
