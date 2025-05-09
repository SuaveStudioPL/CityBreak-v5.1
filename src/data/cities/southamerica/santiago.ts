import { Attraction } from '../../../types/attractions';

export const santiagoAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Plaza de Armas',
    description: 'The main square of Santiago and the heart of the city\'s historic center. Founded in 1541 during the Spanish colonization, it\'s surrounded by important buildings including the Metropolitan Cathedral, Central Post Office, and National History Museum. The plaza features palm trees, gardens, and the central "Freedom of Latin America" monument made of Carrara marble. It serves as a vibrant gathering place for locals and visitors alike.',
    coordinates: { lat: -33.43791, lng: -70.65036 },
    category: 'historic',
    imageUrls: ['']
  },
  {
    id: '2',
    name: 'La Moneda Palace',
    description: 'The seat of the President of Chile and a neoclassical architectural masterpiece. Built in 1784-1805 as a colonial mint, it became the presidential residence in 1845. The palace gained historical significance during the 1973 military coup when it was bombed. Today, visitors can watch the changing of the guard ceremony and explore the Cultural Center in the plaza below. Its elegant white façade and courtyards represent an important symbol of Chilean democracy.',
    coordinates: { lat: -33.443018, lng: -70.653870 },
    category: 'historic',
    openingHours: 'Tours available Mon-Fri with prior reservation.',
    imageUrls: ['']
  },
  {
    id: '3',
    name: 'Cerro San Cristóbal',
    description: 'A prominent hill rising 850 meters above Santiago, offering spectacular panoramic views of the city and the Andes Mountains. The summit features a 22-meter statue of the Virgin Mary, a sanctuary, and beautiful gardens. Visitors can reach the top via funicular railway, cable car, or hiking trails. The hill is part of Metropolitan Park, the largest urban park in Chile, and provides a peaceful escape from the bustling city below.',
    coordinates: { lat: -33.425278, lng: -70.631667 },
    category: 'nature',
    openingHours: 'Park: Daily 8:30-19:00, hours may vary seasonally.',
    imageUrls: ['']
  },
  {
    id: '4',
    name: 'Metropolitan Cathedral of Santiago',
    description: 'The principal Catholic church of Santiago, located on the western side of Plaza de Armas. The current neoclassical structure, completed in 1800, is the fifth church built on this site since 1541. Its impressive façade, designed by Joaquín Toesca, features ornate towers and a grand entrance. The interior houses beautiful altars, religious artwork, and the tombs of important Chilean figures. As the seat of the Archdiocese of Santiago, it remains an important religious and cultural landmark.',
    coordinates: { lat: -33.437778, lng: -70.651111 },
    category: 'religious',
    openingHours: 'Daily 7:00-20:00, times may vary for services.',
    imageUrls: ['']
  },
  {
    id: '5',
    name: 'Gran Torre Costanera',
    description: 'The tallest observation deck in Latin America, located on the 61st and 62nd floors of the Gran Torre Santiago skyscraper. Rising 300 meters above the city, it offers breathtaking 360-degree views of Santiago and the surrounding Andes Mountains. The modern glass-enclosed viewing platform provides unobstructed vistas day and night, making it a perfect spot to appreciate the vast expanse of the metropolitan area and the natural beauty that surrounds it.',
    coordinates: { lat: -33.416944, lng: -70.606667 },
    openingHours: 'Mon-Sun 10:00-22:00 (last entry 21:00).',
    category: 'landmark',
    imageUrls: ['']
  },
  {
    id: '6',
    name: 'Museo Chileno de Arte Precolombino',
    description: 'A world-class museum housing one of the most important collections of pre-Columbian art in Latin America. Located in a beautifully restored colonial building, it displays over 5,000 artifacts from ancient cultures of Chile and the Americas, including textiles, ceramics, and metalwork. The exhibits span 10,000 years of indigenous history, from the Mapuche and Inca to Mesoamerican civilizations. Its thoughtful curation provides insight into the artistic achievements of pre-Hispanic peoples.',
    coordinates: { lat: -33.439167, lng: -70.652222 },
    openingHours: 'Tue-Sun 10:00-18:00, closed Mondays.',
    freeEntryInfo: 'Free entry on first Sunday of each month.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '7',
    name: 'Mercado Central de Santiago',
    description: 'A historic and vibrant market housed in an ornate wrought-iron building dating from 1872. Famous for its fresh seafood restaurants and stalls selling a wide variety of Chilean fish and shellfish. The bustling atmosphere, colorful displays, and traditional eateries make it a cultural institution and culinary destination. Located near the Mapocho River, it\'s considered one of the best seafood markets in the world and offers an authentic glimpse into Chilean cuisine and daily life.',
    coordinates: { lat: -33.433611, lng: -70.651111 },
    openingHours: 'Daily 6:00-17:00, restaurants often open until later.',
    category: 'market',
    imageUrls: ['']
  },
  {
    id: '8',
    name: 'Quinta Normal Park',
    description: 'A historic urban park established in 1841, spanning 36 hectares in the heart of Santiago. Originally designed as an agricultural experimental station, it now houses several important museums, including the Natural History Museum and the Railway Museum. The park features a lake with rowboats, walking paths, and century-old trees. It serves as a cultural and recreational space for families and visitors seeking a green retreat within the city.',
    coordinates: { lat: -33.440714, lng: -70.682597 },
    openingHours: 'Daily 6:00-20:00.',
    category: 'park',
    imageUrls: ['']
  },
  {
    id: '9',
    name: 'Cerro Santa Lucía',
    description: 'A small hill in the center of Santiago with significant historical importance as the site where the city was founded in 1541. Transformed in the 1870s into an elegant park with ornate facades, stairways, fountains, and viewpoints. The hill features the Neptune Fountain, the Caupolicán Plaza, and the Hidalgo Castle at its summit. Its winding paths and terraces offer beautiful views of downtown Santiago, making it a romantic and picturesque urban oasis.',
    coordinates: { lat: -33.440278, lng: -70.644444 },
    openingHours: 'Daily 9:00-19:00.',
    category: 'park',
    imageUrls: ['']
  },
  {
    id: '10',
    name: 'Parque Bicentenario',
    description: 'A modern urban park opened in 2011 to commemorate Chile\'s bicentennial. Located in the Vitacura district, it spans 30 hectares along the Mapocho River. The park features artificial lagoons with flamingos and black-necked swans, extensive green spaces, playgrounds, and walking paths. Its contemporary landscape design includes native Chilean plants and trees. Popular for picnics, outdoor activities, and relaxation, it represents Santiago\'s commitment to creating quality public spaces.',
    coordinates: { lat: -33.380556, lng: -70.601667 },
    openingHours: 'Daily 8:00-20:00 (summer), 8:00-19:00 (winter).',
    category: 'park',
    imageUrls: ['']
  }
]
