import { Attraction } from '../../../types/attractions';

export const bucharestAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Palace of Parliament',
    description: 'World\'s largest civilian building and heaviest building, a testament to Communist-era architecture. Construction began in 1984 under Nicolae Ceaușescu and remains a controversial symbol. Legend says its underground network of tunnels was meant for escape. It boasts 1,100 rooms, though some remain unfinished, and used vast amounts of Romanian marble and crystal.',
    coordinates: { lat: 44.4275, lng: 26.0875 },
    openingHours: 'Daily for tours, seasonal hours (Mar-Oct: 9:00-17:00, Nov-Feb: 10:00-16:00). Booking required (24h+ advance), ID needed.',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Romanian Athenaeum',
    description: 'Beautiful concert hall and landmark of Romanian culture, designed by French architect Albert Galleron and opened in 1888. Financed by public subscription with the slogan "Contribute to the Athenaeum," it hosts the George Enescu Philharmonic Orchestra. Its neoclassical facade and ornate interior make it an architectural gem and a symbol of Romanian cultural aspirations.',
    coordinates: { lat: 44.4412, lng: 26.0971 },
    openingHours: 'Open for visits outside performance times. Check official website/locally for visiting hours. Box office: Tue–Fri 12:00–19:00; Sat–Sun 16:00–19:00.',
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Bucharest Old Town',
    description: 'Historic center with cobblestone streets, restaurants, and nightlife, known as Centrul Vechi. It flourished in the 19th century but fell into disrepair during communism, experiencing a revival in recent decades. It’s said that Vlad the Impaler had a residence here. Notable landmarks include Stavropoleos Monastery and Manuc\'s Inn, reflecting diverse architectural styles from Baroque to Art Nouveau.',
    coordinates: { lat: 44.4323, lng: 26.1012 },
    category: 'historic'
  },
  {
    id: '4',
    name: 'Herastrau Park',
    description: 'Largest park in Bucharest surrounding Lake Herastrau, initially developed in 1936. The Village Museum is located within its grounds. The lake was formed by damming the Colentina River. The park features numerous walking paths, recreational facilities, and islands, including the Island of Roses. It was renamed King Michael I Park in 2017, reflecting its royal history.',
    coordinates: { lat: 44.4677, lng: 26.0780 },
    category: 'park'
  },
  {
    id: '5',
    name: 'Village Museum',
    description: 'Open-air museum showcasing traditional Romanian village life, officially opened in 1936 by King Carol II. It features authentic peasant homes and structures from various regions of Romania, offering a glimpse into the country\'s rural architecture and traditions. Exhibits include wooden churches, windmills, and farmsteads, transported and reconstructed to preserve Romania\'s heritage.',
    coordinates: { lat: 44.4722, lng: 26.0745 },
    openingHours: 'Seasonal hours. Summer (approx May-Sep): Tue-Sun 10:00-18:00/19:00, Mon 9:00-17:00. Winter (approx Oct-Apr): Daily 9:00-17:00. Check official site.',
    category: 'museum'
  },
  {
    id: '6',
    name: 'Stavropoleos Monastery',
    description: 'Beautiful Orthodox church known for its architectural details, built in 1724 by a Greek monk. It survived earthquakes and demolitions, showcasing a blend of Romanian Baroque and Ottoman influences. The monastery houses a small museum with old books and icons. Its serene courtyard offers a peaceful escape from the city bustle, and its Byzantine-style frescoes are particularly admired.',
    coordinates: { lat: 44.4314, lng: 26.0986 },
    openingHours: 'Open daily, likely morning until evening (e.g., 9:00-18:00). Visits restricted during services.',
    category: 'landmark'
  },
  {
    id: '7',
    name: 'Cismigiu Gardens',
    description: 'Historic park in central Bucharest with a lake and beautiful landscaping, opened in 1847. Designed by German landscape architect Carl Meyer, it was built on the site of a former swamp. The park features statues of Romanian writers, a Roman garden, and an artificial grotto. In winter, the lake often freezes, becoming a popular ice-skating rink.',
    coordinates: { lat: 44.4361, lng: 26.0902 },
    openingHours: 'Likely open 24/7 or dawn till dusk.',
    category: 'park'
  },
  {
    id: '8',
    name: 'Arcul de Triumf',
    description: 'Monument celebrating Romania\'s independence, modeled after Paris\' Arc de Triomphe. The first temporary wooden arch was erected in 1878, with the current stone structure completed in 1936. It commemorates the victory in World War I. Visitors can climb to the top for panoramic city views. Sculptures adorning the arch depict scenes from Romanian history.',
    coordinates: { lat: 44.4671, lng: 26.0781 },
    openingHours: 'Interior/Terrace generally closed, except specific weekends (e.g., Sat/Sun afternoons Jun-Oct). Check locally. Exterior visible anytime.',
    category: 'landmark'
  },
  {
    id: '9',
    name: 'National Museum of Art of Romania',
    description: 'Located in the former Royal Palace, housing Romanian and European art. The palace itself has a rich history, serving as the residence of Romanian monarchs until 1947. The museum\'s collections span from medieval to contemporary art, including works by famous Romanian artists like Nicolae Grigorescu. The building suffered damage during the 1989 revolution but was later restored.',
    coordinates: { lat: 44.4395, lng: 26.0957 },
    openingHours: 'Wed-Fri: 10:00 - 18:00, Sat-Sun: 11:00 - 19:00. Closed Mon-Tue.',
    freeEntryInfo: 'Free entry first Wednesday of the month.',
    category: 'museum'
  },
  {
    id: '10',
    name: 'Cărturești Carusel',
    description: 'Beautiful bookstore in a restored 19th century building, opened in 2015. The building once housed the Chrissoveloni Bank. Its elegant interior features a white spiral staircase and thousands of books. It has become a popular spot for book lovers and photographers alike, often cited as one of the most beautiful bookstores in the world, blending historical architecture with modern design.',
    coordinates: { lat: 44.4334, lng: 26.0997 },
    openingHours: 'Daily 10:00 - 22:00 (Fri/Sat until 24:00).',
    category: 'landmark'
  }
];
