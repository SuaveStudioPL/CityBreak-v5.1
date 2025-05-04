import { Attraction } from '../../../types/attractions';


export const rigaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'House of the Blackheads (Riga)',
    description: 'An iconic and ornate building in the heart of Old Riga, originally built in the 14th century for the Brotherhood of Blackheads, a guild of unmarried merchants. It was destroyed during WWII and meticulously reconstructed in the 1990s, showcasing stunning Gothic and Renaissance architecture. It is said that it was a popular meeting place for Riga\'s elite.',
    coordinates: { lat: 56.947222, lng: 24.106944 },
    openingHours: 'Tue-Sun: 10:00 - 17:00. Closed Mon.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Riga Cathedral',
    description: 'A medieval cathedral, also known as Riga Dome Church, with a history dating back to 1211. It is known for its impressive architecture, a blend of Romanesque, Gothic, and Baroque styles, and its grand organ, once one of the largest in the world, which still hosts regular concerts. It is said that its construction marked the beginning of Riga\'s religious importance.',
    coordinates: { lat: 56.949167, lng: 24.104444},
    openingHours: 'Daily 10:00-17:00 (visits restricted during services). Organ concerts daily at 12:00, plus evening concerts.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Freedom Monument',
    description: 'A significant symbol of Latvia\'s independence and statehood, erected in 1935. The monument commemorates soldiers who died in the Latvian War of Independence (1918-1920). Its central figure, Liberty, holds three golden stars representing Latvia\'s historical regions. Guarded by soldiers, it\'s a focal point for national celebrations. It is said that it remained untouched during Soviet times due to its artistic value.',
    coordinates: { lat: 56.951389, lng: 24.113056 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Art Nouveau District, Riga',
    description: 'A UNESCO-listed district, renowned for its exceptional collection of Art Nouveau architecture, particularly along Alberta, Elizabetes, and Strēlnieku streets. Built in the early 20th century, the buildings feature ornate facades with mythological figures, geometric patterns, and national romantic elements. A visual feast for architecture enthusiasts. It is said that many of the architects were influenced by nature.',
    coordinates: { lat: 56.959923, lng: 24.108400 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Riga_-_Elizabetes_Iela_10b%2C_detail.JPG/330px-Riga_-_Elizabetes_Iela_10b%2C_detail.JPG']
  },
  {
    id: '5',
    name: 'Riga Central Market',
    description: 'One of the largest and oldest markets in Europe, housed in five former Zeppelin hangars from World War I. It offers a wide variety of goods, from fresh produce and meats to clothing and souvenirs. A bustling hub of local life and a unique architectural site. It is said that the hangars were repurposed due to their sturdy construction.',
    coordinates: { lat: 56.94371, lng: 24.114904 },
    openingHours: 'Pavilions/Outdoor: Daily ~7:00-18:00 (Sun until 17:00). Fish Pavilion closed Mon. Night Market also operates.',
    category: 'local_market'
  },
  {
    id: '6',
    name: 'St. Peter\'s Church, Riga',
    description: 'A medieval church with a history dating back to the 13th century. Its towering spire has been struck by lightning and rebuilt several times, offering an observation deck with panoramic views of Riga. The church itself showcases Gothic and Baroque architectural styles. It is said that the rooster on its spire predicts the weather.',
    coordinates: { lat: 56.9475, lng: 24.109444},
    openingHours: 'Tower: Tue-Sat 10:00-18:00/19:00, Sun 12:00-18:00/19:00 (seasonal). Closed Mon. Church likely similar hours (restricted during services).',
    freeEntryInfo: 'Church entry free. Tower requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Latvian National Museum of Art',
    description: 'The largest art museum in Latvia, housing a significant collection of Latvian art from the 18th century to the present, as well as international works. Its main building is a notable example of Neo-Baroque architecture. Explore the rich artistic heritage of Latvia. It is said that some of the paintings are imbued with the artists\' spirits.',
    coordinates: { lat: 56.955775, lng: 24.113123 },
    openingHours: 'Tue/Wed/Fri/Sat/Sun: 10:00-18:00, Thu: 10:00-20:00. Closed Mon.',
    freeEntryInfo: 'Free entry last Sunday of the month (permanent exhibition).',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Bastejkalns Park',
    description: 'A beautiful park located near the Freedom Monument, featuring a canal, ornamental bridges, and monuments. It was built on the site of former city fortifications. Enjoy a relaxing stroll, a boat ride on the canal, or admire the views. It is said that the park is a popular spot for romantic encounters.',
    coordinates: { lat: 56.951667, lng: 24.111111 },
    openingHours: 'Open 24/7.',
    category: 'nature'
  },
  {
    id: '9',
    name: 'Museum of the Occupation of Latvia',
    description: 'A museum documenting the period of Latvia\'s occupation by the Soviet Union and Nazi Germany from 1940 to 1991. It provides a sobering and important insight into Latvia\'s 20th-century history and the struggles for independence. It is said that some exhibits hold the memories of those who suffered during the occupations.',
    coordinates: { lat: 56.947093, lng: 24.106364 },
    openingHours: 'Daily 11:00 - 18:00.',
    freeEntryInfo: 'Requires paid ticket (ground floor exhibition may be free).',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Three Brothers, Riga',
    description: 'A charming complex of three medieval dwelling houses in Old Riga, representing different periods of architectural development. They are the oldest group of stone houses in Riga, dating from the 15th to the 17th centuries. A glimpse into the city\'s architectural history. It is said that they were built by three brothers from the same family.',
    coordinates: { lat: 56.95041, lng: 24.104186 },
    category: 'historic'
  }
];
