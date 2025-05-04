import { Attraction } from '../../../types/attractions';


export const parisAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Eiffel Tower',
    description: 'The iconic symbol of Paris, an iron lattice tower constructed in 1889 for the World\'s Fair. Initially criticized by some of France\'s leading artists and intellectuals for its design, it has become one of the most recognizable structures in the world, offering breathtaking panoramic views of the city. It is said that Gustave Eiffel designed a secret apartment for himself at the top.',
    coordinates: { lat: 48.8584, lng: 2.2945 },
    openingHours: 'Daily 9:15/9:30 - 23:45/00:45 (last ascent ~1h before close). Check official site.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Louvre Museum',
    description: 'One of the largest and most visited museums in the world, housed in a former royal palace. Its collection spans millennia and continents, featuring masterpieces like the Mona Lisa, Venus de Milo, and Winged Victory of Samothrace. The museum\'s modern glass pyramid entrance is also a notable landmark. It is said that the pyramid\'s number of glass segments is shrouded in mystery.',
    coordinates: { lat: 48.8606, lng: 2.3376 },
    openingHours: 'Daily 9:00-18:00 (Fri until 21:45). Closed Tue, Jan 1, May 1, Dec 25.',
    freeEntryInfo: 'Free 1st Fri after 18:00 (except Jul/Aug) & Jul 14. Free under 18s & EU/EEA 18-25s.',
    category: 'museum'
  },
  {
    id: '3',
    name: 'Notre-Dame de Paris',
    description: 'A magnificent Gothic cathedral on the Île de la Cité, considered a masterpiece of French Gothic architecture. Construction began in the 12th century. Famous for its stained glass windows, gargoyles, and flying buttresses. Severely damaged by fire in 2019, it reopened in Dec 2024 after reconstruction. It is said that it houses relics of the Passion of Christ.',
    coordinates: { lat: 48.853, lng: 2.3499 },
    openingHours: 'Daily 7:45 - 19:00 (restricted during services).',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Avenue des Champs-Élysées',
    description: 'A famous avenue in Paris, known for its theaters, cafes, luxury shops, and the annual Bastille Day military parade. It stretches from Place de la Concorde to the Arc de Triomphe. A symbol of Parisian grandeur and elegance. It is said that it was originally fields before being transformed into a grand promenade.',
    coordinates: { lat: 48.869722, lng: 2.3075},
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Montmartre',
    description: 'A historic artists\' district located on a hill in the north of Paris, famous for the Sacré-Cœur Basilica, Place du Tertre where artists create and sell their work, and the Moulin Rouge cabaret. It offers charming streets and bohemian atmosphere. It is said that it was named after the Roman temple to Mars built on its summit.',
    coordinates: { lat: 48.8864, lng: 2.343 },
    category: 'historic'
  },
  {
    id: '6',
    name: 'Musée d\'Orsay',
    description: 'A museum housed in a former Beaux-Arts railway station, the Gare d\'Orsay. It holds the world\'s largest collection of Impressionist and Post-Impressionist masterpieces, including works by Monet, Van Gogh, Degas, and Renoir. The building itself is an architectural marvel. It is said that the station was almost demolished before being converted into a museum.',
    coordinates: { lat: 48.86, lng: 2.3266 },
    openingHours: 'Tue-Sun: 9:30-18:00 (Thu until 21:45). Closed Mon, May 1, Dec 25.',
    freeEntryInfo: 'Free 1st Sunday of month. Free under 18s & EU/EEA 18-25s.',
    category: 'museum'
  },
  {
    id: '7',
    name: 'Le Marais',
    description: 'A historic district in Paris, known for its narrow streets, well-preserved medieval and Renaissance architecture, art galleries, boutiques, and vibrant LGBTQ+ scene. It was once the aristocratic district of Paris. Explore its hidden courtyards and charming squares like Place des Vosges. It is said that it was saved from demolition due to its historical significance.',
    coordinates: { lat: 48.86, lng: 2.360833 },
    category: 'historic'
  },
  {
    id: '8',
    name: 'Canal Saint-Martin, Paris',
    description: 'A picturesque canal in Paris, popular for its trendy cafes, bars, boutiques, and relaxed atmosphere. Stroll along its banks, cross its iron footbridges, and enjoy the bohemian vibe. It was built in the early 19th century to supply Paris with fresh water. It is said that it was once used for secret underground passages.',
    coordinates: { lat: 48.874892, lng: 2.363386 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Canal_Saint-Martin_1.jpg/500px-Canal_Saint-Martin_1.jpg']
  },
  {
    id: '9',
    name: 'Place des Vosges',
    description: 'One of the oldest planned squares in Paris, located in the Marais district. Surrounded by elegant 17th-century townhouses with arcades, it was once a royal square and a center of Parisian social life. Victor Hugo lived here. It is said that it was the first example of urban planning in Paris.',
    coordinates: { lat: 48.855556, lng: 2.365556 },
    category: 'historic'
  },
  {
    id: '10',
    name: 'Père Lachaise Cemetery',
    description: 'The largest cemetery in Paris and one of the most famous in the world, known for the graves of numerous notable figures, including Oscar Wilde, Jim Morrison, Édith Piaf, and Frédéric Chopin. Its elaborate tombs and sculptures make it an open-air museum. It is said that touching Oscar Wilde\'s tomb brings good luck in love.',
    coordinates: { lat: 48.8608, lng: 2.3953 },
    openingHours: 'Daily. Summer: Mon-Fri 8:00-18:00, Sat 8:30-18:00, Sun/Hol 9:00-18:00. Winter: closes 17:30.',
    category: 'historic'
  },
  {
    id: '11',
    name: 'Latin Quarter, Paris',
    description: 'A historic student district on the left bank of the Seine, centered around the Sorbonne University. Known for its lively atmosphere, bookstores, cafes, and jazz clubs. It has been a center of intellectual and student life since the Middle Ages. It is said that it got its name from Latin being the primary language spoken in the area.',
    coordinates: { lat: 48.85, lng: 2.3425 },
    category: 'historic'
  },
  {
    id: '12',
    name: 'Palace of Versailles',
    description: 'A former royal residence located about 20 kilometers southwest of Paris, now a museum. It was the principal royal residence of the French kings from Louis XIV until the French Revolution. Its opulent palace, gardens, and the Hall of Mirrors are world-renowned. It is said that the palace was so grand it contributed to the French Revolution.',
    coordinates: { lat: 48.8078, lng: 2.1228 },
    openingHours: 'Palace/Trianon: Tue-Sun, seasonal hours (Summer 9:00-18:30, Winter 9:00-17:30). Gardens/Park: Daily, longer hours. Check site.',
    freeEntryInfo: 'Gardens free Nov-Mar (except show days). Park free. Palace/Trianon free 1st Sun (Nov-Mar) & for under 18s/EU 18-25s.',
    category: 'historic'
  },
  {
    id: '13',
    name: 'Disneyland Paris',
    description: 'An amusement park located in Marne-la-Vallée, about 32 kilometers east of Paris. It features two theme parks, Disneyland Park and Walt Disney Studios Park, as well as resorts, shopping, and entertainment. A popular destination for families and Disney fans. It is said that it was Walt Disney\'s dream to have a park in Europe.',
    coordinates: { lat: 48.8711, lng: 2.7822 },
    openingHours: 'Daily, hours vary significantly by park/season (generally opens 9:30, closes 19:00-23:00). Check official site.',
    category: 'attraction'
  }
];
