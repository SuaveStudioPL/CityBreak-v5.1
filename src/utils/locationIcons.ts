import L from 'leaflet';

// Wspólna definicja ikony lokalizacji użytkownika - używa tej samej ikony co marker startowy
export const createUserLocationIcon = (): L.DivIcon => {
  const iconSize: [number, number] = [30, 30];
  const iconAnchor: [number, number] = [15, 15];

  return L.divIcon({
    className: 'user-location-marker',
    html: `
      <div class="user-location-pulse" style="
        width: 40px;
        height: 40px;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        left: -5px;
        background-color: rgba(255, 255, 255, 0.4);
      "></div>
      <div class="start-icon-marker" style="width: ${iconSize[0]}px; height: ${iconSize[1]}px;">
        <img src="/icons/start.png" alt="User Location" style="width: 100%; height: 100%;" />
      </div>
    `,
    iconSize: L.point(iconSize[0], iconSize[1]),
    iconAnchor: L.point(iconAnchor[0], iconAnchor[1])
  });
};

// Wspólna definicja ikony dla markerów chodzenia
export const createWalkingIcon = (): L.Icon => {
  return L.icon({
    iconUrl: '/icons/walking.png',
    iconSize: L.point(24, 24),
    iconAnchor: L.point(12, 12)
  });
};