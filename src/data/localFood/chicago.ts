import { LocalFood } from '../../types/localFood';

export const chicagoFood: LocalFood[] = [
  {
    name: 'Deep Dish Pizza',
    description: 'Chicago\'s signature pizza with a tall, buttery crust forming a bowl for chunky tomato sauce, mozzarella, and toppings. Unlike traditional pizzas, the sauce goes on top of the cheese to prevent burning during the long baking time.',
    type: 'main',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chicago-style_pizza.jpg/1280px-Chicago-style_pizza.jpg"]
  },
  {
    name: 'Chicago-style hot dog',
    description: 'An all-beef frankfurter on a poppy seed bun topped with yellow mustard, green relish, chopped onions, tomato slices, pickle spear, sport peppers, and celery salt. Notably served without ketchup, which locals consider a serious faux pas.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019-05-21_18_29_04_A_Chicago-style_hot_dog_at_Freddie%27s_in_Fairfax_County%2C_Virginia.jpg/1280px-2019-05-21_18_29_04_A_Chicago-style_hot_dog_at_Freddie%27s_in_Fairfax_County%2C_Virginia.jpg"]
  },
  {
    name: 'Italian beef',
    description: 'Thinly sliced roast beef simmered in herb-infused au jus, served on an Italian roll. Often topped with giardiniera (pickled vegetables) or sweet peppers. Typically ordered "dry," "wet," or "dipped" depending on how much gravy is added.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Italian_beef_sandwich.jpg/1280px-Italian_beef_sandwich.jpg"]
  },
  {
    name: 'Jibarito',
    description: 'A Puerto Rican-inspired sandwich using fried plantains instead of bread. Filled with steak, chicken, or pork plus lettuce, tomato, cheese, and garlic mayo. Created in Chicago\'s Humboldt Park neighborhood in the 1990s.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Jibarito_sandwich.jpg/1280px-Jibarito_sandwich.jpg"]
  },
  {
    name: 'Garrett Mix Popcorn',
    description: 'A sweet and savory combination of caramel and cheese popcorn. This "Chicago Mix" from Garrett Popcorn Shops has become an iconic city treat, with tourists often seen carrying their distinctive striped tins throughout downtown.',
    type: 'snack',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Garrett_Popcorn_Shop%2C_Liat_Towers%2C_Singapore_-_20121109.jpg/250px-Garrett_Popcorn_Shop%2C_Liat_Towers%2C_Singapore_-_20121109.jpg"]
  },
  {
    name: 'Maxwell Street Polish',
    description: 'A grilled or fried Polish sausage topped with yellow mustard, caramelized onions, and sport peppers on a poppy seed roll. Named after the Maxwell Street Market where it originated, this street food is a late-night favorite.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Maxwell_Street_Polish_at_Express_Grill.jpg/1280px-Maxwell_Street_Polish_at_Express_Grill.jpg"]
  },
  {
    name: 'Rainbow Cone',
    description: 'A distinctive ice cream treat featuring five flavors stacked in layers: chocolate, strawberry, Palmer House (vanilla with cherries and walnuts), pistachio, and orange sherbet. A South Side tradition since 1926.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://img.freepik.com/free-vector/rainbow-colored-ice-cream-neon-sign_1262-19630.jpg?t=st=1746270638~exp=1746274238~hmac=34ea3c46410d4537fb20b42ecda922dc7b00865dc2368a17f74eab9d68487909&w=740"]
  },
  {
    name: 'Malört',
    description: 'A bitter wormwood liqueur that\'s become Chicago\'s infamous local spirit. Known for its extremely harsh taste, it\'s often served as a rite of passage to visitors. Originally marketed as a medicinal alcohol during Prohibition.',
    type: 'drink',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Jeppson%27s_Mal%C3%B6rt.jpg/1280px-Jeppson%27s_Mal%C3%B6rt.jpg"]
  },
  {
    name: 'Flaming Saganaki',
    description: 'Greek cheese that\'s doused with brandy and lit on fire tableside with a shout of "Opa!" Though based on a traditional Greek appetizer, the flaming presentation was invented in Chicago\'s Greektown neighborhood in 1968.',
    type: 'appetizer',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Saganaki.jpg/250px-Saganaki.jpg"]
  },
  {
    name: 'Chocolate brownie',
    description: 'This fudgy chocolate dessert was invented at Chicago\'s Palmer House Hotel for the 1893 World\'s Columbian Exposition. The original recipe included walnuts and an apricot glaze, creating what many consider the first American brownie.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Chocolate_brownies.jpg/1280px-Chocolate_brownies.jpg"]
  }
];
