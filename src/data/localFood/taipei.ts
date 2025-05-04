import { LocalFood } from '../../types/localFood';

export const taipeiFood: LocalFood[] = [
  {
    name: 'Beef Noodle Soup',
    description: 'Taiwan\'s unofficial national dish with braised beef, broth, vegetables, and wheat noodles topped with pickled greens. The popular hong shao version features beef slow-cooked in soy sauce and five-spice until tender. Taipei hosts an annual festival where restaurants compete for the best beef noodles title.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Beef_noodle_soup_in_Taipei.jpg/1280px-Beef_noodle_soup_in_Taipei.jpg"]
  },
  {
    name: 'Bubble Tea',
    description: 'A tea-based drink with chewy tapioca pearls, invented in Taiwan in the 1980s. The original combines black tea with milk, sugar, and tapioca pearls, shaken for a frothy top. Taipei\'s scene now includes versions with fruit, cheese foam, brown sugar, and various jellies.',
    type: 'drink',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Classic_bubble_tea.jpg/1280px-Classic_bubble_tea.jpg"]
  },
  {
    name: 'Gua Bao',
    description: 'A steamed bun sandwich with braised pork belly, pickled mustard greens, cilantro, and crushed peanuts, nicknamed the "Taiwanese hamburger." The fluffy bun is folded like a taco around tender pork belly braised in soy sauce, five-spice, and rice wine.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Steamed_Sandwich%2Ctaken_by_LeoAlmighty.jpg/330px-Steamed_Sandwich%2Ctaken_by_LeoAlmighty.jpg"]
  },
  {
    name: 'Stinky Tofu',
    description: 'A fermented tofu dish with strong odor but mild flavor, considered an iconic Taiwanese street food. The tofu is marinated in fermented brine for months, then deep-fried until crispy outside while soft inside, topped with pickled cabbage and sauces.',
    type: 'snack',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Stinky_tofu_in_Taipei.jpg/1280px-Stinky_tofu_in_Taipei.jpg"]
  },
  {
    name: 'Oyster omelette',
    description: 'A savory dish combining small oysters with sweet potato starch and egg, topped with a sweet-tangy red sauce. Creates a unique texture that\'s both chewy from the starch and tender from the oysters. Originally from China\'s Fujian province, now a Taiwanese specialty.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Oyster_omelet_in_Taipei.jpg/1280px-Oyster_omelet_in_Taipei.jpg"]
  },
  {
    name: 'Braised pork rice',
    description: 'Minced pork belly braised in soy sauce, five-spice, and rice wine, served over rice. Known as "lu rou fan," it\'s Taiwan\'s quintessential everyday meal. The pork is slowly simmered until the fat renders and meat absorbs the flavorful liquid. Often includes braised eggs.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Braised_Pork_Rice_in_Taipei.jpg/1280px-Braised_Pork_Rice_in_Taipei.jpg"]
  },
  {
    name: 'Taiwanese fried chicken',
    description: 'Bite-sized boneless chicken marinated in soy sauce, rice wine, and spices, coated in sweet potato starch and deep-fried. The starch creates a distinctive crunch that stays crispy longer than wheat flour batters. A night market staple, often served on skewers with various seasonings.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwanese_fried_chicken_steak.jpg/1280px-Taiwanese_fried_chicken_steak.jpg"]
  },
  {
    name: 'Pineapple cake',
    description: 'A sweet pastry with buttery shortbread crust filled with pineapple jam, shaped into small rectangles. Traditional versions use winter melon with pineapple juice rather than pure pineapple. The Chinese name sounds similar to phrases for prosperity, making it a popular gift.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taiwanese_Pineapple_Cake.jpg/1280px-Taiwanese_Pineapple_Cake.jpg"]
  },
  {
    name: 'Cong you bing',
    description: 'A savory flatbread made from dough rolled with oil and chopped scallions, then pan-fried until crispy and flaky. Taiwan\'s version often includes a beaten egg spread over the pancake while cooking. Typically cut into triangles and served with sweet soy paste or chili sauce.',
    type: 'breakfast',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Scallion_pancake_in_Taipei.jpg/1280px-Scallion_pancake_in_Taipei.jpg"]
  },
  {
    name: 'Mango shaved ice',
    description: 'A dessert with paper-thin ribbons of shaved ice topped with fresh mango chunks and condensed milk. Modern machines create fluffy, snow-like ice that melts instantly. The dessert is seasonal, with the best quality available during Taiwan\'s mango season from May to August.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Mango_shaved_ice.jpg/1280px-Mango_shaved_ice.jpg"]
  }
];
