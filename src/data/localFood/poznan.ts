import { LocalFood } from '../../types/localFood';

export const poznanFood: LocalFood[] = [
  {
    name: "Rogal świętomarciński", // Name from Wikipedia PL
    type: "dessert",
    description: "A croissant filled with a sweet paste of white poppy seeds, nuts, raisins, and almonds, glazed and sprinkled with nuts. A protected regional product of Poznań, traditionally eaten around St. Martin's Day (November 11th) but available year-round.",
    isVegetarian: true,
    isVegan: false, // Contains butter, eggs, milk
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Rogal_%C5%9Bwi%C4%99tomarci%C5%84ski_November_2021.jpg/320px-Rogal_%C5%9Bwi%C4%99tomarci%C5%84ski_November_2021.jpg"]
  },
  {
    name: "Pyry z gzikiem", // Name from Wikipedia PL
    type: "main", // Can also be appetizer/side
    description: "A staple dish from the Wielkopolska region, especially Poznań. Consists of boiled potatoes ('pyry' in local dialect) served whole or mashed, typically in their jackets, accompanied by 'gzik' - quark cheese mixed with onion, chives, and sometimes cream or oil.",
    isVegetarian: true,
    isVegan: false, // Contains dairy (quark cheese)
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kartoffeln-quark.jpg/960px-Kartoffeln-quark.jpg"]
  },
  {
    name: "Czernina", // Name from Wikipedia PL
    type: "soup",
    description: "A traditional Polish soup made from duck or goose blood and clear poultry broth. Its sweet and sour taste comes from sugar and vinegar, often containing dried fruits, dumplings, or small pasta. Known throughout Poland, including Wielkopolska.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Czernina_z_kluska.JPG/320px-Czernina_z_kluska.JPG"]
  },
  {
    name: "Szare kluchy", // Name from Wikipedia PL
    type: "main", // Often served as main dish component
    description: "Grey dumplings typical of the Wielkopolska cuisine, made from grated raw and cooked potatoes with flour and sometimes egg. They have a characteristic greyish color and are often served with fried bacon, pork scratchings, or sautéed onions and sauerkraut.",
    isVegetarian: false, // Usually served with meat products, base might be vegetarian
    isVegan: false, // Base might contain egg, usually served with meat
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Kluski_czarne.jpg/250px-Kluski_czarne.jpg"]
  },
  {
    name: "Kaczka pieczona", // General name, representing Poznan style
    type: "main",
    description: "Roasted duck is popular in Polish cuisine, with the Poznań/Wielkopolska style often featuring a stuffing of apples and seasoned generously with marjoram. It's typically served with red cabbage and pyzy (yeast dumplings) or szare kluchy.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://img.freepik.com/darmowe-zdjecie/dzien-dziekczynienia-pyszny-uklad-posilkow_23-2149100106.jpg?semt=ais_hybrid&w=740"] // General roasted duck image
  },
  {
    name: "Ślepe ryby (zupa)", // Name from Wikipedia PL
    type: "soup",
    description: "A traditional, simple potato soup from Wielkopolska, also known as 'Rumpuć'. The name ('blind fish') humorously refers to the lack of fish despite being a Lenten dish. It's a basic potato soup, sometimes thickened with milk or cream, or enriched with bacon.",
    isVegetarian: false, // Traditionally may contain milk/bacon
    isVegan: false, // Traditionally may contain milk/bacon
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Slepe_ryby.jpg/250px-Slepe_ryby.jpg"] // Representative regional potato soup image
  },
  {
    name: "Placki ziemniaczane", // Regional name for Placki Ziemniaczane
    type: "main", // Can be dessert or side
    description: "The Wielkopolska dialect name for potato pancakes ('placki ziemniaczane'). Made from grated potatoes, onion, eggs, and flour, fried until golden brown. Served savoury (e.g., with goulash or sour cream) or sweet (with sugar, fruit preserves, or cream).",
    isVegetarian: true,
    isVegan: false, // Typically contains eggs
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bramboracky.jpg/250px-Bramboracky.jpg"] // Image for Placki Ziemniaczane
  },
  {
    name: "Andruty kaliskie", // Name from Wikipedia PL
    type: "snack", // Or dessert
    description: "Light, delicate, and crispy round wafers, a regional product from Kalisz in Wielkopolska. Baked since the early 19th century, these simple wafers are made from flour, sugar, oil, and water. Protected by EU geographical indication.",
    isVegetarian: true,
    isVegan: false, // Traditional recipes might use egg whites, check specific product
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Andruty_kaliskie_-_wafers.jpg/320px-Andruty_kaliskie_-_wafers.jpg"]
  },
  {
    name: "Kompot", // Name from Wikipedia PL
    type: "drink",
    description: "A traditional non-alcoholic sweet beverage popular in Poland, made by boiling fresh or dried fruit (like apples, cherries, strawberries, rhubarb) in water with sugar. Often served with dinner, especially in homes and traditional eateries ('bar mleczny').",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kompot_truskawkowy_April_2021.jpg/320px-Kompot_truskawkowy_April_2021.jpg"]
  },
  {
    name: "Piwo", // Generic name, describe regional context
    type: "drink",
    description: "Beer is widely consumed in Poland. Wielkopolska, particularly Poznań, is home to major breweries like Kompania Piwowarska (producing Lech and Tyskie). Numerous local craft breweries also offer a variety of styles, reflecting the growing craft beer scene.",
    isVegetarian: true,
    isVegan: true, // Most beers are vegan, unless clarified with animal products
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Dark_beer_and_light_beer.jpg/250px-Dark_beer_and_light_beer.jpg"] // Lech beer image
  }
];