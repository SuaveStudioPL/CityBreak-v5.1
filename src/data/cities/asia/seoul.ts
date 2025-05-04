import { Attraction } from '../../../types/attractions';

export const seoulAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Gyeongbokgung Palace',
    description: 'Largest of the Five Grand Palaces from the Joseon Dynasty (1395). Once contained 7,000+ rooms across 500 buildings before Japanese occupation destruction. Houses the National Palace Museum and hosts daily royal guard ceremonies. Fun fact: The palace was built with precise feng shui principles, with mountains behind it and a stream in front.',
    coordinates: { lat: 37.578611, lng: 126.977222 },
    openingHours: 'Wed-Mon 09:00-18:00 (Mar-Oct), 09:00-17:00 (Nov-Feb), closed Tuesdays',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Gyeongbokgung-GeunJeongJeon.jpg/250px-Gyeongbokgung-GeunJeongJeon.jpg']
  },
  {
    id: '2',
    name: 'N Seoul Tower',
    description: '236-meter tower on Namsan Mountain with panoramic city views from 480m above sea level. Famous for thousands of "love locks" attached by couples. Fun fact: The tower changes illumination colors based on air quality readings - blue for good, green for moderate, yellow for unhealthy, and red for very unhealthy.',
    coordinates: { lat: 37.551216, lng: 126.988276 },
    openingHours: 'Daily 10:00-23:00 (Mon-Fri), 10:00-00:00 (Sat-Sun)',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/N_Seoul_Tower_at_night.jpg/250px-N_Seoul_Tower_at_night.jpg']
  },
  {
    id: '3',
    name: 'Bukchon Hanok Village',
    description: 'Traditional village with hundreds of hanok houses from the Joseon Dynasty. Located between two palaces, historically home to nobility. Unlike tourist folk villages, Bukchon remains a living residential neighborhood. Fun fact: Many houses here are over 600 years old, and some residents are descendants of the original noble families.',
    coordinates: { lat: 37.583056, lng: 126.983611 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Korea-Seoul-Bukchon_Hanok_Village-01.jpg/250px-Korea-Seoul-Bukchon_Hanok_Village-01.jpg']
  },
  {
    id: '4',
    name: 'Changdeokgung Palace',
    description: 'UNESCO site built in 1405, known for harmonious integration with the natural landscape. Features Huwon (Secret Garden), a 78-acre garden with pavilions and ponds. Fun fact: It was the last palace inhabited by Korean royalty until 1989, when the last descendant of the imperial family passed away at age 97.',
    coordinates: { lat: 37.579444, lng: 126.992778 },
    openingHours: 'Tue-Sun 09:00-18:00 (Mar-Oct), 09:00-17:00 (Nov-Feb), Secret Garden by guided tour only',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Changdeokgung-Injeongjeon.jpg/250px-Changdeokgung-Injeongjeon.jpg']
  },
  {
    id: '5',
    name: 'Myeongdong',
    description: 'Premier shopping district with retail stores, boutiques, and Korean cosmetics shops. Sees 2 million visitors daily and ranks among the world\'s most expensive shopping streets. Fun fact: The area was once Seoul\'s financial district before becoming a shopping hub, and still houses the Bank of Korea\'s headquarters and gold reserves.',
    coordinates: { lat: 37.5637, lng: 126.984 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Myeongdong_at_night%2C_Seoul.jpg/250px-Myeongdong_at_night%2C_Seoul.jpg']
  },
  {
    id: '6',
    name: 'Dongdaemun Design Plaza',
    description: 'Futuristic landmark designed by Zaha Hadid with curved aluminum panels and LED lighting. Houses exhibition spaces and a design museum across 86,574 square meters. During construction, workers discovered Joseon Dynasty artifacts, leading to an excavation that recovered 16,000+ historical items now displayed in an underground museum.',
    coordinates: { lat: 37.5669, lng: 127.0094 },
    openingHours: 'Tue-Sun 10:00-19:00, closed Mondays',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Dongdaemun_Design_Plaza_at_night%2C_Seoul%2C_Korea.jpg/250px-Dongdaemun_Design_Plaza_at_night%2C_Seoul%2C_Korea.jpg']
  },
  {
    id: '7',
    name: 'Insadong',
    description: 'Traditional arts district with galleries, antique shops, and teahouses. A center for arts since the 1930s when collectors sold possessions during economic hardship. Fun fact: It\'s one of the few Seoul districts where signs are primarily in Korean rather than English or Chinese, due to a local ordinance preserving cultural heritage.',
    coordinates: { lat: 37.572972, lng: 126.98618 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Korea-Seoul-Insadong-01.jpg/250px-Korea-Seoul-Insadong-01.jpg']
  },
  {
    id: '8',
    name: 'Lotte World',
    description: 'One of the world\'s largest indoor theme parks with indoor Adventure and outdoor Magic Island sections. Attracts 7.3 million visitors annually. Fun fact: The park\'s construction required creating an artificial lake and island, and builders had to drain part of a natural lake and reinforce the land to support the massive structure.',
    coordinates: { lat: 37.51, lng: 127.1 },
    openingHours: 'Daily 09:30-22:00 (hours vary seasonally)',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Lotte_World_at_night.jpg/250px-Lotte_World_at_night.jpg']
  },
  {
    id: '9',
    name: 'Gwangjang Market',
    description: 'Korea\'s first permanent market (1905), famous for street food vendors serving traditional dishes from tightly packed stalls. Gained international fame after appearing on Anthony Bourdain\'s show. Fun fact: The market\'s name "Gwangjang" means "wide place," as it was the first market in Seoul built with wide, planned walkways rather than narrow alleys.',
    coordinates: { lat: 37.57, lng: 126.999 },
    openingHours: 'Daily 09:00-22:00 (some food stalls open until late)',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Gwangjang_Market%2C_Seoul.jpg/250px-Gwangjang_Market%2C_Seoul.jpg']
  },
  {
    id: '10',
    name: 'Hongdae (area)',
    description: 'Vibrant university district known for youthful atmosphere, indie music, street performances, and urban arts. Emerged as a cultural hub in the 1990s when art students opened studios. Fun fact: The area transforms completely from day to night - a shopping and café district by day becomes Seoul\'s most energetic nightlife zone after dark.',
    coordinates: { lat: 37.555278, lng: 126.923333 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hongdae_Street_Seoul.jpg/250px-Hongdae_Street_Seoul.jpg']
  },
  {
    id: '11',
    name: 'War Memorial of Korea',
    description: 'Museum commemorating the Korean War and other military conflicts, established in 1994 on former army headquarters site. Houses 33,000+ artifacts with indoor halls and outdoor military equipment displays. Fun fact: The memorial includes soil and water samples from battlefields of the Korean War mixed into its foundation.',
    coordinates: { lat: 37.536944, lng: 126.977222 },
    openingHours: 'Tue-Sun 09:30-18:00, closed Mondays',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Korea-Seoul-War_Memorial_of_Korea-01.jpg/250px-Korea-Seoul-War_Memorial_of_Korea-01.jpg']
  },
  {
    id: '12',
    name: 'Gangnam District',
    description: 'Seoul\'s affluent district, internationally famous from Psy\'s "Gangnam Style." Developed in the 1970s during Seoul\'s southward expansion. Known for luxury shopping, medical clinics, and corporate headquarters. Fun fact: Before the 1970s, this area was primarily farmland, transforming from rice paddies to skyscrapers in just one generation.',
    coordinates: { lat: 37.496667, lng: 127.0275 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Gangnam_Seoul.jpg/250px-Gangnam_Seoul.jpg']
  },
  {
    id: '13',
    name: 'Namsan Park',
    description: '843-acre park on Namsan Mountain offering hiking trails, gardens, and city views. Contains 200+ tree species, a restored Joseon village, and ancient wall remnants. Fun fact: During the Joseon Dynasty, the mountain was part of a national emergency communication system using beacon fires that could relay messages across the country in hours.',
    coordinates: { lat: 37.549722, lng: 126.991944 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Korea-Seoul-Namsan_Park-01.jpg/250px-Korea-Seoul-Namsan_Park-01.jpg']
  }
];
