import { Attraction } from '../../../types/attractions';


export const laspalmasAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Las Palmas Cathedral',
    description: 'Also known as the Cathedral of Santa Ana, this historic church began construction in 1500 and was completed in 1570. The cathedral combines Gothic, Renaissance, and Neoclassical architectural styles. Its tower offers panoramic views of the Vegueta district, and the interior houses the Diocesan Museum of Sacred Art with religious artifacts from the 16th to 19th centuries.',
    coordinates: { lat: 28.100833, lng: -15.414722 },
    openingHours: 'Mon-Fri: 10:00-16:30, Sat: 10:00-13:30. Closed Sundays except for services.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Maspalomas Dunes',
    description: 'A protected 404-hectare natural reserve featuring spectacular sand dunes that resemble a miniature desert landscape. The dunes, formed by sand from the Sahara Desert, create a unique ecosystem with distinct zones including palm oasis, dunes, and a brackish lagoon that attracts migratory birds. The area is particularly stunning at sunset.',
    coordinates: { lat: 27.741, lng: -15.582 },
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Roque Nublo',
    description: 'An iconic 80-meter-high volcanic rock formation standing at 1,813 meters above sea level. This sacred site for ancient inhabitants is now a symbol of Gran Canaria. The surrounding area offers spectacular hiking trails with views of Teide volcano on Tenerife. The rock was formed by volcanic activity approximately 4.5 million years ago.',
    coordinates: { lat: 27.970833, lng: -15.6125 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Vegueta',
    description: 'The historic old town of Las Palmas, founded in 1478, features well-preserved Spanish colonial architecture. This UNESCO World Heritage site includes the Casa de Colón museum, where Christopher Columbus allegedly stayed, and the Museo Canario, housing important archaeological artifacts. The district\'s narrow cobblestone streets maintain their 15th-century layout.',
    coordinates: { lat: 28.098611, lng: -15.415 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Vegueta_D81_6060_View_from_Santa_Ana_church_bell_tower_%2832313549676%29.jpg/330px-Vegueta_D81_6060_View_from_Santa_Ana_church_bell_tower_%2832313549676%29.jpg']
  },
  {
    id: '5',
    name: 'Bandama Caldera',
    description: 'A massive volcanic crater with a diameter of 1,000 meters and depth of 200 meters, formed approximately 2,000 years ago. The viewpoint offers panoramic views of the crater and the eastern coast. The crater floor contains abandoned agricultural terraces and unique flora, including several endemic species found nowhere else on Earth.',
    coordinates: { lat: 28.033333, lng: -15.455556 },
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Teror',
    description: 'A picturesque town known for its religious significance and colonial architecture. The Basilica of Our Lady of the Pine, housing the patron saint of Gran Canaria, features impressive Baroque architecture. The town\'s historic center is notable for its traditional wooden balconies and Sunday market selling local products.',
    coordinates: { lat: 28.058889, lng: -15.5475 },
    openingHours: 'Basilica: Daily 8:00-20:00.',
    category: 'historic'
  },
  {
    id: '7',
    name: 'Jardín Botánico Canario Viera y Clavijo',
    description: 'The largest botanical garden in Spain, specializing in Canarian flora. Founded in 1952, it houses over 500 plant species endemic to the Canary Islands. The garden features various sections including a palm grove, water garden, and laurel forest. Its research center plays a crucial role in conserving endangered plant species.',
    coordinates: { lat: 28.0636, lng: -15.4633 },
    openingHours: 'Mon-Sun: 9:00-18:00.',
    category: 'park'
  },
  {
    id: '8',
    name: 'Playa de Las Canteras',
    description: 'A 3-kilometer urban beach in Las Palmas, protected by a natural reef called "La Barra". This golden sand beach is known for its excellent swimming conditions and marine life. The reef creates a natural swimming pool and hosts diverse marine species. The beach\'s promenade features numerous restaurants and shops.',
    coordinates: { lat: 28.14, lng: -15.436111 },
    category: 'landmark'
  },
  {
    id: '9',
    name: 'Painted Cave, Galdar',
    description: 'An archaeological museum and park featuring pre-Hispanic cave dwellings with geometric paintings. The site provides insights into the life of the indigenous Guanches people. The museum combines the original archaeological site with modern interactive exhibits explaining the island\'s aboriginal culture.',
    coordinates: { lat: 28.144009, lng: -15.655135 },
    openingHours: 'Tue-Sat: 10:00-18:00, Sun: 11:00-18:00. Closed Mondays.',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Puerto de Mogán',
    description: 'A picturesque fishing village known as "Little Venice" due to its network of canals and bridges. The town features traditional white houses adorned with bougainvillea, a modern marina, and a protected beach. Its Friday market is one of the largest on the island, attracting visitors from across Gran Canaria.',
    coordinates: { lat: 27.817778, lng: -15.765833 },
    category: 'landmark'
  },
  {
    id: '11',
    name: 'Barranco de Guayadeque',
    description: 'A dramatic ravine featuring cave houses, some still inhabited, and archaeological sites. The valley contains numerous aboriginal cave dwellings and two unique cave chapels. The area is also known for its restaurants built into the rock face, serving traditional Canarian cuisine.',
    coordinates: { lat: 27.937778, lng: -15.510278 },
    category: 'historic'
  },
  {
    id: '12',
    name: 'Arucas',
    description: 'A historic town dominated by the neo-Gothic Church of San Juan Bautista, built entirely from local blue stone. The town is famous for its rum distillery, established in 1884, offering tours and tastings. The historic center features impressive examples of modernist architecture from the early 20th century.',
    coordinates: { lat: 28.118829, lng: -15.523088 },
    openingHours: 'Church: Mon-Sat: 9:00-19:00, Sun: 8:00-13:00.',
    category: 'historic'
  }
];