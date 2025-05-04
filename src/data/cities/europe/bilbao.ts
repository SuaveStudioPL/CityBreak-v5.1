import { Attraction } from '../../../types/attractions';

export const bilbaoAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Guggenheim Museum Bilbao',
    description: 'A world-renowned museum of modern and contemporary art, designed by Frank Gehry. Its titanium-clad, sculptural architecture is as impressive as the art it houses, including permanent installations like Richard Serra\'s "The Matter of Time" and Jeff Koons\' "Puppy". A symbol of Bilbao\'s transformation.',
    coordinates: { lat: 43.268606, lng:  -2.934286 },
    openingHours: 'Tue-Sun: 10:00 - 19:00. Closed Mon (except specific dates). Check official website.',
    category: 'museum'
  },
  {
    id: '2',
    name: 'Casco Viejo',
    description: 'Bilbao\'s historic heart, a charming district with narrow streets, traditional shops, and lively bars. Explore the Siete Calles (Seven Streets) and visit the Santiago Cathedral. It offers a taste of authentic Basque culture. History suggests it was founded in the early 14th century.',
    coordinates: { lat: 43.257222, lng: -2.923889 },
    category: 'historic'
  },
  {
    id: '3',
    name: 'Puente de Vizcaya',
    description: 'A unique transporter bridge that links Portugalete and Getxo, across the Nervión River. A UNESCO World Heritage site and an icon of the industrial revolution. Experience crossing on the hanging gondola. Accounts indicate it was the first bridge of its kind in the world.',
    coordinates: { lat: 43.323056, lng: -3.016944 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Bilbao Fine Arts Museum',
    description: 'A museum housing an important collection of Basque, Spanish, and European art, spanning from the 12th century to the present day. It features works by El Greco, Goya, and Van Dyck. It provides a comprehensive overview of art history. It is said to be one of the best art museums in Spain.',
    coordinates: { lat: 43.265278, lng: -2.938056 },
    openingHours: 'Mon, Wed-Sat: 10:00 - 20:00. Sun: 10:00 - 15:00. Closed Tue. (Note: May be affected by ongoing renovations).',
    freeEntryInfo: 'Free entry daily 18:00 - 20:00 (except Sun).',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Mercado de la Ribera',
    description: 'One of the largest covered markets in Europe, located on the banks of the Nervión River. It offers a wide variety of fresh produce, seafood, meats, and local products, as well as pintxos bars. A vibrant place to experience Bilbao\'s gastronomy. Evidence suggests markets have existed on this site for centuries.',
    coordinates: { lat: 43.2555, lng: -2.9242 },
    openingHours: 'Market Stalls: Mon-Sat ~8:00-14:30 (approx). Gastrobars/Restaurants: Longer hours, including Sun. Check locally.',
    category: 'local_market'
  },
  {
    id: '6',
    name: 'Plaza Nueva, Bilbao',
    description: 'A neoclassical square in the heart of the Casco Viejo, surrounded by arcaded buildings housing bars and restaurants. A popular spot for socializing and enjoying pintxos. It hosts various events and festivals. It is said to have been inspired by the Plaza Mayor in Madrid.',
    coordinates: { lat: 43.2591, lng:  -2.9227 },
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Bilbao Cathedral',
    description: 'A Gothic cathedral in the Casco Viejo, dedicated to the apostle Saint James. It is an important stop on the Camino de Santiago pilgrimage route. Its history dates back to the 14th century. Accounts indicate it was originally a smaller church.',
    coordinates: { lat: 43.2569, lng: -2.9242 },
    openingHours: 'Generally open daily 10:00 - 20:00/21:00. Visits restricted during mass. Check locally.',
    freeEntryInfo: 'Entry generally free, but ticket may be required for cloister/museum access.',
    category: 'religious'
  },
  {
    id: '8',
    name: 'Teatro Arriaga',
    description: 'A beautiful Neo-Baroque theatre, one of Bilbao\'s most iconic buildings. It hosts a variety of performances, including opera, ballet, and theatre. It is named after the composer Juan Crisóstomo de Arriaga. It is said to have been directly inspired by the Paris Opera.',
    coordinates: { lat: 43.259444, lng: -2.925 },
    openingHours: 'Open for performances (usually evenings) and guided tours (typically Sat/Sun mornings). Check official website for schedule.',
    category: 'cultural'
  },
  {
    id: '9',
    name: 'Funicular de Artxanda',
    description: 'A funicular railway that climbs Artxanda Mountain, offering panoramic views of Bilbao and its surroundings. At the top, there are parks and recreational facilities. A great way to see the city from above. Reports indicate it has been operating since 1915.',
    coordinates: { lat: 43.270919, lng: -2.922914 },
    openingHours: 'Runs daily, every 15 mins. Mon-Sat: ~7:15 - 22:00. Sun/Holidays: ~8:15 - 22:00 (later in summer). Check official website.',
    category: 'attraction'
  },
  {
    id: '10',
    name: 'Estadio San Mamés',
    description: 'The home stadium of Athletic Bilbao, known as "La Catedral" (The Cathedral). Even if you\'re not a football fan, the modern architecture is impressive. Tours of the stadium and museum are available. It is considered one of the most atmospheric football stadiums in Spain.',
    coordinates: { lat: 43.2635, lng: -2.9499 },
    openingHours: 'Museum/Tour hours vary seasonally and affected by match days. Check official website. Generally Tue-Sun 10:00-19:00/20:00 (earlier close Sun). Closed Mon.',
    category: 'attraction'
  },
  {
    id: '11',
    name: 'Parque de Doña Casilda de Iturrizar',
    description: 'Bilbao\'s most emblematic park, offering green spaces, a pond, fountains, and sculptures. A peaceful retreat in the city center. It is a popular spot for families and picnics. It is said to be named after a benefactor of the city.',
    coordinates: { lat: 43.265833, lng: -2.941111 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bilbao_-_Parque_de_Do%C3%B1a_Casilda_Iturr%C3%ADzar_01.jpg/330px-Bilbao_-_Parque_de_Do%C3%B1a_Casilda_Iturr%C3%ADzar_01.jpg']
  }
];
