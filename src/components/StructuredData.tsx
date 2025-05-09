import React from 'react';

interface StructuredDataProps {
  type: 'website' | 'cityGuide';
  cityName?: string;
  url: string;
}

/**
 * Component to add structured data (JSON-LD) to the page
 */
const StructuredData: React.FC<StructuredDataProps> = ({ type, cityName, url }) => {
  // Base website structured data
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CityBreak',
    url: 'https://citybreak.world',
    description: 'Your personal travel guide for exploring cities around the world. Find attractions, local food, public transport routes, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://citybreak.world/city/{city}'
      },
      'query-input': 'required name=city'
    }
  };

  // City guide structured data
  const cityGuideData = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: `${cityName} Travel Guide - CityBreak`,
    description: `Explore ${cityName} with personalized travel routes. Find top attractions, local food, and more with CityBreak.`,
    url: url,
    publisher: {
      '@type': 'Organization',
      name: 'CityBreak',
      logo: {
        '@type': 'ImageObject',
        url: 'https://citybreak.world/icons/CityBreak.png'
      }
    },
    about: {
      '@type': 'City',
      name: cityName
    }
  };

  // Select the appropriate data based on type
  const structuredData = type === 'website' ? websiteData : cityGuideData;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;
