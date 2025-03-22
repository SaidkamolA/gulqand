import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';
import aboutImage from '../assets/1.jpg'; // ✅ Импорт изображения
import aboutImage1 from '../assets/2.jpg'; // ✅ Импорт изображения

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title fade-in">{t('about.title')}</h2>
            <div className="about-description fade-in">
              {t('about.description', { returnObjects: true }).map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
          <div className="about-image fade-in">
            <div className="image-container">
              <img src={aboutImage} alt="About Us" className="about-photo" /> 
            </div>
            <div className="image-container">
              <img src={aboutImage1} alt="About Us" className="about-photo" /> 
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
