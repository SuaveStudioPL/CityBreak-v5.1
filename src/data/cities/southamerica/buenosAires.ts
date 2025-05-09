import { Attraction } from '../../../types/attractions';

export const buenosAiresAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Plaza de Mayo',
      description: 'The heart of Buenos Aires, Plaza de Mayo is the city\’s historic and political core, surrounded by landmarks like the Casa Rosada and Catedral Metropolitana. Established in 1580, it has been the stage for pivotal events, including Argentina\’s independence movement and Evita Perón\’s speeches. Today, it hosts protests, celebrations, and the iconic Madres de Plaza de Mayo marches, reflecting the nation\’s vibrant civic spirit.',
      coordinates: { lat: -34.608333, lng: -58.371944 },
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '2',
      name: 'Casa Rosada',
      description: 'The pink-hued Casa Rosada, Argentina\’s presidential palace, stands on Plaza de Mayo. Built on a 16th-century fort site, it became the government seat in the 19th century. Its balconies, where Evita and Juan Perón addressed crowds, are iconic. The museum inside displays Argentina\’s history, including a mural by David Alfaro Siqueiros, making it a must-visit for understanding the nation\’s political heritage.',
      coordinates: { lat: -34.608056, lng: -58.370278 },
      openingHours: 'Museum: Wed-Sun: 10:00-18:00.',
      freeEntryInfo: 'Free entry to museum, guided tours available.',
      category: 'historic',
      imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Casa_Rosada_exterior_from_Plaza_de_Mayo.JPG/250px-Casa_Rosada_exterior_from_Plaza_de_Mayo.JPG']
    },
    {
      id: '3',
      name: 'Teatro Colón',
      description: 'A world-renowned opera house, Teatro Colón is celebrated for its impeccable acoustics and opulent design. Opened in 1908, it has hosted legends like Caruso and Stravinsky. Its seven-story structure includes a grand auditorium, gilded details, and a chandelier weighing over a ton. Guided tours reveal its backstage magic, making it a cultural gem for visitors seeking Buenos Aires\’ artistic soul.',
      coordinates: { lat: -34.601083, lng: -58.383083 },
      openingHours: 'Guided tours: Daily 9:00-17:00, except Sun.',
      category: 'theater',
      imageUrls: ['']
    },
    {
      id: '4',
      name: 'La Recoleta Cemetery',
      description: 'Recoleta Cemetery, in the upscale Recoleta neighborhood, is a labyrinth of ornate mausoleums and sculptures. Dating to 1822, it houses the graves of notable Argentines, including Eva Perón. Its architectural diversity, from Art Nouveau to Neo-Gothic, makes it a hauntingly beautiful open-air museum. Visitors wander its paths, captivated by stories of the elite and the eternal artistry of death.',
      coordinates: { lat: -34.588056, lng: -58.393056 },
      openingHours: 'Daily: 7:00-17:45.',
      freeEntryInfo: 'Free entry.',
      category: 'cemetery',
      imageUrls: ['']
    },
    {
      id: '5',
      name: 'Obelisco de Buenos Aires',
      description: 'The Obelisk of Buenos Aires, a 67.5-meter monument, towers over Plaza de la República. Erected in 1936 to mark the city\’s 400th anniversary, it commemorates key moments in Argentina\’s history. Located at the intersection of Avenida 9 de Julio and Corrientes, it\’s a focal point for celebrations and protests, symbolizing the city\’s dynamic spirit and enduring pride.',
      coordinates: { lat: -34.603611, lng: -58.381667 },
      openingHours: 'Open 24/7.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '6',
      name: 'Caminito',
      description: 'Caminito, a vibrant street museum in La Boca, is a colorful showcase of Buenos Aires\’ tango culture. Since 1959, its brightly painted tenements and open-air art market have drawn visitors. Named after a tango, it features street performers and sculptures, reflecting the neighborhood\’s Italian immigrant roots. This lively alley offers a vivid snapshot of the city\’s artistic and bohemian heritage.',
      coordinates: { lat: -34.6393, lng: -58.3628 },
      openingHours: 'Open 24/7.',
      category: 'street',
      imageUrls: ['']
    },
    {
      id: '7',
      name: 'Palacio Barolo',
      description: 'Palacio Barolo, a stunning architectural gem in Montserrat, was inspired by Dante\’s *Divine Comedy*. Completed in 1923, its 22 floors symbolize the poem\’s structure, with intricate details and a lighthouse atop. Once Latin America\’s tallest building, it offers guided tours revealing its allegorical design and panoramic views, captivating visitors with its literary and historical significance.',
      coordinates: { lat: -34.609556, lng: -58.385861 },
      openingHours: 'Guided tours: Mon-Sat, times vary.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '8',
      name: 'Museo Nacional de Bellas Artes (Buenos Aires)',
      description: 'In Recoleta, the Museo Nacional de Bellas Artes houses Argentina\’s finest art collection, from European masters like Goya to Argentine greats like Berni. Opened in 1933, its 12,000 works span centuries, displayed across 24 rooms. The elegant building, surrounded by gardens, offers free entry, making it a cultural haven for art lovers exploring Buenos Aires’ creative legacy.',
      coordinates: { lat: -34.583986, lng: -58.39297 },
      openingHours: 'Tue-Fri: 11:00-20:00, Sat-Sun: 10:00-20:00, closed Mon.',
      freeEntryInfo: 'Free entry.',
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '9',
      name: 'Puerto Madero',
      description: 'Puerto Madero, Buenos Aires\’ revitalized waterfront, blends modern skyscrapers with historic docks. Named after merchant Eduardo Madero, it features the iconic Puente de la Mujer, a rotating footbridge by Santiago Calatrava. With upscale restaurants, parks, and museums like the Fortabat Collection, it\’s a trendy spot for strolls, offering a sleek contrast to the city\’s older neighborhoods.',
      coordinates: { lat: -34.611944, lng: -58.364722 },
      category: 'neighborhood',
      imageUrls: ['']
    },
    {
      id: '10',
      name: 'Evita Museum',
      description: 'The Evita Museum in Palermo celebrates Eva Perón, Argentina\’s iconic First Lady. Housed in a 1920s mansion, it showcases her dresses, mementos, and interactive exhibits detailing her life as an actress, activist, and political figure. A National Historical Monument since 1999, it draws visitors to explore Evita\’s enduring legacy and her impact on Argentina\’s social and political landscape.',
      coordinates: { lat: -34.580678, lng: -58.414657 },
      openingHours: 'Tue-Sun: 11:00-19:00, closed Mon.',
      category: 'museum',
      imageUrls: ['']
    }
  ];