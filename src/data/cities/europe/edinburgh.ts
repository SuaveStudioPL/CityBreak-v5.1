import { Attraction } from '../../../types/attractions';


export const edinburghAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Edinburgh Castle',
    description: 'Historic fortress dominating the city skyline, with origins dating back to the 12th century, though the current structure is largely from the 16th century. It houses Scotland\'s crown jewels, including the Stone of Scone. Legend says the castle is built on volcanic rock, and secret tunnels run beneath it. It has served as a royal residence, military garrison, and prison, witnessing pivotal moments in Scottish history.',
    coordinates: { lat: 55.9486, lng: -3.1999 },
    openingHours: 'Daily. Summer (Apr-Sep): 9:30-18:00. Winter (Oct-Mar): 9:30-17:00. Last entry 1 hour before close. Booking recommended.',
    freeEntryInfo: 'Requires paid ticket. Free for Historic Scotland members/Explorer Pass holders.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Royal Mile',
    description: 'Historic street connecting Edinburgh Castle to Holyrood Palace, the main thoroughfare of the Old Town, with origins dating back to medieval times. Lined with shops selling traditional Scottish goods, pubs, and historic attractions like St. Giles\' Cathedral and the Real Mary King\'s Close. Legend says it was once a favored route of royalty. Its closes and wynds hold centuries of stories.',
    coordinates: { lat: 55.9505, lng: -3.1881 },
    category: 'historic'
  },
  {
    id: '3',
    name: 'Arthur\'s Seat',
    description: 'Ancient volcano offering panoramic views of the city and surrounding area, rising 251 meters above sea level. Its name is linked to Arthurian legends. Hiking to the top provides stunning vistas of Edinburgh, the Firth of Forth, and the Pentland Hills. Salisbury Crags, a series of cliffs, are part of the same geological formation. It\'s believed to have been inhabited in prehistoric times.',
    coordinates: { lat: 55.9445, lng: -3.1618 },
    category: 'nature'
  },
  {
    id: '4',
    name: 'National Museum of Scotland',
    description: 'Museum exploring Scotland\'s history, culture, and achievements, with collections ranging from natural history to science and technology, and Scottish antiquities. Opened in its current form in 1998, it combines the former National Museum of Antiquities of Scotland and the Royal Museum of Scotland. Highlights include Dolly the sheep and Scottish inventions. Legend says some artifacts are haunted.',
    coordinates: { lat: 55.9472, lng: -3.1892 },
    openingHours: 'Daily 10:00 - 17:00. Closed Christmas Day.',
    freeEntryInfo: 'Free entry.',
    category: 'museum'
  },
  {
    id: '5',
    name: 'Palace of Holyroodhouse',
    description: 'The Queen\'s official residence in Scotland, with historic royal apartments and the ruins of Holyrood Abbey, founded in 1128. It was the principal residence of Mary, Queen of Scots, and the site of many dramatic events in Scottish history. The palace showcases a blend of architectural styles. Legend says the ghost of David Rizzio, Mary\'s secretary, haunts the palace.',
    coordinates: { lat: 55.9524, lng: -3.1717 },
    openingHours: 'Seasonal hours, often closed Tue/Wed outside summer. Summer (Apr-Oct): 9:30-18:00. Winter (Nov-Mar): 9:30-16:30. Check official site for closures.',
    category: 'historic'
  },
  {
    id: '6',
    name: 'Grassmarket',
    description: 'Historic market place with pubs, restaurants, and views of Edinburgh Castle, dating back to the 14th century. It was once a site for public executions, including that of William Wallace. Today, it\'s a lively area with a vibrant atmosphere, especially during festivals. The pubs here are said to be haunted by the spirits of those executed. Its irregular shape adds to its charm.',
    coordinates: { lat: 55.9474, lng: -3.1957 },
    category: 'historic'
  },
  {
    id: '7',
    name: 'Royal Yacht Britannia',
    description: 'Former royal yacht of the British monarch, now a popular tourist attraction berthed in Leith. Launched in 1953, it served the Royal Family for over 44 years, sailing over a million nautical miles. Visitors can explore its five decks, including the State Apartments and the crew\'s quarters. It offers a glimpse into the lives of the royals and their travels. Legend says the yacht has a resident ghost cat.',
    coordinates: { lat: 55.9829, lng: -3.1762 },
    openingHours: 'Daily (except Dec 25/Jan 1). Seasonal hours, generally opens 9:30/10:00, closes 17:00/18:00. Last admission ~1.5-2h before close. Check official site.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Calton Hill',
    description: 'Hill with monuments and panoramic views of Edinburgh, often referred to as "Edinburgh\'s Acropolis" due to its neoclassical structures. Monuments include the National Monument (unfinished), the Nelson Monument, and the City Observatory. It has been a site for celebrations and gatherings for centuries. The views from the top are particularly stunning at sunset.',
    coordinates: { lat: 55.9554, lng: -3.1822 },
    category: 'landmark'
  },
  {
    id: '9',
    name: 'St Giles\' Cathedral',
    description: 'Historic church with distinctive crown spire on the Royal Mile, the principal place of worship of the Church of Scotland. Its origins date back to the 12th century, though the current building is largely from the 14th century. John Knox, a key figure in the Scottish Reformation, served as its minister. The cathedral features stained glass windows and intricate stonework. Legend says it was once a pagan shrine.',
    coordinates: { lat: 55.9498, lng: -3.1908 },
    openingHours: 'Seasonal hours. Summer (May-Sep): Mon-Fri 10:00-18:00, Sat 9:00-17:00, Sun 13:00-17:00. Winter (Oct-Apr): Mon-Sat 10:00-16:00, Sun 13:00-16:00. Restricted during services.',
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Dean Village',
    description: 'Picturesque former water mill village by the Water of Leith, with its history dating back to the 12th century when it was a grain milling center. Its well-preserved architecture includes charming houses and bridges. The Water of Leith walkway passes through the village. It offers a tranquil escape from the city bustle. Legend says the mills were once powered by mythical water spirits.',
    coordinates: { lat: 55.9520, lng: -3.2158 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Dean_Village%2C_Edinburgh_%2837952869852%29.jpg/1024px-Dean_Village%2C_Edinburgh_%2837952869852%29.jpg']
  }
];
