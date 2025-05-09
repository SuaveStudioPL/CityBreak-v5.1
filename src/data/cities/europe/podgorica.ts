import { Attraction } from '../../../types/attractions';

export const podgoricaAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Millennium Bridge (Podgorica)',
      description: 'This iconic cable-stayed bridge spans the Morača River, featuring a 57-meter pylon and 36 supporting cables. Opened in 2005 on Montenegro\'s National Day, it connects the city center with new districts. Designed by Marjan Pipenbaher and Mladen Ulićević, its modernist design has become a symbol of Podgorica\'s urban renewal and technical innovation.',
      coordinates: { lat: 42.4452, lng: 19.2581 },
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '2',
      name: 'Cathedral of the Resurrection of Christ, Podgorica',
      description: 'The main Serbian Orthodox cathedral in Montenegro, completed in 2013. Its striking contemporary Byzantine design features 41.5-meter domes and intricate frescoes. Located west of the Morača River, it serves as the seat of the Metropolitanate of Montenegro and the Littoral, blending modern architecture with traditional religious symbolism.',
      coordinates: { lat: 42.445694, lng: 19.24825 },
      category: 'religious',
      imageUrls: ['']
    },
    {
      id: '3',
      name: 'Roman Square (Podgorica)',
      description: 'Podgorica\'s premier business district with 20,000 m² of space centered around a large fountain. Hosts corporate HQs like Telenor Montenegro and government ministries. Features underground pedestrian passages linking to cultural sites. Known for high-end real estate and modernist architecture, it epitomizes the city\'s economic transformation.',
      coordinates: { lat: 42.442568, lng: 19.246542 },
      category: 'urban',
      imageUrls: ['']
    },
    {
      id: '4',
      name: 'Independence Square (Podgorica)',
      description: 'The central square in Nova Varoš district, redesigned in 2006 with colonnades, palm trees, and water channels. Houses cultural institutions like Radosav Ljumović Library and Art Gallery. Formerly called Ivan Milutinović Square, its car-free zone and central fountain make it a popular gathering spot for events and leisure.',
      coordinates: { lat: 42.441262, lng: 19.262804 }, // Coordinates approximated from context
      category: 'urban',
      imageUrls: ['']
    },
    {
      id: '5',
      name: 'Natural History Museum of Montenegro',
      description: 'Showcases Montenegro\'s biodiversity with exhibits on endemic species like Balkan lynx and Dalmatian pelicans. Though lacking a permanent exhibition space, it conducts research and temporary displays. The collection includes geological specimens and dioramas of ecosystems from coastal areas to Durmitor National Park.',
      coordinates: { lat: 42.4425, lng: 19.2650 }, // Coordinates approximated from context
      category: 'museum',
      imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/1/10/Natural_History_Museum_of_Montenegro%2C_Sahat_Kula%2C_2019.jpg']
    },
    {
      id: '6',
      name: 'Clock Tower (Podgorica)',
      description: 'A 19th-century Ottoman-era landmark in Stara Varoš, standing 16 meters tall. One of few surviving structures from Turkish rule, it features characteristic Islamic architecture with a hexagonal base. The clock mechanism was imported from Italy, serving as a reminder of Podgorica\'s multicultural heritage.',
      coordinates: { lat: 42.435557, lng: 19.260014 }, // Coordinates from GeoHack for "Clock Tower Podgorica"
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '7',
      name: 'Montenegrin National Theatre',
      description: 'Founded in 1953, this is Montenegro\'s principal theater institution. Hosts drama, opera, and ballet performances in a modernist building with 650 seats. The venue anchors Podgorica\'s cultural scene, featuring works by local playwrights and international classics. Includes auxiliary stages for experimental productions.',
      coordinates: { lat: 42.441733, lng: 19.260658 }, // Coordinates approximated from context
      category: 'cultural',
      imageUrls: ['']
    }
  ];
  