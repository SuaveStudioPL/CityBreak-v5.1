import { Attraction } from '../../../types/attractions';

export const athensAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Acropolis of Athens',
    description: 'Ancient citadel containing the Parthenon and other major archaeological remains of ancient Athens. The Acropolis was the religious and cultural center of the city. It is dedicated to Athena, the city’s patron goddess. It was declared a UNESCO World Heritage site in 1987.',
    coordinates: { lat: 37.9715, lng: 23.7267 },
    category: 'historic',
    openingHours: 'Daily from 8:00 AM, closing times vary seasonally.',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.'
  },
  {
    id: '2',
    name: 'Ancient Agora of Athens',
    description: 'The heart of ancient Athens, featuring the Temple of Hephaestus and the Stoa of Attalos. This was the center of political, commercial, and social activity. It is also where Socrates, Plato, and other philosophers would gather. The Agora is often referred to as the birthplace of democracy.',
    coordinates: { lat: 37.9747, lng: 23.7229 },
    category: 'historic',
    openingHours: 'Daily from 8:00 AM, closing times vary seasonally.',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.'
  },
  {
    id: '3',
    name: 'Temple of Olympian Zeus, Athens',
    description: 'Colossal temple dedicated to Zeus, once the largest temple in Greece. Construction of the temple began in the 6th century BC but was completed over 600 years later. Only 15 of the original 104 Corinthian columns remain. The temple’s sheer size and grandeur make it one of Athens’ most awe-inspiring monuments.',
    coordinates: { lat: 37.9693, lng: 23.7331 },
    category: 'historic',
    openingHours: 'Daily from 8:00 AM, closing times vary seasonally (e.g., 3:00 PM in winter, later in summer).',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.'
  },
  {
    id: '4',
    name: 'Plaka',
    description: 'Historic neighborhood with neoclassical architecture, restaurants, and shops. Known as the “neighborhood of the gods,” Plaka is one of Athens’ oldest districts, with winding alleys and stunning views of the Acropolis. It’s a hub for both locals and tourists, offering a mix of ancient ruins and modern life.',
    coordinates: { lat: 37.9707, lng: 23.7271 },
    category: 'historic'
  },
  {
    id: '5',
    name: 'National Archaeological Museum (Athens)',
    description: 'The largest archaeological museum in Greece, housing ancient Greek artifacts. Must-see exhibits include the Mask of Agamemnon, the Antikythera mechanism (the world’s first analog computer), the bronze statue of Zeus or Poseidon, and the Jockey of Artemision. The museum offers a deep dive into Greek culture, from the prehistoric to the classical periods.',
    coordinates: { lat: 37.9892, lng: 23.7321 },
    category: 'museum',
    openingHours: 'Tue: 13:00–20:00, Wed–Mon: 09:00–16:00 (seasonal variations may apply).',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Arch%C3%A4ologisches_Nationalmuseum_Athen.jpg/330px-Arch%C3%A4ologisches_Nationalmuseum_Athen.jpg']
  },
  {
    id: '6',
    name: 'Monastiraki',
    description: 'Vibrant neighborhood known for its flea market and ancient ruins. Monastiraki Square is where modern-day Athens blends with its ancient past, featuring the ruins of Hadrian’s Library and the Tower of the Winds. It’s also the perfect place to shop for unique antiques and souvenirs.',
    coordinates: { lat: 37.9761, lng: 23.7258 },
    category: 'historic'
  },
  {
    id: '7',
    name: 'Mount Lycabettus',
    description: 'Highest point in Athens offering panoramic views of the city. Accessible by cable car or a scenic hike, the summit offers a stunning view of the Acropolis, the Aegean Sea, and the surrounding mountains. It is a popular spot to watch the sunset over Athens.',
    coordinates: { lat: 37.9839, lng: 23.7445 },
    category: 'landmark',
    openingHours: 'Hill accessible 24/7. Cable car: ~9:00 AM - 1:30/2:30 AM (runs every 30 min, winter hours may be shorter).'
  },
  {
    id: '8',
    name: 'Panathenaic Stadium',
    description: 'Ancient stadium renovated for the first modern Olympics in 1896. It is the only stadium in the world built entirely of marble. The Panathenaic Games were held here in ancient times, and it’s also the finish line for the Athens Marathon, held annually since 1982.',
    coordinates: { lat: 37.9683, lng: 23.7419 },
    category: 'landmark',
    openingHours: 'Daily 8:00 AM – 7:00 PM (Mar-Oct), 8:00 AM – 5:00 PM (Nov-Feb).',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.' // Assuming state-run
  },
  {
    id: '9',
    name: 'Acropolis Museum',
    description: 'Modern museum housing artifacts from the Acropolis archaeological site, including the famous Parthenon sculptures, the Caryatids from the Erechtheion, and Archaic statues. The museum is designed to offer an interactive experience, with transparent floors showcasing ancient ruins below.',
    coordinates: { lat: 37.9684, lng: 23.7283 },
    category: 'museum',
    openingHours: 'Summer (Apr-Oct): Mon 9:00-17:00, Tue-Sun 9:00-20:00. Winter hours vary.',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.'
  },
  {
    id: '10',
    name: 'Theatre of Dionysus',
    description: 'Ancient theatre on the south slope of the Acropolis. It is considered the birthplace of drama, where works by playwrights like Sophocles, Euripides, and Aeschylus were first performed. The theatre’s design and acoustics were revolutionary and set the standard for theatres worldwide.',
    coordinates: { lat: 37.9704, lng: 23.7279 },
    category: 'historic',
    openingHours: 'Daily from 8:00 AM, closing times vary seasonally.',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.'
  },
  {
    id: '11',
    name: 'Hadrian\'s Library',
    description: 'Ruins of the ancient Roman library built by Emperor Hadrian. It served as a center for the intellectual life of the city and housed hundreds of scrolls and manuscripts. The library is an excellent example of Roman architecture and is located near the heart of the ancient city.',
    coordinates: { lat: 37.9754, lng: 23.7253 },
    category: 'historic',
    openingHours: 'Daily 8:00 AM, closing times vary seasonally (e.g., 3:00 PM in winter, 8:00 PM in summer).',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.'
  },
  {
    id: '12',
    name: 'Syntagma Square',
    description: 'Central square of Athens featuring the Parliament building. It’s the site of Greece’s political heart, where the Changing of the Guard takes place daily in front of the tomb of the Unknown Soldier. Syntagma Square is also surrounded by elegant neoclassical buildings and major landmarks.',
    coordinates: { lat: 37.9755, lng: 23.7348 },
    category: 'landmark'
  },
  {
    id: '13',
    name: 'Kerameikos',
    description: 'Ancient cemetery and former potters\' quarter of Athens. Known for its well-preserved tombs, Kerameikos offers insight into ancient Greek burial customs. It is also home to a city gate, and the area served as a place for public events and ceremonies.',
    coordinates: { lat: 37.9785, lng: 23.7171 },
    category: 'historic',
    openingHours: 'Daily 8:00 AM, closing times vary seasonally (e.g., 3:00/3:30 PM in winter, later in summer).',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.'
  },
  {
    id: '14',
    name: 'Benaki Museum',
    description: 'Museum of Greek culture from prehistoric to modern times. It showcases a wide range of artifacts, from ancient sculptures and Byzantine icons to modern art. The museum’s collection spans centuries, offering a comprehensive view of Greek history and culture.',
    coordinates: { lat: 37.9762, lng: 23.7397 },
    category: 'museum',
    openingHours: 'Mon, Wed, Fri, Sat: 10:00-18:00; Thu: 10:00-00:00; Sun: 10:00-16:00. Closed Tue.',
    freeEntryInfo: 'Free entry on Thursdays 18:00-00:00 and May 18th.'
  },
  {
    id: '15',
    name: 'Temple of Athena Nike',
    description: 'Small temple dedicated to the goddess Athena Nike on the Acropolis. This temple, built in the 5th century BC, symbolizes victory and was used for ceremonial purposes. Its elegant Ionic design and historical significance make it a highlight of the Acropolis complex.',
    coordinates: { lat: 37.9712, lng: 23.7265 },
    category: 'historic',
    openingHours: 'Daily from 8:00 AM, closing times vary seasonally.',
    freeEntryInfo: 'Free on March 6, April 18, May 18, last weekend of September, October 28, and the first Sunday of each month from November 1st to March 31st.'
  }
];
