import { LocalFood } from '../../types/localFood';

export const bangkokFood: LocalFood[] = [
  {
    name: 'Pad Thai',
    description: 'Thailand\'s national dish of stir-fried rice noodles with eggs, tofu, bean sprouts, peanuts, and protein, seasoned with tamarind paste, fish sauce, and spices. The dish balances all five Thai flavors: sweet, sour, salty, spicy, and umami.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/1280px-Phat_Thai_kung_Chang_Khien_street_stall.jpg"]
  },
  {
    name: 'Tom yum kung',
    description: 'A spicy and sour shrimp soup with lemongrass, kaffir lime leaves, galangal, lime juice, fish sauce, and chili peppers. Available in both clear versions and creamy versions with coconut milk. Known for its distinctive hot and sour flavor profile.',
    type: 'soup',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Tom_yam_kung_maenam.jpg/1280px-Tom_yam_kung_maenam.jpg"]
  },
  {
    name: 'Som Tam',
    description: 'A spicy green papaya salad made by pounding shredded unripe papaya with garlic, chili, palm sugar, lime juice, fish sauce, tomatoes, and peanuts. The traditional version includes fermented fish sauce and salted crab. Often paired with sticky rice and grilled chicken.',
    type: 'appetizer',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2013_Som_Tam_Thai_Salad.jpg/1280px-2013_Som_Tam_Thai_Salad.jpg"]
  },
  {
    name: 'Massaman Curry',
    description: 'A rich, mild Thai curry with Persian influences, made with meat, potatoes, onions, peanuts, and a curry paste with unique spices like cardamom, cinnamon, and cumin. Slow-cooked in coconut milk until the meat is tender. Once named the world\'s best food by CNN.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Massaman_curry.jpg/1280px-Massaman_curry.jpg"]
  },
  {
    name: 'Mango Sticky Rice',
    description: 'A beloved Thai dessert with sweet glutinous rice soaked in coconut milk, served with fresh mango slices. The rice is steamed then soaked in sweetened coconut milk for its distinctive sticky texture. Some vendors create colorful versions using natural ingredients to dye the rice.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mango_sticky_rice.jpg/1280px-Mango_sticky_rice.jpg"]
  },
  {
    name: 'Phat kaphrao',
    description: 'A popular street food of stir-fried minced meat with holy basil, chili, and garlic, served over rice with a fried egg. Named after holy basil (krapow), which has a distinctive peppery flavor. Available with various proteins like pork, chicken, or beef.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Kaprao_moo.jpg/1280px-Kaprao_moo.jpg"]
  },
  {
    name: 'Tom Kha Gai',
    description: 'A creamy coconut soup with chicken, flavored with galangal, lemongrass, kaffir lime leaves, and lime juice. The name means "galangal chicken soup," highlighting the key ingredient that gives it a distinctive flavor. Balances rich coconut milk with sharp lime and aromatic herbs.',
    type: 'soup',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Tom_kha_gai.jpg/1280px-Tom_kha_gai.jpg"]
  },
  {
    name: 'Guay Teow (Thai Noodle Soup)',
    description: 'A ubiquitous noodle soup with countless variations. The basic version has meat broth, rice or egg noodles, meat, and toppings like bean sprouts and fried garlic. Diners customize with condiments. Specialty versions include boat noodles with rich broth and tom yum style with spicy-sour flavors.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Boat_noodles.jpg/250px-Boat_noodles.jpg"]
  },
  {
    name: 'Larb',
    description: 'A spicy minced meat salad with roasted rice powder, chili, fish sauce, lime juice, and fresh herbs. The rice powder gives it a distinctive nutty flavor and slight crunch. Typically served with sticky rice and fresh vegetables. Features a balance of spicy, sour, and savory flavors.',
    type: 'appetizer',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Larb_moo.jpg/1280px-Larb_moo.jpg"]
  },
  {
    name: 'Thai tea',
    description: 'A sweet, creamy iced tea popular throughout Bangkok. Made with strong black tea, sweetened condensed milk, and sometimes evaporated milk, giving it an orange color. Often spiced with star anise and tamarind. Traditionally served in a plastic bag with a straw for on-the-go drinking.',
    type: 'drink',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Thai_tea.jpg/1280px-Thai_tea.jpg"]
  }
];
