export type Lang = "en" | "es";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  tags: string[];
  status: string;
  links: LinkItem[];
};

export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  summary: string;
  link?: LinkItem;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  note?: string;
};

export type TechnologyGroup = {
  title: string;
  items: string[];
};

export type PortfolioContent = {
  meta: {
    langLabel: string;
    alternateLabel: string;
    skip: string;
    menu: string;
    theme: string;
  };
  labels: {
    languages: string;
    certifications: string;
  };
  nav: LinkItem[];
  hero: {
    badge: string;
    title: string;
    nameLines: string[];
    subtitle: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    panel: {
      eyebrow: string;
      title: string;
      items: { title: string; body: string }[];
    };
    metrics: { value: string; label: string }[];
  };
  sections: Record<string, { eyebrow: string; title: string; intro?: string }>;
  about: {
    paragraphs: string[];
    traits: string[];
  };
  projects: Project[];
  experience: Experience[];
  technologies: TechnologyGroup[];
  publications: Publication[];
  education: EducationItem[];
  languages: { name: string; level: string }[];
  certifications: string[];
  cv: {
    title: string;
    body: string;
    english: LinkItem;
    spanish: LinkItem;
  };
  contact: {
    title: string;
    body: string;
    links: LinkItem[];
  };
  footer: string;
};

const cvLinks = {
  english: "/docs/CV_JRoman_English_2026.pdf",
  spanish: "/docs/CV_JRoman_Espanol_2026.pdf",
};

// TODO: Replace the placeholder GitHub URL with the exact public profile if needed.
const sharedContactLinks = {
  linkedin: "https://www.linkedin.com/in/javierromanpasaro/",
  email: "mailto:javier.roman.pasaro@gmail.com",
  github: "https://github.com/javiromanp",
  scholar: "https://scholar.google.es/citations?user=rrW9qxcAAAAJ&hl=es",
};

export const content: Record<Lang, PortfolioContent> = {
  en: {
    meta: {
      langLabel: "EN",
      alternateLabel: "Ver en español",
      skip: "Skip to content",
      menu: "Toggle navigation",
      theme: "Toggle light and dark theme",
    },
    labels: {
      languages: "Languages",
      certifications: "Certifications, courses & conferences",
    },
    nav: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Research", href: "#research" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badge: "Full-stack development · Python backend · applied AI",
      title: "Javier Román Pásaro",
      nameLines: ["Javier", "Román Pásaro"],
      subtitle: "Full-stack and Python engineer building useful software around data, audio and AI.",
      summary:
        "I work across interfaces, APIs, databases and processing pipelines, with a strong Python backend foundation and experience integrating speech and NLP models into real products.",
      primaryCta: "Explore work",
      secondaryCta: "Download CV",
      panel: {
        eyebrow: "Engineering focus",
        title: "Product-minded full-stack systems with Python at the core.",
        items: [
          {
            title: "Frontend and product flows",
            body: "Interfaces, demos and user journeys that make technical systems easier to operate.",
          },
          {
            title: "Backend and APIs",
            body: "FastAPI services, REST endpoints, sessions, users, databases and deployment workflows.",
          },
          {
            title: "Data and media pipelines",
            body: "Audio/video processing, SRT/VTT exports, dataset preparation and automation scripts.",
          },
          {
            title: "Applied AI integration",
            body: "Speech recognition and NLP models connected to maintainable software architecture.",
          },
        ],
      },
      metrics: [
        { value: "2025", label: "INTERSPEECH SCRIBAL publication" },
        { value: "2", label: "Engineering and research roles" },
        { value: "4", label: "CV-listed publications" },
      ],
    },
      sections: {
      about: {
        eyebrow: "Profile",
        title: "Full-stack engineer with a strong Python and data backbone",
        intro:
          "A practical software profile shaped by backend engineering, web platforms, data pipelines, speech systems and NLP research.",
      },
      projects: {
        eyebrow: "Personal work",
        title: "Project directions",
        intro:
          "Selected portfolio projects inspired by confirmed CV experience. Repository links point to profile-level destinations where no public project URL was provided.",
      },
      experience: {
        eyebrow: "Experience",
        title: "Full-stack, backend and applied research work",
      },
      technologies: {
        eyebrow: "Stack",
        title: "Tools for full-stack development, APIs, cloud, data and applied ML",
      },
      research: {
        eyebrow: "Publications",
        title: "Research and conference output",
      },
      education: {
        eyebrow: "Education",
        title: "Academic background",
      },
      cv: {
        eyebrow: "CV download",
        title: "Full curriculum in English and Spanish",
      },
      contact: {
        eyebrow: "Contact",
        title: "Open to AI engineering and research engineering conversations",
      },
    },
    about: {
      paragraphs: [
        "Javier is an AI / Python Engineer specialized in natural language processing and speech technologies, with experience in automatic transcription systems, real-time web communication, and machine learning experimentation.",
        "His recent work includes SCRIBAL at Universitat de Barcelona, a multilingual real-time transcription and translation platform for educational contexts, and NON-CONSPIRA-HATE at the University of Huelva, focused on hate speech detection with Transformers and LLM-based methods.",
        "He is especially interested in full-stack products that combine usable interfaces, reliable APIs, audio processing, robust data pipelines and practical deployment workflows.",
      ],
      traits: [
        "Full-stack product development",
        "Python-first backend engineering",
        "Cloud, Big Data and web fundamentals",
        "Speech recognition and real-time transcription",
      ],
    },
    projects: [
      {
        title: "SCRIBAL-style real-time transcription platform",
        eyebrow: "Speech platform",
        description:
          "A portfolio case study for a browser-based transcription and translation system with session roles, live listeners, and multilingual output.",
        impact:
          "Reflects CV-backed work on FastAPI services, Whisper ASR, WebRTC/WebSockets, session management, and education-focused accessibility.",
        tags: ["Python", "FastAPI", "Whisper", "WebSockets", "WebRTC", "MySQL"],
        status: "Case study",
        links: [{ label: "Public SCRIBAL page", href: "https://scribal.cat", external: true }],
      },
      {
        title: "Audio/video transcription pipeline with SRT/VTT export",
        eyebrow: "Media pipeline",
        description:
          "A batch transcription direction for audio and video files, producing structured transcripts and subtitle formats for review, accessibility, and archiving.",
        impact:
          "Grounded in the CV-listed pipeline for file transcription with SRT and VTT exports.",
        tags: ["Python", "ASR", "SRT", "VTT", "Data processing"],
        status: "Repository link pending",
        links: [{ label: "GitHub profile", href: sharedContactLinks.github, external: true }],
      },
      {
        title: "Hate speech detection with Transformers and LLMs",
        eyebrow: "NLP research",
        description:
          "A research engineering project direction for classification of harmful language with Transformer ensembles, LLM prompting, and careful dataset preparation.",
        impact:
          "Connected to IberLEF HOMO-MEX 2023/2024 and NON-CONSPIRA-HATE work at the University of Huelva.",
        tags: ["Transformers", "LLMs", "NLP", "PyTorch", "CUDA"],
        status: "Publication-backed",
        links: [{ label: "HOMO-MEX 2024 paper", href: "https://ceur-ws.org/Vol-3756/HOMO-MEX2024_paper6.pdf", external: true }],
      },
      {
        title: "Tweet classification demo",
        eyebrow: "Interactive NLP",
        description:
          "A compact web demo concept for classifying social media text, visualizing confidence, labels, and model reasoning metadata.",
        impact:
          "Based on the CV-listed demonstration web application for tweet classification.",
        tags: ["NLP", "Transformers", "JavaScript", "REST APIs"],
        status: "Demo link pending",
        links: [{ label: "GitHub profile", href: sharedContactLinks.github, external: true }],
      },
    ],
    experience: [
      {
        role: "AI Backend Developer",
        organization: "SCRIBAL, Universitat de Barcelona",
        location: "Barcelona / Madrid, Spain",
        period: "Feb. 2025 - Jun. 2026",
        summary:
          "Backend development for a multilingual real-time audio transcription and translation platform designed for educational environments.",
        bullets: [
          "Implemented Python/FastAPI backend APIs for sessions, users, and audio processing.",
          "Integrated Whisper-based ASR models for automatic speech recognition.",
          "Built real-time audio processing flows with WebRTC and WebSockets.",
          "Developed audio/video transcription pipelines with SRT and VTT export.",
          "Designed SQLAlchemy/MySQL database structures for session and user management.",
          "Supported deployment and maintenance using cloud virtual machines, storage, and remote databases.",
        ],
        stack: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Whisper", "WebRTC", "WebSockets", "Linux", "Git"],
      },
      {
        role: "NLP Research Engineer",
        organization: "NON-CONSPIRA-HATE, University of Huelva",
        location: "Huelva, Spain",
        period: "Nov. 2023 - Dec. 2024",
        summary:
          "NLP and deep learning research for hate speech detection, social media classification, and experimental AI pipelines.",
        bullets: [
          "Prepared datasets and Python scripts for NLP experiments.",
          "Trained and evaluated Transformer and LLM-based models for hate speech detection.",
          "Developed a demonstration web application for tweet classification.",
          "Configured Linux deep learning environments with GPU support using CUDA, PyTorch, and TensorFlow.",
        ],
        stack: ["Python", "Transformers", "LLMs", "NLP", "PyTorch", "TensorFlow", "CUDA", "Linux"],
      },
    ],
    technologies: [
      { title: "Full-stack development", items: ["HTML5", "CSS", "JavaScript", "Product demos", "Frontend integration", "Web security"] },
      { title: "Backend and APIs", items: ["Python", "FastAPI", "REST APIs", "SQLAlchemy", "MySQL", "SQL databases"] },
      { title: "Speech and real time", items: ["Whisper", "Speech Recognition", "WebSockets", "WebRTC", "SRT/VTT"] },
      { title: "Cloud and data", items: ["Docker", "Kubernetes", "GCP", "AWS", "Azure", "Hadoop", "Apache Spark", "NoSQL", "Power BI"] },
      { title: "ML and engineering workflow", items: ["Transformers", "NLP", "LLMs", "PyTorch", "TensorFlow", "CUDA", "Linux", "Git"] },
      { title: "Programming foundations", items: ["Java", "C++", "Haskell", "Algorithms", "OOP", "Functional programming"] },
    ],
    publications: [
      {
        title: "SCRIBAL: A Digital Transcription Tool in Higher Education",
        venue: "Proceedings of INTERSPEECH 2025",
        year: "2025",
        summary:
          "Digital transcription and translation tool for university teaching, based on Whisper and adapted for Catalan dialectal varieties and academic terminology.",
        link: { label: "ISCA Archive", href: "https://www.isca-archive.org/interspeech_2025/roman25_interspeech.html", external: true },
      },
      {
        title: "I2C-UHU at HOMO-MEX 2024: Leveraging Large Language Models and Ensembling Transformers to Identify and Classify Hate Messages Towards the LGBTQ+ Community",
        venue: "IberLEF 2024, CEUR Workshop Proceedings",
        year: "2024",
        summary:
          "LLM prompting and Transformer ensembles for hate speech detection toward the Mexican Spanish-speaking LGBTQ+ population.",
        link: { label: "CEUR PDF", href: "https://ceur-ws.org/Vol-3756/HOMO-MEX2024_paper6.pdf", external: true },
      },
      {
        title: "I2C-UHU at EXIST 2024: Transformer-Based Detection of Sexism and Source Intention in Memes Using a Learning with Disagreement Approach",
        venue: "CLEF 2024, CEUR Workshop Proceedings",
        year: "2024",
        summary:
          "Transformer ensembles and Learning with Disagreement for sexism identification and source-intention classification in memes.",
        link: { label: "CEUR PDF", href: "https://ceur-ws.org/Vol-3740/paper-91.pdf", external: true },
      },
      {
        title: "I2C-UHU at IberLEF-2023 HOMO-MEX task: Ensembling Transformers Models to Identify and Classify Hate Messages Towards the LGBTQ+ Community",
        venue: "IberLEF 2023, CEUR Workshop Proceedings",
        year: "2023",
        summary:
          "Transformer ensembles for LGBTQ+ hate speech detection and classification in social media text.",
        link: { label: "CEUR PDF", href: "https://ceur-ws.org/Vol-3496/homomex-paper3.pdf", external: true },
      },
    ],
    education: [
      {
        degree: "Master's Degree in Computer Engineering - Big Data & Cloud Computing",
        institution: "University of Huelva",
        period: "2023 - 2026",
      },
      {
        degree: "Bachelor's Degree in Computer Science, Erasmus Programme",
        institution: "University of Silesia, Katowice",
        period: "2021 - 2022",
      },
      {
        degree: "Bachelor's Degree in Computer Engineering - Mention in Computer Science",
        institution: "University of Huelva",
        period: "2019 - 2023",
      },
    ],
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2, Cambridge First Certificate" },
      { name: "French", level: "B1, DELF" },
      { name: "Polish", level: "A0, Szkoła Języka i Kultury Polskiej" },
    ],
    certifications: [
      "CCNA1 - Cisco Routing & Switching",
      "FIWARE - Advanced Course",
      "Human Language in Artificial Intelligence: Transformers and Beyond",
      "Disagreement and Subjectivity in Machine Learning: Perspectivism in NLP",
      "Social Datafication and Artificial Intelligence",
      "I International Congress on Conspiracy Theories and Hate Speech on the Internet, 2022",
      "XXII University Employment Forum: AI experiences from the I2C Group, University of Huelva, 2023",
      "XL SEPLN Conference 2024 (IberLEF)",
      "INTERSPEECH 2025",
    ],
    cv: {
      title: "Download the full CV",
      body:
        "The PDFs are copied from the attached CV files and kept available for recruiters and collaborators.",
      english: { label: "English CV", href: cvLinks.english },
      spanish: { label: "Spanish CV", href: cvLinks.spanish },
    },
    contact: {
      title: "Let's build language systems that actually reach users.",
      body:
        "Best fit: full-stack development, Python backend engineering, data processing pipelines, speech technology platforms and applied AI products.",
      links: [
        { label: "Email", href: sharedContactLinks.email },
        { label: "LinkedIn", href: sharedContactLinks.linkedin, external: true },
        { label: "GitHub", href: sharedContactLinks.github, external: true },
        { label: "Google Scholar", href: sharedContactLinks.scholar, external: true },
      ],
    },
    footer: "© Copyright 2026 Javier Román Pásaro. Built with React, Vite and Tailwind CSS. Hosted by GitHub Pages.",
  },
  es: {
    meta: {
      langLabel: "ES",
      alternateLabel: "View in English",
      skip: "Saltar al contenido",
      menu: "Abrir o cerrar navegación",
      theme: "Cambiar tema claro u oscuro",
    },
    labels: {
      languages: "Idiomas",
      certifications: "Certificados, cursos y congresos",
    },
    nav: [
      { label: "Sobre mí", href: "#about" },
      { label: "Proyectos", href: "#projects" },
      { label: "Experiencia", href: "#experience" },
      { label: "Investigación", href: "#research" },
      { label: "Formación", href: "#education" },
      { label: "Contacto", href: "#contact" },
    ],
    hero: {
      badge: "Full-stack development · Backend Python · IA aplicada",
      title: "Javier Román Pásaro",
      nameLines: ["Javier", "Román Pásaro"],
      subtitle: "Full-stack y Python engineer construyendo software útil alrededor de datos, audio e IA.",
      summary:
        "Trabajo entre interfaces, APIs, bases de datos y pipelines de procesamiento, con una base fuerte en backend Python y experiencia integrando modelos de voz y NLP en productos reales.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Descargar CV",
      panel: {
        eyebrow: "Foco técnico",
        title: "Sistemas full-stack orientados a producto, con Python como núcleo.",
        items: [
          {
            title: "Frontend y flujos de producto",
            body: "Interfaces, demos y recorridos de usuario que hacen operables los sistemas técnicos.",
          },
          {
            title: "Backend y APIs",
            body: "Servicios FastAPI, endpoints REST, sesiones, usuarios, bases de datos y despliegues.",
          },
          {
            title: "Pipelines de datos y media",
            body: "Procesamiento audio/vídeo, exportación SRT/VTT, preparación de datasets y automatización.",
          },
          {
            title: "Integración de IA aplicada",
            body: "Modelos de voz y NLP conectados a arquitecturas de software mantenibles.",
          },
        ],
      },
      metrics: [
        { value: "2025", label: "Publicación SCRIBAL en INTERSPEECH" },
        { value: "2", label: "Roles en ingeniería e investigación" },
        { value: "4", label: "Publicaciones incluidas en el CV" },
      ],
    },
    sections: {
      about: {
        eyebrow: "Perfil",
        title: "Full-stack engineer con una base fuerte en Python y datos",
        intro:
          "Un perfil de software práctico, construido entre backend, plataformas web, pipelines de datos, sistemas de voz e investigación en NLP.",
      },
      projects: {
        eyebrow: "Trabajo personal",
        title: "Líneas de proyecto",
        intro:
          "Proyectos de portfolio inspirados en experiencia confirmada por el CV. Los enlaces apuntan a perfiles generales cuando no se proporcionó una URL pública del proyecto.",
      },
      experience: {
        eyebrow: "Experiencia",
        title: "Trabajo full-stack, backend e investigación aplicada",
      },
      technologies: {
        eyebrow: "Stack",
        title: "Herramientas para full-stack, APIs, cloud, datos e IA aplicada",
      },
      research: {
        eyebrow: "Publicaciones",
        title: "Producción científica y congresos",
      },
      education: {
        eyebrow: "Formación",
        title: "Trayectoria académica",
      },
      cv: {
        eyebrow: "CV download",
        title: "Currículum completo en inglés y español",
      },
      contact: {
        eyebrow: "Contacto",
        title: "Abierto a conversaciones sobre ingeniería IA e investigación aplicada",
      },
    },
    about: {
      paragraphs: [
        "Javier es AI / Python Engineer especializado en procesamiento del lenguaje natural y tecnologías de voz, con experiencia en sistemas de transcripción automática, comunicación web en tiempo real y experimentación en machine learning.",
        "Su trabajo reciente incluye SCRIBAL en la Universitat de Barcelona, una plataforma multilingüe de transcripción y traducción en tiempo real para contextos educativos, y NON-CONSPIRA-HATE en la Universidad de Huelva, centrado en detección de discurso de odio con Transformers y métodos basados en LLMs.",
        "Le interesan especialmente los productos full-stack que combinan interfaces usables, APIs fiables, procesamiento de audio, pipelines de datos robustos y despliegues prácticos.",
      ],
      traits: [
        "Desarrollo full-stack orientado a producto",
        "Backend Python y APIs",
        "Fundamentos de cloud, Big Data y web",
        "Reconocimiento de voz y transcripción en tiempo real",
      ],
    },
    projects: [
      {
        title: "Plataforma de transcripción en tiempo real tipo SCRIBAL",
        eyebrow: "Plataforma de voz",
        description:
          "Caso de estudio para un sistema de transcripción y traducción en navegador, con roles de sesión, oyentes en directo y salida multilingüe.",
        impact:
          "Refleja experiencia validada por el CV en FastAPI, Whisper ASR, WebRTC/WebSockets, gestión de sesiones y accesibilidad educativa.",
        tags: ["Python", "FastAPI", "Whisper", "WebSockets", "WebRTC", "MySQL"],
        status: "Caso de estudio",
        links: [{ label: "Página pública de SCRIBAL", href: "https://scribal.cat", external: true }],
      },
      {
        title: "Pipeline de transcripción audio/vídeo con exportación SRT/VTT",
        eyebrow: "Pipeline multimedia",
        description:
          "Línea de proyecto para transcribir archivos de audio y vídeo, generando transcripciones estructuradas y subtítulos para revisión, accesibilidad y archivo.",
        impact:
          "Basado en el pipeline del CV para transcripción de archivos con exportación a SRT y VTT.",
        tags: ["Python", "ASR", "SRT", "VTT", "Procesamiento de datos"],
        status: "Repositorio pendiente",
        links: [{ label: "Perfil GitHub", href: sharedContactLinks.github, external: true }],
      },
      {
        title: "Detección de discurso de odio con Transformers y LLMs",
        eyebrow: "Investigación NLP",
        description:
          "Proyecto de ingeniería de investigación para clasificar lenguaje dañino con ensembles de Transformers, prompting con LLMs y preparación cuidadosa de datasets.",
        impact:
          "Conectado con IberLEF HOMO-MEX 2023/2024 y el trabajo NON-CONSPIRA-HATE en la Universidad de Huelva.",
        tags: ["Transformers", "LLMs", "NLP", "PyTorch", "CUDA"],
        status: "Respaldado por publicación",
        links: [{ label: "Artículo HOMO-MEX 2024", href: "https://ceur-ws.org/Vol-3756/HOMO-MEX2024_paper6.pdf", external: true }],
      },
      {
        title: "Demo de clasificación de tweets",
        eyebrow: "NLP interactivo",
        description:
          "Concepto de demo web compacta para clasificar texto de redes sociales, visualizar confianza, etiquetas y metadatos del razonamiento del modelo.",
        impact:
          "Basado en la aplicación web demostrativa de clasificación de tweets incluida en el CV.",
        tags: ["NLP", "Transformers", "JavaScript", "REST APIs"],
        status: "Demo pendiente",
        links: [{ label: "Perfil GitHub", href: sharedContactLinks.github, external: true }],
      },
    ],
    experience: [
      {
        role: "AI Backend Developer",
        organization: "SCRIBAL, Universitat de Barcelona",
        location: "Barcelona / Madrid, España",
        period: "Feb. 2025 - Jun. 2026",
        summary:
          "Desarrollo backend para una plataforma multilingüe de transcripción y traducción de audio en tiempo real orientada a entornos educativos.",
        bullets: [
          "Implementación de APIs backend en Python/FastAPI para sesiones, usuarios y procesamiento de audio.",
          "Integración de modelos ASR basados en Whisper para reconocimiento automático de voz.",
          "Desarrollo de flujos de audio en tiempo real con WebRTC y WebSockets.",
          "Creación de pipelines de transcripción audio/vídeo con exportación SRT y VTT.",
          "Diseño de estructuras SQLAlchemy/MySQL para gestión de sesiones y usuarios.",
          "Apoyo al despliegue y mantenimiento con máquinas virtuales cloud, almacenamiento y bases de datos remotas.",
        ],
        stack: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Whisper", "WebRTC", "WebSockets", "Linux", "Git"],
      },
      {
        role: "NLP Research Engineer",
        organization: "NON-CONSPIRA-HATE, Universidad de Huelva",
        location: "Huelva, España",
        period: "Nov. 2023 - Dic. 2024",
        summary:
          "Investigación en NLP y deep learning para detección de discurso de odio, clasificación en redes sociales y pipelines experimentales de IA.",
        bullets: [
          "Preparación de datasets y scripts Python para experimentos de NLP.",
          "Entrenamiento y evaluación de modelos Transformer y basados en LLMs para detección de discurso de odio.",
          "Desarrollo de una aplicación web demostrativa para clasificación de tweets.",
          "Configuración de entornos Linux de deep learning con GPU usando CUDA, PyTorch y TensorFlow.",
        ],
        stack: ["Python", "Transformers", "LLMs", "NLP", "PyTorch", "TensorFlow", "CUDA", "Linux"],
      },
    ],
    technologies: [
      { title: "Desarrollo full-stack", items: ["HTML5", "CSS", "JavaScript", "Demos de producto", "Integración frontend", "Seguridad web"] },
      { title: "Backend y APIs", items: ["Python", "FastAPI", "REST APIs", "SQLAlchemy", "MySQL", "Bases de datos SQL"] },
      { title: "Voz y tiempo real", items: ["Whisper", "Speech Recognition", "WebSockets", "WebRTC", "SRT/VTT"] },
      { title: "Cloud y datos", items: ["Docker", "Kubernetes", "GCP", "AWS", "Azure", "Hadoop", "Apache Spark", "NoSQL", "Power BI"] },
      { title: "ML y flujo de ingeniería", items: ["Transformers", "NLP", "LLMs", "PyTorch", "TensorFlow", "CUDA", "Linux", "Git"] },
      { title: "Fundamentos de programación", items: ["Java", "C++", "Haskell", "Algoritmos", "POO", "Programación funcional"] },
    ],
    publications: [
      {
        title: "SCRIBAL: A Digital Transcription Tool in Higher Education",
        venue: "Proceedings of INTERSPEECH 2025",
        year: "2025",
        summary:
          "Herramienta de transcripción y traducción para docencia universitaria, basada en Whisper y adaptada a variedades dialectales del catalán y terminología académica.",
        link: { label: "ISCA Archive", href: "https://www.isca-archive.org/interspeech_2025/roman25_interspeech.html", external: true },
      },
      {
        title: "I2C-UHU at HOMO-MEX 2024: Leveraging Large Language Models and Ensembling Transformers to Identify and Classify Hate Messages Towards the LGBTQ+ Community",
        venue: "IberLEF 2024, CEUR Workshop Proceedings",
        year: "2024",
        summary:
          "Prompting con LLMs y ensembles de Transformers para detección de discurso de odio hacia la población LGBTQ+ mexicana hispanohablante.",
        link: { label: "CEUR PDF", href: "https://ceur-ws.org/Vol-3756/HOMO-MEX2024_paper6.pdf", external: true },
      },
      {
        title: "I2C-UHU at EXIST 2024: Transformer-Based Detection of Sexism and Source Intention in Memes Using a Learning with Disagreement Approach",
        venue: "CLEF 2024, CEUR Workshop Proceedings",
        year: "2024",
        summary:
          "Ensembles de Transformers y Learning with Disagreement para identificar sexismo e intención de origen en memes.",
        link: { label: "CEUR PDF", href: "https://ceur-ws.org/Vol-3740/paper-91.pdf", external: true },
      },
      {
        title: "I2C-UHU at IberLEF-2023 HOMO-MEX task: Ensembling Transformers Models to Identify and Classify Hate Messages Towards the LGBTQ+ Community",
        venue: "IberLEF 2023, CEUR Workshop Proceedings",
        year: "2023",
        summary:
          "Ensembles de Transformers para detección y clasificación de discurso de odio LGBTQ+ en texto de redes sociales.",
        link: { label: "CEUR PDF", href: "https://ceur-ws.org/Vol-3496/homomex-paper3.pdf", external: true },
      },
    ],
    education: [
      {
        degree: "Máster en Ingeniería Informática - Big Data y Cloud Computing",
        institution: "Universidad de Huelva",
        period: "2023 - 2026",
      },
      {
        degree: "Grado en Ciencias de la Computación, Programa Erasmus+",
        institution: "Universidad de Silesia, Katowice",
        period: "2021 - 2022",
      },
      {
        degree: "Grado en Ingeniería Informática - Mención en Ciencias de la Computación",
        institution: "Universidad de Huelva",
        period: "2019 - 2023",
      },
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2, Cambridge First Certificate" },
      { name: "Francés", level: "B1, DELF" },
      { name: "Polaco", level: "A0, Szkoła Języka i Kultury Polskiej" },
    ],
    certifications: [
      "CCNA1 - Cisco Routing & Switching",
      "FIWARE - Curso Avanzado",
      "El Lenguaje Humano en la Inteligencia Artificial. Transformers y Más Allá",
      "Desacuerdo y Subjetividad en Aprendizaje Automático: perspectivismo en NLP",
      "Datificación Social e Inteligencia Artificial",
      "I Congreso Internacional en Teorías conspirativas y discurso del odio en Internet, 2022",
      "XXII Foro Universitario de Empleo: experiencias IA del Grupo I2C, Universidad de Huelva, 2023",
      "XL Congreso SEPLN 2024 (IberLEF)",
      "INTERSPEECH 2025",
    ],
    cv: {
      title: "Descargar el CV completo",
      body:
        "Los PDFs proceden de los CVs adjuntos y quedan disponibles para recruiters, equipos técnicos y colaboradores.",
      english: { label: "CV en inglés", href: cvLinks.english },
      spanish: { label: "CV en español", href: cvLinks.spanish },
    },
    contact: {
      title: "Construyamos sistemas de lenguaje que lleguen a usuarios reales.",
      body:
        "Encaje natural: desarrollo full-stack, backend Python, pipelines de procesamiento de datos, plataformas de voz y productos con IA aplicada.",
      links: [
        { label: "Email", href: sharedContactLinks.email },
        { label: "LinkedIn", href: sharedContactLinks.linkedin, external: true },
        { label: "GitHub", href: sharedContactLinks.github, external: true },
        { label: "Google Scholar", href: sharedContactLinks.scholar, external: true },
      ],
    },
    footer: "© Copyright 2026 Javier Román Pásaro. Desarrollado con React, Vite y Tailwind CSS. Alojado en GitHub Pages.",
  },
};
