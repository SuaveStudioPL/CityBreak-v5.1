import { Attraction } from '../../../types/attractions';


export const romeAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Colosseum',
    description: 'An ancient amphitheater in the center of Rome, the largest ever built in the Roman Empire, completed in 80 AD. It was used for gladiatorial contests and public spectacles. A symbol of Imperial Rome\'s power and architectural prowess. It is said that it was built with the spoils from the Jewish Temple in Jerusalem.',
    coordinates: { lat: 41.8902, lng: 12.4922 },
    openingHours: 'Daily, seasonal hours (opens 8:30/9:00, closes 16:30 winter - 19:15 summer). Last entry 1h before close. Check site.',
    freeEntryInfo: 'Requires paid ticket (includes Forum/Palatine). Free 1st Sunday of month.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Roman Forum',
    description: 'The ruins of the ancient center of Rome, located in the valley between the Palatine and Capitoline Hills. It was the heart of Roman political, religious, and social life. Explore the remains of temples, basilicas, and triumphal arches. It is said that it was here that Romulus founded Rome.',
    coordinates: { lat: 41.8925, lng: 12.4853 },
    openingHours: 'Daily, same hours as Colosseum (ticket usually combined).',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Trevi Fountain',
    description: 'A famous Baroque fountain in Rome, designed by Nicola Salvi and completed by Giuseppe Pannini in 1762. It\'s one of the most iconic fountains in the world, known for its intricate sculptures and the tradition of throwing coins into it. It is said that throwing a coin over your left shoulder ensures a return to Rome.',
    coordinates: { lat: 41.9009, lng: 12.4833 },
    category: 'landmark'
  },
  {
    id: '4',
    name: 'Pantheon, Rome',
    description: 'An ancient Roman temple, now a church (Basilica di Santa Maria ad Martyres), commissioned by Marcus Agrippa and rebuilt by Emperor Hadrian. Its massive dome, with an oculus at the center, is an architectural marvel. It has been in continuous use since its construction. It is said that it was built on the site where Romulus ascended to heaven.',
    coordinates: { lat: 41.8986, lng: 12.4769 },
    openingHours: 'Daily 9:00 - 19:00 (last entry ~18:30). Closed Jan 1, Aug 15, Dec 25. Restricted during mass.',
    freeEntryInfo: 'Requires paid ticket (since July 2023). Free 1st Sunday of month.',
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Vatican Museums',
    description: 'Museums located within the Vatican City, displaying a vast collection of art and artifacts accumulated by the Popes throughout the centuries, including Roman sculptures and Renaissance masterpieces. The Sistine Chapel, with Michelangelo\'s frescoes, is a highlight. It is said that the collection began with a single marble statue.',
    coordinates: { lat: 41.9066, lng: 12.4539 },
    openingHours: 'Mon-Sat: 8:00-19:00 (last entry 17:00). Extended Fri/Sat hours seasonally. Check site for closures.',
    freeEntryInfo: 'Free last Sunday of month (9:00-14:00, last entry 12:30). Requires paid ticket otherwise (booking essential).',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Via Condotti',
    description: 'A prestigious street in Rome, renowned for its high-end fashion boutiques, luxury shops, and historical significance. Located near the Spanish Steps, it has been a hub for the elite and a symbol of Italian elegance. It is said that it was once a simple path leading to the Tiber River.',
    coordinates: { lat: 41.9051, lng: 12.4805},
    category: 'shopping'
  },
  {
    id: '7',
    name: 'Piazza Navona',
    description: 'A Baroque square in Rome, built on the site of the Stadium of Domitian. It features three magnificent fountains, including the Fontana dei Quattro Fiumi (Fountain of the Four Rivers) by Bernini. A vibrant hub of Roman life, known for its street artists and cafes. It is said that the square was once flooded for mock naval battles.',
    coordinates: { lat: 41.8993, lng: 12.4733 },
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Trastevere',
    description: 'A charming and bohemian district in Rome, located on the west bank of the Tiber River. Known for its narrow cobblestone streets, traditional trattorias, artisan shops, and lively nightlife. It offers a more authentic Roman experience. It is said that it was once inhabited by a diverse mix of cultures.',
    coordinates: { lat: 41.887222, lng: 12.465556 },
    category: 'historic'
  },
  {
    id: '9',
    name: 'Campo de\' Fiori',
    description: 'A lively rectangular square in Rome, south of Piazza Navona, known for its bustling vegetable and flower market during the day and its vibrant nightlife. It was once the site of public executions. The statue of philosopher Giordano Bruno stands at its center. It is said that it was named after a beautiful meadow.',
    coordinates: { lat: 41.8957, lng: 12.472 },
    openingHours: 'Market: Mon-Sat ~7:00/8:00 - 14:00. Square accessible 24/7.',
    category: 'local_market'
  },
  {
    id: '10',
    name: 'Castel Sant\'Angelo',
    description: 'A towering cylindrical mausoleum in Rome, commissioned by Emperor Hadrian as a burial place for himself and his family. It was later used as a fortress and a prison. Its strategic location near the Vatican made it significant. It is said that an angel appeared atop it, ending a plague.',
    coordinates: { lat: 41.9031, lng: 12.4667 },
    openingHours: 'Tue-Sun: 9:00 - 19:30 (last entry 18:30). Closed Mon, Jan 1, May 1, Dec 25.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'historic'
  },
  {
    id: '11',
    name: 'Galleria Borghese',
    description: 'An art gallery in Rome, housed in the former Villa Borghese Pinciana, showcasing masterpieces by Bernini, Caravaggio, Raphael, and Titian. The gallery is surrounded by the beautiful Villa Borghese gardens. Reservations are required to visit. It is said that the villa was built on the site of Nero\'s tomb.',
    coordinates: { lat: 41.9042, lng: 12.4947 },
    openingHours: 'Tue-Sun: 9:00 - 19:00 (visits in 2-hour slots, last entry 17:00). Closed Mon, Jan 1, Dec 25. Booking mandatory.',
    freeEntryInfo: 'Free entry first Sunday of the month (booking still mandatory).',
    category: 'museum'
  },
  {
    id: '12',
    name: 'Spanish Steps',
    description: 'A monumental staircase of 135 steps in Rome, connecting the Piazza di Spagna at the base with the Trinità dei Monti church at the top. Designed by Francesco de Sanctis, it was completed in 1725. A popular spot for gatherings and offering picturesque views. It is said that it was built to link the Spanish Embassy to the church.',
    coordinates: { lat: 41.9058, lng: 12.4828 },
    category: 'landmark'
  },
  {
    id: '13',
    name: 'Catacombs of Rome',
    description: 'Ancient underground burial chambers outside Rome, used by early Christians and Jews. They provide insight into the funerary practices and art of the early centuries AD. Several catacombs are open to the public, including the Catacombs of Callixtus and Domitilla. It is said that they were used as hiding places during persecutions.',
    coordinates: { lat: 41.855917, lng: 12.516336 },
    openingHours: 'Generally 9:00-12:00 & 14:00-17:00. Each catacomb has different closing days/periods. Guided tours only.',
    category: 'historic'
  },
  {
    id: '14',
    name: 'Victor Emmanuel II Monument',
    description: 'An imposing national monument built in honor of Victor Emmanuel II, the first king of unified Italy. Also known as the Altare della Patria (Altar of the Fatherland), this grand white marble building dominates Piazza Venezia. Completed in 1925, it features grand stairways, Corinthian columns, fountains, and an equestrian statue of the king. The terrace offers panoramic views of Rome. It houses the Tomb of the Unknown Soldier with an eternal flame.',
    coordinates: { lat: 41.8947, lng: 12.4832 },
    openingHours: 'Daily 9:30 - 19:30 (last entry 18:45). Elevator to panoramic terrace: 9:30 - 19:00.',
    category: 'landmark'
  },
  {
    id: '15',
    name: 'Villa Borghese',
    description: 'A large and beautiful park in the heart of Rome, offering gardens, museums (including Galleria Borghese), fountains, and scenic viewpoints. It\'s a popular spot for recreation and relaxation. It is said that it was once a private vineyard that was transformed into a grand estate.',
    coordinates: { lat: 41.9088, lng: 12.4944 },
    openingHours: 'Park open daily, dawn until dusk.',
    category: 'nature'
  }
];
