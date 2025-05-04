import { Attraction } from '../../../types/attractions';



export const lapalmaAttractions: Attraction[] = [
  {
    id: '1',
    name: 'Iglesia de El Salvador',
    description: 'Główny kościół La Palmy, zbudowany w XVI wieku w stylu renesansowym. Charakteryzuje się piękną architekturą mudéjar i barokowym wnętrzem. Kościół jest ważnym punktem orientacyjnym w historycznym centrum miasta.',
    coordinates: { lat: 28.6835, lng: -17.7644 },
    openingHours: 'Pon-Sob: 10:00-18:00, Niedz: tylko podczas nabożeństw',
    category: 'historic'
  },
  {
    id: '2',
    name: 'Plaza de España',
    description: 'Główny plac miasta La Palma, otoczony historycznymi budynkami kolonialnymi. Jest to centrum życia społecznego i kulturalnego miasta, gdzie odbywają się różne wydarzenia i festiwale.',
    coordinates: { lat: 28.6833, lng: -17.7647 },
    category: 'landmark'
  },
  {
    id: '3',
    name: 'Santuario de la Virgen de las Nieves',
    description: 'Zabytkowe sanktuarium położone na wzgórzu z widokiem na miasto. Jest to najważniejsze miejsce pielgrzymkowe na wyspie, gdzie przechowywana jest figura patronki La Palmy.',
    coordinates: { lat: 28.6953, lng: -17.7644 },
    openingHours: 'Codz: 8:00-20:00',
    category: 'historic'
  },
  {
    id: '4',
    name: 'Calle Real',
    description: 'Główna historyczna ulica La Palmy, wyłożona tradycyjnym brukiem i otoczona kolorowymi kolonialnymi fasadami. Znajdują się tu liczne sklepy, restauracje i historyczne budynki.',
    coordinates: { lat: 28.6836, lng: -17.7645 },
    category: 'historic'
  },
  {
    id: '5',
    name: 'Museo Naval',
    description: 'Muzeum morskie prezentujące bogatą historię morską La Palmy. Ekspozycja obejmuje modele statków, mapy nawigacyjne i artefakty związane z morską historią miasta.',
    coordinates: { lat: 28.6838, lng: -17.7648 },
    openingHours: 'Wt-Sob: 10:00-18:00, Niedz: 10:00-14:00',
    category: 'museum'
  }
];