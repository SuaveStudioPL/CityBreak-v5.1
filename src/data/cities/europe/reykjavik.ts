import { Attraction } from '../../../types/attractions';

export const reykjavikAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Hallgrímskirkja',
    description: 'A Lutheran parish church and the largest church in Iceland, standing 74.5 meters tall. Known for its distinctively curved spire and side wings, it has become an important symbol of Iceland\'s national identity. The church is named after the Icelandic poet and cleric Hallgrímur Pétursson. Visitors can take an elevator to the top of the tower for panoramic views of Reykjavík.',
    coordinates: { lat: 64.1417, lng: -21.9266 },
    openingHours: 'Church: Daily 9:00-17:00 (Oct-Apr), 9:00-21:00 (May-Sep). Tower: Daily 9:00-17:00 (hours may vary seasonally).',
    freeEntryInfo: 'Church entry is free. Tower access requires a paid ticket.',
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Harpa (concert hall)',
    description: 'A striking concert hall and conference center featuring a distinctive colored glass façade inspired by Iceland\'s basalt landscape. Designed by Danish firm Henning Larsen Architects in cooperation with Danish-Icelandic artist Olafur Eliasson. Home to the Iceland Symphony Orchestra and the Icelandic Opera. The building won the European Union\'s Mies van der Rohe award for contemporary architecture in 2013.',
    coordinates: { lat: 64.15028, lng: -21.93250 },
    openingHours: 'Daily 10:00-18:00. Extended hours during events.',
    category: 'cultural'
  },
  {
    id: '3',
    name: 'Perlan',
    description: 'A natural history museum situated on top of Öskjuhlíð hill. Originally built as hot water storage tanks, it now features a glass dome and offers 360° observation deck views of Reykjavík. The museum houses exhibitions on Icelandic nature including a 100-meter-long ice cave built from 400 tons of snow, a planetarium with Northern Lights shows, and exhibits on glaciers, volcanoes, and marine life.',
    coordinates: { lat: 64.1292, lng: -21.9189 },
    openingHours: 'Daily 9:00-22:00 (hours may vary seasonally).',
    category: 'museum'
  },
  {
    id: '4',
    name: 'The Sun Voyager',
    description: 'A striking stainless steel sculpture by Jón Gunnar Árnason, located by the Sæbraut road along Reykjavík\'s waterfront. Often mistaken for a Viking ship, it is actually a dreamboat and an ode to the sun, symbolizing light, hope, and progress. The sculpture was unveiled on August 18, 1990, on the city\'s birthday, and has since become one of Reykjavík\'s most photographed attractions.',
    coordinates: { lat: 64.147597, lng: -21.9223 },
    category: 'landmark'
  },
  {
    id: '5',
    name: 'National Museum of Iceland',
    description: 'Established in 1863, the museum houses a permanent exhibition about Iceland\'s history from settlement to the present day. The collection includes around 2,000 objects and artifacts that tell the story of Iceland\'s cultural heritage. A key exhibit is the Valþjófsstaður door, a celebrated medieval carving depicting a knight slaying a dragon. The museum provides insights into how Icelanders have lived through the centuries.',
    coordinates: { lat: 64.1419, lng: -21.9481 },
    openingHours: 'Daily 10:00-17:00 (May-Sep), Closed Mondays (Oct-Apr).',
    freeEntryInfo: 'Free entry for children under 18, students, and seniors.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Laugavegur (Reykjavík)',
    description: 'Reykjavík\'s main shopping street and one of the oldest streets in the city. Lined with boutiques, restaurants, bars, and cafés, it forms the heart of the city\'s vibrant downtown area. The name means "wash road" as it was once the route to the hot springs where women carried laundry. Today, it\'s the center of Reykjavík\'s shopping and nightlife, bustling with activity day and night.',
    coordinates: { lat: 64.145306, lng: -21.9272 },
    category: 'cultural'
  },
  {
    id: '7',
    name: 'Reykjavík City Hall',
    description: 'A modern building located on the northern shore of Lake Tjörnin in central Reykjavík. Designed by architects Studio Granda and completed in 1992, it houses the offices of the mayor, city council meeting rooms, and exhibition spaces. The building features a large 3D relief map of Iceland and often hosts art exhibitions and cultural events. Its reflection in the lake creates a striking visual effect.',
    coordinates: { lat: 64.145833, lng: -21.942222 },
    openingHours: 'Mon-Fri 8:00-18:00, Sat-Sun 12:00-17:00.',
    freeEntryInfo: 'Free entry.',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Tjörnin',
    description: 'A small lake in central Reykjavík, often called "The Pond." It\'s a popular recreational area for locals and visitors alike, with a walking path circling the water. Home to over 40 species of birds, including swans, geese, and ducks that residents often feed. In winter, the lake frequently freezes over and becomes a natural ice skating rink. The area around Tjörnin features several important buildings and museums.',
    coordinates: { lat: 64.1456, lng: -21.9434 },
    category: 'nature'
  },
  {
    id: '9',
    name: 'Viðey',
    description: 'A beautiful island located in Kollafjörður Bay, just a short ferry ride from Reykjavík\'s Old Harbor. Home to the Imagine Peace Tower, a light installation conceived by Yoko Ono as a memorial to John Lennon. The island features historic buildings, including Viðey House (built in 1755), one of the oldest stone buildings in Iceland. Visitors can enjoy hiking trails, bird watching, and art installations in a peaceful setting.',
    coordinates: { lat: 64.164093, lng: -21.858952},
    openingHours: 'Ferry service varies seasonally. Island accessible year-round.',
    category: 'nature'
  },
  {
    id: '10',
    name: 'The Settlement Exhibition',
    description: 'An archaeological museum built around the ruins of a Viking longhouse from the Settlement Age (871±2). The exhibition is based on the archaeological excavation of a Viking Age longhouse found in 2001. Using modern technology, it brings the Viking Age to life, showing how the first settlers in Iceland lived. Interactive displays allow visitors to explore Viking culture, architecture, and daily life in early Reykjavík.',
    coordinates: { lat: 64.147512, lng: -21.942814 },
    openingHours: 'Daily 10:00-17:00.',
    category: 'museum'
  }
];
