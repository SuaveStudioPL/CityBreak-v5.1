import { Attraction } from '../../../types/attractions';

export const dubaiAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Burj Khalifa',
    description: 'The world\'s tallest building at 828 meters. Features observation decks on the 124th, 125th, and 148th floors with panoramic views. Designed with a triple-lobed footprint inspired by the Hymenocallis flower. Fun fact: During construction, the concrete had to be poured at night due to Dubai\'s extreme heat.',
    coordinates: { lat: 25.197197, lng: 55.274376 },
    openingHours: 'At the Top (124th & 125th floors): 10:00-22:00, At the Top SKY (148th floor): 12:30-21:00',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/240px-Burj_Khalifa.jpg']
  },
  {
    id: '2',
    name: 'Palm Jumeirah',
    description: 'An artificial archipelago shaped like a palm tree, created through land reclamation. Hosts luxury hotels, apartments, and beach clubs. Required 94 million cubic meters of sand and 7 million tons of rock to build. Visible from space and added 520 kilometers of beaches to Dubai\'s coastline.',
    coordinates: { lat: 25.112350, lng: 55.138507 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Palm_Jumeirah_on_13_May_2008_Pict_1.jpg/280px-Palm_Jumeirah_on_13_May_2008_Pict_1.jpg']
  },
  {
    id: '3',
    name: 'Dubai Mall',
    description: 'One of the world\'s largest malls with 1,200+ retail outlets and 200+ restaurants. Features the Dubai Aquarium, Olympic-sized ice rink, and indoor waterfall. Attracts 80 million visitors annually. Fun fact: The mall\'s aquarium holds 10 million liters of water and houses over 33,000 marine animals.',
    coordinates: { lat: 25.197877, lng: 55.279471 },
    openingHours: 'Daily 10:00-00:00 (Fri-Sat until 01:00)',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Dubai_Mall_1.jpg/250px-Dubai_Mall_1.jpg']
  },
  {
    id: '4',
    name: 'Dubai Fountain',
    description: 'The world\'s largest choreographed fountain system with water jets reaching 150 meters high. Features 6,600 lights and 25 colored projectors on the 30-acre Burj Lake. The jets can be seen from 30km away. Fun fact: The fountain can spray 22,000 gallons of water in the air at any moment.',
    coordinates: { lat: 25.195304, lng: 55.274420 },
    openingHours: 'Shows every 30 minutes from 18:00-23:00',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Dubai_Fountain_with_Burj_Khalifa_in_background.jpg/250px-Dubai_Fountain_with_Burj_Khalifa_in_background.jpg']
  },
  {
    id: '5',
    name: 'Dubai Museum',
    description: 'Located in Al Fahidi Fort (built 1787), Dubai\'s oldest building. Chronicles the city\'s evolution from fishing village to global metropolis. Features archaeological artifacts, traditional houses, and pre-oil era life displays. The fort served as both royal residence and defensive structure.',
    coordinates: { lat: 25.263489, lng: 55.297638 },
    openingHours: 'Sat-Thu 08:30-20:30, Fri 14:30-20:30',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dubai_Museum.jpg/250px-Dubai_Museum.jpg']
  },
  {
    id: '6',
    name: 'Jumeirah Mosque',
    description: 'A stunning example of Islamic architecture built from white stone in medieval Fatimid tradition. One of few Dubai mosques open to non-Muslims. Accommodates 1,200 worshippers with intricate geometric patterns and calligraphy. Twin minarets frame a central dome creating an iconic silhouette.',
    coordinates: { lat: 25.233664, lng: 55.258894 },
    openingHours: 'Tours at 10:00 and 14:00 (except Fridays)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jumeirah_Mosque_Dubai.jpg/250px-Jumeirah_Mosque_Dubai.jpg']
  },
  {
    id: '7',
    name: 'Dubai Creek',
    description: 'A natural saltwater inlet dividing Dubai into Deira and Bur Dubai. Former center of pearl diving, now busy with wooden dhow boats trading goods around the Persian Gulf. Crucial to Dubai\'s development as a trading port. Fun fact: Some dhows still use traditional navigation methods passed down for generations.',
    coordinates: { lat: 25.269323, lng: 55.307485 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Dubai_Creek_Deira.jpg/250px-Dubai_Creek_Deira.jpg']
  },
  {
    id: '8',
    name: 'Ski Dubai',
    description: 'Indoor ski resort with 22,500 square meters of ski area at -1°C to -2°C year-round in desert Dubai. Features five slopes including the world\'s first indoor black diamond run. Uses 6,000 tons of snow from desalinated water and houses King and Gentoo penguins for visitor encounters.',
    coordinates: { lat: 25.117565, lng: 55.200651 },
    openingHours: 'Daily 10:00-00:00',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ski_Dubai_inside_Mall_of_the_Emirates.jpg/250px-Ski_Dubai_inside_Mall_of_the_Emirates.jpg']
  },
  {
    id: '9',
    name: 'Dubai Frame',
    description: 'A 150-meter-tall, picture frame-shaped structure with a 93-meter sky bridge offering views of old and new Dubai. Covered in gold-colored steel with a ground floor museum. Symbolizes the connection between Dubai\'s fishing village past and global city present. Won the 2018 Council on Tall Buildings award.',
    coordinates: { lat: 25.234700, lng: 55.300157 },
    openingHours: 'Daily 09:00-21:00',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dubai_Frame_in_April_2018.jpg/250px-Dubai_Frame_in_April_2018.jpg']
  },
  {
    id: '10',
    name: 'Dubai Miracle Garden',
    description: 'World\'s largest natural flower garden with 50+ million flowers in stunning designs. Covers 72,000 square meters and includes a flower-covered Emirates A380 aircraft (Guinness World Record). Open November-May only. Fun fact: Gardeners use recycled wastewater and change displays every season.',
    coordinates: { lat: 25.061728, lng: 55.243559 },
    openingHours: 'Daily 09:00-21:00 (November-May only)',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Dubai_Miracle_Garden_2.jpg/250px-Dubai_Miracle_Garden_2.jpg']
  },
  {
    id: '11',
    name: 'Museum of the Future',
    description: 'Futuristic torus-shaped building covered in Arabic calligraphy windows featuring quotes about the future. Explores how technology could benefit humanity through immersive exhibitions. Named "World\'s Most Beautiful Building" by National Geographic. The calligraphy includes quotes from Sheikh Mohammed bin Rashid Al Maktoum.',
    coordinates: { lat: 25.218046, lng: 55.278550 },
    openingHours: 'Daily 10:00-18:00',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Museum_of_the_Future_Dubai.jpg/250px-Museum_of_the_Future_Dubai.jpg']
  },
  {
    id: '12',
    name: 'Burj Al Arab',
    description: 'Luxury hotel on an artificial island resembling a dhow sail. At 321 meters, it\'s among the world\'s tallest hotels and a Dubai icon. Features 24-karat gold interiors, a helipad, and underwater restaurant. Fun fact: It\'s officially 5-star, not 7-star as commonly believed. Uses 1,790 square meters of 24k gold leaf.',
    coordinates: { lat: 25.141254, lng: 55.185968 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/250px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg']
  }
];
