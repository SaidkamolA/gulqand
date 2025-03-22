import React from 'react';
import { useTranslation } from 'react-i18next';
import classicImg from '../assets/classic.jpg';
import premiumImg from '../assets/premium.jpg';
import royalImg from '../assets/royal.jpg';
import '../styles/Products.css'
const Products = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 'classic',
      title: t('product.classic.title'),
      description: t('product.classic.description'),
      price: '120,000 сум',
      features: [
        '100% Натуральный',
        'Без консервантов',
        'Богат антиоксидантами'
      ],
      image: classicImg
    },
    {
      id: 'premium',
      title: t('product.premium.title'),
      description: t('product.premium.description'),
      price: '150,000 сум',
      features: [
        'Премиум качество',
        'С натуральным мёдом',
        'Изысканный вкус'
      ],
      image: premiumImg
    },
    {
      id: 'royal',
      title: t('product.royal.title'),
      description: t('product.royal.description'),
      price: '200,000 сум',
      features: [
        'С шафраном',
        'С кардамоном',
        'Королевский рецепт'
      ],
      image: royalImg
    }
  ];

  return (
    <section className="products" id="products">
      <div className="products-container">
        <h2 className="section-title">{t('products.title')}</h2>
        <p className="section-description">{t('products.description')}</p>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.title} 
                className="product-image"
              />
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="products features">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="buy-button">
                    {t('products.buyNow')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;