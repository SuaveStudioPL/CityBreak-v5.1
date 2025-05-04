import { Attraction } from '../../../types/attractions';

export const warsawAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Palace of Culture and Science',
    description: 'An undeniable landmark dominating Warsaw\'s skyline, this monumental skyscraper stands as a controversial yet fascinating symbol. A "gift" from the Soviet Union, it offers breathtaking panoramic city views from its 30th-floor observation deck. Beyond the vistas, the building houses theaters, cinemas, museums, offices, and even a swimming pool, making it a vibrant, albeit historically charged, cultural and business hub in the heart of modern Warsaw. Its architecture is a blend of socialist realism and Polish historical styles.',
    coordinates: { lat: 52.2322, lng: 21.0066 },
    openingHours: 'Observation Deck: Daily 10:00 - 20:00. Check official site for specific venue hours.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Old Town',
    description: 'A meticulously reconstructed district listed as a UNESCO World Heritage site, the Old Town is the historical soul of Warsaw. Though largely destroyed during WWII, it was rebuilt using original plans and surviving fragments, a testament to Polish resilience. Its charming Market Square, enclosed by colourful burgher houses, is the central point, featuring the iconic Warsaw Mermaid statue, a symbol of the city and its protector according to legend. Wander through cobblestone streets, discover hidden courtyards, and soak in the atmosphere of centuries past.',
    coordinates: { lat: 52.2495, lng: 21.0122 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Warszawa_Stare_Miasto_%28dron%29.jpg/330px-Warszawa_Stare_Miasto_%28dron%29.jpg']
  },
  {
    id: '3',
    name: 'Royal Castle, Warsaw',
    description: 'Once the official residence of Polish monarchs, the Royal Castle on Castle Square boasts centuries of history. Tragically demolished by the Germans in WWII, it was painstakingly rebuilt in the 1970s and 80s using salvaged materials, historical documentation, and even pieces smuggled out during the war. Today, it functions as a museum showcasing opulent royal chambers, historical artifacts, and valuable art collections, including paintings by Rembrandt and Canaletto, offering a deep dive into Poland\'s regal past and the nation\'s determination to preserve its heritage.',
    coordinates: { lat: 52.2478, lng: 21.0154 },
    openingHours: 'Tue-Sun: 10:00-17:00 (seasonal variation applies, check site). Gardens: Daily 10:00-18:00/20:00 (seasonal).',
    freeEntryInfo: 'Free entry to permanent exhibitions on Wednesdays.',
    category: 'historic',
  },
  {
    id: '4',
    name: 'Łazienki Park',
    description: "Spanning 76 hectares, Łazienki Park (Royal Baths Park) is Warsaw's largest park, a magnificent blend of landscaped gardens, classical architecture, and wildlife. At its heart is the Palace on the Isle, a stunning neoclassical building. The park is famous for its Monument to Frédéric Chopin, near which free open-air piano concerts are held on summer Sundays. Peacocks roam freely, adding to the picturesque scenery. It's an ideal spot for leisurely walks, relaxation, and enjoying culture amidst nature.",
    coordinates: { lat: 52.2158, lng: 21.0357 },
    openingHours: 'Park: Daily, dawn till dusk. Museums within the park have varying hours (Tue-Sun ~10:00-16:00/18:00). Check official site for details.',
    freeEntryInfo: 'Park entry is free. Museums within the park offer free entry to permanent exhibitions on Fridays.',
    category: 'park',
  },
  {
    id: '5',
    name: 'Tomb of the Unknown Soldier, Warsaw',
    description: 'Located under the surviving arcades of the Saxon Palace in Saxon Garden, this solemn memorial honors Polish soldiers who made the ultimate sacrifice for their homeland without their identities being known. An eternal flame burns constantly, guarded by a military detachment. The ceremonial changing of the guard takes place here every hour, on the hour, drawing visitors who come to pay their respects and witness this display of national reverence and military tradition in a poignant historical setting.',
    coordinates: { lat: 52.2411, lng: 21.0112 },
    category: 'historic'
  },
  {
    id: '6',
    name: 'Copernicus Science Centre',
    description: 'Dive into the world of science through interactive exhibits at the Copernicus Science Centre, one of the most popular attractions in Warsaw. Designed for visitors of all ages, it encourages hands-on learning and experimentation across various fields like physics, biology, and chemistry. The centre also features a state-of-the-art planetarium, offering immersive shows about the universe. Its location on the Vistula embankment adds to its appeal as a modern hub for education and discovery, stimulating curiosity about the world around us.',
    coordinates: { lat: 52.2422, lng: 21.0281 },
    openingHours: 'Tue-Sun: opens 9/10, closes 18/19/20 (seasonal/daily variation). Closed Mon. Advance booking online is highly recommended, especially during peak times.',
    category: 'science'
  },
  {
    id: '7',
    name: 'Wilanow Palace',
    description: 'Often referred to as the "Polish Versailles," Wilanów Palace is a stunning Baroque royal residence that miraculously survived WWII largely intact, making it one of Poland\'s most important architectural monuments. Built for King John III Sobieski in the late 17th century, it showcases original architecture and opulent interiors. The palace is surrounded by exquisite historical gardens in various styles, including Baroque, English landscape, and English Chinese, offering a beautiful escape and a glimpse into the lavish lifestyle of Polish royalty.',
    coordinates: { lat: 52.1652, lng: 21.0906 },
    openingHours: 'Palace: Daily 10:00-16:00 (closed Tuesdays Nov-Dec). Park & Gardens: Daily 9:00 until 18:00 or 21:00 (seasonal). Check official site for variations and specific exhibit hours.',
    freeEntryInfo: 'Free entry to the palace (ground floor exhibitions) on Thursdays.',
    category: 'historic',
  },
  {
    id: '8',
    name: 'Castle Square, Warsaw',
    description: "Serving as the gateway to the Old Town, Castle Square is one of Warsaw's most iconic public spaces. Dominated by the magnificent Royal Castle and the towering Sigismund's Column, the oldest secular monument in Warsaw erected in 1644, the square is steeped in history. It's a popular meeting point, offering picturesque views and a vibrant atmosphere, often hosting cultural events and gatherings. The column commemorates King Sigismund III Vasa, who moved the Polish capital from Krakow to Warsaw.",
    coordinates: { lat: 52.2484, lng: 21.0154 },
    category: 'landmark'
  },
  {
    id: '9',
    name: 'Mermaid Monument (Powiśle)',
    description: "The iconic bronze statue of the Warsaw Mermaid, Sydonia, stands proudly on the Vistula River embankment in the Powiśle district. She is the official symbol of the city, depicted with a sword and shield, ready to defend Warsaw. According to a popular legend, a mermaid swam from the Baltic Sea and fell in love with the city, vowing to protect its residents. The monument is a beloved landmark and a frequent spot for photos, representing the city's strength and connection to the Vistula.",
    coordinates: { lat: 52.2465, lng: 21.0221 },
    category: 'landmark',
  },
  {
    id: '10',
    name: 'Polish Vodka Museum',
    description: 'Located in the beautifully revitalized Praga district, within the historic Koneser complex which was once a major vodka distillery, the Polish Vodka Museum offers an engaging journey through the 600-year history of Poland\'s national spirit. Interactive exhibitions explain the evolution of vodka production, the importance of raw materials like rye and wheat, and the cultural significance of vodka in Polish traditions. The visit typically concludes with a guided tasting session for adults, providing a unique sensory experience and insight into Polish heritage.',
    coordinates: { lat: 52.254444, lng: 21.043889 },
    openingHours: 'Tue-Sun: 12:00 - 20:00. Closed Mon. Entry is typically only possible with a guided tour, which should be booked in advance via their official website.',
    freeEntryInfo: 'No free entry days are offered for the museum and tasting experience.',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Budynek_rektyfikacji_Koneser_2018.jpg/250px-Budynek_rektyfikacji_Koneser_2018.jpg']
  },
  {
    id: '11',
    name: 'POLIN Museum',
    description: 'The POLIN Museum of the History of Polish Jews stands on the site of the former Warsaw Ghetto. Its stunning, award-winning modern architecture houses a narrative exhibition exploring a thousand years of Jewish life in Poland, from the Middle Ages to the present day. The core exhibition is interactive and engaging, telling the story of coexistence, culture, and tragedy. It serves as a vital place for remembrance, education, and reflection on the rich and complex history of Polish Jews.',
    coordinates: { lat: 52.2549, lng: 20.9927 },
    openingHours: 'Mon/Wed/Thu/Fri/Sun: 10:00-18:00, Sat: 10:00-20:00. Closed on Tuesdays. Check official site for holiday hours and temporary exhibitions.',
    freeEntryInfo: 'Free entry to the core exhibition is available on Thursdays.',
    category: 'museum'
  },
  {
    id: '12',
    name: 'University of Warsaw Library',
    description: 'More than just a library, the University of Warsaw Library (BUW) building is famous for its magnificent rooftop garden, one of the largest and most beautiful in Europe. Opened in 1999, the garden is a multi-level oasis covering over 1 hectare, featuring streams, ponds, sculptures, and diverse plant life. It offers stunning panoramic views of the Vistula River and the city skyline. Below, the modern library interior is also architecturally noteworthy. The garden is a popular spot for students and tourists alike to relax and enjoy nature and views.',
    coordinates: { lat: 52.2421, lng: 21.0259 },
    openingHours: 'Roof Garden: Seasonal (typically April to October), daily ~8:00-20:00 (hours may vary). Lower Garden: Open year-round. Check the library website for precise seasonal hours.',
    category: 'landmark'
  },
  {
    id: '13',
    name: 'Vistulan Boulevards, Warsaw',
    description: 'The revitalized Vistulan Boulevards offer a dynamic and scenic pedestrian promenade along the left bank of the Vistula River. This modern public space is perfect for walking, jogging, cycling, or simply relaxing by the water. Lined with cafes, bars, street art installations, and offering boat cruise departures, the boulevards provide fantastic views of the right bank, including the National Stadium and the cityscape. They have become a popular recreational area, connecting the city more closely with its main river and providing a lively urban waterfront experience.',
    coordinates: { lat: 52.2441, lng: 21.0278 },
    category: 'park', // Can also be considered a landmark/recreation area
  },
  {
    id: '14',
    name: 'Warsaw Uprising Museum',
    description: 'A powerful and moving tribute to the heroes of the 1944 Warsaw Uprising. This interactive museum uses multimedia, personal accounts, and artifacts to recreate the atmosphere of the 63-day struggle against the Nazi occupation. Visitors can walk through simulated sewers, see authentic weapons, and learn about the daily lives and immense bravery of the insurgents and civilians. A key exhibit is a life-sized replica of a B-24 Liberator bomber, highlighting Allied efforts to supply the resistance. It is an essential, albeit intense, historical experience.',
    coordinates: { lat: 52.2327, lng: 20.9813 },
    openingHours: 'Mon/Wed/Fri: 8:00-18:00, Thu: 8:00-20:00, Sat/Sun: 10:00-18:00. Closed on Tuesdays. Allow at least 2-3 hours for a visit to fully appreciate the exhibits.',
    freeEntryInfo: 'Free entry is available on Mondays.',
    category: 'museum',
  },
  {
    id: '15',
    name: 'Saxon Garden',
    description: 'Established in the early 18th century, Saxon Garden (Ogród Saski) is one of the oldest public parks in the world and the first public park in Warsaw. Designed in a formal Baroque style, it features tree-lined avenues, intricate flower beds, fountains, and a series of allegorical sculptures representing the virtues. It is home to the Tomb of the Unknown Soldier, the only surviving element of the Saxon Palace that stood here before WWII. The park provides a peaceful green retreat in the city center.',
    coordinates: { lat: 52.2412, lng: 21.0086 },
    openingHours: 'Open 24 hours a day, 7 days a week.',
    category: 'park',
  },
  {
    id: '16',
    name: 'Krakowskie Przedmieście',
    description: 'Part of the historic Royal Route, Krakowskie Przedmieście is one of Warsaw\'s most prestigious and beautiful avenues. Stretching from Castle Square southward, it is lined with magnificent palaces, churches, historical monuments, and prestigious institutions like the University of Warsaw and the Presidential Palace. It boasts elegant architecture, charming cafes, and a lively atmosphere, making it perfect for a stroll. The street is often closed to traffic on weekends, becoming a pedestrian promenade connecting the Old Town with the city\'s historic core.',
    coordinates: { lat: 52.2430, lng: 21.0140 },
    category: 'historic', // Can also be considered a landmark/street
  }
];