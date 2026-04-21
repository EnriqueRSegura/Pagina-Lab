import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Collaborators.css';

const collaboratorsData = [
  { 
    name: 'Dr. Marvin A. Soriano-Ursúa', 
    institution: 'ESM - IPN', 
    field: 'Química Farmacéutica', 
    scholarLink: 'https://scholar.google.com/citations?user=G6Wd5JcAAAAJ' 
  },
  { 
    name: 'Dr. José Correa-Basurto', 
    institution: 'ESM - IPN', 
    field: 'Modelado Molecular', 
    scholarLink: 'https://scholar.google.com/citations?user=pG5_66QAAAAJ' 
  },
  { 
    name: 'Dra. Jessica Rubí Morán Díaz', 
    institution: 'ESM - IPN', 
    field: 'Microbiología y Farmacología', 
    scholarLink: 'https://scholar.google.com/citations?user=PIfh2Y0AAAAJ&hl=es' 
  },
  { 
    name: 'Dr. Juan Alberto Guevara Salazar', 
    institution: 'ESM - IPN', 
    field: 'Diseño Racional de Fármacos', 
    scholarLink: 'https://www.researchgate.net/profile/Juan-Guevara-Salazar' 
  }
];

const Collaborators = () => {
  const { t } = useLanguage();
  return (
    <section id="collaborators" className="section container fade-in">
      <h2 className="section-title">{t('collaborators', 'title')}</h2>
      <div className="collaborators-grid">
        {collaboratorsData.map((collab, index) => (
          <div className="collab-card" key={index}>
            <div className="collab-avatar">{collab.name.split(' ')[1].charAt(0)}</div>
            <div className="collab-info">
              <h3 className="collab-name">
                {collab.scholarLink ? (
                  <a href={collab.scholarLink} target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}} className="collab-link">
                    {collab.name} <span style={{fontSize: '0.7em'}}>🔗</span>
                  </a>
                ) : (
                  collab.name
                )}
              </h3>
              <p className="collab-inst">{collab.institution}</p>
              <p className="collab-field">{collab.field}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborators;
