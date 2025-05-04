import React from 'react';

interface MapControlsProps {
  days: number;
  activeDay: number;
  showAllDays: boolean;
  onDayChange: (day: number) => void;
  onToggleAllDays: () => void;
}

export const MapControls: React.FC<MapControlsProps> = ({
  days,
  activeDay,
  showAllDays,
  onDayChange,
  onToggleAllDays
}) => {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onToggleAllDays}
        className={`px-4 py-2 rounded-lg ${showAllDays ? 'bg-green-600 text-white' : 'bg-slate-800 text-gray-300'}`}
      >
        {showAllDays ? 'Show Current Day Only' : 'Show All Days'}
      </button>
      <div className="flex gap-4">
        {Array.from({ length: days }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => onDayChange(i + 1)}
            className={`px-4 py-2 rounded-lg ${activeDay === i + 1 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-gray-300'}`}
          >
            Day {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}; 