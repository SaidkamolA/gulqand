import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css'
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'uz', name: 'UZ' },
    { code: 'ru', name: 'RU' },
    { code: 'en', name: 'EN' }
  ];

  const changeLanguage = async (lng) => {
    try {
      await i18n.changeLanguage(lng);
      // Save selected language to localStorage
      localStorage.setItem('language', lng);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-button ${i18n.language === lang.code ? 'active' : ''}`}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher; 