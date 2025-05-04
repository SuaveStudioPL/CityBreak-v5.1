import { Attraction } from '../types/attractions';

export type AttractionStatus = 'open' | 'closed' | 'free' | 'unknown';

/**
 * Determines the status of an attraction based on current time, opening hours, and free entry info.
 * NOTE: This implementation handles basic formats and needs expansion for complex schedules.
 *
 * @param attraction The attraction object.
 * @param cityTime The current Date object representing the time in the attraction's city.
 * @returns The status of the attraction ('open', 'closed', 'free', 'unknown').
 */
export function getAttractionStatus(attraction: Attraction, cityTime: Date): AttractionStatus {
  console.log(`--- Checking status for: ${attraction.name} ---`);
  console.log(`  City Time: ${cityTime.toISOString()}`);
  console.log(`  Opening Hours: ${attraction.openingHours}`);
  console.log(`  Free Entry Info: ${attraction.freeEntryInfo}`);

  const dayOfWeek = cityTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = cityTime.getHours();
  const minute = cityTime.getMinutes();
  const currentTimeMinutes = hour * 60 + minute; // Current time in minutes since midnight

  const daysMap: { [key: string]: number } = {
    sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6
  };

  let isOpen = false;
  let isFree = false;
  let isClosedToday = false;
  let hasSpecificHours = false;

  // --- Check Free Entry Info ---
  if (attraction.freeEntryInfo) {
    const freeInfoLower = attraction.freeEntryInfo.toLowerCase();
    for (const dayName in daysMap) {
      if (freeInfoLower.includes(dayName) && daysMap[dayName] === dayOfWeek) {
        // Basic check: If today is mentioned as a free day.
        // TODO: Add time range parsing for free entry (e.g., "Free Tuesdays 10:00-14:00")
        isFree = true;
        break; // Assume free all day if day matches
      }
    }
    // TODO: Add checks for "first Sunday", "last Friday", etc.
  }

  // --- Check Opening Hours ---
  if (attraction.openingHours) {
    const hoursLower = attraction.openingHours.toLowerCase();

    // Check if explicitly closed today
    for (const dayName in daysMap) {
        if (hoursLower.includes(`closed on ${dayName}s?`) && daysMap[dayName] === dayOfWeek) {
            isClosedToday = true;
            break;
        }
    }
     if (hoursLower.includes('closed') && !hoursLower.match(/on\s+\w+day/)) { // General "closed" without specific day
         isClosedToday = true;
     }


    if (!isClosedToday) {
        // --- Enhanced Opening Hours Parsing ---
        const daysShortMap: { [key: string]: number } = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 0 };
        // Regex to find day ranges (e.g., Mon-Fri, Sat, Sun) and times (HH:MM - HH:MM, allows optional AM/PM)
        // It captures start day, optional end day, start H, start M, end H, end M, and the whole time string for AM/PM check
        const daysRegex = /(mon|tue|wed|thu|fri|sat|sun)(?:-(mon|tue|wed|thu|fri|sat|sun))?:s*(d{1,2}):(d{2})s*(?:am|pm)?s*-s*(d{1,2}):(d{2})s*(?:am|pm)?/gi;
        let match;
        let daySpecificHoursFound = false;
        isOpen = false; // Reset isOpen before checking specific rules

        while ((match = daysRegex.exec(hoursLower)) !== null) {
            daySpecificHoursFound = true;
            hasSpecificHours = true; // Found some kind of specific hours

            const startDayStr = match[1];
            const endDayStr = match[2]; // Might be null
            let startH = parseInt(match[3], 10);
            const startM = parseInt(match[4], 10);
            let endH = parseInt(match[5], 10);
            const endM = parseInt(match[6], 10);
            const timeSubstring = match[0].toLowerCase(); // Get the matched substring for AM/PM check

            // Basic AM/PM handling (adjust hours if PM is present and hour < 12)
            // This is a simplified approach. A dedicated library would be more robust.
            if (timeSubstring.includes('pm') && startH < 12) startH += 12;
            if (timeSubstring.includes('am') && startH === 12) startH = 0; // 12 AM is 00 hours
            if (timeSubstring.includes('pm') && endH < 12) endH += 12;
            if (timeSubstring.includes('am') && endH === 12) endH = 0; // 12 AM is 00 hours (for end time, might mean next day)

            const startMinutes = startH * 60 + startM;
            let endMinutes = endH * 60 + endM;

            const startDayIndex = daysShortMap[startDayStr];
            const endDayIndex = endDayStr ? daysShortMap[endDayStr] : startDayIndex;

            // Check if today (dayOfWeek) falls within the parsed day range
            let dayMatches = false;
            if (startDayIndex <= endDayIndex) {
                // Normal range (e.g., Mon-Fri)
                if (dayOfWeek >= startDayIndex && dayOfWeek <= endDayIndex) {
                    dayMatches = true;
                }
            } else {
                // Range wraps around Sunday (e.g., Fri-Mon)
                if (dayOfWeek >= startDayIndex || dayOfWeek <= endDayIndex) {
                    dayMatches = true;
                }
            }

            if (dayMatches) {
                console.log(`  Matched day range: ${startDayStr}${endDayStr ? '-' + endDayStr : ''} for time ${match[3]}:${match[4]}-${match[5]}:${match[6]}`);
                // Handle overnight hours (e.g., 20:00 - 02:00)
                // If end time is 00:00, treat it as 24:00 for comparison unless start time is also 00:00
                if (endMinutes === 0 && startMinutes > 0) endMinutes = 24 * 60;

                if (endMinutes <= startMinutes) {
                    // Time range crosses midnight
                    endMinutes += 24 * 60; // Add 24 hours to end time
                    // Current time needs to be after start OR before original end time (on the next day)
                    if (currentTimeMinutes >= startMinutes || currentTimeMinutes < (endMinutes - 24 * 60)) {
                        isOpen = true;
                        console.log(`  Status update (overnight): isOpen = true`);
                        break; // Found an open slot for today, no need to check further rules
                    }
                } else {
                    // Normal same-day range
                    if (currentTimeMinutes >= startMinutes && currentTimeMinutes < endMinutes) {
                        isOpen = true;
                        console.log(`  Status update (same-day): isOpen = true`);
                        break; // Found an open slot for today
                    }
                }
            }
        } // End while loop for day-specific regex

        // If NO day-specific hours were found OR if day-specific rules were found but none matched today/time,
        // THEN try the simple HH:MM format or 24/7 as a fallback.
        // We only proceed here if isOpen is still false.
        if (!isOpen && !daySpecificHoursFound) {
             console.log(`  No day-specific hours found or matched. Trying generic patterns.`);
            // Try parsing simple "HH:MM - HH:MM" format (assumes applies daily if no day specified)
            const timeMatch = hoursLower.match(/(d{1,2}):(d{2})s*-s*(d{1,2}):(d{2})/);
            if (timeMatch) {
                hasSpecificHours = true;
                const [, startH, startM, endH, endM] = timeMatch.map(Number);
                const startMinutes = startH * 60 + startM;
                let endMinutes = endH * 60 + endM;

                if (endMinutes === 0 && startMinutes > 0) endMinutes = 24 * 60;

                if (endMinutes <= startMinutes) {
                    endMinutes += 24 * 60;
                    if (currentTimeMinutes >= startMinutes || currentTimeMinutes < (endMinutes - 24 * 60)) {
                        isOpen = true;
                    }
                } else {
                    if (currentTimeMinutes >= startMinutes && currentTimeMinutes < endMinutes) {
                        isOpen = true;
                    }
                }
                 console.log(`  Simple HH:MM match found. isOpen = ${isOpen}`);
            } else if (hoursLower.includes('24/7') || hoursLower.includes('open daily')) {
                 hasSpecificHours = true;
                 isOpen = true;
                 console.log(`  '24/7' or 'Open daily' found. isOpen = true`);
            }
        }
        // If daySpecificHoursFound is true but isOpen is still false after the loop,
        // it means today had rules defined, but the current time is outside those hours.
        // The final status logic below will correctly determine it as 'closed'.
    }
  }

  // --- Determine Final Status ---
  let finalStatus: AttractionStatus;

  if (isFree) {
    // If it's free today, check if it's also open based on hours (if specified)
    // If no specific hours mentioned alongside free day, assume open during free period.
    if (hasSpecificHours) {
      finalStatus = isOpen ? 'free' : 'closed'; // Free but might be outside opening hours
    } else {
      finalStatus = 'free'; // Free and assume open
    }
  } else if (isClosedToday) {
    finalStatus = 'closed';
  } else if (hasSpecificHours) {
    finalStatus = isOpen ? 'open' : 'closed';
  } else if (attraction.openingHours || attraction.freeEntryInfo) {
    // If no specific hours/closed days found, but *some* info exists, default to 'open'.
    // This handles cases like "Open daily" or just having free entry info without specific hours.
    finalStatus = 'open';
  } else {
    // Fallback if absolutely no info provided (should be caught earlier, but for safety)
    finalStatus = 'unknown';
  }

  console.log(`  Final Status Determined for ${attraction.name}: ${finalStatus}`);
  console.log(`-----------------------------------------`);
  return finalStatus;
}
