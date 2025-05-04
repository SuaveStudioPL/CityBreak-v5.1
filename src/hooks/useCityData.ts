import { useState, useEffect } from 'react';
import { getCityByName, CityData } from '../services/CityService';
import { Attraction } from '../types/attractions';

export const useCityData = (selectedCityName: string | null) => {
  const [currentCityData, setCurrentCityData] = useState<CityData | null>(null);
  const [allCityAttractions, setAllCityAttractions] = useState<Attraction[]>([]);
  const [cityTime, setCityTime] = useState<Date>(new Date());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Effect to fetch city data based on selectedCity name
  useEffect(() => {
    if (selectedCityName) {
      setIsLoading(true);
      setError(null);
      setCurrentCityData(null); // Clear previous data
      setAllCityAttractions([]);

      getCityByName(selectedCityName)
        .then(data => {
          if (data) {
            console.log("[useCityData] Fetched City Data:", data.name);
            setCurrentCityData(data);
            // Fetch all attractions for the city
            setAllCityAttractions(data.attractions);
          } else {
            console.error(`[useCityData] City data not found for: ${selectedCityName}`);
            setError(`City data not found for: ${selectedCityName}`);
            setCurrentCityData(null);
            setAllCityAttractions([]);
          }
        })
        .catch(fetchError => {
          console.error(`[useCityData] Error fetching city data for ${selectedCityName}:`, fetchError);
          setError(`Failed to fetch city data for ${selectedCityName}.`);
          setCurrentCityData(null);
          setAllCityAttractions([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      // Clear data if no city is selected
      setCurrentCityData(null);
      setAllCityAttractions([]);
      setIsLoading(false);
      setError(null);
    }
  }, [selectedCityName]);

  // Effect to update cityTime when cityData changes or periodically
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    const updateCityTime = () => {
      if (currentCityData?.timezone) {
        try {
          const now = new Date();
          // Use Intl.DateTimeFormat for robust timezone handling
          const formatter = new Intl.DateTimeFormat('en-CA', { // Use a locale that gives YYYY-MM-DD
            timeZone: currentCityData.timezone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Use 24-hour format for easier parsing
          });
          const parts = formatter.formatToParts(now);
          const timeZoneDate = new Date(Date.UTC(
            parseInt(parts.find(p => p.type === 'year')?.value || '0'),
            parseInt(parts.find(p => p.type === 'month')?.value || '1') - 1,
            parseInt(parts.find(p => p.type === 'day')?.value || '1'),
            parseInt(parts.find(p => p.type === 'hour')?.value || '0'),
            parseInt(parts.find(p => p.type === 'minute')?.value || '0'),
            parseInt(parts.find(p => p.type === 'second')?.value || '0')
          ));

          // console.log(`[useCityData] Calculated cityTime for ${currentCityData.timezone}:`, timeZoneDate.toISOString()); // Optional: reduce logging noise
          setCityTime(timeZoneDate);
          console.log(`Obecny czas lokalny: ${new Date().toLocaleTimeString()}`);
          console.log(`Obliczony czas dla ${currentCityData.timezone}: ${timeZoneDate.toLocaleTimeString()}`);
        } catch (e) {
          console.error("[useCityData] Error setting time for timezone:", currentCityData.timezone, e);
          setCityTime(new Date()); // Fallback to local time
        }
      } else {
        setCityTime(new Date()); // Fallback to local time if no timezone
      }
    };

    updateCityTime(); // Initial update
    intervalId = setInterval(updateCityTime, 60 * 1000); // Update every minute

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentCityData]); // Re-run when city data (and thus timezone) changes

  return {
    currentCityData,
    allCityAttractions,
    cityTime,
    isLoading, // Expose loading state
    error // Expose error state
  };
};
