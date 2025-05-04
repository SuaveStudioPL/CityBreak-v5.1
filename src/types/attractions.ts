export interface Coordinates {
  lat: number;
  lng: number;
  [key: number]: number; // Umożliwia indeksowanie numeryczne dla formatu [0]: lat, [1]: lng
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  coordinates: Coordinates;
  category?: string;
  funFact?: string;
  legend?: string;
  order?: number;
  estimatedVisitTime?: number;  // Czas w minutach
  openingHours?: string; // e.g., "9:00 - 17:00", "Mon-Fri: 10:00 - 18:00, Sat: 10:00 - 16:00"
  freeEntryInfo?: string; // e.g., "Free entry on Tuesdays", "Free entry first Sunday of the month"
  imageAuthor?: string; // Optional field for image author attribution
  imageUrls?: string[]; // Array of backup image URLs
}

export interface RoutePoint {
  attraction: Attraction;
  order: number;
  day: number;
}

export interface RouteSegment {
  path: Coordinates[]; // Overall path for the segment (might be redundant if steps are used)
  transportType: 'walking' | 'transit' | 'driving'; // Overall type (might be less useful with steps)
  distance: number; // Total distance for the segment
  steps?: JourneyStep[]; // Array of detailed steps making up this segment
  transitDetails?: { // Kept for potential backward compatibility or simpler use cases
    line: string;
    departureStop?: string;
    arrivalStop?: string;
    vehicle?: {
      type: string;
      name: string;
    };
    walkingSegments?: {
      type: 'to' | 'from';  // 'to' for walking to departure stop, 'from' for walking from arrival stop
      path: Coordinates[];
    }[];
  };
}

export interface DayRoute {
  day: number;
  attractions: Attraction[];
  segments: RouteSegment[];
  path: Coordinates[];
  routeVariant?: string;
}

// Detailed information for a single transit step in a journey
export interface TransitStepDetails {
  line: string; // e.g., "123", "M1"
  vehicleType: string; // e.g., "BUS", "SUBWAY", "TRAM"
  vehicleName: string; // e.g., "Bus 123", "Metro Line 1"
  departureStop: string;
  arrivalStop: string;
  departureTime?: string; // Optional: if available from API
  arrivalTime?: string;   // Optional: if available from API
  headsign?: string;      // Optional: direction/destination shown on vehicle
  numStops?: number;      // Optional: number of stops in this step
}

// Detailed information for a single walking step in a journey
export interface WalkingStepDetails {
  instructions: string; // e.g., "Walk to Main Street Station"
}

// Represents a single step in a multi-modal journey
export interface JourneyStep {
  path: Coordinates[];
  distance: number; // meters
  duration: number; // seconds
  travelMode: 'WALKING' | 'TRANSIT';
  transitDetails?: TransitStepDetails; // Only present if travelMode is 'TRANSIT'
  walkingDetails?: WalkingStepDetails; // Only present if travelMode is 'WALKING'
}

export interface Segment { // This seems potentially redundant or outdated given RouteSegment/JourneyStep? Review needed.
  path: google.maps.LatLngLiteral[];
  transportType: 'walking' | 'transit';
  transitDetails?: {
    line: string;
    departureStop?: string;
    arrivalStop?: string;
    vehicle?: {
      type: string;
      name: string;
    };
  };
}
