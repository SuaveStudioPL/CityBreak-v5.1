export const mapContainerStyle = {
  width: '100%',
  height: '100%'
};

export const defaultCenter = { lat: 52.2297, lng: 21.0122 }; // Warsaw coordinates as default

export const mapOptions = {
  styles: [
    {
      featureType: 'all',
      elementType: 'all',
      stylers: [{ saturation: -100 }]
    }
  ],
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: true
}; 