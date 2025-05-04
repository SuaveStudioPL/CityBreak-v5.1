import { Attraction } from '../../../types/attractions';

export const genoaAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Aquarium of Genoa',
      description: 'Italy\’s largest aquarium, located in Porto Antico, showcases over 12,000 marine creatures across 70 tanks. Designed by Renzo Piano, it opened in 1992 for Columbus\’ voyage anniversary. Visitors can see dolphins, sharks, and manatees in immersive exhibits. A must-visit for families, it blends education with stunning aquatic displays, reflecting Genoa\’s maritime heritage.',
      coordinates: { lat: 44.410289, lng: 8.926547 },
      openingHours: 'Daily: 9:00-20:00 (last entry 18:00). Check official site.',
      category: 'aquarium'
    },
    {
      id: '2',
      name: 'Genoa Cathedral',
      description: 'Genoa\’s Gothic-Romanesque cathedral, built in the 12th century, features a striking zebra-striped facade. Its interior houses frescoes, a Renaissance dome, and the Museo del Tesoro with relics like the Sacro Catino. A WWII bomb, still displayed, miraculously failed to detonate. The cathedral is a testament to Genoa’s rich religious and artistic history.',
      coordinates: { lat: 44.407478, lng: 8.931619 },
      openingHours: 'Daily: 8:00-12:00, 15:00-19:00.',
      category: 'historic'
    },
    {
      id: '3',
      name: 'Doge\'s Palace, Genoa',
      description: 'Once the seat of Genoa\’s independent republic, this Mannerist palace, built in the 1590s, now hosts art exhibitions and cultural events. Its grand halls feature frescoes and a stunning atrium. Located near Piazza De Ferrari, it offers a glimpse into Genoa\’s political past and vibrant present as a cultural hub.',
      coordinates: { lat: 44.4075, lng: 8.9334 },
      openingHours: 'Tue-Sun: 9:00-19:00 (varies by exhibition). Closed Mon.',
      category: 'historic'
    },
    {
      id: '4',
      name: 'Via Giuseppe Garibaldi (Genoa)',
      description: 'A UNESCO World Heritage site, this elegant street is lined with Renaissance and Baroque palaces, including Palazzo Rosso and Palazzo Bianco. Built in the 16th century for Genoa\’s nobility, it showcases opulent architecture and art collections. A walk here reveals the city\’s historic wealth and cultural grandeur.',
      coordinates: { lat: 44.411111, lng: 8.932778 },
      openingHours: 'Museums: Tue-Fri 9:00-19:00, Sat-Sun 10:00-19:30. Closed Mon.',
      category: 'historic'
    },
    {
      id: '5',
      name: 'Boccadasse',
      description: 'A charming seaside fishing village within Genoa, Boccadasse captivates with colorful houses and a pebbly beach. Its narrow alleys and seafront promenade offer a tranquil escape. Locals still fish here, preserving traditions. Enjoy gelato or a spritz while soaking in the Mediterranean vibe and sunset views.',
      coordinates: { lat: 44.3897, lng: 8.97333 },
      category: 'village'
    },
    {
      id: '6',
      name: 'Galata – Museo del mare',
      description: 'Italy\’s largest maritime museum, located in Porto Antico, explores Genoa\’s naval history. Spanning four floors, it features ship models, a replica galley, and the Nazario Sauro submarine. Interactive exhibits highlight Christopher Columbus and seafaring traditions, making it a fascinating stop for history buffs.',
      coordinates: { lat: 44.414056, lng: 8.923417 },
      openingHours: 'Mar-Oct: Daily 10:00-19:30; Nov-Feb: Tue-Fri 10:00-18:00, Sat-Sun 10:00-19:30. Closed Mon (Nov-Feb).',
      category: 'museum'
    },
    {
      id: '7',
      name: 'Lighthouse of Genoa',
      description: 'Genoa\’s iconic lighthouse, built in 1543, is one of the world\’s oldest still in operation. Standing at 76 meters, it offers panoramic views of the harbor and city. Its museum details its history and Genoa’s maritime legacy, making it a symbol of the city\’s seafaring prowess.',
      coordinates: { lat: 44.404567, lng: 8.904722 },
      openingHours: 'Sat-Sun: 10:00-18:00 (weather permitting). Check site.',
      category: 'landmark'
    },
    {
      id: '8',
      name: 'Piazza De Ferrari',
      description: 'Genoa\’s vibrant main square is known for its grand bronze fountain and historic buildings like Palazzo della Borsa. Surrounded by theaters and palaces, it\’s a lively hub for locals and tourists. The square\’s elegance reflects Genoa\’s past as a powerful maritime republic.',
      coordinates: { lat: 44.407103, lng: 8.934231 },
      category: 'landmark'
    },
    {
      id: '9',
      name: 'Palazzo Reale (Genoa)',
      description: 'This 17th-century royal palace, once home to the Savoy family, boasts lavish frescoes, stuccos, and a Hall of Mirrors. Its art collection includes works by Van Dyck. The ornate gardens and sea views add to its allure, offering a peek into Genoa\’s aristocratic past.',
      coordinates: { lat: 44.414861, lng: 8.926194 },
      openingHours: 'Tue-Sat: 9:00-19:00, Sun: 13:30-19:00. Closed Mon.',
      freeEntryInfo: 'Free first Sunday of the month.',
      category: 'historic'
    },
    {
      id: '10',
      name: 'Porto Antico',
      description: 'Genoa\’s revitalized old port, redesigned by Renzo Piano, is a lively waterfront hub. Home to the Aquarium, Bigo elevator, and Biosphere, it blends historic charm with modern attractions. Stroll along the docks, enjoy sea views, and explore Genoa\’s maritime soul in this bustling area.',
      coordinates: { lat: 44.408889, lng: 8.928333 },
      category: 'waterfront',
      imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/b/bd/%D0%9F%D0%B8%D1%80%D0%B0%D1%82%D1%8B_%D0%9A%D0%B0%D1%80%D0%B8%D0%B1%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_%D0%BC%D0%BE%D1%80%D1%8F-1.jpg']
    },
    {
      id: '11',
      name: 'Santa Maria di Castello',
      description: 'One of Genoa\’s oldest churches, dating to the 9th century, this Romanesque gem features a mix of architectural styles. Its museum displays medieval art, and the cloister offers serene views. Tucked in the historic center, it\’s a hidden treasure of Genoa\’s religious heritage.',
      coordinates: { lat: 44.405767, lng: 8.928997 },
      openingHours: 'Mon-Sat: 9:00-12:00, 15:00-18:00; Sun: 9:00-12:00.',
      category: 'historic'
    },
    {
      id: '12',
      name: 'Castelletto (Genoa)',
      description: 'A scenic lookout offering breathtaking views of Genoa\’s rooftops, harbor, and Ligurian Sea. Reached by elevator or a steep climb, it\’s a favorite spot for locals and visitors. Enjoy a gelato while taking in the panorama, a perfect blend of urban and coastal beauty.',
      coordinates: { lat: 44.412778, lng: 8.936111 },
      category: 'viewpoint',
      imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Altstadt_von_Genua.JPG/240px-Altstadt_von_Genua.JPG']
    }
  ];