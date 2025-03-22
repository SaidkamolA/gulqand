import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css'

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title fade-in">{t('about.title')}</h2>
            <div className="about-description fade-in">
              <p>
                Gulkand is a sweet preserve made from rose petals, a delicacy that has been cherished
                for centuries in traditional Indian and Persian cuisine. Our journey began with a passion
                for preserving this ancient art of making rose petal jam.
              </p>
              <p>
                Each jar of our Gulkand is crafted with carefully selected rose petals, processed
                using traditional methods that have been passed down through generations. We take pride
                in maintaining the authenticity while ensuring the highest quality standards.
              </p>
              <p>
                Our commitment to quality begins with selecting the finest roses, harvested at dawn
                when their fragrance is at its peak. The petals are then processed with pure sugar
                using time-honored techniques to create this magical preserve.
              </p>
            </div>
          </div>
          <div className="about-image fade-in">
            <div className="image-container">
            </div>
            <div className="experience-badge">
              <span className="years">25+</span>
              <span className="text">Years of<br />Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;