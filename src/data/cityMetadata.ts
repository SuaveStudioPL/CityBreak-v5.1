import { Coordinates } from '../types/attractions';

export interface CityMetadata {
  key: string; // Lowercase key used in file names and maps (e.g., 'warsaw')
  name: string; // Properly capitalized name (e.g., 'Warsaw')
  country: string;
  description: string;
  image: string; // Path to an image if available
  coordinates: Coordinates; // Central coordinates for the city
  zoom: number; // Default map zoom level
  timezone: string; // IANA timezone name
}

// Central repository for city-specific metadata
export const cityMetadataMap = new Map<string, CityMetadata>([
  [
    'amsterdam',
    {
      key: 'amsterdam',
      name: 'Amsterdam',
      country: 'Netherlands',
      description: 'Famous for its canals, cycling culture, and vibrant nightlife.',
      image: '', // Placeholder
      coordinates: { lat: 52.37, lng: 4.89 },
      zoom: 13,
      timezone: 'Europe/Amsterdam',
    },
  ],
  [
    'athens',
    {
      key: 'athens',
      name: 'Athens',
      country: 'Greece',
      description: 'The heart of Ancient Greece, a powerful civilization and empire.',
      image: '', // Placeholder
      coordinates: { lat: 37.98, lng: 23.72 },
      zoom: 13,
      timezone: 'Europe/Athens',
    },
  ],
  [
    'barcelona',
    {
      key: 'barcelona',
      name: 'Barcelona',
      country: 'Spain',
      description: 'Known for its unique architecture by Gaudí and lively atmosphere.',
      image: '', // Placeholder
      coordinates: { lat: 41.39, lng: 2.16 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'bari',
    {
      key: 'bari',
      name: 'Bari',
      country: 'Italy',
      description: 'A bustling port city on the Adriatic Sea in southern Italy.',
      image: '', // Placeholder
      coordinates: { lat: 41.12, lng: 16.87 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'belgrade',
    {
      key: 'belgrade',
      name: 'Belgrade',
      country: 'Serbia',
      description: 'The capital of Serbia, situated at the confluence of the Sava and Danube rivers.',
      image: '', // Placeholder
      coordinates: { lat: 44.79, lng: 20.46 },
      zoom: 13,
      timezone: 'Europe/Belgrade',
    },
  ],
  [
    'berlin',
    {
      key: 'berlin',
      name: 'Berlin',
      country: 'Germany',
      description: "Germany's capital, known for its art scene, nightlife, and historical significance.",
      image: '', // Placeholder
      coordinates: { lat: 52.52, lng: 13.40 },
      zoom: 12,
      timezone: 'Europe/Berlin',
    },
  ],
  [
    'bilbao',
    {
      key: 'bilbao',
      name: 'Bilbao',
      country: 'Spain',
      description: 'An industrial port city in northern Spain, famous for the Guggenheim Museum.',
      image: '', // Placeholder
      coordinates: { lat: 43.26, lng: -2.93 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'bologna',
    {
      key: 'bologna',
      name: 'Bologna',
      country: 'Italy',
      description: 'Historic capital of the Emilia-Romagna region, known for its cuisine and university.',
      image: '', // Placeholder
      coordinates: { lat: 44.49, lng: 11.34 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'bratislava',
    {
      key: 'bratislava',
      name: 'Bratislava',
      country: 'Slovakia',
      description: 'The capital of Slovakia, set along the Danube River by the border with Austria and Hungary.',
      image: '', // Placeholder
      coordinates: { lat: 48.15, lng: 17.11 },
      zoom: 13,
      timezone: 'Europe/Bratislava',
    },
  ],
  [
    'brussels',
    {
      key: 'brussels',
      name: 'Brussels',
      country: 'Belgium',
      description: 'The administrative center of the European Union, known for its Grand Place.',
      image: '', // Placeholder
      coordinates: { lat: 50.85, lng: 4.35 },
      zoom: 13,
      timezone: 'Europe/Brussels',
    },
  ],
  [
    'bucharest',
    {
      key: 'bucharest',
      name: 'Bucharest',
      country: 'Romania',
      description: "Romania's capital, known for its wide boulevards and Belle Époque buildings.",
      image: '', // Placeholder
      coordinates: { lat: 44.44, lng: 26.10 },
      zoom: 13,
      timezone: 'Europe/Bucharest',
    },
  ],
  [
    'cagliari',
    {
      key: 'cagliari',
      name: 'Cagliari',
      country: 'Italy',
      description: 'The capital of Sardinia, known for its historic Castello district, beautiful beaches, and rich archaeological heritage.',
      image: '', // Placeholder
      coordinates: { lat: 39.219167, lng: 9.116667 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'budapest',
    {
      key: 'budapest',
      name: 'Budapest',
      country: 'Hungary',
      description: "Hungary's capital, bisected by the River Danube, famous for its thermal baths.",
      image: '', // Placeholder
      coordinates: { lat: 47.50, lng: 19.04 },
      zoom: 13,
      timezone: 'Europe/Budapest',
    },
  ],
  [
    'copenhagen',
    {
      key: 'copenhagen',
      name: 'Copenhagen',
      country: 'Denmark',
      description: "Denmark's capital, known for its Nyhavn harbor, Tivoli Gardens, and Little Mermaid statue.",
      image: '', // Placeholder
      coordinates: { lat: 55.68, lng: 12.57 },
      zoom: 13,
      timezone: 'Europe/Copenhagen',
    },

  ],
  [
    'dresden',
    {
      key: 'dresden',
      name: 'Dresden',
      country: 'Germany',
      description: 'Capital of the eastern German state of Saxony, distinguished by celebrated art museums.',
      image: '', // Placeholder
      coordinates: { lat: 51.05, lng: 13.74 },
      zoom: 13,
      timezone: 'Europe/Berlin',
    },
  ],
  [
    'dublin',
    {
      key: 'dublin',
      name: 'Dublin',
      country: 'Ireland',
      description: 'Capital of the Republic of Ireland, known for its pubs, literature, and history.',
      image: '', // Placeholder
      coordinates: { lat: 53.35, lng: -6.26 },
      zoom: 13,
      timezone: 'Europe/Dublin',
    },
  ],
  [
    'dubrovnik',
    {
      key: 'dubrovnik',
      name: 'Dubrovnik',
      country: 'Croatia',
      description: 'A city in southern Croatia fronting the Adriatic Sea, known for its distinctive Old Town.',
      image: '', // Placeholder
      coordinates: { lat: 42.64, lng: 18.11 },
      zoom: 14,
      timezone: 'Europe/Zagreb',
    },
  ],
  [
    'edinburgh',
    {
      key: 'edinburgh',
      name: 'Edinburgh',
      country: 'United Kingdom',
      description: "Scotland's compact, hilly capital, known for its medieval Old Town and elegant Georgian New Town.",
      image: '', // Placeholder
      coordinates: { lat: 55.95, lng: -3.20 },
      zoom: 13,
      timezone: 'Europe/London',
    },
  ],
  [
    'florence',
    {
      key: 'florence',
      name: 'Florence',
      country: 'Italy',
      description: 'Capital of Italy’s Tuscany region, home to masterpieces of Renaissance art and architecture.',
      image: '', // Placeholder
      coordinates: { lat: 43.77, lng: 11.26 },
      zoom: 14,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'gdansk',
    {
      key: 'gdansk',
      name: 'Gdansk', // Corrected Polish character
      country: 'Poland',
      description: 'A port city on the Baltic coast of Poland, known for its colorful Long Market.',
      image: '', // Placeholder
      coordinates: { lat: 54.35, lng: 18.65 },
      zoom: 13,
      timezone: 'Europe/Warsaw',
    },
  ],
  [
    'geneva',
    {
      key: 'geneva',
      name: 'Geneva',
      country: 'Switzerland',
      description: 'A global city, a financial center, and a worldwide center for diplomacy.',
      image: '', // Placeholder
      coordinates: { lat: 46.20, lng: 6.14 },
      zoom: 13,
      timezone: 'Europe/Zurich',
    },
  ],
  [
    'istanbul',
    {
      key: 'istanbul',
      name: 'Istanbul',
      country: 'Turkey',
      description: 'A major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.',
      image: '', // Placeholder
      coordinates: { lat: 41.01, lng: 28.98 },
      zoom: 12,
      timezone: 'Europe/Istanbul',
    },
  ],
  [
    'krakow',
    {
      key: 'krakow',
      name: 'Krakow', // Corrected Polish character
      country: 'Poland',
      description: 'A southern Poland city near the border of the Czech Republic, known for its medieval core.',
      image: '', // Placeholder
      coordinates: { lat: 50.05, lng: 19.94 },
      zoom: 13,
      timezone: 'Europe/Warsaw',
    },
  ],
  [
    'lisbon',
    {
      key: 'lisbon',
      name: 'Lisbon',
      country: 'Portugal',
      description: 'Portugal’s hilly, coastal capital city, known for its pastel-colored buildings.',
      image: '', // Placeholder
      coordinates: { lat: 38.72, lng: -9.14 },
      zoom: 13,
      timezone: 'Europe/Lisbon',
    },
  ],
  [
    'liverpool',
    {
      key: 'liverpool',
      name: 'Liverpool',
      country: 'United Kingdom',
      description: 'A maritime city in northwest England, birthplace of The Beatles.',
      image: '', // Placeholder
      coordinates: { lat: 53.41, lng: -2.98 },
      zoom: 13,
      timezone: 'Europe/London',
    },
  ],
  [
    'london',
    {
      key: 'london',
      name: 'London',
      country: 'United Kingdom',
      description: 'England’s capital, set on the River Thames, a global centre of finance, culture and history.',
      image: '', // Placeholder
      coordinates: { lat: 51.51, lng: -0.13 },
      zoom: 12,
      timezone: 'Europe/London',
    },
  ],
  [
    'madrid',
    {
      key: 'madrid',
      name: 'Madrid',
      country: 'Spain',
      description: "Spain's central capital, a city of elegant boulevards and expansive, manicured parks.",
      image: '', // Placeholder
      coordinates: { lat: 40.42, lng: -3.70 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'malaga',
    {
      key: 'malaga',
      name: 'Malaga',
      country: 'Spain',
      description: 'A port city on southern Spain’s Costa del Sol, known for its high-rise hotels and resorts.',
      image: '', // Placeholder
      coordinates: { lat: 36.72, lng: -4.42 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'manchester',
    {
      key: 'manchester',
      name: 'Manchester',
      country: 'United Kingdom',
      description: 'A major city in the northwest of England with a rich industrial heritage.',
      image: '', // Placeholder
      coordinates: { lat: 53.48, lng: -2.24 },
      zoom: 13,
      timezone: 'Europe/London',
    },
  ],
  [
    'milan',
    {
      key: 'milan',
      name: 'Milan',
      country: 'Italy',
      description: "A metropolis in Italy's northern Lombardy region, a global capital of fashion and design.",
      image: '', // Placeholder
      coordinates: { lat: 45.46, lng: 9.19 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'munich',
    {
      key: 'munich',
      name: 'Munich',
      country: 'Germany',
      description: 'Bavaria’s capital, home to centuries-old buildings and numerous museums.',
      image: '', // Placeholder
      coordinates: { lat: 48.14, lng: 11.58 },
      zoom: 13,
      timezone: 'Europe/Berlin',
    },
  ],
  [
    'naples',
    {
      key: 'naples',
      name: 'Naples',
      country: 'Italy',
      description: 'A city in southern Italy, sits on the Bay of Naples. Nearby is Mount Vesuvius.',
      image: '', // Placeholder
      coordinates: { lat: 40.85, lng: 14.27 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'nice',
    {
      key: 'nice',
      name: 'Nice',
      country: 'France',
      description: 'Capital of the Alpes-Maritimes department on the French Riviera.',
      image: '', // Placeholder
      coordinates: { lat: 43.70, lng: 7.27 },
      zoom: 13,
      timezone: 'Europe/Paris',
    },
  ],
  [
    'oslo',
    {
      key: 'oslo',
      name: 'Oslo',
      country: 'Norway',
      description: 'The capital of Norway, sits on the country’s southern coast at the head of the Oslofjord.',
      image: '', // Placeholder
      coordinates: { lat: 59.91, lng: 10.75 },
      zoom: 12,
      timezone: 'Europe/Oslo',
    },
  ],
  [
    'paris',
    {
      key: 'paris',
      name: 'Paris',
      country: 'France',
      description: "France's capital, a major European city and a global center for art, fashion, gastronomy and culture.",
      image: '', // Placeholder
      coordinates: { lat: 48.86, lng: 2.35 },
      zoom: 13,
      timezone: 'Europe/Paris',
    },
  ],
  [
    'porto',
    {
      key: 'porto',
      name: 'Porto',
      country: 'Portugal',
      description: 'A coastal city in northwest Portugal known for its stately bridges and port wine production.',
      image: '', // Placeholder
      coordinates: { lat: 41.15, lng: -8.61 },
      zoom: 13,
      timezone: 'Europe/Lisbon',
    },
  ],
  [
    'poznan',
    {
      key: 'poznan',
      name: 'Poznan', // Using 'Poznan' for consistency with Gdansk/Krakow entries
      country: 'Poland',
      description: "A historic city in western Poland, known for its Renaissance Old Town and the St. Martin's croissant.", // Escaped apostrophe
      image: '', // Placeholder
      coordinates: { lat: 52.4064, lng: 16.9252 }, // Central Poznan coordinates
      zoom: 13,
      timezone: 'Europe/Warsaw',
    },
  ],
  [
    'prague',
    {
      key: 'prague',
      name: 'Prague',
      country: 'Czech Republic',
      description: 'Capital city of the Czech Republic, bisected by the Vltava River.',
      image: '', // Placeholder
      coordinates: { lat: 50.07, lng: 14.42 },
      zoom: 13,
      timezone: 'Europe/Prague',
    },
  ],
  [
    'riga',
    {
      key: 'riga',
      name: 'Riga',
      country: 'Latvia',
      description: 'Capital of Latvia, set on the Baltic Sea at the mouth of the River Daugava.',
      image: '', // Placeholder
      coordinates: { lat: 56.95, lng: 24.11 },
      zoom: 13,
      timezone: 'Europe/Riga',
    },
  ],
  [
    'rome',
    {
      key: 'rome',
      name: 'Rome',
      country: 'Italy',
      description: 'Italy’s capital, a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art.',
      image: '', // Placeholder
      coordinates: { lat: 41.90, lng: 12.50 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'salzburg',
    {
      key: 'salzburg',
      name: 'Salzburg',
      country: 'Austria',
      description: 'An Austrian city on the border of Germany, with views of the Eastern Alps.',
      image: '', // Placeholder
      coordinates: { lat: 47.81, lng: 13.06 },
      zoom: 13,
      timezone: 'Europe/Vienna',
    },
  ],
  [
    'seville',
    {
      key: 'seville',
      name: 'Seville',
      country: 'Spain',
      description: 'Capital of southern Spain’s Andalusia region, famous for flamenco dancing.',
      image: '', // Placeholder
      coordinates: { lat: 37.39, lng: -5.99 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'sofia',
    {
      key: 'sofia',
      name: 'Sofia',
      country: 'Bulgaria',
      description: 'The capital of the Balkan nation of Bulgaria, located in the west of the country.',
      image: '', // Placeholder
      coordinates: { lat: 42.70, lng: 23.32 },
      zoom: 13,
      timezone: 'Europe/Sofia',
    },
  ],
  [
    'stockholm',
    {
      key: 'stockholm',
      name: 'Stockholm',
      country: 'Sweden',
      description: 'The capital of Sweden, encompasses 14 islands and more than 50 bridges.',
      image: '', // Placeholder
      coordinates: { lat: 59.33, lng: 18.07 },
      zoom: 12,
      timezone: 'Europe/Stockholm',
    },
  ],
  [
    'tallinn',
    {
      key: 'tallinn',
      name: 'Tallinn',
      country: 'Estonia',
      description: 'Estonia’s capital on the Baltic Sea, the country’s cultural hub.',
      image: '', // Placeholder
      coordinates: { lat: 59.44, lng: 24.75 },
      zoom: 13,
      timezone: 'Europe/Tallinn',
    },
  ],
  [
    'toledo',
    {
      key: 'toledo',
      name: 'Toledo',
      country: 'Spain',
      description: 'An ancient city set on a hill above the plains of Castilla-La Mancha in central Spain.',
      image: '', // Placeholder
      coordinates: { lat: 39.86, lng: -4.02 },
      zoom: 14,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'valencia',
    {
      key: 'valencia',
      name: 'Valencia',
      country: 'Spain',
      description: 'The port city lies on Spain’s southeastern coast, where the Turia River meets the Mediterranean Sea.',
      image: '', // Placeholder
      coordinates: { lat: 39.47, lng: -0.38 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'venice',
    {
      key: 'venice',
      name: 'Venice',
      country: 'Italy',
      description: 'The capital of northern Italy’s Veneto region, built on more than 100 small islands.',
      image: '', // Placeholder
      coordinates: { lat: 45.44, lng: 12.32 },
      zoom: 14,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'verona',
    {
      key: 'verona',
      name: 'Verona',
      country: 'Italy',
      description: 'A city in northern Italy’s Veneto region, famous for being the setting of Shakespeare’s "Romeo and Juliet."',
      image: '', // Placeholder
      coordinates: { lat: 45.43, lng: 10.98 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'vienna',
    {
      key: 'vienna',
      name: 'Vienna',
      country: 'Austria',
      description: 'Austria’s capital, lies in the country’s east on the Danube River.',
      image: '', // Placeholder
      coordinates: { lat: 48.21, lng: 16.37 },
      zoom: 13,
      timezone: 'Europe/Vienna',
    },
  ],
  [
    'vilnius',
    {
      key: 'vilnius',
      name: 'Vilnius',
      country: 'Lithuania',
      description: 'Lithuania’s capital, known for its baroque architecture, seen especially in its medieval Old Town.',
      image: '', // Placeholder
      coordinates: { lat: 54.69, lng: 25.28 },
      zoom: 13,
      timezone: 'Europe/Vilnius',
    },
  ],
  [
    'zagreb',
    {
      key: 'zagreb',
      name: 'Zagreb',
      country: 'Croatia',
      description: 'Croatia’s northwestern capital, distinguished by its 18th- and 19th-century Austro-Hungarian architecture.',
      image: '', // Placeholder
      coordinates: { lat: 45.82, lng: 15.97 },
      zoom: 13,
      timezone: 'Europe/Zagreb',
    },
  ],
  [
    'zurich',
    {
      key: 'zurich',
      name: 'Zurich',
      country: 'Switzerland',
      description: 'A global center for banking and finance, located at the north end of Lake Zurich.',
      image: '', // Placeholder
      coordinates: { lat: 47.37, lng: 8.54 },
      zoom: 13,
      timezone: 'Europe/Zurich',
    },
  ],
  [
    'alicante',
    {
      key: 'alicante',
      name: 'Alicante',
      country: 'Spain',
      description: 'A port city on Spain\'s Costa Blanca, known for its castle, beaches and old town.',
      image: '', // Placeholder
      coordinates: { lat: 38.3452, lng: -0.4811 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'cadiz',
    {
      key: 'cadiz',
      name: 'Cadiz',
      country: 'Spain',
      description: 'A historic port city in southwestern Spain, known for its old town and maritime heritage.',
      image: '', // Placeholder
      coordinates: { lat: 36.5298, lng: -6.2926 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'laspalmas',
    {
      key: 'laspalmas',
      name: 'Las Palmas',
      country: 'Spain',
      description: 'The vibrant capital of Gran Canaria, known for its historic architecture, beautiful beaches, and rich cultural heritage.',
      image: '', // Placeholder
      coordinates: { lat: 28.1248, lng: -15.4300 },
      zoom: 13,
      timezone: 'Atlantic/Canary',
    },
  ],
  [
    'palma',
    {
      key: 'palma',
      name: 'Palma',
      country: 'Spain',
      description: 'A beautiful city on La Palma island, known for its colonial architecture, vibrant culture, and stunning natural surroundings.',
      image: '', // Placeholder
      coordinates: { lat: 28.6835, lng: -17.7644 },
      zoom: 13,
      timezone: 'Europe/Madrid',
    },
  ],
  [
    'palermo',
    {
      key: 'palermo',
      name: 'Palermo',
      country: 'Italy',
      description: 'Sicily\'s capital and largest city, famous for its history, culture, architecture and gastronomy.',
      image: '', // Placeholder
      coordinates: { lat: 38.1157, lng: 13.3615 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'pisa',
    {
      key: 'pisa',
      name: 'Pisa',
      country: 'Italy',
      description: 'Historic Tuscan city, world-famous for its iconic Leaning Tower and rich architectural heritage.',
      image: '', // Placeholder
      coordinates: { lat: 43.7085, lng: 10.4036 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'thessaloniki',
    {
      key: 'thessaloniki',
      name: 'Thessaloniki',
      country: 'Greece',
      description: 'Greece\'s second-largest city, known for its rich history, Byzantine architecture and vibrant food scene.',
      image: '', // Placeholder
      coordinates: { lat: 40.6401, lng: 22.9444 },
      zoom: 13,
      timezone: 'Europe/Athens',
    },
  ],
  [
    'valletta',
    {
      key: 'valletta',
      name: 'Valletta',
      country: 'Malta',
      description: 'The capital of Malta, known for its historic fortifications, baroque architecture, and rich cultural heritage.',
      image: '', // Placeholder
      coordinates: { lat: 35.8989, lng: 14.5146 },
      zoom: 14,
      timezone: 'Europe/Malta',
    },
  ],
  [
    'marseille',
    {
      key: 'marseille',
      name: 'Marseille',
      country: 'France',
      description: 'A major port city in southern France, known for its vibrant cultural scene, historic harbor, and Mediterranean influences.',
      image: '', // Placeholder
      coordinates: { lat: 43.2965, lng: 5.3698 },
      zoom: 13,
      timezone: 'Europe/Paris',
    },
  ],
  [
    'lyon',
    {
      key: 'lyon',
      name: 'Lyon',
      country: 'France',
      description: 'A historic city in east-central France, known for its gastronomy, silk production, and Renaissance architecture.',
      image: '', // Placeholder
      coordinates: { lat: 45.7640, lng: 4.8357 },
      zoom: 13,
      timezone: 'Europe/Paris',
    },
  ],
  [
    'genoa',
    {
      key: 'genoa',
      name: 'Genoa',
      country: 'Italy',
      description: 'A port city and the capital of northwest Italy\'s Liguria region, known for its maritime history and historic center.',
      image: '', // Placeholder
      coordinates: { lat: 44.4056, lng: 8.9463 },
      zoom: 13,
      timezone: 'Europe/Rome',
    },
  ],
  [
    'telaviv',
    {
      key: 'telaviv',
      name: 'Tel-aviv',
      country: 'Israel',
      description: 'A vibrant coastal city in Israel, known for its modern architecture, beaches, and thriving cultural scene.',
      image: '', // Placeholder
      coordinates: { lat: 32.0853, lng: 34.7818 },
      zoom: 13,
      timezone: 'Asia/Jerusalem',
    },
  ],
  [
    'warsaw',
    {
      key: 'warsaw',
      name: 'Warsaw',
      country: 'Poland',
      description: 'The capital and largest city of Poland, known for its rich history, reconstructed Old Town, and vibrant cultural scene.',
      image: '', // Placeholder
      coordinates: { lat: 52.2297, lng: 21.0122 },
      zoom: 12,
      timezone: 'Europe/Warsaw',
    },
  ],
  [
    'reykjavik',
    {
      key: 'reykjavik',
      name: 'Reykjavik',
      country: 'Iceland',
      description: 'The capital and largest city of Iceland, known for its geothermal activity, vibrant cultural scene, and stunning natural surroundings.',
      image: '', // Placeholder
      coordinates: { lat: 64.1466, lng: -21.9426 },
      zoom: 12,
      timezone: 'Atlantic/Reykjavik',
    },
  ],
  [
    'tirana',
    {
      key: 'tirana',
      name: 'Tirana',
      country: 'Albania',
      description: 'The capital and largest city of Albania, known for its colorful buildings, Ottoman and Italian influences, and vibrant cafe culture.',
      image: '', // Placeholder
      coordinates: { lat: 41.3275, lng: 19.8187 },
      zoom: 13,
      timezone: 'Europe/Tirane',
    },
  ],
  // Asian cities
  [
    'dubai',
    {
      key: 'dubai',
      name: 'Dubai',
      country: 'United Arab Emirates',
      description: 'A city of superlatives, known for its ultramodern architecture, luxury shopping, and vibrant nightlife.',
      image: '', // Placeholder
      coordinates: { lat: 25.2048, lng: 55.2708 },
      zoom: 12,
      timezone: 'Asia/Dubai',
    },
  ],
  [
    'bangkok',
    {
      key: 'bangkok',
      name: 'Bangkok',
      country: 'Thailand',
      description: 'Thailand\'s capital, known for ornate shrines, vibrant street life, and a blend of traditional and modern culture.',
      image: '', // Placeholder
      coordinates: { lat: 13.7563, lng: 100.5018 },
      zoom: 12,
      timezone: 'Asia/Bangkok',
    },
  ],
  [
    'singapore',
    {
      key: 'singapore',
      name: 'Singapore',
      country: 'Singapore',
      description: 'A global financial center with a tropical climate and multicultural population, known for its modern architecture and gardens.',
      image: '', // Placeholder
      coordinates: { lat: 1.3521, lng: 103.8198 },
      zoom: 12,
      timezone: 'Asia/Singapore',
    },
  ],
  [
    'tokyo',
    {
      key: 'tokyo',
      name: 'Tokyo',
      country: 'Japan',
      description: 'Japan\'s busy capital, blending ultramodern and traditional elements, from neon-lit skyscrapers to historic temples.',
      image: '', // Placeholder
      coordinates: { lat: 35.6762, lng: 139.6503 },
      zoom: 12,
      timezone: 'Asia/Tokyo',
    },
  ],
  [
    'osaka',
    {
      key: 'osaka',
      name: 'Osaka',
      country: 'Japan',
      description: 'A large port city known for its modern architecture, nightlife, and hearty street food.',
      image: '', // Placeholder
      coordinates: { lat: 34.6937, lng: 135.5023 },
      zoom: 12,
      timezone: 'Asia/Tokyo',
    },
  ],
  [
    'kyoto',
    {
      key: 'kyoto',
      name: 'Kyoto',
      country: 'Japan',
      description: 'Japan\'s former capital, famous for classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses.',
      image: '', // Placeholder
      coordinates: { lat: 35.0116, lng: 135.7681 },
      zoom: 12,
      timezone: 'Asia/Tokyo',
    },
  ],
  [
    'seoul',
    {
      key: 'seoul',
      name: 'Seoul',
      country: 'South Korea',
      description: 'South Korea\'s capital, a huge metropolis where modern skyscrapers and high-tech subways meet Buddhist temples and palaces.',
      image: '', // Placeholder
      coordinates: { lat: 37.5665, lng: 126.9780 },
      zoom: 12,
      timezone: 'Asia/Seoul',
    },
  ],
  [
    'hongkong',
    {
      key: 'hongkong',
      name: 'Hong Kong',
      country: 'China',
      description: 'A vibrant urban center known for its skyline, shopping, and fusion of Eastern and Western influences.',
      image: '', // Placeholder
      coordinates: { lat: 22.3193, lng: 114.1694 },
      zoom: 12,
      timezone: 'Asia/Hong_Kong',
    },
  ],
  [
    'beijing',
    {
      key: 'beijing',
      name: 'Beijing',
      country: 'China',
      description: 'China\'s massive capital, known for its ancient sites such as the Forbidden City and modern architecture.',
      image: '', // Placeholder
      coordinates: { lat: 39.9042, lng: 116.4074 },
      zoom: 12,
      timezone: 'Asia/Shanghai',
    },
  ],
  [
    'taipei',
    {
      key: 'taipei',
      name: 'Taipei',
      country: 'Taiwan',
      description: 'Taiwan\'s capital, a modern metropolis with Japanese colonial lanes, busy shopping streets and contemporary buildings.',
      image: '', // Placeholder
      coordinates: { lat: 25.0330, lng: 121.5654 },
      zoom: 12,
      timezone: 'Asia/Taipei',
    },
  ],
  [
    'kualalumpur',
    {
      key: 'kualalumpur',
      name: 'Kuala Lumpur',
      country: 'Malaysia',
      description: 'Malaysia\'s capital, known for its colonial architecture, busy shopping districts, and iconic skyscrapers.',
      image: '', // Placeholder
      coordinates: { lat: 3.1390, lng: 101.6869 },
      zoom: 12,
      timezone: 'Asia/Kuala_Lumpur',
    },
  ],

  // North America cities
  [
    'boston',
    {
      key: 'boston',
      name: 'Boston',
      country: 'United States',
      description: 'One of America\'s oldest cities, known for its rich history, prestigious universities, and vibrant cultural scene.',
      image: '', // Placeholder
      coordinates: { lat: 42.3601, lng: -71.0589 },
      zoom: 12,
      timezone: 'America/New_York',
    },
  ],
  [
    'sanfrancisco',
    {
      key: 'sanfrancisco',
      name: 'San Francisco',
      country: 'United States',
      description: 'A cultural and financial center of Northern California, known for the Golden Gate Bridge, cable cars, and Victorian architecture.',
      image: '', // Placeholder
      coordinates: { lat: 37.7749, lng: -122.4194 },
      zoom: 12,
      timezone: 'America/Los_Angeles',
    },
  ],
  [
    'washington',
    {
      key: 'washington',
      name: 'Washington',
      country: 'United States',
      description: 'The capital of the United States, known for its iconic monuments, museums, and government buildings.',
      image: '', // Placeholder
      coordinates: { lat: 38.9072, lng: -77.0369 },
      zoom: 12,
      timezone: 'America/New_York',
    },
  ],
  [
    'montreal',
    {
      key: 'montreal',
      name: 'Montreal',
      country: 'Canada',
      description: 'The largest city in Quebec province, known for its French heritage, vibrant arts scene, and historic architecture.',
      image: '', // Placeholder
      coordinates: { lat: 45.5017, lng: -73.5673 },
      zoom: 12,
      timezone: 'America/Montreal',
    },
  ],
  [
    'ottawa',
    {
      key: 'ottawa',
      name: 'Ottawa',
      country: 'Canada',
      description: 'The capital city of Canada, known for its Parliament Hill, historic architecture, and cultural institutions.',
      image: '', // Placeholder
      coordinates: { lat: 45.4215, lng: -75.6972 },
      zoom: 12,
      timezone: 'America/Toronto',
    },
  ],
  [
    'quebec',
    {
      key: 'quebec',
      name: 'Quebec',
      country: 'Canada',
      description: 'A historic city with a UNESCO-listed Old Town, known for its French heritage, Château Frontenac, and European charm.',
      image: '', // Placeholder
      coordinates: { lat: 46.8139, lng: -71.2080 },
      zoom: 12,
      timezone: 'America/Toronto',
    },
  ],
  [
    'newyork',
    {
      key: 'newyork',
      name: 'New York',
      country: 'United States',
      description: 'The most populous city in the United States, known for its iconic skyline, Broadway theaters, and cultural diversity.',
      image: '', // Placeholder
      coordinates: { lat: 40.7128, lng: -74.0060 },
      zoom: 12,
      timezone: 'America/New_York',
    },
  ],
  [
    'chicago',
    {
      key: 'chicago',
      name: 'Chicago',
      country: 'United States',
      description: 'The third-most populous city in the United States, known for its architecture, deep-dish pizza, and vibrant music scene.',
      image: '', // Placeholder
      coordinates: { lat: 41.8781, lng: -87.6298 },
      zoom: 12,
      timezone: 'America/Chicago',
    },
  ],
  [
    'toronto',
    {
      key: 'toronto',
      name: 'Toronto',
      country: 'Canada',
      description: 'Canada\'s largest city and a multicultural hub, known for the CN Tower, diverse neighborhoods, and vibrant food scene.',
      image: '', // Placeholder
      coordinates: { lat: 43.6532, lng: -79.3832 },
      zoom: 12,
      timezone: 'America/Toronto',
    },
  ],
  [
    'mexicocity',
    {
      key: 'mexicocity',
      name: 'Mexico City',
      country: 'Mexico',
      description: 'The capital of Mexico, known for its historic center, ancient ruins, world-class museums, and vibrant street food.',
      image: '', // Placeholder
      coordinates: { lat: 19.4326, lng: -99.1332 },
      zoom: 12,
      timezone: 'America/Mexico_City',
    },
  ],
  [
    'havana',
    {
      key: 'havana',
      name: 'Havana',
      country: 'Cuba',
      description: 'The capital of Cuba, known for its colorful colonial architecture, vintage cars, and vibrant culture.',
      image: '', // Placeholder
      coordinates: { lat: 23.1136, lng: -82.3666 },
      zoom: 13,
      timezone: 'America/Havana',
    },
  ],
  [
    'skopje',
    {
      key: 'skopje',
      name: 'Skopje',
      country: 'North Macedonia',
      description: 'The capital of North Macedonia, known for its Ottoman and Byzantine architecture, stone bridge, and fortress.',
      image: '', // Placeholder
      coordinates: { lat: 41.9973, lng: 21.4280 },
      zoom: 13,
      timezone: 'Europe/Skopje',
    },
  ],
  [
    'monaco',
    {
      key: 'monaco',
      name: 'Monaco',
      country: 'Monaco',
      description: 'A sovereign city-state on the French Riviera, known for its luxury casinos, yacht-lined harbor, and prestigious Grand Prix.',
      image: '', // Placeholder
      coordinates: { lat: 43.7384, lng: 7.4246 },
      zoom: 15,
      timezone: 'Europe/Monaco',
    },
  ],
  [
    'podgorica',
    {
      key: 'podgorica',
      name: 'Podgorica',
      country: 'Montenegro',
      description: 'The capital of Montenegro, known for its modern architecture, Ottoman old town, and nearby natural attractions.',
      image: '', // Placeholder
      coordinates: { lat: 42.4304, lng: 19.2594 },
      zoom: 13,
      timezone: 'Europe/Podgorica',
    },
  ],
  [
    'ljubljana',
    {
      key: 'ljubljana',
      name: 'Ljubljana',
      country: 'Slovenia',
      description: 'The capital of Slovenia, known for its green spaces, baroque facades, and iconic Triple Bridge.',
      image: '', // Placeholder
      coordinates: { lat: 46.0569, lng: 14.5058 },
      zoom: 13,
      timezone: 'Europe/Ljubljana',
    },
  ],
  [
    'bruges',
    {
      key: 'bruges',
      name: 'Bruges',
      country: 'Belgium',
      description: 'A medieval city in Belgium known for its canals, cobbled streets, and well-preserved Gothic architecture.',
      image: '', // Placeholder
      coordinates: { lat: 51.2093, lng: 3.2247 },
      zoom: 14,
      timezone: 'Europe/Brussels',
    },
  ],
  [
    'antwerp',
    {
      key: 'antwerp',
      name: 'Antwerp',
      country: 'Belgium',
      description: 'A port city in Belgium known for its diamond district, Renaissance architecture, and fashion scene.',
      image: '', // Placeholder
      coordinates: { lat: 51.2194, lng: 4.4025 },
      zoom: 13,
      timezone: 'Europe/Brussels',
    },
  ],
  [
    'rotterdam',
    {
      key: 'rotterdam',
      name: 'Rotterdam',
      country: 'Netherlands',
      description: 'A major port city in the Netherlands known for its bold, modern architecture and maritime heritage.',
      image: '', // Placeholder
      coordinates: { lat: 51.9244, lng: 4.4777 },
      zoom: 13,
      timezone: 'Europe/Amsterdam',
    },
  ],
  [
    'thehague',
    {
      key: 'thehague',
      name: 'The Hague',
      country: 'Netherlands',
      description: 'The administrative and royal capital of the Netherlands, known for its International Court of Justice and historic government buildings.',
      image: '', // Placeholder
      coordinates: { lat: 52.0705, lng: 4.3007 },
      zoom: 13,
      timezone: 'Europe/Amsterdam',
    },
  ],
  // South America cities
  [
    'santiago',
    {
      key: 'santiago',
      name: 'Santiago',
      country: 'Chile',
      description: 'The capital and largest city of Chile, nestled in a valley surrounded by the snow-capped Andes and the Chilean Coast Range.',
      image: '', // Placeholder
      coordinates: { lat: -33.4489, lng: -70.6693 },
      zoom: 12,
      timezone: 'America/Santiago',
    },
  ],
  [
    'cartagena',
    {
      key: 'cartagena',
      name: 'Cartagena',
      country: 'Colombia',
      description: 'A historic port city on Colombia\'s Caribbean coast, known for its colonial walled city, colorful buildings, and vibrant culture.',
      image: '', // Placeholder
      coordinates: { lat: 10.4225, lng: -75.5392 },
      zoom: 13,
      timezone: 'America/Bogota',
    },
  ],
  [
    'lima',
    {
      key: 'lima',
      name: 'Lima',
      country: 'Peru',
      description: 'The capital of Peru, known for its colonial architecture, museums, and renowned food scene.',
      image: '', // Placeholder
      coordinates: { lat: -12.051389, lng: -77.043056 },
      zoom: 12,
      timezone: 'America/Lima',
    },
  ],
  [
    'quito',
    {
      key: 'quito',
      name: 'Quito',
      country: 'Ecuador',
      description: 'The capital of Ecuador, situated high in the Andean foothills, known for its well-preserved colonial center and stunning mountain views.',
      image: '', // Placeholder
      coordinates: { lat: -0.22, lng: -78.512083 },
      zoom: 12,
      timezone: 'America/Guayaquil',
    },
  ],
  [
    'medellin',
    {
      key: 'medellin',
      name: 'Medellin',
      country: 'Colombia',
      description: 'A city in Colombia known for its innovation, spring-like climate, and transformation from a troubled past to a vibrant cultural center.',
      image: '', // Placeholder
      coordinates: { lat: 6.250556, lng: -75.568056 },
      zoom: 12,
      timezone: 'America/Bogota',
    },
  ],
  [
    'bogota',
    {
      key: 'bogota',
      name: 'Bogota',
      country: 'Colombia',
      description: 'The capital of Colombia, a high-altitude metropolis known for its colonial architecture, museums, and vibrant cultural scene.',
      image: '', // Placeholder
      coordinates: { lat: 4.605833, lng: -74.056389 },
      zoom: 12,
      timezone: 'America/Bogota',
    },
  ],
  [
    'buenosaires',
    {
      key: 'buenosaires',
      name: 'Buenos Aires',
      country: 'Argentina',
      description: 'The capital of Argentina, known for its European-style architecture, tango dancing, and vibrant cultural scene.',
      image: '', // Placeholder
      coordinates: { lat: -34.608333, lng: -58.371944 },
      zoom: 12,
      timezone: 'America/Argentina/Buenos_Aires',
    },
  ],
  // Australia cities
  [
    'perth',
    {
      key: 'perth',
      name: 'Perth',
      country: 'Australia',
      description: 'The capital of Western Australia, known for its sandy beaches, Kings Park, and Swan River.',
      image: '', // Placeholder
      coordinates: { lat: -31.9505, lng: 115.8605 },
      zoom: 12,
      timezone: 'Australia/Perth',
    },
  ],
  [
    'melbourne',
    {
      key: 'melbourne',
      name: 'Melbourne',
      country: 'Australia',
      description: 'The coastal capital of Victoria, known for its vibrant arts scene, coffee culture, and sports events.',
      image: '', // Placeholder
      coordinates: { lat: -37.817798, lng: 144.968714 },
      zoom: 12,
      timezone: 'Australia/Melbourne',
    },
  ],
  [
    'sydney',
    {
      key: 'sydney',
      name: 'Sydney',
      country: 'Australia',
      description: 'Australia\'s largest city, known for its iconic Opera House, Harbour Bridge, and beautiful beaches.',
      image: '', // Placeholder
      coordinates: { lat: -33.85681, lng: 151.21514 },
      zoom: 12,
      timezone: 'Australia/Sydney',
    },
  ],
  [
    'auckland',
    {
      key: 'auckland',
      name: 'Auckland',
      country: 'New Zealand',
      description: 'New Zealand\'s largest city, built around two harbors and known for its diverse landscapes and volcanic cones.',
      image: '', // Placeholder
      coordinates: { lat: -36.848472, lng: 174.762306 },
      zoom: 12,
      timezone: 'Pacific/Auckland',
    },
  ],
  [
    'wellington',
    {
      key: 'wellington',
      name: 'Wellington',
      country: 'New Zealand',
      description: 'The capital of New Zealand, known for its waterfront promenade, sandy beaches, and cultural institutions.',
      image: '', // Placeholder
      coordinates: { lat: -41.285347, lng: 174.767825 },
      zoom: 12,
      timezone: 'Pacific/Auckland',
    },
  ],
  // Africa cities
  [
    'telaviv',
    {
      key: 'telaviv',
      name: 'Tel Aviv',
      country: 'Israel',
      description: 'A vibrant coastal city on the Mediterranean Sea, known for its Bauhaus architecture, beaches, and thriving tech scene.',
      image: '', // Placeholder
      coordinates: { lat: 32.0853, lng: 34.7818 },
      zoom: 13,
      timezone: 'Asia/Jerusalem',
    },
  ],

]);

// Function to get metadata by city key
export function getCityMetadata(cityKey: string): CityMetadata | undefined {
  return cityMetadataMap.get(cityKey.toLowerCase());
}