import { Attraction } from '../../../types/attractions';

export const theHagueAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Mauritshuis',
      description: 'The Mauritshuis is an art museum housing the Royal Cabinet of Paintings, featuring Dutch Golden Age masterpieces by Vermeer, Rembrandt, and Holbein. Housed in a 17th-century palace built for Count John Maurice of Nassau, its collection includes iconic works like "Girl with a Pearl Earring". The building itself, a Dutch Classicist architectural gem, overlooks the Hofvijver pond near the Binnenhof.',
      coordinates: { lat: 52.0804, lng: 4.3143 },
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '2',
      name: 'Grote or Sint-Jacobskerk (The Hague)',
      description: 'This 15th-century Gothic church with a 93-meter tower is one of The Hague\'s oldest buildings. Known for royal baptisms and weddings, including those of King Willem-Alexander, it features a wooden barrel-vaulted ceiling and stained glass. Visitors can climb 288 steps for panoramic city views. No longer used for regular services, it now hosts cultural events and exhibitions.',
      coordinates: { lat: 52.077417, lng: 4.307028 },
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '3',
      name: 'Binnenhof',
      description: 'The political heart of the Netherlands since the 13th century, this Gothic complex houses the Dutch Parliament and Prime Minister\'s office. The Ridderzaal (Knights\' Hall), with its iconic twin towers, hosts the annual King\'s Speech. Surrounding courtyards and the Hofvijver lake make it a prime example of medieval Dutch architecture and governance.',
      coordinates: { lat: 52.079631, lng: 4.313035 },
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '4',
      name: 'Scheveningen',
      description: 'The Hague\'s bustling seaside district features a 2.5 km sandy beach, the historic Scheveningen Pier, and the Circustheater. Attractions include Madurodam miniature park, Sea Life aquarium, and the Beelden aan Zee sculpture museum. The seafront boulevard offers vibrant nightlife with casinos, beach clubs, and fresh herring stalls.',
      coordinates: { lat: 52.108056, lng: 4.273056 },
      category: 'entertainment',
      imageUrls: ['']
    },
    {
      id: '5',
      name: 'Escher in the Palace',
      description: 'Housed in the former Winter Palace of Queen Emma, this museum showcases M.C. Escher\'s optical illusions and mathematical art. Features iconic works like "Ascending and Descending" alongside early Italian landscapes. The building itself contains a unique 19th-century chandelier and interactive exhibits exploring Escher\'s techniques.',
      coordinates: { lat: 52.083333, lng: 4.314444 },
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '6',
      name: 'Peace Palace',
      description: 'Home to the International Court of Justice and Permanent Court of Arbitration, this neo-Renaissance building (1913) symbolizes global peace efforts. Funded by Andrew Carnegie, it houses rare legal texts and gifts from nations worldwide. The adjacent Visitor Center explains international law through interactive exhibits.',
      coordinates: { lat: 52.0866, lng: 4.2955 },
      openingHours: 'Visitor Center: Tue-Sun 10:00-17:00',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '7',
      name: 'Madurodam',
      description: 'A 1:25 scale miniature park showcasing Dutch landmarks like Rotterdam port and Amsterdam canals. Features interactive exhibits including operating windmills and moving trains. Named after WWII hero George Maduro, it combines education with entertainment through detailed architectural models and cultural displays.',
      coordinates: { lat: 52.0995, lng: 4.2975 },
      openingHours: 'Daily: 09:00-20:00',
      category: 'entertainment',
      imageUrls: ['']
    },
    {
      id: '8',
      name: 'Huis ten Bosch',
      description: 'One of three official royal palaces, this 17th-century residence in Haagse Bos forest serves as King Willem-Alexander\'s home. Designed by Pieter Post and Jacob van Campen, its Baroque architecture features a distinctive octagonal tower. While closed to the public, visitors can explore the surrounding forest trails and gardens.',
      coordinates: { lat: 52.093056, lng: 4.343889 },
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '9',
      name: 'Kunstmuseum Den Haag',
      description: 'Europe\'s largest art museum by gallery space, featuring modern art, fashion, and the world\'s largest Mondrian collection. The 1935 Berlage-designed building combines cubist and art deco elements. Notable exhibits include Delftware, musical instruments, and temporary contemporary art installations.',
      coordinates: { lat: 52.089722, lng: 4.280556 },
      openingHours: 'Tue-Sun: 10:00-17:00',
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '10',
      name: 'Panorama Mesdag',
      description: 'This 1881 cylindrical painting by Hendrik Mesdag creates a 360° illusion of Scheveningen village and sea. At 14 meters high and 120 meters circumference, it\'s one of the world\'s oldest surviving panoramas. The attached museum displays Mesdag\'s seascapes and works by the Hague School artists.',
      coordinates: { lat: 52.085, lng: 4.304444 },
      openingHours: 'Mon-Sat: 10:00-17:00, Sun 12:00-17:00',
      category: 'museum',
      imageUrls: ['']
    }
  ]

// Add an additional export with the naming convention expected by the dynamic import system
export const thehagueAttractions = theHagueAttractions;