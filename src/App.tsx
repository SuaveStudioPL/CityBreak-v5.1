import React from 'react';
import { RouteView } from './components/RouteView';
import { LandingPage } from './components/LandingPage'; // Import LandingPage
import LegalPage from './components/LegalPage.tsx';
import { ErrorModal, SuccessModal } from './components/Modals';
import { useAppContext } from './context/AppContext'; // Import the context hook
import CookieBanner from './components/CookieBanner';
import SEOHead from './components/SEOHead'; // Import SEO component
import StructuredData from './components/StructuredData'; // Import structured data component
// styles import is no longer needed here as it's moved to LandingPage

const App: React.FC = () => {
  // Use state and functions from AppContext
  const {
    selectedCity,
    locationCoordinates,
    days,
    isUsingGeoLocation,
    liveUserCoordinates,
    showRouteView,
    setShowRouteView,
    showError,
    setShowError,
    showSuccess,
    setShowSuccess,
    showLegalPage,
  } = useAppContext();

  // Determine which SEO metadata to use based on current view
  let seoTitle = 'CityBreak - Your Personal Travel Guide';
  let seoDescription = 'Discover top-rated attractions with personalized 1–3 day travel routes – CityBreak builds the perfect itinerary for every traveler.';
  let canonicalPath = '/';
  let cityName = '';
  let isHomePage = true;

  if (showLegalPage) {
    seoTitle = 'Legal Information - CityBreak';
    seoDescription = 'Legal information, privacy policy, and terms of service for CityBreak - your personal travel guide.';
    canonicalPath = '/legal';
    isHomePage = false;
    return (
      <>
        <SEOHead
          title={seoTitle}
          description={seoDescription}
          canonicalPath={canonicalPath}
          isHomePage={isHomePage}
        />
        <StructuredData
          type="website"
          url="https://citybreak.world/legal"
        />
        <LegalPage />
      </>
    );
  }

  if (showRouteView) {
    seoTitle = `${selectedCity} Travel Guide - CityBreak`;
    seoDescription = `Explore ${selectedCity} with personalized ${days}-day travel routes. Find top attractions, local food, and more with CityBreak.`;
    canonicalPath = `/city/${selectedCity.toLowerCase()}`;
    cityName = selectedCity;
    isHomePage = false;
  }

  // Determine structured data type based on current view
  const structuredDataType = showRouteView ? 'cityGuide' : 'website';
  const structuredDataUrl = showRouteView
    ? `https://citybreak.world/city/${selectedCity.toLowerCase()}`
    : 'https://citybreak.world';

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={canonicalPath}
        cityName={cityName}
        isHomePage={isHomePage}
      />

      <StructuredData
        type={structuredDataType as 'website' | 'cityGuide'}
        cityName={selectedCity}
        url={structuredDataUrl}
      />

      {/* Conditional rendering based on showRouteView */}
      {showRouteView ? (
         <RouteView
           selectedCity={selectedCity} // Pass state from context
           days={days} // Pass state from context
           startLocation={locationCoordinates} // Pass initial start location
           isUsingGeoLocation={isUsingGeoLocation} // Pass geo flag
           liveUserCoordinates={liveUserCoordinates} // Pass live coords
           onBack={() => setShowRouteView(false)} // Use setter from context
         />
      ) : (
        <LandingPage /> // Render the extracted LandingPage component
      )}

      {/* Modals are rendered outside the conditional block */}
      <ErrorModal
        show={showError} // Use state from context
        onClose={() => setShowError(false)} // Use setter from context
      />

      <SuccessModal
        show={showSuccess} // Use state from context
        onClose={() => setShowSuccess(false)} // Use setter from context
      />
      <CookieBanner />
    </>
  );
};

export default App;
