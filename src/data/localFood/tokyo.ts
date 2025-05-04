import { LocalFood } from '../../types/localFood';

export const tokyoFood: LocalFood[] = [
  {
    name: 'Sushi',
    description: 'Vinegared rice with fresh seafood or vegetables. Tokyo-style sushi (Edomae-zushi) features slightly smaller pieces with stronger seasoning and wasabi between the fish and rice. Originated as fast food for workers using fresh fish from Tokyo Bay.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/1280px-Sushi_platter.jpg"]
  },
  {
    name: 'Ramen',
    description: 'Chinese-style wheat noodles in meat or fish broth, topped with ingredients like pork and seaweed. Tokyo is known for shoyu (soy sauce) ramen with clear brown broth and curly noodles. Each district has its own distinctive style.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1280px-Shoyu_Ramen.jpg"]
  },
  {
    name: 'Tempura',
    description: 'Seafood and vegetables lightly battered and deep-fried. Adapted by Tokyo chefs with a lighter batter to highlight fresh seafood. Served immediately after frying, either over rice or with dipping sauce made from dashi, mirin, and soy sauce.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Tempura_-_Tokyo_-_Japan.jpg/1280px-Tempura_-_Tokyo_-_Japan.jpg"]
  },
  {
    name: 'Monjayaki',
    description: 'A Tokyo-specific dish similar to okonomiyaki but with a looser consistency. Made from thin batter with cabbage and various ingredients, cooked on a hot griddle by diners themselves. Tsukishima neighborhood is known as "Monja Street" with numerous specialized restaurants.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Monjayaki.jpg/1280px-Monjayaki.jpg"]
  },
  {
    name: 'Chanko Nabe',
    description: 'A protein-rich hot pot dish famous as sumo wrestlers\' staple food, with chicken, fish, tofu, and vegetables in dashi broth. Developed in sumo stables as a nutritious way to feed wrestlers. In Tokyo\'s Ryogoku district, many chanko restaurants are run by retired wrestlers.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chankonabe_by_yoppy.jpg/1280px-Chankonabe_by_yoppy.jpg"]
  },
  {
    name: 'Tamagoyaki',
    description: 'A sweet-savory rolled omelette made by cooking thin layers of seasoned egg and rolling each layer to form a multi-layered block. In Tokyo\'s sushi restaurants, it\'s considered the ultimate test of a chef\'s skill, often served as the final piece in an omakase meal.',
    type: 'appetizer',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tamagoyaki_by_naotakem_in_Tokyo.jpg/1280px-Tamagoyaki_by_naotakem_in_Tokyo.jpg"]
  },
  {
    name: 'Tsukemen',
    description: 'A ramen dish where noodles are served separately from a concentrated dipping broth. Created in Tokyo in 1961, it features thicker noodles and intensely flavored broth—often a rich pork and fish base with soy sauce—too strong to drink as regular soup.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Tsukemen_in_Tokyo_2009.jpg/1280px-Tsukemen_in_Tokyo_2009.jpg"]
  },
  {
    name: 'Wagashi',
    description: 'Traditional Japanese confections made from ingredients like mochi, sweet bean paste, and seasonal fruits. Tokyo is famous for high-end wagashi shops where artisans create seasonal designs reflecting nature. Popular varieties include daifuku, yokan, and dorayaki.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wagashi_Asadaya-chaya_Kanazawa.jpg/1280px-Wagashi_Asadaya-chaya_Kanazawa.jpg"]
  },
  {
    name: 'Unagi',
    description: 'Freshwater eel grilled over charcoal with sweet-savory sauce. In Tokyo, it\'s prepared Kanto-style: steamed before grilling for a softer texture. Traditionally eaten in summer for stamina against heat fatigue, typically served over rice with pickles and soup.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Unajyu_by_jetalone_in_Tokyo.jpg/1280px-Unajyu_by_jetalone_in_Tokyo.jpg"]
  },
  {
    name: 'Sake',
    description: 'Japanese rice wine made by fermenting polished rice. Tokyo is a center for sake appreciation, with specialized bars offering hundreds of varieties. Traditional establishments serve it in a small cup placed inside a wooden box, with sake overflowing into the box to symbolize abundance.',
    type: 'drink',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sake_set.jpg/1280px-Sake_set.jpg"]
  }
];
