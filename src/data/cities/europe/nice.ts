import { Attraction } from '../../../types/attractions';


export const niceAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Promenade des Anglais',
    description: 'A famous seaside promenade stretching along the Mediterranean coast, offering stunning views of the Baie des Anges. Originally a narrow path, it was expanded in the 19th century and named in honor of the English visitors who frequented Nice. It\'s perfect for strolling, cycling, and enjoying the sea breeze. It is said that it was built thanks to a donation from a wealthy English clergyman.',
    coordinates: { lat: 43.6949, lng: 7.2652 },
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Old Town, Nice',
    description: 'The historic district of Nice, known as Vieux Nice, a maze of narrow, winding streets filled with colorful buildings, lively markets, and traditional restaurants. Explore its charming squares, such as Place Rossetti, and discover local crafts and Niçoise cuisine. It is said that it retains the authentic spirit of Nice before its tourist boom.',
    coordinates: { lat: 43.6967, lng: 7.2754 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Vue_du_Vieux-Nice.jpg/330px-Vue_du_Vieux-Nice.jpg']
  },
  {
    id: '3',
    name: 'Castle of Nice',
    description: 'A park located on a hill overlooking Nice and the bay, offering panoramic views of the city, the coastline, and the Alps. Once the site of a medieval castle, only ruins remain, but the park features waterfalls, gardens, and walking paths. It is said that it was the original settlement of Nice by the Greeks.',
    coordinates: { lat: 43.696, lng: 7.2797 },
    openingHours: 'Park: Daily, seasonal hours (Summer 8:30-20:00, Winter 8:30-18:00). Lift operates during park hours.',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/9/97/Dscn0062-nice-port-castle-hill_crop_1200x600.jpg']
  },
  {
    id: '4',
    name: 'Nice Cathedral',
    description: 'A Baroque cathedral, also known as Cathédrale Sainte-Réparate, located in the heart of the Old Town. Its ornate interior features elaborate decorations, chapels, and a stunning altarpiece. It\'s dedicated to Saint Reparata, the patron saint of Nice. It is said that its construction began in the late 17th century.',
    coordinates: { lat: 43.697222, lng: 7.275833 },
    openingHours: 'Daily 9:00-12:00 & 14:00-18:00 (approx). Restricted during services.',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Cours Saleya',
    description: 'A famous market square in the Old Town, known for its vibrant flower market in the mornings, followed by produce and antiques markets on different days. Surrounded by restaurants and cafes, it\'s a lively place to experience the local culture and flavors. It is said that it was once a swamp before being transformed into a market.',
    coordinates: { lat: 43.695419, lng: 7.276374 },
    openingHours: 'Flower Market: Tue-Sat ~9:00-17:30, Sun ~9:00-13:30. Food Market: Tue-Sun ~6:00-13:30. Antiques: Mon ~7:00-18:00. Evening Craft Market: Summer evenings.',
    category: 'local_market',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Saleya_nice.jpg/250px-Saleya_nice.jpg']
  },
  {
    id: '6',
    name: 'Musée d\'art moderne et d\'art contemporain',
    description: 'A contemporary art museum, known as MAMAC, showcasing works by artists who were influenced by or worked in Nice, including Yves Klein and Niki de Saint Phalle. Its rooftop terrace offers panoramic views of the city. (NOTE: Check official site for potential temporary closures). It is said that the museum\'s collection reflects the artistic vibrancy of the French Riviera.',
    coordinates: { lat: 43.7014, lng: 7.2785 },
    openingHours: 'Tue-Sun: 10:00 - 18:00. Closed Mon & holidays.',
    category: 'museum'
  },
  {
    id: '7',
    name: 'Place Masséna',
    description: 'The main square of Nice, a large and elegant space with distinctive red buildings, the Fontaine du Soleil with a statue of Apollo, and black and white checkered paving. It\'s a central hub for events and festivals. It is said that it was named after André Masséna, a Napoleonic marshal who was born in Nice.',
    coordinates: { lat: 43.6973, lng: 7.2701 },
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Musée Marc Chagall',
    description: 'A museum dedicated to the works of the Russian-French artist Marc Chagall, housing one of the largest collections of his biblical-themed paintings. The museum was established by Chagall himself. Its tranquil gardens add to the experience. It is said that Chagall personally oversaw the museum\'s design and layout.',
    coordinates: { lat: 43.709167, lng: 7.269536 },
    openingHours: 'Wed-Mon, closes midday. Summer (May-Oct): 10-13 & 14-18. Winter (Nov-Apr): 10-13 & 14-17. Closed Tue & holidays.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'museum'
  },
  {
    id: '9',
    name: 'Parc Phœnix',
    description: 'A botanical garden and zoo located near the airport, featuring a large greenhouse with tropical plants, as well as various animal species. It offers a green oasis away from the city center. It is said that it\'s named after the mythical bird that rises from ashes, symbolizing renewal.',
    coordinates: { lat: 43.666944, lng: 7.202778 },
    openingHours: 'Daily (except Dec 25/Jan 1). Summer (Apr-Sep): 9:30-19:30. Winter (Oct-Mar): 9:30-18:00. Last entry 1h before close.',
    category: 'park'
  },
  {
    id: '10',
    name: 'Port of Nice',
    description: 'A picturesque harbor, also known as Port Lympia, filled with colorful boats, luxury yachts, and waterfront restaurants. It\'s a charming area to stroll around and enjoy the maritime atmosphere. It is said that it was built in the 18th century and named after a nearby spring.',
    coordinates: { lat: 43.6965, lng: 7.2848 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Nice_port.jpg/960px-Nice_port.jpg?20101006194835']
  }
];
