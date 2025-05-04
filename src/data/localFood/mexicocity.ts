import { LocalFood } from '../../types/localFood';

export const mexicocityFood: LocalFood[] = [
  {
    name: 'Tacos al Pastor',
    description: 'Marinated pork cooked on a vertical spit, sliced thin and served on corn tortillas with pineapple, onion, and cilantro. Inspired by Lebanese shawarma but adapted with Mexican flavors. A street food staple throughout Mexico City.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/1280px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg"]
  },
  {
    name: 'Chilaquiles',
    description: 'Fried corn tortilla pieces simmered in salsa (red or green) until slightly softened, topped with crema, cheese, onions, and often eggs or chicken. A popular breakfast dish that uses leftover tortillas, served in homes and restaurants.',
    type: 'breakfast',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2015_0724_Chilaquiles_verdes_con_pollo_y_huevo.jpg/1280px-2015_0724_Chilaquiles_verdes_con_pollo_y_huevo.jpg"]
  },
  {
    name: 'Chiles en Nogada',
    description: 'Poblano chiles stuffed with picadillo (meat, fruits, and spices), topped with walnut cream sauce and pomegranate seeds. The green chile, white sauce, and red pomegranate represent the Mexican flag. Traditionally served in August and September.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Chile_en_nogada.jpg/1280px-Chile_en_nogada.jpg"]
  },
  {
    name: 'Pozole',
    description: 'A hearty soup made with hominy corn, meat (usually pork), and red or green chile sauce. Served with garnishes like radishes, lettuce, onion, lime, and oregano. A celebratory dish often enjoyed on special occasions and weekends.',
    type: 'soup',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Pozole.jpg/1280px-Pozole.jpg"]
  },
  {
    name: 'Tlacoyos',
    description: 'Oval-shaped blue corn patties stuffed with beans, cheese, or fava beans, then topped with nopales, cheese, and salsa. A pre-Hispanic street food found at markets and from vendors throughout Mexico City, especially in the mornings.',
    type: 'main',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tlacoyos_de_frijol_y_requeson.jpg/1280px-Tlacoyos_de_frijol_y_requeson.jpg"]
  },
  {
    name: 'Torta',
    description: 'A Mexican sandwich served on a crusty roll called telera, filled with meat, cheese, avocado, and various toppings. Mexico City\'s specialty is the torta de tamal, which uniquely places an entire tamale inside the bread.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Torta_ahogada_2.jpg/1280px-Torta_ahogada_2.jpg"]
  },
  {
    name: 'Esquites',
    description: 'Corn kernels sautéed with epazote herb, then served in a cup and topped with lime juice, chile powder, salt, and mayonnaise. A popular street snack, especially in the evenings, with vendors calling "Esquites, esquites!" to attract customers.',
    type: 'snack',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Esquites.jpg/1280px-Esquites.jpg"]
  },
  {
    name: 'Mole Poblano',
    description: 'A complex sauce made with chocolate, chiles, nuts, and spices, typically served over turkey or chicken. While originating in Puebla, Mexico City restaurants offer excellent versions of this national dish that can contain over 20 ingredients.',
    type: 'main',
    isVegetarian: false,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Pollo_en_mole_-_Mayo_2019.jpg/250px-Pollo_en_mole_-_Mayo_2019.jpg"]
  },
  {
    name: 'Churro',
    description: 'Fried dough pastries dusted with cinnamon sugar and served with thick hot chocolate for dipping. In Mexico City, churrerías like El Moro have been serving this sweet treat since the early 1900s, often enjoyed as a late-night snack.',
    type: 'dessert',
    isVegetarian: true,
    isVegan: false,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Churros_con_chocolate%2C_Madrid.jpg/1280px-Churros_con_chocolate%2C_Madrid.jpg"]
  },
  {
    name: 'Pulque',
    description: 'A milky, slightly viscous traditional alcoholic beverage made from fermented agave sap. Predating tequila, this ancient drink is experiencing a revival in Mexico City\'s pulquerías, where it\'s served plain or flavored with fruits and nuts.',
    type: 'drink',
    isVegetarian: true,
    isVegan: true,
    imageUrls: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pulque_natural.jpg/1280px-Pulque_natural.jpg"]
  }
];
