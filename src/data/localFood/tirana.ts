import { LocalFood } from '../../types/localFood';

export const tiranaFood: LocalFood[] = [
  {
    name: 'Tavë Kosi',
    description: 'Albania\'s national dish of lamb baked with rice and yogurt custard. Meat and rice are covered with egg-yogurt mixture and baked until golden. The name means "soured milk casserole." A special occasion dish representing Albania\'s pastoral heritage.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tave_kosi.jpg/1280px-Tave_kosi.jpg"]
  },
  {
    name: 'Byrek',
    description: 'A savory pie made of thin phyllo dough filled with spinach, cheese, or meat. Popular street food in Tirana, available at specialized shops called byrektore. Typically eaten for breakfast or as a snack with dhallë (buttermilk). Distinguished by its circular shape and spiral pattern when made for families.',
    type: 'snack',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Byrek_me_spinaq.jpg/1280px-Byrek_me_spinaq.jpg"]
  },
  {
    name: 'Fërgesë',
    description: 'A rich dish of peppers, tomatoes, and cottage cheese (gjizë) or liver, baked with spices. Tirana\'s version typically includes liver and is spicier. Ingredients form a thick, creamy texture when slowly cooked. Served bubbling hot with bread for dipping, often prepared tableside in traditional restaurants.',
    type: 'main',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/6/60/Fergese-albanian-dish.jpg"]
  },
  {
    name: 'Qofte Tirane',
    description: 'Spiced meatballs from Tirana made with beef or lamb, bread crumbs, onions, garlic, mint, and parsley. Flattened into patties and grilled, served with raw onions, peppers, and yogurt-garlic sauce. Sold by street vendors as sandwiches or in restaurants as part of mezze platters.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Qofte_sht%C3%ABpie_me_l%C3%ABng.jpg/500px-Qofte_sht%C3%ABpie_me_l%C3%ABng.jpg?20240416095543g"]
  },
  {
    name: 'Speca të Mbushur',
    description: 'Bell peppers stuffed with rice, meat, herbs, and spices, then baked in tomato sauce. Typically contains beef or lamb, rice, onions, and herbs. Vegetarian versions substitute meat with more vegetables. An Ottoman-influenced dish popular in Tirana restaurants during pepper season, with each family having their own recipe.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Farshirovannyi_peretz.jpg/250px-Farshirovannyi_peretz.jpg"]
  },
  {
    name: 'Tarator',
    description: 'A cold soup of yogurt, cucumbers, garlic, olive oil, and dill, served chilled in summer. Similar to tzatziki but thinner. Popular in Tirana during hot weather and served as a starter or alongside grilled meats. Some versions include vinegar or walnuts for added flavor and texture.',
    type: 'soup',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tarator.jpg/1280px-Tarator.jpg"]
  },
  {
    name: 'Raki',
    description: 'Albania\'s national spirit made from grapes or plums (40-45% alcohol). Unlike Turkish raki, it contains no anise and stays clear with water. Often homemade and culturally significant for welcoming guests and celebrations. Served neat before meals or with mezze, with homemade versions being a source of family pride.',
    type: 'drink',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/WP_20140904_019.jpg/250px-WP_20140904_019.jpg"]
  },
  {
    name: 'Baklava',
    description: 'Sweet pastry of layered phyllo dough with nuts and honey syrup. Albanian version is less sweet than Middle Eastern ones and typically uses walnuts. Popular in Tirana during holidays like Eid al-Fitr and New Year\'s. Cut into diamond or square shapes from large trays, with the classic walnut version being most traditional.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Baklava_-_Turkish_special%2C_80-ply.JPEG/1280px-Baklava_-_Turkish_special%2C_80-ply.JPEG"]
  },
  {
    name: 'Tave Dheu',
    description: 'Traditional clay pot dish from Tirana with meat (veal or lamb), liver, and vegetables. Named "earth pot" after its cooking vessel. Contains onions, peppers, tomatoes, and herbs. Served bubbling hot in traditional restaurants as a specialty, representing Albania\'s slow-cooking tradition.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Elbasan_tav%C3%AB_me_mish_qengji.jpg/250px-Elbasan_tav%C3%AB_me_mish_qengji.jpg"]
  },
  {
    name: 'Dhallë',
    description: 'Yogurt-based drink diluted with water and salt, similar to Turkish ayran but thinner. Popular in summer and traditionally served with byrek. Available throughout Tirana at restaurants and street vendors. Valued for cooling properties and digestive benefits, with some modern versions adding mint or cucumber.',
    type: 'drink',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Ayran-Ayran.jpg/1280px-Ayran-Ayran.jpg"]
  }
];
