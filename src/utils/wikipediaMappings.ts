/**
 * Mapowanie nazw atrakcji na odpowiednie tytuły artykułów na Wikipedii
 * Używane głównie dla miast azjatyckich, gdzie nazwy atrakcji mogą nie odpowiadać
 * dokładnie tytułom artykułów na Wikipedii
 */

export const attractionToWikipediaTitle: Record<string, string> = {
  // Bangkok
  'Grand Palace': 'Grand Palace (Bangkok)',
  'Wat Arun': 'Wat Arun',
  'Wat Pho': 'Wat Pho',
  'Chatuchak Weekend Market': 'Chatuchak Weekend Market',
  'Jim Thompson House': 'Jim Thompson House',
  'Chao Phraya River': 'Chao Phraya River',
  'Lumphini Park': 'Lumphini Park',
  'Chinatown (Yaowarat)': 'Yaowarat Road',
  'MBK Center': 'MBK Center',
  'Khao San Road': 'Khaosan Road',
  'Bangkok National Museum': 'Bangkok National Museum',
  'Wat Saket (Golden Mount)': 'Wat Saket',
  
  // Tokyo
  'Tokyo Skytree': 'Tokyo Skytree',
  'Senso-ji': 'Sensō-ji',
  'Meiji Shrine': 'Meiji Shrine',
  'Tokyo Tower': 'Tokyo Tower',
  'Shibuya Crossing': 'Shibuya Crossing',
  'Shinjuku Gyoen National Garden': 'Shinjuku Gyoen',
  'Tsukiji Outer Market': 'Tsukiji fish market',
  'Ueno Park': 'Ueno Park',
  'Akihabara': 'Akihabara',
  'Tokyo National Museum': 'Tokyo National Museum',
  'Harajuku': 'Harajuku',
  'Imperial Palace': 'Tokyo Imperial Palace',
  'Odaiba': 'Odaiba',
  'Ghibli Museum': 'Ghibli Museum',
  
  // Kyoto
  'Kinkaku-ji (Temple of the Golden Pavilion)': 'Kinkaku-ji',
  'Fushimi Inari Taisha': 'Fushimi Inari-taisha',
  'Arashiyama Bamboo Grove': 'Arashiyama',
  'Kiyomizu-dera': 'Kiyomizu-dera',
  'Gion District': 'Gion',
  'Nijo Castle': 'Nijō Castle',
  'Philosopher\'s Path': 'Philosopher\'s Walk',
  'Kyoto Imperial Palace': 'Kyoto Imperial Palace',
  'Sanjusangen-do': 'Sanjūsangen-dō',
  'Pontocho Alley': 'Ponto-chō',
  'Nishiki Market': 'Nishiki Market',
  'Ryoan-ji': 'Ryōan-ji',
  
  // Dodaj więcej mapowań dla innych miast azjatyckich w miarę potrzeb
};

/**
 * Funkcja zwracająca tytuł artykułu na Wikipedii dla danej nazwy atrakcji
 * @param attractionName Nazwa atrakcji
 * @returns Tytuł artykułu na Wikipedii lub oryginalną nazwę, jeśli mapowanie nie istnieje
 */
export const getWikipediaTitleForAttraction = (attractionName: string): string => {
  return attractionToWikipediaTitle[attractionName] || attractionName;
};
