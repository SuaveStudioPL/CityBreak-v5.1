import { Attraction } from '../../../types/attractions';


export const genevaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Jet d\'Eau',
    description: 'Geneva\'s iconic water fountain, shooting water 140 meters into the air from Lake Geneva. A symbol of the city and a must-see landmark. It was originally built in 1886 at a different location and for a different purpose. Accounts indicate it became a tourist attraction in the 1950s.',
    coordinates: { lat: 46.2074, lng: 6.1558 },  // Updated from GeoHack
    openingHours: 'Operates daily, year-round during daylight hours (e.g., 10:00-16:00 winter, 9:00-23:15 summer). Subject to weather (wind/frost). Check official site.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Lake Geneva',
    description: 'A vast and beautiful lake shared between Switzerland and France, offering stunning views of the Alps. Enjoy boat trips, swimming, or walks along the promenade. It is one of the largest lakes in Western Europe. History suggests it has been an important trade route.',
    coordinates: { lat: 46.4550, lng: 6.5175 },  // Correct (general lake coordinates)
    category: 'nature'
  },
  {
    id: '3',
    name: 'United Nations Office at Geneva',
    description: 'One of the four major office sites of the United Nations, located in the Palais des Nations. Take a guided tour to learn about its important work. It was built between 1929 and 1938 and was the headquarters of the League of Nations. Information indicates it hosts thousands of meetings annually.',
    coordinates: { lat: 46.2264, lng: 6.1404 },  // Updated from GeoHack
    openingHours: 'Guided tours Mon-Fri (approx. 10:00-12:00 & 14:00-16:00). Booking required. Check official UN Geneva site.',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Old Town Geneva',
    description: 'A charming district with cobbled streets, historic buildings, and the St. Pierre Cathedral. Explore its small squares and enjoy the atmosphere. It offers a glimpse into Geneva\'s past. History suggests it has been continuously inhabited since Roman times.',
    coordinates: { lat: 46.2019, lng: 6.1486 },  // Updated from GeoHack (central point)
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Geneve_2005_001_Ork.ch.jpg/330px-Geneve_2005_001_Ork.ch.jpg']
  },
  {
    id: '5',
    name: 'St. Pierre Cathedral',
    description: 'A significant church in Geneva, known for its role in the Protestant Reformation. John Calvin preached here. Climb the tower for panoramic views of the city. Its architecture reflects various styles due to its long construction period. Accounts indicate it was completed in the 13th century.',
    coordinates: { lat: 46.2011, lng: 6.1489 },  // Updated from GeoHack
    openingHours: 'Cathedral/Towers/Site: Seasonal hours. Generally Mon-Sat 10:00-17:30, Sun 12:00-17:30 (longer in summer). Check official site.',
    freeEntryInfo: 'Cathedral entry free. Towers & Archaeological Site require paid ticket.',
    category: 'landmark'
  },
  {
    id: '6',
    name: 'L\'horloge fleurie',
    description: 'A large working clock made of flowers, located on the edge of Lake Geneva. A symbol of Geneva\'s watchmaking industry and its connection to nature. It changes its design with the seasons. Information suggests it was created in 1955.',
    coordinates: { lat: 46.2075, lng: 6.1497 },  // Updated from GeoHack
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Palais des Nations',
    description: 'The home of the United Nations Office at Geneva. This grand building hosts important international meetings and conferences. Guided tours are available. It was one of the largest buildings in Europe when it was built. History indicates it has played a crucial role in international diplomacy.',
    coordinates: { lat: 46.2264, lng: 6.1404 },  // Same as UN Office (correct)
    openingHours: 'Guided tours Mon-Fri (approx. 10:00-12:00 & 14:00-16:00). Booking required. Check official UN Geneva site.',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Reformation Wall',
    description: 'A monument in the Old Town, commemorating the major figures of the Protestant Reformation, including John Calvin, Theodore Beza, John Knox, and Guillaume Farel. It is located in the Parc des Bastions. Accounts suggest it was inaugurated in 1909.',
    coordinates: { lat: 46.1994, lng: 6.1461 },  // Updated from GeoHack
    category: 'landmark'
  },
  {
    id: '9',
    name: 'International Red Cross and Red Crescent Museum',
    description: 'A museum dedicated to the history and humanitarian work of the Red Cross and Red Crescent. It offers interactive exhibits and explores important global issues. Geneva is the birthplace of the Red Cross. Information indicates it was founded by Henry Dunant.',
    coordinates: { lat: 46.2278, lng: 6.1364 },  // Updated from GeoHack
    openingHours: 'Tue-Sun: 10:00-18:00 (Apr-Oct) / 10:00-17:00 (Nov-Mar). Closed Mon. Late opening Thu until 20:00.',
    freeEntryInfo: 'Free entry first Saturday of the month.',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Musée d\'Art et d\'Histoire',
    description: 'Geneva\'s largest art museum, with collections spanning from archaeology to modern art. It includes works by Swiss and international artists. The museum is housed in a grand building. History suggests its collections are diverse and significant.',
    coordinates: { lat: 46.1995, lng: 6.1494 },  // Updated from GeoHack
    openingHours: 'Tue-Sun: 11:00 - 18:00. Closed Mon.',
    freeEntryInfo: 'Permanent collection free. Temporary exhibitions require paid ticket.',
    category: 'museum'
  },
  {
    id: '11',
    name: 'Conservatory and Botanical Garden of the City of Geneva',
    description: 'A beautiful botanical garden with a wide variety of plants from around the world, as well as an animal park. A peaceful escape from the city bustle. It is located near the Palais des Nations. Accounts indicate it was established in 1904.',
    coordinates: { lat: 46.2256, lng: 6.1461 },  // Updated from GeoHack
    openingHours: 'Gardens: Daily 8:00-19:30 (summer) / 8:00-17:00 (winter). Greenhouses: Daily ~9:30/10:00-17:00.',
    category: 'nature'
  },
  {
    id: '12',
    name: 'Bains des Pâquis',
    description: 'A popular public bathing area on Lake Geneva, offering swimming, saunas, and a lively atmosphere. A great place to relax and enjoy the lake. It is a social hub for locals. Information suggests it has a long history as a bathing spot.',
    coordinates: { lat: 46.2069, lng: 6.1525 },  // Updated from GeoHack
    openingHours: 'Open daily, long hours (e.g., 7:00-22:30). Check official site, weather dependent.',
    freeEntryInfo: 'Small entry fee required during official summer bathing hours (approx. 10:00-21:00).',
    category: 'attraction',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Gen%C3%A8ve_-_panoramio_%28173%29.jpg/250px-Gen%C3%A8ve_-_panoramio_%28173%29.jpg']
  }
];
