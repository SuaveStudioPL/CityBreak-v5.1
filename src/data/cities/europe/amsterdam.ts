import { Attraction } from '../../../types/attractions';

export const amsterdamAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Rijksmuseum',
    description: "The Netherlands’ premier art museum, home to Rembrandt’s 'Night Watch', Vermeer’s 'Milkmaid', Asselijn's 'The Threatened Swan', and Adriaen Coorte's 'Still Life with Asparagus'. Wander through 800 years of Dutch art and history. A cultural pilgrimage. The museum also houses masterpieces from the Dutch Golden Age, making it a must-visit for art lovers and history enthusiasts alike.",
    coordinates: { lat: 52.36, lng: 4.8852 },
    openingHours: '9:00 - 17:00',
    category: 'museum'
  },
  {
    id: '2',
    name: 'Van Gogh Museum',
    description: "The largest collection of Van Gogh’s paintings, including masterpieces like 'Sunflowers', 'Almond Blossoms', 'The Potato Eaters', and 'The Bedroom'. Explore his life and post-Impressionist legacy. A must for art enthusiasts. The museum also provides insight into his troubled life, his relationships, and the emotional depth of his work, making it a poignant experience.",
    coordinates: { lat: 52.3584, lng: 4.8811 },
    openingHours: 'Daily: 9:00 - 18:00, Fri: 9:00 - 21:00',
    category: 'museum'
  },
  {
    id: '3',
    name: 'Anne Frank House',
    description: "The hiding place where Anne Frank wrote her diary during WWII. Tour the secret annex and reflect on human resilience. Book tickets months in advance. The museum preserves Anne's original diary and showcases exhibits on the Holocaust, offering an emotional and educational experience on human rights and history.",
    coordinates: { lat: 52.3753, lng: 4.884 },
    openingHours: '9:00 - 22:00',
    category: 'museum'
  },
  {
    id: '4',
    name: 'Canals of Amsterdam',
    description: "A UNESCO-listed network of 17th-century canals. Cruise past gabled houses or stroll along Herengracht and Prinsengracht. Amsterdam’s iconic postcard scenery. The canal ring is not only a beautiful sight but also an engineering marvel, designed in the Golden Age as a key part of the city’s urban expansion.",
    coordinates: { lat: 52.368, lng: 4.8903 },
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Vondelpark',
    description: "Amsterdam’s largest park, perfect for cycling, picnics, and open-air concerts. Spot herons and parakeets in this urban oasis. A local favorite year-round. Originally designed in 1850, Vondelpark has become a symbol of Dutch relaxation and outdoor culture, offering a retreat from the bustling city center.",
    coordinates: { lat: 52.3587, lng: 4.8676 },
    category: 'park'
  },
  {
    id: '6',
    name: 'Jordaan',
    description: "A picturesque district with narrow streets, indie boutiques, and cozy cafes. Visit the Noordermarkt flea market on weekends. Amsterdam’s bohemian soul. Once a working-class neighborhood, it is now one of the trendiest areas in Amsterdam, known for its charming canals, art galleries, and vibrant culture.",
    coordinates: { lat: 52.3744, lng: 4.8836 },
    category: 'historic'
  },
  {
    id: '7',
    name: "A'DAM Tower",
    description: "A rooftop observation deck with panoramic views and Europe’s highest swing. Ride the elevator to the 20th floor for a thrilling perspective. Modern Amsterdam’s skyline. The A'DAM Tower also houses a revolving restaurant and a club, making it a hotspot for nightlife and unforgettable views of the city.",
    coordinates: { lat: 52.3883, lng: 4.8994 },
    openingHours: '10:00 - 22:00',
    category: 'landmark',
    imageUrls: ['https://images.pexels.com/photos/28683728/pexels-photo-28683728/free-photo-of-a-dam-lookout-tower-in-amsterdam-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1']
  },
  {
    id: '8',
    name: 'Albert Cuyp Market',
    description: "Amsterdam’s largest street market, selling stroopwafels, cheese, and vintage goods. Taste local flavors like raw herring or poffertjes. A feast for the senses. With over 260 stalls, the market is a vibrant place where you can experience the heart of local life and enjoy Amsterdam’s street food culture.",
    coordinates: { lat: 52.3552, lng: 4.8927 },
    openingHours: 'Mon-Sat: 9:30 - 17:00',
    category: 'market'
  },
  {
    id: '9',
    name: 'Heineken Experience',
    description: "An interactive tour of the former Heineken brewery. Learn brewing history, taste beer, and create personalized bottles. Cheers to Dutch beer culture! Located in a historic brewery building, this immersive experience takes visitors through the beer-making process while celebrating Heineken’s global impact.",
    coordinates: { lat: 52.3577, lng: 4.8914 },
    openingHours: 'Mon-Thu: 10:30 - 19:30, Fri-Sun: 10:30 - 21:00 (Jul-Aug: Daily 10:30 - 21:00)',
    category: 'museum'
  },
  {
    id: '10',
    name: 'NEMO (museum)',
    description: "A family-friendly museum with hands-on science exhibits. Climb to the rooftop terrace for views of the harbor. Learning through play. With interactive displays and fun experiments, NEMO is perfect for children and curious adults, offering an engaging way to explore science, technology, and innovation.",
    coordinates: { lat: 52.3731, lng: 4.9125 },
    openingHours: '10:00 - 17:30',
    category: 'science'
  },
  {
    id: '11',
    name: 'Begijnhof, Amsterdam',
    description: "A tranquil courtyard dating to the Middle Ages, once home to a Catholic sisterhood. Admire the hidden chapel and Amsterdam’s oldest house. A serene escape. The Begijnhof is a rare oasis of peace in the city, preserving the heritage of the Beguine women who once lived here in devotion and solitude.",
    coordinates: { lat: 52.3692, lng: 4.8897 },
    openingHours: '10:00 - 18:00',
    category: 'historic'
  },
  {
    id: '12',
    name: 'De Wallen',
    description: "Amsterdam's infamous Red Light District, known for neon-lit windows and coffee shops. Explore the Oude Kerk (Old Church) or take a guided night tour. A blend of vice and history. Despite its modern reputation, De Wallen has a deep historical background, with buildings dating back to the 14th century and a fascinating past tied to Amsterdam's maritime heritage.",
    coordinates: { lat: 52.3717, lng: 4.8961 },
    category: 'historic'
  }
];
