import { Attraction } from '../../../types/attractions';

export const beijingAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Forbidden City',
    description: 'The world\'s largest palace complex and China\'s most important imperial palace, serving as the home of 24 emperors during the Ming and Qing dynasties (1420-1912). The 72-hectare complex contains 980 buildings with 8,707 rooms, surrounded by a moat and wall with watchtowers. UNESCO designated it a World Heritage Site in 1987.',
    coordinates: { lat: 39.915833, lng: 116.390833 },
    openingHours: 'Tue-Sun 08:30-17:00 (Apr-Oct), 08:30-16:30 (Nov-Mar), closed Mondays',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Beijing_the_forbidden_city.JPG/250px-Beijing_the_forbidden_city.JPG']
  },
  {
    id: '2',
    name: 'Great Wall of China',
    description: 'An ancient defensive structure built across northern China to protect against nomadic invasions, with the most well-preserved sections near Beijing dating from the Ming Dynasty (1368-1644). The Badaling section is the most visited portion, while Mutianyu offers a less crowded alternative with restored watchtowers and mountain scenery.',
    coordinates: { lat: 40.431908, lng: 116.570374 }, // Badaling section
    openingHours: 'Daily 07:30-17:30 (Apr-Oct), 08:00-17:00 (Nov-Mar) for Badaling section',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/250px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg']
  },
  {
    id: '3',
    name: 'Temple of Heaven',
    description: 'An imperial complex of religious buildings where emperors performed rituals for good harvests. The Hall of Prayer for Good Harvests features a three-tiered circular structure built entirely of wood without nails, symbolizing the connection between Earth and Heaven. The complex is surrounded by a park where locals practice tai chi.',
    coordinates: { lat: 39.8822, lng: 116.4066 },
    openingHours: 'Park: Daily 06:00-22:00, Historical buildings: 08:00-17:30 (Apr-Oct), 08:00-17:00 (Nov-Mar)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Temple_of_Heaven%2C_Beijing%2C_China_-_panoramio_%2812%29.jpg/250px-Temple_of_Heaven%2C_Beijing%2C_China_-_panoramio_%2812%29.jpg']
  },
  {
    id: '4',
    name: 'Summer Palace',
    description: 'A vast ensemble of lakes, gardens, and palaces covering 2.9 square kilometers. Originally built in 1750, it was rebuilt by Empress Dowager Cixi after being destroyed in 1860. Features include the 728-meter Long Corridor decorated with paintings, the Marble Boat pavilion, and the 17-Arch Bridge.',
    coordinates: { lat: 39.9975, lng: 116.2689 },
    openingHours: 'Daily 06:30-20:00 (Apr-Oct), 07:00-19:00 (Nov-Mar)',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Beijing_Summer_Palace_Boat.JPG/250px-Beijing_Summer_Palace_Boat.JPG']
  },
  {
    id: '5',
    name: 'Tiananmen Square',
    description: 'The world\'s largest public square, covering 440,000 square meters and capable of holding one million people. Named after the Tiananmen (Gate of Heavenly Peace) at its north end. The square contains the Monument to the People\'s Heroes, the Great Hall of the People, the National Museum, and Mao\'s Mausoleum.',
    coordinates: { lat: 39.903333, lng: 116.391667 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Tiananmen_Square_Beijing.jpg/250px-Tiananmen_Square_Beijing.jpg']
  },
  {
    id: '6',
    name: 'Yonghe Temple',
    description: 'The most renowned Tibetan Buddhist temple outside Tibet, built in 1694 and converted into a lamasery in 1722. Its most impressive treasure is an 18-meter-tall statue of Maitreya Buddha carved from a single piece of white sandalwood. The temple combines Han Chinese and Tibetan architectural styles.',
    coordinates: { lat: 39.946944, lng: 116.411111 },
    openingHours: 'Daily 09:00-16:30',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Yonghe_Temple_Beijing.jpg/250px-Yonghe_Temple_Beijing.jpg']
  },
  {
    id: '7',
    name: 'Hutong',
    description: 'Ancient narrow alleyways formed by lines of traditional courtyard residences (siheyuan), representing Old Beijing\'s historical urban fabric. These neighborhoods date back to the Yuan Dynasty (13th century) and feature gray-brick buildings with carved wooden doors. Protected areas like Nanluoguxiang preserve the traditional lifestyle.',
    coordinates: { lat: 39.936919, lng: 116.403874 }, // Nanluoguxiang area
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Beijing_hutong_tour.jpg/250px-Beijing_hutong_tour.jpg']
  },
  {
    id: '8',
    name: 'Beijing Zoo',
    description: 'China\'s largest zoo, covering 89 hectares with more than 14,500 animals representing over 950 species. Founded in 1906 as an imperial garden, it was China\'s first public zoo. Famous for its giant panda house and rare Chinese species like South China tigers and golden monkeys.',
    coordinates: { lat: 39.938611, lng: 116.333333 },
    openingHours: 'Daily 07:30-18:00 (Apr-Oct), 07:30-17:00 (Nov-Mar)',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_at_the_Beijing_Zoo.JPG/250px-Giant_Panda_at_the_Beijing_Zoo.JPG']
  },
  {
    id: '9',
    name: 'National Museum of China',
    description: 'The world\'s largest museum by exhibition space, covering 192,000 square meters with 48 exhibition halls containing over one million artifacts. The collection spans Chinese history from Yuanmou Man (1.7 million years ago) to the end of the Qing Dynasty, with treasures including rare bronzes, jade artifacts, and ancient ceramics.',
    coordinates: { lat: 39.903611, lng: 116.395 },
    openingHours: 'Tue-Sun 09:00-17:00 (last entry 16:00), closed Mondays',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/National_Museum_of_China_2014.jpg/250px-National_Museum_of_China_2014.jpg']
  },
  {
    id: '10',
    name: 'Beihai Park',
    description: 'One of China\'s oldest imperial gardens dating back over 1,000 years, covering 69 hectares with a large lake. Its centerpiece is Jade Flower Island with the White Dagoba, a 40-meter-high Tibetan-style stupa built in 1651. The park exemplifies classical Chinese garden design with artificial hills and pavilions.',
    coordinates: { lat: 39.924444, lng: 116.383056 },
    openingHours: 'Daily 06:30-21:00 (Apr-Oct), 06:30-20:00 (Nov-Mar)',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Beihai_Park_Beijing_White_Pagoda.jpg/250px-Beihai_Park_Beijing_White_Pagoda.jpg']
  },
  {
    id: '11',
    name: 'Ming Tombs',
    description: 'A complex of mausoleums where 13 of the 16 Ming Dynasty emperors are buried, spread across 40 square kilometers. The site is accessed via the 7-kilometer Sacred Way, lined with statues of guardian animals and officials. Only three tombs are open to the public: Changling, Dingling, and Zhaoling.',
    coordinates: { lat: 40.253333, lng: 116.2175 },
    openingHours: 'Daily 08:00-17:30 (Apr-Oct), 08:30-17:00 (Nov-Mar)',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ming_Tombs_Spirit_Way.jpg/250px-Ming_Tombs_Spirit_Way.jpg']
  },
  {
    id: '12',
    name: 'Wangfujing Street',
    description: 'Beijing\'s most famous shopping street, dating back 700 years to the Ming Dynasty when it housed aristocratic estates. The 1.5-kilometer pedestrian street features shopping malls, traditional stores, and the Wangfujing Snack Street offering exotic foods alongside traditional Beijing snacks.',
    coordinates: { lat: 39.911156, lng: 116.405275 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Wangfujing_Street_in_Beijing.jpg/250px-Wangfujing_Street_in_Beijing.jpg']
  }
];
