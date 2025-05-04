import { LocalFood } from '../../types/localFood';

export const athensFood: LocalFood[] = [
  {
    name: "Souvlaki",
    type: "main",
    description: "A Greek food item consisting of small pieces of meat and sometimes vegetables grilled on a skewer. It is usually eaten straight off the skewer while still hot. It can be served with or inside a rolled pita, typically with lemon, sauces, vegetables such as sliced tomato and onion, and fried potatoes as a side. In Athens, it's commonly known as kalamaki (meaning 'small reed' or 'little straw').",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Souvlaki_in_Athens.JPG/320px-Souvlaki_in_Athens.JPG"]
  },
  {
    name: "Moussaka",
    type: "main",
    description: "An eggplant or potato-based dish, often including ground meat, which is common in the Balkans and the Middle East. The modern Greek variant was created in the 1920s by Nikolaos Tselementes. It includes layers of meat and eggplant topped with a béchamel sauce and baked. In Greece, the dish is layered and typically served hot.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Moussaka.jpg/320px-Moussaka.jpg"]
  },
  {
    name: "Tzatziki",
    type: "appetizer",
    description: "A dip or sauce made of yogurt mixed with cucumbers, garlic, salt, olive oil, and sometimes lemon juice, and dill or mint or parsley. It is a popular appetizer in Athens and throughout Greece, typically served with bread as part of a mezze or as a side dish to grilled meats. It's also commonly used as a condiment for souvlaki and gyros.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Tzatziki.jpg/320px-Tzatziki.jpg"]
  },
  {
    name: "Gyros",
    type: "main",
    description: "Meat cooked on a vertical rotisserie, then sliced and served wrapped or stuffed in pita bread, along with other ingredients such as tomato, onion, and tzatziki sauce. In Athens, it's a popular street food, with numerous shops specializing in this dish. The meat is traditionally pork or chicken in Greece, though beef and lamb may also be used.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Pork_Gyros.jpg/320px-Pork_Gyros.jpg"]
  },
  {
    name: "Spanakopita",
    type: "appetizer",
    description: "A savory Greek pastry made with phyllo dough filled with spinach and feta cheese. It can be made as a large pie and cut into individual portions or rolled into individual triangular servings. In Athens, it's commonly found in bakeries and is eaten as a snack or light meal. The filling may also include herbs like dill and spring onions.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Spanakopita.jpg/320px-Spanakopita.jpg"]
  },
  {
    name: "Dolmades",
    type: "appetizer",
    description: "Grape leaves stuffed with rice, pine nuts, and herbs, sometimes including minced meat. They are usually served warm or at room temperature, often as part of a mezze platter. In Athens, they're a traditional dish found in tavernas and homes alike. The vegetarian version is common during fasting periods in the Greek Orthodox tradition.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Dolma_Azerbaijani.JPG/320px-Dolma_Azerbaijani.JPG"]
  },
  {
    name: "Ouzo",
    type: "drink",
    description: "An anise-flavored aperitif that is widely consumed in Greece. It is a dry alcoholic beverage that turns milky white when mixed with water. In Athens, it's traditionally served with mezze dishes in tavernas and ouzeris (specialized ouzo restaurants). It's often enjoyed as part of a leisurely social gathering, especially during summer months.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Ouzo_Sans_Rival_Bottle.jpg/250px-Ouzo_Sans_Rival_Bottle.jpg"]
  },
  {
    name: "Baklava",
    type: "dessert",
    description: "A rich, sweet pastry made of layers of phyllo dough filled with chopped nuts and sweetened with syrup or honey. It's a popular dessert in Athens and throughout Greece, often served at special occasions and holidays. The Greek version typically uses walnuts, cinnamon, and cloves, distinguishing it from other regional variations.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Baklava_-_Turkish_special%2C_80-ply.JPEG/320px-Baklava_-_Turkish_special%2C_80-ply.JPEG"]
  },
  {
    name: "Horiatiki",
    type: "salad",
    description: "The traditional Greek salad, also known as 'village salad' or 'country salad'. It consists of tomatoes, cucumbers, onion, feta cheese, and olives, dressed with olive oil and sometimes vinegar, and sprinkled with oregano. In Athens, it's a staple in tavernas and restaurants, especially during summer when fresh vegetables are abundant.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Greek_Salad_%28Horiatiki%29.jpg/320px-Greek_Salad_%28Horiatiki%29.jpg"]
  },
  {
    name: "Retsina",
    type: "drink",
    description: "A Greek white (or rosé) resinated wine that has been made for at least 2,000 years. It is flavored with pine resin, giving it a distinctive taste. In Athens, it's traditionally served with Greek cuisine in tavernas. Despite its ancient origins, modern retsina is often lighter and more approachable than its historical counterparts.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Retsina.jpg/320px-Retsina.jpg"]
  }
];
