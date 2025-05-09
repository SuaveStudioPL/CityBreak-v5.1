import { LocalFood } from '../../types/localFood';

export const brugesFood: LocalFood[] = [
  {
    name: "Flemish stew",
    type: "main",
    description: "A traditional Belgian beef and beer stew known in Dutch as 'stoofvlees' or 'stoverij' and in French as 'carbonnade flamande.' It's made with beef, onions, Belgian beer, and bread spread with mustard. The beer used is typically a dark Flemish ale, giving the stew its distinctive rich flavor.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Carbonade_flamande.jpg/320px-Carbonade_flamande.jpg"]
  },
  {
    name: "Moules-frites",
    type: "main",
    description: "A popular Belgian dish consisting of mussels cooked in white wine, garlic, and herbs, served with crispy fries. It's considered one of Belgium's national dishes and is particularly popular in Bruges, where fresh mussels from the North Sea are readily available.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Moules_at_Chez_Leon_in_Brussels.jpg/320px-Moules_at_Chez_Leon_in_Brussels.jpg"]
  },
  {
    name: "Belgian waffle",
    type: "dessert",
    description: "A light, crisp waffle with deep pockets, traditionally served with powdered sugar, whipped cream, or fruit. In Belgium, there are two main types: the Brussels waffle (rectangular with deeper pockets) and the Liège waffle (rounded with caramelized sugar).",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Waffles_with_strawberries_and_confectioner%27s_sugar.jpg/320px-Waffles_with_strawberries_and_confectioner%27s_sugar.jpg"]
  },
  {
    name: "Waterzooi",
    type: "soup",
    description: "A creamy Belgian stew traditionally made with fish (though chicken is now common), vegetables, and herbs. The name comes from the Dutch 'zooien,' meaning 'to boil.' While it originated in Ghent, it's popular throughout Belgium, including Bruges.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Waterzooi.jpg/320px-Waterzooi.jpg"]
  },
  {
    name: "Speculoos",
    type: "dessert",
    description: "Traditional spiced shortcrust biscuits from Belgium, typically baked for consumption around St Nicholas' feast (December 6). They're thin, crunchy, and flavored with spices like cinnamon, nutmeg, cloves, ginger, cardamom, and white pepper.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Speculoos_-_Biscoff_-_Lotus_Bakeries.jpg/320px-Speculoos_-_Biscoff_-_Lotus_Bakeries.jpg"]
  },
  {
    name: "Stoemp",
    type: "side",
    description: "A Flemish dish of pureed or mashed potatoes mixed with other vegetables such as carrots, leeks, onions, or cabbage. Often served with sausage or bacon, it's a hearty comfort food popular in Bruges and throughout Belgium, especially during winter months.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Stoemp.jpg/320px-Stoemp.jpg"]
  },
  {
    name: "Croquette",
    type: "appetizer",
    description: "Belgian shrimp croquettes (croquettes aux crevettes/garnaalkroketten) are a traditional delicacy. They have a thick, creamy béchamel filling mixed with grey North Sea shrimp, breaded and deep-fried to a golden crisp. A popular starter in Bruges restaurants.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Garnalenkroketten.jpg/320px-Garnalenkroketten.jpg"]
  },
  {
    name: "Belgian endive",
    type: "vegetable",
    description: "Known as 'witloof' in Flemish, this bitter leafy vegetable is often braised and served with ham and cheese sauce (witloof in de oven). The endive is grown in darkness to keep its characteristic white color and is a staple in Belgian cuisine.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Witloof.jpg/320px-Witloof.jpg"]
  },
  {
    name: "Trappist beer",
    type: "drink",
    description: "Authentic Trappist beers are brewed within the walls of a Trappist monastery under the supervision of monks. Belgium has six of the world's thirteen Trappist breweries, producing renowned beers like Chimay, Orval, and Westmalle, which are popular in Bruges.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Chimay_Red_Cap.jpg/320px-Chimay_Red_Cap.jpg"]
  },
  {
    name: "Belgian chocolate",
    type: "dessert",
    description: "Belgian pralines are chocolate shells with soft fillings, invented by Jean Neuhaus in 1912. Bruges has numerous chocolatiers creating handmade pralines with fillings like ganache, marzipan, or liqueurs. Belgian chocolate is known for its high cocoa content and quality.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Belgian_chocolate_assortment.jpg/320px-Belgian_chocolate_assortment.jpg"]
  }
];
