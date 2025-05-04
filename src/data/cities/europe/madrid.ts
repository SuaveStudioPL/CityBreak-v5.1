import { Attraction } from '../../../types/attractions';


export const madridAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Royal Palace of Madrid',
    description: 'The official residence of the Spanish Royal Family, though they primarily live elsewhere. One of the largest royal palaces in Europe, with over 3,400 rooms, though only some are open to the public. Built in the 18th century on the site of a former Alcázar. Its opulent interiors showcase Spanish history and art. It is said that secret tunnels connect it to other parts of the city.',
    coordinates: { lat: 40.4167, lng: -3.713 },
    openingHours: 'Daily. Summer (Apr-Sep): 10:00-19:00/20:00. Winter (Oct-Mar): 10:00-18:00. Last entry 1h before close. Check site for closures.',
    freeEntryInfo: 'Free Mon-Thu 17:00-19:00 (Apr-Sep) / 16:00-18:00 (Oct-Mar) for EU/Latin American citizens. Free May 18, Oct 12.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Museo del Prado',
    description: 'One of the world\'s finest art museums, housing an extensive collection of Spanish and European art from the 12th to the early 20th century. Masterpieces by Goya, Velázquez (including "Las Meninas"), and El Greco are highlights. Founded in 1819, it was originally intended to house part of the Spanish royal collection. It is said that some paintings come to life at night.',
    coordinates: { lat: 40.4138, lng: -3.6922 },
    openingHours: 'Mon-Sat: 10:00-20:00. Sun/Holidays: 10:00-19:00. Closed Jan 1, May 1, Dec 25.',
    freeEntryInfo: 'Free entry Mon-Sat 18:00-20:00 & Sun/Holidays 17:00-19:00. Also free Nov 19, May 18.',
    category: 'museum'
  },
  {
    id: '3',
    name: 'Parque del Buen Retiro, Madrid',
    description: 'A large and beautiful park in the city center, once belonging to the Spanish monarchy. It features gardens, fountains (like the Crystal Palace), a boating lake, and cultural events. A peaceful oasis in the bustling city. It is said that it was a favorite retreat of Spanish royalty, with secret gardens and hidden paths.',
    coordinates: { lat: 40.414, lng: -3.682 },
    openingHours: 'Daily. Summer (Apr-Sep): 6:00-24:00. Winter (Oct-Mar): 6:00-22:00.',
    category: 'nature'
  },
  {
    id: '4',
    name: 'Puerta del Sol',
    description: 'A central square and one of the most famous landmarks in Madrid. It\'s the kilometer zero point from which all Spanish roads are measured. The Royal House of the Post Office, the statue of the Bear and the Strawberry Tree (symbol of Madrid), and the Mariblanca statue are located here. It\'s a popular meeting point and site for celebrations. It is said that it was named after a sun gate in the old city wall.',
    coordinates: { lat: 40.4167, lng: -3.7035 },
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Gran Vía, Madrid',
    description: 'A major shopping street in Madrid, known for its architecture, theaters, and nightlife. Construction began in the early 20th century to connect the city center with the northwest. It features a mix of architectural styles, from Art Deco to Baroque. It is said that it was controversial when built, requiring the demolition of many old buildings.',
    coordinates: { lat: 40.42, lng: -3.7025 },
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Santiago Bernabéu Stadium',
    description: 'Home stadium of Real Madrid CF, one of the most successful football clubs in the world. Opened in 1947, it has a capacity of over 80,000. Stadium tours are available, including the trophy room. The atmosphere on match days is electric. It is said that the stadium is named after Real Madrid\'s legendary president, Santiago Bernabéu.',
    coordinates: { lat: 40.453, lng: -3.688 },
    openingHours: 'Non-Match Days: Mon-Sat 9:30-19:00, Sun/Holidays 10:00-18:30. Match Days: Tours end 5h before kick-off. Check site.',
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Temple of Debod',
    description: 'An ancient Egyptian temple that was a gift to Spain from Egypt for helping to save the temples of Nubia. Reconstructed in Madrid\'s Parque del Oeste. It dates back to the 2nd century BC. It\'s a popular spot to watch the sunset over the city. It is said that the temple has a magical aura, especially at dusk.',
    coordinates: { lat: 40.422, lng: -3.718 },
    openingHours: 'Tue-Sun & Holidays: 10:00-20:00 (Winter) / 10:00-19:00 (Summer). Closed Mon & specific holidays.',
    freeEntryInfo: 'Free entry.',
    category: 'historic'
  },
  {
    id: '8',
    name: 'Market of San Miguel',
    description: 'A popular food market housed in a beautiful iron structure from the early 20th century. It offers a variety of Spanish tapas, wines, and gourmet products. A great place to experience Spanish cuisine and atmosphere. It is said that it was originally a fish market.',
    coordinates: { lat: 40.4155, lng: -3.7085 },
    openingHours: 'Sun-Thu: 10:00 - 24:00. Fri-Sat & Holiday Eves: 10:00 - 01:00.',
    category: 'local_market'
  },
  {
    id: '9',
    name: 'Fountain of Cybele',
    description: 'An iconic fountain in Plaza de Cibeles, depicting the goddess Cybele on a lion-drawn chariot. It\'s surrounded by impressive buildings, including the Cibeles Palace. A symbol of Madrid and a gathering place for Real Madrid fans celebrating victories. It is said that the water from the fountain has magical properties.',
    coordinates: { lat: 40.4195, lng: -3.6935 },
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Plaza Mayor, Madrid',
    description: 'A grand square surrounded by historic buildings with arcades, dating back to the Habsburg era. It has been the site of bullfights, executions, and royal ceremonies. Today, it hosts a Christmas market and other events. It is said that each of the buildings around the square has its own story.',
    coordinates: { lat: 40.4153, lng: -3.7075 },
    category: 'landmark'
  },
  {
    id: '11',
    name: 'Thyssen-Bornemisza Museum',
    description: 'An art museum forming part of Madrid\'s "Golden Triangle of Art" along with the Prado and Reina Sofía. It houses a diverse collection spanning from the 13th to the 20th century, including Impressionist, Expressionist, and modern art. Originally a private collection, it was acquired by the Spanish state. It is said that some of the paintings were acquired under mysterious circumstances.',
    coordinates: { lat: 40.415, lng: -3.695 },
    openingHours: 'Permanent Collection: Tue-Sun 10:00-19:00, Mon 12:00-16:00. Temporary Exhibitions: Tue-Sun 10:00-19:00 (sometimes later).',
    freeEntryInfo: 'Permanent Collection free Mon 12:00-16:00. Temporary Exhibitions free Sat nights 21:00-23:00.',
    category: 'museum'
  },
  {
    id: '12',
    name: 'Real Jardín Botánico de Madrid',
    description: 'A beautiful botanical garden located near the Prado Museum, founded in the 18th century. It houses diverse plant species from around the world, including medicinal and ornamental plants. A peaceful escape from the city bustle. It is said that it was originally intended for the study of plants for the royal pharmacy.',
    coordinates: { lat: 40.4125, lng: -3.6875 },
    openingHours: 'Daily from 10:00. Closing varies seasonally (18:00 winter - 21:00 summer). Closed Dec 25, Jan 1.',
    freeEntryInfo: 'Requires paid ticket. Free entry Tuesdays after 14:00.',
    category: 'nature'
  },
  {
    id: '13',
    name: 'Almudena Cathedral',
    description: 'Madrid\'s main cathedral, located next to the Royal Palace. A relatively modern structure, with construction spanning from the late 19th to the late 20th century. Its architecture is a mix of styles, including Neoclassical and Gothic Revival. It is said that it was built on the site of a former mosque.',
    coordinates: { lat: 40.415586, lng: -3.714558 },
    openingHours: 'Cathedral: Mon-Sat 10:00-19:30/20:00, Sun 10:30-12:30 & 13:30-19:30 (restricted during services). Museum/Dome: Mon-Sat 10:00-14:30.',
    freeEntryInfo: 'Cathedral entry free (donation requested). Museum/Dome require paid ticket.',
    category: 'landmark'
  },
  {
    id: '14',
    name: 'Sorolla Museum',
    description: 'Museum dedicated to the works of the Spanish painter Joaquín Sorolla, housed in his former home and studio. It showcases his Impressionistic style and his depictions of Spanish life and landscapes. A charming glimpse into the artist\'s world. It is said that the garden is preserved as Sorolla left it.',
    coordinates: { lat: 40.435, lng: -3.698 },
    openingHours: 'Tue-Sat: 9:30-20:00, Sun/Holidays: 10:00-15:00. Closed Mon & specific holidays. (Note: Check official site for temporary closures).',
    freeEntryInfo: 'Free entry Sat 14:00-20:00 & Sun 10:00-15:00.',
    category: 'museum'
  },
  {
    id: '15',
    name: 'Statue of the Bear and the Strawberry Tree',
    description: 'Iconic bronze statue located in Puerta del Sol, depicting a bear reaching up to eat from a strawberry tree (madroño). It\'s the symbol of Madrid and a popular meeting point. The strawberry tree was once common in the area. It is said that it represents the city\'s history and its ties to the forest.',
    coordinates: { lat: 40.417, lng: -3.7024 },
    category: 'landmark'
  }
];
