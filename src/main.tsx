import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { LoadScript } from '@react-google-maps/api';
import App from './App.tsx';
import { AppProvider } from './context/AppContext'; // Import AppProvider
import { ErrorBoundary } from './components/ErrorBoundary';
import './index.css';

// Removed "localContext" as it's not a valid library type for @react-google-maps/api
const libraries: ("places" | "drawing" | "geometry" | "visualization")[] = ["places", "geometry"];

const AppWithMaps = () => {
  const [loadError, setLoadError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Add a fallback timer to detect if Google Maps fails to load due to tracking prevention
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoaded) {
        console.warn('Google Maps resources may be blocked by tracking prevention');
        setLoadError(new Error('Google Maps resources may be blocked by browser privacy settings. Try disabling tracking prevention for this site.'));
      }
    }, 5000); // 5 seconds timeout

    return () => clearTimeout(timer);
  }, [isLoaded]);

  if (loadError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl p-8 max-w-lg w-full shadow-2xl border-2 border-slate-600 text-center">
          <i className="fas fa-exclamation-triangle text-4xl text-yellow-500 mb-4"></i>
          <h1 className="text-2xl font-bold text-white mb-4">Map Loading Error</h1>
          <p className="text-gray-300 mb-6">
            {loadError.message}
          </p>
          <p className="text-gray-400 mb-6 text-sm">
            Your browser's privacy settings may be blocking resources needed by Google Maps.
            Try disabling tracking prevention for this site or use a different browser.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <i className="fas fa-redo mr-2"></i>
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
      // preventGoogleFonts // Removed prop as it's not recognized by the library type definitions
      onLoad={() => setIsLoaded(true)}
      onError={(error) => setLoadError(error)}
      loadingElement={
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
          <div className="bg-slate-800 rounded-xl p-6 shadow-xl border-2 border-slate-600">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400 mb-4 mx-auto"></div>
            <p className="text-white text-center">Loading maps...</p>
          </div>
        </div>
      }
    >
      <ErrorBoundary>
        <AppProvider> {/* Wrap App with AppProvider */}
          <App />
        </AppProvider>
      </ErrorBoundary>
    </LoadScript>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWithMaps />
  </StrictMode>
);
