import { Attraction } from '../../../types/attractions';


export const salzburgAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Hohensalzburg Fortress',
    description: 'A massive medieval fortress perched atop a hill overlooking Salzburg. One of the largest and best-preserved castles in Europe, offering stunning panoramic views of the city and the Alps. History suggests its construction began in the 11th century.',
    coordinates: { lat: 47.795, lng: 13.047222 },  // Updated from GeoHack
    openingHours: 'Daily, seasonal hours (Summer ~9:00-19:00, Winter 9:30-17:00). Check official site.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Mirabell Palace',
    description: 'A beautiful Baroque palace with stunning gardens, famous for being a filming location in "The Sound of Music." The Marble Hall is a popular venue for weddings. Accounts indicate it was built by Prince-Archbishop Wolf Dietrich Raitenau for his mistress.',
    coordinates: { lat: 47.805556, lng: 13.041944 },  // Updated from GeoHack
    openingHours: 'Gardens: Daily, dawn-dusk. Palace (Marble Hall/Stairs): Daily ~8:00-18:00 (check event closures).',
    freeEntryInfo: 'Free entry to Gardens and accessible Palace areas.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Getreidegasse',
    description: 'Salzburg\'s most famous shopping street, known for its narrow lanes, historic buildings, and ornate wrought-iron guild signs. Mozart\'s birthplace is located here. A vibrant hub of activity in the Old Town. History suggests it has been a major thoroughfare since Roman times.',
    coordinates: { lat: 47.8, lng: 13.043889 },  // Updated from GeoHack (central point)
    category: 'local'
  },
  {
    id: '4',
    name: 'Mozart\'s Birthplace',
    description: 'The house where Wolfgang Amadeus Mozart was born in 1756. Now a museum, it offers insights into his early life and family. Located in the Getreidegasse. It is a pilgrimage site for music lovers. Information indicates the Mozart family lived here for 26 years.',
    coordinates: { lat: 47.8, lng: 13.043333},  // Updated from GeoHack
    openingHours: 'Daily 9:00 - 17:30 (last entry 17:00). Check holiday variations.',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Salzburg Cathedral',
    description: 'A magnificent Baroque cathedral, one of the city\'s most important religious buildings. Its impressive facade and interior reflect the power and wealth of the Prince-Archbishops. It was heavily damaged during World War II and later restored. Accounts suggest the first cathedral on this site was built in the 8th century.',
    coordinates: { lat: 47.797778, lng: 13.046944 },  // Updated from GeoHack
    openingHours: 'Daily, seasonal hours (Mon-Sat from 8:00, Sun from 13:00, closes 17:00-19:00). Restricted during services.',
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Hellbrunn Palace',
    description: 'A Baroque villa built in the early 17th century, known for its trick fountains that surprise visitors with unexpected sprays of water. Its extensive gardens also feature a Roman-style open-air theatre. It was designed as a pleasure palace for Prince-Archbishop Markus Sittikus. History indicates the fountains were a source of amusement for guests.',
    coordinates: { lat: 47.7627, lng: 13.0606 },  // Updated from GeoHack
    openingHours: 'Seasonal (Apr-Nov 1). Palace/Fountains: Daily, hours vary (opens 9:30, closes 17:30-19:00). Park likely open longer/year-round.',
    freeEntryInfo: 'Park likely free. Palace/Fountains require paid ticket.',
    category: 'historic'
  },
  {
    id: '7',
    name: 'Saint Peter\'s Abbey, Salzburg',
    description: 'One of the oldest monasteries in the German-speaking world, founded in 696. Its church, cemetery, and catacombs are worth exploring. The St. Peter Stiftskeller is one of the oldest restaurants in Europe. Accounts suggest it was established by Saint Rupert.',
    coordinates: { lat: 47.796944, lng: 13.045833 },  // Updated from GeoHack
    openingHours: 'Church: Daily 8:00-12:00 & 14:30-18:30. Cemetery: Daily, seasonal hours (Summer 6:30-19/20, Winter 6:30-18). Catacombs: Daily, seasonal hours (Summer 10-12:30 & 13-18, Winter 10-12:30 & 13-17).',
    freeEntryInfo: 'Church & Cemetery free. Catacombs require paid ticket.',
    category: 'religious'
  },
  {
    id: '8',
    name: 'Haus der Natur Salzburg',
    description: 'A popular natural history museum with a wide range of exhibits, including dinosaurs, aquariums, and science demonstrations. Engaging for visitors of all ages. Information indicates it was founded in 1924.',
    coordinates: { lat: 47.801643, lng: 13.039200 },  // Updated from GeoHack
    openingHours: 'Daily 9:00 - 17:00.',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Haus_der_Natur_Salzburg_2009.jpg/250px-Haus_der_Natur_Salzburg_2009.jpg']
  },
  {
    id: '9',
    name: 'Hangar-7',
    description: 'A unique architectural structure housing the Flying Bulls aircraft fleet, as well as contemporary art exhibitions and restaurants. A modern contrast to Salzburg\'s historic sites. It is owned by Red Bull. Reports indicate it is a popular spot for aviation enthusiasts.',
    coordinates: { lat: 47.793611, lng: 13.007222 },  // Updated from GeoHack
    openingHours: 'Daily 9:00 - 22:00.',
    freeEntryInfo: 'Free entry.',
    category: 'attraction'
  },
  {
    id: '10',
    name: 'Nonnberg Abbey',
    description: 'The oldest continuously existing nunnery north of the Alps, famously associated with Maria Kutschera from "The Sound of Music." Its church has Romanesque and Gothic elements. Accounts suggest it was founded by Saint Rupert around 714.',
    coordinates: { lat: 47.796111, lng: 13.051667 },  // Updated from GeoHack
    openingHours: 'Church/Cemetery accessible daily, likely ~6:45 until dusk. Restricted during services.',
    category: 'religious'
  },
  {
    id: '11',
    name: 'Museum der Moderne Salzburg',
    description: 'A museum of modern and contemporary art, with two locations: one on the Mönchsberg hill offering great views, and another in the Rupertinum. It features works by Austrian and international artists. Information indicates it was established in 1983.',
    coordinates: { lat: 47.7982, lng: 13.0431 },  // Updated from GeoHack (Mönchsberg location)
    openingHours: 'Tue-Sun: 10:00-18:00 (Thu until 20:00). Open Mon during festivals/holidays.',
    freeEntryInfo: 'Requires paid ticket (under 19 free).',
    category: 'museum'
  }
];
