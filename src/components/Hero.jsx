import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';
import heroImage from '../assets/profile.jpg';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero section fade-in">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-name">José Guadalupe Trujillo Ferrara</h1>
          <h2 className="hero-title">{t('hero', 'title')}</h2>
          <p className="hero-institution">{t('hero', 'institution')}</p>
          <a href="#contact" className="hero-btn">{t('hero', 'contact')}</a>
        </div>
        <div className="hero-image-wrapper">
          {/* We will use the hero image from assets */}
          <div className="hero-image">
            <img src={heroImage} alt="José Trujillo-Ferrara" onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Profile+Photo'; }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
