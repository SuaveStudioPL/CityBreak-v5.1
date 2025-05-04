import { Attraction } from '../../../types/attractions';


export const sofiaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Saint Alexander Nevsky Cathedral, Sofia',
    description: 'A magnificent Neo-Byzantine cathedral, one of the largest Eastern Orthodox churches in the world, built in the early 20th century as a memorial to the Russian soldiers who died in the Russo-Turkish War of 1877-78. Its gilded domes and intricate interior are breathtaking. It is said that it was built on the site of a former Ottoman mosque.',
    coordinates: { lat: 42.695833, lng: 23.332956 },
    openingHours: 'Cathedral: Daily 7:00-19:00. Crypt (Icon Museum): Tue-Sun 10:00-18:00.',
    freeEntryInfo: 'Cathedral entry free. Crypt requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Vitosha Boulevard',
    description: 'The main commercial street in Sofia, a pedestrian zone lined with shops, restaurants, cafes, and bars, offering stunning views of the Vitosha Mountain in the background. It\'s a popular spot for locals and tourists alike to stroll and soak in the city atmosphere. It is said that it was once a muddy path that transformed into a grand boulevard.',
    coordinates: { lat: 42.691331, lng: 23.319661 },
    category: 'shopping'
  },
  {
    id: '3',
    name: 'National Palace of Culture',
    description: 'Bulgaria\'s largest cultural complex, a monumental structure built in the late 20th century. It hosts a variety of events, including concerts, exhibitions, and conferences. Its modern architecture is a contrast to the city\'s older buildings. It is said that it was designed to symbolize Bulgaria\'s cultural achievements.',
    coordinates: { lat: 42.6847, lng: 23.3187 },
    openingHours: 'Open for scheduled events. Check official NDK website for program.',
    category: 'cultural'
  },
  {
    id: '4',
    name: 'Boyana Church',
    description: 'A UNESCO World Heritage Site, a medieval Bulgarian Orthodox church located on the outskirts of Sofia. It is famous for its well-preserved 13th-century frescoes, considered masterpieces of European medieval art. The church offers a glimpse into Bulgaria\'s rich cultural history. It is said that it was a royal chapel.',
    coordinates: { lat: 42.6445, lng: 23.2668 },
    openingHours: 'Daily, seasonal hours (Summer 9:30-18:00, Winter 9:00-17:30). Visits limited to 10 mins.',
    freeEntryInfo: 'Free entry Mondays after 15:00.',
    category: 'historic'
  },
  {
    id: '5',
    name: 'Saint Sofia Church',
    description: 'An ancient church that gave the city its name, dating back to the 6th century. It features a simple brick exterior and a serene interior. An underground museum reveals the ruins of a necropolis beneath it, with tombs from Roman times. A symbol of Sofia\'s long history. It is said that it was built on the site of a Roman temple to Minerva.',
    coordinates: { lat: 42.696508, lng: 23.331425 },
    openingHours: 'Church: Daily ~7:00-19:00. Underground Museum: Tue-Sun 10:00-18:00.',
    category: 'historic'
  },
  {
    id: '6',
    name: 'National Archaeological Museum, Bulgaria',
    description: 'Housed in a former mosque, this museum displays a rich collection of Thracian, Roman, and medieval artifacts found in Bulgaria. It provides insights into the country\'s ancient civilizations and cultural heritage. The mosque itself is an architectural gem. It is said that the mosque was chosen to house the museum to symbolize religious tolerance.',
    coordinates: { lat: 42.696331, lng: 23.324564 },
    openingHours: 'Seasonal hours. Summer (May-Oct): Daily 10:00-18:00. Winter (Nov-Apr): Tue-Sun 10:00-17:00.',
    freeEntryInfo: 'Free entry last Sunday of the month.',
    category: 'museum'
  },
  {
    id: '7',
    name: 'Ivan Vazov National Theatre',
    description: 'Bulgaria\'s oldest and most prestigious national theater, a major landmark with stunning neoclassical architecture. Named after a famous Bulgarian writer, it continues to host performances of drama, opera, and ballet. It is said that its foundation stone was laid with soil from all over Bulgaria.',
    coordinates: { lat: 42.694167, lng: 23.326389 },
    openingHours: 'Open for performances (evenings). Box Office: Tue-Sun ~11:00-19:00. Check site.',
    category: 'cultural'
  },
  {
    id: '8',
    name: 'Central Sofia Market Hall',
    description: 'A historic covered market with beautiful Neo-Renaissance architecture, offering a variety of local products, including fresh produce, meats, cheeses, and souvenirs. It\'s a great place to experience the local culture and cuisine. It is said that it was built on the site of a former Turkish bath.',
    coordinates: { lat: 42.7, lng: 23.321667 },
    openingHours: 'Daily 7:00/7:30 - 22:00.',
    category: 'local_market'
  },
  {
    id: '9',
    name: 'Banya Bashi Mosque',
    description: 'A 16th-century Ottoman mosque, the only active mosque in Sofia, known for its architectural significance and historical importance. It was built over natural thermal springs, hence its name ("banya bashi" means "bath head"). It is said that the water from the springs has healing properties.',
    coordinates: { lat: 42.699444, lng: 23.3225 },
    openingHours: 'Open daily for prayers. Visiting hours for non-Muslims outside prayer times (approx. 9:00-sunset).',
    category: 'religious'
  },
  {
    id: '10',
    name: 'Sofia Synagogue',
    description: 'The largest synagogue in Southeastern Europe, with impressive Moorish Revival architecture. Built in the early 20th century, it stands as a testament to the historical Jewish community in Sofia. Its ornate interior is worth a visit. It is said that it was built on the site of two earlier synagogues.',
    coordinates: { lat: 42.7, lng: 23.321111 },
    openingHours: 'Mon-Fri: ~9:00 - 16:30 (check for midday closure). Closed Sat/Sun & Jewish holidays.',
    category: 'religious'
  }
];
