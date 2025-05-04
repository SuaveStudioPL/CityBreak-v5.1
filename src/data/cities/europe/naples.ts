import { Attraction } from '../../../types/attractions';


export const naplesAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Pompeii',
    description: 'An ancient Roman city, remarkably preserved under layers of ash from the catastrophic eruption of Mount Vesuvius in 79 AD. Explore the ruins of houses, shops, and public buildings, offering a glimpse into Roman life. A UNESCO World Heritage Site, it provides invaluable insights into the past. It is said that the city was rediscovered by accident in the 16th century.',
    coordinates: { lat: 40.7508, lng: 14.4868 },
    openingHours: 'Daily, seasonal hours (Summer ~9:00-19:30, Winter ~9:00-17:00). Closed Jan 1, May 1, Dec 25.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Naples National Archaeological Museum',
    description: 'One of Italy\'s most important archaeological museums, housing an extensive collection of Roman artifacts, particularly from Pompeii and Herculaneum. Marvel at mosaics, sculptures, and everyday objects that survived the volcanic eruption. It also holds the Farnese collection of Roman antiquities. It is said that some artifacts possess ancient curses.',
    coordinates: { lat: 40.8532, lng: 14.2508 },
    openingHours: 'Wed-Mon: 9:00 - 19:30 (last entry 19:00). Closed Tue, Jan 1, Dec 25.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'museum'
  },
  {
    id: '3',
    name: 'Mount Vesuvius',
    description: 'An active volcano that famously buried Pompeii. Hike to the crater for breathtaking panoramic views of Naples Bay, the surrounding landscape, and the volcanic slopes. It\'s part of Vesuvius National Park. It is said that the volcano is named after the Roman god Vulcan.',
    coordinates: { lat: 40.8219, lng: 14.4262 },
    openingHours: 'Daily, seasonal hours (Nov-Feb 9-15, Mar/Oct 9-16, Apr-Jun/Sep 9-17, Jul-Aug 9-18). Weather dependent. Booking required.',
    category: 'nature'
  },
  {
    id: '4',
    name: 'Spaccanapoli (street)',
    description: 'A historic and vibrant street that literally "splits" Naples\' old town in two. Lined with churches, palaces, shops, and bustling life, it offers a sensory experience of the city\'s heart. Explore its narrow alleys and discover hidden gems. It is said that it follows the path of an ancient Greek road.',
    coordinates: { lat: 40.833333, lng: 14.25 },
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Naples Cathedral',
    description: 'A Gothic cathedral, also known as the Duomo di Napoli, dedicated to San Gennaro, the patron saint of Naples. It houses relics of the saint, including vials of his blood, which are said to liquefy twice a year in a miracle. The cathedral is a significant religious and cultural site. It is said that its construction began in the late 13th century.',
    coordinates: { lat: 40.8525, lng: 14.2596 },
    openingHours: 'Daily, closes midday (Mon-Sat ~8:30-12:30 & 16:30-19:00, Sun ~8:30-13:00 & 16:30-19:30). Restricted during services.',
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Castel dell\'Ovo',
    description: 'A seaside castle, the oldest in Naples, located on the small island of Megaride in the Bay of Naples. Its origins date back to the 1st century BC. Enjoy beautiful bay views from its ramparts. It is said that the castle is named after a magical egg hidden in its foundations by the Roman poet Virgil.',
    coordinates: { lat: 40.8288, lng: 14.2478 },
    openingHours: 'Mon-Sat: ~8:30 - 19:00 (sunset). Sun/Holidays: ~8:30 - 14:00.',
    freeEntryInfo: 'Free entry.',
    category: 'historic'
  },
  {
    id: '7',
    name: 'Naples Underground',
    description: 'An extensive network of ancient tunnels and caverns beneath the city, used for various purposes throughout history, including as aqueducts, catacombs, and WWII air raid shelters. Guided tours offer a fascinating glimpse into Naples\' hidden history. It is said that the tunnels are haunted.',
    coordinates: { lat: 40.837299, lng: 14.245636 },
    openingHours: 'Guided tours only. English tours daily at 10:00, 12:00, 14:00, 16:00, 18:00.',
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tuff_tunnel_below_Naples.jpg/800px-Tuff_tunnel_below_Naples.jpg']
  },
  {
    id: '8',
    name: 'Via San Gregorio Armeno',
    description: 'A famous street, also known as "Christmas Alley," renowned for its traditional Neapolitan nativity scenes (presepi) and artisan crafts. Throughout the year, you can find handcrafted figurines and decorations. A unique and charming street showcasing Neapolitan artistry. It is said that the tradition dates back to the Roman era.',
    coordinates: { lat: 40.849941, lng: 14.258024 },
    category: 'local_market',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Napoli_-_Via_San_Gregorio_Armeno.JPG/250px-Napoli_-_Via_San_Gregorio_Armeno.JPG']
  },
  {
    id: '9',
    name: 'Royal Palace of Naples',
    description: 'A former royal palace, one of the four residences used by the Bourbon kings of Naples. Today, it houses historic apartments, the National Library of Naples, and art collections. Its grand architecture reflects the power and opulence of the Neapolitan monarchy. It is said that it was built in the 17th century by Domenico Fontana.',
    coordinates: { lat: 40.8362, lng: 14.2496 },
    openingHours: 'Thu-Tue: 9:00 - 20:00 (last entry 19:00). Closed Wed, Jan 1, Dec 25.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'historic'
  },
  {
    id: '10',
    name: 'Capodimonte Museum',
    description: 'An art museum located in a Bourbon palace on a hill overlooking the city. It houses an impressive collection of Neapolitan paintings, as well as works by Italian masters like Caravaggio, Titian, and Raphael. The palace itself is a work of art, surrounded by a large park. It is said that it was originally built as a hunting lodge.',
    coordinates: { lat: 40.867006, lng: 14.250533},
    openingHours: 'Thu-Tue: 8:30 - 19:30 (last entry 18:30). Closed Wed.',
    freeEntryInfo: 'Free entry first Sunday of the month.',
    category: 'museum'
  }
];
