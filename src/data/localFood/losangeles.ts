import { LocalFood } from '../../types/localFood';

export const losangelesFood: LocalFood[] = [
  {
    name: 'Street Tacos',
    description: 'Small corn tortillas topped with grilled meat, onions, cilantro, and salsa. LA\'s taco trucks and stands are legendary, especially in neighborhoods like Boyle Heights and East LA. Often served with lime wedges and radishes.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1280px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"]
  },
  {
    name: 'French Dip Sandwich',
    description: 'Thinly sliced roast beef on a French roll, served with a side of beef jus for dipping. Invented in Los Angeles, with both Philippe\'s and Cole\'s claiming to be the originator in the early 1900s. A classic downtown LA specialty.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sandwich_au_jus.jpg/1280px-Sandwich_au_jus.jpg"]
  },
  {
    name: 'California Roll',
    description: 'Inside-out sushi roll with crab (or imitation crab), avocado, and cucumber. Created in Los Angeles in the 1960s to introduce Americans to sushi by hiding the seaweed and using familiar ingredients. Now found worldwide.',
    type: 'appetizer',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/California_Sushi_Roll.jpg/1280px-California_Sushi_Roll.jpg"]
  },
  {
    name: 'Dodger Dog',
    description: 'A 10-inch pork hot dog served at Dodger Stadium since the 1950s. Available steamed or grilled, it\'s longer than the bun and typically topped with mustard, ketchup, onions, and relish. Over 2 million are sold each baseball season.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dodger_Dog.jpg/1280px-Dodger_Dog.jpg"]
  },
  {
    name: 'Kale Salad',
    description: 'While not invented in LA, the city popularized kale salads with ingredients like quinoa, avocado, and lemon dressing. Representing the city\'s health-conscious culture, these nutrient-dense salads became trendy in upscale restaurants before spreading nationwide.',
    type: 'side',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kale-salad.jpg/1280px-Kale-salad.jpg"]
  },
  {
    name: 'Korean BBQ',
    description: 'Marinated meats grilled at the table and served with banchan (side dishes). LA\'s Koreatown offers the largest Korean community outside Korea, with restaurants ranging from traditional to fusion. Often enjoyed with soju or beer.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Korean_barbeque-Galbi-01.jpg/1280px-Korean_barbeque-Galbi-01.jpg"]
  },
  {
    name: 'In-N-Out Burger',
    description: 'A simple menu of fresh, never-frozen burgers with a devoted following. The "Double-Double" and items from the "secret menu" like Animal Style fries are California institutions. Founded in Baldwin Park in 1948.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/InNOut_cheeseburgers.jpg/1280px-InNOut_cheeseburgers.jpg"]
  },
  {
    name: 'Açaí Bowl',
    description: 'Frozen açaí berry purée topped with granola, fresh fruit, and honey. This Brazilian-inspired health food became a Southern California staple, particularly popular in beach communities as a post-workout meal or breakfast option.',
    type: 'breakfast',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/A%C3%A7a%C3%AD_na_tigela.jpg/1280px-A%C3%A7a%C3%AD_na_tigela.jpg"]
  },
  {
    name: 'Avocado Toast',
    description: 'Mashed avocado spread on artisanal bread, often topped with ingredients like radishes, microgreens, or poached eggs. While not invented in LA, the city embraced and elevated this simple dish into a cultural phenomenon and brunch staple.',
    type: 'breakfast',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Avocado_Toast_%2826158801339%29.jpg/1280px-Avocado_Toast_%2826158801339%29.jpg"]
  },
  {
    name: 'Chili Cheese Fries',
    description: 'French fries topped with beef chili and melted cheese. Tommy\'s Original, founded in 1946, made this indulgent dish famous in LA. The city\'s 24-hour diners also serve it as a popular late-night comfort food.',
    type: 'side',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Chili-Cheese-Fries.jpg/1280px-Chili-Cheese-Fries.jpg"]
  }
];
