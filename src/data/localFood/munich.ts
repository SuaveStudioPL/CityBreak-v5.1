import { LocalFood } from '../../types/localFood';

export const munichFood: LocalFood[] = [
  {
    name: "Weisswurst",
    type: "main",
    description: "A traditional Bavarian sausage made from minced veal and pork fatback. It is usually flavored with parsley, lemon, mace, onions, ginger, and cardamom. As they are not smoked or preserved, they are very perishable and traditionally consumed before noon. They are heated in water and served with sweet Bavarian mustard and pretzels.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wei%C3%9Fwurst-1.jpg/320px-Wei%C3%9Fwurst-1.jpg"]
  },
  {
    name: "Pretzel",
    type: "side",
    description: "A type of baked pastry made from dough that is commonly shaped into a knot. In Bavaria, lye pretzels accompany main dishes such as Weisswurst. The traditional pretzel has a distinctive symmetrical form, with a dark, crispy exterior from lye treatment and is typically sprinkled with coarse salt.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PretzelSalz02_%28cropped%29.JPG/320px-PretzelSalz02_%28cropped%29.JPG"]
  },
  {
    name: "Schweinshaxe",
    type: "main",
    description: "A roasted ham hock or pork knuckle, a traditional Bavarian dish especially popular in Munich. The meat is marinated for days before roasting at low temperature and then at high heat to produce a crispy skin. It's typically served with potato dumplings and sauerkraut or cabbage salad.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Schweinshaxe_mit_Beilagen.JPG/320px-Schweinshaxe_mit_Beilagen.JPG"]
  },
  {
    name: "Leberkäse",
    type: "main",
    description: "Despite its name meaning 'liver cheese', it contains neither liver nor cheese. It's a Bavarian meatloaf made from finely ground corned beef, pork, bacon and onions baked in a bread pan until it develops a crunchy brown crust. In Munich, it's often served hot in a roll (Leberkässemmel) as a quick snack.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Leberk%C3%A4se_angeschnitten.jpg/320px-Leberk%C3%A4se_angeschnitten.jpg"]
  },
  {
    name: "Obatzda",
    type: "appetizer",
    description: "A Bavarian cheese delicacy prepared by mixing aged soft cheese with butter, sweet or hot paprika, and various seasonings such as cumin, caraway seeds, and salt. Often garnished with onion rings and chives, it's traditionally served with pretzels and rye bread as a beer garden favorite in Munich.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Obatzda.jpg/320px-Obatzda.jpg"]
  },
  {
    name: "Knödel",
    type: "side",
    description: "Dumplings popular in Bavarian cuisine, particularly in Munich. They come in various forms, with the most common being bread dumplings (Semmelknödel) made from stale bread rolls, milk, onions, and herbs, or potato dumplings (Kartoffelknödel). They're typically served as a side dish with roast meats and gravy.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Semmelkn%C3%B6del.jpg/320px-Semmelkn%C3%B6del.jpg"]
  },
  {
    name: "Steckerlfisch",
    type: "main",
    description: "A fish grilled on a stick in the traditional way of a fisherman or camper. It is considered a speciality of Bavaria, particularly popular in Munich's beer gardens. Typically, mackerel or trout is marinated with garlic, herbs, and spices, then grilled on wooden sticks over an open fire until crispy.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Steckerlfisch.jpg/320px-Steckerlfisch.jpg"]
  },
  {
    name: "Apfelstrudel",
    type: "dessert",
    description: "A traditional pastry popular in Munich and throughout Bavaria, consisting of a thin sheet of dough wrapped around a filling of thinly sliced apples, sugar, cinnamon, raisins, and breadcrumbs. It's typically served warm with a dusting of powdered sugar and vanilla sauce or vanilla ice cream.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apfelstrudel_at_Cafe_Gloriette.jpg/320px-Apfelstrudel_at_Cafe_Gloriette.jpg"]
  },
  {
    name: "Kaiserschmarrn",
    type: "dessert",
    description: "A shredded pancake that takes its name from the Austrian emperor (Kaiser) Franz Joseph I, who was very fond of it. Popular in Munich, it's made from a sweet batter with rum-soaked raisins, caramelized, then torn into pieces while frying. It's typically served with powdered sugar and apple or plum sauce.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Kaiserschmarrn.jpg/320px-Kaiserschmarrn.jpg"]
  },
  {
    name: "Augustiner Bräu",
    type: "drink",
    description: "Munich's oldest independent brewery, established in 1328 by Augustinian monks. It's considered by many locals to be Munich's best beer and is a staple at Oktoberfest. The brewery produces several varieties, with Augustiner Helles (a pale lager) being particularly popular in the city's beer halls and gardens.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Augustiner_Br%C3%A4u_M%C3%BCnchen_Logo.svg/320px-Augustiner_Br%C3%A4u_M%C3%BCnchen_Logo.svg.png"]
  }
];
