import { Attraction } from '../../../types/attractions';


export const cadizAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Cádiz Cathedral',
    description: 'A striking blend of Baroque and Neoclassical styles, Cádiz Cathedral dominates the skyline with its golden dome. Its construction spanned over a century, leading to its mixed architectural appearance. Climb the Poniente Tower for panoramic city and sea views. Located by the Atlantic, it\'s a central landmark and a testament to the city\'s historical wealth as a trading port.',
    coordinates: { lat: 36.52917, lng: -6.29361 },
    openingHours: 'Daily, hours vary for church, museum, and tower. Check official website for precise times and ticket info.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'La Caleta, Spain',
    description: 'Nestled between the castles of Santa Catalina and San Sebastián, La Caleta is Cádiz\'s most iconic urban beach. Historically the city\'s port, it\'s a beloved spot for locals and visitors, offering beautiful sunset views. Its picturesque location was a filming site for movies like \'Die Another Day\' (standing in for Cuba). A perfect place to relax and enjoy the sea within the old city walls.',
    coordinates: { lat: 36.529221, lng: -6.306092 },
    openingHours: 'Always open.',
    category: 'park', // Beaches often categorized similarly to parks for recreational space
  },
  {
    id: '3',
    name: 'El Pópulo',
    description: 'Cadiz\'s oldest neighborhood, dating back to the 14th century. Enter through one of its medieval gates like Arco del Pópulo. This district is built over the ancient Roman city and contains the Roman Theatre. Wander its labyrinthine streets, discovering hidden squares and a charming, historic atmosphere that evokes centuries of history. It\'s the heart of the city\'s ancient past.',
    coordinates: { lat: 36.5289, lng: -6.2930 }, // Approximate central point near Roman Theatre
    openingHours: 'Always open.',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/30.12.2021_-_C%C3%A1diz_im_Morgenlicht._07.jpg/250px-30.12.2021_-_C%C3%A1diz_im_Morgenlicht._07.jpg']
  },
  {
    id: '4',
    name: 'Torre Tavira',
    description: 'As the tallest watchtower in Cadiz\'s Old Town, Torre Tavira offers unparalleled 360-degree views. It was the official lookout tower for the port in the 18th century. Its main attraction is the Camera Obscura, a optical device projecting a live, moving image of the city onto a concave screen inside a darkened room. A unique and fascinating way to see Cadiz.',
    coordinates: { lat: 36.531975, lng: -6.298448 },
    openingHours: 'Daily, hours vary seasonally (typically 10:00-18:00 or later). Check official website for current times and tour schedules.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Torre_Tavira%2C_C%C3%A1diz.jpg/500px-Torre_Tavira%2C_C%C3%A1diz.jpg?20100821084109']
  },
  {
    id: '5',
    name: 'Parque Genovés',
    description: 'Cadiz\'s principal park, Parque Genovés is a stunning botanical garden located along the sea wall. It features a formal design with tree-lined avenues, exotic plant species from around the world, and sculptures. Highlights include the \'Children\'s Corner\' with its impressive waterfall and pond. It offers a peaceful, green escape with lovely views of the Atlantic, perfect for a leisurely stroll.',
    coordinates: { lat: 36.536, lng: -6.304 },
    openingHours: 'Daily, typically opens early and closes at night. Check local information for exact closing times.',
    category: 'park'
  },
  {
    id: '6',
    name: 'Castle of Santa Catalina, Cádiz',
    description: 'A 17th-century fortress notable for its star shape, located at one end of La Caleta beach. Built to defend the city after a 1596 attack, it offers ramparts to walk along with views of the sea and the beach. Today, it serves as a cultural space hosting art exhibitions and events, blending history with contemporary culture.',
    coordinates: { lat: 36.532978, lng: -6.307874 },
    openingHours: 'Hours vary seasonally and depending on exhibitions (typically Tue-Sun, closes afternoon/evening). Check official site.',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Castillo_de_Santa_Catalina%2C_C%C3%A1diz.jpg/960px-Castillo_de_Santa_Catalina%2C_C%C3%A1diz.jpg?20090514142733']
  },
  {
    id: '7',
    name: 'Castle of San Sebastián',
    description: 'Located on a small island reached by a picturesque causeway from La Caleta beach, this fortress dates back to the 18th century, built upon earlier structures. Legend says a temple to Kronos once stood here. The causeway offers beautiful walks, especially at sunset. The castle itself provides historical insights and great views back towards the city.',
    coordinates: { lat: 36.52778, lng: -6.31583 },
    openingHours: 'Causeway is always open. Access to the interior castle grounds may be limited or for special events only. Check local information.',
    category: 'historic'
  },
  {
    id: '8',
    name: 'Roman Theatre (Cádiz)',
    description: 'One of the oldest and largest Roman theatres in Spain, hidden for centuries until its discovery in 1980. Located partly beneath the El Pópulo district, remnants of its seating tiers and stage area are visible. A visitor centre explains its history and significance. It offers a fascinating glimpse into the city\'s Roman past, dating back to the 1st century BC.',
    coordinates: { lat: 36.5283, lng: -6.2937 },
    openingHours: 'Typically open Tue-Sat 10:00-17:30/18:30, Sun 10:00-14:00. Closed Mon. Hours can vary, check official site.',
    category: 'historic'
  },
  {
    id: '9',
    name: 'Museum of Cádiz',
    description: 'Located in Plaza de Mina, this museum houses diverse collections covering archaeology (including rare Phoenician sarcophagi), fine arts with notable works by Zurbarán, and ethnography. It offers a comprehensive journey through the history and culture of Cadiz and its province, from ancient times to the present day. A key cultural institution in the city.',
    coordinates: { lat: 36.534936, lng: -6.296389 },
    openingHours: 'Typically Tue-Sat 9:00-20:30, Sun/Holidays 9:00-14:30. Closed Mon. Check official site for variations.',
    freeEntryInfo: 'Free entry for citizens of the European Union with ID.',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Mercado Central',
    description: 'Cadiz\'s main food market, a vibrant hub offering fresh local produce, seafood, meats, and spices. Located in a neoclassical building, it\'s a sensory experience and a great place to observe local life. Beyond shopping, the \'Rincón Gastronómico\' area offers numerous stalls selling delicious tapas and drinks, perfect for an informal lunch or snack.',
    coordinates: { lat: 36.530743, lng: -6.298140}, // Approximate center of the market location
    openingHours: 'Mon-Sat, typically 9:00-15:00/16:00 (food stalls often open later into the evening). Closed Sun. Check local information as hours can vary.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/C%C3%A1diz_Mercado_Central_and_Plaza_Libertad.jpg/500px-C%C3%A1diz_Mercado_Central_and_Plaza_Libertad.jpg?20230628160923']
  },
  {
    id: '11',
    name: 'Puerta de Tierra',
    description: 'This impressive gate served as the main entrance to the old city of Cadiz from the land side. Built in the 18th century, it\'s both a defensive structure and a grand Baroque monument. It symbolically marks the transition between the modern and historic parts of the city. You can often walk along its upper section for views.',
    coordinates: { lat: 36.526279, lng: -6.288679},
    openingHours: 'Always open for external viewing. Access to upper sections may have specific hours if open to the public.',
    category: 'historic'
  },
  {
    id: '12',
    name: 'Plaza de España (Cádiz)',
    description: 'A large, important square featuring the grand Monument to the Constitution of 1812 (La Pepa). This constitution was drafted in Cadiz during the Peninsular War and was a significant liberal document. The square is surrounded by historic buildings and is a key public space, commemorating a pivotal moment in Spanish history.',
    coordinates: { lat: 36.534849, lng: -6.293868 },
    openingHours: 'Always open.',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Plaza_de_Espa%C3%B1a%2C_Vejer_de_la_Frontera%2C_C%C3%A1diz%2C_Espa%C3%B1a%2C_2015-12-09%2C_DD_03.JPG/960px-Plaza_de_Espa%C3%B1a%2C_Vejer_de_la_Frontera%2C_C%C3%A1diz%2C_Espa%C3%B1a%2C_2015-12-09%2C_DD_03.JPG']
  },
  {
    id: '13',
    name: 'Iglesia del Oratorio de San Felipe Neri',
    description: 'This Baroque church is historically significant as the place where the Spanish Constitution of 1812 was signed. Its interior features notable artworks and architecture. Visiting this oratory connects you directly to a crucial event in Spain\'s path towards liberalism and constitutionalism, highlighting Cadiz\'s role in this history.',
    coordinates: { lat: 36.5328, lng: -6.2997 },
    openingHours: 'Hours vary, typically open for visits mornings and late afternoons (e.g., ~10:00-13:00, 18:00-20:00). Check local information.',
    category: 'historic'
  },
  {
    id: '14',
    name: 'Gran Teatro Falla',
    description: 'This stunning theatre, built in Neo-Mudéjar style with distinctive red brick and Moorish-inspired arches, is a cultural landmark. It is most famous as the main venue for the annual Cadiz Carnival official competition of chirigotas, comparsas, coros, and cuartetos. Even without attending a show, its architecture is worth admiring.',
    coordinates: { lat: 36.5337, lng: -6.3024 },
    openingHours: 'Access typically for ticketed performances or guided tours. Check their official website for schedules and booking information.',
    category: 'landmark'
  },
   {
    id: '15',
    name: 'Monument to the Constitution of 1812',
    description: 'Located in Plaza de España, this large, imposing monument commemorates the centenary of the 1812 Constitution signed in Cadiz. It features a large central column, allegorical figures representing peace, war, agriculture, and industry, and various plaques detailing the constitution\'s articles. A key symbol of Spanish liberalism and a central feature of the square, reflecting Cadiz\'s pivotal historical role.',
    coordinates: { lat: 36.52889, lng: -6.29167 },
    openingHours: 'Always open (outdoor monument).',
    category: 'historic'
  }
];