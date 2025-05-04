import { Attraction } from '../../../types/attractions';

export const newyorkAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Statue of Liberty',
      description: 'A global symbol of freedom, the Statue of Liberty stands on Liberty Island in New York Harbor. Gifted by France in 1886, this 151-foot copper statue welcomes visitors with her torch of enlightenment. Climb to the crown for stunning views of Manhattan or explore the museum in the pedestal to learn about her history as an icon of hope for immigrants arriving in America.',
      coordinates: { lat: 40.689167, lng: -74.044444 },
      openingHours: 'Daily: 9:00-17:00. Last ferry varies.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '2',
      name: 'Central Park',
      description: 'Spanning 843 acres, Central Park is New York City\'s green heart, designed by Frederick Law Olmsted and Calvert Vaux in 1858. It offers lakes, trails, and landmarks like Bethesda Terrace and Strawberry Fields. From ice skating in winter to picnics in summer, the park is a haven for relaxation and recreation, attracting millions to its serene landscapes amidst the urban bustle.',
      coordinates: { lat: 40.782222, lng: -73.965278 },
      openingHours: 'Daily: 6:00-1:00.',
      category: 'park',
      imageUrls: ['']
    },
    {
      id: '3',
      name: 'Empire State Building',
      description: 'This iconic Art Deco skyscraper, completed in 1931, stands 1,454 feet tall in Midtown Manhattan. The Empire State Building\'s 86th and 102nd floor observatories offer breathtaking 360-degree views of New York City. Lit up in vibrant colors for holidays, it remains a symbol of NYC\'s ambition and architectural prowess, drawing visitors to experience its historic charm and panoramic vistas.',
      coordinates: { lat: 40.748333, lng: -73.985556 },
      openingHours: 'Daily: 10:00-22:00. Hours vary seasonally.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '4',
      name: 'Metropolitan Museum of Art',
      description: 'Known as the Met, this world-class museum on Fifth Avenue houses over two million works of art spanning 5,000 years. From ancient Egyptian artifacts to European masterpieces like Van Gogh\'s paintings, its vast collection captivates art lovers. Founded in 1870, the Met also features the serene Temple of Dendur and a rooftop with stunning Central Park views, perfect for cultural exploration.',
      coordinates: { lat: 40.779444, lng: -73.9631 },
      openingHours: 'Sun-Tue, Thu: 10:00-17:00, Fri-Sat: 10:00-21:00. Closed Wed.',
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '5',
      name: 'Times Square',
      description: 'A bustling commercial hub in Midtown Manhattan, Times Square is famous for its bright, flashing billboards and vibrant energy. Known as the "Crossroads of the World," it hosts the annual New Year\'s Eve ball drop, attracting millions. With Broadway theaters, shops, and restaurants, it\'s a sensory overload of lights and excitement, embodying the fast-paced spirit of New York City.',
      coordinates: { lat: 40.7575, lng: -73.985833 },
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '6',
      name: 'Brooklyn Bridge',
      description: 'Completed in 1883, the Brooklyn Bridge is an engineering marvel connecting Manhattan and Brooklyn over the East River. Its Gothic arches and suspension cables make it a beloved NYC icon. Walk or bike across the pedestrian path for stunning views of the skyline and Statue of Liberty. At night, the bridge\'s lights create a magical scene, capturing the city\'s historic and romantic allure.',
      coordinates: { lat: 40.7057, lng: -73.9964 },
      openingHours: 'Open 24/7.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '7',
      name: 'One World Trade Center',
      description: 'Also known as the Freedom Tower, One World Trade Center is the tallest building in the Western Hemisphere at 1,776 feet. Built on the World Trade Center site, it opened in 2014. The One World Observatory on floors 100-102 offers 360-degree views of NYC, with interactive exhibits on the city\'s history. It stands as a symbol of resilience and renewal after the 9/11 attacks.',
      coordinates: { lat: 40.713056, lng: -74.013333 },
      openingHours: 'Daily: 9:00-21:00. Hours vary seasonally.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '8',
      name: 'National September 11 Memorial & Museum',
      description: 'Located at the World Trade Center site, the 9/11 Memorial features two reflecting pools set in the footprints of the Twin Towers, each nearly an acre in size. The names of the 2,977 victims of the 2001 attacks are inscribed around the pools. Surrounded by white oak trees, this serene space honors the lives lost and serves as a place for reflection and remembrance in the heart of NYC.',
      coordinates: { lat: 40.711667, lng: -74.013611 },
      openingHours: 'Daily: 8:00-20:00.',
      freeEntryInfo: 'Free entry.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '9',
      name: 'Museum of Modern Art',
      description: 'The Museum of Modern Art (MoMA) in Midtown Manhattan is a global leader in modern and contemporary art. Founded in 1929, it houses masterpieces like Van Gogh\'s "The Starry Night" and Picasso\'s "Les Demoiselles d\'Avignon." With six floors of galleries, a sculpture garden, and cutting-edge exhibitions, MoMA offers an inspiring journey through 20th and 21st-century creativity.',
      coordinates: { lat: 40.761667, lng: -73.9775 },
      openingHours: 'Daily: 10:30-17:30, Fri: 10:30-19:00.',
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '10',
      name: 'Rockefeller Center',
      description: 'A historic complex in Midtown Manhattan, Rockefeller Center is famous for its Art Deco architecture, the annual Christmas tree lighting, and the Top of the Rock observation deck with panoramic city views. Built in the 1930s, it includes Radio City Music Hall and the iconic ice-skating rink, making it a year-round destination for culture, entertainment, and festive celebrations.',
      coordinates: { lat: 40.758611, lng: -73.979167 },
      openingHours: 'Top of the Rock: Daily 9:00-23:00.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '11',
      name: 'High Line',
      description: 'The High Line is an elevated public park built on a former freight rail line above Manhattan\'s West Side. Stretching 1.45 miles, it features gardens, art installations, and views of the Hudson River and city skyline. Opened in 2009, this innovative urban space blends nature and design, offering a unique walking experience with rotating exhibits and seasonal events.',
      coordinates: { lat: 40.7483, lng: -74.005 },
      openingHours: 'Daily: 7:00-22:00.',
      freeEntryInfo: 'Free entry.',
      category: 'park',
      imageUrls: ['']
    },
    {
      id: '12',
      name: 'Grand Central Terminal',
      description: 'More than a train station, Grand Central Terminal in Midtown Manhattan is a Beaux-Arts masterpiece opened in 1913. Its celestial ceiling mural, grand concourse, and iconic clock make it a beloved landmark. With shops, dining, and the whispering gallery, it\'s a hub of activity and history, connecting commuters and visitors to the city\'s past and present.',
      coordinates: { lat: 40.752778, lng: -73.977222 },
      openingHours: 'Daily: 5:30-2:00.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '13',
      name: 'Broadway (Manhattan)',
      description: 'Broadway is a historic street in Manhattan, renowned as the heart of New York City\'s theater district. Stretching through Times Square, it\'s home to over 40 professional theaters showcasing world-class musicals and plays. From classics like "The Phantom of the Opera" to new hits, Broadway offers unforgettable performances, making it a cultural cornerstone for theater lovers worldwide.',
      coordinates: { lat: 40.770139, lng: -73.982069 },
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '14',
      name: 'Wall Street',
      description: 'Located in Lower Manhattan, Wall Street is the epicenter of global finance, home to the New York Stock Exchange. This narrow street, named for a 17th-century wall, symbolizes economic power with its historic buildings and the iconic Charging Bull statue nearby. Visitors can explore the financial district\'s past, including Federal Hall, where George Washington was inaugurated in 1789.',
      coordinates: { lat: 40.706185, lng: -74.008611 },
      category: 'historic',
      imageUrls: ['']
    }
  ];