import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt={t('footer.logoAlt')} />
        </NavLink>
        
        <div className="navbar-right">
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.home')}
            </NavLink>
            <NavLink to="/products" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.products')}
            </NavLink>
            <NavLink to="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.about')}
            </NavLink>
            <NavLink to="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
              {t('nav.contact')}
            </NavLink>
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
        <NavLink to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.home')}
        </NavLink>
        <NavLink to="/products" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.products')}
        </NavLink>
        <NavLink to="/about" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.about')}
        </NavLink>
        <NavLink to="/contact" className="mobile-link" onClick={() => setIsMenuOpen(false)}>
          {t('nav.contact')}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
