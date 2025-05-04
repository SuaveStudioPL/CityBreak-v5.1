import { Attraction } from '../../../types/attractions';

export const alicanteAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Santa Bárbara Castle',
    description: 'A monumental fortress perched on Mount Benacantil, standing 166 meters above the city. Built by Muslims in the 9th century and later expanded by Christian rulers, it offers breathtaking panoramic views of Alicante and the Mediterranean. From the beach, the mountain profile resembles a face known as "the face of the Moor." The castle has witnessed numerous historic events, from medieval sieges to housing prisoners during the Spanish Civil War, making it both a strategic fortification and an emblem of the city\'s resilience.',
    coordinates: { lat: 38.34889, lng: -0.47806 },
    openingHours: 'October-March: 10:00-20:00, April-September: 10:00-22:00. Access via elevator (small fee) or by foot (free). Last lift 60 minutes before closing.',
    freeEntryInfo: 'Free entry to the castle grounds. Elevator service has a charge. EU citizens can enter for free with ID.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Explanada de España',
    description: 'A stunning promenade that runs parallel to the port, featuring a distinctive wave-patterned marble mosaic floor composed of over 6.5 million tiles in red, black, and cream colors. Flanked by rows of swaying palm trees providing welcome shade, this iconic esplanade has become the social heart of Alicante. Originally built in the 1920s, it stretches nearly 600 meters from Puerta del Mar to Canalejas Park. During evenings, especially in summer, the area comes alive with street performances, craft markets, and outdoor concerts.',
    coordinates: { lat: 38.344002, lng: -0.481495 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Explanada_de_Espa%C3%B1a.jpg/250px-Explanada_de_Espa%C3%B1a.jpg']
  },
  {
    id: '3',
    name: 'Alicante Museum of Contemporary Art',
    description: 'Housed in Alicante\'s oldest civil building, the 17th century Casa de la Asegurada, this museum showcases impressive 20th-century art collections. It was established in 1976 thanks to artist Eusebio Sempere who donated his personal collection to the city. The museum exhibits works by masters such as Picasso, Dalí, Miró, and Chillida. In 2004, after extensive renovation that brilliantly merged historical architecture with modern design, it won the European Museum of the Year Award, establishing itself as a must-visit cultural landmark in the region.',
    coordinates: { lat: 38.346250, lng: -0.479694 },
    openingHours: 'Tue-Sat: 10:00-20:00, Sun/Holidays: 10:00-14:00. Closed Mondays and certain holidays. Check official site for details.',
    freeEntryInfo: 'Free entry on Sundays, May 18 (International Museum Day), and October 9 (Valencian Community Day).',
    category: 'museum'
  },
  {
    id: '4',
    name: 'Concatedral de San Nicolás, Alicante',
    description: 'This imposing co-cathedral, designed by student of Juan de Herrera, was built between 1613 and 1662 over a former mosque. Its sober exterior conceals a magnificent interior featuring a Latin cross plan, a stunning blue dome rising 45 meters above the crossing, and an exquisite Communion Chapel considered one of Spain\'s baroque masterpieces. Elevated to cathedral status in 1959 by Pope John XXIII, it shares its episcopal seat with Orihuela Cathedral. The blend of Renaissance sobriety and baroque opulence makes it architecturally unique in the region.',
    coordinates: { lat: 38.345417, lng: -0.48250 },
    openingHours: 'Mon-Sat: 10:00-13:00 and 17:30-20:00, Sun/Holidays: for services only. Services hours may vary.',
    category: 'historic'
  },
  {
    id: '5',
    name: 'Tabarca',
    description: 'The smallest permanently inhabited island in Spain and the Valencian Community\'s largest isle, located about 22km from Alicante. Originally named "Isla de San Pablo" (St. Paul\'s Island), it was renamed in 1760 when King Charles III settled Genoese families rescued from the Tunisian island of Tabarka. A fortified village was built to protect against pirates. Today, the island is surrounded by a marine reserve established in 1986, the first in Spain, known for its crystal-clear waters and posidonia seagrass meadows. A day trip offers historical exploration and pristine swimming spots.',
    coordinates: { lat: 38.16639, lng: -0.48222 },
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Basilica of Santa Maria, Alicante',
    description: 'The oldest active church in Alicante, built in Valencian Gothic style between the 14th and 16th centuries over the remains of a mosque. Its striking architecture features a single nave with six side chapels located between the buttresses. The church was elevated to the rank of Basilica by the Holy See in 2007, recognizing its historical and religious significance. Located near the foot of Mount Benacantil in the old town, it serves as an important witness to the city\'s religious history and architectural evolution through the centuries.',
    coordinates: { lat: 38.346167, lng: -0.479306 },
    openingHours: 'Mon-Sat: 10:00-13:00 and 17:30-20:00, Sun: for worship services only. Times may vary during religious festivals.',
    category: 'historic'
  },
  {
    id: '7',
    name: 'Playa del Postiguet',
    description: 'A stunning urban beach stretching 800 meters along Alicante\'s shore, right in the heart of the city and at the foot of Santa Bárbara Castle. Its golden sand, clear waters, and accessibility have earned it the prestigious Blue Flag certification for water quality and services. Originally a fishermen\'s beach, it transformed in the early 20th century into a fashionable bathing spot. Connected to the city by the Explanada de España promenade, the beach offers comprehensive facilities including lifeguard services, accessibility for people with disabilities, sports areas, and beachside chiringuitos (bars).',
    coordinates: { lat: 38.346091, lng: -0.476489 },
    category: 'park',
    imageUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMGFKC4cvpWvs8cVfxySG0iKV4JIUT66Fhw&s']
  },
  {
    id: '8',
    name: 'Barrio de Santa Cruz',
    description: 'The picturesque old quarter of Alicante located on the slopes of Mount Benacantil beneath Santa Bárbara Castle. This labyrinthine neighborhood is characterized by narrow, steep streets and brightly colored houses adorned with flowerpots and decorative tiles. It was traditionally home to fishermen and craftsmen. Today, its winding pedestrian alleys, hidden plazas, and whitewashed houses create a charming atmosphere that transports visitors back in time. It\'s especially magical during Holy Week when processions wind through its narrow streets, offering a glimpse into Alicante\'s cultural traditions.',
    coordinates: { lat: 38.3496, lng: -0.4793 },
    category: 'historic',
    imageUrls: ['https://img.freepik.com/free-photo/blue-pots-red-geraniums_181624-15559.jpg?ga=GA1.1.1445324977.1745853443&semt=ais_hybrid&w=740']
  },
  {
    id: '9',
    name: 'Archaeological Museum of Alicante',
    description: 'A cutting-edge archaeological museum housed in the restored San Juan de Dios Hospital, winning the European Museum of the Year Award in 2004. MARQ, as it\'s locally known, revolutionizes the museum experience by presenting archaeology through innovative audiovisual and interactive displays across six rooms: Prehistory, Iberians, Romans, Middle Ages, Modern Era, and Field Archaeology. The museum manages important archaeological sites including La Illeta dels Banyets and Tossal de Manises. Its dynamic approach to archaeology has positioned it as one of Spain\'s most celebrated and visited museums.',
    coordinates: { lat: 38.353750, lng: -0.476389 },
    openingHours: 'Tue-Fri: 10:00-19:00, Sat: 10:00-20:30, Sun/Holidays: 10:00-14:00. Closed on Mondays. Last admission 1 hour before closing.',
    freeEntryInfo: 'Free entry on Sundays, May 18 (International Museum Day), and special cultural celebration dates.',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Mercat Central d\'Alacant',
    description: 'An iconic market housed in an eclectic-style building with characteristic Valencian Modernist ornaments, constructed between 1915-1921. The market preserves the traditional Mediterranean spirit of fresh, local produce with nearly 300 vendors offering everything from seafood caught the same morning to regional fruits, vegetables, meats, and specialty foods. The building itself is architecturally significant with a basilica-like structure and a spectacular dome. Extensively renovated in 2007, the market balances historic charm with modern facilities and has become both a commercial hub and a social gathering place for locals.',
    coordinates: { lat: 38.3480, lng: -0.4860 },
    openingHours: 'Mon-Fri: 7:00-14:30, Sat: 7:00-15:00. Closed Sundays.',
    category: 'landmark',
    imageUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsu5zQhv-y0K6hULyFOnuipjIZEGH361MJvQ&s']
  },
  {
    id: '11',
    name: 'Parc El Palmerar',
    description: 'A lush oasis on the city\'s southern edge, this botanical park is home to over 7,000 palm trees, creating a verdant escape from urban life. Designed in the late 20th century, the park features picturesque ponds, wooden bridges, waterfalls, and Mediterranean gardens. Beyond its natural beauty, El Palmeral offers recreational facilities including a BMX track, children\'s play areas, and sports courts. The park pays homage to the region\'s historic connection to palm cultivation, which dates back to Moorish times when palms were valued for dates, shade, and materials. It\'s particularly enchanting when illuminated at night.',
    coordinates: { lat: 38.322142, lng: -0.513679},
    openingHours: 'Winter: 9:00-22:00, Summer: 9:00-24:00. Open daily.',
    category: 'park',
    imageUrls: ['https://img.freepik.com/free-photo/bench-palm-tress-public-park-covered-with-sand-storm-calima-tenerife-spain_1217-1912.jpg?ga=GA1.1.1445324977.1745853443&semt=ais_hybrid&w=740']
  },
  {
    id: '12',
    name: 'Castillo de San Fernando',
    description: 'A 19th-century fortress constructed on Tossal hill during the Peninsular War against Napoleon\'s forces. Built in 1813 to complement the city\'s defenses, it was named in honor of King Ferdinand VII. Unlike the older Santa Bárbara Castle, San Fernando was designed following modern military architecture with a focus on artillery emplacements. Though never seeing major military action, the fortress has been preserved as an important historical monument. Today, after extensive restoration, it serves as a green space and viewpoint offering panoramic vistas of the city, port, and surrounding mountains.',
    coordinates: { lat: 38.3530, lng: -0.4895 },
    openingHours: 'Open daily, dawn to dusk.',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/d/da/Castillo_de_San_Fernando%2C_Alicante_-2.jpg']
  },
  {
    id: '13',
    name: 'El Portón',
    description: 'One of Alicante\'s most enchanting hidden treasures, this small square with its characteristic blue gate is nestled in the heart of the Old Town. The name "El Portón" (The Large Gate) refers to the emblematic blue wooden entrance that frames this intimate space. Surrounded by whitewashed buildings adorned with colorful flowerpots, it represents the authentic essence of Mediterranean architecture. Historically, the square served as a gathering place for local artisans. Today, it attracts photographers and visitors seeking to capture the quintessential charm of traditional Alicante away from the bustling tourist areas.',
    coordinates: { lat: 38.3466, lng: -0.4812 },
    category: 'landmark',
    imageUrls: ['https://img.freepik.com/free-photo/top-view-port-alicante_1398-4593.jpg?ga=GA1.1.1445324977.1745853443&w=740']
  }
];
