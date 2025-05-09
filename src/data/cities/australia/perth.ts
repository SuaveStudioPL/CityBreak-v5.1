import { Attraction } from '../../../types/attractions';

export const perthAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Kings Park and Botanic Garden',
    description: 'A 400-hectare park overlooking Perth Water and the city skyline, featuring stunning panoramic views of the Swan River and Darling Range. Two-thirds of the grounds are conserved as native bushland with over 324 native plant varieties. The park includes the State War Memorial, beautiful gardens, and walking trails. As one of the world\'s largest inner-city parks, it attracts over 5 million visitors annually and showcases Western Australia\'s unique flora.',
    coordinates: { lat: -31.962135, lng: 115.831712 },
    openingHours: 'Open 24/7, Botanic Garden 9:00-17:00.',
    category: 'park',
    imageUrls: ['']
  },
  {
    id: '2',
    name: 'Fremantle Prison',
    description: 'A UNESCO World Heritage-listed site built by convicts in the 1850s and operated as a maximum-security prison until 1991. The imposing limestone structure offers various tours including day tours of the cell blocks and galleries, underground tunnel tours, and eerie night tours. Visitors can explore the prison\'s history of convict transportation, incarceration, and reform. As one of Western Australia\'s most significant cultural heritage sites, it provides insight into Australia\'s colonial past.',
    coordinates: { lat: -32.055, lng: 115.7532 },
    openingHours: 'Daily 9:00-17:00, tours require booking.',
    category: 'historic',
    imageUrls: ['']
  },
  {
    id: '3',
    name: 'Swan River (Western Australia)',
    description: 'A picturesque river flowing through the heart of Perth, offering recreational activities and stunning views. The wide, meandering waterway is perfect for boating, kayaking, fishing, and riverside picnics. Scenic foreshore paths provide opportunities for walking and cycling while enjoying views of the city skyline. River cruises operate between Perth and the historic port of Fremantle. The Swan River holds cultural significance for the indigenous Noongar people and is central to Perth\'s identity.',
    coordinates: { lat: -31.960278, lng: 115.853333 },
    category: 'nature',
    imageUrls: ['']
  },
  {
    id: '4',
    name: 'Perth Mint',
    description: 'Australia\'s oldest operating mint, established in 1899 as a branch of Britain\'s Royal Mint. The heritage-listed building houses exhibitions on Western Australia\'s gold mining history and displays the world\'s largest gold coin weighing one tonne. Visitors can watch gold pouring demonstrations where molten gold is transformed into a solid gold bar. The mint\'s neo-classical architecture and fascinating exhibits make it one of Perth\'s premier tourist attractions.',
    coordinates: { lat: -31.9573, lng: 115.8692 },
    openingHours: 'Daily 9:00-17:00.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '5',
    name: 'Elizabeth Quay',
    description: 'A modern waterfront development reconnecting Perth\'s city center with the Swan River. Opened in 2016, the precinct features a 20-meter high suspension bridge, public art installations, restaurants, and bars. The centerpiece is a circular inlet surrounded by promenades and public spaces. Regular events, markets, and festivals are held in this vibrant area. Elizabeth Quay has become an iconic part of Perth\'s skyline and a popular gathering place for locals and tourists.',
    coordinates: { lat: -31.959722, lng: 115.858333 },
    category: 'landmark',
    imageUrls: ['']
  },
  {
    id: '6',
    name: 'Rottnest Island',
    description: 'A car-free island paradise located 19km off Perth\'s coast, known for its pristine beaches, crystal-clear waters, and unique wildlife. The island is famous for quokkas, small marsupials found almost nowhere else on earth, known for their "smiling" appearance. Visitors can explore the island by bicycle, enjoy water activities, or discover its rich Aboriginal and European history. With 63 beaches and 20 bays, Rottnest offers spectacular coastal scenery and is a beloved getaway destination.',
    coordinates: { lat: -32.006111, lng: 115.516667 },
    openingHours: 'Ferry services operate daily.',
    category: 'nature',
    imageUrls: ['']
  },
  {
    id: '7',
    name: 'Art Gallery of Western Australia',
    description: 'A premier art institution housing the State Art Collection with over 18,000 works of art. Located in the Perth Cultural Centre, the gallery showcases historic and contemporary Australian and Indigenous art, as well as international pieces. The brutalist-style building, completed in 1979, provides a striking backdrop for the diverse collection. Regular exhibitions, events, and educational programs make it a cultural hub. The gallery offers insight into Western Australia\'s artistic heritage and contemporary creative scene.',
    coordinates: { lat: -31.949722, lng: 115.861944 },
    openingHours: 'Wed-Mon 10:00-17:00, closed Tuesdays.',
    freeEntryInfo: 'Free entry to the permanent collection.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '8',
    name: 'London Court',
    description: 'A charming pedestrian street built in 1937 in the style of an Elizabethan-era English lane. The heritage-listed shopping arcade features Tudor-style architecture with ornate facades, gargoyles, and decorative details. At each entrance stand distinctive clocks with moving knights that chime on the hour. The narrow walkway connects Hay Street Mall and St Georges Terrace in Perth\'s central business district. This picturesque arcade offers a unique shopping experience and a glimpse into Perth\'s architectural history.',
    coordinates: { lat: -31.954815, lng: 115.858945 },
    openingHours: 'Mon-Sat 5:00-21:00, Sun 11:00-21:00. Individual shop hours may vary.',
    category: 'historic',
    imageUrls: ['']
  },
  {
    id: '9',
    name: 'Swan Bells',
    description: 'A distinctive contemporary bell and clock tower located at Barrack Square on the Swan River foreshore. Opened in 2000, the 82.5-meter-high glass and copper structure houses the historic bells of St Martin-in-the-Fields church from London. Visitors can view the bells, learn about the ancient art of bell ringing, and enjoy panoramic views from the observation deck. The tower\'s unique design has made it an iconic landmark on Perth\'s waterfront.',
    coordinates: { lat: -31.958903, lng: 115.858243 },
    openingHours: 'Daily 10:00-16:00.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Night_230620_gnangarra-120_b.jpg/250px-Night_230620_gnangarra-120_b.jpg']
  },
  {
    id: '10',
    name: 'Cottesloe Beach',
    description: 'One of Perth\'s most iconic beaches, known for its crystal-clear waters, white sand, and Norfolk pine trees lining the foreshore. Popular for swimming, snorkeling, and surfing, the beach offers a quintessential Australian coastal experience. The beachfront features cafes, restaurants, and the historic Cottesloe Beach Hotel. Each March, the beach hosts Sculpture by the Sea, an outdoor art exhibition. Spectacular Indian Ocean sunsets make it a favorite spot for evening gatherings.',
    coordinates: { lat: -31.993889, lng: 115.751667 },
    category: 'beach',
    imageUrls: ['']
  }
]
