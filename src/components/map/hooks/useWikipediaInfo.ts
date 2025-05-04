import { useState, useCallback, useEffect } from 'react';
import { Attraction } from '../../../types/attractions';
import { getWikipediaTitleForAttraction } from '../../../utils/wikipediaMappings';

interface WikipediaInfo {
  imageUrl: string | null;
  extract: string | null;
}

export const useWikipediaInfo = () => {
  const [attractionWikipediaInfo, setAttractionWikipediaInfo] = useState<Record<string, WikipediaInfo>>({});

  const fetchWikipediaInfo = useCallback(async (attractionName: string): Promise<WikipediaInfo> => {
    try {
      // Użyj mapowania, aby uzyskać poprawny tytuł artykułu na Wikipedii
      const wikipediaTitle = getWikipediaTitleForAttraction(attractionName);

      // Normalizuj tytuł dla API Wikipedii (zamień spacje na podkreślenia)
      const normalizedTitle = wikipediaTitle.replace(/ /g, '_');

      const wikipediaUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(normalizedTitle)}`;
      const response = await fetch(wikipediaUrl);

      if (!response.ok) {
        console.warn(`Failed to fetch Wikipedia info for ${attractionName} (as ${wikipediaTitle}):`, response.statusText);
        return { imageUrl: null, extract: null };
      }

      const data = await response.json();

      // Jeśli obraz jest miniaturą, spróbuj pobrać większą wersję
      let imageUrl = data.thumbnail?.source || null;
      if (imageUrl && imageUrl.includes('/thumb/')) {
        // Spróbuj uzyskać większą wersję obrazu (800px)
        imageUrl = imageUrl.replace(/\/\d+px-/, '/800px-');
      }

      return {
        imageUrl: imageUrl,
        extract: data.extract || null
      };
    } catch (error) {
      console.error(`Error fetching Wikipedia info for ${attractionName}:`, error);
      return { imageUrl: null, extract: null };
    }
  }, []);

  const getAttractionInfo = useCallback(async (attraction: Attraction) => {
    if (!attractionWikipediaInfo[attraction.id]) {
      const info = await fetchWikipediaInfo(attraction.name);
      setAttractionWikipediaInfo(prev => ({
        ...prev,
        [attraction.id]: info
      }));
    }
  }, [attractionWikipediaInfo, fetchWikipediaInfo]);

  return {
    attractionWikipediaInfo,
    getAttractionInfo
  };
};