import { Attraction } from '../../../types/attractions';

export const bariAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Basilica di San Nicola',
    description: 'A significant basilica dedicated to Saint Nicholas, a major pilgrimage site. Its crypt houses the relics of the saint. The basilica is a fine example of Apulian Romanesque architecture. History indicates it was built to house the stolen relics of Saint Nicholas in the 11th century.',
    coordinates: { lat: 41.13026, lng: 16.87028 }, // Poprawione
    openingHours: 'Generally open daily, approx. 7:30-12:30 and 16:30-19:30. Check locally for exact times.',
    category: 'religious'
  },
  {
    id: '2',
    name: 'Bari Vecchia (Old Town)',
    description: 'A maze of narrow streets and alleys, offering a glimpse into Bari\'s history and culture. Explore its churches, squares, and traditional houses. It is known for its lively atmosphere and the women making pasta by hand. Accounts suggest it has been inhabited since the Roman era.',
    coordinates: { lat: 41.1286, lng: 16.8687 }, // Poprawione
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bari_Vecchia_%2840106893452%29.jpg/1200px-Bari_Vecchia_%2840106893452%29.jpg']
  },
  {
    id: '3',
    name: 'Castello Normanno-Svevo (Bari)',
    description: 'A Norman-Swabian castle, also known as Castello Svevo, located near the coast. It has undergone several transformations over the centuries and now serves as a museum hosting temporary exhibitions and an archaeological section. History indicates it was originally built by the Normans in the 12th century and later expanded by Frederick II.',
    coordinates: { lat: 41.1267, lng: 16.8667 }, // Poprawione
    openingHours: 'Tue-Sun: 8:30 - 19:30 (last entry ~18:30). Closed Mon. Hours may vary, check official site.',
    freeEntryInfo: 'Free entry on the first Sunday of the month and other national free museum days.',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Bari Cathedral',
    description: 'Bari\'s cathedral, dedicated to Saint Sabinus, the city\'s patron saint. It is another fine example of Apulian Romanesque architecture. Its crypt also houses important relics. Information suggests it was built in the late 12th century, replacing an earlier Byzantine cathedral.',
    coordinates: { lat: 41.12853, lng: 16.86894 }, // Poprawione
    openingHours: 'Generally open daily, approx. 8:00-12:30 and 16:30-19:00. Check locally for exact times.',
    category: 'religious'
  },
  {
    id: '5',
    name: 'Lungomare Nazario Sauro',
    description: 'A scenic promenade along the Adriatic coast, offering beautiful views of the sea and the city. A popular spot for walking, jogging, and enjoying the sunset. It stretches for several kilometers. Accounts indicate it was developed in the early 20th century.',
    coordinates: { lat: 41.1220, lng: 16.8800 }, // Poprawione
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bari_-_Lungomare_Nazario_Sauro.jpg/960px-Bari_-_Lungomare_Nazario_Sauro.jpg?20231003233312']
  },
  {
    id: '6',
    name: 'Teatro Petruzzelli',
    description: 'A grand opera house, one of the largest in Italy. It has a rich history and hosts opera, ballet, and concert performances. It was destroyed by fire in 1991 and meticulously reconstructed. History suggests it was inaugurated in 1903.',
    coordinates: { lat: 41.1224, lng: 16.8689 }, // Poprawione
    openingHours: 'Open for performances and guided tours. Check official website for schedule.',
    category: 'cultural'
  },
  {
    id: '7',
    name: 'Piazza Mercantile',
    description: 'A historic square in the heart of Bari Vecchia, once the city\'s commercial center. It is surrounded by medieval buildings and is a lively meeting place. Accounts suggest it was particularly important during the medieval period.',
    coordinates: { lat: 41.1292, lng: 16.8714 }, // Poprawione
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Bari._Piazza_Mercantile.jpg/500px-Bari._Piazza_Mercantile.jpg?20190111214246']
  },
  {
    id: '8',
    name: 'Pinacoteca Provinciale di Bari',
    description: 'An art gallery housing a collection of Apulian paintings from the 11th to the 20th centuries. It offers insights into the region\'s artistic heritage. Information indicates it is located in the Palazzo della Provincia.',
    coordinates: { lat: 41.12392, lng: 16.86895 }, // Poprawione
    openingHours: 'Tue-Sat: 9:00 - 19:00, Sun: 9:00 - 13:00. Closed Mon. Last entry ~30-60 mins before close.',
    category: 'museum'
  },
  {
    id: '9',
    name: 'Museo Archeologico di Santa Scolastica',
    description: 'An archaeological museum located in a former convent, showcasing artifacts from prehistoric times to the Roman period found in Bari and the surrounding area. It provides context for the region\'s ancient history. History suggests the convent dates back to the 11th century.',
    coordinates: { lat: 41.1284, lng: 16.8664 }, // Poprawione
    openingHours: 'Tue-Sun: 9:00 - 19:00 (approx, check locally). Closed Mon.',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ingresso_Museo_archeologico_di_Santa_Scolastica.jpg/960px-Ingresso_Museo_archeologico_di_Santa_Scolastica.jpg?20210924154646']
  },
  {
    id: '10',
    name: 'Orto Botanico di Bari',
    description: 'A botanical garden belonging to the University of Bari, featuring a variety of plants from the Mediterranean region and beyond. A peaceful green space for relaxation and learning. Accounts indicate it was established in the late 18th century.',
    coordinates: { lat: 41.1083, lng: 16.8542 }, // Poprawione
    openingHours: 'Limited public access, often weekdays during university hours or by appointment. Check with University of Bari.',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Anacamptis_papilionacea_%281%29.jpg/250px-Anacamptis_papilionacea_%281%29.jpg']
  },
  {
    id: '11',
    name: 'Piazza del Ferrarese',
    description: 'A modern square located near the Old Town and the port, often used for events and gatherings. It offers views of the sea and is a lively part of the city. Information suggests it is named after a local historical figure.',
    coordinates: { lat: 41.1271, lng: 16.8717 }, // Poprawione
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Bari%2C_piazza_del_ferrarese_01.jpg/960px-Bari%2C_piazza_del_ferrarese_01.jpg?20170514215121']
  },
  {
    id: '12',
    name: 'Torre Quetta Park',
    description: 'A large park along the coast south of the city center, offering beaches, green spaces, and recreational facilities. A popular spot for families and outdoor activities. Accounts indicate it was developed relatively recently.',
    coordinates: { lat: 41.1091, lng: 16.8910 }, // Poprawione
    category: 'nature',
    imageUrls: ['https://img.freepik.com/free-photo/view-pine-urban-park_23-2148208939.jpg?ga=GA1.1.1445324977.1745853443&semt=ais_hybrid&w=740']
  },
  {
    id: '13',
    name: 'Palazzo Mincuzzi',
    description: 'An iconic early 20th-century building in Liberty style, once home to a prestigious department store. It features an impressive façade with decorative elements and a distinctive glass dome. Located in the central shopping district, it represents Bari\'s commercial growth during the early 1900s. History indicates it was completed in 1928 and designed by architect Aldo Forcignanò.',
    coordinates: { lat: 41.1218, lng: 16.8698 }, // Poprawione
    category: 'landmark'
  },
  {
    id: '14',
    name: 'Teatro Margherita',
    description: 'A historic theater built on stilts over the sea, now functioning as an art and exhibition space. Its unique location and Art Nouveau architecture make it one of Bari\'s most distinctive landmarks. Constructed in the early 20th century, it was originally accessible only by boat. Accounts indicate it was inaugurated in 1914 and named after Queen Margherita of Savoy.',
    coordinates: { lat: 41.1270, lng: 16.8732 }, // Poprawione
    openingHours: 'Opening hours depend on current exhibitions. Check locally.',
    category: 'cultural'
  }
]
