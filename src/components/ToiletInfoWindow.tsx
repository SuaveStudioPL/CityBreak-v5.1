import React from 'react';
import { Toilet } from '../services/ToiletService';

interface ToiletInfoWindowProps {
  isOpen: boolean;
  toilet: Toilet;
  onClose: () => void;
  onGetWalkingDirections: () => void;
  isLoadingDirections: boolean;
  walkingDirections: {
    distance: string;
    duration: string;
  } | null;
  directionsError: string | null;
}

const ToiletInfoWindow: React.FC<ToiletInfoWindowProps> = ({
  isOpen,
  toilet,
  onClose,
  onGetWalkingDirections,
  isLoadingDirections,
  walkingDirections,
  directionsError
}) => {
  if (!isOpen) return null;

  return (
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden w-64 max-w-[80vw] sm:w-80 sm:max-w-[320px] md:max-w-[350px] transition-all duration-300">
      <div className="p-2.5 sm:p-4">
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-white truncate pr-2">{toilet.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
          {/* Removed address section as requested */}

          {toilet.openingHours && (
            <div className="flex items-start">
              <i className="fas fa-clock text-blue-400 mt-1 mr-3 flex-shrink-0"></i>
              <p className="break-words">{toilet.openingHours}</p>
            </div>
          )}

          {toilet.fee && (
            <div className="flex items-start">
              <i className="fas fa-coins text-blue-400 mt-1 mr-3 flex-shrink-0"></i>
              <p className="break-words">{toilet.fee}</p>
            </div>
          )}

          {toilet.access && (
            <div className="flex items-start">
              <i className="fas fa-user-lock text-blue-400 mt-1 mr-3 flex-shrink-0"></i>
              <p className="break-words">{toilet.access}</p>
            </div>
          )}

          {toilet.description && (
            <div className="flex items-start">
              <i className="fas fa-info-circle text-blue-400 mt-1 mr-3 flex-shrink-0"></i>
              <p className="break-words">{toilet.description}</p>
            </div>
          )}
        </div>

        <div className="mt-3 sm:mt-4">
          <button
            onClick={onGetWalkingDirections}
            disabled={isLoadingDirections}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          >
            {isLoadingDirections ? (
              <span className="flex items-center justify-center">
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Getting directions...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <i className="fas fa-walking mr-2"></i>
                Get walking directions
              </span>
            )}
          </button>
        </div>

        {walkingDirections && (
          <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gray-800 rounded-lg">
            <h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Walking Directions</h4>
            <div className="flex justify-between text-gray-300 text-xs sm:text-sm">
              <div className="flex items-center">
                <i className="fas fa-route text-blue-400 mr-1 sm:mr-2"></i>
                <span>{walkingDirections.distance}</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-clock text-blue-400 mr-1 sm:mr-2"></i>
                <span>{walkingDirections.duration}</span>
              </div>
            </div>
            <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-400">
              <p>Follow the blue path on the map</p>
            </div>
          </div>
        )}

        {directionsError && (
          <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-red-900 rounded-lg">
            <div className="flex items-start">
              <i className="fas fa-exclamation-triangle text-red-400 mt-1 mr-1 sm:mr-2"></i>
              <p className="text-red-100 text-xs sm:text-sm">{directionsError}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToiletInfoWindow;
