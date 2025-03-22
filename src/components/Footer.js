import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Email: gulqand@email.com</p>
          <p>Телефон: +998 97 765 19 41</p>
        </div>
        <div className="footer-section">
          <h3>Навигация</h3>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Продукты</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Подписывайтесь</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://t.me/gulqand"><i className="fab fa-telegram-plane"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Все права защищены | <a href="#">Политика конфиденциальности</a></p>
      </div>
    </footer>
  );
};

export default Footer;
