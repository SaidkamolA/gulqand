import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';
import { DEFAULT_LANG } from '../config/site';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { lang = DEFAULT_LANG } = useParams();
  const base = `/${lang}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [t]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Primary">
      <div className="navbar-container">
        <Link to={base} className="navbar-logo">
          <span className="navbar-logo-motion">
            <img src={logo} alt={t('footer.logoAlt')} width={120} height={40} decoding="async" />
          </span>
        </Link>

        <div className="navbar-right">
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <a href={base} className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.home')}
            </a>
            <a href={`${base}#products`} className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.products')}
            </a>
            <a href={`${base}#about`} className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.about')}
            </a>
            <a href={`${base}#contact`} className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.contact')}
            </a>
          </div>

          <LanguageSwitcher />

          <button
            type="button"
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href={base} className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.home')}
        </a>
        <a href={`${base}#products`} className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.products')}
        </a>
        <a href={`${base}#about`} className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.about')}
        </a>
        <a href={`${base}#contact`} className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.contact')}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
