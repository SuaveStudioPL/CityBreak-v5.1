import { Coordinates } from '../types/attractions';

/**
 * Gets a public transport route from origin to destination using Google Maps Directions API
 * @param origin Starting coordinates
 * @param destination Destination coordinates
 * @returns Promise with path coordinates and route information
 */
export async function getPublicTransportRoute(
  origin: Coordinates,
  destination: Coordinates
): Promise<{ 
  path: Coordinates[];
  duration: number;
  distance: number;
  instructions: string;
  arrivalTime: string;
  departureTime: string;
}> {
  return new Promise((resolve, reject) => {
    const directionsService = new google.maps.DirectionsService();

    // Ensure coordinates are valid numbers
    const validOrigin = {
      lat: Number(origin.lat),
      lng: Number(origin.lng)
    };
    
    const validDestination = {
      lat: Number(destination.lat),
      lng: Number(destination.lng)
    };

    // Log the coordinates for debugging
    console.log('Getting public transport route from:', validOrigin, 'to:', validDestination);

    // Set departure time to now
    const departureTime = new Date();

    directionsService.route(
      {
        origin: validOrigin,
        destination: validDestination,
        travelMode: google.maps.TravelMode.TRANSIT,
        transitOptions: {
          departureTime: departureTime,
        },
        unitSystem: google.maps.UnitSystem.METRIC,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          const path: Coordinates[] = [];
          const route = result.routes[0].legs[0];
          
          // Extract all points from the route
          route.steps.forEach(step => {
            if (step.polyline) {
              const points = google.maps.geometry.encoding.decodePath(step.polyline.points);
              points.forEach(point => {
                path.push({
                  lat: point.lat(),
                  lng: point.lng()
                });
              });
            }
          });

          // Format arrival and departure times
          const arrivalTime = route.arrival_time ? 
            route.arrival_time.text : 
            new Date(departureTime.getTime() + (route.duration?.value || 0) * 1000).toLocaleTimeString();

          const departureTimeText = route.departure_time ? 
            route.departure_time.text : 
            departureTime.toLocaleTimeString();

          // Create instructions text
          let instructions = '';
          route.steps.forEach((step, index) => {
            if (step.travel_mode === google.maps.TravelMode.TRANSIT) {
              const transitDetails = step.transit;
              if (transitDetails) {
                instructions += `${index + 1}. Take ${transitDetails.line?.vehicle?.name || 'transit'} ${transitDetails.line?.short_name || transitDetails.line?.name || ''} from ${transitDetails.departure_stop?.name || 'departure'} to ${transitDetails.arrival_stop?.name || 'arrival'}\n`;
              }
            } else {
              instructions += `${index + 1}. ${step.instructions} (${step.duration?.text || 'N/A'})\n`;
            }
          });

          resolve({
            path,
            duration: route.duration?.value || 0, // duration in seconds
            distance: route.distance?.value || 0, // distance in meters
            instructions,
            arrivalTime,
            departureTime: departureTimeText
          });
        } else {
          console.error('Failed to get public transport directions:', status);
          reject(new Error(`Failed to get public transport directions: ${status}`));
        }
      }
    );
  });
}