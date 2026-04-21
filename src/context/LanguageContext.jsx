import React, { createContext, useState, useContext } from 'react';

const translations = {
  es: {
    navbar: {
      biography: "Semblanza",
      publications: "Publicaciones",
      extras: "Formación de Comunidad",
      collaborators: "Colaboradores",
      inventory: "Inventario Lab"
    },
    hero: {
      title: "Profesor de Bioquímica",
      institution: "Investigador Principal",
      contact: "Contacto"
    },
    biography: {
      title: "Semblanza",
      placeholder: "La información de la trayectoria académica y profesional de este investigador se está actualizando. Pronto encontrarás aquí detalles sobre su historia y contribuciones a la ciencia."
    },
    publications: {
      title: "Publicaciones Científicas",
      subtitle: "Para ver la literatura académica más reciente y el historial de citaciones, por favor visite el perfil en Google Scholar.",
      button: "Ver perfil en Google Scholar"
    },
    extras: {
      title: "Formación de Comunidad",
      theses: "Tesis Dirigidas",
      thesesDesc: "Formación de estudiantes de licenciatura y posgrado.",
      patents: "Patentes",
      patentsDesc: "Innovaciones tecnológicas registradas por el laboratorio."
    },
    collaborators: {
      title: "Colaboradores"
    }
  },
  en: {
    navbar: {
      biography: "Biography",
      publications: "Publications",
      extras: "Community Formation",
      collaborators: "Collaborators",
      inventory: "Lab Inventory"
    },
    hero: {
      title: "Biochemistry Professor",
      institution: "Principal Investigator",
      contact: "Contact"
    },
    biography: {
      title: "Biography",
      placeholder: "The academic and professional trajectory information for this researcher is currently being updated. Details about their history and contributions to science will be available here soon."
    },
    publications: {
      title: "Scientific Publications",
      subtitle: "To view the most recent academic literature and citation history, please visit the Google Scholar profile.",
      button: "View Google Scholar Profile"
    },
    extras: {
      title: "Community Formation",
      theses: "Directed Theses",
      thesesDesc: "Mentoring of undergraduate and graduate students.",
      patents: "Patents",
      patentsDesc: "Technological innovations registered by the laboratory."
    },
    collaborators: {
      title: "Collaborators"
    }
  }
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // Default spanish

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (section, key) => {
    return translations[language][section][key];
  };

  // We can pass language directly if a child needs to check condition, but typically 't' is enough.
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
