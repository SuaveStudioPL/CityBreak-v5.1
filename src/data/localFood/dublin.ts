import { LocalFood } from '../../types/localFood';

export const dublinFood: LocalFood[] = [
  {
    name: "Coddle",
    type: "main",
    description: "A traditional Irish dish particularly associated with Dublin. It most commonly consists of layers of roughly sliced pork sausages and rashers (thinly sliced, somewhat-fatty back bacon) with chunky potatoes, sliced onion, salt, pepper, and herbs. Traditionally, it can also include barley. The dish is braised in the stock produced by boiling the bacon and sausages.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Irish_Coddle.jpg/320px-Irish_Coddle.jpg"]
  },
  {
    name: "Colcannon",
    type: "side",
    description: "A traditional Irish dish of mashed potatoes with cabbage. It is most commonly made with only four ingredients: potatoes, butter, milk and cabbage. Some recipes substitute cabbage with kale. It is a popular dish on Saint Patrick's Day and on the feast day of St. Brigid, and is often eaten with boiled ham, salt pork or Irish bacon.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Colcannon.JPG/320px-Colcannon.JPG"]
  },
  {
    name: "Boxty",
    type: "side",
    description: "A traditional Irish potato pancake. The dish is mostly associated with the north midlands, north Connacht and southern Ulster, particularly counties Cavan, Fermanagh, Derry and Tyrone, but is popular throughout Dublin as well. It's made with finely grated raw potato and mashed potato with flour, buttermilk, and sometimes egg, and is typically fried in a pan.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Boxty.jpg/320px-Boxty.jpg"]
  },
  {
    name: "Irish stew",
    type: "main",
    description: "A stew native to Ireland, traditionally made with lamb or mutton, potatoes, onions, and parsley. In Dublin, it's often served with a side of soda bread. The dish has been a staple of Irish cuisine for generations, with many families having their own variations. Modern versions sometimes include carrots, turnips, and pearl barley for added flavor and texture.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Irish_stew_1.jpg/320px-Irish_stew_1.jpg"]
  },
  {
    name: "Soda bread",
    type: "bread",
    description: "A type of quick bread traditionally made in Ireland, in which sodium bicarbonate (otherwise known as baking soda) is used as a leavening agent instead of the traditional yeast. The ingredients of traditional soda bread are flour, baking soda, salt, and buttermilk. In Dublin, it's often served with Irish stew or simply with butter and jam.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Irish_soda_bread.jpg/320px-Irish_soda_bread.jpg"]
  },
  {
    name: "Barmbrack",
    type: "bread",
    description: "A yeasted bread with added sultanas and raisins. The name comes from the Irish 'báirín breac', meaning 'speckled loaf'. Traditionally eaten at Halloween in Dublin and throughout Ireland, where various items are baked into the bread as a form of fortune-telling. Finding a ring meant marriage within the year, while a coin signified wealth.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Barmbrack.jpg/320px-Barmbrack.jpg"]
  },
  {
    name: "Guinness",
    type: "drink",
    description: "A dark Irish dry stout that originated in the brewery of Arthur Guinness at St. James's Gate, Dublin, in 1759. It is one of the most successful alcohol brands worldwide, brewed in almost 50 countries, and available in over 120. In Dublin, it's often referred to as 'the black stuff' and is considered an iconic symbol of Irish culture.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Guinness.jpg/320px-Guinness.jpg"]
  },
  {
    name: "Gur cake",
    type: "dessert",
    description: "A pastry confection associated with Dublin. It consists of a filling of cake crumbs, fruit, and spices, sandwiched between two layers of pastry. The name is thought to come from the term 'gurrier', Dublin slang for a street urchin or young troublemaker, as the cake was historically a cheap treat that could be afforded by young people.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Gur_cake.jpg/320px-Gur_cake.jpg"]
  },
  {
    name: "Irish coffee",
    type: "drink",
    description: "A cocktail consisting of hot coffee, Irish whiskey, sugar, and topped with cream. The original Irish coffee was invented by Joe Sheridan, a head chef at Foynes, County Limerick, but it became internationally famous after being served at the Buena Vista Cafe in San Francisco. In Dublin, it's a popular after-dinner drink in many restaurants and pubs.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Irish_coffee_glass.jpg/320px-Irish_coffee_glass.jpg"]
  },
  {
    name: "Jameson Irish Whiskey",
    type: "drink",
    description: "A blended Irish whiskey produced by the Irish Distillers subsidiary of Pernod Ricard. Originally one of the six main Dublin whiskeys, Jameson is now distilled in Cork. However, the Jameson Experience visitor centre is located in the original Jameson Distillery in Dublin. It's triple-distilled and aged for a minimum of four years, giving it a smooth character.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Jameson_Irish_Whiskey_20cl.jpg/320px-Jameson_Irish_Whiskey_20cl.jpg"]
  }
];
