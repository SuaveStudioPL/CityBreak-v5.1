import { Attraction } from '../../../types/attractions';


export const krakowAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Wawel Castle',
    description: 'Royal castle and cathedral complex, a symbol of Polish statehood and one of Europe\'s most spectacular castles.',
    coordinates: { lat: 50.054217, lng: 19.935167 },
    openingHours: 'Exhibitions: Tue-Sun ~9:30-17:00 (seasonal variations, check site). Cathedral: Mon-Sat 9:00-17:00, Sun 12:30-17:00. Grounds: Daily 6:00-21:00.',
    freeEntryInfo: 'Grounds free. Cathedral main body free. Exhibitions require tickets (free Mon Nov-Mar, limited passes).',
    category: 'historical'
  },
  {
    id: '2',
    name: 'Main Square, Kraków',
    description: 'Europe\'s largest medieval town square with the iconic Cloth Hall and St. Mary\'s Basilica.',
    coordinates: { lat: 50.061667, lng: 19.937222 },
    openingHours: 'St. Mary\'s Basilica: Mon-Sat 11:30-18:00, Sun 14:00-18:00 (Tourist entry). Tower: Seasonal/limited hours (check site).',
    freeEntryInfo: 'St. Mary\'s Basilica requires paid ticket for tourists. Tower requires separate ticket.',
    category: 'cultural'
  },
  {
    id: '3',
    name: 'Kazimierz',
    description: 'Historic Jewish quarter known for its synagogues, trendy cafes, and cultural significance.',
    coordinates: { lat: 50.051389, lng: 19.945556 },
    category: 'cultural'
  },
  {
    id: '4',
    name: 'Wieliczka Salt Mine',
    description: 'UNESCO World Heritage site featuring underground chambers, chapels, and sculptures carved from salt.',
    coordinates: { lat: 49.983333, lng: 20.064722 },
    openingHours: 'Daily, seasonal hours (e.g., 9:00-17:00 winter, 8:00-19:00 summer). Guided tours only, booking essential.',
    category: 'historical'
  },
  {
    id: '5',
    name: 'Oskar Schindler\'s Enamel Factory',
    description: 'Museum housed in the former enamel factory of Oskar Schindler, telling the story of Kraków under Nazi occupation.',
    coordinates: { lat: 50.047222, lng: 19.960833 },
    openingHours: 'Seasonal. Summer (Apr-Oct): Mon 10-16, Tue-Sun 9-20. Winter (Nov-Mar): Mon 10-14, Tue-Sun 9-18. Last entry 90min before close.',
    freeEntryInfo: 'Free entry Mondays (limited tickets).',
    category: 'historical'
  },
  {
    id: '6',
    name: 'St. Florian\'s Gate',
    description: 'Gothic tower gate, part of the city\'s medieval fortifications and the starting point of the Royal Route.',
    coordinates: { lat: 50.065556, lng: 19.940833 },
    category: 'historical'
  },
  {
    id: '7',
    name: 'Planty Park',
    description: 'Green belt park surrounding the Old Town, created in place of the medieval city walls.',
    coordinates: { lat: 50.062778, lng: 19.936389 },
    openingHours: 'Open 24/7.',
    category: 'nature'
  },
  {
    id: '8',
    name: 'National Museum in Kraków',
    description: 'Main branch of Poland\'s National Museum housing significant art collections.',
    coordinates: { lat: 50.060278, lng: 19.923889 },
    openingHours: 'Tue-Sun: 10:00 - 18:00. Closed Mon.',
    freeEntryInfo: 'Free entry to permanent exhibitions on Tuesdays.',
    category: 'cultural'
  },
  {
    id: '9',
    name: 'Kościuszko Mound',
    description: 'Memorial mound offering panoramic views of Kraków and commemorating Tadeusz Kościuszko.',
    coordinates: { lat: 50.054722, lng: 19.893611 },
    openingHours: 'Daily from 9:00. Closing varies seasonally (16:00 winter - 20:30+ summer). Check official site.',
    freeEntryInfo: 'Requires paid ticket. Free on specific dates (Feb 4, Mar 24, Oct 15).',
    category: 'historical'
  },
  {
    id: '10',
    name: 'Nowa Huta',
    description: 'Socialist Realist district built as a model communist city, now a unique architectural attraction.',
    coordinates: { lat: 50.069444, lng: 20.029167 },
    category: 'cultural'
  },
  {
    id: '11',
    name: 'Collegium Maius',
    description: 'The oldest building of Jagiellonian University, featuring Gothic architecture and museum collections.',
    coordinates: { lat: 50.061944, lng: 19.934722 },
    openingHours: 'Museum: Guided tours primary access (check site). Limited individual access Mon 10-16, Tue-Fri 13:30-16, Sat 10-15. Closed Sun. Courtyard: Daily ~10-16+.',
    freeEntryInfo: 'Courtyard free. Museum free Wed 13:30-16:00 (individual).',
    category: 'historical'
  },
  {
    id: '12',
    name: 'Smocza Jama', 
    description: 'Cave at the foot of Wawel Hill associated with the legend of the Wawel Dragon.',
    coordinates: { lat: 50.053333, lng: 19.935833 },
    openingHours: 'Seasonal (Apr-Oct), daily ~10:00-17:00/19:00. Check Wawel Castle site.',
    category: 'cultural'
  }
];
