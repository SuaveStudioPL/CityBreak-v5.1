import { LocalFood } from '../../types/localFood';

export const osakaFood: LocalFood[] = [
  {
    name: 'Takoyaki',
    description: 'Ball-shaped snacks made of wheat flour batter filled with octopus, tempura scraps, ginger, and green onion, cooked in a special pan. Topped with sauce, mayonnaise, bonito flakes, and seaweed powder. In Osaka, it\'s considered soul food with thousands of stands throughout the city.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Takoyaki.jpg/1280px-Takoyaki.jpg"]
  },
  {
    name: 'Okonomiyaki',
    description: 'A savory pancake with various ingredients in wheat-flour batter. The name means "grilled as you like it." Osaka-style mixes all ingredients into the batter, including cabbage, green onion, and pork, topped with special sauce, mayonnaise, bonito flakes, and seaweed.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/1280px-Okonomiyaki_001.jpg"]
  },
  {
    name: 'Kushikatsu',
    description: 'Skewered meat, seafood, and vegetables breaded with panko crumbs and deep-fried. Originating in Osaka\'s Shinsekai district, it was initially working-class food. Served with a communal dipping sauce and a strict "no double-dipping" rule.',
    type: 'appetizer',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Kushikatsu_001.jpg/1280px-Kushikatsu_001.jpg"]
  },
  {
    name: 'Kitsune Udon',
    description: 'Thick wheat noodles in hot dashi broth topped with sweet fried tofu. The name "kitsune" (fox) comes from folklore that foxes love fried tofu. Osaka\'s version features sweeter, thicker tofu than found elsewhere, exemplifying the region\'s preference for sweeter flavors.',
    type: 'main',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Udon_%28Kitsune_udon%29_2.jpg/960px-Udon_%28Kitsune_udon%29_2.jpg"]
  },
  {
    name: 'Negiyaki',
    description: 'A thin, crepe-like pancake similar to okonomiyaki but with more green onions. Made with wheat flour batter and chopped green onions, sometimes with seafood or meat, then folded like a crepe. A lighter alternative to okonomiyaki, popular in summer for its refreshing taste.',
    type: 'main',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Negiyaki.jpg/1280px-Negiyaki.jpg"]
  },
  {
    name: 'Battera',
    description: 'A traditional Osaka-style pressed sushi with vinegared rice and marinated mackerel, pressed in a wooden box and cut into rectangular pieces. The name comes from Portuguese "bateira" (small boat). Unlike nigiri sushi, it\'s fully seasoned and ready to eat without soy sauce.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/330px-Sushi_platter.jpg"]
  },
  {
    name: 'Butaman',
    description: 'Steamed buns filled with seasoned minced pork, adapted to Japanese tastes. In Osaka, the most famous come from 551 Horai chain, so popular that "551" is practically synonymous with butaman in Kansai. Features thinner, softer dough than Chinese versions.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nikuman_by_typester_in_Osaka.jpg/1280px-Nikuman_by_typester_in_Osaka.jpg"]
  },
  {
    name: 'Hakozushi',
    description: 'Box-pressed sushi unique to Osaka, made by pressing rice and toppings in a wooden mold to create rectangular pieces. Unlike nigiri sushi, it\'s pressed tightly, allowing longer preservation. Often features decorative patterns with colorful ingredients.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Wikimania_Sushi.jpg/250px-Wikimania_Sushi.jpg"]
  },
  {
    name: 'Ikayaki',
    description: 'Grilled squid with soy sauce, a beloved Osaka street food. The local version is distinctive for being served between two round griddle cakes, creating a squid "sandwich." The squid is seasoned with sweet-savory sauce and cooked until tender inside the batter.',
    type: 'snack',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Ikayaki.jpg/1280px-Ikayaki.jpg"]
  },
  {
    name: 'Melonpan',
    description: 'A sweet bun with a cookie-like crust scored with lines resembling a melon\'s surface, though it typically contains no melon flavor. Osaka\'s version has a lighter, fluffier interior and crisp, sweet crust. Made from enriched dough covered with cookie dough before baking.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Melonpan.jpg/1280px-Melonpan.jpg"]
  }
];
