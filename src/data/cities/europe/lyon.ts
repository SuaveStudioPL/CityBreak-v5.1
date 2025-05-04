import { Attraction } from '../../../types/attractions';

export const lyonAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Basilica of Notre-Dame de Fourvière',
      description: 'Perched atop Fourvière Hill, this neo-Byzantine basilica is Lyon\’s iconic landmark. Its ornate mosaics and panoramic views captivate visitors. Built to honor the Virgin Mary, it\’s nicknamed the "upside-down elephant" for its unique silhouette. The adjacent chapel features a golden statue of Mary overlooking the city.',
      coordinates: { lat: 45.7625, lng: 4.8225 },
      openingHours: 'Daily 7:00-19:00. Towers: Seasonal, check site.',
      freeEntryInfo: 'Free entry to basilica.',
      category: 'landmark'
    },
    {
      id: '2',
      name: 'Vieux Lyon',
      description: 'Lyon\’s UNESCO-listed historic heart, Vieux Lyon boasts Renaissance architecture and charming cobblestone alleys. Known for its traboules—secret passageways used by silk workers—it offers a glimpse into the city\’s past. The district\’s vibrant bouchons serve traditional Lyonnaise cuisine, immersing visitors in local culture.',
      coordinates: { lat: 45.767222, lng: 4.833333 },
      category: 'historic'
    },
    {
      id: '3',
      name: 'Lyon Cathedral',
      description: 'This Romanesque-Gothic cathedral in Vieux Lyon features a stunning astronomical clock from the 14th century. Its intricate facade and vibrant stained glass tell stories of faith. The cathedral\’s historical significance and serene ambiance make it a must-visit for those exploring Lyon\’s spiritual heritage.',
      coordinates: { lat: 45.760556, lng: 4.8275 },
      openingHours: 'Mon-Fri: 8:15-19:45, Sat-Sun: 8:15-19:00.',
      freeEntryInfo: 'Free entry.',
      category: 'historic'
    },
    {
      id: '4',
      name: 'Parc de la Tête d\'or',
      description: 'France\’s largest urban park, this green oasis offers a zoo, botanical gardens, and a serene lake for boating. Its 19th-century greenhouses house exotic plants, while the rose garden blooms vibrantly in spring. A favorite for families and joggers, it\’s perfect for a leisurely escape in Lyon.',
      coordinates: { lat: 45.78, lng: 4.854 },
      openingHours: 'Daily 6:30-20:30 (22:30 Apr-Sep).',
      freeEntryInfo: 'Free entry to park.',
      category: 'park'
    },
    {
      id: '5',
      name: 'Museum of Fine Arts of Lyon',
      description: 'Housed in a 17th-century palace, this museum boasts one of France\’s finest art collections. From ancient Egyptian artifacts to works by Monet and Van Gogh, its exhibits span centuries. The serene courtyard garden offers a peaceful retreat, making it a cultural gem in Lyon\’s Presqu\’île.',
      coordinates: { lat: 45.766944, lng: 4.833611 },
      openingHours: 'Wed-Mon: 10:00-18:00, Fri: 10:30-18:00. Closed Tue.',
      freeEntryInfo: 'Free first Sunday of month.',
      category: 'museum'
    },
    {
      id: '6',
      name: 'Place Bellecour',
      description: 'Europe\’s largest pedestrian square, Place Bellecour is a bustling hub in Lyon\’s Presqu’île. Dominated by an equestrian statue of Louis XIV, it hosts festivals and a Ferris wheel seasonally. Surrounded by shops and cafes, it\’s a vibrant spot to soak in the city\’s energy.',
      coordinates: { lat: 45.7575, lng: 4.832222 },
      category: 'landmark'
    },
    {
      id: '7',
      name: 'Musée des Confluences',
      description: 'A futuristic museum at the confluence of the Rhône and Saône, it explores science and anthropology. Its striking glass and steel design resembles a spaceship. Interactive exhibits delve into human history and natural sciences, captivating visitors with thought-provoking displays and stunning river views.',
      coordinates: { lat: 45.732906, lng: 4.818304 },
      openingHours: 'Tue-Sun: 10:30-18:30 (Fri until 22:00). Closed Mon.',
      category: 'museum'
    },
    {
      id: '8',
      name: 'Fourvière',
      description: 'This historic hill, the birthplace of Roman Lugdunum, offers sweeping views of Lyon. Home to the Basilica of Notre-Dame and ancient Roman theaters, it blends history with scenic beauty. The funicular ride up adds charm, making it a must for history buffs and photographers alike.',
      coordinates: { lat: 45.763056, lng: 4.822222 },
      category: 'historic'
    },
    {
      id: '9',
      name: 'Lugdunum (museum)',
      description: 'Lyon\’s Gallo-Roman museum and archaeological site on Fourvière Hill showcases the city’s ancient roots. The museum, built into the hillside, displays artifacts like the Circus Games Mosaic. Adjacent Roman theaters host summer performances, connecting visitors to Lyon\’s 2,000-year-old history.',
      coordinates: { lat: 45.760418, lng: 4.819914 },
      openingHours: 'Tue-Sun: 10:00-18:00. Closed Mon.',
      category: 'museum'
    },
    {
      id: '10',
      name: 'Institut Lumière',
      description: 'Celebrating Lyon\’s role as the birthplace of cinema, this museum is housed in the Lumière brothers’ art nouveau villa. Exhibits showcase early film technology, including the cinematograph. Daily screenings and the annual Lumière Film Festival make it a haven for cinema enthusiasts.',
      coordinates: { lat: 45.745211, lng: 4.870408 },
      openingHours: 'Tue-Sun: 10:00-18:30. Closed Mon.',
      category: 'museum'
    },
    {
      id: '11',
      name: 'La Croix-Rousse',
      description: 'This hilly district, once home to Lyon\’s silk weavers, is known for its traboules and vibrant street art. The Canuts mural, Europe’s largest, celebrates the area\’s heritage. With bohemian cafes and markets, it offers an authentic glimpse into Lyon\’s creative and working-class past.',
      coordinates: { lat: 45.779444, lng: 4.8275 },
      category: 'historic'
    },
    {
      id: '12',
      name: 'Opéra National de Lyon',
      description: 'A striking blend of 19th-century architecture and Jean Nouvel\’s modern glass dome, this opera house is a cultural landmark. Hosting world-class performances, its bold design and acoustics impress. Located near Place des Terreaux, it\’s a hub for Lyon\’s vibrant arts scene.',
      coordinates: { lat: 45.767731, lng: 4.836148 },
      openingHours: 'Box office: Tue-Sat 12:00-19:00. Performances vary.',
      category: 'landmark'
    }
  ];