import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Biography.css';

const Biography = () => {
  const { t } = useLanguage();
  return (
    <section id="biography" className="section container fade-in">
      <h2 className="section-title">{t('biography', 'title')}</h2>
      <div className="biography-card">
        <p className="biography-text">{t('biography', 'placeholder')}</p>
      </div>
    </section>
  );
};

export default Biography;
