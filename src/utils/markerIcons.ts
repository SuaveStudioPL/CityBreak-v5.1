import L from 'leaflet';
import { Attraction } from '../types/attractions';
import { getAttractionStatus, AttractionStatus } from './timeUtils';

import { fetchWikipediaImage } from '../services/WikipediaService';

// Function to get the first available image URL from attraction
const getFirstAvailableImage = async (attraction: Attraction): Promise<string | null> => {
  // Najpierw spróbuj pobrać zdjęcie z Wikipedii, niezależnie od tego, czy atrakcja ma imageUrls
  const wikipediaImage = await fetchWikipediaImage(attraction.name);
  if (wikipediaImage) {
    return wikipediaImage;
  }

  // Jeśli nie udało się pobrać zdjęcia z Wikipedii, a atrakcja ma tablicę imageUrls, użyj pierwszego dostępnego URL
  if (attraction.imageUrls && attraction.imageUrls.length > 0) {
    return attraction.imageUrls[0];
  }

  // Jeśli nie ma ani zdjęcia z Wikipedii, ani z imageUrls, zwróć null
  return null;
};


interface IconOptions {
  size: [number, number]; // e.g., [width, height]
  anchor: [number, number]; // e.g., [x, y] from top-left
  text?: string;
  className?: string;
  color?: string;
  textColor?: string;
  fontSize?: string;
  imageUrl?: string | null; // Add imageUrl option
  borderColor?: string; // Add borderColor option
}

/**
 * Function to create icons for different marker types
 * @param type - marker type ('start', 'attraction', 'transit')
 * @param value - optional value (attraction number or line numbers)
 * @param attraction - optional Attraction object (for 'attraction' type)
 * @param cityTime - optional current date/time in the city (for 'attraction' type)
 * @returns Leaflet icon for the marker
 */
export async function getIcon( // Make function async
  type: 'start' | 'attraction' | 'transit',
  value?: string | number,
  attraction?: Attraction,
  cityTime?: Date
): Promise<L.Icon | L.DivIcon> { // Return a Promise
  const defaultOptions: IconOptions = {
    size: [45, 45], // Increased size
    anchor: [22, 22], // Adjusted anchor (center)
    className: 'custom-div-icon',
    textColor: '#ffffff',
    fontSize: '12px',
    borderColor: '#ffffff', // Default border white
  };

  let options: IconOptions = { ...defaultOptions };
  let htmlContent = '';

  switch (type) {
    case 'start': { // Use block scope for consistency
      // Use L.divIcon for styling flexibility
      const startIconSize: [number, number] = [30, 30];
      const startIconAnchor: [number, number] = [15, 15];
      htmlContent = `
        <div class="start-icon-marker" style="width: ${startIconSize[0]}px; height: ${startIconSize[1]}px;">
          <img src="/icons/start.png" alt="Start Location" style="width: 100%; height: 100%;" />
        </div>
      `;
      return L.divIcon({
        html: htmlContent,
        className: 'custom-div-icon start-icon-wrapper', // Add wrapper class if needed, keep custom-div-icon for base styles
        iconSize: L.point(startIconSize[0], startIconSize[1]),
        iconAnchor: L.point(startIconAnchor[0], startIconAnchor[1]),
      });
    } // End block scope

    case 'attraction': { // Use block scope
      options.text = value?.toString() || '';
      let status: AttractionStatus = 'open'; // Default status

      if (attraction) {
        // Użyj pierwszego dostępnego zdjęcia z imageUrls lub Wikipedii
        options.imageUrl = await getFirstAvailableImage(attraction);

        // Determine status if cityTime is available
        if (cityTime) {
          status = getAttractionStatus(attraction, cityTime);
        } else {
          status = 'unknown'; // Explicitly unknown if time is missing
        }
      } else {
        // Handle case where attraction object is missing (shouldn't happen ideally)
        options.imageUrl = null;
        status = 'unknown';
      }

      // Set border color based on status
      switch (status) {
        case 'closed':
          options.borderColor = '#ef4444'; // Red border
          break;
        case 'free':
          options.borderColor = '#22c55e'; // Green border
          break;
        case 'open':
        case 'unknown':
        default:
          options.borderColor = '#ffffff'; // White border (default)
          break;
      }
      break;
    } // End block scope

    case 'transit': { // Use block scope
      // Blue marker with transit line number
      options.color = '#3b82f6'; // Blue background for transit
      options.anchor = [14, 14];
      options.text = value?.toString() || '?';
      options.fontSize = '10px';
      // console.log(`[getIcon] Transit case triggered. Text: "${options.text}"`); // Reduce logging
      break;
    } // End block scope
  }

  // --- HTML Content Generation ---
  if (type === 'attraction') {
    const backgroundStyle = options.imageUrl
      ? `background-image: url('${options.imageUrl}'); background-size: cover; background-position: center;`
      : `background-color: #8b5cf6;`; // Purple fallback

    htmlContent = `
      <div style="
        width: ${options.size[0]}px; /* Use dynamic size */
        height: ${options.size[1]}px; /* Use dynamic size */
        ${backgroundStyle}
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: ${options.textColor};
        font-size: 14px; /* Slightly larger font for bigger marker */
        border: 3px solid ${options.borderColor}; /* Slightly thicker border */
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3); /* Slightly larger shadow */
        line-height: 1; /* Ensure text is vertically centered */
        overflow: hidden; /* Hide image parts outside the circle */
      ">
        ${options.text || ''}
      </div>
    `;
  } else if (type === 'transit') {
    // Specific HTML for transit (pill shape, auto width)
    htmlContent = `
      <div style="
        background-color: ${options.color}; /* Blue */
        border-radius: 15px; /* Pill shape */
        padding: 3px 8px;
        width: auto; /* Auto width */
        height: auto; /* Auto height based on content */
        white-space: nowrap; /* Prevent wrapping */
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: ${options.textColor};
        font-size: ${options.fontSize};
        border: 2px solid ${options.borderColor}; /* White border for transit */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        line-height: 1;
      ">
        ${options.text || ''}
      </div>
    `;
  }
  // Note: 'start' case returns directly earlier

  // --- DivIcon Options ---
  // Use L.point for anchor. Size is null for auto-sizing transit markers.
  const finalIconSize = type === 'transit' ? null : L.point(options.size[0], options.size[1]);
  const finalIconAnchor = L.point(options.anchor[0], options.anchor[1]);

  const divIconOptions: L.DivIconOptions = {
    html: htmlContent,
    className: options.className,
    iconAnchor: finalIconAnchor,
    // iconSize is explicitly set below only if not null
  };

  if (finalIconSize) {
    divIconOptions.iconSize = finalIconSize;
  }

  // console.log(`[getIcon] Returning DivIcon. Type: ${type}, Text: "${options.text}"`); // Reduce logging
  // console.log("[getIcon] htmlContent:", htmlContent);
  // console.log("[getIcon] divIconOptions:", divIconOptions);

  return L.divIcon(divIconOptions);
}
