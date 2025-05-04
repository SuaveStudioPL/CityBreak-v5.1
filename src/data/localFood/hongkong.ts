import { LocalFood } from '../../types/localFood';

export const hongkongFood: LocalFood[] = [
  {
    name: 'Dim Sum',
    description: 'Small portions of food served in steamer baskets or on small plates, traditionally enjoyed as breakfast or lunch with Chinese tea. Popular items include shrimp dumplings, pork dumplings, barbecue pork buns, and rice noodle rolls. The phrase means "touch the heart."',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Dim_sum.jpg/1280px-Dim_sum.jpg"]
  },
  {
    name: 'Roast Goose',
    description: 'A Cantonese delicacy of goose marinated in spices, poached, air-dried, and roasted until the skin is crispy while the meat remains juicy. Served sliced with plum sauce. Hong Kong\'s version uses charcoal for roasting, creating a distinctive smoky flavor.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roastedgoose.jpg/250px-Roastedgoose.jpg"]
  },
  {
    name: 'Wonton noodles',
    description: 'A Cantonese soup with thin, springy egg noodles and wontons (dumplings filled with shrimp and sometimes pork) in a clear broth. Hong Kong\'s version features al dente noodles with an alkaline flavor and shrimp-dominant wontons. Can also be served dry with sauce.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Wonton_noodles_in_soup_-_top_view.jpg/1280px-Wonton_noodles_in_soup_-_top_view.jpg"]
  },
  {
    name: 'Pineapple Bun',
    description: 'A sweet bun named for its crackled top crust resembling a pineapple\'s texture, though it contains no pineapple. Features a soft bread base with a sweet, crispy crust. A popular variation includes a slice of cold butter inside the warm bun.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pineapple_bun.jpg/1280px-Pineapple_bun.jpg"]
  },
  {
    name: 'Egg Tart',
    description: 'A pastry with a flaky crust filled with egg custard, reflecting British and Portuguese influences. Two main varieties exist: one with shortcrust pastry and another with puff pastry, sometimes with a caramelized top. Typically served warm as a dessert or tea snack.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Egg_tart_pastry.jpg/1280px-Egg_tart_pastry.jpg"]
  },
  {
    name: 'Milk Tea',
    description: 'A beverage made by brewing black tea with evaporated or condensed milk, known as "nai cha." Distinguished by its smooth texture and strong flavor achieved through filtering with a sackcloth bag, earning it the nickname "pantyhose tea."',
    type: 'drink',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Hong_Kong-style_milk_tea.jpg/1280px-Hong_Kong-style_milk_tea.jpg"]
  },
  {
    name: 'Claypot rice',
    description: 'Rice cooked in a clay pot with toppings like Chinese sausage, chicken, or preserved meats, creating a crust along the bottom. Finished with sweet soy sauce that flavors the rice. The most prized part is the crispy rice crust at the bottom.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Clay_pot_rice_with_Chinese_sausage.jpg/1280px-Clay_pot_rice_with_Chinese_sausage.jpg"]
  },
  {
    name: 'Egg waffle',
    description: 'A spherical egg-based waffle with a honeycomb-like appearance, known as "gai daan jai" (little chicken eggs). Features crispy spheres with soft centers. Traditional versions are served plain in paper bags, while modern versions include various flavors and toppings.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Egg_waffle_in_Hong_Kong.jpg/1280px-Egg_waffle_in_Hong_Kong.jpg"]
  },
  {
    name: 'Congee',
    description: 'A rice porridge simmered until creamy, served with savory toppings. Hong Kong-style congee is smoother than other versions. Popular varieties include century egg and pork, fish, or mixed meat. Often served with fried dough sticks for dipping.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Pork_century_egg_congee.jpg/1280px-Pork_century_egg_congee.jpg"]
  },
  {
    name: 'Put chai ko',
    description: 'A traditional Cantonese pudding cake made from rice flour, brown sugar, and red beans, steamed in small bowls and served on wooden skewers. Has a chewy, gelatinous texture with caramel-like sweetness. The name means "bowl pudding cake."',
    type: 'dessert',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Put_chai_ko.jpg/1280px-Put_chai_ko.jpg"]
  }
];
