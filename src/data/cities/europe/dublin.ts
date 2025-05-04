import { Attraction } from '../../../types/attractions';


export const dublinAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Trinity College Dublin',
    description: 'Historic university founded in 1592 by Queen Elizabeth I, home to the Book of Kells, an illuminated manuscript dating back to the 9th century, and the Long Room Library, with its stunning barrel-vaulted ceiling and collection of over 200,000 ancient texts. Notable alumni include Jonathan Swift and Samuel Beckett. Legend says the college was built on the site of a former monastery.',
    coordinates: { lat: 53.3439, lng: -6.2546 },
    openingHours: 'Old Library/Book of Kells: Daily, hours vary seasonally (opens ~8:30/9:30, closes ~17:00/18:30). Check official site & book timed ticket. Grounds open daylight hours.',
    freeEntryInfo: 'Grounds free. Old Library/Book of Kells requires paid ticket.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Guinness Storehouse',
    description: 'Famous brewery experience located in the heart of St. James\'s Gate Brewery, where Guinness has been brewed since 1759. Visitors can learn about the history and brewing process of the iconic stout, culminating in panoramic views of Dublin from the Gravity Bar on the top floor. Legend has it that Arthur Guinness signed a 9,000-year lease for the brewery. The building itself is a former fermentation plant.',
    coordinates: { lat: 53.3419, lng: -6.2867 },
    openingHours: 'Mon-Thu & Sun: 9:30-17:00 (last entry). Fri-Sat: 9:30-18:00 (last entry). Longer hours in summer. Check official site.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Dublin Castle',
    description: 'Historic castle complex with a history dating back to the 13th century, serving as the seat of British power in Ireland until 1922. It has been rebuilt and modified over the centuries, reflecting various architectural styles. Key features include the State Apartments, Chapel Royal, and the Chester Beatty Library located within its grounds. Legend says a Viking fortress once stood on this site.',
    coordinates: { lat: 53.3429, lng: -6.2674 },
    openingHours: 'Daily 9:45 - 17:45 (last admission 17:15).',
    freeEntryInfo: 'Requires paid ticket (self-guided or guided). Free entry first Wednesday of the month.',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Temple Bar, Dublin',
    description: 'Cultural quarter known for its lively pubs, restaurants, and nightlife, located on the south bank of the River Liffey. Its narrow cobblestone streets are filled with traditional Irish pubs, many offering live music. The area has a history dating back to Viking times but was redeveloped in the 1990s. It\'s named after Sir William Temple, who had a house here in the 17th century. Legend says the streets were once waterways.',
    coordinates: { lat: 53.3449, lng: -6.2641 },
    category: 'historic'
  },
  {
    id: '5',
    name: 'St Patrick\'s Cathedral, Dublin',
    description: 'The largest church in Ireland, with its history dating back to 1191, built near a well where St. Patrick is said to have baptized converts. It has strong literary connections, as Jonathan Swift served as its dean. The cathedral features impressive Gothic architecture and a rich history, surviving fires and renovations. Legend tells of a secret passage connecting it to Dublin Castle.',
    coordinates: { lat: 53.3395, lng: -6.2714 },
    openingHours: 'Hours vary seasonally/daily, restricted during services. Generally Mon-Fri 9:30-17:00, Sat 9:00-18:00, Sun limited hours. Check official site.',
    category: 'landmark'
  },
  {
    id: '6',
    name: 'Phoenix Park',
    description: 'One of Europe\'s largest urban parks, established in 1662 as a deer park. It is home to Dublin Zoo, the Áras an Uachtaráin (the President of Ireland\'s residence), and the Papal Cross, erected for Pope John Paul II\'s visit in 1979. The park also features the Wellington Monument. Legend says the name "Phoenix" comes from the Irish word "fionn uisce," meaning "clear water."',
    coordinates: { lat: 53.3558, lng: -6.3289 },
    openingHours: 'Park open 24/7. Attractions within have own hours.',
    category: 'park'
  },
  {
    id: '7',
    name: 'Kilmainham Gaol',
    description: 'Former prison turned museum, significant in Irish independence history. Opened in 1796, it housed many Irish revolutionaries and was the site of executions of leaders of the 1916 Easter Rising. It was decommissioned in 1924 and later restored as a museum. Its grim history is a powerful reminder of Ireland\'s struggle for independence. Legend says the ghosts of prisoners still roam its halls.',
    coordinates: { lat: 53.3419, lng: -6.3096 },
    openingHours: 'Daily, seasonal hours (Apr-Sep: 9:30-18:00, Oct-Mar: Mon-Sat 9:30-17:30, Sun 10:00-18:00). Guided tours only, booking essential.',
    freeEntryInfo: 'Requires paid ticket. Free entry first Wednesday of the month.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'National Museum of Ireland - Archaeology',
    description: 'Museum showcasing Irish heritage from prehistoric times to the medieval period, with collections including bog bodies, Viking artifacts, and the Ardagh Chalice. It is housed in a building that opened in 1890. The museum offers a deep dive into Ireland\'s ancient past. Legend surrounds some of the artifacts, believed to have mystical powers.',
    coordinates: { lat: 53.3403, lng: -6.2547 },
    openingHours: 'Tue-Sat: 10:00 - 17:00, Sun-Mon: 13:00 - 17:00.',
    freeEntryInfo: 'Free entry.',
    category: 'museum'
  },
  {
    id: '9',
    name: 'Grafton Street',
    description: 'Premier shopping street in Dublin, stretching from St. Stephen\'s Green to College Green. It became pedestrianized in the 1980s and is known for its street performers, buskers, and cafes. Brown Thomas, Dublin\'s most famous department store, is located here. The street has been a commercial hub since the 17th century. Legend says it was once a path leading to a monastery.',
    coordinates: { lat: 53.3428, lng: -6.2597 },
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Ha\'penny Bridge',
    description: 'Iconic pedestrian bridge over the River Liffey, built in 1816. Its official name is the Liffey Bridge, but it\'s known as the Ha\'penny Bridge because of the toll (a ha\'penny) once charged to cross it. It was the first pedestrian bridge across the river. Its cast iron structure is a recognizable symbol of Dublin. Legend says the toll was introduced to recoup the cost of its construction.',
    coordinates: { lat: 53.3463, lng: -6.2631 },
    category: 'landmark'
  }
];
