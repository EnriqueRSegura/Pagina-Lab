import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Publications.css';

const samplePublications = [
  {
    title: "In silíco evaluation of synthesized indole derivatives as AChE inhibitors...",
    authors: "R. Osnaya-Brizuela, J. G. Trujillo-Ferrara, et al.",
    journal: "Journal of Biomolecular Structure and Dynamics",
    year: "2023",
    link: "https://scholar.google.com/"
  },
  {
    title: "Design, synthesis, and biological evaluation of new coumarin derivatives...",
    authors: "A. López, J. G. Trujillo-Ferrara, et al.",
    journal: "European Journal of Medicinal Chemistry",
    year: "2021",
    link: "https://scholar.google.com/"
  },
  {
    title: "Molecular docking studies of novel inhibitors of cholinesterase...",
    authors: "E. Martínez, J. G. Trujillo-Ferrara, et al.",
    journal: "Bioorganic Chemistry",
    year: "2019",
    link: "https://scholar.google.com/"
  }
];

const Publications = () => {
  const { t } = useLanguage();
  return (
    <section id="publications" className="section container fade-in">
      <div className="publications-wrapper">
        <h2 className="section-title">{t('publications', 'title')}</h2>
        
        <div className="pub-list">
          {samplePublications.map((pub, idx) => (
            <div className="pub-item" key={idx}>
              <h3 className="pub-title"><a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a></h3>
              <p className="pub-authors">{pub.authors}</p>
              <p className="pub-journal"><em>{pub.journal}</em>, {pub.year}</p>
            </div>
          ))}
        </div>

        <div className="publications-content">
          <p className="publications-subtitle">{t('publications', 'subtitle')}</p>
          <a href="https://scholar.google.com/citations?hl=es&user=nfd-R3UAAAAJ" target="_blank" rel="noopener noreferrer" className="scholar-btn">
            📚 {t('publications', 'button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;
