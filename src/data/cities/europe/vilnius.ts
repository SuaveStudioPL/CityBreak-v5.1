import { Attraction } from '../../../types/attractions';


export const vilniusAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Vilnius Old Town',
    description: 'A UNESCO World Heritage site, Vilnius Old Town is one of the largest and most well-preserved medieval old towns in Eastern Europe, boasting a stunning array of baroque architecture, cobblestone streets, and charming courtyards. Explore its numerous churches, historic buildings, and vibrant atmosphere. It is said that it was founded by Grand Duke Gediminas after a dream.',
    coordinates: { lat: 54.6797, lng: 25.2875 },
    category: 'historic'
  },
  {
    id: '2',
    name: 'Gediminas\' Tower',
    description: 'A historic tower located on Gediminas\' Hill, a prominent landmark and a symbol of Vilnius and Lithuania. Climb to the top for panoramic views of the city, especially the Old Town and the Neris River. The tower is a remnant of the Upper Castle. It is said that the tower appeared in Grand Duke Gediminas\' dream, leading to the city\'s founding.',
    coordinates: { lat: 54.6867, lng: 25.2907 },
    openingHours: 'Daily, seasonal hours (Summer 10:00-21:00, Winter 10:00-18:00).',
    freeEntryInfo: 'Free last Sunday of month. Requires paid ticket otherwise.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Gate of Dawn',
    description: 'One of the most important religious sites in Vilnius, a historic city gate that houses a revered icon of the Blessed Virgin Mary, believed to have miraculous powers. Pilgrims and visitors come to pray at the chapel within the gate. A significant place of worship and Lithuanian national identity. It is said that the icon has protected Vilnius from many threats.',
    coordinates: { lat: 54.67432, lng: 25.28954 },
    openingHours: 'Chapel: Daily, seasonal hours (Summer 6:00-19:00, Winter 7:00-19:00).',
    category: 'religious'
  },
  {
    id: '4',
    name: 'St. Anne\'s Church, Vilnius',
    description: 'A breathtaking Gothic masterpiece, known for its unique and intricate brick facade. Located near the Bernardine Church, it forms a picturesque ensemble. It is said that Napoleon Bonaparte was so impressed by its beauty that he wished he could take it back to Paris brick by brick.',
    coordinates: { lat: 54.683056, lng: 25.293333 },
    openingHours: 'Daily, hours vary (Summer 10-18, Winter Tue-Sat afternoons, Sun morning). Check locally.',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Palace of the Grand Dukes of Lithuania',
    description: 'A reconstructed palace located in the heart of Vilnius, near the Cathedral Square. It houses a museum that chronicles the history of the Grand Duchy of Lithuania and the Lithuanian state. Once a significant political and cultural center. It is said that it was a magnificent Renaissance residence.',
    coordinates: { lat: 54.6862, lng: 25.289 },
    openingHours: 'Tue-Sat: 10:00-18:00, Sun: 10:00-16:00. Closed Mon & holidays.',
    freeEntryInfo: 'Free last Sunday of month.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Užupis',
    description: 'An artistic and bohemian district that declared itself an independent republic with its own constitution, flag, and president. Explore its quirky art installations, galleries, and the Angels of Užupis statue. A unique and 자유로운 spirit within Vilnius. It is said that it was once inhabited by the city\'s outcasts.',
    coordinates: { lat: 54.680556, lng: 25.296944},
    category: 'cultural'
  },
  {
    id: '7',
    name: 'Vilnius Cathedral',
    description: 'A neoclassical cathedral located in Cathedral Square, the main Catholic church in Lithuania. Its history dates back to the 13th century, though the current structure was built in the late 18th century. The Chapel of Saint Casimir houses the relics of Lithuania\'s patron saint. It is said that pagan gods were once worshipped on this site.',
    coordinates: { lat: 54.685833, lng: 25.287778 },
    openingHours: 'Cathedral: Daily 7:00-19:00. Bell Tower: Mon-Sat 10-19 (Summer) / 10-18 (Winter). Crypts: Guided tours Mon-Sat.',
    freeEntryInfo: 'Cathedral free. Bell Tower & Crypts require paid tickets.',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Museum of Occupations and Freedom Fights',
    description: 'Housed in the former KGB headquarters, this museum documents the Soviet and Nazi occupations of Lithuania, as well as the Lithuanian resistance movement. It offers a sobering but important insight into the country\'s 20th-century history. Often referred to as the KGB Museum. It is said that the building is haunted by the ghosts of those who were imprisoned and executed there.',
    coordinates: { lat: 54.688056, lng: 25.271111 },
    openingHours: 'Wed-Sat: 10:00-18:00, Sun: 10:00-17:00. Closed Mon-Tue.',
    freeEntryInfo: 'Free entry on specific national dates.',
    category: 'museum'
  },
  {
    id: '9',
    name: 'Bernardine Garden',
    description: 'A historic park located along the Vilnelė River, offering beautiful fountains, flowerbeds, and walking paths. A peaceful retreat in the city, perfect for relaxation. The garden has undergone renovations to restore its former glory. It is said that it was once a monastic garden.',
    coordinates: { lat: 54.683333, lng: 25.296944 },
    openingHours: 'Daily 6:00/7:00 - 22:00/23:00.',
    category: 'nature'
  },
  {
    id: '10',
    name: 'Three Crosses',
    description: 'A prominent monument consisting of three white crosses on a hill overlooking Vilnius. It commemorates Franciscan monks who were martyred in the 14th century. The monument offers panoramic views of the city, especially at sunset. It is said that the original wooden crosses were erected in the 17th century.',
    coordinates: { lat: 54.6867, lng: 25.2976 },
    category: 'landmark'
  }
];
