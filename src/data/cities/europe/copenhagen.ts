import { Attraction } from '../../../types/attractions';


export const copenhagenAttractions: Attraction[] = [
  {
    id: '1',
    name: 'The Little Mermaid (statue)',
    description: 'A bronze statue inspired by Hans Christian Andersen’s fairy tale, gifted by brewer Carl Jacobsen in 1913. Perched on a rock at Langelinie Pier, it symbolizes Copenhagen. Despite its small size, it has faced vandalism and been moved several times. Legend says Andersen was inspired by unrequited love for a singer. Its serene gaze over the water captivates visitors.',
    coordinates: { lat: 55.6929, lng: 12.5994 },
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Tivoli Gardens',
    description: 'A 19th-century amusement park opened in 1843 by Georg Carstensen, who famously said it was meant to distract the public from politics. With rides like the wooden roller coaster Rutschebanen (1914) and the Star Flyer, it blends nostalgia with modern thrills. Evening light shows illuminate the gardens, and concerts resonate through the park, creating a magical atmosphere that inspired Walt Disney.',
    coordinates: { lat: 55.6736, lng: 12.5686 },
    openingHours: 'Seasonal opening (Summer, Halloween, Christmas, Winter/Easter). Hours vary, generally opens 11:00, closes 21:00-24:00. Check official website.',
    category: 'park'
  },
  {
    id: '3',
    name: 'Nyhavn',
    description: 'A 17th-century waterfront district built by King Christian V, originally a bustling port area frequented by sailors. The colorful townhouses, many now restaurants and bars, date back to the 17th and 18th centuries. Hans Christian Andersen lived in houses number 18, 20, and 67. Taking a canal cruise offers a unique perspective of the city’s architecture and history from the water.',
    coordinates: { lat: 55.6799, lng: 12.5903 },
    category: 'historic'
  },
  {
    id: '4',
    name: 'Rosenborg Castle',
    description: 'A Renaissance castle built by Christian IV between 1606 and 1633, serving as a royal residence. It houses the Danish crown jewels in the treasury, including the crowns of Christian IV and Frederick III. The Knights’ Hall features tapestries depicting Danish victories in the Scanian War. Surrounded by the King’s Garden, once used for royal recreation, it’s now a popular public park.',
    coordinates: { lat: 55.6854, lng: 12.5776 },
    openingHours: 'Castle/Treasury: Hours vary seasonally (often Tue-Sun, 10:00-16:00/17:00, closed Mon). Check official site. King\'s Garden: Daily, dawn-dusk.',
    freeEntryInfo: 'King\'s Garden free. Castle/Treasury requires paid ticket (children free).',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Christiansborg Palace',
    description: 'Home to the Danish Parliament, Supreme Court, and Royal Reception Rooms, with its history dating back to the 12th century. The current palace, the third on the site, was completed in 1928. Its tower offers free panoramic views of Copenhagen. The Royal Stables house ceremonial horses. Beneath the palace are ruins of earlier castles, including Bishop Absalon’s Castle.',
    coordinates: { lat: 55.6763, lng: 12.5779 },
    openingHours: 'Reception Rooms/Ruins/Kitchen: Daily 10:00-17:00 (seasonal variations). Stables: Limited hours. Tower: Tue-Sun (longer hours, closed Mon). Check official site.',
    freeEntryInfo: 'Tower entry is free. Reception Rooms/Ruins/Kitchen/Stables require paid ticket (children free).',
    category: 'historic'
  },
  {
    id: '6',
    name: 'National Museum of Denmark',
    description: 'Chronicles Danish history from the Stone Age to modern times, established in 1819. Highlights include Viking weapons, the Sun Chariot (a bronze artifact from the Bronze Age), and ethnographic collections. The museum provides a comprehensive cultural deep dive into Denmark’s past, showcasing its evolution through various periods and influences, from prehistoric times to the present day.',
    coordinates: { lat: 55.6744, lng: 12.5747 },
    openingHours: 'Tue-Sun: 10:00 - 17:00. Closed Mon.',
    freeEntryInfo: 'Free entry.',
    category: 'museum'
  },
  {
    id: '7',
    name: 'Rundetaarn',
    description: 'A 17th-century observatory built by Christian IV, completed in 1642. Its unique spiral ramp was designed to allow horses to carry instruments to the top. It has also served as a student dormitory and a library. Today, it hosts art exhibitions and offers panoramic views of Copenhagen from its rooftop. Tycho Brahe used it for astronomical observations.',
    coordinates: { lat: 55.6813, lng: 12.5765 },
    openingHours: 'Seasonal hours. Summer: Daily 10:00-20:00. Winter: Daily 10:00-18:00 (late Tue/Wed for Observatory).',
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Freetown Christiania',
    description: 'A self-proclaimed autonomous neighborhood established in 1971 by squatters in abandoned military barracks. Known for its murals, DIY houses, and a bohemian vibe, it operates under its own rules, different from Danish law. Respect local guidelines, especially regarding photography. It remains a controversial countercultural enclave, attracting both tourists and those seeking an alternative lifestyle.',
    coordinates: { lat: 55.6733, lng: 12.6094 },
    category: 'historic'
  },
  {
    id: '9',
    name: 'Amalienborg',
    description: 'The winter residence of the Danish royal family since the late 18th century, consisting of four identical rococo palaces built around an octagonal courtyard. Watch the changing of the guard ceremony at noon, a popular tourist attraction. Each palace was originally built for noble families. Queen Margrethe II resides in one of them.',
    coordinates: { lat: 55.6843, lng: 12.5934 },
    openingHours: 'Museum: Seasonal hours (often Tue-Sun 10:00/11:00-16:00/17:00, closed Mon). Check official site. Changing of the Guard: Daily 12:00.',
    freeEntryInfo: 'Changing of the Guard free to watch. Museum requires paid ticket.',
    category: 'historic'
  },
  {
    id: '10',
    name: 'Church of Our Saviour, Copenhagen',
    description: 'A baroque church completed in 1695, famous for its twisting spire that offers panoramic city views. The external staircase allows visitors to climb the final 150 steps outside, providing a thrilling ascent. Designed by Lambert van Haven, it is considered a masterpiece of Danish architecture. Legend says the architect threw himself from the top, believing a mistake was made in its construction.',
    coordinates: { lat: 55.6725, lng: 12.5975 },
    openingHours: 'Church: Daily ~11:00-15:30 (restricted during services). Spire: Seasonal (Mar-Dec), daily ~9:00/10:00-late afternoon/evening (weather permitting). Check official site.',
    freeEntryInfo: 'Church entry free. Spire requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '11',
    name: 'Designmuseum Denmark',
    description: 'Showcases Danish and international design, from furniture to fashion, housed in a former hospital built in the 1750s. Explore the evolution of Scandinavian minimalism, a key aspect of Danish design. The museum features works by iconic Danish designers like Arne Jacobsen and Poul Henningsen, highlighting the country\'s significant contributions to the world of design.',
    coordinates: { lat: 55.6886, lng: 12.5878 },
    openingHours: 'Tue-Sun: 10:00 - 18:00 (Thu until 20:00). Closed Mon.',
    category: 'museum'
  },
  {
    id: '12',
    name: 'Strøget',
    description: 'One of Europe’s longest pedestrian streets, stretching from Rådhuspladsen to Kongens Nytorv. It became pedestrianized in 1962, marking a significant shift in urban planning. Lined with shops, from high-end boutiques to souvenir stalls, and cafes, it’s a bustling hub for shopping and people-watching. Historical buildings intermingle with modern stores along its route.',
    coordinates: { lat: 55.6778, lng: 12.575 },
    category: 'landmark'
  }
];
