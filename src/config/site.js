/** Site-wide business constants for SEO and structured data */

export const SITE = {
  name: 'Gulqand',
  legalName: 'Gulqand',
  phoneE164: '+998951443900',
  phoneDisplay: '+998 95 144 39 00',
  email: 'gulqand@email.com',
  telegram: 'https://t.me/gulqand',
  address: {
    streetAddress: '31 Babakhanov Street',
    addressLocality: 'Salar, Kibray District',
    addressRegion: 'Tashkent Region',
    postalCode: '111200',
    addressCountry: 'UZ',
  },
  geo: {
    latitude: 41.362959,
    longitude: 69.356803,
  },
  openingHoursSpecification: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  sameAs: ['https://t.me/gulqand'],
};

export const SUPPORTED_LANGS = ['uz', 'ru', 'en'];
export const DEFAULT_LANG = 'uz';

/** BCP 47 html lang + OpenGraph locale */
export const LOCALE_MAP = {
  uz: { htmlLang: 'uz-UZ', ogLocale: 'uz_UZ', hreflang: 'uz-UZ' },
  ru: { htmlLang: 'ru-RU', ogLocale: 'ru_RU', hreflang: 'ru-RU' },
  en: { htmlLang: 'en-US', ogLocale: 'en_US', hreflang: 'en-US' },
};

/**
 * Canonical site origin (no trailing slash).
 * On Vercel set: REACT_APP_SITE_URL=https://gulqand.vercel.app
 * Falls back to current origin in the browser (localhost in dev).
 */
export function getSiteUrl() {
  const env = typeof process !== 'undefined' && process.env.REACT_APP_SITE_URL;
  if (env) return env.replace(/\/$/, '');
  if (typeof window !== 'undefined' && window.location?.origin) return window.location.origin;
  return 'https://gulqand.vercel.app';
}
