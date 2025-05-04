import { Attraction } from '../../../types/attractions';


export const viennaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Schönbrunn Palace',
    description: 'The former imperial summer residence of the Habsburg monarchs, a stunning Baroque palace with opulent interiors and magnificent gardens. Explore the state rooms, wander through the Gloriette, and visit the zoo within the palace grounds. A UNESCO World Heritage site and a symbol of Austrian imperial history. It is said that Empress Sisi loved spending time here.',
    coordinates: { lat: 48.1855, lng: 16.3123 },
    openingHours: 'Palace: Daily ~8:30-17:30. Park: Daily 6:30-dusk. Gardens/Zoo/Gloriette: Seasonal hours, daily ~9:30-17:30. Check site.',
    freeEntryInfo: 'Park free. Palace/Gardens/Zoo require paid tickets.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Hofburg',
    description: 'The former imperial winter residence of the Habsburg dynasty, a vast complex of palaces housing museums, including the Imperial Apartments, the Sisi Museum, and the Silver Collection. It also houses the Spanish Riding School and the Austrian National Library. A center of power for centuries. It is said that it\'s haunted by emperors past.',
    coordinates: { lat: 48.206389, lng: 16.365278 },
    openingHours: 'Imperial Apartments/Sisi Museum/Silver Collection: Daily, seasonal hours (Summer 9:00-18:00, Winter 9:00-17:30).',
    category: 'historic'
  },
  {
    id: '3',
    name: 'St. Stephen\'s Cathedral, Vienna',
    description: 'A magnificent Gothic cathedral, one of the most important religious sites in Vienna and a symbol of the city. Climb the south tower for panoramic views or explore the catacombs beneath. Its colorful tiled roof is a distinctive feature of the skyline. It is said that the cathedral was built on the ruins of a Roman camp.',
    coordinates: { lat: 48.2085, lng: 16.373 },
    openingHours: 'Cathedral: Mon-Sat 6:00-22:00, Sun 7:00-22:00. Towers/Catacombs: Daily, specific hours (approx 9:00-17:30). Check site.',
    freeEntryInfo: 'Main cathedral area free. Towers/Catacombs/Treasury require paid tickets.',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Graben, Vienna',
    description: 'An elegant and bustling street in the heart of Vienna, known for its high-end shops, cafes, and historical monuments, including the Pestsäule (Plague Column). It was once part of the Roman road network. A prime spot for people-watching and soaking in the Viennese atmosphere. It is said that it was once a moat surrounding the Roman city.',
    coordinates: { lat: 48.208611, lng: 16.369167 },
    category: 'shopping'
  },
  {
    id: '5',
    name: 'Albertina',
    description: 'A renowned museum housed in a former Habsburg residential palace, famous for its extensive collection of graphic art, including works by Dürer, Monet, and Picasso. It also hosts temporary exhibitions. Enjoy views of the State Opera from its terrace. It is said that it was named after Duke Albert Casimir of Saxe-Teschen.',
    coordinates: { lat: 48.205, lng: 16.368 },
    openingHours: 'Daily 10:00-18:00 (Wed & Fri until 21:00).',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Rathausplatz, Vienna',
    description: 'A large square in front of the Vienna City Hall (Rathaus), a Neo-Gothic masterpiece. The square hosts numerous events throughout the year, including the Christmas Market and open-air film screenings. A popular gathering place for locals and tourists. It is said that the square was once used for military parades.',
    coordinates: { lat: 48.2106, lng: 16.3587 },
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Wurstelprater',
    description: 'A historic amusement park located in the Prater park, featuring the iconic Wiener Riesenrad (Giant Ferris Wheel), offering spectacular views of Vienna. Enjoy a mix of traditional and modern rides, food stalls, and entertainment. A fun day out for all ages. It is said that the Prater was once imperial hunting grounds.',
    coordinates: { lat: 48.216111, lng: 16.395556 },
    openingHours: 'Park open 24/7. Amusement park season Mar 15-Oct 31 (attractions ~10:00-late). Some attractions open year-round.',
    freeEntryInfo: 'Park entry free. Rides/attractions require payment.',
    category: 'attraction'
  },
  {
    id: '8',
    name: 'Belvedere, Vienna',
    description: 'A stunning Baroque palace complex, consisting of the Upper and Lower Belvedere, housing the Austrian Gallery. The Upper Belvedere is famous for Gustav Klimt\'s masterpiece "The Kiss." The gardens connecting the two palaces are also worth exploring. A highlight of Viennese art and architecture. It is said that it was built by Prince Eugene of Savoy.',
    coordinates: { lat: 48.194167, lng: 16.380278 },
    openingHours: 'Upper Belvedere: Daily 9:00-18:00. Lower Belvedere: Daily 10:00-18:00. Gardens: Daily ~6:30-21:00.',
    freeEntryInfo: 'Gardens free. Palaces require paid tickets.',
    category: 'museum'
  },
  {
    id: '9',
    name: 'Spanish Riding School',
    description: 'A traditional riding school for Lipizzaner stallions, located within the Hofburg palace. Watch the famous white horses perform their classical dressage movements. A unique cultural experience showcasing equestrian artistry. It is said that the Lipizzaners are descended from Roman horses.',
    coordinates: { lat: 48.2075, lng: 16.366111 },
    openingHours: 'Performances/Morning Exercise/Tours have specific schedules (check srs.at). Morning Exercise Tue-Fri 10-12.',
    category: 'cultural'
  },
  {
    id: '10',
    name: 'Naschmarkt',
    description: 'Vienna\'s largest and most famous open-air market, offering a variety of food stalls, restaurants, and shops selling everything from local delicacies to international products. A vibrant and bustling place to sample Viennese life and cuisine. It is said that it started as a farmers market.',
    coordinates: { lat: 48.198889, lng: 16.363611 },
    openingHours: 'Market Stalls: Mon-Sat ~6:00-19:30. Restaurants open later. Closed Sun.',
    category: 'local_market'
  },
  {
    id: '11',
    name: 'Volksgarten, Vienna',
    description: 'A beautiful public park located within the Hofburg area, known for its rose gardens, neoclassical Temple of Theseus, and memorial to Empress Elisabeth. A peaceful oasis in the city center. It is said that it was once used for military exercises.',
    coordinates: { lat: 48.208056, lng: 16.361111 },
    openingHours: 'Daily 6:00 - 22:00.',
    category: 'nature'
  },
  {
    id: '12',
    name: 'MuseumsQuartier',
    description: 'A vibrant cultural district, home to a collection of museums, including the Leopold Museum and the MUMOK (Museum of Modern Art Ludwig Foundation Vienna), as well as cafes, bars, and shops. A hub for art lovers and a popular meeting place. It is said that it was once the imperial stables.',
    coordinates: { lat: 48.202, lng: 16.36 },
    openingHours: 'Courtyards accessible 24/7. Museums/Shops have own hours (generally Tue-Sun 10-18/19).',
    freeEntryInfo: 'Courtyards free. Museums require paid tickets.',
    category: 'cultural'
  },
  {
    id: '13',
    name: 'Donauturm',
    description: 'The tallest structure in Austria, a telecommunications tower offering panoramic views of Vienna and the Danube River from its observation deck and revolving restaurants. A modern landmark providing a different perspective of the city. It is said that it was built in just 18 months.',
    coordinates: { lat: 48.24, lng: 16.410833 },
    openingHours: 'Daily 10:00 - 22:30/24:00 (last lift ~45min before close). Check site.',
    category: 'landmark'
  }
];
