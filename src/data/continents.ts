export interface Continent {
  key: string;
  name: string;
  cities: string[];
}

export const continents: Continent[] = [
  {
    key: 'europe',
    name: 'Europe',
    cities: [
      'Amsterdam',
      'Athens',
      'Barcelona',
      'Bari',
      'Belgrade',
      'Berlin',
      'Bilbao',
      'Bologna',
      'Bratislava',
      'Brussels',
      'Bucharest',
      'Budapest',
      'Cagliari',
      'Copenhagen',
      'Dresden',
      'Dublin',
      'Dubrovnik',
      'Edinburgh',
      'Florence',
      'Gdansk',
      'Geneva',
      'Genoa',
      'Istanbul',
      'Krakow',
      'LasPalmas',
      'Lisbon',
      'Liverpool',
      'London',
      'Lyon',
      'Madrid',
      'Malaga',
      'Manchester',
      'Marseille',
      'Milan',
      'Munich',
      'Naples',
      'Nice',
      'Oslo',
      'Palermo',
      'Palma',
      'Paris',
      'Pisa',
      'Porto',
      'Poznan',
      'Prague',
      'Reykjavik',
      'Riga',
      'Rome',
      'Salzburg',
      'Seville',
      'Sofia',
      'Stockholm',
      'Tallinn',
      'Thessaloniki',
      'Toledo',
      'Tirana',
      'Valencia',
      'Valletta',
      'Venice',
      'Verona',
      'Vienna',
      'Vilnius',
      'Warsaw',
      'Zagreb',
      'Zurich',
      'Skopje',
      'Monaco',
      'Podgorica',
      'Ljubljana',
      'Bruges',
      'Antwerp',
      'Rotterdam',
      'The Hague'
    ]
  },
  {
    key: 'asia',
    name: 'Asia',
    cities: [
      'Bangkok',
      'Beijing',
      'Dubai',
      'Hong Kong',
      'Kuala Lumpur',
      'Kyoto',
      'Osaka',
      'Seoul',
      'Singapore',
      'Taipei',
      'Tokyo'
    ]
  },
  {
    key: 'northamerica',
    name: 'North America',
    cities: [
      'Boston',
      'New York',
      'Chicago',
      'Toronto',
      'Mexico City',
      'Quebec',
      'Ottawa',
      'San Francisco',
      'Washington',
      'Montreal',
      'Havana'
    ]
  },
  {
    key: 'southamerica',
    name: 'South America',
    cities: [
      'Santiago',
      'Cartagena',
      'Lima',
      'Quito',
      'Medellin',
      'Bogota',
      'Buenos Aires'
    ]
  },
  {
    key: 'australia',
    name: 'Australia & Oceania',
    cities: [
      'Perth',
      'Melbourne',
      'Sydney',
      'Auckland',
      'Wellington'
    ]
  }
];
