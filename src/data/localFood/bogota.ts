import { LocalFood } from '../../types/localFood';

export const bogotaFood: LocalFood[] = [
  {
    name: "Ajiaco",
    type: "soup",
    description: "A hearty soup native to Bogotá, made with three types of potatoes, corn on the cob, and guascas (a local herb). It's typically served with capers, cream, avocado, and shredded chicken on the side, allowing diners to add them to taste.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ajiaco.jpg/320px-Ajiaco.jpg"]
  },
  {
    name: "Chocolate santafereño",
    type: "drink",
    description: "A traditional Bogotá breakfast drink consisting of hot chocolate served with cheese that's meant to be dipped into the drink. It's typically accompanied by bread or almojábanas (cheese bread) and is especially popular in the city's historic cafés.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg/250px-Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_%285617496209%29.jpg"]
  },
  {
    name: "Tamale",
    type: "main",
    description: "In Bogotá, tamales are made with corn dough filled with chicken, pork, vegetables, and spices, all wrapped in plantain leaves and steamed. The 'tamal bogotano' is larger than other Colombian versions and is a traditional breakfast item.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tamal_tolimense.jpg/320px-Tamal_tolimense.jpg"]
  },
  {
    name: "Arepa",
    type: "side",
    description: "In Bogotá, arepas are typically thinner than in other regions and made from yellow corn. 'Arepa de choclo' (sweet corn arepa with cheese) and 'arepa boyacense' (filled with cheese) are particularly popular varieties in the capital.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arepa_de_choclo_colombiana.jpg/320px-Arepa_de_choclo_colombiana.jpg"]
  },
  {
    name: "Changua",
    type: "soup",
    description: "A traditional breakfast soup from the Andean region of Colombia. In Bogotá, it's made with milk, water, scallions, and eggs (which are poached directly in the broth). It's typically served with cilantro and stale bread or almojábanas.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Changua_colombiana.jpg/320px-Changua_colombiana.jpg"]
  },
  {
    name: "Fritanga",
    type: "main",
    description: "A mixed platter of grilled and fried meats including chicharrón (fried pork belly), morcilla (blood sausage), chorizo, and various organ meats. In Bogotá, it's typically served with arepas, potatoes, and ají, especially at weekend gatherings.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fritanga_bogotana.jpg/320px-Fritanga_bogotana.jpg"]
  },
  {
    name: "Aguapanela",
    type: "drink",
    description: "A traditional Colombian beverage made by dissolving panela (unrefined cane sugar) in hot water. In Bogotá's cold climate, it's often served hot with cheese for dipping or with lemon as a remedy for colds, but can also be served cold.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Aguapanela_con_queso_y_almojabana.jpg/320px-Aguapanela_con_queso_y_almojabana.jpg"]
  },
  {
    name: "Almojábana",
    type: "bread",
    description: "A traditional Colombian cheese bread made with corn flour and cuajada cheese. In Bogotá, these small, round breads are a popular breakfast item, typically served warm alongside hot chocolate or aguapanela for dipping.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Almojabanas_colombianas.jpg/320px-Almojabanas_colombianas.jpg"]
  },
  {
    name: "Oblea",
    type: "dessert",
    description: "A popular street dessert in Bogotá consisting of two large, thin wafers sandwiched together with various sweet fillings. Traditional toppings include arequipe (caramel), jam, condensed milk, and grated cheese, often combined in one oblea.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Oblea_con_arequipe.jpg/320px-Oblea_con_arequipe.jpg"]
  },
  {
    name: "Canelazo",
    type: "drink",
    description: "A hot alcoholic beverage popular in Bogotá's cold climate. It's made with aguardiente (sugar cane alcohol), panela, cinnamon, and cloves. During December's Christmas markets and celebrations, it's a favorite drink to warm up in the chilly Andean nights.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Canelazo.jpg/320px-Canelazo.jpg"]
  }
];
