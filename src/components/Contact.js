import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title fade-in">{t('contact.title')}</h2>
        <p className="section-description fade-in">
          {t('contact.description')}
        </p>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>{t('contact.visit')}</h3>
              <p>{t('contact.address')}</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <h3>{t('contact.call')}</h3>
              <p>{t('contact.phone')}</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>{t('contact.emailTitle')}</h3>
              <p>{t('contact.email')}</p>
            </div>
          </div>

          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t('contact.name')}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t('contact.emailPlaceholder')}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t('contact.message')}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="button">{t('contact.send')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
