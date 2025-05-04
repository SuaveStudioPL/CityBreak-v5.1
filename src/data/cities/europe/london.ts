import { Attraction } from '../../../types/attractions';


export const londonAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Big Ben',
    description: 'The iconic clock tower, officially Elizabeth Tower, attached to the Palace of Westminster. Its bell, Big Ben, is famous worldwide. Completed in 1859, it stands as a symbol of London and British parliamentary democracy. Though the tower is currently under renovation, its chimes are legendary. It is said that it\'s named after Sir Benjamin Hall, who oversaw its construction.',
    coordinates: { lat: 51.5007, lng: -0.1246 },
    openingHours: 'Exterior visible anytime. Interior tours available on specific dates/times, booking essential via Parliament website.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Buckingham Palace',
    description: 'The official residence of the British monarch since 1837. Originally built in 1703 as Buckingham House, it was expanded over time. The Changing of the Guard ceremony is a popular attraction. The palace has 775 rooms. It is said that if the Royal Standard flag is flying, the monarch is in residence.',
    coordinates: { lat: 51.5014, lng: -0.1419 },
    openingHours: 'State Rooms: Summer only (mid-Jul to late Sep), daily 9:30-18:30/19:30. Booking essential. Changing of Guard: Schedule varies (often 11:00 Mon, Wed, Fri, Sun), check Army site.',
    freeEntryInfo: 'Changing of the Guard free to watch outside. State Rooms require paid ticket.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Tower of London',
    description: 'A historic castle on the north bank of the River Thames, with origins dating back to 1078. It has served as a royal residence, prison, armory, and treasury. The Crown Jewels are housed here, guarded by the Yeomen Warders (Beefeaters). It is said that if the ravens ever leave the Tower, the kingdom will fall.',
    coordinates: { lat: 51.5081, lng: -0.0759 },
    openingHours: 'Seasonal hours. Summer: Tue-Sat 9:00-17:30, Sun-Mon 10:00-17:30. Winter: Tue-Sat 9:00-16:30, Sun-Mon 10:00-16:30. Last entry ~1h before close.',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Oxford Street',
    description: 'One of the most famous and busiest shopping streets in London, with over 300 shops, from flagship stores to designer outlets. It stretches for about 1.5 miles. Originally a Roman road, it became a major shopping destination in the 19th century. It is said that it was once a route for cattle drovers.',
    coordinates: { lat: 51.5152, lng: -0.1419 },
    category: 'landmark'
  },
  {
    id: '5',
    name: 'British Museum',
    description: 'A museum dedicated to human history, art, and culture, with a collection of about 8 million works, including the Rosetta Stone and the Elgin Marbles. Founded in 1753, it was the first public national museum in the world. Admission is free. It is said that some artifacts are haunted.',
    coordinates: { lat: 51.519444, lng: -0.126944 },
    openingHours: 'Daily 10:00 - 17:00 (Fri until 20:30). Closed Dec 24-26.',
    freeEntryInfo: 'Free entry (booking recommended). Special exhibitions paid.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Hyde Park, London',
    description: 'One of the largest royal parks in London, covering 350 acres. It offers recreational activities, from boating on the Serpentine lake to Speakers\' Corner, where public speaking is allowed. It was established by Henry VIII in 1536 as a deer park. It is said that it was once a haunt for highwaymen.',
    coordinates: { lat: 51.5078, lng: -0.1657 },
    openingHours: 'Daily 5:00 - 24:00 (midnight).',
    category: 'nature'
  },
  {
    id: '7',
    name: 'Covent Garden',
    description: 'A popular district with theaters, shops, restaurants, and street performers. Originally a fruit and vegetable market, it was transformed into a cultural hub in the 1970s. The Royal Opera House and Theatre Royal Drury Lane are located here. It is said that the ghost of an actor haunts the Theatre Royal.',
    coordinates: { lat: 51.5125, lng: -0.1225 },
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Notting Hill',
    description: 'A colorful district in West London, known for its Victorian architecture, the Portobello Road Market (famous for antiques), and the Notting Hill Carnival. It gained fame from the 1999 film of the same name. It is said that the Portobello Road is named after a Caribbean port.',
    coordinates: { lat: 51.5096, lng: -0.2043 },
    category: 'historic'
  },
  {
    id: '9',
    name: 'Borough Market',
    description: 'A historic food market in Southwark, dating back to the 13th century, with a wide selection of artisanal products, street food, and international cuisine. It\'s a popular spot for food lovers. It is said that it was once located on London Bridge.',
    coordinates: { lat: 51.5052, lng: -0.0909 },
    openingHours: 'Full Market: Wed-Fri 10-17, Sat 9-17, Sun 10-16. Limited Market (Lunch): Mon-Tue 10-17.',
    category: 'local_market'
  },
  {
    id: '10',
    name: 'Westminster Abbey',
    description: 'A Gothic church, one of the most significant in the UK, traditionally used for the coronation of British monarchs since 1066. It has also hosted royal weddings and funerals. Many famous Britons are buried or commemorated here, including Isaac Newton and Charles Darwin. It is said that it was founded by Saint Peter.',
    coordinates: { lat: 51.499444, lng: -0.1275 },
    openingHours: 'Mon-Fri: 9:30-15:30 (last entry). Sat: 9:00-15:00 (last entry). Closed Sun (services only). Check official site.',
    category: 'historic'
  },
  {
    id: '11',
    name: 'The Shard',
    description: 'The tallest skyscraper in Western Europe, offering panoramic views of London from its observation decks. Designed by Renzo Piano, it opened in 2012. It houses offices, residences, a hotel, and restaurants. It is said that its design was inspired by shards of glass.',
    coordinates: { lat: 51.5045, lng: -0.0877 },
    openingHours: 'Observation Deck (View from The Shard): Hours vary daily/seasonally (opens ~10:00/13:00, closes ~21:00/22:00). Booking essential.',
    category: 'landmark'
  },
  {
    id: '12',
    name: 'Tate Modern',
    description: 'A modern and contemporary art gallery, part of the Tate group, housed in the former Bankside Power Station. It features works by artists from around the world, from the 20th century to the present day. Its Turbine Hall is a massive space for installations. It is said that the power station was once haunted.',
    coordinates: { lat: 51.5074, lng: -0.0993 },
    openingHours: 'Daily 10:00 - 18:00.',
    freeEntryInfo: 'Free entry (booking recommended). Special exhibitions paid.',
    category: 'museum'
  },
  {
    id: '13',
    name: 'Shakespeare\'s Globe',
    description: 'A reconstruction of the Globe Theatre, where many of Shakespeare\'s plays were originally performed in the 17th century. The modern Globe opened in 1997, built near the original site. It offers tours and performances, keeping Shakespeare\'s work alive. It is said that the original theatre burned down due to a cannon fire during a performance.',
    coordinates: { lat: 51.5081, lng: -0.0967 },
    openingHours: 'Tours daily (~10:00-17:00). Performances seasonal (evenings). Check official site.',
    category: 'cultural'
  },
  {
    id: '14',
    name: 'Kensington Palace',
    description: 'A royal residence in Kensington Gardens, home to the Duke and Duchess of Cambridge and other members of the royal family. Originally a Jacobean mansion, it was expanded by William III and Mary II. Parts of the palace are open to the public, including the State Rooms and gardens. Princess Diana lived here. It is said that it\'s haunted by royal ghosts.',
    coordinates: { lat: 51.5014, lng: -0.1895 },
    openingHours: 'Wed-Sun: 10:00-18:00 (Summer) / 10:00-16:00 (Winter). Closed Mon-Tue & Dec 24-26.',
    category: 'historic'
  },
  {
    id: '15',
    name: 'Camden Town',
    description: 'A vibrant and eclectic district in North London, known for its markets (selling alternative fashion, crafts, and food), street art, live music venues, and alternative culture. It has a bohemian vibe. It is said that it was named after Charles Pratt, 1st Earl Camden.',
    coordinates: { lat: 51.5401, lng: -0.1396 },
    openingHours: 'Camden Market: Daily 10:00 - 18:00 (food stalls/bars later).',
    category: 'historic'
  }
];
