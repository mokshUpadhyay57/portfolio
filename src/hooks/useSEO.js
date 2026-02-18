import { useEffect } from 'react';

const useSEO = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  twitterCard = 'summary_large_image' 
}) => {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = `${title} | Moksh Codes`;
    document.title = fullTitle;

    // 2. Helper to set/update meta tags
    const setMetaTag = (attr, value, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attr}="${value}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Set standard meta tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // 4. Set Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // 5. Open Graph Tags
    setMetaTag('property', 'og:title', ogTitle || fullTitle);
    setMetaTag('property', 'og:description', ogDescription || description);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', canonical);

    // 6. Twitter Card Tags
    setMetaTag('name', 'twitter:card', twitterCard);
    setMetaTag('name', 'twitter:title', ogTitle || fullTitle);
    setMetaTag('name', 'twitter:description', ogDescription || description);
    setMetaTag('name', 'twitter:image', ogImage);

  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, twitterCard]);
};

export default useSEO;
