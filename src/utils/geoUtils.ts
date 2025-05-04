import { Coordinates } from '../types'; // Assuming Coordinates type is in src/types/index.ts or similar

/**
 * Normalizes coordinates to ensure they have lat and lng properties.
 * Handles both {lat, lng} format and array-like format {0: lat, 1: lng}.
 *
 * @param coords - Coordinates in either format
 * @returns Normalized coordinates with lat and lng properties
 */
export function normalizeCoordinates(coords: any): Coordinates {
  // If coords already has lat and lng properties, return it as is
  if (coords.lat !== undefined && coords.lng !== undefined) {
    return coords;
  }
  
  // If coords has numeric indices (like {0: lat, 1: lng})
  if (coords[0] !== undefined && coords[1] !== undefined) {
    return {
      lat: coords[0],
      lng: coords[1]
    };
  }
  
  // If we can't normalize, return the original (type checking will catch issues)
  return coords;
}

/**
 * Calculates the great-circle distance between two points
 * on the Earth (specified in decimal degrees) using the Haversine formula.
 *
 * @param coord1 - The coordinates of the first point { lat: number, lng: number }.
 * @param coord2 - The coordinates of the second point { lat: number, lng: number }.
 * @returns The distance between the two points in kilometers.
 */
export function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
  // Normalize coordinates to ensure they have lat and lng properties
  const normalizedCoord1 = normalizeCoordinates(coord1);
  const normalizedCoord2 = normalizeCoordinates(coord2);
  
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = deg2rad(normalizedCoord2.lat - normalizedCoord1.lat);
  const dLon = deg2rad(normalizedCoord2.lng - normalizedCoord1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(normalizedCoord1.lat)) * Math.cos(deg2rad(normalizedCoord2.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Finds the geocoding result closest to a reference point.
 * 
 * @param results - An array of Google Geocoding results.
 * @param referenceCoords - The reference coordinates { lat: number, lng: number }.
 * @returns The geocoding result closest to the reference point, or null if results are empty.
 */
export function findClosestResult(
  results: google.maps.GeocoderResult[], 
  referenceCoords: Coordinates
): google.maps.GeocoderResult | null {
  if (!results || results.length === 0) {
    return null;
  }

  if (results.length === 1) {
    return results[0];
  }

  let closestResult: google.maps.GeocoderResult | null = null;
  let minDistance = Infinity;

  results.forEach(result => {
    const resultCoords = {
      lat: result.geometry.location.lat(),
      lng: result.geometry.location.lng(),
    };
    const distance = calculateDistance(referenceCoords, resultCoords);

    if (distance < minDistance) {
      minDistance = distance;
      closestResult = result;
    }
  });

  return closestResult;
}
