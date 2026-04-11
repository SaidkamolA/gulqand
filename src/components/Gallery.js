import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Gallery.css';
import { getGallerySlides } from '../config/galleryI18n';
import { DEFAULT_LANG } from '../config/site';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/rose.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import classic from '../assets/classic.jpg';
import premium from '../assets/premium.jpg';
import royal from '../assets/rose2.jpg';

const Gallery = () => {
  const { lang = DEFAULT_LANG } = useParams();

  const slides = useMemo(() => {
    const copy = getGallerySlides(lang);
    const assets = [
      { src: img1, type: 'image' },
      { src: img2, type: 'image' },
      { src: img3, type: 'image' },
      { src: img4, type: 'image' },
      { src: img5, type: 'image' },
      { src: classic, type: 'image' },
      { src: premium, type: 'image' },
      { src: royal, type: 'image' },
      {
        src: 'https://www.youtube.com/embed/tbyWzV5VcsE',
        type: 'video',
      },
    ];
    return assets.map((a, i) => ({
      ...a,
      title: copy[i]?.title ?? '',
      description: copy[i]?.description ?? '',
      alt: copy[i]?.alt ?? '',
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#d4a373', '#588157', '#6d597a', '#b56576', '#222'][i] || '#222',
    }));
  }, [lang]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!isHovered) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [isHovered, slides.length]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: (e.clientX - left) / width, y: (e.clientY - top) / height });
  };

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const current = slides[currentIndex];

  return (
    <section className="gallery-section" aria-label="Gallery">
      <div className="gallery-background" style={{ '--accent-color': current.color }} />

      <div
        className="gallery-container"
        onMouseMove={handleMouseMove}
        style={{ '--mouse-x': mousePosition.x, '--mouse-y': mousePosition.y }}
      >
        <button type="button" className="gallery-button prev" onClick={prevSlide} aria-label="Previous slide">
          ❮
        </button>

        <div className="gallery-content">
          <div
            className={`image-container ${isTransitioning ? 'transitioning' : ''} ${current.type === 'video' ? 'video' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {current.type === 'video' ? (
              <div className="video-container">
                <iframe
                  src={current.src}
                  title={current.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            ) : (
              <>
                <img
                  src={current.src}
                  alt={current.alt}
                  className="gallery-image"
                  loading={currentIndex === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className={`image-overlay ${isHovered ? 'visible' : ''}`}>
                  <div className="overlay-content">
                    <h3 className="image-title">{current.title}</h3>
                    <p className="image-description">{current.description}</p>
                    <button type="button" className="view-details-button">
                      {lang === 'uz' ? 'Batafsil' : lang === 'ru' ? 'Подробнее' : 'Details'}
                      <svg viewBox="0 0 24 24" aria-hidden>
                        <path d="M21 12L14 5V9H3V15H14V19L21 12Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="gallery-progress">
            <div className="progress-bar" style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }} />
          </div>

          <div className="gallery-dots">
            {slides.map((_, index) => (
              <button
                type="button"
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button type="button" className="gallery-button next" onClick={nextSlide} aria-label="Next slide">
          ❯
        </button>
      </div>
    </section>
  );
};

export default Gallery;
