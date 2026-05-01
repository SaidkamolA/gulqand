import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Contact.css";

const MAP_SCRIPT_SRC =
  "https://api-maps.yandex.ru/2.1/?apikey=c2f98d89-665f-4cb8-be05-1c485a591b82&lang=ru_RU";

const Contact = () => {
  const { t } = useTranslation();
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    let cancelled = false;

    function initMap() {
      if (cancelled || !mapContainer.current || mapInstance.current) return;
      const ymaps = window.ymaps;
      if (!ymaps || typeof ymaps.Map !== "function") return;

      mapInstance.current = new ymaps.Map(mapContainer.current, {
        center: [41.362959, 69.356803],
        zoom: 15,
      });

      const placemark = new ymaps.Placemark(
        [41.362959, 69.356803],
        { hintContent: "Наш адрес", balloonContent: "Мы здесь!" },
        { preset: "islands#redDotIcon" }
      );

      mapInstance.current.geoObjects.add(placemark);
    }

    function runWhenReady() {
      if (!window.ymaps || typeof window.ymaps.ready !== "function") return;
      window.ymaps.ready(() => {
        if (!cancelled) initMap();
      });
    }

    if (window.ymaps) {
      runWhenReady();
    } else {
      let script = document.querySelector(`script[src*="api-maps.yandex.ru"]`);
      if (!script) {
        script = document.createElement("script");
        script.src = MAP_SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      script.addEventListener("load", runWhenReady);
    }

    return () => {
      cancelled = true;
      if (mapInstance.current) {
        try {
          mapInstance.current.destroy();
        } catch {
          /* ignore */
        }
        mapInstance.current = null;
      }
    };
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
          </div>

          <div
            ref={mapContainer}
            className="yandex-map fade-in"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
