import { LocalFood } from '../../types/localFood';

export const lyonFood: LocalFood[] = [
  {
    name: "Quenelle",
    type: "main",
    description: "A mixture of creamed fish or meat, sometimes combined with breadcrumbs, with a light egg binding, formed into an egg-like shape, and then poached. The most famous Lyon version is quenelle de brochet (pike quenelle), typically served with a rich crayfish sauce called Nantua. This dish is emblematic of Lyon's sophisticated yet rustic cuisine.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Quenelle_de_brochet_sauce_Nantua.jpg/320px-Quenelle_de_brochet_sauce_Nantua.jpg"]
  },
  {
    name: "Salade lyonnaise",
    type: "appetizer",
    description: "A traditional salad from Lyon consisting of frisée lettuce, lardons (small strips of bacon), croutons, and a poached egg, dressed with a warm vinaigrette. The hot bacon fat slightly wilts the greens, and the runny egg yolk creates a rich dressing when broken. This hearty salad exemplifies the bold, unpretentious flavors of Lyonnaise cuisine.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Salade_lyonnaise.JPG/330px-Salade_lyonnaise.JPG"]
  },
  {
    name: "Cervelle de canut",
    type: "appetizer",
    description: "A cheese spread or dip that is a specialty of Lyon, made from fromage blanc (a fresh, soft, uncured cheese) seasoned with herbs, shallots, salt, pepper, olive oil, and vinegar. The name literally means 'silk worker's brains,' referring to the canuts, Lyon's silk workers. This tangy, herb-flecked spread is typically served with boiled potatoes or spread on bread.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cervelle_de_canut.jpg/320px-Cervelle_de_canut.jpg"]
  },
  {
    name: "Andouillette",
    type: "main",
    description: "A coarse-grained sausage made from pork intestines and stomach, pepper, wine, onions, and seasonings. Lyon is famous for its high-quality andouillettes, which are typically grilled and served with mustard or a sauce made from red wine. This distinctive sausage has a strong, characteristic odor and flavor that divides opinion even among French food enthusiasts.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Andouillette_sauce_moutarde.jpg/320px-Andouillette_sauce_moutarde.jpg"]
  },
  {
    name: "Coq au vin",
    type: "main",
    description: "A French dish of chicken braised with wine, lardons, mushrooms, and garlic. While versions exist throughout France, the Lyon version traditionally uses the local Beaujolais wine rather than Burgundy. The dish originated as a way to cook tough roosters by tenderizing them in wine. In Lyon's bouchons (traditional restaurants), it's often served with potatoes or pasta.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Coq_au_vin_-_Flickr_-_cyclonebill.jpg/320px-Coq_au_vin_-_Flickr_-_cyclonebill.jpg"]
  },
  {
    name: "Tablier de sapeur",
    type: "main",
    description: "A Lyonnais specialty dish made from beef tripe, specifically the gras-double (the membrane of the rumen). The tripe is marinated in white wine, breaded, and then fried until crispy. The name means 'fireman's apron,' supposedly because Marshal Castellane, a military governor of Lyon, wore an apron similar to the shape of the prepared tripe when cooking this dish.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tablier_de_sapeur.jpg/320px-Tablier_de_sapeur.jpg"]
  },
  {
    name: "Saucisson brioché",
    type: "appetizer",
    description: "A Lyon specialty consisting of a sausage wrapped in brioche dough and baked. The contrast between the buttery, slightly sweet brioche and the savory, garlicky sausage is characteristic of Lyon's hearty cuisine. This dish is typically served warm as an appetizer in Lyon's traditional bouchons and is especially popular during the winter months.",
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Saucisson_pistach%C3%A9_en_brioche.jpg/330px-Saucisson_pistach%C3%A9_en_brioche.jpg"]
  },
  {
    name: "Praline rose",
    type: "dessert",
    description: "Pink sugar-coated almonds that are a specialty of Lyon. These candied almonds get their distinctive pink color from food coloring added to the sugar coating. They're eaten as is or crushed and used in desserts like tarte aux pralines (praline tart) or brioche aux pralines. The vibrant pink color and sweet crunch make them a beloved treat in Lyon.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Pralines_roses.jpg/960px-Pralines_roses.jpg?20060527140132"]
  },
  {
    name: "Bugnes",
    type: "dessert",
    description: "Traditional fried pastries from Lyon, similar to beignets or doughnuts. The crunchy variety, known as bugnes lyonnaises, are made from a dough flavored with orange flower water or brandy, formed into thin strips, tied in knots, deep-fried, and dusted with powdered sugar. They're particularly popular during Carnival season before Lent.",
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bugnes_lyonnaises.jpg/320px-Bugnes_lyonnaises.jpg"]
  },
  {
    name: "Beaujolais",
    type: "drink",
    description: "A light-bodied red wine made from the Gamay grape in the Beaujolais region just north of Lyon. While not produced in Lyon itself, Beaujolais is the quintessential wine of Lyon's bouchons and bistros. The wine's fruity character and low tannins make it an ideal pairing for many Lyonnaise dishes. Beaujolais Nouveau, released annually in November, is celebrated throughout Lyon.",
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Beaujolais_Nouveau_2018.jpg/320px-Beaujolais_Nouveau_2018.jpg"]
  }
];
