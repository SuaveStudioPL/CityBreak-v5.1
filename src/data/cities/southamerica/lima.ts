import { Attraction } from '../../../types/attractions';

export const limaAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Historic Centre of Lima',
      description: 'A UNESCO World Heritage Site since 1991, the Historic Centre of Lima showcases colonial architecture with plazas like Plaza Mayor. Founded in 1535 by Francisco Pizarro, it features the Government Palace, Cathedral of Lima, and ornate balconies. Despite earthquake damage, its vibrant streets and churches reflect Peru\’s rich colonial and indigenous heritage, making it a cultural must-see.',
      coordinates: { lat: -12.051389, lng: -77.043056 },
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '2',
      name: 'Metropolitan Cathedral of Lima',
      description: 'Located on Plaza Mayor, the Cathedral of Lima is a cornerstone of the city\’s colonial history. Begun in 1535, its Baroque and Renaissance design houses the tomb of Francisco Pizarro. The interior boasts intricate chapels, a cedar choir, and a museum of religious art. Rebuilt after earthquakes, it remains a spiritual and architectural landmark in Lima\’s Historic Centre.',
      coordinates: { lat: -12.046389, lng: -77.030278 },
      openingHours: 'Mon-Fri: 9:00-17:00, Sat: 10:00-13:00, closed Sun.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '3',
      name: 'Basilica and Convent of San Francisco, Lima',
      description: 'The Monastery of San Francisco in Lima\’s Historic Centre is famed for its colonial architecture and eerie catacombs, housing thousands of skulls and bones. Built in 1673, its Baroque church features a stunning library with 25,000 ancient texts and vibrant cloisters. A key cultural site, it offers guided tours revealing Lima\’s religious and colonial past.',
      coordinates: { lat: -12.045497, lng: -77.027394 },
      openingHours: 'Daily: 9:00-20:15.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '4',
      name: 'Government Palace of Peru',
      description: 'On Plaza Mayor, the Government Palace of Peru, also called Casa de Pizarro, is the official residence of Peru\’s president. Built in 1938 on a former Inca site, its neo-Baroque design includes grand salons and courtyards. Daily changing of the guard ceremonies and guided tours (by reservation) offer a glimpse into Peru\’s political history and architectural splendor.',
      coordinates: { lat: -12.0448, lng: -77.0298 },
      openingHours: 'Guided tours by reservation, times vary.',
      freeEntryInfo: 'Free entry with prior booking.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '5',
      name: 'Huaca Pucllana',
      description: 'Huaca Pucllana, a pre-Inca adobe pyramid in Miraflores, dates to the Lima culture (200-700 AD). This ceremonial center, made of handmade bricks, features plazas and burial sites. Excavated since 1981, it includes a museum displaying artifacts like textiles and ceramics. Surrounded by modern Lima, it offers a striking contrast, revealing the city\’s ancient roots.',
      coordinates: { lat: -12.111111, lng: -77.033889 },
      openingHours: 'Wed-Mon: 9:00-17:00, closed Tue.',
      category: 'archaeological',
      imageUrls: ['']
    },
    {
      id: '6',
      name: 'Larco Museum',
      description: 'Housed in an 18th-century mansion in Pueblo Libre, the Larco Museum boasts one of Peru\’s finest collections of pre-Columbian art. With over 45,000 artifacts, it showcases gold, ceramics, and textiles from cultures like Moche and Nazca. Its famous erotic pottery gallery and lush gardens make it a cultural highlight, offering deep insights into ancient Peruvian civilizations.',
      coordinates: { lat: -12.072497, lng: -77.070861 },
      openingHours: 'Daily: 9:00-18:00.',
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '7',
      name: 'Parque de la Reserva',
      description: 'In central Lima, Parque de la Reserva is home to the Magical Water Circuit, a dazzling display of 13 illuminated fountains. Opened in 1929 and renovated in 2007, it holds a Guinness record for the largest fountain complex. Nightly light and music shows draw crowds, making it a family-friendly spot to enjoy Lima\’s modern charm.',
      coordinates: { lat: -12.070833, lng: -77.033333 },
      openingHours: 'Tue-Sun: 15:00-22:30, closed Mon.',
      category: 'park',
      imageUrls: ['']
    },
    {
      id: '8',
      name: 'Museo de la Nación',
      description: 'The Museum of the Nation in San Borja is one of Peru\’s largest, showcasing the country\’s history from pre-Inca times to the present. Its vast collection includes textiles, ceramics, and replicas of archaeological sites like Chavín. Though some exhibits have moved, it remains a key cultural hub, offering a comprehensive look at Peru\’s diverse heritage.',
      coordinates: { lat: -12.0868, lng: -77.0019 },
      openingHours: 'Tue-Sun: 9:00-17:00, closed Mon.',
      freeEntryInfo: 'Free entry.',
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '9',
      name: 'Barranco (Lima)',
      description: 'Barranco, Lima\’s bohemian district, is known for colorful colonial homes, vibrant street art, and lively nightlife. Once a seaside retreat, it now hosts galleries, cafes, and the iconic Puente de los Suspiros. Its blend of history, culture, and modernity makes it a favorite for visitors seeking Lima\’s artistic soul and scenic Pacific views.',
      coordinates: { lat: -12.141667, lng: -77.016667 },
      category: 'neighborhood',
      imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Barrancolib.JPG/800px-Barrancolib.JPG']
    },
    {
      id: '10',
      name: 'Pachacamac',
      description: 'Located 40 km southeast of Lima, Pachacamac is a sprawling archaeological site sacred to the Ichma and Inca cultures (200-1533 AD). Its adobe temples, pyramids, and oracle drew pilgrims across the Andes. The on-site museum displays ceramics and textiles, while guided tours reveal its spiritual significance, offering a window into Peru\’s pre-Columbian past.',
      coordinates: { lat: -12.256667, lng: -76.900278 },
      openingHours: 'Tue-Sat: 9:00-17:00, Sun: 9:00-16:00, closed Mon.',
      category: 'archaeological',
      imageUrls: ['']
    },
    {
      id: '11',
      name: 'Miraflores District, Lima',
      description: 'Miraflores, a vibrant coastal district, is Lima\’s modern hub with upscale shops, restaurants, and parks like Parque Kennedy. Its Malecón offers stunning Pacific Ocean views and access to Larcomar mall. Known for safety and walkability, it blends urban energy with cultural sites like Huaca Pucllana, making it a top spot for visitors exploring Lima\’s contemporary side.',
      coordinates: { lat: -12.1175, lng: -77.043056 },
      category: 'neighborhood',
      imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Miraflores_Skyline.jpg/250px-Miraflores_Skyline.jpg']
    }
  ];