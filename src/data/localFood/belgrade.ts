import { LocalFood } from '../../types/localFood';

export const belgradeFood: LocalFood[] = [
  {
    name: "Ćevapi",
    type: "main",
    description: "Small, grilled minced meat sausages made from beef, lamb, or pork. In Belgrade, they're typically served with flatbread (lepinja), chopped onions, and kajmak (dairy spread similar to clotted cream).",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/%C4%86evapi_in_Belgrade.jpg/320px-%C4%86evapi_in_Belgrade.jpg"]
  },
  {
    name: "Pljeskavica",
    type: "main",
    description: "Large Serbian hamburger made from a mixture of ground meats. Often described as the Serbian national dish, it's typically served in flatbread with onions, kajmak, and ajvar (red pepper spread).",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Pljeskavica_%281%29.jpg/320px-Pljeskavica_%281%29.jpg"]
  },
  {
    name: "Sarma",
    type: "main",
    description: "Cabbage leaves stuffed with minced meat, rice, and spices, then simmered in a paprika-flavored broth. A winter staple in Belgrade, traditionally prepared for family gatherings and celebrations.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sarma_with_yogurt.jpg/320px-Sarma_with_yogurt.jpg"]
  },
  {
    name: "Ajvar",
    type: "condiment",
    description: "Roasted red pepper spread that's a staple condiment in Serbian cuisine. Homemade versions are prepared in autumn when peppers are in season, with families often making large batches to last through winter.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ajvar_Leskovacki.jpg/320px-Ajvar_Leskovacki.jpg"]
  },
  {
    name: "Burek",
    type: "pastry",
    description: "Flaky pastry filled with meat, cheese, or spinach. In Belgrade, it's a popular breakfast or snack food, typically purchased from specialized bakeries called 'buregdžinice'.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Burek-Tuzla.jpg/320px-Burek-Tuzla.jpg"]
  },
  {
    name: "Karađorđeva šnicla",
    type: "main",
    description: "Rolled veal or pork steak stuffed with kajmak, then breaded and fried. Named after Karađorđe, leader of the First Serbian Uprising against the Ottoman Empire, due to its resemblance to the medal awarded to him.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kara%C4%91or%C4%91eva_%C5%A1nicla.jpg/320px-Kara%C4%91or%C4%91eva_%C5%A1nicla.jpg"]
  },
  {
    name: "Rakija",
    type: "drink",
    description: "Strong fruit brandy considered the national drink of Serbia. In Belgrade, it's served as an aperitif, digestif, or alongside meze (appetizers). Common varieties include šljivovica (plum), kajsijevača (apricot), and dunjevača (quince).",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Rakija.jpg/320px-Rakija.jpg"]
  },
  {
    name: "Gibanica",
    type: "pastry",
    description: "Traditional pastry made with layers of phyllo dough, cheese, and eggs. A versatile dish in Belgrade cuisine, eaten for breakfast, as a snack, or as a side dish with the main meal.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Gibanica_2.jpg/320px-Gibanica_2.jpg"]
  },
  {
    name: "Pasulj",
    type: "soup",
    description: "Hearty Serbian bean soup, often made with smoked meat and vegetables. In Belgrade, it's a traditional dish served in kafanas (traditional restaurants) and is especially popular during winter months.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Pasulj.jpg/320px-Pasulj.jpg"]
  },
  {
    name: "Palačinke",
    type: "dessert",
    description: "Serbian crepes typically filled with Eurocrem (chocolate-hazelnut spread), jam, walnuts, or cheese. In Belgrade, they're a popular street food and dessert, available from specialized shops called 'palačinkarnice'.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Palacinke_sa_nutelom.jpg/320px-Palacinke_sa_nutelom.jpg"]
  }
];
