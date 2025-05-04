import { LocalFood } from '../../types/localFood';

export const kualalumpurFood: LocalFood[] = [
  {
    name: 'Nasi Lemak',
    description: 'Malaysia\'s national dish of rice cooked in coconut milk and pandan leaf, served with sambal, fried anchovies, peanuts, cucumber, and boiled egg. Traditionally wrapped in banana leaf. The name means "fatty rice," referring to the richness from coconut milk.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Nasi_Lemak%2C_Mamak%2C_Sydney.jpg/1280px-Nasi_Lemak%2C_Mamak%2C_Sydney.jpg"]
  },
  {
    name: 'Char Kway Teow',
    description: 'A stir-fried flat rice noodle dish with soy sauce, chili, prawns, cockles, egg, bean sprouts, and Chinese sausage. Cooked over high heat to achieve "wok hei" (breath of the wok), a smoky flavor essential to authentic versions.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Char_kway_teow.jpg/1280px-Char_kway_teow.jpg"]
  },
  {
    name: 'Satay',
    description: 'Skewered, grilled meat served with spicy peanut sauce, cucumber, onions, and rice cakes. Common varieties include chicken, beef, and mutton, marinated in lemongrass, turmeric, and other spices before grilling over charcoal.',
    type: 'appetizer',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Satay_chicken.JPG/1280px-Satay_chicken.JPG"]
  },
  {
    name: 'Roti Canai',
    description: 'A flaky flatbread made by repeatedly folding dough greased with ghee, creating multiple layers. Cooked on a griddle until crispy outside while soft inside. Traditionally served with dal or curry for dipping. Common at mamak stalls that often operate 24 hours.',
    type: 'breakfast',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Roti_Prata.JPG/1280px-Roti_Prata.JPG"]
  },
  {
    name: 'Bak Kut Teh',
    description: 'A pork rib soup simmered with herbs and spices including star anise, cinnamon, and garlic. The name means "meat bone tea," referring to the tea served alongside to cut the richness. Kuala Lumpur\'s version is darker and more herbal than Singapore\'s peppery variety.',
    type: 'soup',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bak_kut_teh.jpg/1280px-Bak_kut_teh.jpg"]
  },
  {
    name: 'Curry Laksa',
    description: 'A spicy noodle soup with thick wheat noodles or rice vermicelli in a coconut-based curry broth, topped with tofu puffs, fish balls, shrimp, and bean sprouts. Kuala Lumpur\'s version uses a lighter broth than other regional varieties.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Laksa_Lemak.JPG/1280px-Laksa_Lemak.JPG"]
  },
  {
    name: 'Cendol',
    description: 'A sweet, iced dessert with green rice flour jelly noodles, coconut milk, palm sugar syrup, and red beans. The green color comes from pandan leaf juice. Popular during hot afternoons, with the best versions using high-quality palm sugar and fresh coconut milk.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Cendol_in_Melaka.jpg/1280px-Cendol_in_Melaka.jpg"]
  },
  {
    name: 'Hokkien Mee',
    description: 'Thick yellow noodles braised in dark soy sauce with pork, squid, fish cake, cabbage, and crispy pork lard. Kuala Lumpur\'s version differs from lighter regional varieties. Traditionally cooked over high heat for a distinctive smoky flavor.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hokkien_mee_KL_style.jpg/1280px-Hokkien_mee_KL_style.jpg"]
  },
  {
    name: 'Nasi Kandar',
    description: 'Steamed rice served with various curries and side dishes. Customers select their combination, which might include beef rendang, fried chicken, or curried mutton, topped with mixed curry sauces called "banjir" (flooding). Developed among Tamil Muslim immigrants.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Nasi_kandar.jpg/1280px-Nasi_kandar.jpg"]
  },
  {
    name: 'Teh Tarik (drink)',
    description: 'A hot milk tea made by pouring between two vessels from a height, creating a frothy top. The name means "pulled tea" in Malay. Uses strong black tea and condensed milk. At mamak stalls, vendors perform elaborate pulling techniques, sometimes incorporating acrobatic elements.',
    type: 'drink',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Teh_C_Peng.jpg/250px-Teh_C_Peng.jpg"]
  }
];
