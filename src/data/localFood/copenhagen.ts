import { LocalFood } from '../../types/localFood';

export const copenhagenFood: LocalFood[] = [
  {
    name: "Smørrebrød",
    type: "main",
    description: "A traditional open-faced sandwich in the cuisines of Denmark, Norway, and Sweden. It usually consists of a piece of buttered rye bread (rugbrød), topped with cold cuts, pieces of meat or fish, cheese or spreads, and garnishes. In Denmark, it's considered both a staple lunch food and a traditional delicacy.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sm%C3%B8rrebr%C3%B8d_Davidsen_udsnit_af_glasmontren.JPG/320px-Sm%C3%B8rrebr%C3%B8d_Davidsen_udsnit_af_glasmontren.JPG"]
  },
  {
    name: "Danish pastry",
    type: "dessert",
    description: "A multilayered, laminated sweet pastry in the viennoiserie tradition. In Denmark, it's known as wienerbrød (Viennese bread). Danish pastries have different shapes and names, and may be topped with chocolate, pearl sugar, glacé icing, and/or nuts, and stuffed with various fillings like jam, marzipan, or custard.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Glazed_apple_Danish.jpg/320px-Glazed_apple_Danish.jpg"]
  },
  {
    name: "Frikadeller",
    type: "main",
    description: "Traditional Danish meatballs made from ground pork, veal, or beef mixed with onions, eggs, milk, and breadcrumbs. They are pan-fried and typically served with boiled potatoes, gravy, and pickled red cabbage or cucumber salad. Frikadeller are a staple in Danish home cooking and are also popular in other Nordic countries.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Frikadeller.jpg/320px-Frikadeller.jpg"]
  },
  {
    name: "Rød pølse",
    type: "main",
    description: "A type of brightly red, boiled pork sausage very common in Denmark. Hot dog stands are almost everywhere in Denmark, and the rød pølse is their signature item. The sausages are typically served in a bun with various condiments such as ketchup, mustard, remoulade, and crispy fried onions.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/R%C3%B8d_p%C3%B8lse.jpg/320px-R%C3%B8d_p%C3%B8lse.jpg"]
  },
  {
    name: "Flæskesteg",
    type: "main",
    description: "The Danish version of roast pork, traditionally prepared with the rind left on the meat. The rind is scored and the roast is cooked until the rind becomes crispy crackling. It's a traditional Christmas dish in Denmark but is enjoyed year-round, typically served with boiled potatoes, gravy, and pickled red cabbage.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Fl%C3%A6skesteg.jpg/320px-Fl%C3%A6skesteg.jpg"]
  },
  {
    name: "Rugbrød",
    type: "side",
    description: "A dense, dark sourdough rye bread that is a staple in Danish cuisine. It's typically sold pre-sliced and forms the base for smørrebrød (open-faced sandwiches). Rugbrød is rich in whole grains and has a slightly sour taste. It's an essential part of the Danish diet and is consumed daily by many Danes.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Rugbr%C3%B8d.jpg/320px-Rugbr%C3%B8d.jpg"]
  },
  {
    name: "Koldskål",
    type: "dessert",
    description: "A cold buttermilk soup with vanilla and lemon, traditionally served with small cookies called kammerjunker. It's a popular summer dish in Denmark, often eaten as a dessert or light meal during hot weather. The dish has been part of Danish cuisine since the 19th century and remains a seasonal favorite.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Koldsk%C3%A5l_med_kammerjunker.jpg/320px-Koldsk%C3%A5l_med_kammerjunker.jpg"]
  },
  {
    name: "Brændende kærlighed",
    type: "main",
    description: "A traditional Danish dish consisting of mashed potatoes topped with bacon and onions, both fried. The name translates to 'burning love' in English. It's a hearty comfort food popular in Denmark, especially during the colder months, and represents the simple, rustic nature of traditional Danish cuisine.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Br%C3%A6ndende_k%C3%A6rlighed.jpg/320px-Br%C3%A6ndende_k%C3%A6rlighed.jpg"]
  },
  {
    name: "Æbleskiver",
    type: "dessert",
    description: "Traditional Danish pancake puffs, spherical in shape and similar to American pancakes but lighter in texture. They are cooked in a special pan with hemispherical indentations. Æbleskiver are traditionally served during the Christmas season, dusted with powdered sugar and accompanied by jam for dipping.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%C3%86bleskiver.jpg/320px-%C3%86bleskiver.jpg"]
  },
  {
    name: "Akvavit",
    type: "drink",
    description: "A distilled spirit that is principally produced in Scandinavia, where it has been produced since the 15th century. Akvavit is distilled from grain and potatoes, and is flavoured with various herbs, predominantly caraway or dill. It's typically consumed during festive gatherings such as Christmas and midsummer celebrations.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Aalborg_Akvavit.jpg/320px-Aalborg_Akvavit.jpg"]
  }
];
