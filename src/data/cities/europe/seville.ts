import { Attraction } from '../../../types/attractions';


export const sevilleAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Alcázar of Seville',
    description: 'A UNESCO-listed royal palace in Seville, showcasing a stunning blend of Islamic, Gothic, and Renaissance architectural styles. Originally a Moorish fort, it has been continuously used by Spanish royalty. Wander through its lush, intricate gardens and marvel at the Mudéjar courtyards, famously featured in the TV series Game of Thrones. It is said that it was built over a Roman settlement.',
    coordinates: { lat: 37.3839, lng: -5.9914 },
    openingHours: 'Daily. Summer (Apr-Sep): 9:30-19:00. Winter (Oct-Mar): 9:30-17:00. Closed holidays.',
    freeEntryInfo: 'Free Mon last hour before close (limited capacity).',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Seville Cathedral',
    description: 'The world’s largest Gothic cathedral, a monumental symbol of Seville’s power and wealth during the Age of Discovery. It houses the tomb of Christopher Columbus and features the Giralda, its bell tower, which offers panoramic views of the city. Originally a mosque, it was converted after the Reconquista. It is said that its height was deliberately set to be taller than any other building in the city.',
    coordinates: { lat: 37.3856, lng: -5.9931 },
    openingHours: 'Mon-Sat: 10:45-18:00/19:00. Sun: 14:30-18:00/19:00. Check site for variations.',
    freeEntryInfo: 'Free Mon 14:00-15:00 (book online). Requires paid ticket otherwise.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Plaza de España, Seville',
    description: 'A grand, semi-circular plaza built for the 1929 Ibero-American Exposition, located in Maria Luisa Park. Its architecture combines Renaissance Revival and Moorish styles. Visitors can rent a rowboat on its canal, admire the tiled alcoves representing different Spanish provinces, and sometimes watch flamenco performances. A romantic and architecturally splendid site. It is said that each tile tells a story of Spain.',
    coordinates: { lat: 37.3772, lng: -5.9869 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Metropol Parasol',
    description: 'A futuristic wooden structure in the Plaza de la Encarnación, nicknamed \'Las Setas\' (The Mushrooms) due to its appearance. Designed by Jürgen Mayer, it offers a rooftop walkway with city views and houses Roman ruins discovered during its construction in its basement museum, the Antiquarium. A modern marvel that blends with the ancient. It is said that its design was controversial but ultimately embraced by the city.',
    coordinates: { lat: 37.3928, lng: -5.9919 },
    openingHours: 'Walkway: Daily 9:30-00:30. Antiquarium: Tue-Sat 10:00-20:00, Sun 10:00-14:00 (approx).',
    freeEntryInfo: 'Walkway requires paid ticket. Antiquarium free for Seville residents/under 16s/over 65s.',
    category: 'architecture'
  },
  {
    id: '5',
    name: 'Triana, Seville',
    description: 'A lively and historically significant district of Seville, located on the west bank of the Guadalquivir River. Famous for its flamenco traditions, ceramics industry, and bustling tapas bars. Stroll along Calle Betis for river views and experience the artistic soul of Seville. It was once home to sailors, gypsies, and bullfighters. It is said that it has a distinct identity separate from the rest of Seville.',
    coordinates: { lat: 37.383581, lng: -6.0052 },
    category: 'historic'
  },
  {
    id: '6',
    name: 'Torre del Oro',
    description: 'A 13th-century watchtower on the bank of the Guadalquivir River. Its name, "Tower of Gold," might refer to its golden sheen or its role in storing gold brought from the Americas. Today, it houses a maritime museum with model ships and navigational instruments. A historic sentinel that played a crucial role in Seville\'s defense. It is said that it was once part of a defensive wall.',
    coordinates: { lat: 37.3825, lng: -5.9964 },
    openingHours: 'Mon-Fri: 9:30-18:45. Sat-Sun: 10:30-18:45. Closed holidays.',
    freeEntryInfo: 'Free entry Mondays.',
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Parque de María Luisa',
    description: 'A sprawling and beautiful park in Seville, donated to the city by the Duchess of Montpensier. It features ponds, fountains, pavilions, and lush vegetation, including orange trees. A perfect place to relax, rent a bicycle, or enjoy a stroll. It was the main site of the 1929 Ibero-American Exposition. It is said that it was inspired by the gardens of Versailles.',
    coordinates: { lat: 37.3742, lng: -5.9869 },
    openingHours: 'Daily. Summer: 8:00-24:00. Winter: 8:00-22:00.',
    category: 'nature'
  },
  {
    id: '8',
    name: 'Casa de Pilatos',
    description: 'A stunning 16th-century Andalusian palace, mixing Mudéjar, Gothic, and Renaissance architectural styles. It features beautiful tiled courtyards, Roman statues, and lush gardens. Often considered a lesser-known architectural gem of Seville. It is said that it was built to resemble Pontius Pilate\'s house in Jerusalem.',
    coordinates: { lat: 37.3899, lng: -5.98711 },
    openingHours: 'Daily. Summer (Apr-Oct): 9:00-19:00. Winter (Nov-Mar): 9:00-18:00.',
    freeEntryInfo: 'Free entry Mon after 15:00 (EU citizens).',
    category: 'historic'
  },
  {
    id: '9',
    name: 'Flamenco Dance Museum',
    description: 'A museum dedicated to the history and art of flamenco, Andalusia\'s traditional dance. It offers live performances, interactive exhibits, and insights into cante jondo (deep song) and iconic dancers. Experience the passion and intensity of flamenco. Founded by Cristina Hoyos, a renowned flamenco dancer. It is said that flamenco was born from the fusion of various cultures.',
    coordinates: { lat: 37.388927, lng: -5.991189 },
    openingHours: 'Museum: Daily 11:00-18:00. Shows: Daily, multiple evening times (e.g., 17:00, 19:00, 20:45). Check site.',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Belen_maya.jpg/250px-Belen_maya.jpg']
  },
  {
    id: '10',
    name: 'Hospital de los Venerables',
    description: 'A beautifully preserved Baroque building with a serene central courtyard. Originally a hospital for elderly priests, it now serves as an art center, focusing on the Golden Age of Seville. It houses paintings by Diego Velázquez and other masters. A hidden cultural treasure. It is said that its courtyard has a unique acoustic quality.',
    coordinates: { lat: 37.385238, lng: -5.990111 },
    openingHours: 'Daily, seasonal hours (e.g., Summer 10-20, Mid-Season 10-14, Winter 10-18). Check official site.',
    freeEntryInfo: 'Free entry Sundays 14:00-closing.',
    category: 'museum'
  },
  {
    id: '11',
    name: 'Isla Mágica',
    description: 'A popular theme park located on the Isla de la Cartuja, the site of the 1992 World Expo. It offers a variety of rides, water attractions, and shows based on Seville\'s colonial history and the Age of Discovery. Fun for families and thrill-seekers. It is said that the park incorporates elements from the Expo pavilions.',
    coordinates: { lat: 37.4086, lng: -6.0003 },
    openingHours: 'Seasonal (Apr-Nov 1), not daily. Hours vary (opens ~11:00, closes 19:00-24:00). Check official calendar.',
    category: 'attraction'
  },
  {
    id: '12',
    name: 'Basilica de la Macarena',
    description: 'A basilica housing the revered statue of the Virgin of Hope Macarena, one of Seville\'s most important religious icons, especially during the Holy Week processions. Admire its ornate gold canopy and the emotional devotion it inspires. A significant spiritual landmark in the city. It is said that the statue has miraculous powers.',
    coordinates: { lat: 37.402580, lng: -5.989385 },
    openingHours: 'Daily 9:00-14:00 & 17:00-21:00 (approx). Restricted during services.',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Exterior_of_Bas%C3%ADlica_de_la_Macarena%2C_Sevilla_20180719.jpg/330px-Exterior_of_Bas%C3%ADlica_de_la_Macarena%2C_Sevilla_20180719.jpg']
  }
];
