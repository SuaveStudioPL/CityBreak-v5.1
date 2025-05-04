import { Attraction } from '../../../types/attractions';


export const zagrebAttractions: Attraction[] = [
  {
    id: '1',
    name: 'St. Mark\'s Church, Zagreb',
    description: 'An iconic church in Zagreb\'s Upper Town, famous for its colorful tiled roof depicting the medieval coat of arms of Croatia, Dalmatia, and Slavonia, as well as the coat of arms of Zagreb itself. A beautiful example of Croatian national romanticism. It is said that the tiles were laid by craftsmen who had to finish the work without any prior sketches.',
    coordinates: { lat: 45.816389, lng: 15.973889 },
    openingHours: 'Interior generally accessible only during Mass times (Mon-Sat 7:30 & 18:00, Sun 10:00/11:00 & 18:00 approx).',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Zagreb Cathedral',
    description: 'A magnificent Gothic cathedral with twin spires, the tallest building in Croatia. (NOTE: Currently CLOSED for renovation due to 2020 earthquake damage). Its history dates back to the 11th century. Houses the tomb of Cardinal Stepinac. It is said that the cathedral bells can ward off storms.',
    coordinates: { lat: 45.814444, lng: 15.979722 },
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Ban Jelačić Square',
    description: 'The central square of Zagreb and the heart of the city\'s pedestrian zone. A bustling meeting point, surrounded by historic buildings and monuments, including the statue of Ban Josip Jelačić. It serves as a stage for various events and celebrations. It is said that the square was once a marketplace outside the city walls.',
    coordinates: { lat: 45.813056, lng: 15.977222 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Dolac Market',
    description: 'A vibrant and colorful open-air market, known as "Zagreb\'s belly," located just above Ban Jelačić Square. Here, you can find fresh produce, flowers, meat, cheese, and local crafts. The market is famous for its red parasols. A lively place to experience local culture and cuisine. Some sources claim you can find the freshest ingredients here.',
    coordinates: { lat: 45.813056, lng: 15.977222 },
    openingHours: 'Daily. Mon-Sat ~7:00-14:00/15:00, Sun ~7:00-13:00.',
    category: 'local_market'
  },
  {
    id: '5',
    name: 'Museum of Broken Relationships',
    description: 'A unique and thought-provoking museum displaying personal objects and stories from failed relationships. Each item comes with a brief description, offering insights into love, loss, and heartbreak. A popular attraction that has inspired similar museums around the world. It is said that leaving an object here can help in the healing process.',
    coordinates: { lat: 45.815, lng: 15.973611 },
    openingHours: 'Daily, seasonal hours (Summer 9:00-22:30, Winter 10:00-21:00). Closed major holidays.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Mirogoj Cemetery',
    description: 'Considered one of the most beautiful cemeteries in Europe, Mirogoj is a monumental complex with stunning arcades, domes, and sculptures. Designed by Hermann Bollé, it serves as the final resting place for many prominent Croatians. An architectural gem and a peaceful place for reflection. It is said that it was built on the site of a former vineyard.',
    coordinates: { lat: 45.835, lng: 15.986 },
    openingHours: 'Daily, seasonal hours (Summer 6:00-20:00, Winter 7:30-18:00).',
    category: 'historic'
  },
  {
    id: '7',
    name: 'Lotrščak Tower',
    description: 'A 13th-century defense tower located in Zagreb\'s Upper Town, known for its daily firing of a cannon at noon, a tradition that dates back centuries. Climb to the top for panoramic views of the city. It is said that the cannon was fired to warn the city\'s defenders. The shortest funicular in the world connects the Lower and Upper Towns near the tower.',
    coordinates: { lat: 45.814722, lng: 15.973056 },
    openingHours: 'Daily, approx Mon-Fri 9/11-19/20, Sat-Sun 10/11-19/20. Check locally.',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Croatian National Theatre in Zagreb',
    description: 'A magnificent Neo-Baroque building that hosts opera, ballet, and drama performances. Designed by Fellner & Helmer, it is one of Zagreb\'s architectural gems and a center of Croatian culture. Many famous artists have performed here. It is said that the theater is haunted by a "White Lady" ghost.',
    coordinates: { lat: 45.809444, lng: 15.97 },
    openingHours: 'Open for performances (evenings). Box Office: Mon-Fri 10-19:30, Sat 10-13 & before shows. Check site.',
    category: 'cultural'
  },
  {
    id: '9',
    name: 'Maksimir Park',
    description: 'The largest and oldest park in Zagreb, offering lakes, a zoo, walking trails, and recreational areas. It was designed in the English style and provides a green oasis for relaxation and outdoor activities. A popular destination for families. It is said that it was named after Bishop Maksimilijan Vrhovac.',
    coordinates: { lat: 45.829722, lng: 16.020556 },
    openingHours: 'Park open 24/7. Zoo: Daily from 9:00, closing varies seasonally (16:00-20:00).',
    freeEntryInfo: 'Park free. Zoo requires paid ticket.',
    category: 'nature'
  },
  {
    id: '10',
    name: 'Tkalčićeva Street',
    description: 'A vibrant and pedestrian-friendly street lined with numerous cafes, bars, and restaurants, making it a popular spot for socializing, especially in the evenings. Once a stream separating two settlements, today it\'s the heart of Zagreb\'s nightlife. It is said that it was named after a historian, Ivan Tkalčić.',
    coordinates: { lat: 45.817222, lng: 15.977222 },
    category: 'local'
  }
];
