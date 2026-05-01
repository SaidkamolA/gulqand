import i18n from '../i18n';

export const getInitialLanguage = () => {
  return localStorage.getItem('language') || 'uz';
};

export const changeLanguage = async (lang) => {
  try {
    await i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
    return true;
  } catch (error) {
    console.error('Error changing language:', error);
    return false;
  }
}; 