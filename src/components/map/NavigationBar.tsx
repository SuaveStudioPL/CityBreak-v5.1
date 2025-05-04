import React from 'react';

interface NavigationButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center text-blue-400 hover:text-blue-300"
  >
    <i className={`fas ${icon} text-2xl mb-1`}></i>
    <span className="text-sm">{label}</span>
  </button>
);

interface NavigationBarProps {
  onBack: () => void;
  onToggleAttractions: () => void;
  onToggleWeather: () => void;
  onToggleFoodDrinks: () => void;
  onToggleEvents: () => void;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  onBack,
  onToggleAttractions,
  onToggleWeather,
  onToggleFoodDrinks,
  onToggleEvents
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t-2 border-slate-700 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around py-4">
          <NavigationButton icon="fa-home" label="Home" onClick={onBack} />
          <NavigationButton icon="fa-map-marker-alt" label="Attractions" onClick={onToggleAttractions} />
          <NavigationButton icon="fa-cloud-sun" label="Weather" onClick={onToggleWeather} />
          <NavigationButton icon="fa-utensils" label="Food & Drinks" onClick={onToggleFoodDrinks} />
          <NavigationButton icon="fa-calendar-alt" label="Events" onClick={onToggleEvents} />
        </div>
      </div>
    </div>
  );
}; 