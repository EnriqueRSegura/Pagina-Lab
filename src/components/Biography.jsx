import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Biography.css';

const Biography = () => {
  const { t } = useLanguage();
  
  // Access the array of paragraphs dynamically
  const contentArray = t('biography', 'content');

  return (
    <section id="biography" className="section container fade-in">
      <h2 className="section-title">{t('biography', 'title')}</h2>
      <div className="biography-card">
        {contentArray.map((paragraph, index) => {
          // split strong parts if formatted like "**Title** Text"
          if (paragraph.startsWith('**') && paragraph.includes('**', 2)) {
            const endIdx = paragraph.indexOf('**', 2);
            const strongText = paragraph.substring(2, endIdx);
            const restText = paragraph.substring(endIdx + 2);
            return (
              <p key={index} className="biography-text" style={{ marginBottom: '1.2rem' }}>
                <strong style={{ color: 'var(--primary-color)' }}>{strongText}</strong>
                <br/>
                {restText}
              </p>
            );
          }
          return (
            <p key={index} className="biography-text" style={{ marginBottom: '1.2rem' }}>
              {paragraph}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Biography;
