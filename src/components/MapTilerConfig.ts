/**
 * MapTiler configuration
 * This file contains the configuration for MapTiler integration
 */

// MapTiler API key
export const MAPTILER_API_KEY = '7BoidXQpr42IoqNIMb5Q';

// Custom map style ID
export const CUSTOM_MAP_STYLE_ID = '01969b67-ab53-744a-b5e6-dc18e3d3b65a';

// Use streets-v2 as the primary style
export const PRIMARY_MAP_STYLE = 'streets-v2';

// Fallback to a standard style if the primary style doesn't work
export const FALLBACK_MAP_STYLE = 'basic-v2';

// Alternative standard styles
export const OUTDOOR_STYLE = 'outdoor-v2';
export const TOPO_STYLE = 'topo-v2';

// Generate the URL for the custom map style (XYZ format)
export const getCustomMapTileUrl = () => {
  // Try with standard format (no @2x)
  return `https://api.maptiler.com/maps/${CUSTOM_MAP_STYLE_ID}/{z}/{x}/{y}.png?key=${MAPTILER_API_KEY}`;
};

// Generate the URL for the custom map style JSON
export const getCustomMapStyleJsonUrl = () => {
  return `https://api.maptiler.com/maps/${CUSTOM_MAP_STYLE_ID}/style.json?key=${MAPTILER_API_KEY}`;
};

// Generate the URL for the primary style JSON (streets-v2)
export const getPrimaryMapStyleJsonUrl = () => {
  return `https://api.maptiler.com/maps/${PRIMARY_MAP_STYLE}/style.json?key=${MAPTILER_API_KEY}`;
};

// Alternative URL for vector tiles (MVT format) if the custom style is vector-based
export const getCustomMapVectorTileUrl = () => {
  return `https://api.maptiler.com/tiles/${CUSTOM_MAP_STYLE_ID}/{z}/{x}/{y}.mvt?key=${MAPTILER_API_KEY}`;
};

// Generate the URL for the fallback map style
export const getFallbackMapTileUrl = () => {
  // Use a standard MapTiler style that is guaranteed to work
  return `https://api.maptiler.com/maps/${FALLBACK_MAP_STYLE}/{z}/{x}/{y}.png?key=${MAPTILER_API_KEY}`;
};

// Generate the URL for the primary style (streets-v2)
export const getPrimaryMapTileUrl = () => {
  return `https://api.maptiler.com/maps/${PRIMARY_MAP_STYLE}/{z}/{x}/{y}.png?key=${MAPTILER_API_KEY}`;
};

// Standard MapTiler tile layer options
export const mapTilerOptions = {
  attribution: '&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  maxZoom: 19,
  tileSize: 512,
  zoomOffset: -1,
  crossOrigin: true
};
