import { Attraction } from '../../../types/attractions';

export const bangkokAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Grand Palace',
    description: 'A magnificent complex of buildings serving as the official residence of the Kings of Siam since 1782. The intricate details and golden spires exemplify Thai craftsmanship. Within the palace grounds lies Wat Phra Kaew, housing Thailand\'s most revered Emerald Buddha carved from a single block of jade.',
    coordinates: { lat: 13.751389, lng: 100.491667 },
    openingHours: 'Daily 08:30-15:30 (Last entry at 15:00)',
    freeEntryInfo: 'Thai nationals free; foreigners 500 THB',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Grand_Palace_Bangkok.jpg/800px-Grand_Palace_Bangkok.jpg']
  },
  {
    id: '2',
    name: 'Wat Arun',
    description: 'Known as the Temple of Dawn, this stunning riverside temple features a distinctive 79-meter-high spire decorated with colorful porcelain and seashells. The temple\'s design represents Mount Meru, the center of the universe in Buddhist cosmology. Visitors can climb the steep steps for panoramic views of the Bangkok skyline.',
    coordinates: { lat: 13.743889, lng: 100.488611 },
    openingHours: 'Daily 08:00-18:00',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Wat_Arun_from_Chao_Phraya_River.jpg/800px-Wat_Arun_from_Chao_Phraya_River.jpg']
  },
  {
    id: '3',
    name: 'Wat Pho',
    description: 'Home to the famous 46-meter-long Reclining Buddha covered in gold leaf. One of Bangkok\'s oldest temples, established in the 16th century. The temple complex houses over 1,000 Buddha images and is considered Thailand\'s first public university, with stone inscriptions on traditional medicine and Thai massage.',
    coordinates: { lat: 13.746944, lng: 100.493056 },
    openingHours: 'Daily 08:00-18:30',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wat_Pho%2C_Bangkok%2C_Thailand.jpg/800px-Wat_Pho%2C_Bangkok%2C_Thailand.jpg']
  },
  {
    id: '4',
    name: 'Chatuchak Weekend Market',
    description: 'One of the world\'s largest weekend markets, covering 35 acres with over 8,000 stalls and attracting more than 200,000 visitors each weekend. The market is divided into 27 sections selling everything from clothing and antiques to live animals and furniture. Dating back to 1942, it began as a flea market established by Prime Minister Plaek Phibunsongkhram.',
    coordinates: { lat: 13.799722, lng: 100.550556 },
    openingHours: 'Sat-Sun 09:00-18:00, Fri 18:00-00:00 (plant section only)',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Chatuchak_Weekend_Market_in_Bangkok%2C_Thailand.jpg/800px-Chatuchak_Weekend_Market_in_Bangkok%2C_Thailand.jpg']
  },
  {
    id: '5',
    name: 'Jim Thompson House',
    description: 'A museum housing the art collection of American businessman Jim Thompson, who revitalized the Thai silk industry before his mysterious disappearance in 1967. The complex consists of six traditional Thai houses transported from various parts of Thailand and reassembled in Bangkok, constructed without a single nail.',
    coordinates: { lat: 13.749167, lng: 100.528333 },
    openingHours: 'Daily 09:00-18:00 (guided tours only)',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Main_House_of_Jim_Thompson_photo_D_Ramey_Logan.jpg/330px-Main_House_of_Jim_Thompson_photo_D_Ramey_Logan.jpg']
  },
  {
    id: '6',
    name: 'Chao Phraya River',
    description: 'The major river flowing through Bangkok, serving as a crucial waterway for transportation and commerce for centuries. Nicknamed the "River of Kings," it has been the lifeblood of Thai civilization. River cruises offer views of historic temples, modern skyscrapers, and traditional wooden houses on stilts.',
    coordinates: { lat: 13.729722, lng: 100.493611 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chao_Phraya_River_Bangkok.jpg/800px-Chao_Phraya_River_Bangkok.jpg']
  },
  {
    id: '7',
    name: 'Lumphini Park',
    description: 'Bangkok\'s first public park, covering 142 acres in the heart of the city. Named after Buddha\'s birthplace in Nepal, it offers a green oasis amid the urban landscape. The park features a lake with paddleboats, jogging paths, and open-air gym equipment. Home to diverse wildlife including large monitor lizards.',
    coordinates: { lat: 13.732222, lng: 100.541111 },
    openingHours: 'Daily 04:30-21:00',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Aerial_view_of_Lumphini_Park.jpg/330px-Aerial_view_of_Lumphini_Park.jpg']
  },
  {
    id: '8',
    name: 'Chinatown, Bangkok',
    description: 'One of the world\'s largest and most authentic Chinatowns, established in 1782 when Chinese merchants moved from the area that became the Grand Palace. A labyrinth of narrow alleys filled with gold shops, medicine stores, temples, and street food. The main road, Yaowarat, transforms into a food haven after sunset.',
    coordinates: { lat: 13.739722, lng: 100.508333 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Yaowarat_at_night_%2832455695783%29.jpg/330px-Yaowarat_at_night_%2832455695783%29.jpg']
  },
  {
    id: '9',
    name: 'MBK Center',
    description: 'A massive shopping mall with over 2,000 shops spread across eight floors, specializing in electronics, clothing, and souvenirs at negotiable prices. Opened in 1985 as Mahboonkrong, it was one of Bangkok\'s first modern shopping malls. The fourth floor houses a large food court offering Thai and international cuisine.',
    coordinates: { lat: 13.744722, lng: 100.529722 },
    openingHours: 'Daily 10:00-22:00',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/MBK_CENTER_%288%29.jpg/250px-MBK_CENTER_%288%29.jpg']
  },
  {
    id: '10',
    name: 'Khao San Road',
    description: 'Famous backpacker hub and cultural phenomenon, this 410-meter-long street transforms from a market during the day to a vibrant nightlife center after dark. Originally a rice market (khao san means "milled rice"), it evolved into a budget traveler\'s paradise in the 1980s. The street features guesthouses, bars, restaurants, and unique vendors.',
    coordinates: { lat: 13.758889, lng: 100.497778 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Khao_San_Road_at_night.jpg/800px-Khao_San_Road_at_night.jpg']
  },
  {
    id: '11',
    name: 'Bangkok National Museum',
    description: 'Thailand\'s largest museum, housed in the former 18th-century Wang Na Palace. The collection spans Thai history from prehistoric times to the Bangkok period, featuring religious artifacts, royal regalia, ceramics, and textiles. Highlights include the Buddhaisawan Chapel with its rare murals and the funeral chariot hall.',
    coordinates: { lat: 13.751944, lng: 100.491389 },
    openingHours: 'Wed-Sun 09:00-16:00',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bangkok_National_Museum.jpg/800px-Bangkok_National_Museum.jpg']
  },
  {
    id: '12',
    name: 'Wat Saket',
    description: 'A temple crowned with a 58-meter golden chedi atop an artificial hill, offering panoramic views of Bangkok after climbing 344 steps. The temple dates to the Ayutthaya period, but the hill was created in the early 19th century using soil from canal excavations. During the annual temple fair in November, the Golden Mount is decorated with red cloth.',
    coordinates: { lat: 13.753611, lng: 100.506944 },
    openingHours: 'Daily 07:30-19:00',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Golden_Mount%2C_Wat_Saket%2C_Bangkok%2C_Thailand.jpg/800px-Golden_Mount%2C_Wat_Saket%2C_Bangkok%2C_Thailand.jpg']
  }
];
