/**
 * Service for fetching images and information from Wikipedia
 */
import { getWikipediaTitleForAttraction } from '../utils/wikipediaMappings';

/**
 * Pobiera obraz z Wikipedii dla danego tytułu w określonym języku
 * @param title Tytuł artykułu na Wikipedii
 * @param lang Kod języka (domyślnie 'en')
 * @returns URL obrazu lub null, jeśli nie znaleziono
 */
export const fetchWikipediaImageByLang = async (title: string, lang = 'en'): Promise<string | null> => {
  try {
    // Użyj mapowania, aby uzyskać poprawny tytuł artykułu na Wikipedii
    const wikipediaTitle = getWikipediaTitleForAttraction(title);

    // Normalizuj tytuł dla API Wikipedii (zamień spacje na podkreślenia)
    const normalizedTitle = wikipediaTitle.replace(/ /g, '_');

    const response = await fetch(
      `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(normalizedTitle)}`
    );

    if (!response.ok) {
      console.warn(`Failed to fetch Wikipedia image for ${title} (as ${wikipediaTitle}):`, response.statusText);
      return null;
    }

    const data = await response.json();

    // Jeśli obraz jest miniaturą, spróbuj pobrać większą wersję
    if (data.thumbnail?.source) {
      // Sprawdź, czy URL zawiera '/thumb/' i kończy się na '/XXXpx-'
      const thumbnailUrl = data.thumbnail.source;
      if (thumbnailUrl.includes('/thumb/')) {
        // Spróbuj uzyskać większą wersję obrazu (800px)
        const largerImageUrl = thumbnailUrl.replace(/\/\d+px-/, '/800px-');
        return largerImageUrl;
      }
      return data.thumbnail.source;
    }

    return null;
  } catch (error) {
    console.error('Error fetching Wikipedia image:', error);
    return null;
  }
};

/**
 * Pobiera obraz z Wikipedii dla danego tytułu, próbując różnych języków
 * @param title Tytuł artykułu na Wikipedii
 * @returns URL obrazu lub null, jeśli nie znaleziono
 */
export const fetchWikipediaImage = async (title: string): Promise<string | null> => {
  // Najpierw spróbuj angielskiej Wikipedii
  const enImage = await fetchWikipediaImageByLang(title, 'en');
  if (enImage) return enImage;

  // Jeśli nie ma obrazu w angielskiej Wikipedii, spróbuj polskiej
  const plImage = await fetchWikipediaImageByLang(title, 'pl');
  if (plImage) return plImage;

  // Dla miast azjatyckich, spróbuj również lokalnych wersji Wikipedii
  // Sprawdź, czy tytuł zawiera nazwy miejsc w Azji
  if (title.includes('Tokyo') || title.includes('Kyoto') || title.includes('Osaka')) {
    const jaImage = await fetchWikipediaImageByLang(title, 'ja');
    if (jaImage) return jaImage;
  }

  if (title.includes('Bangkok') || title.includes('Wat')) {
    const thImage = await fetchWikipediaImageByLang(title, 'th');
    if (thImage) return thImage;
  }

  if (title.includes('Beijing') || title.includes('Shanghai')) {
    const zhImage = await fetchWikipediaImageByLang(title, 'zh');
    if (zhImage) return zhImage;
  }

  if (title.includes('Seoul')) {
    const koImage = await fetchWikipediaImageByLang(title, 'ko');
    if (koImage) return koImage;
  }

  return null;
};