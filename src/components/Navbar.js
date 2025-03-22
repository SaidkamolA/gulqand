import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрывать меню при смене языка
  useEffect(() => {
    setIsMenuOpen(false);
  }, [t]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt={t('footer.logoAlt')} />
        </a>
        
        <div className="navbar-right">
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.home')}
            </a>
            <a href="#products" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.products')}
            </a>
            <a href="#about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.about')}
            </a>
            <a href="#contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.contact')}
            </a>
          </div>
          
          <LanguageSwitcher />
          
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="#" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.home')}
        </a>
        <a href="#products" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.products')}
        </a>
        <a href="#about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.about')}
        </a>
        <a href="#contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.contact')}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
