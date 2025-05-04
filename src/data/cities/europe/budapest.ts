import { Attraction } from '../../../types/attractions';


export const budapestAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Buda Castle',
    description: 'Historic castle complex of Hungarian kings, with roots dating back to the 13th century. It houses the Hungarian National Gallery and Budapest History Museum. Legend has it that King Béla IV began construction after the Mongol invasion. The castle has been rebuilt multiple times, reflecting various architectural styles from Gothic to Baroque. It was the site of fierce battles, notably during the Ottoman wars and World War II.',
    coordinates: { lat: 47.4962, lng: 19.0396 },
    openingHours: 'Museums (Nat. Gallery, History Museum): Tue-Sun 10:00-18:00. Closed Mon. Castle Grounds/Courtyards: Open 24/7.',
    freeEntryInfo: 'Castle Grounds/Courtyards free. Museums require paid ticket (possible free entry on national holidays).',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Hungarian Parliament Building',
    description: 'Iconic neo-Gothic building on the Danube bank, a symbol of Budapest and Hungary, completed in 1902. Designed by Imre Steindl, it was inspired by the Palace of Westminster in London. It briefly served as a co-capital of the Austro-Hungarian Empire. The Holy Crown of Hungary is kept here. Legend says Steindl went blind before its completion, a sacrifice for his masterpiece.',
    coordinates: { lat: 47.5073, lng: 19.0466 },
    openingHours: 'Tours daily. Apr-Oct: 8:00-18:00, Nov-Mar: 8:00-16:00. Closed during sessions/some holidays. Booking needed.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'St. Stephen\'s Basilica',
    description: 'The largest church in Budapest, dedicated to Hungary\'s first king, Saint Stephen. Construction spanned over 50 years, completed in 1905. It houses the Holy Right Hand of St. Stephen. The dome offers panoramic views, accessible by stairs or elevator. Legend says the basilica was built on the site where St. Stephen was buried. Its neoclassical facade and ornate interior are impressive.',
    coordinates: { lat: 47.5008, lng: 19.0537 },
    openingHours: 'Basilica: Mon-Fri 9:00-17:45, Sat 9:00-13:00, Sun 13:00-17:45 (visits restricted during services). Dome/Treasury: Daily 10:00-18:30 (summer) / 10:00-16:30 (winter).',
    freeEntryInfo: 'Basilica entry requires donation. Dome/Treasury require paid ticket.',
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Széchenyi thermal bath',
    description: 'The largest medicinal bath in Europe, with indoor and outdoor pools, opened in 1913. Its water comes from two thermal springs. The neo-Baroque architecture is striking. Locals often play chess in the outdoor pools. Legend has it that the healing properties were discovered by a shepherd. The bath complex also includes saunas and steam rooms.',
    coordinates: { lat: 47.5192, lng: 19.0817 },
    openingHours: 'Daily. Outdoor pools ~6:00/7:00-22:00, Indoor pools/thermal ~7:00-20:00. Check official site.',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Fisherman\'s Bastion',
    description: 'Neo-Gothic terrace offering panoramic views of Budapest, built in 1902. Its seven turrets represent the seven Magyar chieftains who led their tribes to settle in the Carpathian Basin. It was named after the fishermen\'s guild that defended this part of the city. Legend connects it to a secret tunnel network under Buda Castle. Its white stone walls and picturesque design make it a popular spot.',
    coordinates: { lat: 47.5022, lng: 19.0347 },
    openingHours: 'Lower terraces open 24/7. Upper terraces/towers: Daily 9:00-19:00 (or later seasonally).',
    freeEntryInfo: 'Lower terraces free. Upper terraces require paid ticket during daytime (approx. 9:00-19:00), free outside these hours.',
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Matthias Church',
    description: 'Gothic church where Hungarian kings were crowned, featuring unique architectural style, with origins dating back to the 13th century. It was named after King Matthias Corvinus, who rebuilt it in the 15th century. The church has served as a mosque during Ottoman rule. Its colorful roof tiles and ornate interior are distinctive. Legend says secret passages connect it to Buda Castle.',
    coordinates: { lat: 47.5019, lng: 19.0346 },
    openingHours: 'Visiting hours vary, restricted during events. Typically Mon-Fri 9:00-17:00, Sat 9:00-12:00/13:00, Sun 13:00-17:00. Check official site.',
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Great Market Hall (Budapest)',
    description: 'The largest and oldest indoor market in Budapest, featuring local produce and crafts, opened in 1897. Designed by Samu Pecz, its iron structure is impressive. It survived bombings in World War II and fell into disrepair during communism but was later restored. It offers a variety of Hungarian delicacies, souvenirs, and traditional crafts. Legend says there are hidden cellars beneath the market.',
    coordinates: { lat: 47.4871, lng: 19.0587 },
    openingHours: 'Mon 6:00-17:00, Tue-Fri 6:00-18:00, Sat 6:00-15:00. Closed Sun/Holidays.',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Heroes\' Square (Budapest)',
    description: 'Iconic square featuring the Millennium Monument and Museum of Fine Arts, built to commemorate the 1000th anniversary of the Hungarian conquest in 1896. The central column is topped by a statue of Archangel Gabriel. Statues of Hungarian kings and leaders line the colonnades. Legend says the square marks a significant point in Hungarian history. It has been the site of major historical events and celebrations.',
    coordinates: { lat: 47.5149, lng: 19.0779 },
    category: 'landmark'
  },
  {
    id: '9',
    name: 'Dohány Street Synagogue',
    description: 'The largest synagogue in Europe, featuring Moorish architectural elements, built between 1854 and 1859. It survived the Holocaust. The synagogue complex includes a cemetery, a memorial to Hungarian Jewish martyrs, and a museum. Legend says the synagogue was built on the site of a former stable. Its ornate interior and historical significance make it a major landmark.',
    coordinates: { lat: 47.4957, lng: 19.0600 },
    openingHours: 'Hours vary seasonally. Generally Sun-Thu 10:00-16:00/18:00, Fri 10:00-14:00/16:00. Closed Sat/Jewish holidays. Check official site.',
    category: 'landmark'
  },
  {
    id: '10',
    name: 'House of Terror',
    description: 'Museum documenting the fascist and communist regimes in 20th-century Hungary, located in a building that served as the headquarters for both the Nazi and Soviet secret police. Exhibits detail the atrocities committed by these regimes. The building itself is a chilling reminder of Hungary\'s dark past. Legend says the basement still holds secrets of torture and imprisonment.',
    coordinates: { lat: 47.5066, lng: 19.0644 },
    openingHours: 'Tue-Sun: 10:00 - 18:00. Closed Mon.',
    category: 'museum'
  },
  {
    id: '11',
    name: 'Gellért Baths',
    description: 'Art Nouveau thermal bath complex with beautiful architectural details, opened in 1918. Its medicinal waters are famous. The complex includes indoor and outdoor pools, saunas, and steam rooms. The mosaic-lined halls and stained glass windows are stunning. Legend connects the baths to a mythical spring with healing powers. It remains one of Budapest\'s most elegant and popular spas.',
    coordinates: { lat: 47.4837, lng: 19.0546 },
    openingHours: 'Daily 9:00 - 19:00.',
    category: 'landmark'
  },
  {
    id: '12',
    name: 'Vajdahunyad Castle',
    description: 'Romantic castle complex showcasing various architectural styles of Hungary, built in 1896 for the Millennial Exhibition. It features replicas of famous buildings from different parts of Hungary. The castle is located in City Park. Legend says it was meant to be temporary but became so popular it was rebuilt in stone. It now houses the Hungarian Agricultural Museum.',
    coordinates: { lat: 47.5148, lng: 19.0831 },
    openingHours: 'Museum: Tue-Sun 10:00-17:00 (longer in summer). Closed Mon. Castle Grounds/Courtyard: Open 24/7.',
    freeEntryInfo: 'Castle Grounds/Courtyard free. Museum requires paid ticket (possible free entry on national holidays).',
    category: 'landmark'
  },
  {
    id: '13',
    name: 'Margaret Island',
    description: 'Green oasis in the Danube with parks, ruins, and recreational facilities, a car-free island spanning 2.5 km. Named after Princess Margaret, daughter of King Béla IV. It features a musical fountain, a Japanese garden, and medieval ruins. Legend says it was once a royal hunting ground. Today, it\'s a popular spot for relaxation and recreation.',
    coordinates: { lat: 47.5283, lng: 19.0494 },
    openingHours: 'Island/Park open 24/7. Attractions on island have own hours.',
    category: 'park'
  },
  {
    id: '14',
    name: 'Shoes on the Danube Bank',
    description: 'Memorial honoring Jews killed during World War II, created by sculptor Can Togay and film director Gyula Pauer, unveiled in 2005. It features 60 pairs of iron shoes along the riverbank, marking the spot where victims were ordered to remove their shoes before being shot into the Danube. It serves as a poignant reminder of the Holocaust.',
    coordinates: { lat: 47.5048, lng: 19.0446 },
    category: 'landmark'
  },
  {
    id: '15',
    name: 'Hungarian State Opera House',
    description: 'Neo-Renaissance opera house known for its architecture and performances, opened in 1884. Designed by Miklós Ybl, it is considered one of the most beautiful opera houses in the world. Emperor Franz Joseph I attended its opening. It has hosted numerous famous composers and performers. Legend says it has a secret underground passage connected to a nearby hotel.',
    coordinates: { lat: 47.5027, lng: 19.0583 },
    openingHours: 'Open for performances (evenings) and guided tours. Check official website for schedule.',
    category: 'landmark'
  }
];
