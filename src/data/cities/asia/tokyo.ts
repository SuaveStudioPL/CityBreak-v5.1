import { Attraction } from '../../../types/attractions';

export const tokyoAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Tokyo Skytree',
    description: 'The world\'s tallest freestanding broadcasting tower at 634 meters, offering panoramic views from two observation decks. The height can be read as "Musashi," the historic name of the region. Design incorporates traditional Japanese elements, with a central column inspired by ancient pagodas. Colors are "Skytree White" and "Asakusa Blue."',
    coordinates: { lat: 35.710063, lng: 139.810700 },
    openingHours: 'Daily 10:00-21:00 (last entry 20:00)',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tokyo_Skytree_2014_%E2%85%A2.jpg/250px-Tokyo_Skytree_2014_%E2%85%A2.jpg']
  },
  {
    id: '2',
    name: 'Senso-ji',
    description: 'Tokyo\'s oldest Buddhist temple, founded in 645 CE to house a statue of Kannon that, according to legend, was found in the Sumida River by fishermen. The approach, Nakamise-dori, is a 250-meter shopping street providing souvenirs for centuries. Rebuilt after WWII as a symbol of rebirth. Features a massive 700kg red lantern at the Thunder Gate.',
    coordinates: { lat: 35.714765, lng: 139.796655 },
    openingHours: 'Temple grounds: 24 hours, Main hall: 06:00-17:00 (Oct-Mar until 16:30)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sensoji_Temple_Asakusa_Tokyo_Japan.JPG/250px-Sensoji_Temple_Asakusa_Tokyo_Japan.JPG']
  },
  {
    id: '3',
    name: 'Meiji Shrine',
    description: 'A Shinto shrine dedicated to Emperor Meiji and Empress Shoken, completed in 1920 and surrounded by a 70-hectare forest of 120,000 trees donated from across Japan. Features massive torii gates made from 1,500-year-old cypress trees. Rebuilt in 1958 after WWII destruction. Attracts 3 million visitors during the first three days of New Year.',
    coordinates: { lat: 35.676404, lng: 139.699756 },
    openingHours: 'Sunrise to sunset (hours vary seasonally)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Meiji_Shrine_Tokyo_Japan.JPG/250px-Meiji_Shrine_Tokyo_Japan.JPG']
  },
  {
    id: '4',
    name: 'Tokyo Tower',
    description: 'A 333-meter communications tower inspired by the Eiffel Tower but painted in white and orange for air safety. Completed in 1958 as a symbol of Japan\'s post-war rebirth, it was the country\'s tallest structure until 2010. Uses 28,000 liters of paint every five years and features seasonal illuminations. Appears frequently in Japanese media.',
    coordinates: { lat: 35.658581, lng: 139.745438 },
    openingHours: 'Daily 09:00-23:00 (last entry 22:30)',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Tokyo_Tower_at_night_2.jpg/250px-Tokyo_Tower_at_night_2.jpg']
  },
  {
    id: '5',
    name: 'Shibuya Crossing',
    description: 'The world\'s busiest pedestrian intersection, where up to 3,000 people cross at once in a multi-directional flow known as "the Scramble." Surrounded by video screens and neon advertisements, epitomizing Tokyo\'s urban energy. Featured in films like "Lost in Translation." Nearby stands the famous Hachiko statue, a popular meeting point.',
    coordinates: { lat: 35.659513, lng: 139.700364 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Shibuya_Crossing%2C_Tokyo%2C_Japan_%282018%29.jpg/250px-Shibuya_Crossing%2C_Tokyo%2C_Japan_%282018%29.jpg']
  },
  {
    id: '6',
    name: 'Shinjuku Gyoen National Garden',
    description: 'A 58.3-hectare park blending three garden styles: French Formal, English Landscape, and traditional Japanese. Originally a feudal lord\'s residence, later an imperial garden before opening to the public after WWII. Houses over 20,000 trees including 1,500 cherry trees of 65 varieties. Features ponds, bridges, and teahouses.',
    coordinates: { lat: 35.685175, lng: 139.710049 },
    openingHours: 'Tue-Sun 09:00-16:30 (closed Mondays unless Monday is a national holiday)',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Shinjuku_Gyoen_National_Garden_-_sakura_3.JPG/250px-Shinjuku_Gyoen_National_Garden_-_sakura_3.JPG']
  },
  {
    id: '7',
    name: 'Tsukiji Outer Market',
    description: 'A bustling food district that remains after the relocation of the famous wholesale fish market to Toyosu in 2018. Features over 400 shops and restaurants specializing in fresh seafood, produce, kitchen tools, and Japanese cuisine. Many establishments have been run by the same families for generations. Early morning visitors can observe master chefs preparing sushi.',
    coordinates: { lat: 35.665498, lng: 139.770668 },
    openingHours: 'Most shops 05:00-14:00, varies by establishment, many closed Sundays and holidays',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tsukiji_fish_market_in_Tokyo.JPG/250px-Tsukiji_fish_market_in_Tokyo.JPG']
  },
  {
    id: '8',
    name: 'Ueno Park',
    description: 'A spacious public park established in 1873 as Japan\'s first Western-style park. Home to major museums including the Tokyo National Museum and the National Museum of Western Art (a UNESCO site). Features Shinobazu Pond with lotus flowers, Bentendo Temple on an island, and Japan\'s oldest zoo. During cherry blossom season, 800+ trees attract thousands of visitors.',
    coordinates: { lat: 35.715408, lng: 139.773163 },
    openingHours: 'Park: 24 hours, Museums and attractions have individual hours',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Shinobazu_Pond_Ueno_Park_Tokyo_Japan.JPG/250px-Shinobazu_Pond_Ueno_Park_Tokyo_Japan.JPG']
  },
  {
    id: '9',
    name: 'Akihabara',
    description: 'A district famous for electronics shops and otaku (geek) culture. Originally a post-WWII black market for electronic goods before embracing pop culture in the 1990s. Features multi-story electronics stores, anime merchandise shops, maid cafes where costumed waitresses treat customers as masters of a private home, and capsule toy stores. On Sundays, streets become pedestrian-only.',
    coordinates: { lat: 35.698333, lng: 139.773056 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Akihabara_Electric_Town_2010.jpg/250px-Akihabara_Electric_Town_2010.jpg']
  },
  {
    id: '10',
    name: 'Tokyo National Museum',
    description: 'Japan\'s oldest and largest museum, established in 1872, housing over 110,000 items including 87 National Treasures. The collection spans Japanese art from prehistoric times to the 19th century, plus Asian art from the Silk Road. Consists of six buildings in Ueno Park, with the main Honkan building in Imperial Crown Style, blending Western and Japanese elements.',
    coordinates: { lat: 35.718971, lng: 139.776125 },
    openingHours: 'Tue-Sun 09:30-17:00 (Fri-Sat until 21:00), closed Mondays',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tokyo_National_Museum%2C_Honkan_2010.jpg/250px-Tokyo_National_Museum%2C_Honkan_2010.jpg']
  },
  {
    id: '11',
    name: 'Harajuku',
    description: 'A district famous for youth culture and fashion trends, centered around Takeshita Street with trendy boutiques, crepe stands, and kawaii (cute) culture. Contrasts with the adjacent serene Meiji Shrine. On weekends, young people showcase elaborate street fashion. Gained international attention through Gwen Stefani\'s "Harajuku Girls" and influences global fashion trends.',
    coordinates: { lat: 35.6685, lng: 139.7054 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Takeshita_Street_01.jpg/250px-Takeshita_Street_01.jpg']
  },
  {
    id: '12',
    name: 'Imperial Palace',
    description: 'The primary residence of Japan\'s Emperor, built on the site of the old Edo Castle. Surrounded by stone walls and moats within a large park. While inner grounds are generally closed, the East Gardens are open year-round with traditional landscapes and castle ruins. The iconic Double Bridge is a popular photo spot. Inner grounds open on January 2 and the Emperor\'s birthday.',
    coordinates: { lat: 35.685175, lng: 139.752778 },
    openingHours: 'East Gardens: 09:00-16:30 (Mar-Apr, Sep-Oct until 17:00), closed Mondays and Fridays',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Nijubashi_01.jpg/250px-Nijubashi_01.jpg']
  },
  {
    id: '13',
    name: 'Odaiba',
    description: 'A futuristic entertainment district on artificial islands in Tokyo Bay, originally defensive forts from the 1850s. Features distinctive architecture including the Fuji TV Building with titanium sphere and a 115-meter Ferris wheel. Attractions include teamLab digital art museum, Miraikan science museum, and a life-sized moving Gundam robot.',
    coordinates: { lat: 35.625165, lng: 139.775364 },
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Odaiba_Beach_-_Tokyo%2C_Japan_-_DSC05631.jpg/250px-Odaiba_Beach_-_Tokyo%2C_Japan_-_DSC05631.jpg']
  },
  {
    id: '14',
    name: 'Ghibli Museum',
    description: 'A whimsical museum showcasing Studio Ghibli\'s work, designed by Hayao Miyazaki himself. Resembles a European house with elements from his films, including a rooftop garden with the robot from "Castle in the Sky." Features an exclusive short film, life-sized animation workspace recreations, and interactive exhibits. The motto "Let\'s lose our way, together" encourages free exploration.',
    coordinates: { lat: 35.696794, lng: 139.570666 },
    openingHours: 'Wed-Mon 10:00-18:00, closed Tuesdays. Advance tickets required.',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ghibli_museum_mitaka_japan.jpg/250px-Ghibli_museum_mitaka_japan.jpg']
  }
];
