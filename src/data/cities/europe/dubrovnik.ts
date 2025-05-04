import { Attraction } from '../../../types/attractions';


export const dubrovnikAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Walls of Dubrovnik',
    description: 'A series of defensive stone walls surrounding the Old Town of Dubrovnik. These well-preserved fortifications offer stunning views of the city and the Adriatic Sea. Walking the entire length is a must-do. History indicates construction began in the 12th century and continued until the 17th century.',
    coordinates: { lat: 42.6417, lng: 18.108 },
    openingHours: 'Daily, seasonal hours (Summer: 8:00-19:30, Winter: 9:00-15:00/17:30). Check official site.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Old Town Dubrovnik',
    description: 'A UNESCO World Heritage site, the Old Town is a maze of narrow streets, historic buildings, churches, and palaces. Explore its charming squares and soak in the medieval atmosphere. It was the capital of the Republic of Ragusa. Accounts suggest its origins date back to the 7th century.',
    coordinates: { lat: 42.6410, lng: 18.1084 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Old_town_of_dubrovnik.jpg/960px-Old_town_of_dubrovnik.jpg']
  },
  {
    id: '3',
    name: 'Stradun (street)',
    description: 'The main street of Dubrovnik, a wide, pedestrianized limestone street that runs through the heart of the Old Town. Lined with shops, cafes, and historical buildings. A popular place for strolling and people-watching. Information indicates it was paved in the 15th century.',
    coordinates: { lat: 42.641389, lng: 18.108056 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Lovrijenac',
    description: 'A dramatic fortress located on a rocky cliff outside the western wall of the Old Town. It offers impressive views of the city and the sea and was an important defensive structure. It is sometimes referred to as "Dubrovnik\'s Gibraltar." History suggests it was built in the 11th century.',
    coordinates: { lat: 42.640731, lng: 18.104412 },
    openingHours: 'Same hours as City Walls (Daily, seasonal: Summer 8:00-19:30, Winter 9:00-15:00/17:30).',
    category: 'historic'
  },
  {
    id: '5',
    name: 'Pile Gate',
    description: 'The main entrance to the Old Town of Dubrovnik, a historic gate connected to the city walls by a drawbridge. It features statues of St. Blaise and other figures. A bustling gateway to the city\'s treasures. Accounts indicate the current gate was built in the 16th century.',
    coordinates: { lat:  42.641742, lng: 18.1075 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pile_Gate%2C_Dubrovnik_01.jpg/960px-Pile_Gate%2C_Dubrovnik_01.jpg?20200517192730']
  },
  {
    id: '6',
    name: 'Rector\'s Palace, Dubrovnik',
    description: 'A Gothic-Renaissance palace that was once the seat of the Rector of the Republic of Ragusa. It now houses a museum with exhibits on Dubrovnik\'s history and culture. Its elegant architecture is a highlight of the Old Town. Information suggests it was rebuilt after earthquakes and fires.',
    coordinates: { lat: 42.640278, lng: 18.107198 },
    openingHours: 'Daily, seasonal hours (Summer: 9:00-18:00, Winter: 9:00-16:00).',
    category: 'historic'
  },
  {
    id: '7',
    name: 'Franciscan friary, Dubrovnik',
    description: 'A monastery at the western end of Stradun, known for its beautiful cloister, the Old Pharmacy (one of the oldest in Europe), and a library with rare manuscripts. A peaceful oasis in the bustling Old Town. History indicates the pharmacy has been operating since the 14th century.',
    coordinates: { lat: 42.6418, lng: 18.110688},
    openingHours: 'Museum/Cloister/Old Pharmacy exhibit: Daily 9:00 - 18:00.',
    category: 'religious'
  },
  {
    id: '8',
    name: 'Dubrovnik Cathedral',
    description: 'A Baroque cathedral located in the Old Town. It houses relics of Saint Blaise, the patron saint of Dubrovnik, and important artworks. The current cathedral was built after an earthquake destroyed the previous one. Accounts suggest the original cathedral dated back to the 7th century.',
    coordinates: { lat: 42.639849, lng: 18.1088 },
    openingHours: 'Daily, seasonal hours (Summer: Mon-Sat ~8:00-20:00, Sun ~11:00-17:30. Winter: Mon-Sat ~9:00-17:00, Sun ~11:00-17:00). Restricted during services.',
    freeEntryInfo: 'Cathedral entry free. Treasury requires paid ticket.',
    category: 'religious'
  },
  {
    id: '9',
    name: 'Srđ',
    description: 'A hill overlooking Dubrovnik, offering breathtaking panoramic views of the city, the coastline, and the surrounding islands. It can be reached by cable car. At the top, there is a fort and a restaurant. Information indicates the cable car was rebuilt after being destroyed in the Croatian War of Independence.',
    coordinates: { lat: 42.65, lng: 18.11 },
    openingHours: 'Cable Car: Daily, hours vary seasonally (opens 9:00, closes 16:00-24:00). Check official site.',
    category: 'nature'
  },
  {
    id: '10',
    name: 'Lokrum',
    description: 'A small island located a short ferry ride from Dubrovnik. It is a nature reserve with a botanical garden, a Benedictine monastery, and the "Iron Throne" from Game of Thrones. Legend says Richard the Lionheart was shipwrecked here. History suggests it was once a place of quarantine.',
    coordinates: { lat: 42.6338, lng: 18.1186 },
    category: 'nature'
  },
  {
    id: '11',
    name: 'St Blaise\'s Church',
    description: 'A beautiful Baroque church in the Old Town, dedicated to the patron saint of Dubrovnik. It was built in the early 18th century after the original church was destroyed by fire. Its facade is particularly striking. Accounts indicate the statue of St. Blaise survived the fire.',
    coordinates: { lat: 42.6407, lng: 18.1103 },
    openingHours: 'Likely open daily, morning until evening (e.g., 9:00-18:00). Restricted during services.',
    category: 'religious'
  },
];
