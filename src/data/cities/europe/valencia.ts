import { Attraction } from '../../../types/attractions';


export const valenciaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'City of Arts and Sciences',
    description: 'A futuristic architectural complex designed by Santiago Calatrava and Félix Candela, featuring museums, theaters, and Europe\'s largest aquarium, Oceanogràfic. Explore the science museum, the opera house Palau de les Arts Reina Sofía, and the L\'Hemisfèric planetarium. A modern marvel that has become an icon of Valencia. It is said that it resembles a city from the future.',
    coordinates: { lat: 39.454167, lng: -0.35 },
    openingHours: 'Buildings open daily ~10:00, closing varies (18:00-21:00+). Check official site (cac.es) for each venue.',
    category: 'architecture'
  },
  {
    id: '2',
    name: 'Valencia Cathedral',
    description: 'A magnificent Gothic cathedral, built on the site of a Roman temple and later a mosque. It is believed to house the Holy Grail, the cup used by Jesus at the Last Supper. Climb the Miguelete bell tower for panoramic views of Valencia. A significant religious and historical landmark. It is said that the Holy Grail brought prosperity to the city.',
    coordinates: { lat: 39.475833, lng: -0.375 },
    openingHours: 'Cultural Visit: Mon-Sat 10:30-18:30, Sun 14:00-18:30. Miguelete Tower: Mon-Sun, seasonal hours. Check site.',
    freeEntryInfo: 'Requires paid ticket for tourist visit/museum/tower. Free for worship.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Mercado Central, Valencia',
    description: 'An Art Nouveau masterpiece, one of the largest and most beautiful covered markets in Europe. It offers a vibrant atmosphere and a wide array of fresh produce, meats, seafood, and local specialties. A feast for the senses and a great place to experience Valencian culture. It is said that the market is always bustling with the freshest goods.',
    coordinates: { lat: 39.473558, lng: -0.378921 },
    openingHours: 'Mon-Sat: 7:30 - 15:00. Closed Sun.',
    category: 'local_market'
  },
  {
    id: '4',
    name: 'La Lonja de la Seda',
    description: 'A UNESCO World Heritage site, a stunning example of Gothic civil architecture. Built in the 15th century, it was the former silk exchange, a testament to Valencia\'s importance in trade. Its intricate details and grand halls are worth exploring. It is said that the building was designed to resemble paradise.',
    coordinates: { lat: 39.474417, lng: -0.378444 },
    openingHours: 'Mon-Sat: 10:00-19:00. Sun/Holidays: 10:00-14:00.',
    freeEntryInfo: 'Free entry Sundays & public holidays.',
    category: 'historic'
  },
  {
    id: '5',
    name: 'Turia Garden',
    description: 'A unique linear park created in the former riverbed of the Turia River, which was diverted after a major flood. It stretches for over 9 kilometers and offers gardens, playgrounds, sports facilities, and cultural attractions, including the City of Arts and Sciences. A green oasis in the heart of Valencia. It is said that the park was built to bring joy and recreation to the city.',
    coordinates: { lat: 39.4801, lng: -0.386109 },
    openingHours: 'Open 24/7.',
    category: 'nature'
  },
  {
    id: '6',
    name: 'Plaza del Ayuntamiento',
    description: 'The main city square of Valencia, surrounded by impressive architecture, including the City Hall, the Central Post Office, and the Ateneo Mercantil. It features a large fountain and is a focal point for festivals and events. A vibrant center of Valencian life. It is said that the square has witnessed many historical moments.',
    coordinates: { lat: 39.4698, lng: -0.3764 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Plaza_del_Ayuntamiento_de_Valencia.JPG/250px-Plaza_del_Ayuntamiento_de_Valencia.JPG']
  },
  {
    id: '7',
    name: 'Torres de Serranos',
    description: 'Two impressive Gothic towers that were once part of the ancient city wall, serving as the main northern entrance to Valencia. Climb to the top for panoramic views of the city. A well-preserved piece of Valencia\'s medieval history. It is said that the towers were used to defend the city from invaders.',
    coordinates: { lat: 39.479293, lng: -0.375933 },
    openingHours: 'Tue-Sat: 10:00-19:00. Sun/Holidays: 10:00-14:00. Closed Mon.',
    freeEntryInfo: 'Free entry Sundays & public holidays.',
    category: 'historic'
  },
  {
    id: '8',
    name: 'Valencia Bioparc',
    description: 'A modern zoo that focuses on African wildlife and conservation. It recreates natural habitats, allowing visitors to observe animals in a more immersive way. See lions, elephants, giraffes, and lemurs. An engaging and educational experience. It is said that the park is a little piece of Africa in Valencia.',
    coordinates: { lat: 39.478, lng: -0.407 },
    openingHours: 'Daily from 10:00. Closing varies seasonally (17:00-21:00). Check official site.',
    category: 'attraction'
  },
  {
    id: '9',
    name: 'Malvarrosa Beach',
    description: 'A popular urban beach stretching along the Mediterranean coast, with a wide promenade lined with restaurants and cafes. Enjoy the sun, sand, and sea, and savor traditional Valencian paella at one of the beachfront eateries. A lively spot for locals and tourists alike. It is said that the name comes from a type of flower that once grew there.',
    coordinates: { lat: 39.4739, lng: -0.3247 },
    category: 'beach',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/La_Malvarrosa_-_Juanedc.jpg/960px-La_Malvarrosa_-_Juanedc.jpg']
  },
  {
    id: '10',
    name: 'Plaza de la Virgen',
    description: 'A historic square located in the heart of Valencia\'s old town, surrounded by important buildings such as the Cathedral, the Basilica of Our Lady of the Forsaken, and the Palau de la Generalitat. It is also home to the Turia Fountain. A picturesque and culturally significant space. It is said that the Water Court, which meets here, is the oldest justice institution in Europe.',
    coordinates: { lat: 39.476494, lng: -0.375332 },
    openingHours: 'Basilica: Daily 7:00-14:00 & 16:30-21:00 (approx).',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Plaza_de_la_Virgen%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_163.JPG/1024px-Plaza_de_la_Virgen%2C_Valencia%2C_Espa%C3%B1a%2C_2014-06-30%2C_DD_163.JPG']
  }
];
