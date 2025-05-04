import { LocalFood } from '../../types/localFood';

export const newyorkFood: LocalFood[] = [
  {
    name: 'New York-style pizza',
    description: 'Thin, foldable slices with a crispy outer crust and chewy interior. Traditionally topped with tomato sauce and mozzarella cheese. Sold in neighborhood pizzerias throughout the city, often available by the slice for quick meals on the go.',
    type: 'main',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/NYC-Pizzeria-Slice.JPG/1280px-NYC-Pizzeria-Slice.JPG"]
  },
  {
    name: 'Bagel with Lox',
    description: 'A chewy, boiled-then-baked ring of dough topped with smoked salmon, cream cheese, capers, red onion, and sometimes tomato. NYC bagels are known for their distinctive texture from the city\'s tap water. A quintessential New York breakfast.',
    type: 'breakfast',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/%2Athis%2A_is_a_bagel.jpg/250px-%2Athis%2A_is_a_bagel.jpg"]
  },
  {
    name: 'Pastrami on rye',
    description: 'Thinly sliced, spiced and smoked beef brisket served on rye bread with mustard. Popularized by Jewish delis like Katz\'s, this sandwich features meat that\'s been cured, seasoned, smoked, and steamed until tender.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Pastrami-sandwich.jpg/1280px-Pastrami-sandwich.jpg"]
  },
  {
    name: 'Manhattan Clam Chowder',
    description: 'Unlike its creamy New England counterpart, Manhattan\'s version has a clear tomato broth with clams, vegetables, and herbs. The tomato-based recipe was introduced by Portuguese and Italian immigrants to New York\'s seafood scene.',
    type: 'soup',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Manhattan_clam_chowder.jpg/1280px-Manhattan_clam_chowder.jpg"]
  },
  {
    name: 'Black and white cookie',
    description: 'A soft, cake-like cookie frosted with half vanilla and half chocolate icing. These oversized treats are found in bakeries and delis throughout the city. They\'re actually more like drop cakes than cookies, with a subtle lemon flavor.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Black_and_white_cookie.jpg/1280px-Black_and_white_cookie.jpg"]
  },
  {
    name: 'Cheesecake',
    description: 'New York-style cheesecake is dense, rich, and smooth with a graham cracker crust. Made with cream cheese, eggs, and sugar, it\'s typically served plain or with fruit topping. Junior\'s in Brooklyn is famous for this iconic dessert.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_York_style_cheesecake.jpg/1280px-New_York_style_cheesecake.jpg"]
  },
  {
    name: 'Chopped Cheese',
    description: 'Ground beef with onions, melted cheese, lettuce, tomato, and condiments on a hero roll. Originating in bodegas of Harlem and the Bronx, this affordable sandwich has gained popularity throughout the city as an authentic New York creation.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Chopped_cheese.jpg/1280px-Chopped_cheese.jpg"]
  },
  {
    name: 'Egg Cream',
    description: 'Despite the name, this beverage contains neither eggs nor cream. It\'s a mixture of milk, carbonated water, and chocolate or vanilla syrup. Created in Brooklyn in the late 19th century, it remains a nostalgic New York soda fountain classic.',
    type: 'drink',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Egg_cream_on_counter.jpg/1280px-Egg_cream_on_counter.jpg"]
  },
  {
    name: 'Hot Dog',
    description: 'New York hot dogs are typically all-beef franks served on a steamed bun with sauerkraut, onion sauce, and mustard. Street vendors and establishments like Nathan\'s Famous on Coney Island have made this simple food an iconic city staple.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1280px-Hotdog_-_Evan_Swigart.jpg"]
  },
  {
    name: 'General Tso\'s Chicken',
    description: 'Crispy fried chicken pieces in a sweet-spicy sauce with broccoli. Though based on Chinese cuisine, this dish was popularized in New York City in the 1970s. It represents the city\'s tradition of adapting international foods to American tastes.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/General_Tsos_Chicken.jpg/1280px-General_Tsos_Chicken.jpg"]
  }
];
