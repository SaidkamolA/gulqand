import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const mapContainer = useRef(null); // Контейнер для карты
  const mapInstance = useRef(null); // Ссылка на объект карты

  useEffect(() => {
    if (window.ymaps) {
      console.log("Yandex Maps уже загружен.");
      initMap();
    } else {
      console.log("Загружаем Yandex Maps...");
      const script = document.createElement("script");
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=c2f98d89-665f-4cb8-be05-1c485a591b82&lang=ru_RU";
      script.async = true;
      script.onload = () => {
        console.log("Скрипт Yandex Maps загружен.");
        window.ymaps.ready(initMap);
      };
      document.body.appendChild(script);
    }

    function initMap() {
      if (!mapContainer.current || mapInstance.current) return; // Проверка на дублирование
      console.log("Инициализация карты Яндекс...");

      mapInstance.current = new window.ymaps.Map(mapContainer.current, {
        center: [41.362959, 69.356803],
        zoom: 15,
      });

      const placemark = new window.ymaps.Placemark(
        [41.362959, 69.356803],
        { hintContent: "Наш адрес", balloonContent: "Мы здесь!" },
        { preset: "islands#redDotIcon" }
      );

      mapInstance.current.geoObjects.add(placemark);
    }
  }, []);

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title fade-in">{t("contact.title")}</h2>
        <p className="section-description fade-in">{t("contact.description")}</p>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>{t("contact.visit")}</h3>
              <p>{t("contact.address")}</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <h3>{t("contact.call")}</h3>
              <p>{t("contact.phone")}</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>{t("contact.emailTitle")}</h3>
              <p>{t("contact.email")}</p>
            </div>
          </div>

          <div
            ref={mapContainer}
            className="yandex-map fade-in"
            style={{ width: "100%", height: "400px" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
