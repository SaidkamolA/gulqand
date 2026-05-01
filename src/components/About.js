import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';
import aboutImage from '../assets/1.jpg';
import aboutImage1 from '../assets/2.jpg';
import { getAboutAlts } from '../config/aboutI18n';
import { DEFAULT_LANG } from '../config/site';

const About = () => {
  const { t } = useTranslation();
  const { lang = DEFAULT_LANG } = useParams();
  const alts = getAboutAlts(lang);

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
              <img
                src={aboutImage}
                alt={alts.one}
                className="about-photo"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="image-container">
              <img
                src={aboutImage1}
                alt={alts.two}
                className="about-photo"
                loading="lazy"
                decoding="async"
              />
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
