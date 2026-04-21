import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

import Biography from './components/Biography';
import Publications from './components/Publications';
import CurriculumExtras from './components/CurriculumExtras';
import Collaborators from './components/Collaborators';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Biography />
        <Publications />
        <CurriculumExtras />
        <Collaborators />
        <footer style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: 'var(--card-bg)', marginTop: '5rem', borderTop: '1px solid var(--border-color)', fontSize: '0.9rem', opacity: 0.8 }}>
          <p>&copy; {new Date().getFullYear()} Trujillo Lab. Todos los derechos reservados.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
