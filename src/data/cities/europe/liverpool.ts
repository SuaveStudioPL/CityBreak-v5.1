import { Attraction } from '../../../types/attractions';


export const liverpoolAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Royal Albert Dock, Liverpool',
    description: 'Historic waterfront complex, a UNESCO World Heritage Site, opened in 1846. Houses museums, restaurants, shops, and bars. (Note: Tate Liverpool temporarily relocated; Maritime/Slavery museums closed for redevelopment until ~2028). Once the heart of Liverpool\'s global trade.',
    coordinates: { lat: 53.4013, lng: -2.9940 },
    openingHours: 'Dock walkways open 24/7. Shops/Restaurants: Individual hours (generally daily). Museums: Check individual sites (Beatles Story daily ~9:00-18:30).',
    freeEntryInfo: 'Dock walkways free. Tate/Maritime/Slavery museums free (when open). Beatles Story requires paid ticket.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'The Beatles Story',
    description: 'Award-winning museum dedicated to the history of The Beatles, located on the Albert Dock. It takes visitors on a journey through the lives and music of John, Paul, George, and Ringo, from their early days in Liverpool to their global superstardom. Exhibits include recreations of key locations and memorabilia. It is said that the Merseybeat sound was born in the city\'s clubs.', // Changed
    coordinates: { lat: 53.3996, lng: -2.9916 },
    openingHours: 'Daily, generally 9:00 - 18:30 (last entry 17:00). Check official site.',
    category: 'museum'
  },
  {
    id: '3',
    name: 'Liverpool Cathedral',
    description: 'Britain\'s largest cathedral, officially the Cathedral Church of Christ in Liverpool, built in the 20th century. Its Gothic Revival architecture is impressive, and its tower offers panoramic views of the city and the River Mersey. It stands on St. James\'s Mount. It is said that it was built on the site of a former quarry, hence its dramatic setting.', // Changed
    coordinates: { lat: 53.3975, lng: -2.973056 },
    openingHours: 'Cathedral: Daily ~10:00-18:00 (visits restricted during services). Tower: Daily ~10:00-17:00. Check official site.',
    freeEntryInfo: 'Cathedral entry free (donations welcome). Tower Experience requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Museum of Liverpool',
    description: 'Modern museum located on the Pier Head, showcasing the city\'s social, historical, and cultural heritage. Exhibits cover Liverpool\'s maritime history, its role in music (especially The Beatles), its industrial past, and its people. The building itself is an architectural landmark. It is said that the city\'s spirit is captured within its walls.', // Changed
    coordinates: { lat: 53.4036, lng: -2.9959 },
    openingHours: 'Tue-Sun: 10:00 - 17:00. Open Mon during school holidays.',
    freeEntryInfo: 'Free entry.',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Anfield',
    description: 'Home stadium of Liverpool FC, one of the most famous football clubs in the world, with a history dating back to 1892. Stadium tours offer a behind-the-scenes look, and the museum celebrates the club\'s achievements. The atmosphere on match days is legendary. The "This is Anfield" sign is iconic. It is said that the Kop stand can shake the stadium.', // Changed
    coordinates: { lat: 53.430833, lng: -2.960833 },
    openingHours: 'Museum: Daily 9:30-17:00. Tours: Daily 10:00-15:00. Closed/restricted on match days. Check official site.',
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Pier Head',
    description: 'Waterfront location on the River Mersey, famous for the "Three Graces": the Royal Liver Building, the Cunard Building, and the Port of Liverpool Building. These iconic structures symbolize Liverpool\'s maritime power and wealth. The Pier Head is a UNESCO World Heritage Site. It is said that the Liver Birds atop the Royal Liver Building watch over the city.', // Changed
    coordinates: { lat: 53.4053, lng: -2.9950 },
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Walker Art Gallery',
    description: 'One of Europe\'s finest art galleries, housing an extensive collection of paintings, sculptures, and decorative arts from the 13th century to the present day. Highlights include works by Rembrandt, Rubens, and Turner. The gallery is named after Sir Andrew Barclay Walker, a wealthy brewer who funded its construction. It is said that some of the portraits come to life at night.', // Changed
    coordinates: { lat: 53.41, lng: -2.979722 },
    openingHours: 'Tue-Sun: 10:00 - 17:00. Closed Mon (except bank holidays).',
    freeEntryInfo: 'Free entry.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Cavern Club',
    description: 'Historic music venue, located on Mathew Street, famous for launching The Beatles in the early 1960s. The original club closed in 1973, but a replica was built nearby, using some of the original bricks. It continues to host live music. It is said that the club\'s damp, smoky atmosphere contributed to the Merseybeat sound.', // Changed
    coordinates: { lat: 53.406111, lng: -2.987222 },
    openingHours: 'Daily from 11:00. Closes Midnight (Sun-Wed), 1:00 (Thu), 2:00 (Fri-Sat).',
    category: 'landmark'
  },
  {
    id: '9',
    name: 'St George\'s Hall, Liverpool',
    description: 'Neoclassical building in the city center, considered one of the finest examples of Victorian architecture in the UK. It has been used for concerts, events, and public gatherings since its opening in 1854. Its Great Hall is particularly impressive. It is said that it was built on the site of an old infirmary.', // Changed
    coordinates: { lat: 53.4086, lng: -2.9801 },
    openingHours: 'Open primarily for booked tours and events. Check official website for schedule.',
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Liverpool One',
    description: 'Modern shopping and entertainment complex in the city center, opened in 2008. It transformed a large area of the city with shops, restaurants, bars, a cinema, and a park. Its design integrates with the existing streetscape. It has become a major destination for visitors and locals alike. It is said that it revitalized Liverpool\'s retail scene.', // Changed
    coordinates: { lat: 53.403, lng: -2.985 },
    category: 'landmark'
  }
];
