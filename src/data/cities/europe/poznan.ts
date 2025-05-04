import { Attraction } from '../../../types/attractions';

export const poznanAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Poznań Old Town', // Polski: Stary Rynek w Poznaniu
    description: "The historical center of Poznań's Old Town, featuring colorful merchant houses and the iconic Town Hall. Witness the mechanical goats butting heads daily at noon from the Town Hall tower. The square was laid out around 1253 and remains the heart of the city's social and cultural life.",
    coordinates: { lat: 52.408333, lng: 16.934444 }, // Approx. center from Wikipedia
    category: 'historic'
  },
  {
    id: '2',
    name: 'Poznań Town Hall', // Polski: Ratusz w Poznaniu
    description: "A Renaissance masterpiece located on the Old Market Square, famous for its mechanical goats emerging daily at noon. Once the seat of local government, it now houses the Museum of the History of the City of Poznań. Its intricate facade and historical significance make it a must-see.",
    coordinates: { lat: 52.408611, lng: 16.934167 }, // Located on Old Market Square
    openingHours: 'Museum: Tue-Thu 10:00-17:00, Fri 10:00-17:00, Sat-Sun 10:00-17:00. Closed Mon. (Hours may vary)', // Example hours, check official site
    freeEntryInfo: 'Museum free on Saturdays (Subject to change)', // Example info, check official site
    category: 'historic'
  },
  {
    id: '3',
    name: 'Archcathedral Basilica of St. Peter and St. Paul, Poznań', // Polski: Bazylika archikatedralna Świętych Apostołów Piotra i Pawła w Poznaniu
    description: "Located on Ostrów Tumski (Cathedral Island), this is one of the oldest churches in Poland and the burial site of early Polish rulers. It's considered the birthplace of Polish Christianity. The Golden Chapel inside holds the tombs of Mieszko I and Bolesław the Brave.",
    coordinates: { lat: 52.411389, lng: 16.947778 }, // Coordinates from Wikipedia
    openingHours: 'Visiting hours typically outside Mass times, check schedule.',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Imperial Castle, Poznań', // Polski: Zamek Cesarski w Poznaniu
    description: "A relatively young, early 20th-century palace built for German Emperor Wilhelm II. It survived WWII largely intact and now houses cultural institutions ('Zamek' Culture Centre) and university departments. Its imposing architecture reflects its imperial origins.",
    coordinates: { lat: 52.407778, lng: 16.919167 }, // Coordinates from Wikipedia
    openingHours: 'Cultural Centre generally open daily, specific exhibition/event hours vary. Check site.',
    category: 'historic'
  },
  {
    id: '5',
    name: 'Citadel Park, Poznań', // Polski: Park Cytadela w Poznaniu
    description: "The largest park in Poznań, built on the site of the former Fort Winiary. It features military museums, cemeteries (including British Commonwealth graves), sculptures (like Magdalena Abakanowicz's 'Unrecognized Ones'), and vast green spaces perfect for recreation.",
    coordinates: { lat: 52.4181, lng: 16.9350 }, // Approx. center from Wikipedia
    openingHours: 'Park open 24/7. Museum hours vary.',
    category: 'park',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Muzeum_Cytadela_Pozna%C5%84.jpg/250px-Muzeum_Cytadela_Pozna%C5%84.jpg']
  },
  {
    id: '6',
    name: 'Poznań Palm House', // Polski: Palmiarnia Poznańska
    description: "One of the largest palm houses in Europe, located in Wilson Park. It houses a rich collection of exotic plants from different climate zones, as well as an aquarium section. A tropical oasis in the heart of the city, perfect for a relaxing visit.",
    coordinates: { lat: 52.4019, lng: 16.9017 }, // Coordinates from Wikipedia
    openingHours: 'Tue-Sat: 9:00-17:00 (Ticket office closes 16:00), Sun: 9:00-18:00 (Ticket office closes 17:00). Closed Mon. (Hours may vary)', // Check official site
    category: 'park',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/2021_Poznan_Palm_house_Victoria.jpg/500px-2021_Poznan_Palm_house_Victoria.jpg']
  },
  {
    id: '7',
    name: 'Lake Malta', // Polski: Jezioro Maltańskie
    description: "An artificial lake on the right bank of the Warta river, famous for its international rowing and canoeing regatta course. The surrounding area offers numerous recreational activities, including Malta Ski (year-round slope), thermal baths, parks, and a narrow-gauge railway.",
    coordinates: { lat: 52.4000, lng: 16.9750 }, // Approx. center from Wikipedia
    category: 'leisure'
  },
  {
    id: '8',
    name: 'National Museum, Poznań', // Polski: Muzeum Narodowe w Poznaniu
    description: "One of the largest and oldest museums in Poland, featuring a rich collection of Polish and European art, from antiquity to modern times. Highlights include works by Jacek Malczewski and Olga Boznańska, as well as a significant collection of Spanish paintings.",
    coordinates: { lat: 52.408161, lng: 16.929495 }, // Coordinates from Wikipedia
    openingHours: 'Tue-Thu 10:00-17:00, Fri 10:00-17:00, Sat-Sun 10:00-17:00. Closed Mon. (Hours may vary)', // Example hours, check official site
    freeEntryInfo: 'Free entry Tuesdays (Subject to change)', // Example info, check official site
    category: 'museum'
  },
  {
    id: '9',
    name: 'Stary Browar', // Polski: Stary Browar
    description: "An award-winning shopping, arts, and business center built within a beautifully restored 19th-century brewery complex. Known for its unique architecture blending historical elements with modern design, it offers shops, restaurants, galleries, and a park.",
    coordinates: { lat: 52.4025, lng: 16.9272 }, // Coordinates from Wikipedia
    openingHours: 'Shopping Center: Mon-Sat ~9:00-21:00, Sun ~10:00-20:00. Individual venues vary.',
    category: 'landmark' // Can also be 'historic' or 'shopping'
  },
  {
    id: '10',
    name: 'Poznań Fara', // Polski: Fara Poznańska (Bazylika kolegiacka Matki Bożej Nieustającej Pomocy, św. Marii Magdaleny i św. Stanisława Biskupa w Poznaniu)
    description: "A stunning example of Baroque architecture, this parish church boasts one of the most impressive interiors in Poland. Known formally as the Basilica of Our Lady of Perpetual Help, Mary Magdalene and St. Stanislaus, its grandeur and intricate details are breathtaking.",
    coordinates: { lat: 52.406111, lng: 16.934167 }, // Coordinates from Wikipedia
    openingHours: 'Visiting hours typically outside Mass times, check schedule.',
    category: 'historic'
  },
  {
    id: '11',
    name: 'Poznań Croissant Museum', // Polski: Rogalowe Muzeum Poznania
    description: "An interactive museum dedicated to the St. Martin's croissant (Rogal Świętomarciński), a local delicacy with protected geographical indication. Visitors participate in the baking process and learn about Poznań's traditions and dialect. Located in a historic tenement house on the Old Market Square.",
    coordinates: { lat: 52.4081, lng: 16.9342 }, // Located on Old Market Square
    openingHours: 'Shows at specific times, booking recommended. Check official site.',
    category: 'museum' // Could also be 'culture'
  }
];