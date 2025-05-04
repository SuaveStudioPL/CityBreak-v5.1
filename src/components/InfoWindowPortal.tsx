import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchImageAttribution, formatAttribution } from '../utils/imageUtils';
import { Attraction } from '../types/attractions';
import TruncatedText from './TruncatedText'; // Import the new component
import { getAttractionStatus, AttractionStatus } from '../utils/timeUtils';

// Interfejs dla komponentu InfoWindowPortal
interface InfoWindowPortalProps {
  isOpen: boolean;
  attraction: Attraction;
  cityTime: Date;
  imageUrl: string | null;
  onClose: () => void;
  onDrawPublicTransportRoute: () => void;
  onClosePublicTransportRoute: () => void;
  onSkipAttraction: () => void;
  isSkipped: boolean;
  activePtRouteAttractionId: string | null;
  position?: { x: number; y: number }; // Pozycja kliknięcia na ekranie
  // Add custom route props
  isCustomRouteMode: boolean;
  customRouteAttractions: Attraction[]; // List of attractions currently in the custom route
  onAddToCustomRoute: (attraction: Attraction) => void;
  onRemoveFromCustomRoute: (attractionId: string) => void;
}

const InfoWindowPortal: React.FC<InfoWindowPortalProps> = ({
  isOpen,
  attraction,
  cityTime,
  imageUrl,
  onClose,
  onDrawPublicTransportRoute,
  onClosePublicTransportRoute,
  onSkipAttraction,
  isSkipped,
  activePtRouteAttractionId,
  // Destructure custom route props
  isCustomRouteMode,
  customRouteAttractions,
  onAddToCustomRoute,
  onRemoveFromCustomRoute,
// position is removed since it's not used in the component
}) => {
  const [attribution, setAttribution] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const [showFullDescription, setShowFullDescription] = useState(false);
  const [status, setStatus] = useState<AttractionStatus>('unknown');
  const [portalElement] = useState(() => document.createElement('div'));
  const infoWindowRef = useRef<HTMLDivElement>(null);
  
  // Obliczanie statusu atrakcji
  useEffect(() => {
    if (attraction && cityTime) {
      setStatus(getAttractionStatus(attraction, cityTime));
    } else {
      setStatus('unknown');
    }
  }, [attraction, cityTime]);
  
  // Dodajemy efekt, który będzie aktualizował pozycję okna przy zmianie rozmiaru ekranu
  useEffect(() => {
    const handleResize = () => {
      // Wymuszamy przerenderowanie komponentu, aby zaktualizować pozycję
      setShowFullDescription(showFullDescription);
    };

    // Dodajemy obsługę zmiany rozmiaru okna
    window.addEventListener('resize', handleResize);
    
    // Dodajemy obsługę zmiany orientacji urządzenia
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [showFullDescription]);
  
  // Dodajemy efekt, który będzie aktualizował pozycję okna po jego otwarciu
  useEffect(() => {
    if (isOpen && infoWindowRef.current) {
      // Używamy setTimeout, aby dać czas na pełne wyrenderowanie okna
      const timer = setTimeout(() => {
        // Wymuszamy przerenderowanie komponentu, aby zaktualizować pozycję
        setShowFullDescription(showFullDescription);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, showFullDescription]);

  // Pobieranie informacji o atrybucie zdjęcia i obsługa błędów ładowania
  useEffect(() => {
    const getAttribution = async () => {
      if (!imageUrl && !attraction.imageUrls?.[currentImageIndex]) {
        setAttribution('');
        return;
      }
      
      const currentImage = imageUrl || attraction.imageUrls?.[currentImageIndex];
      if (currentImage) {
        const attributionData = await fetchImageAttribution(currentImage);
        setAttribution(formatAttribution(attributionData));
      }
    };
    
    getAttribution();
  }, [imageUrl, attraction.imageUrls, currentImageIndex]);

  // Obsługa błędów ładowania obrazu i przełączanie na kolejny dostępny
  const handleImageError = () => {
    if (attraction.imageUrls?.length && currentImageIndex < attraction.imageUrls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Dodawanie i usuwanie portalu z DOM
  useEffect(() => {
    document.body.appendChild(portalElement);
    portalElement.className = 'info-window-portal';
    
    return () => {
      document.body.removeChild(portalElement);
    };
  }, [portalElement]);

  // Obsługa kliknięcia poza oknem informacyjnym
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (infoWindowRef.current && !infoWindowRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      // Małe opóźnienie, aby zapobiec natychmiastowemu zamknięciu
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Obliczanie pozycji okna informacyjnego - zawsze dokładnie na środku mapy z uwzględnieniem paneli górnego i dolnego
  const calculatePosition = () => {
    // Pobieramy rzeczywiste wymiary okna przeglądarki
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Pobieramy wymiary panelu nawigacyjnego dolnego
    const bottomNavBar = document.querySelector<HTMLElement>('.fixed.bottom-0');
    const bottomNavBarHeight = bottomNavBar?.offsetHeight || 64; // Domyślnie 64px jeśli nie znaleziono
    
    // Sprawdzamy, czy istnieje panel górny (header)
    const topNavBar = document.querySelector<HTMLElement>('.fixed.top-0');
    const topNavBarHeight = topNavBar?.offsetHeight || 0; // 0 jeśli nie znaleziono
    
    // Dynamiczne obliczanie wymiarów okna informacyjnego
    let infoWindowWidth = 320; // Domyślna szerokość
    let infoWindowHeight = 400; // Domyślna wysokość jako zabezpieczenie
    
    if (infoWindowRef.current) {
      // Używamy rzeczywistej wysokości i szerokości elementu, jeśli jest dostępna
      const rect = infoWindowRef.current.getBoundingClientRect();
      infoWindowHeight = rect.height;
      infoWindowWidth = rect.width;
    }
    
    // Obliczanie pozycji - zawsze dokładnie na środku ekranu
    // Środek w poziomie - bez żadnych dodatkowych obliczeń
    const left = (windowWidth - infoWindowWidth) / 2;
    
    // Środek w pionie (z uwzględnieniem paneli górnego i dolnego)
    // Obliczamy dostępną przestrzeń (od góry ekranu do paska nawigacyjnego)
    const availableVerticalSpace = windowHeight - bottomNavBarHeight - topNavBarHeight;
    
    // Przesuwamy okno nieco niżej, aby było równomiernie oddalone od paneli górnego i dolnego
    // Dodajemy offset 15px, aby okno było nieco niżej od matematycznego środka
    const top = topNavBarHeight + (availableVerticalSpace - infoWindowHeight) / 2 + 15;
    
    // Upewniamy się, że okno nie wychodzi poza ekran
    const safeTop = Math.max(topNavBarHeight + 10, Math.min(top, windowHeight - bottomNavBarHeight - infoWindowHeight - 10));
    
    // Zwracamy obiekt zgodny z typem MotionStyle
    return {
      position: 'fixed' as const,
      left: `${left}px`,
      top: `${safeTop}px`,
      zIndex: 1000
    };
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[1200] pointer-events-none">
          <motion.div
            ref={infoWindowRef}
            className="bg-gray-800 text-white rounded-lg p-2 sm:p-3 md:p-4 w-[95vw] max-w-[320px] sm:w-[85vw] sm:max-w-[370px] md:w-[75vw] md:max-w-[420px] shadow-lg max-h-[85vh] pointer-events-auto"
            style={calculatePosition()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Nagłówek */}
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <h2 className="text-sm sm:text-base md:text-lg font-bold mr-2">{attraction.name}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-base sm:text-lg md:text-xl leading-none"
              >
                &times;
              </button>
            </div>

            {/* Zdjęcie */}
            {(imageUrl || (attraction.imageUrls && attraction.imageUrls.length > 0)) && (
              <div className="relative mb-2 sm:mb-3">
                <img
                  src={imageUrl || attraction.imageUrls?.[currentImageIndex]}
                  alt={attraction.name}
                  className="w-full h-24 sm:h-32 md:h-40 object-cover rounded"
                  onError={handleImageError}
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

            {/* Status */}
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

            {/* Treść */}
            <div className="space-y-1 sm:space-y-1.5">
              {/* Opis */}
              <div className="text-gray-300 text-[11px] sm:text-xs">
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

              {/* Godziny otwarcia */}
              {attraction.openingHours && (
                <div className="text-[10px] sm:text-[11px] text-gray-300">
                  <span className="font-semibold text-gray-200">Opening hours:</span> {attraction.openingHours}
                </div>
              )}

              {/* Informacje o darmowym wejściu */}
              {attraction.freeEntryInfo && (
                <div className="text-[10px] sm:text-[11px] text-gray-300">
                  <span className="font-semibold text-gray-200">Free entry:</span> {attraction.freeEntryInfo}
                </div>
              )}

              {/* Przyciski */}
              <div className="flex flex-row justify-between gap-2 sm:gap-3">
                {/* Przycisk transportu publicznego */}
                {activePtRouteAttractionId === attraction.id ? (
                  <button
                    onClick={onClosePublicTransportRoute}
                    className="flex-1 py-1 sm:py-1.5 px-2 sm:px-3 rounded text-[11px] sm:text-xs bg-yellow-600 hover:bg-yellow-700 text-white"
                  >
                    Close generated route
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onDrawPublicTransportRoute();
                      onClose();
                    }}
                    className="flex-1 py-1 sm:py-1.5 px-2 sm:px-3 rounded text-[11px] sm:text-xs bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Get public transport
                  </button>
                )}

                {/* Przycisk pomijania atrakcji (Hide in custom mode) */}
                {!isCustomRouteMode && (
                  <button
                    onClick={onSkipAttraction}
                    className={`flex-1 py-1 sm:py-1.5 px-2 sm:px-3 rounded text-[11px] sm:text-xs ${
                    isSkipped
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    {isSkipped ? 'Restore attraction' : 'Skip attraction'}
                  </button>
                )}

                {/* Custom Route Add/Remove Button (only in custom mode) */}
                {isCustomRouteMode && (
                  (() => {
                    const isInCustomRoute = customRouteAttractions.some(a => a.id === attraction.id);
                    return (
                      <button
                        onClick={() => {
                          if (isInCustomRoute) {
                            onRemoveFromCustomRoute(attraction.id);
                          } else {
                            onAddToCustomRoute(attraction);
                          }
                          // Close the window after adding/removing
                          onClose();
                        }}
                        className={`flex-1 py-1 sm:py-1.5 px-2 sm:px-3 rounded text-[11px] sm:text-xs ${
                          isInCustomRoute
                            ? 'bg-orange-600 hover:bg-orange-700 text-white' // Style for "Remove"
                            : 'bg-purple-600 hover:bg-purple-700 text-white' // Style for "Add"
                        }`}
                      >
                        {isInCustomRoute ? 'Remove from route' : 'Add to your route'}
                      </button>
                    );
                  })()
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    portalElement
  );
};

export default InfoWindowPortal;
