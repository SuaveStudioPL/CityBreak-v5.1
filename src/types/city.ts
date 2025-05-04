import type { Attraction } from './attractions';

export interface City {
  name: string;
  country: string;
  description: string;
  attractions: Attraction[];
  coordinates: {
    lat: number;
    lng: number;
  };
  zoom: number;
  timezone: string; // IANA timezone name (e.g., 'Europe/Warsaw', 'America/New_York')
}
