import { LocalFood } from '../../types/localFood';

export const kyotoFood: LocalFood[] = [
  {
    name: 'Kaiseki',
    description: 'A traditional multi-course Japanese dinner with precisely prepared dishes showcasing seasonal ingredients. Originating from tea ceremony meals, Kyoto\'s kaiseki evolved into Japan\'s highest culinary art form. Courses are served in dishware that complements the food and season.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Kyoto_cuisine_001.jpg/1280px-Kyoto_cuisine_001.jpg"]
  },
  {
    name: 'Yudofu',
    description: 'Hot tofu simmered in a clear kombu dashi broth, representing Kyoto\'s Buddhist vegetarian cuisine. The dish highlights Kyoto\'s exceptional tofu, made with the city\'s soft water. Traditionally served in winter with condiments like soy sauce and ginger.',
    type: 'main',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Yudofu_001.jpg/1280px-Yudofu_001.jpg"]
  },
  {
    name: 'Soba',
    description: 'Buckwheat noodles topped with sweet-simmered dried herring, reflecting Kyoto\'s history as an inland city where preserved seafood was a luxury. The herring is cooked until tender enough to eat bones and all. Popular in winter for its rich, warming flavors.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nishin_soba_001.jpg/1280px-Nishin_soba_001.jpg"]
  },
  {
    name: 'Tsukemono',
    description: 'Kyoto-style pickled vegetables with refined preparation methods and subtle flavoring. Unlike stronger pickles elsewhere, Kyoto\'s versions use less salt and unique ingredients like sake lees and cherry leaves. Famous varieties include shibazuke, senmaizuke, and sugukizuke.',
    type: 'side',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kyoto_pickles.jpg/1280px-Kyoto_pickles.jpg"]
  },
  {
    name: 'Wagashi',
    description: 'Traditional Kyoto confections reflecting seasonal motifs, originally developed for tea ceremonies. Made from plant-based ingredients like mochi rice and sweet bean paste, shaped to resemble natural elements. Famous varieties include nama-yatsuhashi, mizuame, and kinton.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Wagashi_Asadaya-chaya_Kanazawa.jpg/1280px-Wagashi_Asadaya-chaya_Kanazawa.jpg"]
  },
  {
    name: 'Obanzai',
    description: 'Kyoto\'s traditional home-style cooking featuring simple, seasonal dishes made with local vegetables. Authentic obanzai requires at least half the ingredients to be locally produced, often featuring heirloom vegetables grown in surrounding areas.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Obanzai_dishes.jpg/1280px-Obanzai_dishes.jpg"]
  },
  {
    name: 'Yatsuhashi',
    description: 'Kyoto\'s famous souvenir confection made from glutinous rice flour, sugar, and cinnamon. Available as baked triangles or raw mochi sheets folded around sweet bean paste. Named after a blind Edo-period musician whose instrument the triangular version resembles.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Yatsuhashi.jpg/1280px-Yatsuhashi.jpg"]
  },
  {
    name: 'Kyo-gashi',
    description: 'Kyoto-style confections including traditional Japanese sweets and Western-influenced treats. Made using local techniques and regional ingredients like Uji matcha. Characterized by subtle sweetness, seasonal themes, and artistic presentation.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sweets_Offering_for_Obon.jpg/960px-Sweets_Offering_for_Obon.jpg?20060814135853"]
  },
  {
    name: 'Kyo-tsukemono Sushi',
    description: 'A Kyoto specialty featuring sushi rice topped with local pickled vegetables instead of fish. The most famous variety is sabazushi (mackerel sushi), where the fish is lightly pickled for preservation. Typically pressed in wooden molds or formed into rolls.',
    type: 'main',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Suguki.jpg/1024px-Suguki.jpg"]
  },
  {
    name: 'Matcha',
    description: 'Powdered green tea central to Japanese tea ceremony, with Kyoto\'s Uji region producing top varieties. Grown under shade before harvest, then stone-ground into powder that\'s whisked with water. Used in traditional ceremonies and various culinary applications.',
    type: 'drink',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Matcha_Kyoto.jpg/1280px-Matcha_Kyoto.jpg"]
  }
];
