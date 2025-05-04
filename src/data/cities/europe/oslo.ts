import { Attraction } from '../../../types/attractions';


export const osloAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Viking Ship Museum (Oslo)',
    description: 'Displays remarkably preserved 9th-century Viking ships. (NOTE: CLOSED for renovation, expected to reopen as Museum of the Viking Age in 2026/2027). Explore burial artifacts, intricate wood carvings, and learn about Norse seafaring culture and Viking Age society.',
    coordinates: { lat: 59.904756, lng: 10.684461},
    category: 'museum'
  },
  {
    id: '2',
    name: 'Frogner Park',
    description: 'The world’s largest sculpture park created by a single artist, Gustav Vigeland. It features over 200 bronze and granite sculptures depicting the human form in various stages of life. The iconic Monolith, a towering pillar of intertwined figures, is a highlight. A unique and thought-provoking open-air gallery. It is said that Vigeland modeled some figures after his own family.',
    coordinates: { lat: 59.926667, lng: 10.701389 },
    openingHours: 'Open 24/7.',
    category: 'nature'
  },
  {
    id: '3',
    name: 'Oslo Opera House',
    description: 'A striking modernist building of marble and glass that appears to rise from the Oslofjord. Visitors can walk on its sloping rooftop for panoramic views of the city and the fjord. Attend a ballet or opera performance for a cultural experience. Symbol of contemporary Oslo and Norwegian design. It is said that its design was inspired by a glacier.',
    coordinates: { lat: 59.906944, lng: 10.753611 },
    openingHours: 'Foyer/Rooftop generally open daily, long hours. Tours/Performances: Check official schedule.',
    freeEntryInfo: 'Foyer/Rooftop access free. Tours/Performances require paid ticket.',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Full_Opera_by_night.jpg/250px-Full_Opera_by_night.jpg']
  },
  {
    id: '4',
    name: 'Holmenkollbakken',
    description: 'A historic ski jump, a national symbol of Norway and winter sports. It offers a museum on skiing history, a ski simulator, and an observation deck with stunning views of Oslo. For thrill-seekers, there\'s a zip line. It has been rebuilt several times, hosting Winter Olympics and World Championships. It is said that trolls inhabit the surrounding forest.',
    coordinates: { lat: 59.963889, lng: 10.667778 },
    openingHours: 'Museum/Tower: Daily, seasonal hours (Summer 9-20, Winter 10-16). Check official site.',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Fram Museum',
    description: 'Dedicated to Norwegian polar exploration, it houses the Fram, the strongest wooden ship ever built, used by Fridtjof Nansen and Roald Amundsen on their famous Arctic and Antarctic expeditions. Step aboard the ship and learn about the hardships and triumphs of these voyages. It is said that the ship is haunted by the spirits of the explorers.',
    coordinates: { lat: 59.903333, lng: 10.699444 },
    openingHours: 'Daily, seasonal hours (Summer 9:30-18:00, Winter 10:00-17:00).',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Akershus Fortress',
    description: 'A medieval castle and fortress strategically located on the Akersneset peninsula, guarding Oslo\'s harbor. Explore its dungeons, museums (including the Norwegian Resistance Museum), and the royal burial chambers. It offers panoramic views of the Oslofjord and the city. It is said that it is haunted by the ghost of a dog buried alive to ward off evil spirits.',
    coordinates: { lat: 59.906667, lng: 10.736111 },
    openingHours: 'Grounds: Daily 6:00-21:00. Museums/Castle: Daily ~10:00-16:00/17:00 (Castle seasonal/weekends only in winter). Check sites.',
    freeEntryInfo: 'Grounds free. Museums/Castle require paid ticket.',
    category: 'historic'
  },
  {
    id: '7',
    name: 'National Museum of Norway',
    description: 'Norway\'s largest museum, housing collections of art, architecture, and design, including Edvard Munch’s "The Scream." It opened in 2022, consolidating collections from several older museums, including the National Gallery. Explore Norwegian art from antiquity to the present. It is said that a secret tunnel connects it to the Royal Palace.',
    coordinates: { lat: 59.917959, lng: 10.740357 },
    openingHours: 'Tue/Wed/Fri/Sat/Sun: 10:00-17:00, Thu: 10:00-20:00. Closed Mon.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Bygdøy',
    description: 'A peninsula easily accessible by ferry from Oslo, home to several museums, including the Viking Ship Museum, Fram Museum, Kon-Tiki Museum, and the Norwegian Folk Museum. Relax on its beaches or stroll through the royal estates. A cultural hub offering a diverse range of attractions. It is said that it was once a sacred island for Viking chieftains.',
    coordinates: { lat: 59.906944, lng: 10.680278 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bygd%C3%B8y_Oslo.jpg/500px-Bygd%C3%B8y_Oslo.jpg']
  },
  {
    id: '9',
    name: 'Astrup Fearnley Museum of Modern Art',
    description: 'A waterfront museum showcasing contemporary art, designed by renowned architect Renzo Piano. Its collection includes works by international artists like Damien Hirst and Jeff Koons, as well as Norwegian contemporary art. The museum building itself is an architectural gem. It is said that its sail-like roof symbolizes Norway\'s maritime heritage.',
    coordinates: { lat: 59.9075, lng: 10.744167 },
    openingHours: 'Tue/Wed/Fri: 11:00/12:00-17:00, Thu: 11:00/12:00-19:00, Sat/Sun: 11:00/12:00-17:00. Closed Mon.',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Oslo City Hall',
    description: 'A distinctive brutalist building where the Nobel Peace Prize is awarded annually. Admire its grand murals depicting Norwegian history and climb its tower for panoramic views of Oslo. It was completed in 1950. It is said that it was built with bricks of different colors to represent Norway\'s diverse regions.',
    coordinates: { lat: 59.911764, lng: 10.733583 },
    openingHours: 'Daily 9:00 - 16:00 (longer in summer). Free guided tours in summer.',
    freeEntryInfo: 'Free entry.',
    category: 'landmark'
  },
  {
    id: '11',
    name: 'Ekebergparken Sculpture Park',
    description: 'A sculpture park that combines art, nature, and history, located on the hills above Oslo. It features sculptures by renowned artists like Salvador Dalí and Auguste Rodin, as well as traces of ancient rock carvings. A peaceful escape offering art and scenic views. It is said that it was once a sacred grove for Norse gods.',
    coordinates: { lat: 59.898333, lng: 10.763056 },
    openingHours: 'Park open 24/7. Indoor museum/shop daily ~11:00-16:00.',
    freeEntryInfo: 'Free entry to park and indoor museum.',
    category: 'nature'
  },
  {
    id: '12',
    name: 'Norwegian Museum of Cultural History',
    description: 'An open-air museum located on Bygdøy, showcasing 160 historic buildings from different regions of Norway, including a stave church from Gol. Experience traditional folk dancing, crafts demonstrations, and learn about Norway\'s cultural heritage. It offers a glimpse into Norway in miniature. It is said that some of the buildings are haunted by their former inhabitants.',
    coordinates: { lat: 59.906911, lng: 10.685958 },
    openingHours: 'Daily, seasonal hours (Summer 10:00-17:00, Winter Mon-Fri 11-15/16, Sat-Sun 11-16). Check official site.',
    category: 'museum'
  }
];
