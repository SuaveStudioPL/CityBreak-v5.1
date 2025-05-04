function displayRouteForDay(dayNumber) {
  // Najpierw wyczyść wszystkie istniejące trasy z mapy
  clearAllRoutesFromMap();
  
  // Następnie wyświetl tylko trasę dla wybranego dnia
  const routeForSelectedDay = getRouteForDay(dayNumber);
  displayRouteOnMap(routeForSelectedDay);
}

function clearAllRoutesFromMap() {
  // Usuń wszystkie istniejące warstwy tras z mapy
  if (map.getLayer('route-layer')) {
    map.removeLayer('route-layer');
  }
  if (map.getSource('route-source')) {
    map.removeSource('route-source');
  }
  
  // Ewentualnie usuń również markery punktów trasy
  markers.forEach(marker => marker.remove());
  markers = [];
} 