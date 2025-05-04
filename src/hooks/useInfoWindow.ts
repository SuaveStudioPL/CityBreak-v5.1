import { useState, useCallback } from 'react';
import { Attraction } from '../types/attractions'; // Removed unused Coordinates import
// Removed unused imports: PublicTransportInfo, TransportService
import { fetchWikipediaImage as fetchWikipediaImageService } from '../services/WikipediaService';

// Rozszerzony typ dla atrakcji z informacją o punkcie kliknięcia
export interface AttractionWithClickPoint extends Attraction {
  clickPoint?: {
    x: number;
    y: number;
  };
}

// Hook do zarządzania oknem informacyjnym
export const useInfoWindow = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<AttractionWithClickPoint | null>(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(false);
  const [attractionImageUrl, setAttractionImageUrl] = useState<string | null>(null);
  // Removed state: isLoadingTransport, publicTransportInfo, transportError, startCoordinates
  const [skippedAttractions, setSkippedAttractions] = useState<string[]>([]);

  // Funkcja pobierająca zdjęcie z Wikipedii
  const fetchWikipediaImage = useCallback(async (name: string): Promise<string | null> => {
    // Użyj funkcji z serwisu WikipediaService
    return fetchWikipediaImageService(name);
  }, []);

  // Funkcja otwierająca okno informacyjne
  const handleAttractionClick = useCallback(async (attraction: AttractionWithClickPoint) => {
    // Zapisujemy pozycję kliknięcia, jeśli jest dostępna
    const attractionWithPosition = { ...attraction };

    // Najpierw próbujemy pobrać zdjęcie z Wikipedii
    let imageUrl = await fetchWikipediaImage(attraction.name);

    // Jeśli nie udało się pobrać zdjęcia z Wikipedii, a atrakcja ma zdjęcia w imageUrls, użyj pierwszego
    if (!imageUrl && attraction.imageUrls && attraction.imageUrls.length > 0) {
      imageUrl = attraction.imageUrls[0];
    }

    setAttractionImageUrl(imageUrl);

    setSelectedAttraction(attractionWithPosition);
    setIsInfoWindowOpen(true);
  }, [fetchWikipediaImage]);

  // Funkcja zamykająca okno informacyjne
  const handleCloseInfoWindow = useCallback(() => {
    setIsInfoWindowOpen(false);
    setTimeout(() => {
      setSelectedAttraction(null);
      setAttractionImageUrl(null);
      // Removed resetting transport info state
    }, 300); // Keep delay for animation
  }, []);

  // Removed handleGetPublicTransport function entirely
  // Function to toggle the skipped status of an attraction
  const toggleSkipAttraction = useCallback((attractionId: string) => {
    setSkippedAttractions(prev => {
      if (prev.includes(attractionId)) {
        // Remove from skipped attractions (restore)
        return prev.filter(id => id !== attractionId);
      } else {
        // Add to skipped attractions
        return [...prev, attractionId];
      }
    });

    // Close the info window after toggling
    handleCloseInfoWindow();
  }, [handleCloseInfoWindow]);

  // Function to check if an attraction is skipped
  const isAttractionSkipped = useCallback((attractionId: string) => {
    return skippedAttractions.includes(attractionId);
  }, [skippedAttractions]);

  return {
    selectedAttraction,
    setSelectedAttraction, // Keep setSelectedAttraction if needed externally
    isInfoWindowOpen,
    attractionImageUrl,
    // Removed: isLoadingTransport, publicTransportInfo, transportError
    handleAttractionClick,
    handleCloseInfoWindow,
    // Removed: handleGetPublicTransport, setIsLoadingTransport, setPublicTransportInfo, setTransportError
    skippedAttractions,
    setSkippedAttractions,
    toggleSkipAttraction,
    isAttractionSkipped
  };
};
