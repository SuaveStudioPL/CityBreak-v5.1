import { Attraction } from '../../../types/attractions';


export const malagaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Alcazaba of Malaga',
    description: 'A palatial fortification built by the Hammudid dynasty in the early 11th century. This Moorish alcazaba is one of the largest in Andalusia and offers stunning views over the city and the Mediterranean. Its architecture reflects various periods, including Roman remains. Tradition holds that it was built on the site of a former Roman fortification.',
    coordinates: { lat: 36.7196, lng: -4.4189 },
    openingHours: 'Daily. Summer (Apr-Oct): 9:00-20:00. Winter (Nov-Mar): 9:00-18:00. Last entry ~45min before close.',
    freeEntryInfo: 'Free entry Sundays after 14:00.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Gibralfaro',
    description: 'A 14th-century castle built on a high hill overlooking Malaga, offering panoramic views of the city, the port, and the coastline. It was used for military defense and once housed a lighthouse. The castle is connected to the Alcazaba by a covered walkway. History suggests its name derives from a Phoenician lighthouse.',
    coordinates: { lat: 36.723333, lng: -4.410833 },
    openingHours: 'Daily. Summer (Apr-Oct): 9:00-20:00. Winter (Nov-Mar): 9:00-18:00. Last entry ~45min before close.',
    freeEntryInfo: 'Free entry Sundays after 14:00.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Malaga Cathedral',
    description: 'A Renaissance cathedral, also known as Santa Iglesia Catedral Basílica de la Encarnación, built between the 16th and 18th centuries. One of its towers remains unfinished, giving it the nickname "La Manquita" (The One-Armed Lady). Its interior is richly decorated. Accounts indicate that construction was halted due to lack of funds.',
    coordinates: { lat: 36.720139, lng: -4.419466 },
    openingHours: 'Tourist visits: Mon-Fri 10:00-18:00/19:00, Sat 10:00-18:00, Sun 14:00-18:00. Restricted during services.',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Museo Picasso Malaga',
    description: 'A museum dedicated to the life and work of the famous artist Pablo Picasso, who was born in Malaga. It houses a significant collection of his works, donated by his family. The museum is located in the Palacio de Buenavista. It is said that Picasso always wanted a museum in his hometown.',
    coordinates: { lat: 36.721667, lng: -4.418333 },
    openingHours: 'Daily. Seasonal hours (e.g., Nov-Feb 10-18, Mar-Jun/Sep-Oct 10-19, Jul-Aug 10-20). Last entry 30min before close.',
    freeEntryInfo: 'Free entry Sundays last two hours before closing & specific dates (Feb 28, May 18, Sep 27, Oct 27).',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Roman Theatre',
    description: 'The ruins of a Roman theatre at the foot of the Alcazaba, dating back to the 1st century BC. It was rediscovered in 1951 and has been restored for performances. It provides insight into Malaga\'s ancient past. Evidence suggests it was in use until the 3rd century AD.',
    coordinates: { lat: 36.721189, lng: -4.416871},
    openingHours: 'Tue-Sat 10:00-18:00, Sun/Holidays 10:00-16:00. Closed Mon. Site viewable from street anytime.',
    category: 'historic'
  },
  {
    id: '6',
    name: 'Centre Pompidou',
    description: 'A branch of the famous Centre Pompidou in Paris, located in a modern cube on the waterfront. It features a collection of contemporary and modern art. The colorful cube is a notable landmark in Malaga. Information suggests it was the first Centre Pompidou to be located outside of France.',
    coordinates: { lat: 36.71898, lng: -4.412545},
    openingHours: 'Wed-Mon: 9:30 - 20:00 (last entry 19:30). Closed Tue, Jan 1, Dec 25.',
    freeEntryInfo: 'Free entry Sundays after 16:00 & specific dates (White Night, May 18, Sep 27).',
    category: 'museum'
  },
  {
    id: '7',
    name: 'Carmen Thyssen Museum',
    description: 'An art museum housed in the Palacio de Villalón, featuring a collection of Spanish paintings, primarily from the 19th century, with a focus on Andalusian art. The museum offers a glimpse into Spanish culture and history. It is known for its collection of works by Andalusian masters.',
    coordinates: { lat: 36.721389, lng: -4.422778 },
    openingHours: 'Tue-Sun: 10:00 - 20:00. Closed Mon, Dec 25, Jan 1.',
    freeEntryInfo: 'Free entry Sundays after 16:00/17:00.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Malaga Park',
    description: 'A beautiful promenade along the port, lined with palm trees, fountains, and sculptures. It offers a pleasant walk and connects the city center with the eastern part of Malaga. The park is a popular spot for relaxation. It was reportedly built on reclaimed land from the sea.',
    coordinates: { lat: 36.719160, lng: -4.416405 },
    openingHours: 'Open 24/7.',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Park_in_M%C3%A1laga-9034080214.jpg/250px-Park_in_M%C3%A1laga-9034080214.jpg']
  },
  {
    id: '9',
    name: 'Plaza de la Merced',
    description: 'A historic square in the heart of Malaga, known for being the birthplace of Pablo Picasso. It is surrounded by cafes and restaurants and features an obelisk commemorating General Torrijos. The Picasso Foundation Museum is located in a corner of the square. It is said to be a lively meeting place.',
    coordinates: { lat: 36.723711, lng: -4.417521 },
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Atarazanas Market',
    description: 'A stunning 19th-century market building with a beautiful stained-glass window, offering a variety of fresh produce, seafood, meats, and local products. The building itself is a work of art. The market is a bustling hub of activity. It is believed to be built on the site of a former Nasrid shipyard.',
    coordinates: { lat: 36.71808, lng: -4.423960},
    openingHours: 'Mon-Sat: 8:00 - 14:00/15:00. Closed Sun.',
    category: 'local_market',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/a/ab/Mercadoatarazana.jpg']
  },
  {
    id: '11',
    name: 'La Malagueta Beach',
    description: 'A popular urban beach located east of the Port of Malaga, known for its dark sand and numerous beachfront restaurants (chiringuitos) serving fresh seafood. It offers amenities like sunbeds and umbrellas and is easily accessible from the city center. It is a favorite spot for locals and tourists to enjoy the Mediterranean coast. Information suggests it was artificially created in the 20th century.',
    coordinates: { lat: 36.717400, lng: -4.409600 },
    category: 'beach',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Malaguetabeach.jpg/960px-Malaguetabeach.jpg']
  },
  {
    id: '12',
    name: 'El Caminito del Rey',
    description: 'A spectacular walkway pinned along the steep walls of a narrow gorge in El Chorro, near Ardales, north of Malaga. Originally built for workers at a hydroelectric plant, it was restored and reopened as a thrilling tourist attraction. It offers breathtaking views but is not for the faint-hearted. Reports indicate its construction was completed in 1921.',
    coordinates: { lat: 36.929970, lng: -4.800797 },
    openingHours: 'Tue-Sun, seasonal hours (Summer ~9:30-17:00, Winter ~9:30-15:00). Closed Mon & holidays. Booking essential.',
    category: 'nature'
  }
];
