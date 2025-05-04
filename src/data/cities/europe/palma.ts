import { Attraction } from '../../../types/attractions';


export const palmaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Palma Cathedral',
    description: 'An iconic 13th-century Gothic cathedral, La Seu dominates Palma\'s waterfront. It features stunning stained glass windows, including the largest rose window, and impressive vaults. Built on the site of a former mosque, its construction began after King Jaume I survived a storm. Antoni Gaudí also contributed to its interior design, adding interesting modern touches.',
    coordinates: { lat: 39.567378, lng: 2.64722 },
    openingHours: 'Mon-Sat: Hours vary seasonally (typically 10:00-17:00/18:00). Sunday: Open for worship only, no tourist visits. Check official website.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Castell de Bellver',
    description: 'A unique circular castle from the 14th century, perched on a hill overlooking Palma and the bay. It\'s one of only a few circular castles in Europe. Originally built as a royal residence and later used as a military prison, it now houses the city\'s history museum. The rooftop offers panoramic views, making it a popular spot for its history and vistas.',
    coordinates: { lat: 39.56375, lng: 2.619338 },
    openingHours: 'Tue-Sat: 10:00-18:00 (Apr-Sep), 10:00-16:00 (Oct-Mar). Sun & Holidays: 10:00-15:00. Closed Mon. Check official site.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Royal Palace of La Almudaina',
    description: 'Adjacent to the cathedral, this royal palace was originally a 10th-century Muslim fortress. It was transformed into a Gothic royal residence in the 13th century after the Christian conquest. Today, it remains one of the official residences of the King of Spain. Its architecture beautifully blends Islamic foundations with Gothic additions, reflecting Mallorca\'s diverse history.',
    coordinates: { lat: 39.5675, lng: 2.64722 },
    openingHours: 'Tue-Sun: 10:00-18:00 (Apr-Sep), 10:00-17:00 (Oct-Mar). Last admission one hour before closing. Closed Mon. Check official site.',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Es Baluard',
    description: 'Es Baluard is a prominent museum of modern and contemporary art cleverly integrated into the city\'s historic Renaissance walls. Its collection features significant works by artists linked to the Balearic Islands, including Joan Miró, Miquel Barceló, and Pablo Picasso. The museum also offers terraces with excellent views overlooking the marina and the city.',
    coordinates: { lat: 39.570833, lng: 2.641667 },
    openingHours: 'Tue-Sat: 10:00-20:00. Sun & Holidays: 10:00-15:00. Closed Monday. Check official website.',
    freeEntryInfo: 'Check official website for potential free entry days or hours.',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Parc de la Mar',
    description: 'A large urban park situated between the imposing Cathedral of Mallorca and the Mediterranean Sea. Created on reclaimed land, it features a large artificial lake with fountains, walking paths, and palm trees. It\'s a popular spot for leisurely strolls, relaxing, and enjoying spectacular views of the cathedral, especially beautiful during sunset reflecting on the water.',
    coordinates: { lat: 39.5689, lng: 2.6497 },
    openingHours: 'Always open.',
    freeEntryInfo: 'Free entry.',
    category: 'park',
    imageAuthor: 'Parc de la Mar Official', // Optional field for image author attribution
    imageUrls: ['https://img.freepik.com/free-photo/green-palm-park-their-shadows-grass_146671-18834.jpg?ga=GA1.1.1445324977.1745853443&semt=ais_hybrid&w=740']
  },
  {
    id: '6',
    name: 'Basílica de Sant Francesc',
    description: 'An impressive Gothic basilica located in the historic Sa Calatrava quarter. Dating back to the 13th century, it features a notable Baroque facade added later, a beautiful cloister, and the tomb of Ramon Llull, a famous Catalan philosopher. It stands as a significant example of medieval architecture and a key religious site in Palma.',
    coordinates: { lat: 39.5705, lng: 2.6497 },
    openingHours: 'Mon-Sat: Hours vary seasonally (typically 9:30-17:30/18:30). Sunday: Open for worship only, no tourist visits. Check official website.',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/c/cf/Mallorca_Palma_StFrancis%27_Church_asv2023-04_img1.jpg']
  },
  {
    id: '7',
    name: 'Passeig des Born',
    description: 'Palma\'s main and most elegant boulevard, lined with trees, sculptures, fountains, and historic buildings housing chic shops and cafes. This wide, tree-lined promenade has been a central gathering place for centuries and a witness to the city\'s history and social life. It\'s perfect for a leisurely stroll or enjoying a coffee.',
    coordinates: { lat: 39.5703, lng: 2.6486 },
    openingHours: 'Always open.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Born1.JPG/330px-Born1.JPG']
  },
  {
    id: '8',
    name: 'Mercat de l\'Olivar',
    description: 'Palma\'s largest and most traditional indoor market, offering a vibrant display of fresh produce, seafood, meats, cheeses, and local Mallorcan products. It\'s a lively place to experience the local culture and sample regional delicacies. Beyond the stalls, there are also popular tapas bars inside.',
    coordinates: { lat: 39.5716, lng: 2.6536 },
    openingHours: 'Mon-Sat: Typically 7:00-14:30/15:00 (main market). Some food stalls may stay open later. Closed Sun. Check local listings.',
    freeEntryInfo: 'Free entry.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mercat_de_l%27Olivar.JPG/330px-Mercat_de_l%27Olivar.JPG']
  },
  {
    id: '9',
    name: 'Plaça Major',
    description: 'Palma\'s main square, a large rectangular plaza surrounded by historic buildings with arcades, shops, and cafes. Originally the site of a convent, it became the central square in the 19th century. It serves as a popular meeting point, hosts markets and events, and is a bustling hub of city life.',
    coordinates: { lat: 39.5714, lng: 2.6506 },
    openingHours: 'Always open.',
    category: 'landmark' ,
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Palma_de_Mallorca._Plaza_Mayor.jpg/1024px-Palma_de_Mallorca._Plaza_Mayor.jpg']
  },
  {
    id: '10',
    name: 'Can Joan de s\'Aigo',
    description: 'A historic and much-loved traditional cafe, established in 1700, making it one of the oldest operating establishments in Palma. It\'s famous for its thick, rich hot chocolate paired with traditional Mallorcan pastries like \'ensaimadas\' or \'quarts\'. A charming step back in time for a sweet treat experience.',
    coordinates: { lat: 39.5717, lng: 2.6497 },
    openingHours: 'Daily: Typically 8:00 - 21:00. Hours may vary slightly, check locally.',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Can_Joan_de_s%27Aigo.jpg/330px-Can_Joan_de_s%27Aigo.jpg']
  }
];