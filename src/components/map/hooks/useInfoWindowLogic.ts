import { useState, useCallback } from 'react';
import { Attraction } from '../../../types/attractions';

export const useInfoWindowLogic = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(false);

  // Funkcja obsługująca kliknięcie w marker atrakcji
  const handleAttractionClick = useCallback((attraction: Attraction) => {
    // Jeśli klikamy w ten sam marker, nie zamykamy okna
    if (selectedAttraction?.id === attraction.id) {
      // Upewniamy się, że okno jest otwarte nawet jeśli klikamy ponownie w ten sam marker
      setIsInfoWindowOpen(true);
      return;
    }
    
    setSelectedAttraction(attraction);
    setIsInfoWindowOpen(true);
  }, [selectedAttraction]);

  // Funkcja zamykająca okno informacyjne
  const handleCloseInfoWindow = useCallback(() => {
    // Zamykamy okno tylko gdy użytkownik wyraźnie kliknie przycisk zamknięcia
    setIsInfoWindowOpen(false);
    // Opóźniamy usunięcie wybranej atrakcji, aby animacja zamknięcia mogła się zakończyć
    setTimeout(() => {
      setSelectedAttraction(null);
    }, 300);
  }, []);

  // Funkcja obsługująca żądanie trasy transportu publicznego
  const handlePublicTransportRoute = useCallback((attraction: Attraction) => {
    console.log("Getting public transport route for:", attraction.name);
    alert(`Finding alternative public transport routes to ${attraction.name}`);
  }, []);

  return {
    selectedAttraction,
    isInfoWindowOpen,
    handleAttractionClick,
    handleCloseInfoWindow,
    handlePublicTransportRoute
  };
};