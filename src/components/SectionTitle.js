import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const SectionTitle = ({ title, subtitle, color = '#ff6b6b' }) => {
  return (
    <ScrollAnimation>
      <div className="section-title">
        <h2 className="title">{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <div className="title-line" style={{ backgroundColor: color }} />
      </div>
    </ScrollAnimation>
  );
};

export default SectionTitle; 