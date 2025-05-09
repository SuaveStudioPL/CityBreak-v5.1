import { Attraction } from '../../../types/attractions';

export const telavivAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Old Jaffa',
    description: 'An ancient port city with a history spanning over 4,000 years, now part of Tel Aviv. Its narrow alleyways, stone buildings, and historic port create a charming atmosphere. Highlights include Jaffa Port, the Flea Market (Shuk Hapishpishim), artists\' quarters, and archaeological sites. According to legend, it was founded by Japheth, Noah\'s son, and has been ruled by Egyptians, Phoenicians, Romans, and Ottomans. Today, it\'s a vibrant area with galleries, restaurants, and multicultural heritage.',
    coordinates: { lat: 32.0523, lng: 34.7506 },
    category: 'historic',
    imageUrls: ['']
  },
  {
    id: '2',
    name: 'Tel Aviv Museum of Art',
    description: 'Israel\'s leading museum of modern and contemporary art, established in 1932. The museum complex includes the original building and the striking Herta and Paul Amir Building, known for its unique geometric architecture. The collection features works by Israeli artists alongside international masterpieces by Picasso, Kandinsky, and Klimt. With over 1 million visitors annually, it hosts exhibitions, educational programs, and cultural events, serving as a cornerstone of Israel\'s art scene.',
    coordinates: { lat: 32.07750, lng: 34.78667 },
    openingHours: 'Mon, Wed, Sat 10:00-18:00; Tue, Thu 10:00-21:00; Fri 10:00-14:00; closed Sundays.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '3',
    name: 'Tel Aviv Promenade',
    description: 'A picturesque waterfront promenade stretching along the Mediterranean coastline for approximately 14 kilometers. This bustling boardwalk connects Tel Aviv\'s beaches from the Old Jaffa Port to the northern neighborhoods. Lined with palm trees, cafes, restaurants, and outdoor exercise equipment, it\'s perfect for walking, jogging, cycling, or people-watching. The Tayelet offers stunning sea views and serves as a social hub where locals and tourists gather to enjoy Tel Aviv\'s vibrant outdoor lifestyle.',
    coordinates: { lat: 32.076847, lng: 34.765956 },
    category: 'landmark',
    imageUrls: ['']
  },
  {
    id: '4',
    name: 'Carmel Market',
    description: 'Tel Aviv\'s largest and most vibrant open-air marketplace, established in the 1920s. The narrow, bustling lanes are filled with colorful stalls selling fresh produce, spices, baked goods, clothing, and souvenirs. Vendors call out their offerings while locals and tourists navigate the lively atmosphere. The market reflects Israel\'s cultural diversity with foods from various Jewish traditions and Middle Eastern cuisines. Adjacent streets feature cafes, boutiques, and restaurants, making it a true sensory experience.',
    coordinates: { lat: 32.0684, lng: 34.7684 },
    openingHours: 'Sun-Fri 7:00-19:00, closed Saturdays.',
    category: 'market',
    imageUrls: ['']
  },
  {
    id: '5',
    name: 'Dizengoff Square',
    description: 'A central public plaza and iconic Tel Aviv landmark, recently renovated to restore its original street-level design. The square features the Fire and Water Fountain, a kinetic sculpture by Israeli artist Yaacov Agam that combines movement, water, and fire with music. Surrounded by Bauhaus buildings, cafes, and shops, it serves as a gathering place and cultural hub. Named after Tel Aviv\'s first mayor, Meir Dizengoff, it connects to Dizengoff Street, one of the city\'s main commercial thoroughfares.',
    coordinates: { lat: 32.078056, lng: 34.774167 },
    category: 'landmark',
    imageUrls: ['']
  },
  {
    id: '6',
    name: 'Eretz Israel Museum',
    description: 'A multidisciplinary museum complex spread across a campus with archaeological sites, including Tel Qasile from the 12th century BCE. The museum\'s pavilions showcase various aspects of Israeli culture and history through exhibits on glass, ceramics, coins, copper, and traditional crafts. Highlights include the Planetarium, the Man and His Work ethnographic displays, and temporary exhibitions of contemporary art. The museum offers insight into the land\'s material culture from prehistoric times to the present.',
    coordinates: { lat: 32.1147, lng: 34.8059 },
    openingHours: 'Sun, Mon, Wed, Thu 10:00-16:00; Tue 10:00-20:00; Fri 10:00-14:00; Sat 10:00-16:00.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '7',
    name: 'Rothschild Boulevard',
    description: 'A historic tree-lined avenue and one of Tel Aviv\'s most iconic streets, named after Baron Edmond de Rothschild. The boulevard features a central pedestrian strip flanked by Bauhaus buildings that form part of the UNESCO-designated "White City." Historical landmarks include Independence Hall, where Israel\'s Declaration of Independence was signed in 1948. Today, it\'s a vibrant urban space with upscale cafes, restaurants, and cultural institutions, embodying Tel Aviv\'s blend of history and contemporary lifestyle.',
    coordinates: { lat: 32.0652, lng: 34.7765 },
    category: 'historic',
    imageUrls: ['']
  },
  {
    id: '8',
    name: 'Independence Hall (Israel)',
    description: 'The historic site where David Ben-Gurion proclaimed Israel\'s independence on May 14, 1948. Located in the former home of Tel Aviv\'s first mayor, Meir Dizengoff, the building served as the Tel Aviv Museum of Art until 1971. Preserved as it appeared during the declaration ceremony, it features the original hall with flags, podium, and photographs documenting this pivotal moment in Israeli history. The museum offers guided tours explaining the events leading to statehood.',
    coordinates: { lat: 32.062778, lng: 34.770833 },
    openingHours: 'Sun-Thu 9:00-17:00, Fri 9:00-13:00, closed Saturdays.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '9',
    name: 'Anu – Museum of the Jewish People',
    description: 'A comprehensive museum dedicated to Jewish heritage and identity worldwide, located on the Tel Aviv University campus. Through innovative exhibitions, the museum tells the story of Jewish diversity, resilience, and achievements across time and geography. Interactive displays cover Jewish communities, family life, culture, and historical events. The museum houses extensive genealogical databases and archives. Recently renovated and renamed "ANU – Museum of the Jewish People," it offers a contemporary perspective on Jewish peoplehood.',
    coordinates: { lat: 32.1133, lng: 34.8042 },
    openingHours: 'Sun, Mon, Tue, Thu 10:00-17:00; Wed 10:00-22:00; Fri 9:00-14:00; Sat 10:00-15:00.',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D7%9C%D7%95%D7%92%D7%95_%D7%A2%D7%9C_%D7%94%D7%91%D7%A0%D7%99%D7%99%D7%9F.jpg/330px-%D7%9C%D7%95%D7%92%D7%95_%D7%A2%D7%9C_%D7%94%D7%91%D7%A0%D7%99%D7%99%D7%9F.jpg']
  },
  {
    id: '10',
    name: 'White City',
    description: 'A UNESCO World Heritage Site comprising the world\'s largest collection of buildings in the International Style, with over 4,000 Bauhaus and eclectic style buildings constructed in the 1930s-1950s. These structures, designed by German Jewish architects who immigrated after the rise of Nazism, feature clean lines, minimal ornamentation, and adaptations to the Mediterranean climate. The area represents Tel Aviv\'s modernist planning vision and earned the city the nickname "The White City" for the buildings\' light-colored facades.',
    coordinates: { lat: 32.066667, lng: 34.783333 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/%D7%90%D7%A0%D7%92%D7%9C.jpg/250px-%D7%90%D7%A0%D7%92%D7%9C.jpg']
  }
]
