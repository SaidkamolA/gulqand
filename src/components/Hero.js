import React from 'react';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/hero.jpg';
import logo from '../assets/logo.png';
import '../styles/Hero.css'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section 
      className="hero" 
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${heroBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            {t('hero.title')}
          </h1>
          <p className="hero-subtitle fade-in">
            {t('hero.subtitle')}
          </p>
          <p className="hero-description">{t('hero.description')}</p>
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">🌹</span>
              <span className="feature-text">{t('hero.tradition')}</span>
            </div>
            <div className="feature">
              <span className="feature-icon">⭐</span>
              <span className="feature-text">{t('hero.quality')}</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🌿</span>
              <span className="feature-text">{t('hero.natural')}</span>
            </div>
          </div>
          <a href="#products" className="cta-button">
            {t('hero.cta')}
          </a>
        </div>
        <div className="hero-image fade-in">
          <div className="rose-logo spin-in">
            <img 
              src={logo} 
              alt="Gulkand Rose Logo"
              style={{ 
                backgroundColor: 'transparent',
                maxWidth: '100%',
                height: 'auto'
              }} 
            />
          </div>
          <div className="floating-petals">
            <span className="petal"></span>
            <span className="petal"></span>
            <span className="petal"></span>
            <span className="petal"></span>
            <span className="petal"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;