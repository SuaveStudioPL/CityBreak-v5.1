import { Attraction } from '../../../types/attractions';

export const marseilleAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Old Port of Marseille',
      description: 'The historic heart of Marseille, used since 600 BC, now a vibrant marina lined with cafes and restaurants. Stroll along the quays, visit the daily fish market, or take a ferry to nearby islands. Its two forts, Saint-Nicolas and Saint-Jean, guard the entrance, offering stunning sea views. A legend says sailors who touch the port’s oldest stone gain safe travels.',
      coordinates: { lat: 43.294722, lng: 5.370833 },
      category: 'historic'
    },
    {
      id: '2',
      name: 'Notre-Dame de la Garde',
      description: 'A 19th-century Romano-Byzantine basilica perched on Marseille\’s highest hill, topped with a golden Virgin Mary statue. Known as "La Bonne Mère," it offers panoramic views of the city and sea. The interior features intricate mosaics and model ships. Locals believe praying here ensures protection for seafarers.',
      coordinates: { lat: 43.2841, lng: 5.371 },
      openingHours: 'Daily: 7:00-18:00 (Apr-Sep until 19:00).',
      category: 'landmark'
    },
    {
      id: '3',
      name: 'Fort Saint-Jean (Marseille)',
      description: 'Built in 1660 by Louis XIV, this fortress guards the Old Port\’s entrance. Originally meant to quell local rebellions, it now offers serene views and a Mediterranean garden. Connected to MuCEM via a suspended bridge, its ramparts are perfect for exploring Marseille\’s maritime history. Locals say its walls whisper tales of past battles.',
      coordinates: { lat: 43.294722, lng: 5.3625 },
      openingHours: 'Wed-Sun: 10:00-18:00 (seasonal variations).',
      freeEntryInfo: 'Free entry to fort; MuCEM exhibitions ticketed.',
      category: 'historic'
    },
    {
      id: '4',
      name: 'Palais Longchamp',
      description: 'A grand 19th-century monument celebrating the Marseille Canal\’s completion, housing the Fine Arts and Natural History Museums. Its colonnade, fountain, and lush park draw visitors. The gardens are said to bloom with flowers that inspired local artists. A perfect spot for a cultural and scenic retreat in the city center.',
      coordinates: { lat: 43.3043, lng: 5.3945 },
      openingHours: 'Museums: Tue-Sun 9:00-18:00. Park: Daily 7:00-dusk.',
      freeEntryInfo: 'Park free. Museums free first Sunday of month.',
      category: 'landmark'
    },
    {
      id: '5',
      name: 'Calanques National Park',
      description: 'A stunning natural reserve with dramatic limestone cliffs and turquoise creeks southeast of Marseille. Accessible by boat or hiking trails, it’s a haven for nature lovers. Locals believe the Calanques\' waters hold healing powers. Kayaking or sailing here reveals hidden beaches and breathtaking Mediterranean vistas.',
      coordinates: { lat: 43.216667, lng: 5.466667 },
      category: 'park'
    },
    {
      id: '6',
      name: 'Château d\'If',
      description: 'A 16th-century fortress-turned-prison on an island, immortalized in Dumas\’ *The Count of Monte Cristo*. Reachable by ferry from the Old Port, it offers views of Marseille and a glimpse into its grim history. Legend says prisoners\’ spirits linger in the cells, adding an eerie charm to the visit.',
      coordinates: { lat: 43.279861, lng: 5.325139 },
      openingHours: 'Daily: 10:00-17:00 (Apr-Sep until 18:00). Closed Mon Oct-Mar.',
      category: 'historic'
    },
    {
      id: '7',
      name: 'Le Panier',
      description: 'Marseille\’s oldest district, founded by Greeks in 600 BC, known for colorful facades and narrow streets. This multicultural hub brims with street art, cafes, and artisan shops. Locals claim walking its alleys at dusk reveals the city\’s ancient soul, with echoes of past traders and settlers.',
      coordinates: { lat: 43.298056, lng: 5.367778 },
      category: 'historic'
    },
    {
      id: '8',
      name: 'Museum of European and Mediterranean Civilisations',
      description: 'The Museum of European and Mediterranean Civilisations, a modern architectural marvel linked to Fort Saint-Jean. Its exhibits explore Mediterranean history through artifacts and multimedia. The lattice facade mirrors the sea\’s ripples, and locals say its rooftop views at sunset are magical.',
      coordinates: { lat: 43.295278, lng: 5.361944 },
      openingHours: 'Wed-Mon: 10:00-18:00 (until 20:00 May-Sep). Closed Tue.',
      category: 'museum'
    },
    {
      id: '9',
      name: 'Abbey of St Victor, Marseille',
      description: 'A 5th-century abbey with a crypt, one of Marseille\’s oldest structures. Its Romanesque towers and somber interior exude Early Christian aura. Locals believe lighting a candle here brings good fortune. The abbey\’s hilltop location offers harbor views, blending spirituality with scenic beauty.',
      coordinates: { lat: 43.290278, lng: 5.365556 },
      openingHours: 'Daily: 9:00-19:00.',
      category: 'historic'
    },
    {
      id: '10',
      name: 'Marseille Cathedral',
      description: 'A 19th-century neo-Byzantine cathedral by the waterfront, known for its green and white striped facade and vibrant mosaics. Its grandeur rivals Florence’s Duomo. Locals say its bells ring to guide lost sailors home. A serene spot to admire Marseille\’s architectural and maritime heritage.',
      coordinates: { lat: 43.299722, lng: 5.365 },
      openingHours: 'Wed-Sun: 10:00-18:30. Closed Mon-Tue.',
      category: 'landmark'
    },
    {
      id: '11',
      name: 'Palais du Pharo',
      description: 'A mid-19th-century palace built for Napoleon III, now a conference venue with lush gardens. Its grounds offer sweeping Mediterranean views. Locals claim the palace\’s sunset vistas inspire love and creativity, making it a romantic spot for evening strolls or picnics.',
      coordinates: { lat: 43.2942, lng: 5.3581 },
      openingHours: 'Gardens: Daily 7:00-dusk.',
      freeEntryInfo: 'Gardens free. Palace interior access limited.',
      category: 'landmark'
    },
    {
      id: '12',
      name: 'Vieille Charité',
      description: 'A 17th-century almshouse turned cultural center in Le Panier, hosting archaeology and art museums. Its domed chapel and arcaded courtyard are architectural gems. Locals say its quiet cloisters offer a peaceful escape from the city’s bustle, perfect for reflection and art appreciation.',
      coordinates: { lat: 43.300278, lng: 5.367778 },
      openingHours: 'Tue-Sun: 10:00-18:00. Closed Mon.',
      category: 'museum'
    }
  ];