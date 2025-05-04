import { Attraction } from '../../../types/attractions';

export const cagliariAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Bastione San Remy',
    description: 'This monumental limestone bastion was built between 1896 and 1902, connecting the lower Villanova and Marina districts with the upper Castello quarter. The impressive structure features a triumphal arch entrance leading to the covered walkway Passeggiata Coperta, once used for exhibitions and social events. Above lies the panoramic Umberto I terrace, offering spectacular views of the city, harbor, and Mediterranean Sea. Despite its medieval appearance, the bastion is actually a late 19th-century creation designed by Civic Engineer Giuseppe Costa and Architect Fulgenzio Setti.',
    coordinates: { lat: 39.215912, lng: 9.116557},
    openingHours: 'Open 24 hours.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bastione_San_Remy_seen_from_piazza_Costituzione.jpg/800px-Bastione_San_Remy_seen_from_piazza_Costituzione.jpg']
  },
  {
    id: '2',
    name: 'Cagliari Cathedral',
    description: 'Dedicated to Saint Mary, this limestone cathedral was constructed in the 13th century in Pisan-Romanesque style, with later Gothic, Renaissance, and Baroque additions. The façade was rebuilt in the 1930s in neo-Romanesque style. Inside, visitors can admire the ornate Baroque marble decorations, the 14th-century pulpit salvaged from the demolished Pisa Cathedral pulpit, and underground crypts housing the Sanctuary of the Martyrs. The cathedral\'s bell tower, with its distinctive Pisan-style belfry, dominates the skyline of the historic Castello district.',
    coordinates: { lat: 39.218761, lng: 9.117011 },
    openingHours: 'Monday-Saturday: 8:00-13:00, 16:00-20:00. Sunday: 16:00-20:00.',
    category: 'historic'
  },
  {
    id: '3',
    name: 'Shrine of Our Lady of Bonaria',
    description: 'This important religious complex consists of a sanctuary and basilica dedicated to Our Lady of Bonaria, patron saint of Sardinia. According to legend, in 1370 a ship caught in a storm jettisoned its cargo, including a wooden crate that miraculously floated against the wind to shore. Inside, monks found an intact statue of the Virgin Mary holding a candle that had remained lit throughout its journey. The Gothic sanctuary houses this statue, while the adjacent neoclassical basilica, built between 1704 and 1926, was visited by Pope Francis in 2013.',
    coordinates: { lat: 39.208218, lng: 9.125174 },
    openingHours: 'Sanctuary: Daily 6:30-12:00, 16:30-19:30. Basilica: Daily 7:00-12:00, 16:00-19:00.',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Poetto',
    description: 'Stretching for 8 kilometers, this urban beach is one of the longest in Italy and serves as Cagliari\'s beloved seaside playground. Once famous for its fine white sand, until a controversial 1990s replenishment project altered its composition. The beach features crystal-clear waters, a vibrant promenade lined with bars and restaurants, and views of the Sella del Diavolo promontory. The shallow waters and facilities make it family-friendly, while beach clubs and water sports cater to the energetic. Flamingos from the nearby Molentargius wetlands can occasionally be spotted flying over the shoreline.',
    coordinates: { lat: 39.199163, lng: 9.158800 },
    openingHours: 'Open 24 hours. Beach facilities generally operate May-October.',
    category: 'nature'
  },
  {
    id: '5',
    name: 'Parco naturale regionale Molentargius - Saline',
    description: 'This 1,600-hectare nature reserve encompasses the former salt works that operated from Roman times until 1985. Now a wetland of international importance, it\'s a crucial habitat for pink flamingos, which have made it their largest European breeding ground. Over 230 bird species have been recorded here, including herons, cormorants, and rare migrants. The park features both freshwater and saltwater basins separated by a narrow strip of land. The abandoned industrial buildings of the salt works stand as monuments to Cagliari\'s historical relationship with salt production, which shaped its economy for centuries.',
    coordinates: { lat: 39.205467, lng: 9.146713 },
    openingHours: 'Daily: 9:00-19:00 (April-October), 9:00-17:00 (November-March).',
    category: 'nature'
  },
  {
    id: '6',
    name: 'Roman Amphitheatre of Cagliari',
    description: 'Carved into the limestone hillside in the 2nd century AD, this amphitheater could hold up to 10,000 spectators for gladiatorial contests and other spectacles. Partially excavated from the living rock, its construction demonstrates the Roman mastery of working with natural terrain. After the fall of the Western Roman Empire, the amphitheater was abandoned and used as a quarry for building materials. Today, only about a third of the original structure remains visible. In summer, it serves as an atmospheric venue for concerts and theatrical performances, continuing its entertainment legacy after nearly two millennia.',
    coordinates: { lat: 39.223914, lng: 9.113216 },
    openingHours: 'Tuesday-Sunday: 9:00-18:00. Closed Mondays. Hours may vary seasonally.',
    category: 'historic'
  },
  {
    id: '7',
    name: 'National Archaeological Museum (Cagliari)',
    description: 'Housed in the former Royal Arsenal within the Cittadella dei Musei complex, this museum contains the most comprehensive collection of Sardinian archaeological artifacts. Exhibits span from prehistoric times through the nuragic, Phoenician-Punic, Roman, and Byzantine periods. Highlights include bronze figurines from the nuragic civilization depicting warriors, tribal chiefs, and animals, providing insight into Sardinia\'s mysterious ancient culture. The Nora Stele, a sandstone slab with Phoenician inscriptions from the 9th century BC, represents the earliest evidence of alphabetic writing found on Sardinia.',
    coordinates: { lat: 39.221944, lng: 9.116944 },
    openingHours: 'Tuesday-Sunday: 9:00-20:00. Closed Mondays.',
    category: 'museum'
  },
  {
    id: '8',
    name: 'Torre dell\'Elefante',
    description: 'Built by the Pisans in 1307, this 30-meter-high white limestone tower was one of two defensive structures guarding the Castello district (the other being Torre di San Pancrazio). Named after a small elephant sculpture on its façade, possibly representing the Pisan coat of arms or serving as a good luck charm. The tower initially served as both a fortification and a prison, with the main entrance strategically positioned 8 meters above ground level for defensive purposes. Today, visitors can climb to the top for panoramic views of the city and harbor, passing through three large chambers connected by wooden staircases.',
    coordinates: { lat: 39.219722, lng: 9.114722 },
    openingHours: 'Tuesday-Sunday: 10:00-18:00. Closed Mondays.',
    category: 'historic'
  },
  {
    id: '9',
    name: 'Cittadella dei Musei',
    description: 'This museum complex occupies the former Royal Arsenal built by the Savoys in the late 18th century. Besides the Archaeological Museum, it houses the National Picture Gallery, featuring paintings from the 15th to 18th centuries; the Siamese Art Museum, containing one of Europe\'s most important collections of artifacts from Thailand; the Ethnographic Museum; and the Anatomical Waxes Collection. The complex was redesigned in the 1970s by Italian architect Piero Gazzola, who preserved the historical structures while creating a modern museum environment. From its elevated position, it offers spectacular views over the city and harbor.',
    coordinates: { lat: 39.222195, lng: 9.116722},
    openingHours: 'Tuesday-Sunday: 9:00-20:00. Closed Mondays. Individual museums may have different hours.',
    category: 'museum',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cittadella_dei_musei_cagliari_05.jpg/960px-Cittadella_dei_musei_cagliari_05.jpg']
  },
  {
    id: '10',
    name: 'Sella del Diavolo',
    description: 'This dramatic limestone promontory shaped like a saddle (\'sella\') earned its name from a legend claiming that demons, led by Lucifer, were so enchanted by the Gulf of Cagliari that they attempted to seize it. God intervened, causing Lucifer to fall and lose his saddle, which turned to stone upon impact. The headland offers exceptional hiking trails and panoramic viewpoints overlooking Poetto Beach and the entire gulf. Archaeological findings indicate the area was strategically important since Punic times, with remains of a temple dedicated to the goddess Astarte discovered at its summit.',
    coordinates: { lat: 39.188160, lng: 9.165020 },
    openingHours: 'Open 24 hours. Best visited during daylight hours.',
    category: 'nature',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cagliari_-_Sella_del_Diavolo_-_Capo_Sant%27Elia.jpg/960px-Cagliari_-_Sella_del_Diavolo_-_Capo_Sant%27Elia.jpg?20100320003739']
  },
  {
    id: '11',
    name: 'Palazzo Regio',
    description: 'This historic palace served as the residence of the representatives of various rulers of Sardinia from the 14th to the 19th centuries, including Aragonese viceroys, Spanish governors, and Savoyard officials. Originally constructed during Aragonese rule, it was extensively rebuilt in the 18th century in Piedmontese Baroque style. The interior features elegant halls with period furnishings and artwork. The palace\'s grand double staircase and ceremonial rooms reflect its historical importance as the center of power in Sardinia. Today, it hosts the offices of the Metropolitan City of Cagliari and serves as a venue for cultural exhibitions.',
    coordinates: { lat: 39.219643, lng: 9.116879 },
    openingHours: 'Monday-Friday: 9:00-14:00, Tuesday and Thursday also 15:00-17:00. Closed weekends and holidays.',
    category: 'historic'
  },
  {
    id: '12',
    name: 'Basilica di San Saturnino',
    description: 'Dating from the 5th century, this is one of the oldest Christian churches in Sardinia and a rare example of early Christian Byzantine architecture on the island. Dedicated to Saint Saturninus, a local martyr beheaded during Diocletian\'s persecutions in 304 AD. The basilica was built over his burial site, which became a pilgrimage destination. Its distinctive central dome rests on square masonry, creating one of the oldest surviving examples of a domed cruciform church in the Mediterranean. The structure incorporates Roman architectural materials, including columns and capitals recycled from earlier buildings.',
    coordinates: { lat: 39.213889, lng: 9.123333 },
    openingHours: 'Tuesday-Saturday: 9:00-13:00. Closed Sundays and Mondays.',
    category: 'historic'
  },
  {
    id: '13',
    name: 'Marina, Cagliari',
    description: 'This historic waterfront quarter was traditionally home to Cagliari\'s fishermen and merchants. Characterized by its colorful buildings, narrow streets, and lively atmosphere, it\'s now a center for dining, shopping, and nightlife. Initially built outside the medieval walls, it represents the city\'s connection to the sea and maritime trade. Via Roma, the main boulevard lined with porticoes, separates the district from the harbor. The area suffered heavy damage during World War II bombing raids but was carefully reconstructed. Today, it combines historical charm with contemporary urban vitality and is a favorite gathering place for both locals and visitors.',
    coordinates: { lat: 39.213725, lng: 9.112805 },
    openingHours: 'Public areas accessible 24 hours. Shops and restaurants have individual hours.',
    category: 'landmark',
    imageUrls: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Via_Roma_%28Cagliari%29_panoramic_view.jpg/1024px-Via_Roma_%28Cagliari%29_panoramic_view.jpg']
  }
];