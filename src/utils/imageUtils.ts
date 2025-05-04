/**
 * Utilities for handling images, including Wikipedia image attribution
 */

/**
 * Extracts the image filename from a Wikipedia image URL
 * @param imageUrl The Wikipedia image URL
 * @returns The image filename or null if not a Wikipedia image
 */
export const extractWikipediaImageFilename = (imageUrl: string | null): string | null => {
  if (!imageUrl) return null;
  
  // Check if it's a Wikipedia/Wikimedia URL
  if (!imageUrl.includes('wikipedia.org') && !imageUrl.includes('wikimedia.org')) {
    return null;
  }
  
  try {
    // Extract the filename from URLs like:
    // https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Pa%C5%82ac_Kultury_i_Nauki_2019.jpg/330px-Pa%C5%82ac_Kultury_i_Nauki_2019.jpg
    const matches = imageUrl.match(/\/([^\/]+)\/[^\/]+$/);
    if (matches && matches[1]) {
      // Remove the px prefix and get the actual filename
      const filename = matches[1].replace(/^\d+px-/, '');
      return decodeURIComponent(filename);
    }
    return null;
  } catch (error) {
    console.error('Error extracting image filename:', error);
    return null;
  }
};

/**
 * Fetch image information including attribution from Wikimedia Commons API
 * @param imageUrl The Wikipedia image URL
 * @returns Attribution information or null if not available
 */
export const fetchImageAttribution = async (imageUrl: string | null): Promise<{ author: string; license: string } | null> => {
  const filename = extractWikipediaImageFilename(imageUrl);
  if (!filename) return null;
  
  try {
    // Use the Wikimedia Commons API to get image info including author and license
    const url = `https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=extmetadata&titles=File:${encodeURIComponent(filename)}&format=json&origin=*`;
    
    const response = await fetch(url);
    if (!response.ok) return null;
    
    const data = await response.json();
    
    // Navigate through the nested structure to find the metadata
    const pages = data.query.pages;
    const pageId = Object.keys(pages)[0];
    
    if (pageId === '-1') return null; // Image not found
    
    const metadata = pages[pageId].imageinfo?.[0]?.extmetadata;
    if (!metadata) return null;
    
    // Extract attribution information
    const author = metadata.Artist?.value || 'Unknown';
    const license = metadata.LicenseShortName?.value || 'Unknown license';
    
    // Clean up HTML tags from the attribution
    const cleanAuthor = author.replace(/<[^>]*>/g, '').trim();
    
    return { 
      author: cleanAuthor,
      license: license
    };
  } catch (error) {
    console.error('Error fetching image attribution:', error);
    return null;
  }
};

/**
 * Creates an attribution component for an image
 * @param attribution The attribution information
 * @returns A string with formatted attribution or empty string
 */
export const formatAttribution = (attribution: { author: string; license: string } | null): string => {
  if (!attribution) return '';
  
  const { author, license } = attribution;
  if (author === 'Unknown' && license === 'Unknown license') return '';
  
  return `© ${author}`;
};
