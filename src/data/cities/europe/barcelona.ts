import { Attraction } from '../../../types/attractions';

export const barcelonaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Sagrada Família',
    description: 'Monumental basilica designed by Gaudí, under construction since 1882. Inspired by nature, its intricate facades tell biblical stories. Gaudí devoted his life to this project, and after his death in 1926, construction continued based on his designs. Expected completion: 2026.',
    coordinates: { lat: 41.4036, lng: 2.1743 },
    openingHours: 'Nov-Feb: Mon-Sat 9:00-18:00, Sun 10:30-18:00. Mar & Oct: Mon-Sat 9:00-19:00, Sun 10:30-19:00. Apr-Sep: Mon-Sat 9:00-20:00, Sun 10:30-20:00.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Park Güell',
    description: 'Park with architectural elements by Gaudí, originally intended as a housing project. Its colorful mosaics and organic shapes reflect Gaudí’s love for nature. The park’s famous salamander, "El Drac," is one of Barcelona’s most photographed landmarks.',
    coordinates: { lat: 41.4141, lng: 2.1524 },
    openingHours: 'Daily from 9:30 AM, closing times vary seasonally. Check official website.',
    category: 'park'
  },
  {
    id: '3',
    name: 'Casa Batlló',
    description: 'A masterpiece by Gaudí with a facade inspired by marine life. The building’s design is said to reference Saint George, Catalonia’s patron saint, with the roof resembling a dragon’s back and the balconies symbolizing skulls of its victims.',
    coordinates: { lat: 41.3917, lng: 2.164 },
    openingHours: 'Daily 9:00 - 22:00 (Last admission 21:00).',
    category: 'historic'
  },
  {
    id: '4',
    name: 'La Rambla, Barcelona',
    description: 'A lively boulevard lined with cafes, street performers, and historic buildings. Originally a dried riverbed, it became the city’s main promenade in the 18th century. A statue of Christopher Columbus at its end points towards the New World.',
    coordinates: { lat: 41.3814, lng: 2.1734 },
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Barcelona Museum of Contemporary Art',
    description: 'Museum featuring avant-garde artworks from the mid-20th century to today. Designed by Richard Meier, its minimalist white architecture contrasts sharply with the surrounding Gothic Quarter. It is also a well-known gathering spot for skateboarders.',
    coordinates: { lat: 41.3841, lng: 2.1659 },
    openingHours: 'Weekdays: 11:00-19:30, Sat: 10:00-20:00, Sun/Holidays: 10:00-15:00. Closed Tue.',
    freeEntryInfo: 'Free entry Saturdays 16:00-20:00, May 18, Sept 24 (approx). Check official website.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Gothic Quarter, Barcelona',
    description: 'Historic district with narrow medieval streets, Roman ruins, and Gothic churches. The Barcelona Cathedral, built between the 13th and 15th centuries, is home to 13 white geese, symbolizing Saint Eulalia, the city’s patron saint.',
    coordinates: { lat: 41.3851, lng: 2.177 },
    category: 'historic'
  },
  {
    id: '7',
    name: 'La Barceloneta',
    description: 'A historic seaside neighborhood built in the 18th century for displaced residents. Known for its beaches and seafood restaurants, it also houses the iconic W Hotel, which resembles a sail and has become a modern landmark.',
    coordinates: { lat: 41.3758, lng: 2.1906 },
    category: 'park',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Barcelona_Palau_de_Mar_%2851136255137%29.jpg/250px-Barcelona_Palau_de_Mar_%2851136255137%29.jpg']
  },
  {
    id: '8',
    name: 'La Ribera',
    description: 'A vibrant district once home to merchants and artisans. The Santa Maria del Mar church, built in the 14th century, is a stunning example of Catalan Gothic architecture. It was constructed entirely by local dock workers and traders.',
    coordinates: { lat: 41.3845, lng: 2.1824 },
    category: 'historic'
  },
  {
    id: '9',
    name: 'La Boqueria',
    description: 'Barcelona’s most famous market, dating back to 1217 as a meat trading post. Today, it offers fresh produce, seafood, and local specialties, attracting both tourists and chefs. The entrance is marked by an iconic stained-glass arch.',
    coordinates: { lat: 41.3807, lng: 2.1702 },
    openingHours: 'Mon-Sat: 8:00 - 20:30. Closed Sun.',
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Montjuïc',
    description: 'A historic hill with lush gardens, museums, and the Montjuïc Castle. It was the site of the 1992 Olympic Games and offers breathtaking views of the city and harbor. The Magic Fountain at its base hosts evening light and music shows.',
    coordinates: { lat: 41.3685, lng: 2.1527 },
    category: 'landmark'
  },
  {
    id: '11',
    name: 'Camp Nou',
    description: 'The home stadium of FC Barcelona since 1957 and one of the largest football stadiums in the world. It has hosted numerous international matches and is set for a major renovation to modernize its facilities.',
    coordinates: { lat: 41.380833, lng: 2.122778 },
    openingHours: 'Hours vary seasonally and affected by match days. Check official website. Generally opens 10:00, closes 18:30-20:00 (Mon-Sat), 14:30 (Sun/Holidays). Museum may open on match days, tour closed.',
    freeEntryInfo: 'Free entry for children under 4.',
    category: 'landmark'
  },
  {
    id: '12',
    name: 'Tibidabo Amusement Park',
    description: 'One of the oldest amusement parks in Europe, offering classic rides and panoramic views. The adjacent Temple of the Sacred Heart features a towering Christ statue, visible from many parts of the city.',
    coordinates: { lat: 41.4225, lng: 2.1228 },
    openingHours: 'Opening days/hours vary significantly by season (often weekends/holidays only). Check official website. Generally opens around 11:00.',
    category: 'landmark'
  },
  {
    id: '13',
    name: 'Aquarium Barcelona',
    description: 'Home to one of Europe’s largest marine life collections, including an 80-meter underwater tunnel. The aquarium specializes in Mediterranean marine species and is a popular educational center for marine conservation.',
    coordinates: { lat: 41.3769, lng: 2.1818 },
    openingHours: 'Daily from 10:00 AM, closing times vary seasonally (often 20:00 or 21:00).',
    category: 'landmark'
  },
  {
    id: '14',
    name: 'Magic Fountain of Montjuïc',
    description: 'A grand fountain built for the 1929 Barcelona International Exposition. It features synchronized water, light, and music performances in the evenings, drawing thousands of visitors to Montjuïc.',
    coordinates: { lat: 41.3692, lng: 2.1511 },
    openingHours: 'Show times vary seasonally and are subject to change (e.g., due to drought). Check official website. Typically evening shows on certain days.',
    category: 'landmark'
  },
  {
    id: '15',
    name: 'Turó de la Rovira',
    description: 'A viewpoint offering 360-degree views of Barcelona. Once an anti-aircraft battery during the Spanish Civil War, it is now a favorite spot for locals and tourists to watch the sunset.',
    coordinates: { lat: 41.4194, lng: 2.16174 },
    category: 'landmark'
  }
];
