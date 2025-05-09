// Plik został zreorganizowany - dane zostały przeniesione do katalogu localFood
// Importujemy dane z poszczególnych plików miast
import { LocalFood } from '../types/localFood';
import { warsawFood } from './localFood/warsaw';
import { parisFood } from './localFood/paris';
import { romeFood } from './localFood/rome';
import { krakowFood } from './localFood/krakow';
import { berlinFood } from './localFood/berlin';
import { barcelonaFood } from './localFood/barcelona';
import { budapestFood } from './localFood/budapest';
import { pragueFood } from './localFood/prague';
import { viennaFood } from './localFood/vienna';
import { bratislavaFood } from './localFood/bratislava';
import { brusselsFood } from './localFood/brussels';
import { cagliariFood } from './localFood/cagliari';
import { copenhagenFood } from './localFood/copenhagen';
import { genoaFood } from './localFood/genoa';
import { londonFood } from './localFood/london';
import { lyonFood } from './localFood/lyon';
import { madridFood } from './localFood/madrid';
import { marseilleFood } from './localFood/marseille';
import { milanFood } from './localFood/milan';
import { munichFood } from './localFood/munich';
import { bariFood } from './localFood/bari';
import { gdanskFood } from './localFood/gdansk';
import { dubrovnikFood } from './localFood/dubrovnik';
import { dublinFood } from './localFood/dublin';
import { athensFood } from './localFood/athens';
import { bilbaoFood } from './localFood/bilbao';
import { amsterdamFood } from './localFood/amsterdam';
import { belgradeFood } from './localFood/belgrade';
import { bolognaFood } from './localFood/bologna';
import { edinburghFood } from './localFood/edinburgh';
import { florenceFood } from './localFood/florence';
import { istanbulFood } from './localFood/istanbul';
import { genevaFood } from './localFood/geneva';
import { dresdenFood } from './localFood/dresden';
import { liverpoolFood } from './localFood/liverpool';
import { manchesterFood } from './localFood/manchester';
import { naplesFood } from './localFood/naples';
import { niceFood } from './localFood/nice';
import { pisaFood } from './localFood/pisa';
import { toledoFood } from './localFood/toledo';
import { salzburgFood } from './localFood/salzburg';
import { zurichFood } from './localFood/zurich';
import { veronaFood } from './localFood/verona';
import { valenciaFood } from './localFood/valencia';
import { stockholmFood } from './localFood/stockholm';
import { vallettaFood } from './localFood/valletta';
import { veniceFood } from './localFood/venice';
import { sevilleFood } from './localFood/seville';
import { malagaFood } from './localFood/malaga';
import { lisbonFood } from './localFood/lisbon';
import { portoFood } from './localFood/porto';
import { sofiaFood } from './localFood/sofia';
import { vilniusFood } from './localFood/vilnius';
import { rigaFood } from './localFood/riga';
import { tallinnFood } from './localFood/tallinn';
import { osloFood } from './localFood/oslo';
import { bucharestFood } from './localFood/bucharest';
import { poznanFood } from './localFood/poznan';
import { palermoFood } from './localFood/palermo';
import { palmaFood } from './localFood/palma';
import { laspalmasFood } from './localFood/laspalmas';
import { thessalonikiFood } from './localFood/thessaloniki';
import { tiranaFood } from './localFood/tirana';
import { zagrebFood } from './localFood/zagreb';
import { reykjavikFood } from './localFood/reykjavik';
import { havanaFood } from './localFood/havana';
import { skopjeFood } from './localFood/skopje';
import { monacoFood } from './localFood/monaco';
import { podgoricaFood } from './localFood/podgorica';
import { ljubljanaFood } from './localFood/ljubljana';
import { brugesFood } from './localFood/bruges';
import { antwerpFood } from './localFood/antwerp';
import { rotterdamFood } from './localFood/rotterdam';
import { thehagueFood } from './localFood/thehague';
import { telavivFood } from './localFood/telaviv';
import { jerusalemFood } from './localFood/jerusalem';
import { perthFood } from './localFood/perth';
import { melbourneFood } from './localFood/melbourne';
import { sydneyFood } from './localFood/sydney';
import { aucklandFood } from './localFood/auckland';
import { wellingtonFood } from './localFood/wellington';
import { santiagoFood } from './localFood/santiago';
import { cartagenaFood } from './localFood/cartagena';
import { limaFood } from './localFood/lima';
import { quitoFood } from './localFood/quito';
import { medellinFood } from './localFood/medellin';
import { bogotaFood } from './localFood/bogota';
import { buenosairesFood } from './localFood/buenosaires';


// Asian cities
import { dubaiFood } from './localFood/dubai';
import { bangkokFood } from './localFood/bangkok';
import { singaporeFood } from './localFood/singapore';
import { tokyoFood } from './localFood/tokyo';
import { osakaFood } from './localFood/osaka';
import { kyotoFood } from './localFood/kyoto';
import { seoulFood } from './localFood/seoul';
import { hongkongFood } from './localFood/hongkong';
import { beijingFood } from './localFood/beijing';
import { taipeiFood } from './localFood/taipei';
import { kualalumpurFood } from './localFood/kualalumpur';

// North America cities
import { bostonFood } from './localFood/boston';
import { newyorkFood } from './localFood/newyork';
import { chicagoFood } from './localFood/chicago';
import { torontoFood } from './localFood/toronto';
import { mexicocityFood } from './localFood/mexicocity';
import { sanfranciscoFood } from './localFood/sanfrancisco';
import { washingtonFood } from './localFood/washington';
import { montrealFood } from './localFood/montreal';
import { ottawaFood } from './localFood/ottawa';
import { quebecFood } from './localFood/quebec';

// Eksportujemy dane, aby zachować kompatybilność z resztą aplikacji
export const localFood: Record<string, LocalFood[]> = {
  Warsaw: warsawFood,
  Paris: parisFood,
  Rome: romeFood,
  Krakow: krakowFood,
  Berlin: berlinFood,
  Barcelona: barcelonaFood,
  Budapest: budapestFood,
  Prague: pragueFood,
  Vienna: viennaFood,
  Bratislava: bratislavaFood,
  Brussels: brusselsFood,
  Cagliari: cagliariFood,
  Copenhagen: copenhagenFood,
  London: londonFood,
  Lyon: lyonFood,
  Madrid: madridFood,
  Marseille: marseilleFood,
  Milan: milanFood,
  Munich: munichFood,
  Bari: bariFood,
  Gdansk: gdanskFood,
  Dubrovnik: dubrovnikFood,
  Dublin: dublinFood,
  Athens: athensFood,
  Bilbao: bilbaoFood,
  Amsterdam: amsterdamFood,
  Belgrade: belgradeFood,
  Bologna: bolognaFood,
  Edinburgh: edinburghFood,
  Florence: florenceFood,
  Genoa: genoaFood,
  Istanbul: istanbulFood,
  Geneva: genevaFood,
  Dresden: dresdenFood,
  Liverpool: liverpoolFood,
  Manchester: manchesterFood,
  Naples: naplesFood,
  Nice: niceFood,
  Pisa: pisaFood,
  Toledo: toledoFood,
  Salzburg: salzburgFood,
  Zurich: zurichFood,
  Verona: veronaFood,
  Valencia: valenciaFood,
  Zagreb: zagrebFood,
  Stockholm: stockholmFood,
  Valletta: vallettaFood,
  Venice: veniceFood,
  Seville: sevilleFood,
  Malaga: malagaFood,
  Lisbon: lisbonFood,
  Porto: portoFood,
  Sofia: sofiaFood,
  Vilnius: vilniusFood,
  Riga: rigaFood,
  Tallinn: tallinnFood,
  Oslo: osloFood,
  Bucharest: bucharestFood,
  Poznan: poznanFood,
  Palermo: palermoFood,
  Palma: palmaFood,
  LasPalmas: laspalmasFood,
  Thessaloniki: thessalonikiFood,
  Reykjavik: reykjavikFood,
  Tirana: tiranaFood,
  Havana: havanaFood,
  Skopje: skopjeFood,
  Monaco: monacoFood,
  Podgorica: podgoricaFood,
  Ljubljana: ljubljanaFood,
  Bruges: brugesFood,
  Antwerp: antwerpFood,
  Rotterdam: rotterdamFood,
  'The Hague': thehagueFood,
  'Tel Aviv': telavivFood,
  Jerusalem: jerusalemFood,
  Perth: perthFood,
  Melbourne: melbourneFood,
  Sydney: sydneyFood,
  Auckland: aucklandFood,
  Wellington: wellingtonFood,
  Santiago: santiagoFood,
  Cartagena: cartagenaFood,
  Lima: limaFood,
  Quito: quitoFood,
  Medellin: medellinFood,
  Bogota: bogotaFood,
  'Buenos Aires': buenosairesFood,

  // Asian cities
  Dubai: dubaiFood,
  Bangkok: bangkokFood,
  Singapore: singaporeFood,
  Tokyo: tokyoFood,
  Osaka: osakaFood,
  Kyoto: kyotoFood,
  Seoul: seoulFood,
  'Hong Kong': hongkongFood,
  Beijing: beijingFood,
  Taipei: taipeiFood,
  'Kuala Lumpur': kualalumpurFood,

  // North America cities
  Boston: bostonFood,
  'New York': newyorkFood,
  Chicago: chicagoFood,
  Toronto: torontoFood,
  'Mexico City': mexicocityFood,
  'San Francisco': sanfranciscoFood,
  Washington: washingtonFood,
  Montreal: montrealFood,
  Ottawa: ottawaFood,
  Quebec: quebecFood
};
