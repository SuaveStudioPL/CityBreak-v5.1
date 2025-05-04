import { Attraction } from '../../../types/attractions';


export const veniceAttractions: Attraction[] = [
  {
    id: '1',
    name: 'St Mark\'s Basilica',
    description: 'A breathtaking Byzantine basilica adorned with intricate golden mosaics and marble columns, a testament to Venice\'s rich history and artistic heritage. Climb the Campanile, its bell tower, for stunning panoramic views of Venice\'s unique cityscape. The spiritual and historical heart of the city. It is said that it houses the relics of Saint Mark the Evangelist.',
    coordinates: { lat: 45.4345, lng: 12.3397 },
    openingHours: 'Basilica/Museum: Mon-Sat 9:30-17:15, Sun 14:00-17:15. Campanile: Daily 9:30-21:15. Check site.',
    freeEntryInfo: 'Requires paid ticket for Basilica, Museum, Pala d\'Oro, Treasury, Campanile.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Doge\'s Palace',
    description: 'A Gothic masterpiece that was once the seat of Venetian power for centuries. Cross the Bridge of Sighs, connecting the palace to the prisons, and explore the opulent chambers adorned with frescoes by Tintoretto and Veronese. A symbol of the Republic of Venice, known as La Serenissima. It is said that prisoners crossing the bridge would sigh at their last view of freedom.',
    coordinates: { lat: 45.4339, lng: 12.3404 },
    openingHours: 'Daily, seasonal hours (Summer 9:00-19:00, Winter 9:00-18:00). Last entry 1h before close.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Rialto Bridge',
    description: 'The oldest and most famous bridge spanning the Grand Canal, a bustling hub of activity lined with shops and markets. Capture iconic sunset views over the canal or browse for Venetian souvenirs. An essential part of the Venetian experience. It is said that it was the only way to cross the Grand Canal on foot for a long time.',
    coordinates: { lat: 45.438, lng: 12.336 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Grand Canal (Venice)',
    description: 'Venice’s main waterway, a majestic S-shaped canal flanked by stunning palaces like Ca’ d’Oro and the Peggy Guggenheim Collection. Glide along its waters by vaporetto (water bus) or gondola to admire the Baroque facades and soak in the unique atmosphere of the city. The lifeblood of Venice. It is said that the city was founded on numerous small islands in the lagoon.',
    coordinates: { lat: 45.442222, lng: 12.326389 },
    category: 'attraction'
  },
  {
    id: '5',
    name: 'Murano',
    description: 'An island in the Venetian Lagoon, famed for centuries of glassblowing tradition. Visit glass factories to watch artisans craft intricate chandeliers, vases, and sculptures, and explore the Murano Glass Museum. A short vaporetto ride from San Marco. It is said that the glassmakers were moved here to reduce the risk of fires in Venice.',
    coordinates: { lat: 45.4585, lng: 12.3524 },
    category: 'cultural'
  },
  {
    id: '6',
    name: 'Burano',
    description: 'A picturesque fishing island in the Venetian Lagoon, known for its brightly colored houses and traditional lace-making. Photograph the vibrant pastel facades reflected in the canals and sample fresh seafood from local restaurants. One of Venice\'s most charming and Instagrammable spots. It is said that the houses were painted in bright colors so fishermen could find their way home in the fog.',
    coordinates: { lat: 45.4853, lng: 12.4169 },
    category: 'hidden_gem'
  },
  {
    id: '7',
    name: 'Peggy Guggenheim Collection',
    description: 'A museum of modern art housed in the Palazzo Venier dei Leoni on the Grand Canal, the former home of American heiress Peggy Guggenheim. It features an impressive collection of 20th-century European and American art, including works by Picasso, Pollock, and Dalí. Relax in the sculpture garden overlooking the canal. It is said that the palazzo was never finished because of a curse.',
    coordinates: { lat: 45.430556, lng: 12.331111 },
    openingHours: 'Wed-Mon: 10:00 - 18:00. Closed Tue & Dec 25.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Venice Lido',
    description: 'A long, narrow barrier island that separates the Venetian Lagoon from the Adriatic Sea. It offers sandy beaches, a relaxed atmosphere, and is the venue for the prestigious Venice Film Festival. Rent a bike to explore the island or stroll along the Liberty-style promenade. A welcome break from the crowds of central Venice. It is said that it was once a popular spot for duels.',
    coordinates: { lat: 45.406, lng: 12.3673 },
    category: 'beach'
  },
  {
    id: '9',
    name: 'Campo Santa Margherita',
    description: 'A lively and authentic square in the Dorsoduro district, popular with students and locals. It comes alive in the evenings with bars, gelaterias, and street performers. Join the locals for an Aperol spritz at one of the outdoor tables. Venice’s social hub after dark. It is said that it was once a cemetery.',
    coordinates: { lat: 45.4344, lng: 12.323822 },
    openingHours: 'Square accessible 24/7. Bars/restaurants have own hours.',
    category: 'square'
  },
  {
    id: '10',
    name: 'Teatro La Fenice',
    description: 'A historic opera house in Venice, renowned for its stunning acoustics and opulent interiors. It has hosted the premieres of operas by Verdi, Bellini, and Rossini. Rebuilt after several fires, it stands as a symbol of Venice\'s cultural heritage. It is said that it was named "The Phoenix" because it rose from the ashes.',
    coordinates: { lat: 45.4336, lng: 12.3339 },
    openingHours: 'Visits/Tours: Daily 9:30-18:00. Performances: Evenings, check schedule.',
    category: 'cultural'
  },
  {
    id: '11',
    name: 'San Giorgio Maggiore',
    description: 'A Palladian church located on the island of San Giorgio Maggiore, directly across from St Mark\'s Square. Climb its bell tower for unmatched panoramic views of Venice\'s skyline and the lagoon. A serene escape from the bustle of San Marco. It is said that the island was once home to a cypress forest.',
    coordinates: { lat: 45.42795, lng: 12.344184 },
    openingHours: 'Church: Mon-Sat 9:30-12:30 & 14:30-18:00/18:30, Sun 8:30-11:00 & 14:30-18:00/18:30. Bell Tower: Daily 10:00-13:00 & 14:00-18:00.',
    freeEntryInfo: 'Church entry free. Bell Tower requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '12',
    name: 'Venice Biennale',
    description: 'A prestigious international art exhibition held biennially in Venice. Explore avant-garde pavilions representing different countries in a park setting, the Giardini. A global showcase of contemporary art and architecture. It is said that it was established to revive Venice\'s cultural scene.',
    coordinates: { lat: 45.4286, lng: 12.3575 },
    category: 'cultural'
  }
];
