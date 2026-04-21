import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [copyStatus, setCopyStatus] = useState({ institutional: false, professional: false });

  const handleCopy = (email, type) => {
    navigator.clipboard.writeText(email);
    setCopyStatus(prev => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopyStatus(prev => ({ ...prev, [type]: false }));
    }, 2000);
  };

  return (
    <section id="contact" className="section container fade-in">
      <h2 className="section-title">{t('contact', 'title')}</h2>
      <p className="contact-desc">{t('contact', 'desc')}</p>
      
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-icon inst">🎓</div>
          <div className="contact-info">
            <h3>{t('contact', 'institutional')}</h3>
            <p className="email-text">jtrujillo@ipn.mx</p>
            <div className="contact-actions">
              <button 
                className={`contact-btn copy ${copyStatus.institutional ? 'copied' : ''}`}
                onClick={() => handleCopy('jtrujillo@ipn.mx', 'institutional')}
              >
                {copyStatus.institutional ? t('contact', 'copied') : t('contact', 'copy')}
              </button>
              <a href="mailto:jtrujillo@ipn.mx" className="contact-btn send">
                {t('contact', 'send')}
              </a>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-icon prof">📧</div>
          <div className="contact-info">
            <h3>{t('contact', 'professional')}</h3>
            <p className="email-text">trujilloferraraj@gmail.com</p>
            <div className="contact-actions">
              <button 
                className={`contact-btn copy ${copyStatus.professional ? 'copied' : ''}`}
                onClick={() => handleCopy('trujilloferraraj@gmail.com', 'professional')}
              >
                {copyStatus.professional ? t('contact', 'copied') : t('contact', 'copy')}
              </button>
              <a href="mailto:trujilloferraraj@gmail.com" className="contact-btn send">
                {t('contact', 'send')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
