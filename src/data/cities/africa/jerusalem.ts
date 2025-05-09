import { Attraction } from '../../../types/attractions';

export const jerusalemAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Western Wall',
    description: 'The holiest site in Judaism, this limestone wall is a remnant of the Second Temple complex built by Herod the Great. Known as the Kotel in Hebrew, it serves as an open-air synagogue where Jews from around the world come to pray. The wall is divided into men\'s and women\'s prayer sections, with visitors of all faiths welcome to approach it and place written prayers in its crevices. Its spiritual significance and ancient stones make it one of Jerusalem\'s most powerful and visited landmarks.',
    coordinates: { lat: 31.7767, lng: 35.2345 },
    openingHours: 'Open 24/7, all year round.',
    category: 'religious',
    imageUrls: ['']
  },
  {
    id: '2',
    name: 'Church of the Holy Sepulchre',
    description: 'Revered as the site of Jesus\'s crucifixion, burial, and resurrection, this church is Christianity\'s holiest site. The complex structure houses multiple chapels controlled by different Christian denominations under the Status Quo agreement. Key areas include the Stone of Anointing, Golgotha (Calvary), and the Aedicule containing the Holy Tomb. The church\'s history spans nearly 1,700 years, with the current Romanesque structure dating primarily to the Crusader period. Its atmospheric interior is filled with pilgrims, incense, and centuries of devotion.',
    coordinates: { lat: 31.778333, lng: 35.229722 },
    openingHours: 'Apr-Sep: 5:00-21:00, Oct-Mar: 4:00-19:00.',
    category: 'religious',
    imageUrls: ['']
  },
  {
    id: '3',
    name: 'Dome of the Rock',
    description: 'This iconic golden-domed shrine on the Temple Mount is one of Jerusalem\'s most recognizable landmarks. Built between 685-691 CE, it enshrines the Foundation Stone, sacred to both Judaism and Islam. Muslims believe it marks the spot where Prophet Muhammad ascended to heaven during his Night Journey. The octagonal structure features stunning Byzantine and Persian-influenced architecture with elaborate mosaics and inscriptions. Its brilliant gold-plated dome dominates Jerusalem\'s skyline, symbolizing the city\'s religious significance to multiple faiths.',
    coordinates: { lat: 31.7781, lng: 35.2354 },
    openingHours: 'Non-Muslims can visit Sun-Thu during specific hours through the Mughrabi Gate.',
    category: 'religious',
    imageUrls: ['']
  },
  {
    id: '4',
    name: 'Temple Mount',
    description: 'Known to Muslims as Haram al-Sharif (Noble Sanctuary), this elevated plateau in the Old City holds profound religious significance for Judaism, Islam, and Christianity. For Jews, it\'s the site of the First and Second Temples. For Muslims, it\'s the third holiest site in Islam, home to Al-Aqsa Mosque and the Dome of the Rock. The massive platform was expanded by Herod the Great and features archaeological remains spanning thousands of years. Its contested status makes it one of the world\'s most sensitive religious sites.',
    coordinates: { lat: 31.7781, lng: 35.2353 },
    openingHours: 'Non-Muslims: Sun-Thu, limited hours. Closed to non-Muslims on Fridays and Islamic holidays.',
    category: 'religious',
    imageUrls: ['']
  },
  {
    id: '5',
    name: 'Via Dolorosa',
    description: 'The "Way of Suffering" is a processional route through the Old City that commemorates Jesus\'s path to crucifixion. The 600-meter path includes 14 Stations of the Cross, each marking events from Jesus\'s condemnation to his burial. Notable stations include the Church of the Flagellation, Ecce Homo Arch, and ultimately the Church of the Holy Sepulchre. Christian pilgrims, especially on Fridays, follow this ancient route while praying and reflecting. The narrow street winds through the Muslim and Christian Quarters amid shops and everyday city life.',
    coordinates: { lat: 31.7794, lng: 35.232072 },
    category: 'religious',
    imageUrls: ['']
  },
  {
    id: '6',
    name: 'Mount of Olives',
    description: 'This mountain ridge east of Jerusalem\'s Old City holds religious significance for Jews, Christians, and Muslims. For Jews, it contains the world\'s oldest Jewish cemetery with over 150,000 graves. For Christians, it\'s associated with several events in Jesus\'s life, including his ascension. Key sites include the Garden of Gethsemane, Church of All Nations, and Dominus Flevit Church. The mount offers spectacular panoramic views of Jerusalem, particularly the Temple Mount/Haram al-Sharif, making it a popular spot for photography and contemplation.',
    coordinates: { lat: 31.778333, lng: 35.243889 },
    category: 'nature',
    imageUrls: ['']
  },
  {
    id: '7',
    name: 'Israel Museum',
    description: 'Israel\'s largest cultural institution houses encyclopedic collections of art, archaeology, and Judaica. Its crown jewel is the Shrine of the Book, home to the Dead Sea Scrolls—the oldest biblical manuscripts ever discovered. The museum\'s Archaeological Wing displays artifacts spanning the entire history of the Holy Land. The outdoor Billy Rose Art Garden features works by Rodin, Picasso, and Moore. The museum\'s scale and significance make it one of the world\'s leading cultural institutions, offering insights into the region\'s rich and complex heritage.',
    coordinates: { lat: 31.7725, lng: 35.204167 },
    openingHours: 'Sun, Mon, Wed, Thu: 10:00-17:00; Tue: 16:00-21:00; Fri: 10:00-14:00; Sat: 10:00-17:00.',
    freeEntryInfo: 'Free for children on Tuesdays and Saturdays.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '8',
    name: 'Yad Vashem',
    description: 'Israel\'s official memorial to the victims of the Holocaust combines commemoration with documentation and education. The complex includes the Holocaust History Museum, Hall of Names, Children\'s Memorial, and the Avenue of the Righteous Among the Nations. Through personal stories, artifacts, photographs, and testimonies, it presents the narrative of the Shoah from a Jewish perspective. Set on the Mount of Remembrance with views of Jerusalem, the museum\'s architecture enhances its powerful message, making it an essential and moving experience for visitors.',
    coordinates: { lat: 31.774167, lng: 35.175556 },
    openingHours: 'Sun-Wed: 9:00-17:00; Thu: 9:00-20:00; Fri: 9:00-14:00. Closed Saturdays and Jewish holidays.',
    freeEntryInfo: 'Free entry.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '9',
    name: 'Old City of Jerusalem',
    description: 'Surrounded by 16th-century Ottoman walls, the one-square-kilometer Old City is divided into four quarters: Jewish, Muslim, Christian, and Armenian. This UNESCO World Heritage site contains some of the world\'s most significant religious landmarks alongside bustling markets, restaurants, and residential areas. Its narrow alleys and ancient stones tell stories spanning three millennia of history. Despite its small size, the Old City represents a microcosm of Jerusalem\'s religious diversity and historical complexity, making it the essential starting point for understanding the city.',
    coordinates: { lat: 31.7767, lng: 35.2342 },
    category: 'historic',
    imageUrls: ['']
  },
  {
    id: '10',
    name: 'Mahane Yehuda Market',
    description: 'Known locally as "The Shuk," this vibrant marketplace showcases Jerusalem\'s culinary diversity and local culture. By day, more than 250 vendors sell fresh produce, spices, baked goods, meats, cheeses, and specialty foods reflecting the city\'s multicultural heritage. By night, many stalls transform into trendy bars and restaurants. The market\'s narrow alleys are filled with the sounds of vendors calling out prices, the aromas of fresh foods, and a mix of locals and tourists. It offers an authentic glimpse into everyday Jerusalem life beyond the religious sites.',
    coordinates: { lat: 31.785556, lng: 35.212222},
    openingHours: 'Sun-Thu: 8:00-19:00; Fri: 8:00-15:00; Closed Saturdays.',
    category: 'market',
    imageUrls: ['']
  },
  {
    id: '11',
    name: 'Garden Tomb',
    description: 'An alternative site venerated by some Protestant denominations as the location of Jesus\'s crucifixion, burial, and resurrection. Discovered in the 19th century, the peaceful garden contains an ancient rock-cut tomb and is located near a cliff face resembling a skull (potentially Golgotha). While archaeological evidence suggests the tomb predates the Byzantine era, the tranquil gardens provide a contemplative space for prayer and reflection. Visitors appreciate the site\'s serene atmosphere in contrast to the often crowded Church of the Holy Sepulchre.',
    coordinates: { lat: 31.783853, lng: 35.229978 },
    openingHours: 'Mon-Sat: 8:30-12:00, 14:00-17:30. Closed Sundays.',
    freeEntryInfo: 'Free entry, donations appreciated.',
    category: 'religious',
    imageUrls: ['']
  },
  {
    id: '12',
    name: 'Tower of David Museum',
    description: 'Located in the medieval citadel near Jaffa Gate, this museum chronicles Jerusalem\'s 4,000-year history through exhibits, models, maps, and multimedia presentations. The fortress itself represents various historical periods, from Hasmonean to Ottoman. Visitors can climb the towers for panoramic views of the Old and New City. The museum\'s nighttime sound and light show projects Jerusalem\'s story onto the ancient walls. As both a historical site and a cultural institution, it provides context for understanding Jerusalem\'s complex development through the centuries.',
    coordinates: { lat: 31.776111, lng: 35.227778 },
    openingHours: 'Sun-Thu: 9:00-17:00; Fri: 9:00-14:00; Sat: 10:00-14:00.',
    category: 'museum',
    imageUrls: ['']
  },
  {
    id: '13',
    name: 'City of David (archaeological site)',
    description: 'An archaeological site believed to be the original urban core of ancient Jerusalem captured by King David 3,000 years ago. Excavations have revealed royal structures, water systems including Hezekiah\'s Tunnel, and ancient fortifications. Visitors can wade through the 2,700-year-old water tunnel that once supplied the city or walk through the recently excavated Pilgrimage Road. The site connects to the Western Wall through underground passages. Ongoing excavations continue to uncover new findings about Jerusalem\'s earliest urban settlement and biblical history.',
    coordinates: { lat: 31.773611, lng: 35.235556 },
    openingHours: 'Sun-Thu: 8:00-17:00; Fri: 8:00-14:00.',
    category: 'historic',
    imageUrls: ['']
  },
  {
    id: '14',
    name: 'Al-Aqsa Mosque',
    description: 'Located on the Temple Mount/Haram al-Sharif, this silver-domed mosque is the third holiest site in Islam after Mecca and Medina. Muslims believe Prophet Muhammad was transported here during his Night Journey before ascending to heaven. The current structure dates primarily to the 11th century, though it has been rebuilt multiple times. The mosque can accommodate up to 5,000 worshippers and features 45 columns supporting the interior. Its significance in Islamic tradition and its location on a site holy to multiple religions makes it central to Jerusalem\'s religious landscape.',
    coordinates: { lat: 31.776111, lng: 35.235833},
    openingHours: 'Open to Muslims only. Non-Muslims can view the exterior during Temple Mount visiting hours.',
    category: 'religious',
    imageUrls: ['']
  },
  {
    id: '15',
    name: 'Church of All Nations',
    description: 'Also known as the Basilica of the Agony, this Roman Catholic church is located at the foot of the Mount of Olives next to the Garden of Gethsemane. Built between 1919-1924 over Byzantine and Crusader ruins, it commemorates Jesus\'s prayer and agony before his arrest. The church\'s facade features a stunning Byzantine-style mosaic and is crowned by 12 domes representing the nations that contributed to its construction. Inside, the atmospheric space is darkened to encourage prayer, with a section of bedrock where tradition holds Jesus prayed on the night of his arrest.',
    coordinates: { lat: 31.779227, lng: 35.239628 },
    openingHours: 'Daily: 8:00-12:00, 14:00-18:00 (17:00 in winter).',
    category: 'religious',
    imageUrls: ['']
  }
]
