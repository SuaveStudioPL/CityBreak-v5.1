import { Attraction } from '../../../types/attractions';

export const belgradeAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Belgrade Fortress',
    description: 'Historic fortress at the confluence of the Sava and Danube rivers, featuring Kalemegdan Park. Dating back to Roman times, it has been a strategic military stronghold throughout history, offering panoramic views of the rivers and the city. The fortress complex includes a mix of archaeological sites, museums, and monuments.',
    coordinates: { lat: 44.8233, lng: 20.4489 },
    openingHours: 'Fortress/Park grounds open 24/7. Museums/sites within have own hours.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Saint Sava Temple',
    description: 'One of the largest Orthodox churches in the world, with stunning architecture. Located on Vračar Hill, the temple was built to honor Saint Sava, the founder of the Serbian Orthodox Church. Its massive dome and intricate mosaics make it a prominent landmark in Belgrade’s skyline and a symbol of Serbian spirituality and heritage.',
    coordinates: { lat: 44.7980, lng: 20.4685 },
    openingHours: 'Generally open daily, approx. 8:00 - 18:00. Check locally.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Skadarlija',
    description: 'Historic bohemian quarter with traditional restaurants and cultural atmosphere. Known as Belgrade’s “Montmartre,” Skadarlija is a charming cobblestone street lined with taverns (kafanas), art galleries, and local shops. It has been the meeting place for artists, writers, and musicians since the 19th century and remains a vibrant hub of the city’s cultural life.',
    coordinates: { lat: 44.8178, lng: 20.4647 },
    category: 'historic'
  },
  {
    id: '4',
    name: 'Nikola Tesla Museum',
    description: 'Museum dedicated to the life and work of inventor Nikola Tesla. The museum houses an extensive collection of original documents, photographs, and personal belongings of Tesla, as well as working models of his inventions. Visitors can experience the electric genius of Tesla through interactive exhibits and live demonstrations of his contributions to modern technology.',
    coordinates: { lat: 44.8048, lng: 20.4746 },
    openingHours: 'Tue-Sun: 10:00 - 18:00. Closed Mon. Guided tours hourly.',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Republic Square, Belgrade',
    description: 'Central city square with the National Museum and National Theatre. Republic Square is the heart of Belgrade, surrounded by historic buildings and cultural landmarks. The square often hosts public events, concerts, and celebrations, and is a popular meeting point for both locals and tourists. It is also home to a statue of Prince Mihailo, a symbol of Serbian history and independence.',
    coordinates: { lat: 44.8162, lng: 20.4600 },
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Ada Ciganlija',
    description: 'Popular recreational area with a lake beach and sports facilities. Often referred to as "Belgrade’s sea," Ada Ciganlija is an artificial lake that offers a wide range of activities, including swimming, cycling, and water sports. It is a popular summer destination for locals looking to relax, enjoy nature, and escape the city’s hustle and bustle.',
    coordinates: { lat: 44.7866, lng: 20.4141 },
    category: 'park'
  },
  {
    id: '7',
    name: 'Zemun',
    description: 'Historic district with Austro-Hungarian architecture and riverside restaurants. Zemun is a charming part of Belgrade with a unique atmosphere influenced by its history under Austro-Hungarian rule. Its cobblestone streets, baroque-style buildings, and vibrant riverside cafes make it a great spot for leisurely strolls and dining, offering a more relaxed vibe compared to the city center.',
    coordinates: { lat: 44.8437, lng: 20.4114 },
    category: 'historic'
  },
  {
    id: '8',
    name: 'Knez Mihailova Street',
    description: 'Main pedestrian and shopping zone with historic buildings. Knez Mihailova is Belgrade’s most famous pedestrian street, lined with elegant 19th-century buildings, boutiques, cafes, and cultural institutions. The street has been a central gathering place for locals for centuries and is a great spot for shopping, people-watching, and enjoying the city’s atmosphere.',
    coordinates: { lat: 44.8184, lng: 20.4563 },
    category: 'landmark'
  },
  {
    id: '9',
    name: 'Belgrade Zoo',
    description: 'One of the oldest zoos in Europe, located within Kalemegdan Park. The Belgrade Zoo, also known as the Garden of Good Hope, is home to a wide variety of animals from around the world. Situated within the historic Kalemegdan Fortress, the zoo offers a fun and educational experience for families, with stunning views of the Sava and Danube rivers.',
    coordinates: { lat: 44.8264, lng: 20.4508 },
    openingHours: 'Open daily from 9:00. Closing times vary seasonally (e.g., 16:30 winter, 19:00/20:00 summer).',
    freeEntryInfo: 'Free entry for children under 3.',
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Gardoš Tower',
    description: 'Historic tower in Zemun offering panoramic views of Belgrade. Located in the heart of Zemun, the Gardoš Tower (also known as the Millennium Tower) stands as a testament to the region’s long history. Built in 1896 to mark the 1000th anniversary of the Hungarian conquest of the Carpathian Basin, the tower offers spectacular views of the city and the Danube River.',
    coordinates: { lat: 44.8507, lng: 20.4097 },
    openingHours: 'Limited hours, possibly weekends only (e.g., Fri-Sun 16:00-19:00). Check locally.',
    category: 'landmark'
  }
];
