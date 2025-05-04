import { Attraction } from '../../../types/attractions';

export const hongkongAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Victoria Peak',
    description: 'The highest point on Hong Kong Island (552m) with panoramic views of the skyline and harbor. Reached via the Peak Tram funicular railway operating since 1888. Features the wok-shaped Peak Tower with shops and viewing terraces. Fun fact: Until 1947, only Europeans were permitted to live at the Peak except for domestic workers.',
    coordinates: { lat: 22.275556, lng: 114.143889 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Hong_Kong_Night_Skyline_non-HDR.jpg/250px-Hong_Kong_Night_Skyline_non-HDR.jpg']
  },
  {
    id: '2',
    name: 'Victoria Harbour',
    description: 'Natural deep-water harbor between Hong Kong Island and Kowloon Peninsula, famous for its dramatic skyline. Home to the Symphony of Lights show and historic Star Ferry (operating since 1888). Fun fact: Land reclamation has reduced the harbor\'s width from 2,300m in 1841 to just 910m today.',
    coordinates: { lat: 22.287753, lng: 114.173619 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Hong_Kong_Night_Skyline.jpg/250px-Hong_Kong_Night_Skyline.jpg']
  },
  {
    id: '3',
    name: 'Tian Tan Buddha',
    description: 'A 34-meter bronze Buddha statue on Lantau Island, completed in 1993. Reached by climbing 268 steps, it faces north toward mainland China. Weighs 250 tons and was built from 202 bronze pieces. Fun fact: The Buddha\'s right hand is raised to remove affliction, while the left rests on his lap in a gesture of giving.',
    coordinates: { lat: 22.254106, lng: 113.905144 },
    openingHours: 'Daily 10:00-17:30',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tian_Tan_Buddha_by_Beria.jpg/250px-Tian_Tan_Buddha_by_Beria.jpg']
  },
  {
    id: '4',
    name: 'Temple Street Night Market',
    description: 'A vibrant 600-meter night market famous for street food, merchandise, and fortune tellers. Named after Tin Hau Temple at its center. Features hundreds of stalls selling everything from electronics to souvenirs. Fun fact: The market\'s Yau Ma Tei section sometimes hosts impromptu Cantonese opera performances by local artists.',
    coordinates: { lat: 22.30589, lng: 114.16987 },
    openingHours: 'Daily 18:00-00:00 (most active 19:00-22:00)',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Temple_Street_Night_Market_2012.JPG/250px-Temple_Street_Night_Market_2012.JPG']
  },
  {
    id: '5',
    name: 'Hong Kong Disneyland',
    description: 'First Disney park in China (2005), featuring seven themed areas on Lantau Island. Unique attractions include Mystic Manor, which uses a trackless system and avoids supernatural elements to respect Chinese beliefs. Fun fact: The park was designed with feng shui principles, including a shifted main entrance for prosperity.',
    coordinates: { lat: 22.313333, lng: 114.043333 },
    openingHours: 'Varies seasonally, typically 10:00-20:00',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Hong_Kong_Disneyland_Castle_of_Magical_Dreams.jpg/250px-Hong_Kong_Disneyland_Castle_of_Magical_Dreams.jpg']
  },
  {
    id: '6',
    name: 'Wong Tai Sin Temple (Hong Kong)',
    description: 'Taoist temple established in 1921, famous for granting wishes made at its main altar. Honors Wong Tai Sin, a shepherd who became a deity through healing powers. Uniquely combines three religions: Taoism, Buddhism, and Confucianism. Fun fact: During Chinese New Year, thousands queue from before midnight to make the first prayer of the year.',
    coordinates: { lat: 22.342572, lng: 114.193649 },
    openingHours: 'Daily 07:00-17:30',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Wong_Tai_Sin_Temple_2017.jpg/250px-Wong_Tai_Sin_Temple_2017.jpg']
  },
  {
    id: '7',
    name: 'Tsim Sha Tsui Promenade',
    description: 'Waterfront promenade from Tsim Sha Tsui Clock Tower to Hung Hom with spectacular skyline views. Features the Avenue of Stars with handprints of Hong Kong film stars including Bruce Lee. Fun fact: The promenade\'s Avenue of Stars was redesigned in 2019 with sustainable materials and smart lighting that reduces energy use by 70%.',
    coordinates: { lat: 22.293889, lng: 114.169444 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tsim_Sha_Tsui_Promenade_201508.jpg/1024px-Tsim_Sha_Tsui_Promenade_201508.jpg']
  },
  {
    id: '8',
    name: 'Lan Kwai Fong',
    description: 'Hong Kong\'s premier nightlife district in Central with over 90 restaurants and bars. Transformed from a hawker area in the 1970s to an upscale entertainment zone. Famous for massive Halloween and New Year\'s Eve street parties. Fun fact: The area was named after the abundant wild ferns (Lan) and fragrant trees (Kwai) that once grew there.',
    coordinates: { lat: 22.280972, lng: 114.155528 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Lan_Kwai_Fong_2012.JPG/250px-Lan_Kwai_Fong_2012.JPG']
  },
  {
    id: '9',
    name: 'Hong Kong Museum of History',
    description: 'Museum chronicling 400 million years of Hong Kong\'s natural history and 6,000 years of human civilization. Features "The Hong Kong Story" exhibition with dioramas and 4,000+ artifacts. Fun fact: The museum\'s collection includes a complete skeleton of the extinct South China tiger and Hong Kong\'s last tiger was shot in 1942.',
    coordinates: { lat: 22.301589, lng: 114.177111 },
    openingHours: 'Mon, Wed-Fri 10:00-18:00, Sat-Sun 10:00-19:00, closed Tuesdays',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Hong_Kong_Museum_of_History_2008.jpg/250px-Hong_Kong_Museum_of_History_2008.jpg']
  },
  {
    id: '10',
    name: 'Ngong Ping 360',
    description: '5.7-kilometer cable car connecting Tung Chung with Ngong Ping village on Lantau Island. Offers views of the South China Sea, airport, and mountains during the 25-minute journey. Fun fact: The "crystal cabins" have glass floors allowing visitors to see 430 meters straight down to the sea below.',
    coordinates: { lat: 22.256389, lng: 113.901944 },
    openingHours: 'Daily 10:00-18:00 (hours extended during peak seasons)',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ngong_Ping_360_Cable_Car.jpg/250px-Ngong_Ping_360_Cable_Car.jpg']
  },
  {
    id: '11',
    name: 'Man Mo Temple',
    description: 'Temple from 1847 dedicated to the gods of literature (Man) and war (Mo). Once served as a court for local disputes before modern judicial systems. Features massive hanging incense coils burning for weeks. Fun fact: The temple was a center of resistance against colonial rule and remains popular with students praying for exam success.',
    coordinates: { lat: 22.283982, lng: 114.150239 },
    openingHours: 'Daily 08:00-18:00',
    category: 'religious',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Man_Mo_Temple_2017.jpg/250px-Man_Mo_Temple_2017.jpg']
  },
  {
    id: '12',
    name: 'Hong Kong Park',
    description: '8-hectare park on the former Victoria Barracks site, blending nature with modern design. Features an artificial lake, conservatory, tea museum in Hong Kong\'s oldest colonial building, and an aviary with 600+ birds. Fun fact: The park\'s construction required moving several historic buildings intact to preserve colonial heritage.',
    coordinates: { lat: 22.2775, lng: 114.161667 },
    openingHours: 'Daily 06:00-23:00, conservatory 09:00-17:00',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Hong_Kong_Park_Waterfall.jpg/250px-Hong_Kong_Park_Waterfall.jpg']
  },
  {
    id: '13',
    name: 'Ladies\' Market',
    description: 'One-kilometer street market on Tung Choi Street in Mong Kok, named for its women\'s clothing and accessories. Features 100+ stalls selling bargain items with haggling expected. Fun fact: The surrounding Mong Kok district holds the Guinness World Record for highest population density (130,000+ people per square kilometer).',
    coordinates: { lat: 22.319128, lng: 114.170587},
    openingHours: 'Daily 12:00-23:30 (most active 15:00-23:00)',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ladies_Market_Hong_Kong.jpg/250px-Ladies_Market_Hong_Kong.jpg']
  },
  {
    id: '14',
    name: 'Ocean Park Hong Kong',
    description: '91.5-hectare marine and animal theme park on Hong Kong Island\'s southern side (opened 1977). Divided into Waterfront and Summit areas connected by cable car and funicular train. Features pandas, penguins, dolphins, and an aquarium with 5,000+ fish. Fun fact: It\'s the only park with both pandas and koalas.',
    coordinates: { lat: 22.245861, lng: 114.175917 },
    openingHours: 'Daily 10:00-19:00 (hours extended during peak seasons)',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ocean_Park_Hong_Kong_entrance.jpg/250px-Ocean_Park_Hong_Kong_entrance.jpg']
  }
];
