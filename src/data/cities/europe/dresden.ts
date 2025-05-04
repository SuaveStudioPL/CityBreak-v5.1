import { Attraction } from '../../../types/attractions';


export const dresdenAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Frauenkirche Dresden',
    description: 'A magnificent Lutheran church, rebuilt after being destroyed in World War II. Its distinctive dome is a symbol of reconciliation and Dresden\'s rebirth. Climb to the top for panoramic city views. History indicates the original church was completed in 1743.',
    coordinates: { lat: 51.0519, lng: 13.7416 },  // Updated from GeoHack
    openingHours: 'Church: Daily ~10:00-12:00 & 13:00-18:00 (check calendar, restricted during services). Dome Climb: Mon-Sat 10:00-18:00, Sun 12:30-18:00 (seasonal variations).',
    freeEntryInfo: 'Church entry free (donations welcome). Dome climb requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Zwinger Palace',
    description: 'A stunning Baroque palace complex, famous for its gardens, courtyards, and museums, including the Old Masters Picture Gallery. It was built during the reign of Augustus the Strong. Accounts suggest it was originally designed for lavish festivals.',
    coordinates: { lat: 51.0531, lng: 13.7344 },  // Updated from GeoHack
    openingHours: 'Courtyard: Daily 6:00-22:00 (winter closes earlier). Museums (Old Masters, Porcelain, Math/Physics Salon): Tue-Sun 10:00-18:00. Closed Mon.',
    freeEntryInfo: 'Courtyard free. Museums require paid ticket.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Semperoper',
    description: 'The opera house of the Saxon State Opera, known for its beautiful architecture and rich history. It has hosted premieres of works by Wagner and Strauss. The current building is a reconstruction of the original. Information indicates the first opera house on this site opened in 1678.',
    coordinates: { lat: 51.0542, lng: 13.7353 },  // Updated from GeoHack
    openingHours: 'Open for performances (evenings) and guided tours (variable times, check website). Box office opens before performances.',
    category: 'cultural'
  },
  {
    id: '4',
    name: 'Dresden Castle',
    description: 'One of the oldest buildings in Dresden, serving as a royal residence for centuries. It now houses several museums, including the Green Vault and the Armoury. Its architecture reflects various styles. History suggests parts of the castle date back to the 14th century.',
    coordinates: { lat: 51.0528, lng: 13.7369 },  // Updated from GeoHack
    openingHours: 'Museums (Green Vault, Armoury, Turkish Chamber etc.): Wed-Mon 10:00-18:00. Closed Tue. Courtyard likely similar hours.',
    freeEntryInfo: 'Museums require paid ticket (Historic Green Vault needs timed ticket). Courtyard entry possibly free.',
    category: 'historic'
  },
  {
    id: '5',
    name: 'Brühl\'s Terrace',
    description: 'A historic architectural ensemble along the Elbe river, offering scenic views. Known as the "Balcony of Europe," it features monuments and museums. It was once part of Dresden\'s fortifications. Accounts indicate it was transformed into a public promenade in the 19th century.',
    coordinates: { lat: 51.0533, lng: 13.7400 },  // Updated from GeoHack
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Green Vault',
    description: 'A museum located in the Dresden Castle, housing an extraordinary collection of treasures of the Saxon Electors and Kings of Poland. It is divided into the Historic Green Vault (timed ticket needed) and the New Green Vault. Information suggests it is one of the richest treasure chambers in Europe.',
    coordinates: { lat: 51.0528, lng: 13.7369 },  // Same as Dresden Castle (correct)
    openingHours: 'Wed-Mon: 10:00 - 18:00. Closed Tue.',
    category: 'museum'
  },
  {
    id: '7',
    name: 'Pillnitz Castle',
    description: 'A Baroque palace complex on the banks of the Elbe, consisting of the Riverside Palace, the New Palace, and the Mountain Palace. Its gardens are famous for exotic plants. It served as the summer residence of the Saxon royal family. History indicates it was significantly expanded in the 18th century.',
    coordinates: { lat: 51.0089, lng: 13.8719 },  // Updated from GeoHack
    openingHours: 'Park: Daily 6:00-dusk. Palaces/Museums: Apr-Oct, Tue-Sun 10:00-17:00/18:00. Closed Mon.',
    freeEntryInfo: 'Park requires paid entry Apr-Oct (9:00-18:00), free otherwise. Palaces/Museums require paid ticket.',
    category: 'historic'
  },
  {
    id: '8',
    name: 'Grosser Garten',
    description: 'Dresden\'s largest park, offering green spaces, a zoo, a botanical garden, and a miniature railway. A popular recreational area for locals and tourists. It was originally designed in the Baroque style. Accounts suggest it was opened to the public in the early 19th century.',
    coordinates: { lat: 51.0378, lng: 13.7603 },  // Updated from GeoHack
    openingHours: 'Park open daily, dawn-dusk. Attractions within have own hours.',
    category: 'nature'
  },
  {
    id: '9',
    name: 'Old Masters Picture Gallery',
    description: 'Located in the Zwinger Palace, this museum houses a world-famous collection of paintings by European masters, including Raphael\'s "Sistine Madonna." It is one of Dresden\'s most important cultural institutions. Information indicates the collection was started by the Saxon electors.',
    coordinates: { lat: 51.0531, lng: 13.7344 },  // Same as Zwinger Palace (correct)
    openingHours: 'Tue-Sun: 10:00 - 18:00. Closed Mon.',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Procession of Princes',
    description: 'A large mural made of Meissen porcelain tiles, depicting a procession of the rulers of Saxony. It is located on the outer wall of the Stallhof. One of the longest porcelain artworks in the world. History suggests it was originally painted but later replaced with tiles for durability.',
    coordinates: { lat: 51.0522, lng: 13.7375 },  // Updated from GeoHack
    category: 'landmark'
  },
  {
    id: '12',
    name: 'Military History Museum of the Bundeswehr',
    description: 'One of Germany\'s major military history museums, located in a striking modern building designed by Daniel Libeskind. It offers a critical look at German military history. Information indicates the museum has a vast collection of artifacts.',
    coordinates: { lat: 51.0750, lng: 13.7600 },  // Updated from GeoHack
    openingHours: 'Thu-Tue: 10:00 - 18:00, Mon: 10:00 - 21:00. Closed Wed.',
    freeEntryInfo: 'Free entry Mon 18:00 - 21:00.',
    category: 'museum'
  },
  {
    id: '13',
    name: 'Loschwitz Bridge',
    description: 'An iconic cantilever bridge spanning the Elbe River, connecting the districts of Blasewitz and Loschwitz. A marvel of late 19th-century engineering and a symbol of Dresden. It was built without the need for piers in the river. Reports indicate it was completed in 1893.',
    coordinates: { lat: 51.0539, lng: 13.8103 },  // Updated from GeoHack
    category: 'landmark'
  }
];
