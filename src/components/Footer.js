import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";
import { DEFAULT_LANG } from "../config/site";

const Footer = () => {
  const { t } = useTranslation();
  const { lang = DEFAULT_LANG } = useParams();
  const base = `/${lang}`;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-contact">
            <h3>{t("footer.contacts")}</h3>
            <p>
              <i className="fas fa-envelope" aria-hidden /> {t("footer.email")}:
              <a href="mailto:gulqand@email.com"> gulqand@email.com</a>
            </p>
            <p>
              <i className="fas fa-phone" aria-hidden /> {t("footer.phone")}:
              <a href="tel:+998951443900"> +998 95 144 39 00</a>
            </p>
          </div>

          <div className="footer-section footer-nav">
            <h3>{t("footer.navigation")}</h3>
            <ul className="footer-links">
              <li><a href={base}>{t("nav.home")}</a></li>
              <li><a href={`${base}#products`}>{t("nav.products")}</a></li>
              <li><a href={`${base}#about`}>{t("nav.about")}</a></li>
              <li><a href={`${base}#contact`}>{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div className="footer-section footer-social">
            <h3>{t("footer.followUs")}</h3>
            <div className="social-links">
              <a
                href="https://t.me/gulqand"
                className="social-link"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram-plane" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {t("footer.rights")} |
          <a href={`${base}`}> {t("footer.privacyPolicy")}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
