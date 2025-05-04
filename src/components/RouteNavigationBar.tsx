import React from 'react';

interface NavigationButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ icon, label, onClick }) => (
  <button
    className="flex flex-col items-center justify-center text-slate-300 hover:text-blue-400 transition-colors py-2 px-1 flex-1" // Reduced horizontal padding
    onClick={onClick}
  >
    <i className={`fas ${icon} text-xl mb-1`}></i>
    <span className="text-[11px] font-medium whitespace-nowrap md:text-xs">{label}</span> {/* Added whitespace-nowrap and responsive text size */}
  </button>
);

interface RouteNavigationBarProps {
  onBack: () => void;
  onShowWeather: () => void;
  onShowFoodDrinks: () => void;
  onShowAttractions: () => void;
  onShowToilets: () => void;
}

export const RouteNavigationBar: React.FC<RouteNavigationBarProps> = ({
  onBack,
  onShowWeather,
  onShowFoodDrinks,
  onShowAttractions,
  onShowToilets,
}) => {
  const handleTicketsClick = () => {
    window.open('https://tp.media/r?marker=624726&trs=409533&p=2074&u=https%3A%2F%2Ftiqets.com&campaign_id=89', '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-[1000] shadow-lg">
      <div className="flex justify-around items-center h-16 px-2">
        <NavigationButton icon="fas fa-home" label="Home" onClick={onBack} />
        <NavigationButton icon="fas fa-cloud" label="Weather" onClick={onShowWeather} />
        <NavigationButton icon="fas fa-utensils" label="Local cuisine" onClick={onShowFoodDrinks} />
        <NavigationButton icon="fas fa-map-marker-alt" label="Attractions" onClick={onShowAttractions} />
        <NavigationButton icon="fas fa-restroom" label="Toilets" onClick={onShowToilets} />
        <NavigationButton icon="fas fa-ticket-alt" label="Entry tickets" onClick={handleTicketsClick} />
      </div>
    </div>
  );
};
