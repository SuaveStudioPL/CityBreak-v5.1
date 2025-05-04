import React from 'react';

interface PopularCitiesProps {
  onCitySelect: (city: string) => void;
}

export const PopularCities: React.FC<PopularCitiesProps> = ({ onCitySelect }) => {
  const popularCities = [
    {
      name: 'Warsaw',
      image: 'https://public.readdy.ai/ai/img_res/fb2988e68a729e97b99bdf241d1d32a2.jpg',
    },
    {
      name: 'Krakow',
      image: 'https://public.readdy.ai/ai/img_res/d917c839261d0bca3e23fdab2cc24251.jpg',
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Popular Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularCities.map((city, index) => (
          <div
            key={index}
            onClick={() => onCitySelect(city.name)}
            className="relative group cursor-pointer overflow-hidden rounded-xl transform transition-all duration-300 hover:-translate-y-2 border-2 border-slate-600 shadow-lg hover:border-blue-400"
          >
            <div className="relative h-64">
              <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-75"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white">{city.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};