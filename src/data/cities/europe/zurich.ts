import { Attraction } from '../../../types/attractions';


export const zurichAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Lake Zurich',
    description: 'A beautiful lake offering stunning views of the city and the Alps. Enjoy boat trips, swimming, and walks along the promenades. It is a popular recreational area for locals and tourists. History suggests early settlements were built around the lake.',
    coordinates: { lat: 47.3294, lng: 8.5700 }, // Zgodne z GeoHack i OSM
    category: 'nature'
  },
  {
    id: '2',
    name: 'Bahnhofstrasse',
    description: 'Zurich\'s main downtown street and one of the world\'s most expensive shopping avenues. Lined with luxury boutiques, department stores, and banks. A symbol of Zurich\'s wealth and elegance. Accounts indicate it was developed after the city walls were removed.',
    coordinates: { lat: 47.3683, lng: 8.5400 }, // Zgodne z GeoHack i OSM
    category: 'shopping'
  },
  {
    id: '3',
    name: 'Grossmünster',
    description: 'An iconic Romanesque-style Protestant church, one of the four major churches of Zurich. It is said that it was founded by Charlemagne. Climb its towers for panoramic views of the city. Its twin towers are a prominent feature of Zurich\'s skyline. Information suggests construction began in the 12th century.',
    coordinates: { lat: 47.3700, lng: 8.544167 }, // Zgodne z GeoHack i OSM
    openingHours: 'Church: Daily, seasonal hours (Summer 10-18, Winter 10-17). Tower: Mon-Sat 10-17, Sun 12:30-17:30 (approx).',
    freeEntryInfo: 'Church entry free. Tower climb requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Fraumünster',
    description: 'Another of Zurich\'s major churches, known for its stunning stained glass windows designed by Marc Chagall. It was once an abbey for aristocratic women. Its slender blue spire is a distinctive landmark. History indicates it was founded in 853 by King Louis the German.',
    coordinates: { lat: 47.369722, lng: 8.541111 }, // Zgodne z GeoHack (https://geohack.toolforge.org/geohack.php?language=pl&pagename=Fraum%C3%BCnster&params=47.369722222222_N_8.5411111111111_E_type:building)
    openingHours: 'Daily, seasonal hours (Summer 10:00-18:00, Winter 10:00-17:00). Sun open after service (~12:00/13:00).',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Lindenhof',
    description: 'A historic public square located on a hill overlooking the Limmat River and the Old Town. It was the site of a Roman fort and later a Carolingian palace. Offers great views of the city. Accounts suggest it is one of the oldest parts of Zurich.',
    coordinates: { lat: 47.3678, lng: 8.5409 }, // Zgodne z GeoHack i OSM
    openingHours: 'Open 24/7.',
    category: 'historic'
  },
  {
    id: '6',
    name: 'Old Town (Niederdorf)',
    description: 'A charming district with narrow cobblestone streets, historic buildings, boutiques, cafes, and bars. A lively area, especially in the evenings. Explore its hidden corners and enjoy the atmosphere. Information indicates it was once the city\'s main market area.',
    coordinates: { lat: 47.3683, lng: 8.5450 }, // Zgodne z GeoHack i OSM
    category: 'historic'
  },
  {
    id: '7',
    name: 'Uetliberg',
    description: 'Zurich\'s local mountain, offering hiking trails, a hotel, and panoramic views of the city, Lake Zurich, and the Alps. A popular destination for outdoor activities. A short train ride from the city center. History suggests it was used for signaling fires.',
    coordinates: { lat: 47.3522, lng: 8.4909 }, // Zgodne z GeoHack i OSM
    openingHours: 'Mountain accessible 24/7. Lookout Tower: Daily, seasonal hours (Summer ~8-22, Winter ~8/10-18/19).',
    freeEntryInfo: 'Mountain free. Lookout Tower requires paid ticket.',
    category: 'nature'
  },
  {
    id: '8',
    name: 'Swiss National Museum',
    description: 'A museum showcasing the history and culture of Switzerland from its beginnings to the present day. Housed in a castle-like building near the main train station. It offers a comprehensive overview of the country\'s heritage. Accounts indicate it was opened in 1898.',
    coordinates: { lat: 47.3762, lng: 8.5399 }, // Zgodne z GeoHack i OSM
    openingHours: 'Tue/Wed/Fri/Sat/Sun: 10:00-17:00, Thu: 10:00-19:00. Closed Mon.',
    freeEntryInfo: 'Requires paid ticket (under 16 free).',
    category: 'museum'
  },
  {
    id: '9',
    name: 'Zurich Zoo',
    description: 'A large zoo home to a wide variety of animals from around the world, including a Masoala Rainforest exhibit. It is involved in conservation efforts. A popular attraction for families. Information suggests it is one of the best zoos in Europe.',
    coordinates: { lat: 47.3828, lng: 8.5694 }, // Zgodne z GeoHack i OSM
    openingHours: 'Daily from 9:00. Closing varies seasonally (Summer 18:00, Winter 17:00).',
    category: 'attraction'
  },
  {
    id: '10',
    name: 'Kunsthaus Zurich',
    description: 'One of the most important art museums in Switzerland, with a significant collection of Swiss and international art, including works by Monet, Munch, and Picasso. It also houses the world\'s largest collection of Alberto Giacometti\'s works. History indicates it was founded in 1787.',
    coordinates: { lat: 47.3683, lng: 8.5501 }, // Zgodne z GeoHack i OSM
    openingHours: 'Tue/Fri/Sat/Sun: 10:00-18:00, Wed/Thu: 10:00-20:00. Closed Mon.',
    freeEntryInfo: 'Collection free Wednesdays. Exhibitions require paid ticket.',
    category: 'museum'
  },
  {
    id: '11',
    name: 'FIFA World Football Museum',
    description: 'A museum dedicated to the history of football, with interactive exhibits and a collection of memorabilia. A must-visit for football fans. Zurich is the home of FIFA\'s headquarters. Accounts suggest it offers a global perspective on the sport.',
    coordinates: { lat: 47.3662, lng: 8.5332 }, // Zgodne z GeoHack i OSM
    openingHours: 'Tue-Sun: 10:00 - 18:00. Closed Mon.',
    category: 'museum'
  },
  {
    id: '12',
    name: 'Rietberg Museum',
    description: 'A museum dedicated to non-European art, with collections from Asia, Africa, Oceania, and the Americas. Housed in several historic villas in a park setting. It offers a fascinating look at global art traditions. Information indicates it is the only art museum in Zurich focusing on non-European cultures.',
    coordinates: { lat: 47.3622, lng: 8.5303 }, // Zgodne z GeoHack i OSM
    openingHours: 'Tue/Thu-Sun: 10:00-17:00, Wed: 10:00-20:00. Closed Mon.',
    freeEntryInfo: 'Requires paid ticket.',
    category: 'museum'
  }
];
