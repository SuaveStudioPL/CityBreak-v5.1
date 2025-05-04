import { LocalFood } from '../../types/localFood';

export const parisFood: LocalFood[] = [
  {
    name: "Croissant",
    type: "breakfast",
    description: "A buttery, flaky, viennoiserie pastry inspired by the shape of the Austrian kipferl, but using the French yeast-leavened laminated dough. A staple of Parisian breakfast culture.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/320px-2018_01_Croissant_IMG_0685.JPG"]
  },
  {
    name: "Baguette",
    type: "bread",
    description: "A long, thin type of bread of French origin that is commonly made from basic lean dough. It is distinguishable by its length and crisp crust, and is a symbol of French culture and cuisine.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Baguettes_-_Paris%2C_France_-_panoramio.jpg/320px-Baguettes_-_Paris%2C_France_-_panoramio.jpg"]
  },
  {
    name: "Crème brûlée",
    type: "dessert",
    description: "A rich custard base topped with a layer of hardened caramelized sugar. It is normally served slightly chilled and is one of the most famous French desserts worldwide.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cr%C3%A8me_br%C3%BBl%C3%A9e_Doi_Mae_Salong_%28cropped%29.jpg/320px-Cr%C3%A8me_br%C3%BBl%C3%A9e_Doi_Mae_Salong_%28cropped%29.jpg"]
  },
  {
    name: "Ratatouille",
    type: "main",
    description: "A French Provençal dish of stewed vegetables that originated in Nice. Common ingredients include tomato, garlic, onion, courgette, aubergine, and bell pepper, with herbs common to the region.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Ratatouille_001.jpg/320px-Ratatouille_001.jpg"]
  },
  {
    name: "Coq au vin",
    type: "main",
    description: "A French dish of chicken braised with wine, lardons, mushrooms, and optionally garlic. A red Burgundy wine is typically used, though many regions of France make variants using local wines.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Gourmet_coq_au_vin.jpg/320px-Gourmet_coq_au_vin.jpg"]
  },
  {
    name: "Macaron",
    type: "dessert",
    description: "A sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food coloring. The macaron is commonly filled with ganache, buttercream, or jam filling sandwiched between two cookies.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Macarons%2C_French_made_mini_cakes.jpg/320px-Macarons%2C_French_made_mini_cakes.jpg"]
  },
  {
    name: "Éclair",
    type: "dessert",
    description: "An oblong pastry made with choux dough filled with a cream and topped with chocolate icing. The dough is piped into an oblong shape and baked until crisp and hollow inside.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Eclairs_with_chocolate_icing_at_Fauchon.jpg/320px-Eclairs_with_chocolate_icing_at_Fauchon.jpg"]
  },
  {
    name: "Soupe à l'oignon",
    type: "soup",
    description: "French onion soup based on meat stock and onions, often served gratinéed with croutons and cheese on top. Dating back to Roman times, this dish was traditionally a peasant food, but became a staple in Parisian bistros.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Soupe_a_l%27oignon_1.jpg/320px-Soupe_a_l%27oignon_1.jpg"]
  },
  {
    name: "Quiche Lorraine",
    type: "appetizer",
    description: "A savory open flan consisting of pastry crust filled with a mixture of eggs, cream, and bacon. Originally from the Lorraine region, it has become a classic dish served in Parisian cafés and bistros.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Quiche-1.jpg/320px-Quiche-1.jpg"]
  },
  {
    name: "Champagne",
    type: "drink",
    description: "A sparkling wine produced from grapes grown in the Champagne region of France following rules that demand specific vineyard practices, sourcing of grapes, and pressing methods. It's the celebratory drink of Paris.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Champagne_in_glass.jpg/320px-Champagne_in_glass.jpg"]
  }
];
