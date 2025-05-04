import React from 'react';
import { RouteView } from './components/RouteView';
import { LandingPage } from './components/LandingPage'; // Import LandingPage
import LegalPage from './components/LegalPage.tsx';
import { ErrorModal, SuccessModal } from './components/Modals';
import { useAppContext } from './context/AppContext'; // Import the context hook
import CookieBanner from './components/CookieBanner';
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

  if (showLegalPage) {
    return <LegalPage />;
  }

  return (
    <>
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
