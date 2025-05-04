import { Attraction } from '../../../types/attractions';


export const toledoAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Toledo Cathedral',
    description: 'A magnificent example of Spanish Gothic architecture, considered one of the most important cathedrals in Spain. Its construction spanned several centuries and it houses impressive works of art. Tradition holds that it was built on the site of a former mosque.',
    coordinates: { lat: 39.8575, lng: -4.0239 }, // GeoHack: 39°51′27″N 4°01′26″W
    openingHours: 'Mon-Sat: 10:00-18:30. Sun: 14:00-18:30. Last entry 30min before close.',
    freeEntryInfo: 'Requires paid ticket. Free Mon-Fri 8:00-9:30 (Spanish citizens, naves only).',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Alcázar of Toledo',
    description: 'A stone fortification located at the highest part of Toledo, housing the Army Museum. Rich history serving as Roman praetorium, Moorish fortress, and royal palace. Heavily damaged during the Spanish Civil War and rebuilt. Accounts indicate it has been a strategic point for centuries.',
    coordinates: { lat: 39.8581, lng: -4.0206 }, // GeoHack: 39°51′29″N 4°01′14″W
    openingHours: 'Army Museum: Tue-Sun 10:00-17:00. Closed Mon & holidays.',
    freeEntryInfo: 'Free entry Sundays & specific holidays.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Synagogue of Santa María la Blanca',
    description: 'Considered the oldest synagogue building in Europe still standing, although it was later converted into a church. Its architecture reflects a Mudéjar style, showcasing the coexistence of cultures in Toledo. History suggests it was built in the 12th century.',
    coordinates: { lat: 39.856944, lng: -4.030278 }, // GeoHack: 39°51′21″N 4°01′49″W
    openingHours: 'Daily, seasonal hours (Summer 10:00-18:45, Winter 10:00-17:45).',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Synagogue of El Tránsito',
    description: 'Another important synagogue in Toledo, now housing the Sephardic Museum. Its interior is richly decorated with intricate stucco work. It provides insight into the Jewish heritage of the city. Information indicates it was built in the 14th century.',
    coordinates: { lat: 39.8558, lng: -4.0297 }, // GeoHack: 39°51′21″N 4°01′47″W
    openingHours: 'Seasonal hours. Summer: Tue-Sat 9:30-19:30, Sun 10-15. Winter: Tue-Sat 9:30-18:00, Sun 10-15. Closed Mon & holidays.',
    freeEntryInfo: 'Free Sat after 14:00 & Sun. Also specific holidays.',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Puente de San Martín',
    description: 'A medieval bridge crossing the Tagus River, offering impressive views of the western side of Toledo. It was built in the 14th century and played a crucial role in the city\'s defense. It is said to be one of the most beautiful bridges in Toledo.',
    coordinates: { lat: 39.8566, lng: -4.0342 }, // GeoHack: 39°51′23.76″N 4°02′03.21″W
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Monastery of San Juan de los Reyes',
    description: 'A historic monastery built by the Catholic Monarchs to commemorate their victory at the Battle of Toro and the birth of their son. Its architecture is a blend of Gothic and Mudéjar styles. Accounts indicate it was intended to be their burial place.',
    coordinates: { lat: 39.857778, lng: -4.031667 }, // GeoHack: 39°51′22″N 4°01′53″W
    openingHours: 'Daily, seasonal hours (Summer 10:00-18:45, Winter 10:00-17:45). Closed Jan 1, Dec 25.',
    category: 'historic'
  },
  {
    id: '7',
    name: 'Church of Santo Tomé, Toledo',
    description: 'A 14th-century church famous for housing El Greco\'s masterpiece, "The Burial of the Count of Orgaz." The painting is considered one of El Greco\'s finest works. It attracts many visitors eager to see the iconic artwork. History suggests the church was built on the site of a former mosque.',
    coordinates: { lat: 39.8568, lng: -4.0281 }, // GeoHack: 39°51′28″N 4°01′43″W
    openingHours: 'Daily, seasonal hours (Summer 10:00-18:45, Winter 10:00-17:45).',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Puerta de Bisagra Nueva',
    description: 'The main entrance gate to the walled city of Toledo, showcasing impressive Renaissance architecture. It was built in the 16th century and features the imperial coat of arms of Charles V. It is a symbol of Toledo\'s historical significance. It is said to be one of the most photographed gates in the city.',
    coordinates: { lat: 39.8625, lng: -4.0252 }, // GeoHack: 39°51′53″N 4°01′27″W
    category: 'landmark'
  },
  {
    id: '9',
    name: 'Mirador del Valle',
    description: 'A viewpoint located on the opposite side of the Tagus River, offering breathtaking panoramic views of Toledo\'s skyline. It is a popular spot for photographers and visitors wanting to capture the beauty of the entire city. It provides a stunning perspective, especially at sunset. Reports indicate it is one of the best places to admire Toledo.',
    coordinates: { lat: 39.850276, lng:  -4.022884 }, // GeoHack: 39°51′15″N 4°01′35″W
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Toledo_-_Panorama_desde_Mirador_del_Valle.jpg/960px-Toledo_-_Panorama_desde_Mirador_del_Valle.jpg?20140916203938']
  },
  {
    id: '10',
    name: 'Museum of El Greco',
    description: 'A museum dedicated to the works of the famous painter El Greco, who spent a significant portion of his life in Toledo. It is housed in two reconstructed historic buildings. The museum provides a deeper understanding of El Greco\'s artistic style and his connection to the city. It is said to be a must-visit for art lovers.',
    coordinates: { lat: 39.855833, lng:  -4.029167 }, // GeoHack: 39°51′26″N 4°01′43″W
    openingHours: 'Seasonal hours. Summer: Tue-Sat 9:30-19:30, Sun 10-15. Winter: Tue-Sat 9:30-18:00, Sun 10-15. Closed Mon & holidays.',
    freeEntryInfo: 'Free Sat after 14:00 & Sun. Also specific holidays.',
    category: 'museum'
  },
  {
    id: '11',
    name: 'Roman circus of Toledo',
    description: 'The well-preserved remains of a Roman circus, one of the largest in the Iberian Peninsula. It offers insight into the Roman history of Toledo. Although located outside the main walls, it is an important archaeological site. Evidence suggests it could accommodate thousands of spectators.',
    coordinates: { lat: 39.8643, lng: -4.0292 }, // GeoHack: 39°51′51.48″N 4°01′45.12″W
    openingHours: 'Tue-Sun: 10:00 - 14:00 (approx, check locally).',
    category: 'historic'
  }
];
