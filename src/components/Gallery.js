import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';

// Импортируем все изображения
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import classic from '../assets/classic.jpg';
import premium from '../assets/premium.jpg';
import royal from '../assets/royal.jpg';

const Gallery = () => {
    const images = [
        {
            src: img1,
            title: "Традиционный вкус",
            description: "Изысканное сочетание восточных специй",
            color: "#ff6b6b"
        },
        {
            src: img2,
            title: "Премиум качество",
            description: "Только натуральные ингредиенты",
            color: "#4ecdc4"
        },
        {
            src: img3,
            title: "Особый рецепт",
            description: "Секретная рецептура, передающаяся поколениями",
            color: "#45b7d1"
        },
        {
            src: img4,
            title: "Роскошная подача",
            description: "Идеально подходит для особых случаев",
            color: "#96ceb4"
        },
        {
            src: img5,
            title: "Восточная коллекция",
            description: "Погрузитесь в мир восточных сладостей",
            color: "#d4a373"
        },
        {
            src: classic,
            title: "Классический вариант",
            description: "Традиционный вкус, который никогда не выходит из моды",
            color: "#588157"
        },
        {
            src: premium,
            title: "Премиум серия",
            description: "Для истинных ценителей качества",
            color: "#6d597a"
        },
        {
            src: royal,
            title: "Королевская линейка",
            description: "Достойно королевского стола",
            color: "#b56576"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            if (!isHovered) {
                nextSlide();
            }
        }, 5000);

        return () => clearInterval(autoSlide);
    }, [isHovered]);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        setTimeout(() => setIsTransitioning(false), 500);
    };

    // Добавляем рекламный баннер каждые 3 изображения
    const isAdvertSlide = (currentIndex + 1) % 3 === 0;

    return (
        <div className="gallery-section">
            <div className="gallery-background" style={{ 
                '--accent-color': images[currentIndex].color 
            }} />
            
            <div className="gallery-container"
                onMouseMove={handleMouseMove}
                style={{
                    '--mouse-x': mousePosition.x,
                    '--mouse-y': mousePosition.y
                }}>
                <button className="gallery-button prev" onClick={prevSlide}>❮</button>
                
                <div className="gallery-content">
                    {isAdvertSlide ? (
                        <div className="advert-slide">
                            <div className="advert-content">
                                <div className="advert-badge">Специальное предложение</div>
                                <h2>Скидка 20%</h2>
                                <p>На всю премиум коллекцию</p>
                                <button className="advert-button">
                                    <span>Заказать</span>
                                    <div className="button-particles">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </button>
                            </div>
                            <div className="advert-decoration">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                    ) : (
                        <div 
                            className={`image-container ${isTransitioning ? 'transitioning' : ''}`}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img 
                                src={images[currentIndex].src} 
                                alt={images[currentIndex].title}
                                className="gallery-image"
                            />
                            <div className={`image-overlay ${isHovered ? 'visible' : ''}`}>
                                <div className="overlay-content">
                                    <h3 className="image-title">{images[currentIndex].title}</h3>
                                    <p className="image-description">{images[currentIndex].description}</p>
                                    <button className="view-details-button">
                                        Подробнее
                                        <svg viewBox="0 0 24 24">
                                            <path d="M21 12L14 5V9H3V15H14V19L21 12Z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    <div className="gallery-progress">
                        <div className="progress-bar" style={{
                            width: `${((currentIndex + 1) / images.length) * 100}%`
                        }}/>
                    </div>
                    
                    <div className="gallery-dots">
                        {images.map((_, index) => (
                            <span 
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                <button className="gallery-button next" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default Gallery;