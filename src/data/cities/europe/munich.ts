import { Attraction } from '../../../types/attractions';


export const munichAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Marienplatz',
    description: 'The central square of Munich, a bustling hub featuring the impressive New Town Hall (Neues Rathaus) with its famous Glockenspiel, and the Marian Column (Mariensäule) at its center. Historically a marketplace, it has been the heart of Munich for centuries and a site for celebrations and gatherings. It is said that the Glockenspiel commemorates a 16th-century tournament and plague end.',
    coordinates: { lat: 48.1374, lng: 11.5755 },
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Nymphenburg Palace',
    description: 'A magnificent Baroque palace, the former summer residence of the Bavarian rulers. Its extensive gardens are as impressive as the palace itself, featuring canals, pavilions, and the Amalienburg hunting lodge. The palace interiors showcase opulent Rococo style and include the Gallery of Beauties. It is said that it was built as a gift from Elector Ferdinand Maria to his wife.',
    coordinates: { lat: 48.1583, lng: 11.5033 },
    openingHours: 'Palace/Marstallmuseum: Daily, seasonal hours (Summer 9-18, Winter 10-16). Park Palaces: Summer only (Apr-Oct 15), daily 9-18. Park: Daily, dawn-dusk.',
    freeEntryInfo: 'Park free. Palace/Museums require paid ticket (under 18 free).',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Frauenkirche, Munich',
    description: 'The iconic Gothic cathedral, officially the Cathedral Church of Our Lady, a symbol of Munich with its distinctive twin towers capped by onion domes. Built in the 15th century, it survived WWII damage and offers panoramic views of the city and the Alps from its south tower. It is said that the "Devil\'s Footprint" inside marks where the devil stood to mock the windowless church.',
    coordinates: { lat: 48.1385, lng: 11.5736 },
    openingHours: 'Church: Daily ~7:00/8:00-18:00/20:00 (restricted during services). South Tower: Mon-Sat 10:00-17:00, Sun/Hol 11:30-17:00 (check seasonal variations).',
    freeEntryInfo: 'Church entry free. Tower climb requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'English Garden, Munich',
    description: 'One of the world\'s largest urban parks, larger than New York\'s Central Park. It offers a variety of recreational activities, including sunbathing on its lawns, surfing the Eisbach river wave, and enjoying beer in its traditional beer gardens like the Chinesischer Turm. It is said that it was named "English Garden" because of its informal, English landscape style.',
    coordinates: { lat: 48.1642, lng: 11.6056 },
    openingHours: 'Open 24/7.',
    category: 'nature'
  },
  {
    id: '5',
    name: 'Deutsches Museum',
    description: 'The world\'s largest museum of science and technology, with an immense collection spanning various fields, from aerospace to mining. Interactive exhibits make it engaging for all ages. It\'s located on an island in the Isar River. It is said that it was founded by Oskar von Miller to showcase Germany\'s technological prowess.',
    coordinates: { lat: 48.1297, lng: 11.5833 },
    openingHours: 'Daily 9:00 - 17:00.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Viktualienmarkt',
    description: 'A gourmet food market and square in central Munich, offering a wide array of fresh produce, meats, cheeses, flowers, and local specialties. Originally a farmers\' market, it has evolved into a popular spot for locals and tourists alike. The market also features beer gardens and food stalls. It is said that it was moved to its current location to provide more space.',
    coordinates: { lat: 48.1351, lng: 11.5762 },
    openingHours: 'Market Square open 24/7. Stalls generally Mon-Sat ~8:00-18:00/20:00. Closed Sun/Holidays.',
    category: 'local_market'
  },
  {
    id: '7',
    name: 'Allianz Arena',
    description: 'A modern football stadium, home to FC Bayern Munich, known for its distinctive exterior that can change colors. Opened in 2005, it has hosted major football events, including World Cup matches. Stadium tours are available. It is said that its design was inspired by an inflatable boat.',
    coordinates: { lat: 48.2188, lng: 11.6247 },
    openingHours: 'Museum: Daily 10:00-18:00. Tours: Daily, various times 10:00-18:00. Closed holidays & restricted on match days.',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Residenz (Munich)',
    description: 'The former royal palace of the Bavarian monarchs in the city center, a vast complex of palaces, courtyards, and gardens. It houses several museums, including the State Rooms, the Treasury, and the Cuvilliés Theatre, showcasing centuries of Bavarian history and art. It is said that it was once one of the largest royal palaces in Europe.',
    coordinates: { lat: 48.1406, lng: 11.5778 },
    openingHours: 'Museum/Treasury: Daily, seasonal hours (Summer 9-18, Winter 10-17). Cuvilliés Theatre: Limited hours, check site. Closed holidays.',
    freeEntryInfo: 'Requires paid ticket (under 18 free).',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Aerial_image_of_Munich_Residenz.jpg/330px-Aerial_image_of_Munich_Residenz.jpg']  
  },
  {
    id: '9',
    name: 'Hofbräuhaus am Platzl',
    description: 'A historic beer hall dating from the 16th century, one of the most famous in Munich. It\'s known for its traditional Bavarian atmosphere, live music, and of course, its beer. Originally the royal brewery, it has been a popular gathering place for centuries. It is said that Mozart was once a regular patron.',
    coordinates: { lat: 48.1378, lng: 11.5797 },
    openingHours: 'Daily 9:00 - 24:00.',
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Alte Pinakothek',
    description: 'One of the oldest art galleries in the world, featuring an impressive collection of Old Masters paintings from the 14th to the 18th centuries. Works by German, Dutch, Flemish, Italian, Spanish, and French artists are displayed. It\'s part of Munich\'s Kunstareal (art district). It is said that it survived WWII bombings due to careful planning.',
    coordinates: { lat: 48.1482, lng: 11.5700 },
    openingHours: 'Daily 10:00-18:00 (Tue/Wed until 20:30).',
    freeEntryInfo: 'Requires paid ticket (€1 on Sundays, under 18 free).',
    category: 'museum'
  },
  {
    id: '11',
    name: 'Olympiapark (Munich)',
    description: 'Site of the 1972 Summer Olympics, now a recreational park with a stadium, an observation tower (Olympiaturm), and various sports facilities. (NOTE: Olympiaturm CLOSED for renovation until 2026). It also hosts concerts and events. The park\'s design is considered innovative for its time.',
    coordinates: { lat: 48.1731, lng: 11.5517 },
    openingHours: 'Park open 24/7. Venues within have own hours.',
    category: 'park'
  },
  {
    id: '12',
    name: 'BMW Museum',
    description: 'A museum showcasing the history and technological developments of the German automotive company BMW. Its modern architecture complements the exhibits, which include classic cars, motorcycles, and interactive displays. It\'s located near the BMW headquarters. It is said that the museum building\'s design represents a car tire.',
    coordinates: { lat: 48.1769, lng: 11.5594 },
    openingHours: 'Tue-Sun: 10:00 - 18:00. Closed Mon.',
    category: 'museum'
  },
  {
    id: '13',
    name: 'St. Peter\'s Church, Munich',
    description: 'Munich\'s oldest parish church, dating back to the 12th century, with a distinctive tower known as "Alter Peter" (Old Peter) offering panoramic views of the city. Its Baroque interior is richly decorated. It\'s located near Marienplatz. It is said that the church was built on the site of a Roman settlement.',
    coordinates: { lat: 48.1367, lng: 11.5758 },
    openingHours: 'Church: Daily ~7:30-19:00. Tower: Daily, seasonal hours (opens 9:00/10:00, closes 17:30-19:30). Check locally.',
    freeEntryInfo: 'Church entry free. Tower climb requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '14',
    name: 'Karlsplatz (Stachus)',
    description: 'A large square and transport hub located at the western end of Munich\'s pedestrian zone. It features the historic Karlstor city gate, a remnant of the medieval fortifications, and a large fountain. It\'s a busy intersection and a popular meeting point. It is said that it was named after Elector Karl Theodor.',
    coordinates: { lat: 48.1397, lng: 11.5656 },
    category: 'landmark'
  },
  {
    id: '15',
    name: 'Bavaria statue',
    description: 'A monumental bronze statue symbolizing the Bavarian homeland, located in front of the Ruhmeshalle (Hall of Fame). Completed in 1850, it stands over 20 meters tall and offers views from its head. It\'s an iconic symbol of Munich and Bavaria. It is said that it was designed to embody the spirit and strength of Bavaria.',
    coordinates: { lat: 48.1308, lng: 11.5467 },
    openingHours: 'Statue Head Access: Apr-Oct 15, daily 9:00-18:00. Closed Oct 16-Mar.',
    freeEntryInfo: 'Requires paid ticket to climb statue.',
    category: 'landmark'
  }
];
