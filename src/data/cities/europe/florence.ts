import { Attraction } from '../../../types/attractions';


export const florenceAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Uffizi Gallery',
    description: 'World-renowned art museum housed in a 16th-century palace designed by Giorgio Vasari, showcasing masterpieces of the Italian Renaissance, including works by Leonardo da Vinci, Michelangelo, Botticelli (like "The Birth of Venus"), and Raphael. Originally the offices ("uffizi") of the Medici family, it opened to the public in the late 18th century, becoming one of the first modern museums. It is said that secret passages connected it to Palazzo Pitti.',
    coordinates: { lat: 43.7677, lng: 11.2553 },
    openingHours: 'Tue-Sun: 8:15 - 18:50 (last entry ~17:50). Closed Mon, Jan 1, May 1, Dec 25. Possible late opening Tue.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'museum'
  },
  {
    id: '2',
    name: 'Florence Cathedral',
    description: 'Iconic cathedral, officially Cattedrale di Santa Maria del Fiore, begun in 1296 in the Gothic style and completed in 1436 with Brunelleschi\'s revolutionary dome, a symbol of Florence. Giotto\'s Campanile stands beside it, and the Baptistery with its bronze doors is opposite. It is said that Brunelleschi invented machinery to raise the dome without scaffolding. Its scale and artistry remain breathtaking.',
    coordinates: { lat: 43.7735, lng: 11.2566 },
    openingHours: 'Cathedral: Mon-Sat 10:15-16:00 (approx). Dome Climb/Campanile/Baptistery/Museum: Daily, variable hours (generally 8:15/9:00 - 19:00/19:45). Check official site.',
    freeEntryInfo: 'Cathedral entry free. Dome Climb, Campanile, Baptistery, Museum require paid ticket (passes available).',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Ponte Vecchio',
    description: 'Medieval stone bridge spanning the Arno River, unique for the shops built along it, initially occupied by butchers, tanners, and farmers, but now mostly jewelers and art dealers since the 16th century. It survived World War II, unlike other Florence bridges. The Vasari Corridor, built for the Medici, runs above the shops. It is said that it was spared by Hitler because of its beauty.',
    coordinates: { lat: 43.7680, lng: 11.2531 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Palazzo Vecchio',
    description: 'Historic town hall and museum, originally called Palazzo della Signoria, built in the late 13th century. Its imposing Arnolfo Tower offers panoramic views. The Salone dei Cinquecento is adorned with impressive frescoes by Vasari. It was the seat of the Florentine Republic and later the Medici dukes. It is said that a secret room, sought after for centuries, may contain Leonardo da Vinci\'s lost "Battle of Anghiari."',
    coordinates: { lat: 43.7694, lng: 11.2565 },
    openingHours: 'Museum: Daily 9:00-19:00 (Thu until 14:00). Tower: Daily 9:00-17:00 (Thu until 14:00). Last entry 1h before close.',
    freeEntryInfo: 'Requires paid ticket (separate/combined for museum/tower). Free entry first Sunday of the month.',
    category: 'historic'
  },
  {
    id: '5',
    name: 'Accademia Gallery',
    description: 'Home to Michelangelo\'s David, sculpted between 1501 and 1504, and other Renaissance sculptures, including Michelangelo\'s unfinished "Slaves." The gallery also houses a significant collection of paintings by Florentine artists, mostly from the period 1300–1600. Originally the site of the Academy of Fine Arts, it was established in 1784. The impact of seeing David up close is often described as overwhelming.',
    coordinates: { lat: 43.7766, lng: 11.2588 },
    openingHours: 'Tue-Sun: 8:15 - 18:50 (last entry 18:20). Closed Mon, Jan 1, May 1, Dec 25.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Boboli Gardens',
    description: 'Extensive gardens behind Palazzo Pitti, created for the Medici family in the 16th century, featuring Renaissance statues, fountains (like the Neptune Fountain), and grottos, including the famous Buontalenti Grotto. They are one of the earliest and most important examples of the Italian garden style, influencing garden design throughout Europe. It is said that hidden passages connect parts of the gardens to the palace.',
    coordinates: { lat: 43.7644, lng: 11.2499 },
    openingHours: 'Daily from 8:15. Closing time varies seasonally (16:30 winter - 19:30 summer). Last entry 1h before close.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'park'
  },
  {
    id: '7',
    name: 'Piazzale Michelangelo',
    description: 'Square on a hill south of the Arno offering panoramic views of Florence, especially stunning at sunset. It features bronze copies of Michelangelo\'s David and the sculptures from the Medici Chapels. Designed by Giuseppe Poggi as part of urban renewal in the 19th century, it quickly became a popular spot for both locals and tourists to admire the city skyline. It is said that the best view of Florence is from here.',
    coordinates: { lat: 43.7629, lng: 11.2652 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Blick_auf_und_vom_Piazzale_Michelangelo_%28LM28908%29.jpg/1024px-Blick_auf_und_vom_Piazzale_Michelangelo_%28LM28908%29.jpg']
  },
  {
    id: '8',
    name: 'Basilica of Santa Croce',
    description: 'Gothic church, one of the most important in Florence, containing the tombs of famous Italians including Michelangelo, Galileo Galilei, Niccolò Machiavelli, and Dante Alighieri (though his body is in Ravenna). Construction began in the late 13th century. Its frescoes by Giotto depict scenes from the lives of St. Francis. The church suffered damage during the 1966 flood. It is said that the ghosts of famous figures buried here can be seen at night.',
    coordinates: { lat: 43.7686, lng: 11.2623 },
    openingHours: 'Mon-Sat: 9:30 - 17:30. Sun/Holidays: 12:30 - 17:45. Last entry 17:00. Check official site.',
    category: 'landmark'
  },
  {
    id: '9',
    name: 'San Lorenzo Market',
    description: 'Popular market area surrounding the San Lorenzo Church, consisting of an indoor section (Mercato Centrale) selling local food products and an outdoor market with leather goods, clothing, and souvenirs. The indoor market, a 19th-century iron and glass structure, is now a food hall. The outdoor stalls offer a lively shopping experience. It is said that the Medici family used secret passages to access the market discreetly.',
    coordinates: { lat: 43.7747, lng: 11.2545 },
    openingHours: 'Outdoor Stalls: Daily ~9:00-19:30. Mercato Centrale (Ground Floor): Mon-Sat 7:00-14:00/15:00. Mercato Centrale (First Floor): Daily 10:00-24:00.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Mercato_centrale_di_san_lorenzo_01.jpg/960px-Mercato_centrale_di_san_lorenzo_01.jpg?20160319094324']
  },
  {
    id: '10',
    name: 'Palazzo Pitti',
    description: 'Renaissance palace, one of Florence\'s largest architectural monuments, beginning construction in 1458 for the Pitti family, later bought by the Medici. It now houses five museums, including the Gallery of Modern Art and the Museum of Costume and Fashion. The vast Boboli Gardens are located behind it. It is said that the Pitti family wanted the palace windows to be larger than the entrance to the Medici palace.',
    coordinates: { lat: 43.7651, lng: 11.2502 },
    openingHours: 'Museums: Tue-Sun 8:15 - 18:30/18:50. Closed Mon.',
    freeEntryInfo: 'Free entry first Sunday of the month and specific holidays (e.g., Apr 25).',
    category: 'museum'
  }
];
