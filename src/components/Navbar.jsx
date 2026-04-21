import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="navbar-logo">
          <a href="#">Trujillo Lab</a>
        </div>
        <div className="navbar-links">
          <a href="#biography">{t('navbar', 'biography')}</a>
          <a href="#publications">{t('navbar', 'publications')}</a>
          <a href="#extras">{t('navbar', 'extras')}</a>
          <a href="#collaborators">{t('navbar', 'collaborators')}</a>
        </div>
        <div className="navbar-controls">
          <a href="https://trujillo-lab.onrender.com" target="_blank" rel="noopener noreferrer" className="inventory-btn" title="Ir al Inventario del Laboratorio">
            🧪 {t('navbar', 'inventory')}
          </a>
          <button className="control-btn" onClick={toggleLanguage}>
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="control-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
