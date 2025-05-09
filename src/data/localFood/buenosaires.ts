import { LocalFood } from '../../types/localFood';

export const buenosairesFood: LocalFood[] = [
  {
    name: "Asado",
    type: "main",
    description: "The quintessential Argentine barbecue featuring various cuts of beef cooked on a parrilla (grill). In Buenos Aires, it's both a dish and a social event, typically including chorizo, morcilla (blood sausage), and organ meats alongside the beef cuts.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Asado_2005.jpg/320px-Asado_2005.jpg"]
  },
  {
    name: "Empanada",
    type: "snack",
    description: "In Buenos Aires, these savory pastries are typically filled with beef, chicken, ham and cheese, or spinach. Each filling has a distinctive repulgue (crimping pattern) to identify it. They're a popular takeaway food and appetizer before asado.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Empanada_-_Argentine.jpg/320px-Empanada_-_Argentine.jpg"]
  },
  {
    name: "Milanesa",
    type: "main",
    description: "A thin slice of beef, chicken, or veal, breaded and fried. In Buenos Aires, it's commonly served as 'milanesa a caballo' (topped with a fried egg), 'milanesa napolitana' (with ham, cheese, and tomato sauce), or in a sandwich called 'sándwich de milanesa'.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Milanesa_napolitana_con_fritas.jpg/320px-Milanesa_napolitana_con_fritas.jpg"]
  },
  {
    name: "Dulce de leche",
    type: "dessert",
    description: "A sweet caramel-like spread made by slowly heating sweetened milk. In Buenos Aires, it's used in numerous desserts including alfajores (sandwich cookies), facturas (pastries), and ice cream, or simply spread on toast for breakfast.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Dulce_de_Leche.jpg/320px-Dulce_de_Leche.jpg"]
  },
  {
    name: "Mate (drink)",
    type: "drink",
    description: "A traditional South American caffeine-rich infused drink. In Buenos Aires, it's typically prepared by filling a gourd with yerba mate leaves and hot water, then sipped through a metal straw called a bombilla. It's often shared in social gatherings.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Mate_en_calabaza.jpg/320px-Mate_en_calabaza.jpg"]
  },
  {
    name: "Pizza",
    type: "main",
    description: "Argentine pizza, influenced by Italian immigrants, has its own distinctive style in Buenos Aires. It typically has a thicker crust than Italian pizza and is generously topped with cheese. 'Fugazzeta' (with cheese and onions) is a local specialty.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fugazzeta.jpg/320px-Fugazzeta.jpg"]
  },
  {
    name: "Choripán",
    type: "sandwich",
    description: "A simple but beloved street food consisting of grilled chorizo (sausage) served on a crusty bread roll. In Buenos Aires, it's typically garnished with chimichurri (a sauce of herbs, garlic, oil, and vinegar) and is a popular pre-asado appetizer.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Choripan_con_chimichurri_-_San_Telmo%2C_Buenos_Aires.jpg/320px-Choripan_con_chimichurri_-_San_Telmo%2C_Buenos_Aires.jpg"]
  },
  {
    name: "Alfajor",
    type: "dessert",
    description: "A traditional cookie sandwich filled with dulce de leche and often coated in chocolate or powdered with sugar. In Buenos Aires, there are countless varieties, from mass-produced brands like Havanna to artisanal versions in local bakeries.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Alfajor_de_dulce_de_leche_ba%C3%B1ado_en_chocolate.jpg/320px-Alfajor_de_dulce_de_leche_ba%C3%B1ado_en_chocolate.jpg"]
  },
  {
    name: "Provoleta",
    type: "appetizer",
    description: "A dish of provolone cheese grilled until crispy on the outside and melted inside. In Buenos Aires, it's a classic starter for asado, typically seasoned with oregano and red pepper flakes, and sometimes topped with chimichurri.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Provoleta.jpg/320px-Provoleta.jpg"]
  },
  {
    name: "Fernet con Coca",
    type: "drink",
    description: "A popular alcoholic drink in Buenos Aires made by mixing Fernet Branca (a bitter Italian amaro) with Coca-Cola. It's typically served in a tall glass with ice and is considered by many to be Argentina's unofficial national cocktail.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Fernet_and_Coke_%28Fernet_con_Coca%29.jpg/250px-Fernet_and_Coke_%28Fernet_con_Coca%29.jpg"]
  }
];
