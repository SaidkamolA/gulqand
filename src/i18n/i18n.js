import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uz from './locales/uz';
import ru from './locales/ru';
import en from './locales/en';

// Prefer URL prefix /uz /ru /en so shared links open in the correct language
const pathMatch =
  typeof window !== 'undefined' && window.location.pathname.match(/^\/(uz|ru|en)(\/|$)/);
const pathLang = pathMatch && pathMatch[1];
const savedLanguage = pathLang || localStorage.getItem('language') || 'uz';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz,
      ru,
      en
    },
    lng: savedLanguage, // Use saved language or default to 'uz'
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false
    }
  });

export default i18n; 