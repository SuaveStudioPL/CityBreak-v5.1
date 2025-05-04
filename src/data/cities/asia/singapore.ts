import { Attraction } from '../../../types/attractions';

export const singaporeAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Gardens by the Bay',
    description: '101-hectare nature park on reclaimed land, featuring iconic Supertree Grove structures that harvest solar energy. Houses two conservatories: Flower Dome (world\'s largest glass greenhouse) and Cloud Forest with a 35-meter waterfall. Fun fact: The Supertrees contain over 162,900 plants comprising more than 200 species.',
    coordinates: { lat: 1.281667, lng: 103.863889 },
    openingHours: 'Gardens: Daily 05:00-02:00, Conservatories: Daily 09:00-21:00',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Gardens_by_the_Bay_in_Singapore_-_20120712.jpg/250px-Gardens_by_the_Bay_in_Singapore_-_20120712.jpg']
  },
  {
    id: '2',
    name: 'Marina Bay Sands',
    description: 'Integrated resort with three 57-story hotel towers topped by the SkyPark featuring the world\'s largest rooftop infinity pool. Includes museum, mall, casino, and theaters. Fun fact: The building required an innovative engineering solution to account for tower settlement - each tower settles differently, so the SkyPark is designed to adjust itself.',
    coordinates: { lat: 1.283333, lng: 103.860556 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/250px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg']
  },
  {
    id: '3',
    name: 'Singapore Botanic Gardens',
    description: '163-year-old tropical garden and Singapore\'s first UNESCO World Heritage Site. Spans 82 hectares and features the National Orchid Garden with 1,000+ species. Fun fact: The gardens were instrumental in establishing rubber plantations that transformed Southeast Asia\'s economy in the early 20th century.',
    coordinates: { lat: 1.313889, lng: 103.815278 },
    openingHours: 'Daily 05:00-00:00, National Orchid Garden: 08:30-19:00',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Singapore_Botanic_Gardens_Bandstand.jpg/250px-Singapore_Botanic_Gardens_Bandstand.jpg']
  },
  {
    id: '4',
    name: 'Sentosa Island',
    description: '500-hectare resort island connected to mainland by road, cable car, boardwalk, and monorail. Features theme parks, beaches, resorts, and a 37m Merlion statue. Fun fact: The island\'s name means "peace and tranquility" in Malay, though ironically it was once a British military base and prisoner-of-war camp during WWII.',
    coordinates: { lat: 1.249167, lng: 103.830278 },
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sentosa_Merlion%2C_Singapore%2C_in_Jan_2020.jpg/250px-Sentosa_Merlion%2C_Singapore%2C_in_Jan_2020.jpg']
  },
  {
    id: '5',
    name: 'Singapore Zoo',
    description: '28-hectare wildlife park with 2,800+ animals from 300 species, pioneering the "open concept" design with hidden barriers instead of cages. Famous for orangutan breakfast experience. Fun fact: It houses the world\'s largest captive colony of orangutans, and babies born here are called "Ah Meng" after the zoo\'s famous orangutan ambassador.',
    coordinates: { lat: 1.404444, lng: 103.793889 },
    openingHours: 'Daily 08:30-18:00',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Singapore_Zoo_entrance-15Feb2010.jpg/250px-Singapore_Zoo_entrance-15Feb2010.jpg']
  },
  {
    id: '6',
    name: 'Merlion Park',
    description: 'Home to Singapore\'s iconic Merlion statue - a mythical creature with lion\'s head and fish body. The 8.6m, 70-ton statue spouts water into Marina Bay. Fun fact: There are officially 7 approved Merlion statues in Singapore, with this being the original and most famous, designed by sculptor Lim Nang Seng in 1972.',
    coordinates: { lat: 1.286944, lng: 103.854444 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/The_Merlion%2C_Singapore%2C_at_night_-_20041025.jpg/250px-The_Merlion%2C_Singapore%2C_at_night_-_20041025.jpg']
  },
  {
    id: '7',
    name: 'Chinatown',
    description: 'Historic district showcasing Chinese heritage with restored shophouses, temples, and markets. Features Buddha Tooth Relic Temple, Sri Mariamman Temple (oldest Hindu temple), and Jamae Mosque. Fun fact: The area was once segregated by dialect groups, with each Chinese sub-community having its own street or zone.',
    coordinates: { lat: 1.283333, lng: 103.844444 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/1_singapore_chinatown_2012.jpg/250px-1_singapore_chinatown_2012.jpg']
  },
  {
    id: '8',
    name: 'Little India',
    description: 'Vibrant neighborhood reflecting Singapore\'s Indian community, with colorful shophouses, Hindu temples, and spice shops. Features Sri Veeramakaliamman Temple and 24-hour Mustafa Centre. Fun fact: The area was originally a racecourse and cattle trading area, with Indian cattle traders settling nearby in the 1840s.',
    coordinates: { lat: 1.306667, lng: 103.851667 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Little_India%2C_Singapore%2C_at_night_-_20041204.jpg/250px-Little_India%2C_Singapore%2C_at_night_-_20041204.jpg']
  },
  {
    id: '9',
    name: 'National Museum of Singapore',
    description: 'Singapore\'s oldest museum (1887) in a neo-classical building with modern glass extension. Chronicles Singapore\'s history through interactive exhibits. Fun fact: The museum\'s most precious artifact is the Singapore Stone, a fragment of a large 13th-century sandstone slab with inscriptions that remains undeciphered.',
    coordinates: { lat: 1.296944, lng: 103.848333 },
    openingHours: 'Daily 10:00-19:00',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/National_Museum_of_Singapore_2%2C_Aug_06.JPG/250px-National_Museum_of_Singapore_2%2C_Aug_06.JPG']
  },
  {
    id: '10',
    name: 'Clarke Quay',
    description: 'Historic riverside quay transformed into an entertainment district with restored warehouses housing restaurants and bars. Named after Singapore\'s second governor. Fun fact: The area\'s distinctive high-roofed structures with giant umbrellas were designed by SMC Alsop to provide shelter while allowing natural ventilation in Singapore\'s tropical climate.',
    coordinates: { lat: 1.290556, lng: 103.846111 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Clarke_Quay%2C_Singapore%2C_at_night_-_20041018.jpg/250px-Clarke_Quay%2C_Singapore%2C_at_night_-_20041018.jpg']
  },
  {
    id: '11',
    name: 'ArtScience Museum',
    description: 'Lotus-inspired museum at Marina Bay Sands with 21 gallery spaces. The building collects rainwater through its "petals" for recycling. Features teamLab\'s Future World digital art exhibition. Fun fact: The building\'s 10 "fingers" are positioned at specific angles calculated to optimize natural light for the galleries.',
    coordinates: { lat: 1.286111, lng: 103.859444 },
    openingHours: 'Daily 10:00-19:00',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/ArtScience_Museum_in_Singapore_-_20110226.jpg/250px-ArtScience_Museum_in_Singapore_-_20110226.jpg']
  },
  {
    id: '12',
    name: 'Kampong Glam',
    description: 'Historic Muslim quarter centered around the golden-domed Sultan Mosque, with preserved shophouses and Middle Eastern cafes. Features Haji Lane (Singapore\'s narrowest street) and Arab Street. The area was once the seat of Malay royalty, and the mosque\'s base has thousands of glass bottles donated by poor Muslims.',
    coordinates: { lat: 1.302778, lng: 103.858889 },
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sultan_Mosque_Singapore.jpg/250px-Sultan_Mosque_Singapore.jpg']
  },
  {
    id: '13',
    name: 'Fort Canning Park',
    description: 'Historic hilltop park once known as Bukit Larangan (Forbidden Hill). Contains archaeological sites, colonial buildings, and nine historical gardens. Fun fact: The park houses the Battle Box, an underground bunker where British commanders made the fateful decision to surrender Singapore to the Japanese in 1942.',
    coordinates: { lat: 1.294167, lng: 103.845833 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Fort_Canning_Centre%2C_Singapore_-_20110227.jpg/250px-Fort_Canning_Centre%2C_Singapore_-_20110227.jpg']
  },
  {
    id: '14',
    name: 'Jewel Changi Airport',
    description: 'Nature-themed complex at Changi Airport featuring the Rain Vortex, world\'s tallest indoor waterfall (40m). Surrounded by forest valley with 2,000+ trees. Fun fact: The Rain Vortex collects rainwater to power a light and sound show while helping cool the building, reducing energy consumption by 30-50%.',
    coordinates: { lat: 1.360278, lng: 103.989444 },
    openingHours: 'Daily 24 hours (individual attraction hours vary)',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/The_Rain_Vortex_at_Jewel_Changi_Airport.jpg/250px-The_Rain_Vortex_at_Jewel_Changi_Airport.jpg']
  }
];
