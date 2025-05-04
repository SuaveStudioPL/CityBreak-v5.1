import { Attraction } from '../../../types/attractions';


export const gdanskAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Długi Targ',
    description: 'Historic market square, once the main thoroughfare of the city, lined with ornate burgher houses dating back to the medieval period. Key landmarks include the Town Hall, Artus Court, and Neptune\'s Fountain, a symbol of Gdansk\'s maritime connections, erected in the 17th century. It is said that Neptune once turned the city\'s water into gold. It has been a center of commerce and social life for centuries.',
    coordinates: { lat: 54.3484, lng: 18.6531 },
    category: 'historic'
  },
  {
    id: '2',
    name: 'St. Mary\'s Church, Gdansk',
    description: 'Largest brick church in the world, a massive Gothic structure begun in the 14th century and completed over 150 years. It survived WWII with significant damage but was rebuilt. Climb its tower for panoramic views of Gdansk and the Baltic Sea. Inside, marvel at the astronomical clock and medieval art. It is said that it was built on the site of an older wooden church.',
    coordinates: { lat: 54.3505, lng: 18.6528 },
    openingHours: 'Church: Daily ~9:00-17:00/18:00 (restricted during services). Tower: Similar hours, check locally.',
    freeEntryInfo: 'Church entry free (donations welcome). Tower climb requires paid ticket.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'European Solidarity Centre',
    description: 'Museum and library dedicated to the Solidarity movement, which played a crucial role in the fall of communism in Poland and Eastern Europe. Opened in 2014 on the site of the former Lenin Shipyard, where Solidarity was founded in 1980. Exhibits document the movement\'s history, from its beginnings to its legacy. It stands as a symbol of freedom and democracy.',
    coordinates: { lat: 54.3614, lng: 18.6492 },
    openingHours: 'Seasonal hours. Summer (May-Sep): Mon-Sun 10:00-19:00/20:00. Winter (Oct-Apr): Mon & Wed-Sun 10:00-17:00/18:00, Closed Tue.',
    freeEntryInfo: 'Building entry free. Permanent exhibition requires paid ticket.',
    category: 'museum'
  },
  {
    id: '4',
    name: 'Artus Court',
    description: 'Historic building, once a meeting place for merchants and a center of social life in Gdansk, named after the legendary King Arthur. Its opulent interior features grand halls with impressive decorations, including a model of a medieval ship and paintings by famous artists. Rebuilt after WWII, it now houses a museum. It is said that meetings held here influenced trade across the Baltic Sea.',
    coordinates: { lat: 54.3484, lng: 18.6533 },
    openingHours: 'Seasonal hours. Generally Tue 10:00-13:00, Wed-Sat 10:00-16:00, Sun 11:00-16:00. Closed Mon (except summer). Check official site.',
    freeEntryInfo: 'Free entry on Tuesdays.',
    category: 'historic'
  },
  {
    id: '5',
    name: 'Westerplatte',
    description: 'Peninsula where the first shots of World War II were fired on September 1, 1939, when German forces attacked a Polish military transit depot. The site features monuments commemorating the Polish defenders and ruins of the former barracks. It stands as a symbol of Polish resistance. It is said that the heroic defense lasted for seven days against overwhelming odds.',
    coordinates: { lat: 54.4075, lng: 18.6717 },
    category: 'historic'
  },
  {
    id: '6',
    name: 'Gdansk Crane',
    description: 'Medieval port crane, one of the most iconic symbols of Gdansk, dating back to the 15th century. (NOTE: Currently CLOSED for renovations - check National Maritime Museum website for updates). It was used to load and unload ships and also served a defensive function. Rebuilt after WWII, it houses a branch of the National Maritime Museum.',
    coordinates: { lat: 54.3508, lng: 18.6572 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Pl_gdansk_zuraw_dlugiepobrzeze2006.jpg/960px-Pl_gdansk_zuraw_dlugiepobrzeze2006.jpg']
  },
  {
    id: '7',
    name: 'Museum of the Second World War',
    description: 'Modern museum presenting the history of WWII with a focus on Poland\'s experience, opened in 2017. Its exhibits cover the global conflict but also highlight the Polish perspective, including the occupation, resistance, and the aftermath. The museum\'s architecture is striking and controversial. It aims to provide a comprehensive understanding of the war and its impact.',
    coordinates: { lat: 54.3572, lng: 18.6599 },
    openingHours: 'Tue-Sun: 10:00 - 18:00. Closed Mon. Check for possible longer summer hours.',
    freeEntryInfo: 'Free entry on Tuesdays.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Oliwa Cathedral',
    description: 'Gothic-Baroque cathedral located in the Oliwa district of Gdansk, famous for its massive organ with over 7,800 pipes, which hosts regular concerts. The cathedral\'s history dates back to the 13th century. It also houses numerous works of art and impressive Baroque altars. It is said that the sound of the organ can mimic various instruments and natural sounds.',
    coordinates: { lat: 54.4111, lng: 18.5614 },
    openingHours: 'Daily, seasonal hours (e.g., Mon-Fri 9-17, Sat 9-15:30, Sun 14-17:30). Restricted during services. Frequent organ presentations.',
    category: 'landmark'
  },
  {
    id: '9',
    name: 'Gdansk Shakespeare Theatre',
    description: 'Modern theater built on the site of a historic playhouse that existed in the 17th century, where English traveling players performed Shakespeare\'s plays. The new theater, opened in 2014, has a retractable roof. It continues the tradition of staging Shakespearean works and other performances. The original theater was destroyed in the 17th century.',
    coordinates: { lat: 54.3489, lng: 18.6478 },
    openingHours: 'Open for performances (evenings) and guided tours (variable times, check website).',
    category: 'cultural'
  },
  {
    id: '10',
    name: 'Mariacka Street',
    description: 'Picturesque street connecting St. Mary\'s Church with the Motława River, known for its charming amber shops lining the cobblestone pavement. The street features beautifully restored Gothic architecture, with high townhouses adorned with gargoyles. It was once home to wealthy merchants and goldsmiths. Walking along Mariacka feels like stepping back in time.',
    coordinates: { lat: 54.3497, lng: 18.6561 },
    category: 'historic',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Gda%C5%84sk_view_14.jpg/800px-Gda%C5%84sk_view_14.jpg']
  }
];
