import { LocalFood } from '../../types/localFood';

export const dubaiFood: LocalFood[] = [
  {
    name: 'Al Machboos',
    description: 'A fragrant rice dish similar to biryani, considered the UAE\'s national dish. Made with basmati rice flavored with bezar (a spice blend) and cooked with meat. Garnished with fried onions, nuts, and raisins. The name means "buried" in Arabic, referring to the meat being buried in the rice.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Machboos.JPG/250px-Machboos.JPG"]
  },
  {
    name: 'Shawarma',
    description: 'A popular street food with thinly sliced marinated meat stacked on a vertical rotisserie and slow-roasted. The shaved meat is wrapped in flatbread with tahini, garlic sauce, pickles, and vegetables. Dubai\'s version incorporates local spices and preparation methods.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Shawarma.jpg/1280px-Shawarma.jpg"]
  },
  {
    name: 'Hummus',
    description: 'A creamy dip made from mashed chickpeas blended with tahini, olive oil, lemon juice, and garlic. Dubai restaurants serve distinctive versions with toppings like pine nuts, sumac, or meat. Traditionally eaten with Arabic bread as part of a mezze platter.',
    type: 'appetizer',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hummus_from_The_Nile.jpg/1280px-Hummus_from_The_Nile.jpg"]
  },
  {
    name: 'Luqaimat',
    description: 'Sweet, crunchy dumplings considered the UAE\'s most beloved dessert. These deep-fried dough balls are crispy outside and soft inside, soaked in date syrup and sometimes sprinkled with sesame seeds. The name means "small bites" in Arabic. Typically served hot.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Luqaimat.jpg/1280px-Luqaimat.jpg"]
  },
  {
    name: 'Karak Chai',
    description: 'A strong, sweet tea that has become Dubai\'s unofficial national drink. Made by brewing black tea with evaporated milk, sugar, and spices like cardamom and saffron. The tea is boiled multiple times to intensify the flavor. Popular as an evening social drink.',
    type: 'drink',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Chai_In_Sakora.jpg/250px-Chai_In_Sakora.jpg"]
  },
  {
    name: 'Mandi (food)',
    description: 'A traditional Yemeni dish popular in Dubai with meat and rice cooked in an underground clay oven. The meat is spiced with baharat, cardamom, cinnamon, and dried limes for a smoky flavor. The name refers to the dewy tenderness of the meat. Often served at special occasions.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mandi_%28food%29.jpg/1280px-Mandi_%28food%29.jpg"]
  },
  {
    name: 'Knafeh',
    description: 'A Middle Eastern dessert with thin noodle-like pastry soaked in sweet syrup and layered with cheese. Baked until crispy and golden, then soaked in rose water or orange blossom syrup. In Dubai, it\'s often topped with pistachios and served hot for stretchy cheese.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Knafeh.jpg/1280px-Knafeh.jpg"]
  },
  {
    name: 'Camel Meat',
    description: 'A traditional Bedouin delicacy that remains part of Emirati heritage cuisine. The meat is slow-cooked to tenderize it, often in stews, grilled, or in spiced rice dishes. It has a distinctive gamey flavor similar to beef but sweeter, and is leaner and higher in protein.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Cholistani_Camel_Meat_Pulao.JPG/960px-Cholistani_Camel_Meat_Pulao.JPG"]
  },
  {
    name: 'Falafel',
    description: 'Deep-fried balls made from ground chickpeas or fava beans, mixed with herbs and spices. A staple street food in Dubai, typically served in pita bread with tahini sauce and vegetables, or as part of a mezze platter. A popular vegetarian option throughout the city.',
    type: 'appetizer',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Falafel_balls.jpg/1280px-Falafel_balls.jpg"]
  },
  {
    name: 'Arabic coffee',
    description: 'A traditional coffee central to Emirati hospitality, served in small handleless cups. Lightly roasted and ground, then boiled with cardamom and sometimes saffron. Typically served without sugar but with dates to balance its bitter taste. The serving ritual symbolizes welcome and generosity.',
    type: 'drink',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Arabic_coffee.jpg/1280px-Arabic_coffee.jpg"]
  }
];
