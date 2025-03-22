import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-contact">
            <h3>{t("footer.contacts")}</h3>
            <p>
              <i className="fas fa-envelope"></i> {t("footer.email")}:
              <a href="mailto:gulqand@email.com"> gulqand@email.com</a>
            </p>
            <p>
              <i className="fas fa-phone"></i> {t("footer.phone")}:
              <a href="tel:+998977651941"> +998 97 765 19 41</a>
            </p>
          </div>

          <div className="footer-section footer-nav">
            <h3>{t("footer.navigation")}</h3>
            <ul className="footer-links">
              <li><a href="#">{t("nav.home")}</a></li>
              <li><a href="#products">{t("nav.products")}</a></li>
              <li><a href="#about">{t("nav.about")}</a></li>
              <li><a href="#contact">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div className="footer-section footer-social">
            <h3>{t("footer.followUs")}</h3>
            <div className="social-links">
              <a href="https://t.me/gulqand" className="social-link">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {t("footer.rights")} | 
          <a href="#"> {t("footer.privacyPolicy")}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
