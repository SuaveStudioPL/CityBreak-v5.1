import { Coordinates } from '../types/attractions';

// Define interfaces for detailed steps and the overall result
export interface TransitDetails {
  line: string;
  vehicleType: string; // e.g., 'BUS', 'SUBWAY', 'TRAM', 'RAIL'
  headsign?: string;
  departureStop: string;
  arrivalStop: string;
  departureCoords: Coordinates; // Coordinates of the departure stop
  arrivalCoords: Coordinates;   // Coordinates of the arrival stop
  numStops?: number;
}

export interface WalkingDetails {
    instructions?: string;
}

export interface DetailedRouteStep {
  travelMode: 'WALKING' | 'TRANSIT';
  path: Coordinates[];
  distance: number; // meters
  duration: number; // seconds
  transitDetails?: TransitDetails;
  walkingDetails?: WalkingDetails; // Added for walking instructions if needed
}

export interface PublicTransportRouteResult {
  overviewPath: Coordinates[];
  steps: DetailedRouteStep[];
  totalDistance: number; // meters
  totalDuration: number; // seconds
}


// Wydzielona usługa do pobierania geometrii i kroków trasy transportu publicznego
export const TransportService = {
  fetchPublicTransportRouteDetails: async (
    startLocation: Coordinates,
    destinationLocation: Coordinates
  ): Promise<PublicTransportRouteResult | null> => { // Return detailed result or null
    try {
      const directionsService = new google.maps.DirectionsService();
      const now = new Date();
      
      const result = await directionsService.route({
        origin: new google.maps.LatLng(startLocation.lat, startLocation.lng),
        destination: new google.maps.LatLng(destinationLocation.lat, destinationLocation.lng),
        travelMode: google.maps.TravelMode.TRANSIT,
        transitOptions: {
          departureTime: now,
          modes: [google.maps.TransitMode.BUS, google.maps.TransitMode.RAIL, google.maps.TransitMode.SUBWAY, google.maps.TransitMode.TRAM],
          routingPreference: google.maps.TransitRoutePreference.FEWER_TRANSFERS
        }
      });

      if (!result?.routes?.[0]?.legs?.[0]) {
        console.warn('No transit routes found for the requested route.');
        return null; // Return null if no route found
      }

      const route = result.routes[0];
      const leg = route.legs[0];

      // Check if geometry library is loaded (needed for decoding step paths)
      if (!google.maps.geometry || !google.maps.geometry.encoding) {
          console.error('Google Maps Geometry library not loaded.');
          throw new Error('Google Maps Geometry library not loaded.');
      }

      // Decode overview polyline
      const overviewPath: Coordinates[] = google.maps.geometry.encoding.decodePath(route.overview_polyline).map(latLng => ({
        lat: latLng.lat(),
        lng: latLng.lng()
      }));

      // Process steps
      const steps: DetailedRouteStep[] = leg.steps.map((step): DetailedRouteStep | null => {
        if (!step.path || !step.distance || !step.duration) return null; // Skip steps without essential info

        const stepPath = step.path.map(latLng => ({ lat: latLng.lat(), lng: latLng.lng() }));
        const distance = step.distance.value;
        const duration = step.duration.value;

        if (step.travel_mode === google.maps.TravelMode.TRANSIT && step.transit) {
          const details = step.transit;
          return {
            travelMode: 'TRANSIT',
            path: stepPath,
            distance,
            duration,
            transitDetails: {
              line: details.line.short_name || details.line.name || 'N/A',
              vehicleType: details.line.vehicle?.type || 'UNKNOWN',
              headsign: details.headsign,
              departureStop: details.departure_stop.name,
              arrivalStop: details.arrival_stop.name,
              departureCoords: { lat: details.departure_stop.location.lat(), lng: details.departure_stop.location.lng() },
              arrivalCoords: { lat: details.arrival_stop.location.lat(), lng: details.arrival_stop.location.lng() },
              numStops: details.num_stops
            }
          };
        } else if (step.travel_mode === google.maps.TravelMode.WALKING) {
          return {
            travelMode: 'WALKING',
            path: stepPath,
            distance,
            duration,
            walkingDetails: {
                instructions: step.instructions // HTML instructions
            }
          };
        }
        return null; // Should not happen if travel_mode is TRANSIT or WALKING
      }).filter((step): step is DetailedRouteStep => step !== null); // Filter out any null steps

      if (steps.length === 0) {
          console.warn('No valid steps processed for the route.');
          return null;
      }

      return {
        overviewPath,
        steps,
        totalDistance: leg.distance?.value || 0,
        totalDuration: leg.duration?.value || 0,
      };
    } catch (error) {
      console.error('Error fetching public transport information:', error);
      throw error;
    }
  }
};
