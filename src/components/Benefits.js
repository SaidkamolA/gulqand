import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Benefits.css';

const Benefits = () => {
  const { t } = useTranslation();

  // Получаем список преимуществ в виде массива
  const benefits = t('benefits.list', { returnObjects: true });

  return (
    <section className="benefits">
      <div className="container">
        <h2 className="section-title">{t('benefits.title')}</h2>
        
        <div className="benefits-intro">
          <p>{t('benefits.intro')}</p>
        </div>

        <div className="benefits-features">
          <div className="feature">
            <div className="feature-icon">🌺</div>
            <h3>{t('benefits.features.natural')}</h3>
            <p>{t('benefits.features.natural_desc')}</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⭐️</div>
            <h3>{t('benefits.features.traditional')}</h3>
            <p>{t('benefits.features.traditional_desc')}</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌞</div>
            <h3>{t('benefits.features.sun_processing')}</h3>
            <p>{t('benefits.features.sun_processing_desc')}</p>
          </div>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-card-inner">
                <div className="benefit-number">{benefit.number}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-text">{benefit.text}</p>
                <div className="benefit-decoration"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
