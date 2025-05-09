import { Attraction } from '../../../types/attractions';

export const medellinAttractions: Attraction[] = [
    {
      id: '1',
      name: 'Botero Plaza',
      description: 'A large outdoor park in Medellín\'s Old Quarter, showcasing 23 monumental bronze sculptures by Colombian artist Fernando Botero. Donated by the artist himself, these iconic, voluminous figures are a major draw for both locals and tourists, offering a unique and accessible art experience in the heart of the city.',
      coordinates: { lat: 6.250556, lng: -75.568056 },
      category: 'square',
      imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/b/b7/Pano_Plazo_Botero.jpg']
    },
    {
      id: '2',
      name: 'Museum of Antioquia',
      description: 'Located next to Botero Plaza, this is Medellín\'s most important museum and the first founded in the Antioquia department. It houses a vast collection of artworks, including a significant number of pieces by Fernando Botero and Pedro Nel Gómez, alongside pre-Columbian, colonial, and modern art exhibits.',
      coordinates: { lat: 6.2525, lng: -75.569167 },
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '3',
      name: 'Comuna 13, Medellín',
      description: 'Once one of Medellín\'s most notorious neighborhoods, Comuna 13 has undergone a remarkable transformation. Now a vibrant area known for its innovative outdoor escalators, colorful street art, and strong community spirit, it symbolizes the city\'s resilience and progress, attracting visitors with its unique story and art.',
      coordinates: { lat: 6.25, lng: -75.616667 },
      category: 'district',
      imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Grafitti_-_Plaza_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg/2560px-Grafitti_-_Plaza_-_Comuna_13_-_Medell%C3%ADn_-_Colombia_2024.jpg']
    },
    {
      id: '4',
      name: 'Botanical Garden of Medellín',
      description: 'A serene oasis in the city, this botanical garden spans 13.2 hectares and showcases a diverse collection of flora, including an impressive orchid display in the "Orchideorama" structure. It serves as a center for environmental education and conservation, offering a peaceful retreat with various themed gardens and a lake.',
      coordinates: { lat: 6.270833, lng: -75.563611 },
      category: 'park',
      imageUrls: ['']
    },
    {
      id: '5',
      name: 'Arví Park',
      description: 'A vast ecological nature preserve and pre-Hispanic archaeological site located on the eastern slopes above Medellín. Accessible via a scenic Metrocable ride, the park offers extensive trails for hiking and biking, rich biodiversity, and a glimpse into the region\'s ancient past. It\'s a popular escape for nature lovers.',
      coordinates: { lat: 6.2656, lng: -75.4969 }, // Coordinates for Arví Station (Metrocable access)
      category: 'park',
      imageUrls: ['']
    },
    {
      id: '6',
      name: 'Parque Explora',
      description: 'An interactive science museum in Medellín, designed to promote science and technology education. It features South America\'s largest freshwater aquarium, a planetarium, a vivarium, and over 300 engaging exhibits. Its striking red cube architecture makes it a prominent landmark in the city\'s innovation district.',
      coordinates: { lat: 6.2706, lng: -75.5656 },
      category: 'museum',
      imageUrls: ['']
    },
    {
      id: '7',
      name: 'Nutibara Hill',
      description: 'One of Medellín\'s "guardian hills," offering panoramic city views. It\'s famously home to Pueblito Paisa, a charming replica of a traditional Antioquian village with a church, school, and artisan shops. The hill also features a sculpture park and the Carlos Vieco open-air theater, making it a cultural and scenic spot.',
      coordinates: { lat: 6.2367, lng: -75.5803 },
      category: 'landmark',
      imageUrls: ['']
    },
    {
      id: '8',
      name: 'Metrocable (Medellín)',
      description: 'An innovative gondola lift system integrated into Medellín\'s public transport network. Beyond just transit, the Metrocable offers breathtaking aerial views of the city and its surrounding hillsides, connecting diverse neighborhoods and providing access to areas like Parque Arví. It\'s a symbol of urban transformation.',
      coordinates: { lat: 6.300278, lng: -75.558472 }, // Coordinates for Acevedo Station (major interchange)
      category: 'transportation',
      imageUrls: ['']
    },
    {
      id: '9',
      name: 'Metropolitan Cathedral of Medellín',
      description: 'A grand Roman Catholic cathedral in Villanueva, central Medellín, next to Bolívar Park. Constructed primarily of baked brick (over 1.12 million), it is a significant example of Romanesque Revival style, designed by French architect Charles Émile Carré. It is the principal church of the Archdiocese of Medellín.',
      coordinates: { lat: 6.253889, lng: -75.563889 },
      category: 'historic',
      imageUrls: ['']
    },
    {
      id: '10',
      name: 'Rafael Uribe Uribe Palace of Culture',
      description: 'A distinctive Gothic Revival building located near Botero Plaza. Designed by Belgian architect Agustín Goovaerts, its checkered black and white facade and intricate details make it an architectural icon. It now serves as a cultural center, housing archives, a library, an art gallery, and hosting various cultural events.',
      coordinates: { lat: 6.2518, lng: -75.5677 },
      category: 'historic',
      imageUrls: ['']
    }
  ];