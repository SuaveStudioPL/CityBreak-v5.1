import { Attraction } from '../../../types/attractions';

export const sanfranciscoAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Golden Gate Bridge',
      description: 'The Golden Gate Bridge, an Art Deco marvel, spans the Golden Gate Strait, connecting San Francisco to Marin County. Completed in 1937, its 8,981-foot length and iconic orange-red towers make it a global symbol. Walk or bike across for stunning bay views, or visit the Fort Point area below to admire its engineering against the fog, a must-see for all visitors.',
      coordinates: { lat: 37.819722, lng: -122.478611 },
      openingHours: 'Open 24/7. Pedestrian access: 5:00-21:00.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '2',
      name: 'Alcatraz Island',
      description: 'Once a notorious federal prison, Alcatraz Island lies in San Francisco Bay, accessible by ferry. Operational from 1934 to 1963, it housed Al Capone and others in its harsh cells. Now a National Historic Landmark, tours explore the cellhouse, gardens, and Native American occupation history, offering a chilling glimpse into its past amidst the bay\'s scenic beauty.',
      coordinates: { lat: 37.826667, lng: -122.422778 },
      openingHours: 'Daily: 9:00-16:00. Last ferry varies.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '3',
      name: 'Fisherman\'s Wharf, San Francisco',
      description: 'Fisherman\'s Wharf is a lively waterfront district known for its seafood, historic ships, and sea lions at Pier 39. Originally a fishing hub, it now attracts tourists with clam chowder, Ghirardelli chocolate, and views of Alcatraz. The area\'s maritime charm, with vintage boats and bustling markets, makes it a quintessential San Francisco experience for food and culture lovers.',
      coordinates: { lat: 37.808333, lng: -122.415556 },
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '4',
      name: 'Lombard Street (San Francisco)',
      description: 'Known as the "crookedest street in the world," Lombard Street features eight sharp hairpin turns on its steep Russian Hill slope. Landscaped with flowers and lined with Victorian homes, it was designed in 1922 to reduce traffic speed. Driving or walking down offers a thrilling view, making it a quirky, photogenic icon of San Francisco\'s hilly terrain.',
      coordinates: { lat: 37.801944, lng: -122.418889 },
      openingHours: 'Open 24/7.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '5',
      name: 'Golden Gate Park',
      description: 'Spanning 1,017 acres, Golden Gate Park offers a green oasis with museums, gardens, and the California Academy of Sciences. Created in the 1870s, it features the de Young Museum, Stow Lake, and bison paddock. Perfect for picnics, biking, or exploring its Japanese Tea Garden, the park provides a serene escape from San Francisco\'s urban energy for nature enthusiasts.',
      coordinates: { lat: 37.769722, lng: -122.476944 },
      openingHours: 'Daily: 5:00-23:00.',
      category: 'park',
      imageUrls: ['']
    },
    {
      id: '6',
      name: 'Coit Tower',
      description: 'Perched on Telegraph Hill, Coit Tower offers panoramic views of San Francisco and the bay. Built in 1933 with funds from Lillie Hitchcock Coit, its 210-foot height features murals depicting Depression-era life. Climb or take the elevator to the top for stunning vistas, including the Golden Gate Bridge, making it a beloved spot for history and photography buffs.',
      coordinates: { lat: 37.8025, lng: -122.405833 },
      openingHours: 'Daily: 10:00-17:00.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '7',
      name: 'San Francisco cable car system',
      description: 'San Francisco\'s cable cars, a National Historic Landmark, have operated since 1873, navigating the city\'s steep hills. The Powell-Hyde and Powell-Mason lines offer rides with iconic views of Alcatraz and the bay. A blend of history and practicality, these manually operated cars remain a fun, nostalgic way to explore, especially for visitors wanting a taste of old-world charm.',
      coordinates: { lat: 37.784694, lng: -122.407722 },
      openingHours: 'Daily: 6:00-23:00. Hours vary by line.',
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '8',
      name: 'San Francisco Museum of Modern Art',
      description: 'The SFMOMA, located in SoMa, is a leading museum of modern and contemporary art. Reopened in 2016 after expansion, it houses over 33,000 works, including pieces by Frida Kahlo and Andy Warhol. Its sleek design and rooftop garden offer a cultural retreat, attracting art enthusiasts to explore innovative exhibits and the city\'s creative pulse.',
      coordinates: { lat: 37.7858, lng: -122.401 },
      openingHours: 'Fri-Tue: 10:00-17:00, Thu: 10:00-20:00. Closed Wed.',
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '9',
      name: 'Chinatown, San Francisco',
      description: 'The oldest Chinatown in North America, San Francisco\'s Chinatown is a vibrant cultural hub with ornate gates, temples, and shops. Established in the 1840s, it offers authentic dim sum, herbal remedies, and festivals like Chinese New Year. The colorful streets and historic buildings reflect a rich heritage, making it a must-visit for those eager to experience Asian-American culture.',
      coordinates: { lat: 37.794167, lng: -122.406944 },
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '10',
      name: 'Presidio of San Francisco',
      description: 'A former military post turned national park, the Presidio offers 1,500 acres of forests, trails, and coastal views. Established in 1776, it now features the Walt Disney Family Museum and Crissy Field. With its scenic overlooks of the Golden Gate Bridge, it’s a peaceful spot for hiking, picnicking, or exploring San Francisco\'s military and natural history.',
      coordinates: { lat: 37.798056, lng: -122.465833 },
      openingHours: 'Open 24/7.',
      category: 'park',
      imageUrls: ['']
    },
    {
      id: '11',
      name: 'Twin Peaks (San Francisco)',
      description: 'Twin Peaks, two hills rising 922 feet, offer the highest natural point in San Francisco with breathtaking city and bay views. A popular spot since the 19th century, it\’s accessible by car or hiking, with trails winding through native plants. The fog often rolls over, creating a dramatic scene, making it a favorite for photographers and nature lovers.',
      coordinates: { lat: 37.751586, lng: -122.447722 },
      openingHours: 'Open 24/7.',
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '12',
      name: 'San Francisco Ferry Building',
      description: 'The Ferry Building, a Beaux-Arts landmark on the Embarcadero, has been a transit hub since 1898. Now a marketplace with gourmet food stalls and shops, it hosts the famous Saturday farmers\' market. Its clock tower, restored after the 1906 earthquake, overlooks the bay, making it a vibrant spot for locals and tourists to savor San Francisco\'s culinary and historic essence.',
      coordinates: { lat: 37.7955, lng: -122.3937 },
      openingHours: 'Mon-Fri: 10:00-18:00, Sat: 8:00-18:00, Sun: 11:00-17:00.',
      category: 'historic',
      imageUrls: ['']
    }
  ];