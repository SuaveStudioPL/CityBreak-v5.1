import { Attraction } from '../../../types/attractions';


export const palermoAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Palermo Cathedral',
    description: 'A stunning example of Arab-Norman architecture, this UNESCO World Heritage site showcases various architectural styles from different periods. The cathedral houses royal and imperial tombs, including Frederick II and other Norman rulers. Its rooftop offers panoramic views of the city, and the treasury contains the crown of Constance of Aragon.',
    coordinates: { lat: 38.114444, lng: 13.356111},
    openingHours: 'Mon-Sat: 7:00-19:00, Sun: 8:00-13:00. Cathedral Treasury: Mon-Sat 9:00-17:30, Sun 9:00-13:00.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Palazzo dei Normanni',
    description: 'The oldest royal residence in Europe, serving as the seat of Sicily\'s kings during the Norman kingdom and currently the seat of Sicily\'s regional parliament. The palace showcases a remarkable blend of Norman, Arabic, and Byzantine architectural styles, with the highlight being the magnificent Cappella Palatina.',
    coordinates: { lat: 38.110833, lng: 13.353056 },
    openingHours: 'Mon-Sat: 8:30-16:30, Sun: 8:30-12:30. Last entry 1 hour before closing.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Cappella Palatina',
    description: 'Located within the Norman Palace, this royal chapel is a masterpiece of Arab-Norman art. Its walls are adorned with stunning Byzantine mosaics depicting biblical scenes, while the wooden ceiling, crafted by Fatimid artisans, features Islamic muqarnas and painted decorations, creating a unique fusion of Byzantine and Islamic art.',
    coordinates: { lat: 38.1106, lng: 13.3520 },
    openingHours: 'Mon-Sat: 8:30-16:30, Sun: 8:30-12:30. Last entry 1 hour before closing.',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Teatro Massimo',
    description: 'Italy\'s largest opera house and Europe\'s third-largest, opened in 1897. This neoclassical masterpiece is renowned for its perfect acoustics and was featured in "The Godfather Part III". The theater\'s impressive facade is adorned with classical elements and crowned by a magnificent dome.',
    coordinates: { lat: 38.120278, lng: 13.357222 },
    openingHours: 'Guided tours available daily from 9:30-18:00 (times may vary during performances).',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Quattro Canti',
    description: 'The "Four Corners" is a baroque square at the intersection of Palermo\'s two main streets. Each corner features nearly identical facades with fountains, statues of Spanish kings, and female patron saints of Palermo, representing the four seasons. Built between 1608-1620, it marks the first purpose-built square in Europe.',
    coordinates: { lat: 38.115833, lng: 13.361389},
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Palermo-Quattro-Canti-bjs2007-01.jpg/800px-Palermo-Quattro-Canti-bjs2007-01.jpg']
  },
  {
    id: '6',
    name: 'Fontana Pretoria',
    description: 'Also known as the "Fountain of Shame" due to its nude statues, this monumental fountain was originally created for a Florentine villa in 1554. Purchased by the city in 1573, it features concentric circles with allegorical figures, mythological creatures, and classical deities, making it one of the most impressive fountains in Italy.',
    coordinates: { lat: 38.115486, lng: 13.362083 },
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Palazzo Abatellis',
    description: 'A 15th-century palace housing the Regional Gallery of Sicily. The museum contains important works of medieval and Renaissance Sicilian art, including the famous "Triumph of Death" fresco and Antonello da Messina\'s "Virgin Annunciate". The building itself is a masterpiece of Gothic-Catalan architecture.',
    coordinates: { lat: 38.1167, lng: 13.3711 },
    openingHours: 'Tue-Sat: 9:00-19:00, Sun: 9:00-13:00. Closed Mondays.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Capuchin Catacombs',
    description: 'One of the world\'s most unique and macabre attractions, housing nearly 8,000 mummified bodies from the 16th to early 20th centuries. The catacombs began when Capuchin monks discovered their preservation method accidentally and became a status symbol for local residents who wanted to be preserved after death.',
    coordinates: { lat: 38.112, lng: 13.341 },
    openingHours: 'Daily: 9:00-13:00, 15:00-18:00',
    category: 'historic'
  },
  {
    id: '9',
    name: 'Il Capo (Palermo)',
    description: 'A vibrant traditional street market that captures the essence of Palermo\'s Arab heritage. Famous for its fresh local produce, fish, meat, and street food, the market offers a sensory journey through Sicily\'s culinary traditions. The narrow, winding streets are filled with vendors calling out their wares in traditional Arabic style.',
    coordinates: { lat: 38.1178, lng: 13.3561 },
    openingHours: 'Mon-Sat: 7:00-20:00. Closed Sundays.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Stands_%28Mercado_del_Capo_-_Palermo%29.jpg/330px-Stands_%28Mercado_del_Capo_-_Palermo%29.jpg']
  },
  {
    id: '10',
    name: 'Church of Santa Maria dell\'Ammiraglio',
    description: 'Also known as Santa Maria dell\'Ammiraglio, this church is a stunning example of Norman-Byzantine architecture. Built in 1143, it features spectacular golden mosaics depicting biblical scenes and Greek inscriptions. The church uniquely combines Norman, Byzantine, Baroque and Renaissance elements.',
    coordinates: { lat: 38.114833, lng: 13.362942 },
    openingHours: 'Mon-Sat: 9:00-13:00, 15:00-17:00. Sun: 9:00-13:00.',
    category: 'historic'
  },
  {
    id: '11',
    name: 'Palazzo Mirto',
    description: 'A perfectly preserved aristocratic palace offering a glimpse into the life of Palermo\'s nobility. The palace contains original furnishings, decorations, and artifacts from the 17th to 19th centuries, including Murano chandeliers, Chinese porcelain, and French furniture.',
    coordinates: { lat: 38.116692, lng: 13.368244 },
    openingHours: 'Tue-Sat: 9:00-13:00. Closed Sundays and Mondays.',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Palermo-AP-p1070637.jpg/250px-Palermo-AP-p1070637.jpg']
  },
  {
    id: '12',
    name: 'Oratorio del Rosario di Santa Cita, Palermo',
    description: 'A baroque masterpiece featuring elaborate stucco work by Giacomo Serpotta, considered his finest achievement. The oratory\'s walls are covered in intricate white stucco sculptures depicting scenes from the life of Christ and allegorical figures, creating a stunning three-dimensional effect.',
    coordinates: { lat: 38.12073, lng: 13.36312 },
    openingHours: 'Mon-Sat: 9:00-13:00. Closed Sundays.',
    category: 'historic'
  }
];