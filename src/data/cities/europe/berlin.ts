import { Attraction } from '../../../types/attractions';

export const berlinAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Brandenburg Gate',
    description: 'Symbol of Berlin, a triumphal arch. Erected in the late 18th century, the Brandenburg Gate was once a symbol of division during the Cold War, but now stands as a symbol of unity and peace. It marks the entrance to Unter den Linden and is one of the most iconic landmarks in Germany, frequently featured in political events and celebrations.',
    coordinates: { lat: 52.5162, lng: 13.3777 },
    category: 'landmark'
  },
  {
    id: '2',
    name: 'Reichstag building',
    description: 'German parliament building. The Reichstag, originally built in 1894, was the site of numerous significant historical events, including the burning of the Reichstag in 1933. After being rebuilt in the 1990s, it now houses the Bundestag (German parliament) and features a striking glass dome designed by architect Norman Foster, offering visitors panoramic views of Berlin.',
    coordinates: { lat: 52.5186, lng: 13.3761 },
    openingHours: 'Dome/Terrace: Daily 8:00 - 24:00 (last entry ~21:45). Hours may vary seasonally/closures possible. Check official website.',
    freeEntryInfo: 'Free entry to Dome/Terrace, but requires advance online registration.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'East Side Gallery',
    description: 'Remains of the Berlin Wall turned into an art gallery. The East Side Gallery is the longest preserved stretch of the Berlin Wall, now covered with murals by artists from around the world. It serves as both a memorial to the division of Germany and a symbol of freedom, with iconic pieces reflecting the political changes of the 1980s and 1990s.',
    coordinates: { lat: 52.5054, lng: 13.445 },
    category: 'historic'
  },
  {
    id: '4',
    name: 'Unter den Linden',
    description: 'Famous boulevard with numerous shops and restaurants. This historic avenue, lined with lime trees, stretches from Brandenburg Gate to Schlossbrücke and is home to many of Berlin’s most important cultural and historical institutions, including the Berlin State Opera and Humboldt University. It remains one of Berlin’s most elegant and vibrant streets.',
    coordinates: { lat: 52.517, lng: 13.39 },
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Pergamon Museum',
    description: 'Museum with a rich collection of ancient artifacts (NOTE: Main building CLOSED for extensive renovation until at least 2027. Pergamon Altar unavailable. Check status of "Das Panorama" exhibition). Located on Museum Island, the Pergamon Museum houses some of the world’s most impressive archaeological collections, including the famous Pergamon Altar and the Ishtar Gate of Babylon.',
    coordinates: { lat: 52.5207, lng: 13.3989 },
    category: 'museum'
  },
  {
    id: '6',
    name: 'Checkpoint Charlie',
    description: 'Former crossing point between East and West Berlin during the Cold War. Checkpoint Charlie is one of Berlin’s most well-known historical sites. It was the location of numerous tense stand-offs between American and Soviet forces during the Cold War. Today, a replica of the guardhouse stands at the site, along with an exhibition detailing the history of the Berlin Wall and escape attempts.',
    coordinates: { lat: 52.5076, lng: 13.3904 },
    category: 'historic'
  },
  {
    id: '7',
    name: 'Alexanderplatz',
    description: 'Central square of Berlin. Known as "Alex," Alexanderplatz is a bustling hub of activity with shops, restaurants, and landmarks such as the Berlin TV Tower (Berliner Fernsehturm). It was once the heart of East Berlin and remains a vibrant and iconic location, especially known for its Soviet-era architecture and modern commercial spaces.',
    coordinates: { lat: 52.5215, lng: 13.4134 },
    category: 'landmark'
  },
  {
    id: '8',
    name: 'Tiergarten (park)',
    description: 'Large city park. Tiergarten is Berlin’s central park, offering a peaceful green space right in the heart of the city. With beautiful walking paths, lakes, and memorials, including the Berlin Victory Column and the Soviet War Memorial, the park is a favorite place for both locals and tourists to relax and enjoy nature in the middle of the urban landscape.',
    coordinates: { lat: 52.5144, lng: 13.35 },
    category: 'park'
  },
  {
    id: '9',
    name: 'Kreuzberg',
    description: 'Alternative district with numerous bars and restaurants. Kreuzberg is known for its multicultural atmosphere, vibrant nightlife, and artistic vibe. Once a symbol of counterculture, it now offers a mix of quirky cafes, bars, and independent shops. The district is also home to several museums, including the Jewish Museum and the Berlinische Galerie.',
    coordinates: { lat: 52.498, lng: 13.415 },
    category: 'historic'
  },
  {
    id: '10',
    name: 'Markthalle Neun',
    description: 'Market hall with food from around the world. Markthalle Neun in Kreuzberg is a food lover’s paradise, offering a variety of local and international cuisine from artisanal vendors. The market hall hosts regular events and is a great place to experience Berlin’s diverse food culture, with specialties ranging from freshly baked bread to international street food.',
    coordinates: { lat: 52.5036, lng: 13.4344 },
    openingHours: 'Core hours Tue-Sat ~12:00-18:00/20:00. Street Food Thursday evenings (~until 22:00). Hours vary by vendor/day. Check official website.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Markthalle_Neun_08.02.2015_16-39-58.JPG/500px-Markthalle_Neun_08.02.2015_16-39-58.JPG?20150530195131']
  },
  {
    id: '11',
    name: 'Schloss Charlottenburg',
    description: 'Palace with beautiful gardens. Schloss Charlottenburg is the largest palace in Berlin, originally built in the late 17th century as a summer residence for the Prussian royal family. The palace features magnificent baroque architecture and extensive gardens, making it a perfect place for a stroll. Inside, you can find opulent rooms, royal collections, and exhibitions on the history of the Hohenzollern dynasty.',
    coordinates: { lat: 52.52, lng: 13.295 },
    openingHours: 'Palace: Tue-Sun, seasonal hours (e.g., 10:00-17:30 summer, 10:00-16:30 winter). Closed Mon. Gardens: Daily 8:00-dusk.',
    freeEntryInfo: 'Gardens are free to enter. Palace requires paid ticket.',
    category: 'historic'
  },
  {
    id: '12',
    name: 'Museum Island',
    description: 'UNESCO World Heritage site with five museums (Pergamon Museum currently closed for renovation). Museum Island is home to Berlin’s most important cultural institutions, including the Altes Museum, Neues Museum, Alte Nationalgalerie, and Bode Museum. It offers an unparalleled opportunity to explore art, archaeology, and history.',
    coordinates: { lat: 52.5198, lng: 13.3988 },
    openingHours: 'Most museums: Tue-Sun 10:00 - 18:00. Closed Mon. Check individual museum hours.',
    category: 'museum'
  },
  {
    id: '13',
    name: 'Gendarmenmarkt',
    description: 'Elegant square with German and French Cathedrals. Gendarmenmarkt is one of Berlin’s most beautiful squares, known for its classical architecture, including the German and French Cathedrals and the Konzerthaus (Concert Hall). The square is often host to open-air concerts and cultural events, particularly in the summer months, making it a center of Berlin’s cultural life.',
    coordinates: { lat: 52.5138, lng: 13.3912 },
    category: 'landmark'
  },
  {
    id: '14',
    name: 'Tempelhofer Feld',
    description: 'Former airport turned into a large park. Tempelhofer Feld was once Berlin’s main airport before being closed and transformed into a massive public park. The vast open space is popular for cycling, jogging, picnicking, and kite flying. It is one of the largest urban green spaces in Europe and a symbol of Berlin’s ability to reimagine its history and spaces.',
    coordinates: { lat: 52.4833, lng: 13.4 },
    openingHours: 'Open daily. Hours vary monthly, opening early (6:00-7:30) and closing around sunset (17:00-22:30). Check official website.',
    category: 'park'
  },
  {
    id: '15',
    name: 'Hackesche Höfe',
    description: 'Network of interconnected courtyards with shops and cafes. The Hackesche Höfe is a complex of eight interconnected courtyards located in the heart of Berlin’s Mitte district. It’s known for its stunning Art Nouveau architecture and houses numerous boutique shops, cafes, galleries, and restaurants. The courtyards are a popular spot for both locals and tourists, offering a unique mix of history and modernity.',
    coordinates: { lat: 52.5262, lng: 13.4017 },
    category: 'landmark'
  },
  {
    id: '16',
    name: 'Olympiastadion Berlin',
    description: 'Olympic stadium, home to Hertha BSC. Built for the 1936 Summer Olympics, the Olympiastadion is an iconic venue that has hosted numerous major sporting events, including World Cup finals and Champions League matches. The stadium is also home to the Hertha BSC football club and remains a focal point for Berlin’s sports culture. Visitors can take a tour to learn about its rich history and architectural features.',
    coordinates: { lat: 52.5136, lng: 13.2545 },
    openingHours: 'Open daily for visits/tours, but hours vary seasonally (e.g., 9:00-19:00 summer, 10:00-16:00 winter) and are affected by events. Check official website.',
    category: 'landmark'
  }
];
