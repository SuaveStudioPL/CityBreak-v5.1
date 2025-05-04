import { Coordinates } from '../types/attractions';

// Weather data types
export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface WeatherItem {
  dt: number;
  main: WeatherMain;
  weather: WeatherCondition[];
  pop: number;
  wind: {
    speed: number;
  };
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherForecast {
  current: WeatherMain;
  weather: WeatherCondition[];
  hourly: Array<{
    dt: number;
    temp: number;
    feels_like: number;
    humidity: number;
    weather: WeatherCondition[];
    pop: number;
    wind_speed: number;
  }>;
  daily: Array<{
    dt: number;
    temp: {
      max: number;
      min: number;
    };
    weather: WeatherCondition[];
    humidity: number;
    pop: number;
  }>;
}

// Function to get city coordinates based on city name
export const getCityCoordinates = async (cityName: string): Promise<Coordinates> => {
  try {
    // Use the API key directly for testing
    const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
    
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cityName)}&limit=1&appid=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch city coordinates');
    }
    
    const data = await response.json();
    
    if (!data || data.length === 0) {
      throw new Error('City not found');
    }
    
    return {
      lat: data[0].lat,
      lng: data[0].lon
    };
  } catch (error) {
    console.error('Error fetching city coordinates:', error);
    throw error;
  }
};

// Function to get weather forecast for a location
export const getWeatherForecast = async (coordinates: Coordinates): Promise<WeatherForecast> => {
  try {
    // Use the API key directly for testing
    const apiKey = "8d56e308b5b7c9dee1b7ab2587854e5a";
    
    // Use the 5-day forecast API endpoint
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lng}&units=metric&appid=${apiKey}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error('Failed to fetch weather data');
    }
    
    const data = await response.json();
    
    // Transform the data to match our expected structure
    const transformedData: WeatherForecast = {
      current: data.list[0].main,
      weather: data.list[0].weather,
      hourly: data.list.map((item: WeatherItem) => ({
        dt: item.dt,
        temp: item.main.temp,
        feels_like: item.main.feels_like,
        humidity: item.main.humidity,
        weather: item.weather,
        pop: item.pop,
        wind_speed: item.wind.speed
      })),
      daily: data.list.filter((_: unknown, index: number) => index % 8 === 0).map((item: WeatherItem) => ({
        dt: item.dt,
        temp: {
          max: item.main.temp_max,
          min: item.main.temp_min
        },
        weather: item.weather,
        humidity: item.main.humidity,
        pop: item.pop
      }))
    };

    return transformedData;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

// Helper function to get weather icon URL
export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};

// Function to format date from timestamp (Unix timestamp)
export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  });
};

// Function to format time from timestamp (Unix timestamp)
export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};
