import { Attraction } from '../../../types/attractions';


export const lisbonAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Belém Tower',
    description: 'A 16th-century fortification on the Tagus River, built during the Age of Discoveries, serving as a ceremonial gateway for explorers and a defense against invaders. Its Manueline architecture features maritime motifs, reflecting Portugal\'s seafaring history. It is said that it once housed a dungeon. Climb to the top for panoramic views, especially beautiful at sunset.',
    coordinates: { lat: 38.691667, lng: -9.216111 },
    openingHours: 'Tue-Sun: 10:00-18:30 (May-Sep) / 10:00-17:30 (Oct-Apr). Last entry 30min before close. Closed Mon & holidays.',
    freeEntryInfo: 'Free 1st Sunday of month until 14:00 (residents only).',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Jerónimos Monastery',
    description: 'A magnificent monastery in Belém, a UNESCO World Heritage Site, showcasing the height of Manueline architecture, Portugal\'s late Gothic style. Commissioned by King Manuel I in the early 16th century to commemorate Vasco da Gama\'s voyage to India. It houses the tombs of Vasco da Gama and Luís de Camões. It is said that it was financed by the riches brought back from the voyages.',
    coordinates: { lat: 38.697778, lng: -9.206111 },
    openingHours: 'Tue-Sun: 10:00-18:30 (May-Sep) / 10:00-17:30 (Oct-Apr). Last entry 30min before close. Closed Mon & holidays.',
    freeEntryInfo: 'Church entry free. Cloisters require paid ticket (free 1st Sun until 14:00 for residents).',
    category: 'historic'
  },
  {
    id: '3',
    name: 'São Jorge Castle',
    description: 'A historic castle perched on Lisbon\'s highest hill, offering stunning panoramic views of the city, the Tagus River, and beyond. Its origins date back to the Moorish period, with fortifications added over centuries. Explore its ramparts, towers, and archaeological remains, and learn about its role in Lisbon\'s history, from Roman times to the Reconquista. It is said that it\'s haunted by a Moorish princess.',
    coordinates: { lat: 38.713889, lng: -9.133611 },
    openingHours: 'Daily. Summer (Mar-Oct): 9:00-21:00. Winter (Nov-Feb): 9:00-18:00/19:00. Last entry 30min before close. Closed holidays.',
    freeEntryInfo: 'Requires paid ticket. Free Sun/Holidays until 14:00 (residents only).',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Praça do Comércio',
    description: 'A grand square located on the Tagus River waterfront, also known as Terreiro do Paço. Its neoclassical architecture dates back to the 18th century, built after the 1755 earthquake destroyed the original royal palace. The Arco da Rua Augusta stands at its northern end, offering more views. It has been a site for royal receptions and major events. It is said that it was once a bustling port filled with ships from around the world.',
    coordinates: { lat: 38.7075, lng: -9.136389 },
    category: 'landmark'
  },
  {
    id: '5',
    name: 'Alfama',
    description: 'The oldest district of Lisbon, a maze of narrow, winding streets, traditional houses, and historic churches, dating back to the Moorish era. Known for its Fado music, traditional restaurants, and charming atmosphere. Explore its hidden corners, ride the iconic Tram 28, and experience the authentic Lisbon vibe. It is said that it was the only part of Lisbon to survive the 1755 earthquake relatively unscathed.',
    coordinates: { lat: 38.712222, lng: -9.13 },
    category: 'historic'
  },
  {
    id: '6',
    name: 'Bairro Alto',
    description: 'A vibrant district located on a hill west of Alfama, known for its nightlife, restaurants, and shops. During the day, it\'s relatively quiet, but at night, it comes alive with bars and Fado houses. Its grid layout contrasts with Alfama\'s maze. Experience its lively atmosphere and enjoy the diverse culinary scene, from traditional Portuguese to international flavors. It is said that it was once Lisbon\'s red-light district.',
    coordinates: { lat: 38.712222, lng: -9.145 },
    category: 'historic'
  },
  {
    id: '7',
    name: 'Chiado',
    description: 'A historic and elegant district, known for its theaters, bookstores (like Bertrand, the oldest in the world), and cafes (like A Brasileira, frequented by Fernando Pessoa). Destroyed in the 1988 fire and rebuilt, it retains its bohemian atmosphere and is a hub for shopping and culture. Explore its charming streets and admire the architecture. It is said that ghosts of famous writers linger in its cafes.',
    coordinates: { lat: 38.710556, lng: -9.142222 },
    category: 'historic'
  },
  {
    id: '8',
    name: 'Tram 28',
    description: 'A historic tram line that winds its way through Lisbon\'s oldest neighborhoods, including Graça, Alfama, Baixa, and Chiado. The vintage yellow trams are a symbol of Lisbon. Enjoy a scenic ride through narrow streets, offering glimpses of daily life and historic architecture. Be prepared for crowds and pickpockets. It is said that riding Tram 28 is like taking a trip back in time.',
    coordinates: { lat: 38.71512091568609, lng: -9.136260790215061 },
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lisbon-Day3-1_%2834184431096%29.jpg/250px-Lisbon-Day3-1_%2834184431096%29.jpg']
  },
  {
    id: '9',
    name: 'Santa Justa Lift',
    description: 'An iconic elevator connecting the lower Baixa district with the upper Carmo Square. Built in the late 19th century by Raoul Mesnier du Ponsard, a student of Gustave Eiffel. Its ornate iron structure is a landmark of Lisbon. Enjoy panoramic views of the city from the top platform. It is said that it was originally powered by steam.',
    coordinates: { lat: 38.712222, lng: -9.139444 },
    openingHours: 'Daily, seasonal hours (Summer ~7:00-23:00, Winter ~7:00-21:00). Viewpoint closes earlier. (Note: Check status, may be temporarily closed).',
    category: 'landmark'
  },
  {
    id: '10',
    name: 'Lisbon Oceanarium',
    description: 'One of the largest aquariums in Europe, located in the Parque das Nações, built for Expo \'98. It showcases a diverse range of marine life from different oceans, with a large central tank representing the global ocean. Explore its underwater world and learn about ocean conservation. The architecture is inspired by an aircraft carrier. It is said that you can see mermaids in the central tank.',
    coordinates: { lat: 38.7635, lng:  -9.0937 },
    openingHours: 'Daily 10:00 - 20:00 (last entry 19:00).',
    category: 'attraction'
  },
  {
    id: '11',
    name: 'Calouste Gulbenkian Museum',
    description: 'Houses a diverse collection of art and artifacts from around the world, amassed by the Armenian oil magnate Calouste Gulbenkian. The collection spans from ancient Egypt to European masters, including Rembrandt and Monet. Explore its galleries and discover masterpieces from various periods and cultures. The surrounding gardens are also worth a visit. It is said that Gulbenkian was so attached to his collection, he never lent any pieces.',
    coordinates: { lat: 38.736667, lng:  -9.154167 },
    openingHours: 'Wed-Mon: 10:00 - 18:00. Closed Tue.',
    freeEntryInfo: 'Free entry Sundays after 14:00.',
    category: 'museum'
  },
  {
    id: '12',
    name: 'National Museum of the Azulejo',
    description: 'Dedicated to the art of Portuguese tile painting (azulejos), showcasing a rich collection from the 15th century to the present day. Housed in the former Madre de Deus Convent. Learn about the history, techniques, and cultural significance of this unique art form, which adorns many buildings in Portugal. It is said that the blue color of azulejos was inspired by Chinese porcelain.',
    coordinates: { lat: 38.724444, lng: -9.113889 },
    openingHours: 'Tue-Sun: 10:00 - 18:00 (last entry 17:30). Closed Mon & holidays.',
    freeEntryInfo: 'Requires paid ticket (free 1st Sun until 14:00 for residents).',
    category: 'museum'
  },
  {
    id: '13',
    name: 'Parque das Nações',
    description: 'A modern urban park built for Expo \'98, located along the Tagus River. It offers a variety of attractions, including the Oceanário de Lisboa, the Vasco da Gama Tower, gardens, and entertainment venues. A great place for families, with walking paths and modern architecture. It is said that it was built on reclaimed land from the river.',
    coordinates: { lat: 38.768, lng:  -9.094 },
    openingHours: 'Park open 24/7. Attractions within have own hours.',
    category: 'park'
  },
  {
    id: '14',
    name: 'Time Out Market Lisboa',
    description: 'A vibrant food market located in the historic Mercado da Ribeira, offering a wide variety of Portuguese cuisine from top chefs and local vendors. Sample local delicacies like pastéis de nata, seafood, and traditional dishes. A great place to experience Lisbon\'s culinary scene in one location. The market also hosts events and workshops. It is said that the market was once a major trading hub for the city.',
    coordinates: { lat: 38.706944, lng:  -9.145556 },
    openingHours: 'Daily 10:00 - 24:00.',
    category: 'local_market'
  },
  {
    id: '15',
    name: '25 de Abril Bridge',
    description: 'A suspension bridge connecting Lisbon to Almada on the south bank of the Tagus River, offering stunning views of the city and the river. Opened in 1966, it was originally named Salazar Bridge but renamed after the Carnation Revolution in 1974. Its design is similar to the Golden Gate Bridge in San Francisco. It is said that it was painted red to match the Golden Gate.',
    coordinates: { lat: 38.69999795585765, lng: -9.179531209196222},
    category: 'landmark'
  }
];
