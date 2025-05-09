import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  cityName?: string;
  isHomePage?: boolean;
}

/**
 * Component to dynamically update document head with SEO metadata
 */
export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'CityBreak - Your Personal Travel Guide',
  description = 'Explore cities around the world with CityBreak. Find attractions, local food, public transport routes, and more.',
  canonicalPath = '',
  cityName,
  isHomePage = false,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update canonical URL
    let canonicalUrl = `https://citybreak.world${canonicalPath}`;
    
    // For city pages, ensure consistent URL format
    if (cityName && !isHomePage) {
      canonicalUrl = `https://citybreak.world/city/${cityName.toLowerCase()}`;
    }

    // Find existing canonical tag or create a new one
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update Twitter tags
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', canonicalUrl);
    }

    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }

    // Clean up function
    return () => {
      // No cleanup needed as we're just updating existing tags
    };
  }, [title, description, canonicalPath, cityName, isHomePage]);

  // This component doesn't render anything visible
  return null;
};

export default SEOHead;
