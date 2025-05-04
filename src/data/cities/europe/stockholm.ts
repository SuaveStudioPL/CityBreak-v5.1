import { Attraction } from '../../../types/attractions';


export const stockholmAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Vasa Museum',
    description: 'A maritime museum displaying the remarkably preserved 17th-century warship Vasa, which sank on its maiden voyage in 1628. Marvel at the intricate wooden carvings and learn about the ship\'s history and maritime archaeology. A unique glimpse into Sweden\'s naval past. It is said that a curse caused the ship to sink.',
    coordinates: { lat: 59.32794, lng: 18.09139 },
    openingHours: 'Daily, seasonal hours (Summer 8:30-18:00, Winter 10:00-17:00, Wed until 20:00).',
    category: 'museum'
  },
  {
    id: '2',
    name: 'Gamla Stan',
    description: 'Stockholm’s medieval old town, characterized by its cobblestone streets, narrow alleyways, and colorful pastel buildings. Visit Stortorget, the main square, and the Royal Palace. Explore its charming shops and restaurants. A fairy-tale atmosphere steeped in history. It is said that it was founded in the 13th century.',
    coordinates: { lat: 59.3258, lng: 18.0706 },
    category: 'historic'
  },
  {
    id: '3',
    name: 'Stockholm City Hall',
    description: 'An iconic red-brick building, one of Stockholm\'s most recognizable landmarks, where the annual Nobel Prize banquet is held. Climb the tower for panoramic city views or take a tour of the Golden Hall with its stunning mosaics and the Blue Hall. A symbol of Stockholm and Swedish civic pride. It is said that its design was inspired by Italian palaces.',
    coordinates: { lat: 59.3275, lng: 18.0544 },
    openingHours: 'Interior: Guided tours only, daily ~10:00-15:00. Tower: Seasonal (May-Sep), daily ~9:15-17:30. Check site.',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Skansen',
    description: 'The world’s oldest open-air museum, located on the island of Djurgården, showcasing traditional Swedish life and architecture from different periods. Meet Nordic animals, explore historic farmsteads, and learn about Swedish customs and traditions. A family-friendly and educational experience. It is said that it was founded to preserve Swedish cultural heritage.',
    coordinates: { lat: 59.3244, lng: 18.1017 },
    openingHours: 'Daily, seasonal hours (Summer 10:00-18:00/22:00, Winter 10:00-15:00/16:00). Check official site.',
    category: 'museum'
  },
  {
    id: '5',
    name: 'ABBA The Museum',
    description: 'An interactive museum dedicated to the iconic Swedish pop group ABBA. Sing along to their hits, dance to virtual performances, and try on virtual stage outfits. A must-visit for ABBA fans of all ages. Located on the island of Djurgården. It is said that you\'ll leave singing "Dancing Queen."',
    coordinates: { lat: 59.3242, lng: 18.0961 },
    openingHours: 'Daily from 10:00. Closing varies (18:00/20:00). Check official site.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Drottningholm Palace',
    description: 'A UNESCO World Heritage site, located on an island in Lake Mälaren, serving as the private residence of the Swedish royal family. Explore its Baroque gardens, the Chinese Pavilion, and the palace theater. Often referred to as the "Versailles of the North." It is said that it was named after Queen Hedwig Eleonora.',
    coordinates: { lat: 59.3219, lng: 17.8864 },
    openingHours: 'Palace/Pavilion: Seasonal (Summer daily, shoulder weekends). Park: Daily, year-round. Check site.',
    freeEntryInfo: 'Park free. Palace/Pavilion require paid ticket.',
    category: 'historic'
  },
  {
    id: '7',
    name: 'Fotografiska',
    description: 'A contemporary photography museum housed in a former customs house on Södermalm. It features rotating exhibitions by renowned photographers and a rooftop café offering panoramic views of Stockholm. A feast for the eyes and a hub for photography enthusiasts. It is said that the building is haunted by the ghosts of customs officers.',
    coordinates: { lat: 59.317786, lng: 18.084722 },
    openingHours: 'Daily 10:00 - 23:00.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Djurgården',
    description: 'A green island in central Stockholm, home to many of the city\'s most popular museums and attractions, including the Vasa Museum, Skansen, and ABBA The Museum. Rent a bike, enjoy a picnic by the water, or stroll along its walking trails. Stockholm’s recreational heart. It is said that it was once the royal hunting grounds.',
    coordinates: { lat: 59.3258, lng: 18.1186 },
    openingHours: 'Park areas open 24/7. Attractions have own hours.',
    category: 'nature'
  },
  {
    id: '9',
    name: 'Stockholm Palace',
    description: 'One of Europe’s largest palaces, located in Gamla Stan, serving as the official residence of the Swedish monarch. Explore its state apartments, museums, and treasury. Witness the changing of the guard ceremony. A magnificent example of Baroque architecture in the city center. It is said that it was built on the site of a medieval castle.',
    coordinates: { lat: 59.3269, lng: 18.0703 },
    openingHours: 'Royal Apartments/Treasury/Museums: Daily, seasonal hours (Summer 10-17, Winter 10-16). Check site.',
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Moderna Museet',
    description: 'Sweden’s premier museum of modern and contemporary art, located on the island of Skeppsholmen. It features works by renowned artists such as Picasso, Dali, and Swedish masters. Enjoy free admission to its permanent collections. A creative hub for art lovers. It is said that the museum\'s collection started with a donation of private art.',
    coordinates: { lat: 59.326389, lng: 18.083611 },
    openingHours: 'Tue/Wed/Fri/Sat/Sun: 10:00-18:00, Thu: 10:00-20:00. Closed Mon.',
    freeEntryInfo: 'Permanent collection free. Temporary exhibitions require paid ticket.',
    category: 'museum'
  },
  {
    id: '11',
    name: 'Stockholm Archipelago',
    description: 'A stunning network of over 30,000 islands and islets stretching out from Stockholm into the Baltic Sea. Take a ferry to popular islands like Grinda or Vaxholm for hiking, swimming, and experiencing the unique natural beauty of Sweden. A natural escape just a short distance from the city. It is said that Vikings used these islands as hideouts.',
    coordinates: { lat: 59.3333, lng: 18.5 },
    category: 'nature'
  },
  {
    id: '12',
    name: 'Södermalm',
    description: 'A trendy and bohemian district in Stockholm, known for its vintage shops, hip cafes, art galleries, and street art. Explore Fotografiska, enjoy sunset views from Monteliusvägen, and discover its unique character. Often compared to Brooklyn, New York. It is said that it was once considered the working-class area of Stockholm.',
    coordinates: { lat: 59.313056, lng: 18.068056 },
    category: 'historic'
  }
];
