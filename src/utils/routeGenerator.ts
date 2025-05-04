import { attractions } from '../data/attractions';
import { Attraction, Coordinates, RouteSegment as BaseRouteSegment, DayRoute, JourneyStep, TransitStepDetails, WalkingStepDetails } from '../types/attractions'; // Import new types

// Maximum distance for short routes (in meters)
const SHORT_ROUTE_MAX_DISTANCE = 2000;

// Extend the RouteSegment interface to include distance and duration
interface RouteSegment extends BaseRouteSegment {
  distance: number;
  duration: number;
}

// Helper function to calculate distance between two points (in kilometers)
export function calculateDistance(point1: Coordinates, point2: Coordinates): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(point2.lat - point1.lat);
  const dLng = deg2rad(point2.lng - point1.lng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(point1.lat)) * Math.cos(deg2rad(point2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Helper function to convert degrees to radians
function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

// Note: Removed unused constants ATTRACTION_VISIT_TIMES and DEFAULT_VISIT_TIME

export async function generateRoute(
  city: string,
  startLocation: Coordinates,
  days: number,
  routeType: 'complete' | 'short' | 'top-5' = 'complete',
  skippedAttractions: string[] = []
): Promise<DayRoute[]> {
  const cityAttractions = attractions[city];
  if (!cityAttractions) return [];

  // Filter out skipped attractions
  const availableAttractions = cityAttractions.filter(attraction => !skippedAttractions.includes(attraction.id));

  const routes: DayRoute[] = [];

  // For single day trip
  if (days === 1) {
    // Generate routes based on the requested type
    if (routeType === 'top-5') {
      const totalAttractions = cityAttractions.length;
      const topAttractionsCount = totalAttractions <= 12 ? 4 : 5;
      const topAttractions = availableAttractions.slice(0, topAttractionsCount);

      if (topAttractions.length > 0) {
        // Generate the route directly using the top attractions
        const topRoute = await generateSimpleRoute(topAttractions, startLocation);
        if (topRoute) {
          topRoute.attractions.forEach((attraction: Attraction, index: number) => {
            attraction.order = index + 1;
          });
          topRoute.day = 1;
          topRoute.routeVariant = totalAttractions <= 12 ? 'Top 4 attractions' : 'Top 5 attractions';
          routes.push(topRoute);
        }
      }
    } else if (routeType === 'complete') {
      // Generate all single-day variants

      // 1. Short distance route
      const shortRouteAttractions = availableAttractions.filter(attraction => {
        const distance = calculateDistance(startLocation, attraction.coordinates) * 1000;
        return distance <= SHORT_ROUTE_MAX_DISTANCE;
      });

      if (shortRouteAttractions.length > 0) {
        const shortRoute = await generateSimpleRoute(shortRouteAttractions, startLocation);
        if (shortRoute) {
          shortRoute.attractions.forEach((attraction: Attraction, index: number) => {
            attraction.order = index + 1;
          });
          shortRoute.day = 1;
          shortRoute.routeVariant = 'Short distance route';
          routes.push(shortRoute);
        }
      }

      // 2. Top 5/4 attractions route
      const totalAttractions = cityAttractions.length;
      const topAttractionsCount = totalAttractions <= 12 ? 4 : 5;
      const topAttractions = availableAttractions.slice(0, topAttractionsCount);

      if (topAttractions.length > 0) {
        const topRoute = await generateSimpleRoute(topAttractions, startLocation);
        if (topRoute) {
          topRoute.attractions.forEach((attraction: Attraction, index: number) => {
            attraction.order = index + 1;
          });
          topRoute.day = 1;
          topRoute.routeVariant = totalAttractions <= 12 ? 'Top 4 attractions' : 'Top 5 attractions';
          // Avoid adding duplicate if it's the same as 'No Museums/Parks' or 'Short distance'
          // This check might need refinement based on exact requirements for duplicates
          if (!routes.some(r => r.routeVariant === topRoute.routeVariant)) {
             routes.push(topRoute);
          }
        }
      }

    } else {
      // Generate a specific single route ('short')
      let filteredAttractions = [...availableAttractions];
      let variantName = 'Day 1'; // Default variant name

      if (routeType === 'short') {
        filteredAttractions = filteredAttractions.filter(attraction => {
          const distance = calculateDistance(startLocation, attraction.coordinates) * 1000;
          return distance <= SHORT_ROUTE_MAX_DISTANCE;
        });
        variantName = 'Short distance route';
      }

      if (filteredAttractions.length > 0) {
        const singleRoute = await generateSimpleRoute(filteredAttractions, startLocation);
        if (singleRoute) {
          singleRoute.attractions.forEach((attraction: Attraction, index: number) => {
            attraction.order = index + 1;
          });
          singleRoute.day = 1;
          singleRoute.routeVariant = variantName;
          routes.push(singleRoute);
        }
      }
    }

    return routes; // Return generated routes for day 1
  }

  // For multi-day trips (2 or 3 days)
  else {
    // Multi-day trips: evenly split attractions by global TSP, then greedy nearest-neighbor per day
    const dayGroups = clusterAttractionsByLocation_KMeans(availableAttractions, days, startLocation);
    // Rebalance groups if size difference exceeds 3
    {
      const sizes = dayGroups.map(g => g.length);
      let maxDiff = Math.max(...sizes) - Math.min(...sizes);
      while (maxDiff > 3) {
        const maxIndex = sizes.indexOf(Math.max(...sizes));
        const minIndex = sizes.indexOf(Math.min(...sizes));
        const moved = dayGroups[maxIndex].pop();
        if (!moved) break;
        dayGroups[minIndex].push(moved);
        sizes[maxIndex]--;
        sizes[minIndex]++;
        maxDiff = Math.max(...sizes) - Math.min(...sizes);
      }
    }

    // Step 5: Generate routes for each day group
    for (let day = 0; day < days; day++) {
      const dayAttractions = dayGroups[day] || [];
      if (dayAttractions.length === 0) continue;

       // Sort attractions within the day using greedy nearest-neighbor (closest next)
       const sortedDayAttractions = optimizeAttractionOrder(dayAttractions, startLocation);

      // Create path segments between attractions
      const segments: RouteSegment[] = [];
      let previousLocation = startLocation; // Always start from the user's starting location

      for (const attraction of sortedDayAttractions) {
        try {
          const segment = await getRouteSegment(previousLocation, attraction.coordinates);
          segments.push(segment);
          previousLocation = attraction.coordinates;
        } catch (error) {
          console.error('Error getting route segment:', error);
        }
      }

      // Assign order numbers to attractions for each day
      sortedDayAttractions.forEach((attraction: Attraction, index: number) => { // Add types
        attraction.order = index + 1; // Simple sequential numbering starting from 1 for each day
      });

      // Combine all segment paths into a single path for the day
      const dayPath = segments.reduce((acc, segment) => {
        // Use the overall segment path for the main day path
        return acc.concat(segment.path);
      }, [] as Coordinates[]);

      // Map the full segment objects, including distance, duration, and steps
      // This ensures the segments array in DayRoute matches the RouteSegment type
      const daySegments = segments.map(segment => ({
        path: segment.path,
        transportType: segment.transportType,
        distance: segment.distance, // Include distance
        duration: segment.duration, // Include duration
        steps: segment.steps, // Include the detailed steps
        transitDetails: segment.transitDetails // Keep for compatibility if needed
      }));

      routes.push({
        day: day + 1,
        attractions: sortedDayAttractions,
        segments: daySegments, // Use the correctly mapped segments
        path: dayPath,
        routeVariant: `Day ${day + 1}`
      });
    }

    return routes;
  }
}

/**
 * Groups attractions into geographically coherent sectors for multi-day trips.
 * Implements: over-clustering, splitting large clusters, merging nearby clusters,
 * sorting by start location, and balancing counts while preserving geography.
 * @param attractions All attractions for a city
 * @param numDays Number of days for the trip
 * @param startLocation The starting location for the trip, used for sorting days.
 * @returns Array of attraction arrays, one per day
 */
function clusterAttractionsByLocation_KMeans(attractions: Attraction[], numDays: number, startLocation: Coordinates): Attraction[][] {
    if (attractions.length === 0) {
        return Array(numDays).fill(null).map(() => []);
    }
    if (attractions.length <= numDays) {
        const groups: Attraction[][] = Array(numDays).fill(null).map(() => []);
        attractions.forEach((a, i) => groups[i % numDays].push(a));
        return groups;
    }
    // 1. Compute global greedy route order (nearest-neighbor TSP)
    const ordered = optimizeAttractionOrder(attractions, startLocation);
    // 2. Evenly partition into days: sizes differ by at most 1
    const baseSize = Math.floor(ordered.length / numDays);
    const remainder = ordered.length % numDays;
    const result: Attraction[][] = [];
    let startIdx = 0;
    for (let day = 0; day < numDays; day++) {
        const size = baseSize + (day < remainder ? 1 : 0);
        result.push(ordered.slice(startIdx, startIdx + size));
        startIdx += size;
    }
    return result;
}

/**
 * Optimizes the order of attractions to create the shortest possible route
 * using a greedy nearest-neighbor approach
 */
export function optimizeAttractionOrder(attractions: Attraction[], startCoordinates: Coordinates): Attraction[] { // Added export
  if (attractions.length <= 1) return [...attractions];

  const result: Attraction[] = [];
  const unvisited = [...attractions];
  let currentLocation = startCoordinates;
  
  while (unvisited.length > 0) {
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    
    for (let i = 0; i < unvisited.length; i++) {
      const distance = calculateDistance(currentLocation, unvisited[i].coordinates);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = i;
      }
    }
    
    const nearestAttraction = unvisited.splice(nearestIndex, 1)[0];
    result.push(nearestAttraction);
    currentLocation = nearestAttraction.coordinates;
  }
  
  return result;
}

// Helper function to get the route segment between two points, now processing all steps
export async function getRouteSegment(
  origin: Coordinates,
  destination: Coordinates
): Promise<RouteSegment> {
  try {
    // Calculate straight-line distance to determine initial transport mode request
    const distanceInKm = calculateDistance(origin, destination);
    const distanceInMeters = distanceInKm * 1000;

    // Use walking mode for distances under 1300m
    const travelMode = distanceInMeters < 1300 ? 'WALKING' : 'TRANSIT';

    const directionsService = new google.maps.DirectionsService();
    const result = await directionsService.route({
      origin: origin,
      destination: destination,
      travelMode: travelMode as google.maps.TravelMode,
      transitOptions: travelMode === 'TRANSIT' ? {
        modes: [google.maps.TransitMode.BUS, google.maps.TransitMode.SUBWAY, google.maps.TransitMode.TRAIN]
      } : undefined
    });

    if (!result.routes || result.routes.length === 0) {
      throw new Error('No routes found');
    }

    const route = result.routes[0];
    const leg = route.legs[0];

    if (!leg || !leg.steps) {
      throw new Error('No route leg or steps found');
    }

    const overallPath: Coordinates[] = [];
    if (route.overview_path) {
      for (const point of route.overview_path) {
        overallPath.push({ lat: point.lat(), lng: point.lng() });
      }
    }

    const journeySteps: JourneyStep[] = [];
    let overallTransportType: 'walking' | 'transit' = 'walking'; // Default to walking

    for (const step of leg.steps) {
      const stepPath: Coordinates[] = [];
      if (step.path) {
        for (const point of step.path) {
          stepPath.push({ lat: point.lat(), lng: point.lng() });
        }
      }

      const distance = step.distance?.value || 0;
      const duration = step.duration?.value || 0;

      if (step.travel_mode === 'TRANSIT' && step.transit) {
        overallTransportType = 'transit'; // Mark segment as transit if any step is transit
        const transitDetails: TransitStepDetails = {
          line: step.transit.line?.short_name || step.transit.line?.name || 'Unknown Line',
          vehicleType: step.transit.line?.vehicle?.type || 'UNKNOWN',
          vehicleName: step.transit.line?.vehicle?.name || 'Unknown Vehicle',
          departureStop: step.transit.departure_stop?.name || 'Unknown Departure Stop',
          arrivalStop: step.transit.arrival_stop?.name || 'Unknown Arrival Stop',
          departureTime: step.transit.departure_time?.text,
          arrivalTime: step.transit.arrival_time?.text,
          headsign: step.transit.headsign,
          numStops: step.transit.num_stops,
        };
        journeySteps.push({
          path: stepPath,
          distance,
          duration,
          travelMode: 'TRANSIT',
          transitDetails,
        });
      } else if (step.travel_mode === 'WALKING') {
        const walkingDetails: WalkingStepDetails = {
          instructions: step.instructions || 'Walk', // Basic instructions
        };
        journeySteps.push({
          path: stepPath,
          distance,
          duration,
          travelMode: 'WALKING',
          walkingDetails,
        });
      }
      // Ignore other travel modes for now
    }

    // --- Keep simplified transitDetails for backward compatibility (optional) ---
    // Find the first transit step to populate the old structure
    const firstTransitStep = journeySteps.find(s => s.travelMode === 'TRANSIT');
    const simplifiedTransitDetails = firstTransitStep?.transitDetails ? {
        line: firstTransitStep.transitDetails.line,
        departureStop: firstTransitStep.transitDetails.departureStop,
        arrivalStop: firstTransitStep.transitDetails.arrivalStop,
        vehicle: {
            type: firstTransitStep.transitDetails.vehicleType,
            name: firstTransitStep.transitDetails.vehicleName,
        },
        // walkingSegments could be derived if needed, but might be complex
    } : undefined;
    // --- End backward compatibility section ---


    return {
      path: overallPath, // Keep overall path for overview drawing
      transportType: overallTransportType, // Overall type for the segment
      steps: journeySteps, // The detailed steps array
      transitDetails: simplifiedTransitDetails, // Simplified details for compatibility
      distance: leg.distance?.value || 0, // Total distance for the leg
      duration: leg.duration?.value || 0, // Total duration for the leg
    };
  } catch (error) {
    console.error('Error getting route segment:', error);
    // Fallback to straight line if directions API fails
    const fallbackPath = [origin, destination];
    return {
      path: fallbackPath,
      transportType: 'walking',
      distance: calculateDistance(origin, destination) * 1000,
      duration: calculateDistance(origin, destination) * 1000 / 5 * 60 // Rough estimate: 5 km/h walking speed
    };
  }
}

/**
 * Generate a simple route with all attractions for a single day
 * 
 * @param attractions Available attractions for the route
 * @param startLocation Starting point
 * @returns Promise resolving to a day route or null if no attractions
 */
export async function generateSimpleRoute(
  attractions: Attraction[],
  startLocation: Coordinates
): Promise<DayRoute | null> {
  if (!attractions || attractions.length === 0) return null;

  // Optimize attraction order starting from the user's location
  const sortedAttractions = optimizeAttractionOrder(attractions, startLocation);

  // Create path segments between attractions
  const segments: RouteSegment[] = [];
  let previousLocation = startLocation;

  for (const attraction of sortedAttractions) {
    try {
      // Use the getRouteSegment function which now includes distance and duration
      const segment = await getRouteSegment(previousLocation, attraction.coordinates);
      segments.push(segment);
      previousLocation = attraction.coordinates;
    } catch (error) {
      console.error('Error getting route segment in generateSimpleRoute:', error);
      // Optionally handle the error, e.g., skip the segment or return null
    }
  }

  // Combine all segment paths into a single path for the day
  const path = segments.reduce((acc, segment) => acc.concat(segment.path), [] as Coordinates[]);

  // Map segments to ensure they match the expected structure including distance/duration
  const mappedSegments = segments.map(segment => ({
    path: segment.path,
    transportType: segment.transportType,
    distance: segment.distance,
    duration: segment.duration,
    steps: segment.steps, // Include steps if available
    transitDetails: segment.transitDetails // Include transit details if available
  }));

  // Assign order numbers (redundant if done outside, but safe to keep)
  sortedAttractions.forEach((attraction, index) => {
    attraction.order = index + 1;
  });

  return {
    day: 1, // Always day 1 for simple routes
    attractions: sortedAttractions,
    segments: mappedSegments,
    path: path,
    // routeVariant will be assigned by the caller
  };
}
