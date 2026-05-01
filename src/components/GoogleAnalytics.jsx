import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

/**
 * GA4 — set REACT_APP_GA_MEASUREMENT_ID (e.g. G-XXXXXXXXXX) in Vercel environment variables.
 */
function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined') return;

    const pagePath = location.pathname + location.search + location.hash;

    const sendPageView = () => {
      if (!window.gtag) return;
      window.gtag('config', GA_ID, {
        page_path: pagePath,
      });
    };

    if (window.gtag) {
      sendPageView();
      return undefined;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.onload = () => {
      window.gtag('js', new Date());
      window.gtag('config', GA_ID, { send_page_view: false });
      sendPageView();
    };
    document.head.appendChild(script);

    return undefined;
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default GoogleAnalytics;
