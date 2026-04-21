import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Collaborators.css';

const collaboratorsData = [
  { name: 'Dr. Marvin A. Soriano-Ursúa', institution: 'ESM - IPN', field: 'Química Farmacéutica' },
  { name: 'Dra. Eunice Farfán-García', institution: 'ENCB - IPN', field: 'Bioquímica Clínica' },
  { name: 'Dr. José Correa-Basurto', institution: 'ESM - IPN', field: 'Modelado Molecular' },
  { name: 'Dr. Roberto Osnaya-Brizuela', institution: 'UPIBI - IPN', field: 'Desarrollo de Fármacos' }
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
              <h3 className="collab-name">{collab.name}</h3>
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
