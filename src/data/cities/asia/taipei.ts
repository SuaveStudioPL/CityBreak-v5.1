import { Attraction } from '../../../types/attractions';

export const taipeiAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Taipei 101',
    description: 'A 508-meter supertall skyscraper that held the title of world\'s tallest building from 2004 to 2010. The design incorporates elements of traditional Chinese pagodas with modern engineering, including a 660-ton tuned mass damper. The tower has 101 floors (symbolizing renewal, as 100+1) and resembles a bamboo stalk. Features indoor and outdoor observatories on the 89th and 91st floors.',
    coordinates: { lat: 25.033611, lng: 121.564722 },
    openingHours: 'Observatory: Daily 09:00-22:00 (last admission 21:15)',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Taipei_101_from_afar.jpg/250px-Taipei_101_from_afar.jpg']
  },
  {
    id: '2',
    name: 'National Palace Museum',
    description: 'One of the world\'s largest collections of Chinese artifacts and artworks, housing nearly 700,000 pieces spanning 8,000 years of Chinese history. The collection originated from the Forbidden City and was moved to Taiwan in 1949. Only 1% can be displayed at any time. Famous treasures include the Jadeite Cabbage, meat-shaped stone, and Mao Gong Ding bronze vessel.',
    coordinates: { lat: 25.102222, lng: 121.548611},
    openingHours: 'Daily 08:30-18:30, extended to 21:00 on Fridays and Saturdays',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/National_Palace_Museum_amk.jpg/250px-National_Palace_Museum_amk.jpg']
  },
  {
    id: '3',
    name: 'Chiang Kai-shek Memorial Hall',
    description: 'A national monument erected in memory of Chiang Kai-shek, former President of the Republic of China. The octagonal white building with blue roof and red accents represents the Taiwanese flag colors. Features a 6.3-meter bronze statue of Chiang with hourly changing of the guard ceremony. The complex includes the National Theater, Concert Hall, and Liberty Square.',
    coordinates: { lat: 25.034444, lng: 121.521667 },
    openingHours: 'Daily 09:00-18:00',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chiang_Kai-shek_memorial_amk.jpg/250px-Chiang_Kai-shek_memorial_amk.jpg']
  },
  {
    id: '4',
    name: 'Shilin Night Market',
    description: 'Taiwan\'s largest and most famous night market, covering multiple city blocks with hundreds of food stalls, retail shops, and carnival games. Established in 1899 and relocated in 1915. Famous for delicacies like oyster omelets, stinky tofu, bubble tea, and giant fried chicken cutlets. Also offers clothing, accessories, and electronics.',
    coordinates: { lat: 25.0866, lng: 121.5254 },
    openingHours: 'Daily 16:00-00:00, with some vendors opening earlier or closing later',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Shilin_Night_Market_Taipei.jpg/250px-Shilin_Night_Market_Taipei.jpg']
  },
  {
    id: '5',
    name: 'Longshan Temple (Taipei)',
    description: 'A Buddhist temple built in 1738 by settlers from Fujian, China. Destroyed and rebuilt multiple times, notably surviving WWII bombing when the Guanyin statue remained intact. Dedicated to the Goddess of Mercy but houses over 100 deities from Buddhist, Taoist, and folk traditions. Features elaborate stone and wood carvings and painted murals.',
    coordinates: { lat: 25.037222, lng: 121.499444 },
    openingHours: 'Daily 06:00-22:00',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Longshan_Temple_Taipei.jpg/250px-Longshan_Temple_Taipei.jpg']
  },
  {
    id: '6',
    name: 'Taipei Zoo',
    description: 'The largest zoo in Asia, covering 165 hectares with more than 12,000 animals representing 377 species. Established in 1914 and relocated in 1986. Divided into themed zones including Asian Tropical Rainforest, Desert, Australian, and African Animals. Famous for giant pandas Tuan Tuan and Yuan Yuan, whose names together mean "reunion."',
    coordinates: { lat: 24.995, lng: 121.584167 },
    openingHours: 'Daily 09:00-17:00 (last entry 16:00)',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Taipei_Zoo_Entrance.jpg/250px-Taipei_Zoo_Entrance.jpg']
  },
  {
    id: '7',
    name: 'Yangmingshan National Park',
    description: 'A mountainous national park covering 113 square kilometers, famous for volcanic features, hot springs, and seasonal flower displays. Contains Taiwan\'s tallest dormant volcano, Seven Star Mountain (1,120m), with fumaroles and sulfur deposits. Each season offers distinct attractions: spring cherry blossoms, summer greenery, autumn silvergrass, and winter camellias.',
    coordinates: { lat: 25.155833, lng: 121.547778 },
    openingHours: 'Park grounds open 24 hours, visitor centers typically 09:00-17:00',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Yangmingshan_Flower_Clock.jpg/250px-Yangmingshan_Flower_Clock.jpg']
  },
  {
    id: '8',
    name: 'Beitou Hot Springs',
    description: 'A geothermal valley famous for sulfuric hot springs, developed during Japanese colonial rule (1895-1945). Features facilities from luxury spa hotels to public foot baths. Key attractions include the Hot Spring Museum (in a 1913 Japanese bathhouse), Taiwan\'s first green library, and Thermal Valley (a jade-colored spring reaching 100°C known as "Hell Valley").',
    coordinates: { lat: 25.136944, lng: 121.506389 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Beitou_Hotspring_Museum_2015.jpg/1024px-Beitou_Hotspring_Museum_2015.jpg']
  },
  {
    id: '9',
    name: 'Xiangshan, Taipei',
    description: 'A 183-meter-tall mountain offering iconic views of Taipei\'s skyline, particularly of Taipei 101. Part of the "Four Beasts Mountains" (named for shapes resembling animals). Features a 1.5km hiking trail with stone steps leading to viewing platforms. The Six Giant Rocks platform is especially popular at sunset and after dark when city lights create a spectacular panorama.',
    coordinates: { lat: 25.0269, lng: 121.5766 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Taipei_Skyline_from_Elephant_Mountain.jpg/250px-Taipei_Skyline_from_Elephant_Mountain.jpg']
  },
  {
    id: '10',
    name: 'Maokong',
    description: 'A mountainous area famous for tea plantations and teahouses offering traditional ceremonies with city views. Accessible via the 4.3km Maokong Gondola with crystal cabins featuring glass floors. A tea-growing region since the 19th century, specializing in Tieguanyin and Baozhong oolong teas. The name derives from the valley\'s resemblance to a meditating cat.',
    coordinates: { lat: 24.968, lng: 121.588 },
    openingHours: 'Gondola: Tue-Sun 09:00-21:00, closed Mondays for maintenance',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Maokong_Gondola.JPG/250px-Maokong_Gondola.JPG']
  },
  {
    id: '11',
    name: 'Huashan 1914 Creative Park',
    description: 'A former winery and distillery built in 1914, transformed into a cultural and creative industries center. After closing in 1987, it became a gathering place for underground artists before official conversion in 2005. Houses exhibition spaces, theaters, design studios, craft shops, and restaurants in renovated industrial buildings. Hosts markets, exhibitions, and cultural festivals.',
    coordinates: { lat: 25.044444, lng: 121.529444 },
    openingHours: 'Daily 09:00-22:00 (individual venues may vary)',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Huashan_1914_Creative_Park_Taipei.jpg/250px-Huashan_1914_Creative_Park_Taipei.jpg']
  },
  {
    id: '12',
    name: 'National Revolutionary Martyrs\' Shrine',
    description: 'A shrine honoring 390,000 soldiers who died during various conflicts including the Xinhai Revolution and Chinese Civil War. Built in 1969 in the style of Beijing\'s Forbidden City. The main hall contains spirit tablets of fallen soldiers, while the rear hall enshrines revolutionary martyrs including Sun Yat-sen. Features an elaborate hourly changing of the guard ceremony.',
    coordinates: { lat: 25.080458, lng: 121.532753},
    openingHours: 'Daily 09:00-17:00',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Martyrs_Shrine_in_Taipei.jpg/250px-Martyrs_Shrine_in_Taipei.jpg']
  },
  {
    id: '13',
    name: 'Ximending',
    description: 'A pedestrian shopping area often called "Taipei\'s Harajuku" for its youth culture and fashion boutiques. Developed in the 1930s as Taiwan\'s first modern pedestrian zone. Contains Taiwan\'s highest concentration of theaters and is LGBTQ+ friendly, centered around the Red House. Features street performers, graffiti art, themed cafes, and unique street food.',
    coordinates: { lat: 25.042643, lng: 121.507539 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ximending_Taipei.jpg/250px-Ximending_Taipei.jpg']
  },
  {
    id: '14',
    name: 'Taipei Fine Arts Museum',
    description: 'Taiwan\'s first museum dedicated to modern and contemporary art, established in 1983 in a distinctive white building designed by Kao Er-Pan. Houses over 5,000 works focusing on Taiwanese art from the Japanese colonial period to present. Hosts the Taipei Biennial, a major event in Asian contemporary art. Features natural lighting and a suspended corridor system resembling Chinese walkways.',
    coordinates: { lat: 25.0725, lng: 121.524722 },
    openingHours: 'Tue-Sun 09:30-17:30, Sat until 20:30, closed Mondays',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Taipei_Fine_Arts_Museum_20100101.jpg/250px-Taipei_Fine_Arts_Museum_20100101.jpg']
  }
];
