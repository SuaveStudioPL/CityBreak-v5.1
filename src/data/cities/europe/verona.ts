import { Attraction } from '../../../types/attractions';


export const veronaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Verona Arena',
    description: 'A magnificent Roman amphitheater, one of the best-preserved in Italy. It still hosts large-scale opera performances and concerts. Built in the 1st century AD, it predates the Colosseum in Rome. History suggests it could hold up to 30,000 spectators.',
    coordinates: { lat: 45.43918, lng: 10.99437 },
    openingHours: 'Tue-Sun: 8:30-19:30, Mon: 13:30-19:30 (last entry 18:30). Shorter hours on performance days.',
    freeEntryInfo: 'Free 1st Sunday of month (Oct-May). Requires paid ticket otherwise.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Juliet\'s House',
    description: 'A 14th-century house with a balcony, said to be the home of Shakespeare\'s Juliet. A popular tourist spot where visitors leave love notes on the walls. While the connection to Juliet is fictional, the romantic atmosphere is undeniable. Accounts suggest the house belonged to the Cappello family, possibly the inspiration for the Capulets.',
    coordinates: { lat: 45.441898, lng: 10.998700 },
    openingHours: 'Tue-Sun: 9:00-19:00 (last entry 18:30). Closed Mon. Booking required.',
    freeEntryInfo: 'Courtyard free. House/Museum requires paid ticket.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Juliets_balcony%2C_Verona_VR%2C_Veneto%2C_Italia_-_panoramio.jpg/960px-Juliets_balcony%2C_Verona_VR%2C_Veneto%2C_Italia_-_panoramio.jpg']
  },
  {
    id: '3',
    name: 'Castelvecchio (Verona)',
    description: 'A medieval castle built on the banks of the Adige River. It now houses the Castelvecchio Museum, showcasing Veronese art. Its architecture reflects both military and residential purposes. History indicates it was built by the Scaligeri family in the 14th century.',
    coordinates: { lat: 45.44, lng: 10.988 },
    openingHours: 'Museum: Tue-Sun 10:00-18:00. Closed Mon.',
    freeEntryInfo: 'Free 1st Sunday of month (Oct-May). Requires paid ticket otherwise.',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Piazza delle Erbe, Verona',
    description: 'A vibrant square located on the site of the ancient Roman forum. It is surrounded by beautiful buildings and a bustling fruit and vegetable market. A central meeting place in Verona. Accounts suggest it has been a marketplace since Roman times.',
    coordinates: { lat: 45.443056, lng: 10.997222 },
    openingHours: 'Square accessible 24/7. Market stalls Mon-Sat, morning to evening.',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Piazza dei Signori, Verona',
    description: 'A picturesque square adjacent to Piazza delle Erbe, surrounded by elegant Renaissance buildings, including the Palazzo del Capitano and the Loggia del Consiglio. Once the political heart of Verona. Information indicates it is connected to Piazza delle Erbe by an arch.',
    coordinates: { lat: 45.443432, lng: 10.998222 },
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Ponte Pietra',
    description: 'The oldest bridge in Verona, a Roman arch bridge crossing the Adige River. It offers scenic views of the city and the river. Parts of the bridge were destroyed during World War II and later rebuilt. History suggests it was built in the 1st century BC.',
    coordinates: { lat: 45.4477, lng: 10.9999 },
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Verona Cathedral',
    description: 'A complex of religious buildings, including the cathedral itself, the St. Elena Church, and the Baptistery of St. John. Its architecture reflects various styles, from Romanesque to Gothic. It houses important artworks. Accounts indicate the first church on this site dates back to the 4th century.',
    coordinates: { lat: 45.447045, lng: 10.996849 },
    openingHours: 'Seasonal hours. Summer: Mon-Sat 10-18, Sun 13:30-18. Winter: Mon-Sat 10-17/17:30, Sun 13:30-17/17:30. Restricted during services.',
    category: 'religious'
  },
  {
    id: '8',
    name: 'Giardino Giusti',
    description: 'A beautiful Renaissance garden, considered one of the finest examples of Italian gardens. It offers panoramic views of Verona from the Cypress Alley. It was created in the 16th century by the Giusti family. Information suggests it inspired Goethe.',
    coordinates: { lat: 45.443611, lng: 11.007222},
    openingHours: 'Daily, seasonal hours (Summer 10:00-19:00, Winter 10:00-18:00). Closed Dec 25.',
    category: 'nature'
  },
  {
    id: '9',
    name: 'Roman theatre, Verona',
    description: 'The remains of a Roman theatre on the hill of San Pietro, dating back to the 1st century BC. It still hosts performances in the summer. Adjacent to the Archaeological Museum. History suggests it was once a significant entertainment venue.',
    coordinates: { lat: 45.447417, lng: 11.001639 },
    openingHours: 'Museum/Theatre: Tue-Sun 10:00-18:00. Closed Mon.',
    freeEntryInfo: 'Free 1st Sunday of month (Oct-May). Requires paid ticket otherwise.',
    category: 'historic'
  },
  {
    id: '10',
    name: 'Castel San Pietro',
    description: 'A hill offering the best panoramic views of Verona, with the remains of a 19th-century Austrian barracks. It can be reached by a funicular. A popular spot for enjoying the cityscape, especially at sunset. Accounts indicate it was the site of the first Roman settlement in Verona.',
    coordinates: { lat: 45.448009, lng: 11.002819 },
    openingHours: 'Viewpoint accessible anytime. Funicular: Daily, seasonal hours (Summer 10:00-21:00, Winter 10:00-19:00).',
    category: 'landmark'
  },
  {
    id: '11',
    name: 'Arco dei Gavi',
    description: 'A Roman triumphal arch built in the 1st century AD, located near Castelvecchio. It was dismantled and rebuilt in the 1930s. A well-preserved example of Roman architecture in Verona. Information suggests it was built by the Gavi family.',
    coordinates: { lat: 45.44, lng: 10.988889 },
    category: 'historic'
  },
  {
    id: '12',
    name: 'Tomba di Giulietta',
    description: 'Said to be Juliet\'s tomb, located in a former convent (now Museo degli Affreschi). A more somber but still popular site for visitors interested in the romantic legend. It features a red marble sarcophagus. History suggests the convent dates back to the 13th century.',
    coordinates: { lat: 45.433800, lng: 10.997900 },
    openingHours: 'Museum/Tomb: Tue-Sun 10:00-18:00. Closed Mon.',
    freeEntryInfo: 'Free 1st Sunday of month (Oct-May). Requires paid ticket otherwise.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Tomba_di_Giulietta_01.jpg/250px-Tomba_di_Giulietta_01.jpg']
  }
]
