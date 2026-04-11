import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSwitcher.css';
import { DEFAULT_LANG, SUPPORTED_LANGS } from '../config/site';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang = DEFAULT_LANG } = useParams();

  const languages = [
    { code: 'uz', name: 'UZ' },
    { code: 'ru', name: 'RU' },
    { code: 'en', name: 'EN' },
  ];

  const changeLanguage = async (lng) => {
    if (!SUPPORTED_LANGS.includes(lng)) return;
    try {
      await i18n.changeLanguage(lng);
      localStorage.setItem('language', lng);
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      navigate(`/${lng}${hash}`, { replace: true });
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  return (
    <div className="language-switcher" role="navigation" aria-label="Language">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={`lang-button ${lang === item.code ? 'active' : ''}`}
          onClick={() => changeLanguage(item.code)}
          lang={item.code}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
