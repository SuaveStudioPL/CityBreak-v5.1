import { LocalFood } from '../../types/localFood';

export const bostonFood: LocalFood[] = [
  {
    name: 'New England Clam Chowder',
    description: 'Creamy soup with clams, potatoes, and salt pork in a milk base. Boston\'s version never contains tomatoes and is served with oyster crackers. Dating to the 18th century, it\'s a signature dish at Legal Sea Foods and featured in the annual summer "Chowderfest" competition.',
    type: 'soup',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Clam_chowder.jpg/1280px-Clam_chowder.jpg"]
  },
  {
    name: 'Lobster Roll',
    description: 'Lobster meat served on a grilled split-top bun. Boston\'s version typically uses cold lobster with mayo and celery ("Maine style"), though some offer warm lobster with butter ("Connecticut style"). A staple at seafood restaurants like Neptune Oyster and James Hook & Co., usually served with chips or fries.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lobster_roll.jpg/1280px-Lobster_roll.jpg"]
  },
  {
    name: 'Boston Cream Pie',
    description: 'Massachusetts\' official dessert: sponge cake with vanilla custard filling and chocolate ganache topping. Created in 1856 at the Parker House Hotel, it\'s actually a cake, not a pie. The original recipe is still served at the Omni Parker House, and has inspired other desserts like Boston cream doughnuts.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Boston_cream_pie_%281%29.jpg/1280px-Boston_cream_pie_%281%29.jpg"]
  },
  {
    name: 'Fenway Frank',
    description: 'Iconic hot dog served at Fenway Park, home of the Boston Red Sox. Boiled then grilled, served on a split-top bun with mustard, relish, and onions. Known for being slightly longer than the bun, creating a signature overhang. About 700,000 are sold each baseball season, with packaged versions available in local supermarkets.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1280px-Hotdog_-_Evan_Swigart.jpg"]
  },
  {
    name: 'Cannoli',
    description: 'Sicilian pastry with fried tube-shaped shells filled with sweet ricotta cream. A signature dessert in Boston\'s North End, where Mike\'s Pastry and Modern Pastry compete for the title of best cannoli. Traditional versions have plain shells with ricotta filling, while variations include chocolate-dipped shells or flavored fillings. Authentic ones are filled to order to maintain crispness.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cannoli_siciliani.jpg/1280px-Cannoli_siciliani.jpg"]
  },
  {
    name: 'Boston baked beans',
    description: 'White beans slow-cooked with salt pork, molasses, and brown sugar, giving Boston its "Beantown" nickname. Adapted from Native American cooking, using molasses from the triangular trade. Traditionally baked overnight on Saturdays for Sunday consumption when Puritan rules forbade cooking. Served in special bean pots with narrow tops to retain moisture. Available at historic restaurants like Durgin-Park and Union Oyster House.',
    type: 'side',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Boston_baked_beans.jpg/1280px-Boston_baked_beans.jpg"]
  },
  {
    name: 'Oysters',
    description: 'Fresh oysters on the half shell are a Boston culinary staple, reflecting the city\'s maritime heritage. New England waters produce distinctively briny oysters with firm texture, including Wellfleet, Duxbury, and Island Creek varieties. Once considered poor man\'s food, they\'re now a delicacy served with mignonette sauce, cocktail sauce, or lemon. Many restaurants offer dollar oyster happy hours, and they\'re celebrated at the annual Boston Seafood Festival.',
    type: 'appetizer',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Oysters_served_on_the_half_shell.jpg/1280px-Oysters_served_on_the_half_shell.jpg"]
  },
  {
    name: 'Parker House roll',
    description: 'Soft, sweet dinner roll with a distinctive folded center crease, invented at Boston\'s Parker House Hotel in the 1870s. Made with milk, butter, and sugar, then brushed with butter for a golden exterior. Legend claims it was created when an angry baker threw unfinished dough into the oven. The hotel, which also created Boston cream pie, shared the recipe in the 1930s. Still served at the Omni Parker House today.',
    type: 'side',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Parker_House_roll.jpg/1280px-Parker_House_roll.jpg"]
  },
  {
    name: 'Frappes',
    description: 'In Boston, a "frappe" (pronounced "frap") is a thick milkshake with ice cream, milk, and flavored syrup. Unlike elsewhere, ordering a "milkshake" in Boston gets you milk and syrup without ice cream. Invented by New England pharmacists in the late 19th century. Local chain Brigham\'s popularized frappes with signature flavors like vanilla, chocolate, and seasonal options. The tradition continues in remaining shops despite many locations closing.',
    type: 'drink',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cafe-frape-glas-holztisch-unscharf.jpg/250px-Cafe-frape-glas-holztisch-unscharf.jpg"]
  },
  {
    name: 'Samuel Adams Boston Lager',
    description: 'Vienna-style lager that helped launch America\'s craft beer revolution in 1984. Created by Jim Koch\'s Boston Beer Company using his great-grandfather\'s 1870s recipe. Features two-row malted barley and Bavarian Noble hops, balancing maltiness with hop complexity. Initially brewed in Pittsburgh before moving to Boston. The Jamaica Plain brewery offers tours, while its success helped reform Massachusetts brewing laws, fostering Boston\'s craft beer scene.',
    type: 'drink',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Samuel_Adams_Boston_Lager.jpg/1280px-Samuel_Adams_Boston_Lager.jpg"]
  }
];
