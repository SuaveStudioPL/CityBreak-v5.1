import React, { useState } from 'react';

interface TruncatedTextProps {
  text: string;
  maxLength: number;
  className?: string; // Allow passing custom classes
}

const TruncatedText: React.FC<TruncatedTextProps> = ({ text, maxLength, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!text) {
    return null; // Don't render anything if text is empty
  }

  const needsTruncation = text.length > maxLength;

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent clicks from bubbling up (e.g., closing InfoWindow)
    setIsExpanded(!isExpanded);
  };

  const displayText = needsTruncation && !isExpanded
    ? `${text.substring(0, maxLength)}...`
    : text;

  return (
    <span className={className}>
      {displayText}
      {needsTruncation && (
        <button
          onClick={toggleExpand}
          className="text-blue-400 hover:text-blue-300 ml-1 text-[10px] sm:text-[11px] focus:outline-none"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Show less' : 'Show more'}
        >
          {isExpanded ? '(less)' : '(more)'}
        </button>
      )}
    </span>
  );
};

export default TruncatedText;