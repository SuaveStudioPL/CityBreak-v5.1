import { Attraction } from '../../../types/attractions';


export const portoAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Ribeira Square',
    description: 'A UNESCO-listed riverside area, the heart of Porto, with colorful traditional houses, lively cafes, and stunning views of the Douro River and the Dom Luís I Bridge. Wander through its narrow, winding alleys and soak in the vibrant atmosphere. Historically a bustling trading center, it\'s now a popular spot for locals and tourists alike. It is said that it was once a meeting point for sailors and merchants.',
    coordinates: { lat: 41.1407, lng: -8.613 },
    category: 'historic'
  },
  {
    id: '2',
    name: 'Dom Luís I Bridge',
    description: 'An iconic double-deck iron bridge connecting Porto to Vila Nova de Gaia, a symbol of 19th-century engineering designed by a student of Gustave Eiffel. Walk the upper deck for breathtaking panoramic views of the Douro River and the cityscape, or take a tram across the lower level. It is said that it was built to replace a former suspension bridge.',
    coordinates: { lat: 41.139863, lng: -8.609336 },
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Livraria Lello',
    description: 'A stunning neo-Gothic bookstore, often cited as one of the most beautiful in the world, with its crimson art nouveau staircase and exquisite stained glass ceiling. It is rumored to have inspired J.K. Rowling’s descriptions of the Hogwarts library in the Harry Potter series, as she lived in Porto for a time. A paradise for bibliophiles and architecture lovers alike. It is said that the staircase moves on its own.',
    coordinates: { lat: 41.146944, lng: -8.614722 },
    openingHours: 'Daily 9:00 - 19:30. Closed major holidays.',
    freeEntryInfo: 'Requires entry voucher (deductible from book purchase).',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Clérigos Church',
    description: 'A baroque church complex, most famous for its soaring Clérigos Tower, which offers panoramic city views from its 76-meter height. Climb the 240 steps of the intricately designed tower for a rewarding vista of Porto and the Douro River. The church itself is a notable example of late Baroque architecture. It is said that the tower was once used as a navigational aid for ships.',
    coordinates: { lat: 41.145667, lng: -8.614583},
    openingHours: 'Daily 9:00 - 19:00. Night visits available seasonally (19:00-23:00).',
    freeEntryInfo: 'Church entry free. Tower climb/museum requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Vila Nova de Gaia',
    description: 'The waterfront promenade on the Vila Nova de Gaia side of the Douro River, lined with historic port wine cellars. Take a tour and sample aged tawny or vintage ports while enjoying the sunset over the river and Porto skyline. It offers a taste of Porto’s rich wine heritage and a lively atmosphere. It is said that the cellars are filled with the scent of aging wine.',
    coordinates: { lat: 41.133333, lng: -8.616667 },
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Serralves Museum of Contemporary Art',
    description: 'A leading contemporary art museum set within beautiful lush gardens and featuring a striking pink Art Deco villa, the Casa de Serralves. Explore avant-garde exhibitions, modern sculptures, and enjoy the peaceful surroundings. A fusion of art, architecture, and nature. It is said that the gardens are home to rare and exotic plant species.',
    coordinates: { lat: 41.159133, lng: -8.659453 },
    openingHours: 'Seasonal hours. Summer: Mon-Fri 10-19, Sat/Sun 10-20. Winter: Mon-Fri 10-18, Sat/Sun 10-19. Check site.',
    freeEntryInfo: 'Free 1st Sunday of month 10:00-14:00 (residents only). Requires paid ticket otherwise.',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Serralves_museum_fa%C3%A7ade.jpg/250px-Serralves_museum_fa%C3%A7ade.jpg']
  },
  {
    id: '7',
    name: 'Porto Cathedral',
    description: 'A 12th-century Romanesque fortress-cathedral, one of the city\'s oldest monuments, with later Gothic and Baroque additions. Admire its impressive rose window, silver altarpiece, and the Gothic cloisters adorned with azulejo tiles. A significant spiritual and historical anchor of Porto. It is said that it was built on the site of a former Roman temple.',
    coordinates: { lat: 41.1428, lng: -8.6114 },
    openingHours: 'Daily 9:00-12:30 & 14:30-17:30/18:30 (longer hours Apr-Oct). Restricted during services.',
    freeEntryInfo: 'Cathedral entry free. Cloisters require paid ticket.',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'São Bento Railway Station',
    description: 'A stunning train station famous for its interior walls covered in over 20,000 exquisite azulejo tiles, depicting scenes from Portugal’s history, including battles and royal events. Marvel at the blue-and-white ceramic artistry, a functional work of art and a must-see even for non-travelers. It is said that the tiles took over a decade to complete.',
    coordinates: { lat: 41.1456, lng: -8.6105 },
    openingHours: 'Station hall open daily, early morning to late night.',
    category: 'landmark'
  },
  {
    id: '9',
    name: 'Crystal Palace (Porto)',
    description: 'A scenic park offering panoramic views of the Douro River and the city. Stroll through its gardens, admire the peacocks roaming freely, and discover modern art installations. Perfect for picnics or a relaxing sunset stroll. The Rosa Mota Pavilion (formerly Crystal Palace) hosts events. It is said that the original Crystal Palace was made of glass and inspired by London\'s Crystal Palace.',
    coordinates: { lat: 41.146877, lng: -8.624612 },
    openingHours: 'Daily 8:00 - 21:00 (Summer) / 8:00 - 19:00 (Winter).',
    category: 'nature'
  },
  {
    id: '10',
    name: 'Foz do Douro, Porto',
    description: 'A charming coastal district where the Douro River meets the Atlantic Ocean. Walk along the promenade, visit the Felgueiras Lighthouse, and enjoy fresh seafood restaurants with ocean views. It offers a different perspective of Porto, away from the city center\'s bustle. It is said that ancient mariners used this point to navigate into the river.',
    coordinates: { lat: 41.15, lng: -8.667 },
    category: 'coastal',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Felgueiras_Lighthouse_Storm.jpg/250px-Felgueiras_Lighthouse_Storm.jpg']
  },
  {
    id: '11',
    name: 'Mercado do Bolhão',
    description: 'A traditional and bustling market selling fresh produce, flowers, meats, cheeses, and local delicacies. Experience Porto’s authentic daily life, interact with vendors, and perhaps try a francesinha sandwich, a local specialty. Reopened after renovation. It is said that you can find anything you need within its walls.',
    coordinates: { lat: 41.149918, lng: -8.604879 },
    openingHours: 'Mon-Fri: 8:00 - 20:00, Sat: 8:00 - 18:00. Closed Sun.',
    category: 'local_market',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Santo_Ildefonso-Mercado_do_Bolh%C3%A3o_-_Fachada.jpg/960px-Santo_Ildefonso-Mercado_do_Bolh%C3%A3o_-_Fachada.jpg?20110924140316']
  },
  {
    id: '12',
    name: 'Church of São Francisco (Porto)',
    description: 'A Gothic church with an unexpectedly opulent Baroque interior, lavishly covered in intricate gold leaf carvings. Descend into the catacombs to see ancient skeletons and learn about the church\'s history. A striking contrast of architectural styles. It is said that so much gold was used that it caused a scandal at the time.',
    coordinates: { lat: 41.141016, lng: -8.61574 },
    openingHours: 'Daily, seasonal hours (Summer 9:00-20:00, Shoulder 9:00-19:00, Winter 9:00-17:30).',
    category: 'landmark'
  }
];
