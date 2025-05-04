import { LocalFood } from '../../types/localFood';

export const singaporeFood: LocalFood[] = [
  {
    name: 'Hainanese Chicken Rice',
    description: 'Singapore\'s unofficial national dish: poached chicken with fragrant rice cooked in chicken broth, served with chili sauce, ginger paste, and dark soy sauce. The rice, cooked with chicken fat, garlic, ginger, and pandan leaves, is equally important as the perfectly poached chicken.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hainanese_Chicken_Rice.jpg/1280px-Hainanese_Chicken_Rice.jpg"]
  },
  {
    name: 'Chili crab',
    description: 'Singapore\'s iconic seafood dish with mud crabs in a thick, sweet, and savory tomato and chili sauce. Despite its name, it\'s more sweet and tangy than spicy. Typically eaten with hands and served with fried mantou (Chinese buns) for dipping in the sauce.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Chilli_crab-02.jpg/1280px-Chilli_crab-02.jpg"]
  },
  {
    name: 'Laksa',
    description: 'A spicy noodle soup combining Chinese and Malay traditions. Singapore\'s version features thick rice noodles in rich coconut broth with seafood and bean sprouts. The complex flavor comes from a spice paste of chili, turmeric, candlenuts, lemongrass, and shrimp paste.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Laksa_Lemak.JPG/1280px-Laksa_Lemak.JPG"]
  },
  {
    name: 'Char Kway Teow',
    description: 'Stir-fried flat rice noodles with dark soy sauce, chili, Chinese sausage, fishcake, bean sprouts, and seafood. Historically a laborer\'s meal, it\'s cooked in a well-seasoned wok over high heat to achieve "wok hei" – the distinctive smoky flavor.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Char_kway_teow.jpg/1280px-Char_kway_teow.jpg"]
  },
  {
    name: 'Roti Prata',
    description: 'A South Indian flatbread made by stretching dough into thin layers before cooking on a griddle with ghee. Has a crispy exterior with a soft interior. Traditional versions are served with curry, though sweet variations with toppings like banana or chocolate are also popular.',
    type: 'main',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Roti_Prata.JPG/1280px-Roti_Prata.JPG"]
  },
  {
    name: 'Satay',
    description: 'Skewered, grilled meat with spicy peanut sauce, cucumber, onions, and rice cakes. Common varieties include chicken, beef, and mutton. The meat is marinated in lemongrass, turmeric, and other spices before grilling over charcoal. A quintessential hawker center food in Singapore.',
    type: 'appetizer',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Satay_chicken.JPG/1280px-Satay_chicken.JPG"]
  },
  {
    name: 'Kaya toast',
    description: 'Singapore\'s quintessential breakfast: toasted bread with kaya (coconut-egg jam) and cold butter, served with soft-boiled eggs seasoned with soy sauce and white pepper. Traditional versions use charcoal-grilled bread, creating a distinctive aroma and texture.',
    type: 'breakfast',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kaya_toast_of_Ya_Kun_Kaya_Toast%2C_Singapore_-_20140215.jpg/1280px-Kaya_toast_of_Ya_Kun_Kaya_Toast%2C_Singapore_-_20140215.jpg"]
  },
  {
    name: 'Hokkien Mee',
    description: 'A stir-fried dish with yellow wheat noodles and rice vermicelli cooked in rich prawn-pork stock, with seafood and egg. Singapore\'s version is lighter in color than Malaysian varieties. Garnished with lime, sambal chili, and crispy pork lard for added flavor.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Hokkien_mee.JPG/1280px-Hokkien_mee.JPG"]
  },
  {
    name: 'Bak Kut Teh',
    description: 'A pork rib soup in a broth of herbs and spices, with the name meaning "meat bone tea" in Hokkien. Singapore\'s version uses a peppery broth with white pepper and garlic. Traditionally served with fried dough fritters, rice, and strong Chinese tea.',
    type: 'soup',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Bak_kut_teh.jpg/1280px-Bak_kut_teh.jpg"]
  },
  {
    name: 'Ais kacang',
    description: 'A shaved ice dessert topped with red beans, jelly, sweet corn, and palm seeds, drizzled with rose syrup, evaporated milk, and palm sugar. The name combines "ice" with the Malay word for beans. A refreshing treat popular in Singapore\'s hot climate.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ice_Kachang.JPG/1280px-Ice_Kachang.JPG"]
  }
];
