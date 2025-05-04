import { Attraction } from '../../../types/attractions';


export const tallinnAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Tallinn Old Town',
    description: 'A UNESCO World Heritage site, Tallinn Old Town is a remarkably preserved medieval city center, boasting cobblestone streets, colorful Hanseatic-era buildings, and defensive walls and towers. Explore its charming squares, historic churches, and hidden courtyards. It is said that it was once a thriving trading hub.',
    coordinates: { lat: 59.437222, lng: 24.745278 },
    category: 'historic'
  },
  {
    id: '2',
    name: 'Alexander Nevsky Cathedral, Tallinn',
    description: 'An ornate Orthodox cathedral in the Russian Revival style, prominently situated atop Toompea Hill. Built in the late 19th century, it stands as a symbol of the Russian Empire\'s influence. Its gilded onion domes are a striking feature of Tallinn\'s skyline. It is said that its bells could be heard for miles.',
    coordinates: { lat: 59.435833, lng: 24.739361 },
    openingHours: 'Daily 8:00 - 18:00/19:00. Restricted during services.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Toompea Castle',
    description: 'A historic castle on Toompea Hill, with parts dating back to the 13th century. It currently houses the Estonian Parliament (Riigikogu). Over the centuries, it has served as a seat of power for various rulers. The castle offers panoramic views of the city. It is said that it was built on the grave of a legendary Estonian hero, Kalevipoeg.',
    coordinates: { lat: 59.4356, lng: 24.7372 },
    openingHours: 'Exterior viewable anytime. Interior/Parliament tours Mon-Fri (booking required). Check site.',
    freeEntryInfo: 'Guided tours free (booking required).',
    category: 'historic'
  },
  {
    id: '4',
    name: 'St. Olaf\'s Church, Tallinn',
    description: 'A historic church in Tallinn Old Town, believed to have been built in the 12th century. It was once one of the tallest buildings in the world. Its viewing platform offers breathtaking panoramic views of Tallinn and the Baltic Sea. It is said that it was named after the Norwegian King Olaf II.',
    coordinates: { lat: 59.441417, lng: 24.747806 },
    openingHours: 'Tower/Platform: Seasonal (Apr-Oct/Nov), daily 10:00-18:00. Church likely open daily (restricted during services).',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Town Hall Square, Tallinn',
    description: 'The historic central square of Tallinn Old Town, dominated by the Gothic Town Hall, one of the oldest town halls in Northern Europe. The square is a vibrant hub with restaurants, cafes, and market stalls, especially during the Christmas market. It is said that it was a meeting place for merchants since the medieval times.',
    coordinates: { lat: 59.437372, lng: 24.745319 },
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Estonian Open Air Museum',
    description: 'Located a short drive from Tallinn, this museum showcases traditional Estonian rural architecture and way of life from the 18th to the 20th centuries. Explore authentic farmhouses, windmills, and wooden churches set in a picturesque natural landscape. It is said that it feels like stepping back in time.',
    coordinates: { lat: 59.431389, lng: 24.638056 },
    openingHours: 'Seasonal hours. Summer: Park daily 10-20, Buildings daily 10-18. Winter: Park daily 10-17, Buildings Sat-Sun 10-17. Check site.',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Estonian_Open_Air_Museum.001.JPG/250px-Estonian_Open_Air_Museum.001.JPG']
  },
  {
    id: '7',
    name: 'Kadriorg Palace',
    description: 'A Baroque palace built by Peter the Great for his wife Catherine I in the early 18th century. Today, it houses the Kadriorg Art Museum, displaying a collection of foreign art. The palace is surrounded by a beautiful park, perfect for strolling. It is said that Peter the Great personally planted some of the trees in the park.',
    coordinates: { lat: 59.43851, lng: 24.79084 },
    openingHours: 'Seasonal hours. Summer (May-Sep): Tue-Sun 10-18 (Wed until 20). Winter (Oct-Apr): Wed-Sun 10-18 (Wed until 20). Closed Mon/Tue in winter.',
    freeEntryInfo: 'Requires paid ticket. Free entry specific dates (check site).',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Telliskivi Creative City',
    description: 'A vibrant creative hub located in a former industrial complex near the city center. It is home to numerous independent shops, art galleries, studios, restaurants, and bars. A place to experience Tallinn\'s contemporary culture and design scene. It is said that it was once a major railway depot.',
    coordinates: { lat: 59.4398, lng: 24.729 },
    category: 'cultural'
  },
  {
    id: '9',
    name: 'Seaplane Harbour',
    description: 'A maritime museum housed in former seaplane hangars, featuring interactive exhibits on Estonia\'s maritime history. Highlights include a submarine, an icebreaker, and a seaplane. A fascinating experience for all ages. It is said that the hangars were once top-secret military facilities.',
    coordinates: { lat: 59.450433, lng: 24.738308 },
    openingHours: 'Seasonal hours. Summer (May-Sep): Daily 10:00-19:00. Winter (Oct-Apr): Tue-Sun 10:00-18:00.',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Tallinn TV Tower',
    description: 'The tallest building in Estonia, offering an observation deck with panoramic views of Tallinn, the surrounding landscape, and the Baltic Sea. It also features exhibits on Estonian history and technology. For the adventurous, there\'s a walk on the edge. It is said that it was once a symbol of Soviet power.',
    coordinates: { lat: 59.471206, lng: 24.8875 },
    openingHours: 'Daily 10:00 - 19:00.',
    category: 'landmark'
  }
];
