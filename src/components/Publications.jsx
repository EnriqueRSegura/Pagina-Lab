import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import extraPublications from '../data/extra_publications.json';
import './Publications.css';

const Publications = () => {
  const { t } = useLanguage();
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublicationsData = async () => {
      try {
        // Europe PMC provides an excellent public API with CORS support
        const searchUrl = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=AUTH:"Trujillo-Ferrara J"&format=json&resultType=lite&pageSize=200';
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();
        
        let apiDocs = [];
        
        if (searchData && searchData.resultList && searchData.resultList.result) {
          apiDocs = searchData.resultList.result.map(doc => {
            
            const link = doc.doi ? `https://doi.org/${doc.doi}` : 
                         (doc.source && doc.pmid ? `https://europepmc.org/article/${doc.source}/${doc.pmid}` : 
                         `https://scholar.google.com/scholar?q=${encodeURIComponent(doc.title)}`);

            return {
              title: doc.title || "Untitled",
              authors: doc.authorString || "Unknown Authors",
              journal: doc.journalTitle || doc.bookOrReportDetails?.publisher || "Scientific Journal",
              year: doc.pubYear || "Unknown",
              url: link
            };
          });
        }

        // Merge with local extra publications
        const allPublications = [...apiDocs, ...extraPublications];
        
        // Remove exact duplicates by title to keep the list clean
        const uniquePublications = [];
        const seenTitles = new Set();
        
        for (const pub of allPublications) {
          const lowerTitle = pub.title.toLowerCase().trim();
          if (!seenTitles.has(lowerTitle)) {
            seenTitles.add(lowerTitle);
            uniquePublications.push(pub);
          }
        }
        
        // Sort by year descending (newest first)
        uniquePublications.sort((a, b) => {
          const yearA = parseInt(a.year) || 0;
          const yearB = parseInt(b.year) || 0;
          return yearB - yearA;
        });

        setPublications(uniquePublications);
      } catch (error) {
        console.error("Error fetching European PMC data:", error);
        // Fallback to local extras if network failure
        setPublications([...extraPublications]);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicationsData();
  }, []);

  return (
    <section id="publications" className="section container fade-in">
      <h2 className="section-title">{t('publications', 'title')}</h2>
      
      <div className="publications-list-container">
        {loading ? (
          <div className="loading-state">
            <span className="spinner">🔬</span> Recuperando red de citaciones en vivo...
          </div>
        ) : (
          <div className="publications-list">
            {publications.map((pub, index) => (
              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="publication-item" key={index}>
                <div className="pub-year">{pub.year}</div>
                <div className="pub-content">
                  <h3 className="pub-title" dangerouslySetInnerHTML={{__html: pub.title}}></h3>
                  <p className="pub-authors">{pub.authors}</p>
                  <p className="pub-journal">{pub.journal}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="https://scholar.google.com/citations?user=nfd-R3UAAAAJ&hl=es" target="_blank" rel="noopener noreferrer" className="button primary-button">
          {t('publications', 'button')}
        </a>
      </div>
    </section>
  );
};

export default Publications;
