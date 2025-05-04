import { Attraction } from '../../../types/attractions';

export const kyotoAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Kinkaku-ji (Temple of the Golden Pavilion)',
    description: 'A Zen Buddhist temple with top two floors covered in gold leaf. Originally built in 1397 as a shogun\'s villa, the current structure is a 1955 reconstruction. Each floor represents a different architectural style: shinden, samurai, and zen. The pavilion\'s reflection creates perfect symmetry in Mirror Pond.',
    coordinates: { lat: 35.0395, lng: 135.7285 },
    openingHours: 'Daily 09:00-17:00',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG/250px-Kinkaku-ji_the_Golden_Temple_in_Kyoto_overlooking_the_lake_-_high_rez.JPG']
  },
  {
    id: '2',
    name: 'Fushimi Inari Taisha',
    description: 'Head shrine of Inari (god of rice and prosperity) established in 711 CE. Famous for thousands of vermilion torii gates forming tunnels along mountain trails. Each gate is donated by a business or individual seeking prosperity, with the donor\'s name inscribed on the back.',
    coordinates: { lat: 34.967222, lng: 135.772778 },
    openingHours: 'Always open, main buildings 09:00-17:00',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Fushimi_Inari_Shrine_Kyoto_Japan.jpg/250px-Fushimi_Inari_Shrine_Kyoto_Japan.jpg']
  },
  {
    id: '3',
    name: 'Kiyomizu-dera',
    description: 'UNESCO site founded in 778 CE, famous for its wooden stage extending 13m from the main hall, supported by pillars without nails. Named "Pure Water Temple" for its waterfall with three streams said to provide longevity, education success, and love. Visitors traditionally choose only one stream to drink from.',
    coordinates: { lat: 34.995, lng: 135.785 },
    openingHours: 'Daily 06:00-18:00 (extended hours during special night illuminations)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Kiyomizu-dera_in_Kyoto-r.jpg/250px-Kiyomizu-dera_in_Kyoto-r.jpg']
  },
  {
    id: '4',
    name: 'Bamboo Forest (Kyoto, Japan)',
    description: 'Natural pathway lined with towering bamboo stalks creating an otherworldly atmosphere. Best experienced early morning or on windy days when the bamboo creaks. Fun fact: The Japanese government designated this forest as a protected "soundscape," recognizing the unique audio experience of wind moving through bamboo as cultural heritage worth preserving.',
    coordinates: { lat: 35.009465, lng: 135.666772 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Arashiyama_Bamboo_Grove_Kyoto_Japan.jpg/250px-Arashiyama_Bamboo_Grove_Kyoto_Japan.jpg']
  },
  {
    id: '5',
    name: 'Gion District',
    description: 'Kyoto\'s famous geisha district with preserved wooden townhouses and traditional teahouses. Centers around Hanami-koji Street where geiko (Kyoto\'s geisha) and maiko (apprentices) entertain clients. Fun fact: Becoming a geiko requires at least 5 years of training in traditional arts, and there are fewer than 200 working geiko in Kyoto today.',
    coordinates: { lat: 35.003496, lng: 135.775051 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Kyoto_Gion_Shinbashi_01.jpg/250px-Kyoto_Gion_Shinbashi_01.jpg']
  },
  {
    id: '6',
    name: 'Nijō Castle',
    description: 'Flatland castle built in 1603 as the Kyoto residence of the first Edo shogun. Famous for "nightingale floors" that intentionally squeak to detect intruders. Features two rings of fortifications and elaborate gold-leaf paintings. Fun fact: The castle\'s security system included hidden rooms for bodyguards and secret escape passages for the shogun.',
    coordinates: { lat: 35.014167, lng: 135.748333 },
    openingHours: 'Tue-Sun 08:45-17:00 (last entry 16:00), closed Mondays in winter',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kyoto_Nijo_Castle_Ninomaru_Palace.jpg/250px-Kyoto_Nijo_Castle_Ninomaru_Palace.jpg']
  },
  {
    id: '7',
    name: 'Philosopher\'s Path',
    description: 'A 2km stone path along a canal lined with cherry trees, named after philosopher Nishida Kitaro who used it for daily meditation. Runs between Silver Pavilion and Nanzen-ji temples. Fun fact: The path was nearly destroyed in the 1960s when the city planned to convert the canal into a road, but local residents successfully protested to preserve it.',
    coordinates: { lat: 35.025128, lng: 135.796167 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Philosopher%27s_Walk_Kyoto_Japan.jpg/250px-Philosopher%27s_Walk_Kyoto_Japan.jpg']
  },
  {
    id: '8',
    name: 'Ginkaku-ji',
    description: 'Zen temple built in 1482 as a shogun\'s retirement villa inspired by his grandfather\'s Golden Pavilion. Despite its name, it was never covered in silver. Features meticulously maintained sand gardens including the "Sea of Silver Sand" with a cone representing Mount Fuji. Fun fact: The temple\'s design influenced Japan\'s wabi-sabi aesthetic tradition.',
    coordinates: { lat: 35.026667, lng: 135.798333 },
    openingHours: 'Daily 08:30-17:00 (Mar-Nov), 09:00-16:30 (Dec-Feb)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Ginkaku-ji_2004-09-21.jpg/250px-Ginkaku-ji_2004-09-21.jpg']
  },
  {
    id: '9',
    name: 'Ryōan-ji',
    description: 'Zen temple with Japan\'s most famous rock garden from the 15th century. Features 15 rocks arranged on white gravel, designed so one rock is always hidden from any viewpoint. Fun fact: This design embodies the Zen concept that complete enlightenment is impossible, as you can never see all 15 rocks simultaneously regardless of where you stand.',
    coordinates: { lat: 35.034444, lng: 135.718333 },
    openingHours: 'Daily 08:00-17:00 (Mar-Nov), 08:30-16:30 (Dec-Feb)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kyoto-Ryoan-Ji_MG_4512.jpg/250px-Kyoto-Ryoan-Ji_MG_4512.jpg']
  },
  {
    id: '10',
    name: 'Kyoto Imperial Palace',
    description: 'Former imperial residence before the capital moved to Tokyo in 1869. Current palace dates from 1855, sitting in an open park unlike Tokyo\'s moated imperial palace. Features traditional architecture with raised floors and sliding doors. Fun fact: Until 2016, visitors could only enter with advance permission and guided tours, often requiring applications months ahead.',
    coordinates: { lat: 35.025556, lng: 135.764167 },
    openingHours: 'Tue-Sun 09:00-16:00 (last entry 15:30), closed Mondays',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Kyoto_Imperial_Palace_-_Shishinden.jpg/250px-Kyoto_Imperial_Palace_-_Shishinden.jpg']
  },
  {
    id: '11',
    name: 'Nishiki Market',
    description: 'Five-block shopping street with 100+ shops, known as "Kyoto\'s Kitchen" for fresh food and cookware. Many stores specialize in a single item with roots going back generations. Fun fact: The market began as a fish wholesale district in the 1600s, and many current shop owners are the 15th or 16th generation running their family businesses.',
    coordinates: { lat: 35.005028, lng: 135.766139 },
    openingHours: 'Most shops 09:00-18:00, varies by establishment, some closed Wednesdays',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Nishiki_Market_Kyoto_Japan.jpg/250px-Nishiki_Market_Kyoto_Japan.jpg']
  },
  {
    id: '12',
    name: 'Sanjūsangen-dō',
    description: 'Buddhist temple famous for its 120m-long hall housing 1,001 statues of Kannon, the goddess of mercy. Features a main seated statue flanked by 1,000 standing figures in 10 rows. Fun fact: Each statue has 42 arms, which mathematically equals 42,000 arms total, believed sufficient to save all beings in Buddhist cosmology.',
    coordinates: { lat: 34.987778, lng: 135.771667 },
    openingHours: 'Daily 08:00-17:00 (Apr-Nov), 09:00-16:00 (Dec-Mar)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kyoto_Sanjusangen-do06n4272.jpg/250px-Kyoto_Sanjusangen-do06n4272.jpg']
  },
  {
    id: '13',
    name: 'Tofuku-ji',
    description: 'Major Zen temple founded in 1236, famous for autumn colors viewed from Tsutenkyo Bridge spanning a valley of maples. Includes Japan\'s oldest Zen meditation hall. Fun fact: The temple once had a 13th-century bathroom facility that could accommodate 100 monks simultaneously, an engineering marvel of its time.',
    coordinates: { lat: 34.97705, lng: 135.774094 },
    openingHours: 'Daily 09:00-16:00, gardens require separate admission',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tofuku-ji_Hojo_and_garden_Kyoto_Japan.jpg/250px-Tofuku-ji_Hojo_and_garden_Kyoto_Japan.jpg']
  },
  {
    id: '14',
    name: 'Pontocho Alley',
    description: 'Narrow lantern-lit alley along the Kamogawa River with traditional restaurants and teahouses. Features kawayuka (riverside dining terraces) in summer. Fun fact: The area has strict preservation rules prohibiting visible electrical wires, vending machines, and modern signage to maintain its Edo-period appearance.',
    coordinates: { lat: 35.007969, lng: 135.771111 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pontocho_Kyoto_Japan.jpg/250px-Pontocho_Kyoto_Japan.jpg']
  }
];
