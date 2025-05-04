import { Attraction } from '../../../types/attractions';

export const bostonAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Freedom Trail',
    description: 'A 2.5-mile brick path connecting 16 historic sites from Boston Common to Bunker Hill Monument. Highlights include the site of the Boston Massacre, Paul Revere House, and Old North Church where "one if by land, two if by sea" signal lanterns were hung. Conceived in 1951 by journalist William Schofield and now walked by over 4 million visitors annually. The trail can be completed in about 2 hours, but history enthusiasts often spend a full day exploring all sites.',
    coordinates: { lat: 42.36, lng: -71.056667 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Freedom_Trail.jpg/1280px-Freedom_Trail.jpg']
  },
  {
    id: '2',
    name: 'Fenway Park',
    description: 'America\'s oldest active MLB park (1912) and home to the Red Sox. Famous for the 37-foot "Green Monster" wall and the lone red seat marking Ted Williams\' 502-foot home run (1946). The park\'s quirky dimensions resulted from fitting into existing city streets. Fenway\'s manual scoreboard is still operated from inside by scorekeepers who update it by hand. Despite being the MLB\'s smallest ballpark by seating capacity, it\'s considered one of baseball\'s most iconic venues.',
    coordinates: { lat: 42.3467, lng: -71.0972 },
    openingHours: 'Tours available daily 9:00-17:00 (hours vary on game days)',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Fenway_from_Legend%27s_Box.jpg/1280px-Fenway_from_Legend%27s_Box.jpg']
  },
  {
    id: '3',
    name: 'Museum of Fine Arts, Boston',
    description: 'One of the world\'s most comprehensive art museums with over 450,000 works. Founded in 1870, it houses masterpieces by Monet, Van Gogh, and Rembrandt alongside one of America\'s finest Egyptian collections. The museum owns all 35 Monets that were displayed in a groundbreaking 1911 exhibition—the first of his work in the US. Its Japanese collection is the finest outside Japan, while the musical instrument collection includes the oldest known piano, built by Bartolomeo Cristofori in 1720.',
    coordinates: { lat: 42.3394, lng: -71.0940 },
    openingHours: 'Wed-Sun 10:00-17:00, Thu-Fri until 22:00',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Museum_of_Fine_Arts_Boston.jpg/1280px-Museum_of_Fine_Arts_Boston.jpg']
  },
  {
    id: '4',
    name: 'Boston Public Garden',
    description: 'America\'s first public botanical garden (1837) featuring Victorian landscaping and over 600 tree varieties. Home to the iconic Swan Boats operating since 1877, where operators pedal from behind swan facades. The garden contains the world\'s smallest suspension bridge and the famous "Make Way for Ducklings" statue. During the 1860s tulip mania, armed guards protected the garden\'s prized tulips from souvenir hunters. In winter, the lagoon freezes for ice skating.',
    coordinates: { lat: 42.3544, lng: -71.0704 },
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Boston_Public_Garden_-_panoramio.jpg/1280px-Boston_Public_Garden_-_panoramio.jpg']
  },
  {
    id: '5',
    name: 'New England Aquarium',
    description: 'Marine conservation center featuring a four-story Giant Ocean Tank with 1,000+ Caribbean reef animals. The 200,000-gallon tank is so precisely maintained that it\'s used to calibrate scientific instruments. Home to Myrtle, a 550-pound green sea turtle rescued in 1970 who\'s become the aquarium\'s unofficial mascot. The penguin colony includes birds named after Boston athletes and celebrities. The aquarium pioneered techniques for breeding endangered species and operates whale watching tours where sightings are guaranteed.',
    coordinates: { lat: 42.3592, lng: -71.0492 },
    openingHours: 'Mon-Sun 9:00-17:00 (until 18:00 in summer)',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/New_England_Aquarium_-_panoramio.jpg/1280px-New_England_Aquarium_-_panoramio.jpg']
  },
  {
    id: '6',
    name: 'Harvard University',
    description: 'America\'s oldest university (1636), named after its first benefactor. The campus features Harvard Yard, the John Harvard Statue (called the "Statue of Three Lies"), and Widener Library with 6+ million volumes. The statue\'s foot is shiny from tourists rubbing it for luck, though students avoid this tradition. Eight U.S. presidents attended Harvard, and its endowment exceeds $50 billion. The Harvard Museum of Natural History houses 4,300 incredibly detailed glass flower models created by father-son artists over 50 years.',
    coordinates: { lat: 42.374444, lng: -71.116944 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Harvard_Yard.jpg/1280px-Harvard_Yard.jpg']
  },
  {
    id: '7',
    name: 'Isabella Stewart Gardner Museum',
    description: 'A Venetian-style palace housing art collector Isabella Stewart Gardner\'s personal collection, arranged exactly as she left it per her will. The museum\'s central courtyard features a stunning seasonal garden. In 1990, it was the site of history\'s largest unsolved art heist—13 works worth $500 million were stolen, and empty frames still hang as placeholders. Gardner\'s eccentric will stipulates that if anything is permanently moved, the entire collection must be auctioned with proceeds going to Harvard—her rival institution.',
    coordinates: { lat: 42.338611, lng: -71.098889 },
    openingHours: 'Wed-Mon 11:00-17:00, Thu until 21:00, closed Tue',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Isabella_Stewart_Gardner_Museum_%28Boston%29.jpg/1280px-Isabella_Stewart_Gardner_Museum_%28Boston%29.jpg']
  },
  {
    id: '8',
    name: 'Boston Harbor Islands National and State Park',
    description: 'A network of 34 islands and peninsulas featuring beaches, hiking trails, and historic sites. Home to America\'s oldest lighthouse (Boston Light, 1716) and Fort Warren on Georges Island, reportedly haunted by the "Lady in Black." Spectacle Island, once a landfill, was transformed using 3.5 million cubic yards of "Big Dig" excavation material. During Prohibition, the islands were popular with rum runners evading authorities. The park offers camping on four islands—the only public camping available within the Boston city limits.',
    coordinates: { lat: 42.318611, lng: -70.945833 },
    openingHours: 'Seasonal (May-October), ferry schedule varies',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Boston_Harbor_Islands.jpg/1280px-Boston_Harbor_Islands.jpg']
  },
  {
    id: '9',
    name: 'Quincy Market',
    description: 'Historic market built in 1824-26 to accommodate overflow from Faneuil Hall, featuring a 535-foot Greek Revival building with a copper-domed rotunda. Now home to 50+ shops and numerous food vendors, it attracts 18 million visitors annually. The market was built on reclaimed land using 500,000 bricks and granite from Quincy, Massachusetts. During the 1970s restoration, workers discovered a time capsule from 1826 containing coins, newspapers, and a letter from Mayor Josiah Quincy. The building has no basement due to its location on filled land.',
    coordinates: { lat: 42.36, lng: -71.055 },
    openingHours: 'Mon-Sat 10:00-21:00, Sun 12:00-18:00 (restaurant hours vary)',
    category: 'cultural',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Quincy_Market%2C_Boston%2C_Massachusetts.JPG/1280px-Quincy_Market%2C_Boston%2C_Massachusetts.JPG']
  },
  {
    id: '10',
    name: 'Boston Symphony Orchestra',
    description: 'Home to one of America\'s "Big Five" orchestras in a hall renowned for perfect acoustics. Symphony Hall (1900) was the first concert venue designed using scientific acoustic principles. The hall contains 16 replicas of Greek and Roman statues, with empty niches deliberately left unfilled to enhance sound quality. "BEETHOVEN" is the only composer name displayed, as others were deemed not yet worthy of judgment. The hall\'s acoustics are so precise that when full of people, the reverberation time decreases by less than 0.3 seconds compared to empty.',
    coordinates: { lat: 42.3429, lng: -71.0856 },
    openingHours: 'Performance schedule varies, typically Thu-Sat evenings, Fri afternoon',
    category: 'entertainment',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Symphony_Hall_Boston.jpg/1280px-Symphony_Hall_Boston.jpg']
  },
  {
    id: '11',
    name: 'Boston Tea Party Ships & Museum',
    description: 'Interactive museum commemorating the 1773 protest that helped spark the American Revolution. Features ship replicas where visitors can throw mock tea crates overboard and displays the Robinson Half Chest—one of only two surviving original tea chests. The actual tea party involved 342 chests worth about $1.7 million today. Participants wore disguises and swore secrecy, with their identities remaining unknown for decades. The tea dumped into the harbor created a tea-scented tide that lingered for days.',
    coordinates: { lat: 42.3519, lng: -71.0512 },
    openingHours: 'Daily 10:00-17:00 (hours vary seasonally)',
    category: 'museum',
    imageUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP7HRUT0W4lwYneIreqBpaALJ7mXuBOuPEA&s']
  },
  {
    id: '12',
    name: 'Arnold Arboretum',
    description: 'A 281-acre living museum with 15,000+ plants, designed by Frederick Law Olmsted as part of Boston\'s Emerald Necklace park system. Established in 1872, it\'s North America\'s oldest public arboretum. During the 1996 "Lilac Sunday" celebration, a couple secretly planted a rare Korean lilac in honor of their daughter—park officials discovered it years later and now maintain it. The Larz Anderson Bonsai Collection includes specimens dating to 1776, making them among the oldest cultivated bonsai outside Japan.',
    coordinates: { lat: 42.297778, lng: -71.122778 },
    openingHours: 'Daily sunrise to sunset',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arnold_Arboretum_-_general_view.JPG/1280px-Arnold_Arboretum_-_general_view.JPG']
  }
];
