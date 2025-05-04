import { Attraction } from '../../../types/attractions';

export const bolognaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Piazza Maggiore',
    description: 'The main public square of Bologna, surrounded by important buildings like the Basilica di San Petronio and Palazzo d\'Accursio. A vibrant hub of city life. History suggests it has been the center of Bologna since the 13th century.',
    coordinates: { lat: 44.493758, lng: 11.342885 }, // Zgodne z GeoHack
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Basilica di San Petronio',
    description: 'A massive basilica overlooking Piazza Maggiore, one of the largest in Italy. Its facade remains unfinished, adding to its unique character. It houses important artworks and historical artifacts. Accounts indicate construction began in 1390.',
    coordinates: { lat: 44.493622, lng: 11.343073 }, // Zgodne z GeoHack
    openingHours: 'Daily approx. 8:00/8:30 - 18:00. Visits restricted during mass.',
    freeEntryInfo: 'Entry to basilica is free. Paid ticket required for terrace and Cappella dei Magi.',
    category: 'religious'
  },
  {
    id: '3',
    name: 'Two Towers, Bologna',
    description: 'The iconic symbols of Bologna, the Asinelli and Garisenda towers, remnants of the city\'s medieval towers. (NOTE: Asinelli tower currently CLOSED for climbing due to safety monitoring of Garisenda). They lean dramatically, a testament to medieval engineering. Information suggests they were built in the 12th century.',
    coordinates: { lat: 44.494464, lng: 11.346322 }, // Zgodne z GeoHack
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Fontana del Nettuno',
    description: 'A monumental fountain in Piazza Nettuno, adjacent to Piazza Maggiore, featuring a bronze statue of Neptune. A symbol of Bologna and a masterpiece of 16th-century Mannerist sculpture. It was designed by Giambologna. History indicates it was completed in 1567.',
    coordinates: { lat: 44.493972, lng: 11.341683 }, // Zgodne z GeoHack
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Archiginnasio of Bologna',
    description: 'The former main building of the University of Bologna, one of the oldest universities in the world. Its courtyard is surrounded by intricate heraldic emblems of students. It now houses the Anatomical Theatre and the Municipal Library. Accounts suggest it was built in the 16th century.',
    coordinates: { lat: 44.492889, lng: 11.342667 }, // Zgodne z GeoHack
    openingHours: 'Palace/Library: Mon-Fri 9:00-18:30, Sat 9:00-13:30. Anatomical Theatre/Stabat Mater Hall: Mon-Fri 10:00-18:00, Sat 10:00-19:00, Sun/Holidays 10:00-14:00.',
    freeEntryInfo: 'Palace courtyard and library access is free. Anatomical Theatre/Stabat Mater Hall require paid ticket.',
    category: 'historic'
  },
  {
    id: '6',
    name: 'Madonna di San Luca, Bologna',
    description: 'A sanctuary located on a hill overlooking Bologna, connected to the city center by a long portico. It offers beautiful views and is an important pilgrimage site. The portico is the longest in the world. Information indicates the sanctuary dates back to the 12th century.',
    coordinates: { lat: 44.478889, lng: 11.296667 }, // Zgodne z GeoHack
    openingHours: 'Daily approx. 7:00 - 19:00 (may close briefly midday). Check locally.',
    category: 'religious'
  },
  {
    id: '7',
    name: 'The old market in the Quadrilatero, Bologna',
    description: 'A network of narrow streets in the heart of Bologna, filled with food markets, traditional shops, and restaurants. A vibrant area showcasing Bologna\'s culinary heritage. History suggests it has been a market area since Roman times.',
    coordinates: { lat: 44.493600, lng: 11.342000 }, // Zgodne z GeoHack
    category: 'local',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Quadrilatero%2C_Bologna%2C_Italy_-_panoramio_%284%29.jpg/960px-Quadrilatero%2C_Bologna%2C_Italy_-_panoramio_%284%29.jpg?20170222141749']
  },
  {
    id: '8',
    name: 'Pinacoteca Nazionale di Bologna',
    description: 'Bologna\'s main art gallery, housing an important collection of Emilian paintings from the 13th to 18th centuries. It features works by artists like Raphael, Titian, and Guido Reni. Accounts indicate it is located in the former Jesuit novitiate of San Ignazio.',
    coordinates: { lat: 44.498955, lng: 11.327591 }, // Zgodne z GeoHack
    openingHours: 'Official site: Mon-Fri 9:00-14:00. Closed Sat/Sun. **Strongly recommend checking official website/locally as hours may vary.**',
    freeEntryInfo: 'Requires paid ticket. Potential free entry on first Sunday of month (check locally).',
    category: 'museum'
  },
  {
    id: '9',
    name: 'Palazzo Comunale (Palazzo d\'Accursio)',
    description: 'A complex of historic buildings that served as Bologna\'s city hall. It houses the Municipal Art Collections (Collezioni Comunali d\'Arte), including the Farnese Hall. Located on Piazza Maggiore. Information suggests it was formed from several pre-existing buildings.',
    coordinates: { lat: 44.493758, lng: 11.343031 }, // Zgodne z GeoHack
    openingHours: 'Art Collections: Tue-Fri 9:00-18:30, Sat/Sun/Holidays 10:00-18:30. Closed Mon. Courtyard/some halls may have different hours.',
    freeEntryInfo: 'Municipal Art Collections require paid ticket (possibly free first Sunday of month). Courtyard/some halls may be free.',
    category: 'historic'
  },
  {
    id: '10',
    name: 'Santo Stefano, Bologna',
    description: 'A fascinating complex of seven interconnected churches, known as "Sette Chiese" (Seven Churches). It offers a unique journey through different architectural styles and periods. History suggests it was built on the site of an ancient temple of Isis.',
    coordinates: { lat: 44.491944, lng: 11.348889 }, // Zgodne z GeoHack (https://geohack.toolforge.org/geohack.php?language=pl&pagename=Bazylika_%C5%9Bw._Stefana_w_Bolonii&params=44.491944444444_N_11.348888888889_E_type:building)
    openingHours: 'Daily approx. 8:00/9:00 - 19:00. Visits restricted during mass.',
    category: 'religious'
  },
  {
    id: '11',
    name: 'Palazzo Poggi',
    description: 'A museum housed in the Palazzo Poggi, the main seat of the University of Bologna from the 16th century to 1803. It features collections related to the history of the university and scientific instruments. Accounts indicate it showcases the intellectual heritage of Bologna.',
    coordinates: { lat: 44.497222, lng: 11.349722 }, // Zgodne z GeoHack
    openingHours: 'Tue-Fri: 10:00 - 18:00, Sat/Sun/Holidays: 10:00 - 19:00. Closed Mon.',
    freeEntryInfo: 'Requires paid ticket. Free for UniBo students. May be free first Sunday of month (check locally).',
    category: 'museum'
  },
  {
    id: '12',
    name: 'Park of Montagnola, Bologna',
    description: 'A historic park located just outside the city walls, offering green spaces, fountains, and sculptures. It hosts a popular market on Fridays and Saturdays. A pleasant place for a stroll. Information suggests it was created in the 17th century.',
    coordinates: { lat: 44.5008, lng: 11.3413 }, // Zgodne z GeoHack
    category: 'nature'
  }
];
