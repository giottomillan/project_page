export const languages = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" }
];

export function localizePath(pathname, lang) {
  if (lang === "en") {
    return pathname === "/" ? "/en" : `/en${pathname}`;
  }
  return pathname;
}

export function oppositeLang(lang) {
  return lang === "en" ? "es" : "en";
}

export const copy = {
  es: {
    siteName: "Giotto Millan",
    role: "Data Scientist",
    nav: {
      home: "Inicio",
      about: "Sobre mi",
      projects: "Proyectos",
      contact: "Contacto"
    },
    cta: {
      contact: "Hablemos",
      projects: "Ver proyectos"
    },
    home: {
      intro: "Transformo datos en decisiones claras",
      summary:
        "Diseno soluciones de analitica, ciencia de datos y machine learning con foco en impacto real para negocio, investigacion y producto."
    },
    about: {
      title: "Sobre mi",
      body:
        "Me enfoco en encontrar senales utiles en datos complejos. Trabajo desde la exploracion y la limpieza hasta la modelizacion y la comunicacion de resultados para equipos no tecnicos."
    },
    projects: {
      title: "Proyectos",
      subtitle: "Casos recientes"
    },
    contact: {
      title: "Contacto",
      body:
        "Si quieres colaborar, revisar una idea o construir una solucion de datos, escribeme por correo o LinkedIn."
    },
    seo: {
      defaultDescription:
        "Portfolio de Giotto Millan: ciencia de datos, machine learning, visualizacion y proyectos end-to-end.",
      keywords:
        "data scientist, machine learning, analisis de datos, portfolio, python, sql"
    }
  },
  en: {
    siteName: "Giotto Millan",
    role: "Data Scientist",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    cta: {
      contact: "Let's Talk",
      projects: "See projects"
    },
    home: {
      intro: "Turning data into clear decisions",
      summary:
        "I design analytics, data science, and machine learning solutions focused on real impact for business, research, and products."
    },
    about: {
      title: "About me",
      body:
        "I focus on finding useful signals in complex data. I work from exploration and cleaning to modeling and communicating outcomes for non-technical teams."
    },
    projects: {
      title: "Projects",
      subtitle: "Recent work"
    },
    contact: {
      title: "Contact",
      body:
        "If you want to collaborate, review an idea, or build a data solution, reach out by email or LinkedIn."
    },
    seo: {
      defaultDescription:
        "Giotto Millan portfolio: data science, machine learning, visualization, and end-to-end projects.",
      keywords:
        "data scientist, machine learning, data analysis, portfolio, python, sql"
    }
  }
};
