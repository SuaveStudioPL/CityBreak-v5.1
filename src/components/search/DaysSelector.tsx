import React from 'react';
import { useAppContext } from '../../context/AppContext';

/**
 * Component for selecting the number of days for the trip
 */
export const DaysSelector: React.FC = () => {
  const { days, setDays } = useAppContext();

  return (
    <div>
      <label className="block text-purple-200 mb-2">Number of Days</label>
      <div className="flex gap-4">
        {[1, 2, 3].map((value) => (
          <button
            key={value}
            onClick={() => setDays(value)}
            className={`px-3 py-2 md:px-6 md:py-3 rounded-xl text-white transition-all border-2 ${
              days === value
                ? 'bg-gradient-to-br from-[rgba(0,140,255,0.678)] to-[rgba(128,0,128,0.308)] border-blue-400'
                : 'bg-slate-800 hover:bg-slate-700 border-slate-600'
            }`}
          >
            {value} {value === 1 ? 'day' : 'days'}
          </button>
        ))}
      </div>
    </div>
  );
};
