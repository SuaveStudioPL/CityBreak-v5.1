import { Attraction } from '../../../types/attractions';

export const osakaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Osaka Castle',
    description: 'Historic castle from 1583 built by Toyotomi Hideyoshi, with the current structure being a 1931 concrete reconstruction. Features a museum, stone walls, and moats spanning 15 acres. Fun fact: Some of the castle\'s stone walls contain massive rocks weighing over 100 tons, transported from quarries over 100km away without modern machinery.',
    coordinates: { lat: 34.687222, lng: 135.525833 },
    openingHours: 'Castle Tower: 09:00-17:00 (last entry 16:30), Park: 24 hours',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Osaka_Castle_Nishinomaru_Garden_April_2005.JPG/250px-Osaka_Castle_Nishinomaru_Garden_April_2005.JPG']
  },
  {
    id: '2',
    name: 'Dotonbori',
    description: 'Vibrant entertainment district along the Dotonbori canal with neon signs, including the iconic Glico Running Man. Originally a theater district from the 1600s, now known for restaurants and street food. Fun fact: The district embodies the Osakan philosophy of "kuidaore" meaning "eat until you drop" or "spend until you\'re broke on food."',
    coordinates: { lat: 34.668708, lng: 135.501308 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Osaka_Dotonbori_district_at_night.jpg/250px-Osaka_Dotonbori_district_at_night.jpg']
  },
  {
    id: '3',
    name: 'Universal Studios Japan',
    description: 'First Universal Studios in Asia (2001), attracting 14 million visitors annually. Features eight themed areas including Harry Potter, Super Nintendo World, and Minions. Fun fact: The park uniquely incorporates Japanese pop culture with attractions based on anime like One Piece and Demon Slayer not found at other Universal parks.',
    coordinates: { lat: 34.664722, lng: 135.433056 },
    openingHours: 'Varies seasonally, typically 09:00-19:00 with extended hours during peak periods',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Universal_Studios_Japan_entrance.jpg/250px-Universal_Studios_Japan_entrance.jpg']
  },
  {
    id: '4',
    name: 'Shitennoji Temple',
    description: 'Japan\'s oldest officially administered temple, founded in 593 CE by Prince Shotoku. Current buildings are 1960s reconstructions maintaining the original 6th-century design. Fun fact: The temple has been destroyed and rebuilt 5 times over its history, yet always preserves the exact same layout from the original 6th-century design.',
    coordinates: { lat: 34.6539, lng: 135.51645 },
    openingHours: 'Outer grounds: 08:00-16:00, Inner grounds: 08:00-16:00 (requires paid admission)',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Shitennoji_Temple_Osaka_Japan.jpg/250px-Shitennoji_Temple_Osaka_Japan.jpg']
  },
  {
    id: '5',
    name: 'Osaka Aquarium Kaiyukan',
    description: 'One of the world\'s largest aquariums with a 9-meter-deep central Pacific Ocean tank. Designed around the "Ring of Fire" concept with 14 exhibit tanks in a spiral path. Fun fact: The aquarium\'s whale sharks eat 10kg of food daily and are fed using a special pole-feeding technique developed specifically for their care.',
    coordinates: { lat: 34.654472, lng: 135.428889 },
    openingHours: 'Daily 10:00-20:00 (last entry 19:00)',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Osaka_Aquarium_Kaiyukan_2.jpg/250px-Osaka_Aquarium_Kaiyukan_2.jpg']
  },
  {
    id: '6',
    name: 'Kuromon Ichiba Market',
    description: '600-meter covered food market with 170 shops, nicknamed "Osaka\'s Kitchen." Established 190+ years ago and named after a black temple gate. Fun fact: The market was originally wholesale-only for professional chefs, but opened to the public in the 1990s, and many stalls are still run by the same families for generations.',
    coordinates: { lat: 34.665889, lng: 135.506028 },
    openingHours: 'Most shops 09:00-18:00, varies by establishment',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Osaka_Kuromon_Ichiba_Market_2017-12_%282%29.jpg/500px-Osaka_Kuromon_Ichiba_Market_2017-12_%282%29.jpg?20180118123631']
  },
  {
    id: '7',
    name: 'Umeda Sky Building',
    description: '173-meter landmark with two towers connected by the "Floating Garden Observatory." Features exposed escalators crossing between towers at the 35th floor. Fun fact: The building was designed to resemble a space gate, with its twin towers representing the past and future of Osaka, connected by the observatory symbolizing a time tunnel.',
    coordinates: { lat: 34.705278, lng: 135.489722 },
    openingHours: 'Observatory: 09:30-22:30 (last entry 22:00)',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Umeda_Sky_Building_Osaka_Japan.jpg/250px-Umeda_Sky_Building_Osaka_Japan.jpg']
  },
  {
    id: '8',
    name: 'Sumiyoshi Taisha',
    description: 'One of Japan\'s oldest Shinto shrines (3rd century), head of 2,000+ Sumiyoshi shrines nationwide. Features distinctive straight-roof architecture and a steep arched "drum bridge." Fun fact: The shrine\'s architecture predates Chinese and Buddhist influence on Japanese design, representing one of the purest forms of indigenous Japanese architecture.',
    coordinates: { lat: 34.612797, lng: 135.492942 },
    openingHours: 'Grounds: 24 hours, Main Hall: 06:00-17:00',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sumiyoshi-taisha_by_Arashiyama.jpg/250px-Sumiyoshi-taisha_by_Arashiyama.jpg']
  },
  {
    id: '9',
    name: 'Tennōji Zoo',
    description: 'Urban park featuring Japan\'s third oldest zoo (1915), botanical garden, and art museum. The 11-hectare zoo houses 1,000 animals from 200 species. Fun fact: The park\'s Keitakuen Garden was designed by master landscape architect Jihei Ogawa, who created many of Japan\'s most famous gardens for imperial and noble families.',
    coordinates: { lat: 34.652556, lng: 135.508496},
    openingHours: 'Park: 09:30-17:00, Zoo: 09:30-17:00 (closed Mondays)',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tennoji_Zoo_Osaka_Japan.jpg/250px-Tennoji_Zoo_Osaka_Japan.jpg']
  },
  {
    id: '10',
    name: 'Shinsekai',
    description: 'Retro district from 1912 with northern half modeled after Paris and southern half after Coney Island. Centered around 103-meter Tsutenkaku Tower. Fun fact: The area was once known as "the most dangerous in Japan" but has transformed into a tourist attraction while maintaining its gritty, nostalgic Showa-era atmosphere.',
    coordinates: { lat: 34.652222, lng: 135.506111 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Shinsekai_Osaka_Japan.jpg/250px-Shinsekai_Osaka_Japan.jpg']
  },
  {
    id: '11',
    name: 'Abeno Harukas',
    description: 'Japan\'s tallest skyscraper (300m) with department store, museum, hotel, offices, and observatory. Designed with a stepped façade reducing wind resistance. Fun fact: The building\'s name "Harukas" means "to brighten" or "to clear up" in ancient Japanese, referring to its height that reaches into clear skies above Osaka\'s smog.',
    coordinates: { lat: 34.646, lng: 135.513389 },
    openingHours: 'Observatory: 09:00-22:00 (last entry 21:30)',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Abeno_Harukas_Osaka_Japan.jpg/250px-Abeno_Harukas_Osaka_Japan.jpg']
  },
  {
    id: '12',
    name: 'Amerikamura',
    description: 'Youth culture district nicknamed "Amemura," known for American-inspired fashion and counterculture. Emerged in the 1970s and features a small Statue of Liberty replica in Triangle Park. Fun fact: Many Japanese fashion trends that later became global phenomena, like Decora and Visual Kei styles, originated in this district.',
    coordinates: { lat: 34.672086, lng: 135.49796},
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Amerikamura_Osaka_Japan.jpg/250px-Amerikamura_Osaka_Japan.jpg']
  }
];
