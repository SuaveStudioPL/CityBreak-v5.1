import React from 'react';
import { SearchModule } from './search/SearchModule';
import { useAppContext } from '../context/AppContext';
import styles from './Logo.module.css'; 

export const LandingPage: React.FC = () => {
  const { setShowLegalPage } = useAppContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-4">
          <h1 className="mb-2">
            <img src="/icons/CityBreak.png" alt="CityBreak" className={styles.logoLarge} />
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          Discover top-rated attractions with personalized 1–3 day travel routes – CityBreak builds the perfect itinerary for every traveler.
          </p>
        </div>

        {/* SearchModule now uses context, no props needed */}
        <SearchModule />

        {/* Footer Links */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-purple-200 text-sm space-x-4">
          <button onClick={() => setShowLegalPage(true)} className="hover:underline">Privacy Policy</button>
          <span>|</span>
          <button onClick={() => setShowLegalPage(true)} className="hover:underline">Terms of Use</button>
          <span>|</span>
          <button onClick={() => setShowLegalPage(true)} className="hover:underline">Copyright Notice</button>
        </div>
      </div>
    </div>
  );
};
