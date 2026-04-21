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
      content: [
        "**Formación Académica** El Dr. Trujillo Ferrara posee una sólida formación de excelencia: es Doctor en Ciencias con especialidad en Ciencias Químicas por el CINVESTAV-IPN. Cuenta además con la Maestría en Ciencias con especialidad en Química Orgánica (CINVESTAV), la Maestría en Ciencias con especialidad en Farmacología (IPN), y es Químico Farmacéutico Industrial con Especialización en Farmacología por el Instituto Politécnico Nacional.",
        "**Trayectoria e Impacto Científico** Con más de cuatro décadas de labor ininterrumpida, es reconocido como el fundador de la investigación en Química Medicinal en México. Su trabajo ha transformado radicalmente el diseño de fármacos, logrando integrar la química avanzada en la práctica clínica y la educación superior.",
        "**Excelencia en Investigación y Vanguardia Tecnológica** Ha consolidado una producción de impacto global con más de 190 artículos en revistas internacionales indexadas y un índice h de 27. Su enfoque innovador se traduce en la autoría de 5 patentes (cuatro nacionales y una internacional) dirigidas al tratamiento de cáncer, Parkinson y Alzheimer. Entre sus hitos destaca el desarrollo de derivados de boro con baja neurotoxicidad para el manejo del parkinsonismo.",
        "**Liderazgo Institucional y Transformación del Posgrado** Se desempeñó como Secretario de Investigación y Posgrado del IPN (2015-2018), periodo en el cual logró que el 100% de los programas del instituto fueran reconocidos por su excelencia en el PNPC. Previamente, fue Director de la Escuela Superior de Medicina (2014-2015), donde impulsó la modernización de los estándares académicos en el área médico-biológica.",
        "**Legado y Formación de Talento de Élite** Ha dirigido más de 100 trabajos de titulación, incluyendo 22 tesis de doctorado y 52 de maestría. Su impacto como mentor es excepcional: más del 65% de sus doctores egresados pertenecen al SNI, incluyendo tres investigadores Nivel III y líderes de laboratorios apoyados por los Institutos Nacionales de Salud (NIH) de los Estados Unidos.",
        "**Reconocimientos y Distinciones** Su trayectoria ha sido laureada con las máximas preseas, destacando su nombramiento como Investigador Nacional Emérito y el Premio Nacional de Química 2024 en la categoría de Investigación. Es poseedor de la Presea Lázaro Cárdenas y el Premio a la Investigación del IPN, personificando la excelencia científica al servicio de la nación."
      ]
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
    },
    contact: {
      title: "Contacto",
      desc: "Para colaboraciones académicas, consultas de investigación o asesoría, por favor contactar vía electrónica.",
      institutional: "Correo Institucional",
      professional: "Correo Profesional",
      copy: "Copiar",
      copied: "¡Copiado!",
      send: "Enviar"
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
      content: [
        "**Academic Background** Dr. Trujillo Ferrara has a solid background of excellence: he holds a PhD in Sciences with a specialty in Chemical Sciences from CINVESTAV-IPN. He also holds a Master of Sciences with a specialty in Organic Chemistry (CINVESTAV), a Master of Sciences with a specialty in Pharmacology (IPN), and is an Industrial Pharmaceutical Chemist with a Specialization in Pharmacology from the National Polytechnic Institute.",
        "**Trajectory and Scientific Impact** With more than four decades of uninterrupted work, he is recognized as the founder of Medicinal Chemistry research in Mexico. His work has radically transformed drug design, managing to integrate advanced chemistry into clinical practice and higher education.",
        "**Excellence in Research and Technological Vanguard** He has consolidated a production of global impact with more than 190 articles in indexed international journals and an h-index of 27. His innovative approach is reflected in the authorship of 5 patents (four national and one international) directed at the treatment of cancer, Parkinson's, and Alzheimer's. Outstanding among his milestones is the development of boron derivatives with low neurotoxicity for the management of parkinsonism.",
        "**Institutional Leadership and Transformation of Postgraduate Studies** He served as Secretary of Research and Postgraduate Studies of the IPN (2015-2018), a period in which he achieved that 100% of the institute's programs were recognized for their excellence in the PNPC. Previously, he was Director of the Superior School of Medicine (2014-2015), where he drove the modernization of academic standards in the medical-biological area.",
        "**Legacy and Formation of Elite Talent** He has directed more than 100 graduation projects, including 22 doctoral theses and 52 master's theses. His impact as a mentor is exceptional: more than 65% of his graduated doctors belong to the SNI, including three Level III researchers and leaders of laboratories supported by the National Institutes of Health (NIH) of the United States.",
        "**Recognitions and Distinctions** His trajectory has been honored with the highest awards, highlighting his appointment as National Emeritus Researcher and the National Chemistry Award 2024 in the Research category. He holds the Lázaro Cárdenas Medal and the IPN Research Award, personifying scientific excellence at the service of the nation."
      ]
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
    },
    contact: {
      title: "Contact",
      desc: "For academic collaborations, research inquiries, or consulting, please contact via email.",
      institutional: "Institutional Email",
      professional: "Professional Email",
      copy: "Copy",
      copied: "Copied!",
      send: "Send"
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
