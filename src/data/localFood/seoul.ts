import { LocalFood } from '../../types/localFood';

export const seoulFood: LocalFood[] = [
  {
    name: 'Kimchi',
    description: 'Korea\'s iconic fermented vegetable dish, typically made with napa cabbage and Korean radish, seasoned with chili powder, garlic, ginger, and salted seafood. Seoul offers many varieties, from white kimchi without chili to water kimchi with refreshing broth.',
    type: 'side',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Various_kimchi.jpg/1280px-Various_kimchi.jpg"]
  },
  {
    name: 'Bibimbap',
    description: 'A rice bowl topped with arranged vegetables, meat, a fried egg, and chili pepper paste, mixed before eating. The name means "mixed rice." Dolsot bibimbap is served in a hot stone bowl creating a crispy rice crust. The dish incorporates colors representing the five elements.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/1280px-Dolsot-bibimbap.jpg"]
  },
  {
    name: 'Bulgogi',
    description: 'Thinly sliced beef marinated in soy sauce, sugar, sesame oil, and garlic, then grilled at the table. The name means "fire meat." Seoul\'s restaurants range from upscale places using premium Korean beef to casual spots serving it in hot stone bowls.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Bulgogi.jpg/1280px-Bulgogi.jpg"]
  },
  {
    name: 'Tteokbokki',
    description: 'Chewy rice cakes cooked in spicy red pepper sauce, often with fish cakes, eggs, and scallions. Originally a royal court dish with soy sauce, the spicy version emerged in the 1950s. Ubiquitous in Seoul\'s street food scene, especially in university areas and shopping districts.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tteokbokki_Myeongdong.jpg/1280px-Tteokbokki_Myeongdong.jpg"]
  },
  {
    name: 'Samgyeopsal',
    description: 'Thick, fatty slices of pork belly grilled at the table and eaten wrapped in lettuce with garlic, kimchi, and dipping sauce. The name refers to the three visible fat layers. This communal dish is central to Seoul\'s dining culture, especially for after-work gatherings.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Samgyeopsal-gui.jpg/1280px-Samgyeopsal-gui.jpg"]
  },
  {
    name: 'Gimbap',
    description: 'Seaweed rice rolls filled with vegetables, meat, or fish, sliced into bite-sized pieces. Similar to sushi rolls but with cooked ingredients. Traditional fillings include spinach, carrots, pickled radish, egg, and ham, with many variations available throughout Seoul.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Gimbap_from_Solnal.jpg/1280px-Gimbap_from_Solnal.jpg"]
  },
  {
    name: 'Naengmyeon',
    description: 'Cold buckwheat noodles in icy beef broth or with spicy sauce. Features chewy noodles garnished with beef, Korean pear, cucumber, and egg, with mustard and vinegar on the side. Originally a winter dish in northern Korea, now popular year-round in Seoul, especially in summer.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Naengmyeon_by_ayustety_in_Seoul.jpg/1280px-Naengmyeon_by_ayustety_in_Seoul.jpg"]
  },
  {
    name: 'Chimaek',
    description: 'The iconic pairing of Korean fried chicken and beer, with the name combining "chi" from chicken and "maek" from beer. Korean fried chicken is double-fried for extra crispiness and comes in varieties like soy garlic or sweet and spicy yangnyeom.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Korean_fried_chicken_3_banban.jpg/1280px-Korean_fried_chicken_3_banban.jpg"]
  },
  {
    name: 'Jjigae',
    description: 'Korean stews with various ingredients in flavorful broth, served bubbling hot in stone bowls. Popular types include kimchi jjigae, doenjang jjigae (soybean paste), sundubu jjigae (soft tofu), and budae jjigae (army stew with Spam and hot dogs).',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Budae-jjigae.jpg/1280px-Budae-jjigae.jpg"]
  },
  {
    name: 'Makgeolli',
    description: 'A milky, lightly sparkling rice wine with sweet and tangy flavor, traditionally consumed by farmers. With 6-8% alcohol content, it\'s Korea\'s oldest alcoholic beverage. Typically served in brass bowls and pairs well with pajeon (green onion pancakes), especially on rainy days.',
    type: 'drink',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Korean_rice_wine-Makgeolli-01.jpg/1280px-Korean_rice_wine-Makgeolli-01.jpg"]
  }
];
