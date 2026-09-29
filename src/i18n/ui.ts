export const languages = {
    en: 'English',
    es: 'Español',
  };

  export const defaultLang = 'en';

  export const ui = {
    en: {
        'profesion': 'Full-stack Developer.',
        'linkedin': 'LinkedIn',

        'nav.experience': 'Experience',
        'nav.proyects': 'Projects',
        'nav.aboutMe': 'About',
        'nav.contact': 'Contact',

        'hero.openforwork': 'Open to work',
        'hero.title': "Hey, I'm Ezequiel",
        'hero.description': '4+ years building web products, based in Buenos Aires, Argentina. I build healthcare SaaS end to end with React, TypeScript and .NET on Azure, from DICOM viewers to billing systems.',
        'hero.contact': 'Contact Me',
        'hero.cv': "Download CV",

        'exp[0].title': 'Freelance Web Developer',
        'exp[0].date': 'September 2021 - July 2022',
        'exp[0].company': 'Self-employed',
        'exp[0].description': 'Built small web projects to sharpen my skills. Developer and maintainer of Reventando Otros Mundos, a full-stack Next.js app.',

        'exp[1].title': 'Front-end Developer',
        'exp[1].date': 'June 2022 - June 2024',
        'exp[1].company': 'MContigo',
        'exp[1].description': 'Worked on the company\'s Next.js sites and internal tools, including a health media site with millions of daily visits published in more than ten languages. I cut server costs with On-Demand Static Revalidation, improved Core Web Vitals and built new UI designs. From October 2023 I kept working with the company as a contractor on specific features.',

        'exp[3].title': 'Full-stack Developer',
        'exp[3].date': 'June 2024 - Present',
        'exp[3].company': 'Evodicom',
        'exp[3].description': 'I work on both of the company\'s healthcare SaaS products: Evodicom (a cloud PACS and radiology reporting platform) and Evotally (an ERP for clinics). I build features end to end with React 19, TypeScript, .NET 10 and SQL Server on Azure. Among other things, I built the mobile version of the DICOM viewer, drove the web app\'s migration to Vite and RoosterJS v9, and was the main author of the patient portal for medical orders.',

        'project.code' : "Code",
        'project.production' : "Production",
        'project.demoData' : "Demo data",

        'projects[0].title': "Reventando Otros Mundos",
        'projects[0].description': "Library used on the Invernalia radio show to list the games already streamed on Twitch and the anime reviewed during the show.",
        'projects[0].link': "https://reventandootrosmundos.vercel.app/",
        'projects[0].image': "/projects/ReventandoOtrosMundos.webp",
        'projects[0].imgAlt': "Reventando Otros Mundos home page",

        'projects[1].title': "Step To Health",
        'projects[1].description': "MContigo's health articles site. I suggested and implemented On-Demand Static Revalidation, which cut server costs significantly. I also built new designs and Amazon components, and significantly improved Core Web Vitals.",
        'projects[1].link': 'https://steptohealth.com',
        'projects[1].image': "/projects/StepToHealth.webp",
        'projects[1].imgAlt': "Step To Health home page",

        'projects[2].title': "Travel Plannet",
        'projects[2].description': "A travel website owned by MContigo. I migrated it completely from React to Next.js 13, and set up its deployment pipeline and Docker configuration. The site is no longer online.",
        'projects[2].image': "/projects/TravelPlannet.webp",
        'projects[2].imgAlt': "Travel Plannet home page",

        'projects[3].title': "Evodicom",
        'projects[3].description': "Cloud PACS and radiology reporting platform. Health facilities use it to view DICOM studies, write and sign reports, and share them with doctors and patients. I work on the custom OHIF-based DICOM viewer (mobile version, 3D/MPR, memory and preloading optimizations) and the Word-like report editor. I also built digital signatures and QR codes on reports, double reading, and study sharing through WhatsApp and QR.",
        'projects[3].image': "/projects/Evodicom.webp",
        'projects[3].imgAlt': "Evodicom study viewer",

        'projects[4].title': "Evotally",
        'projects[4].description': "Multi-tenant ERP for medical and diagnostic-imaging clinics: orders, payments, daily cash closing, Mexican electronic invoicing (CFDI) and financial dashboards. I've been a core contributor since the first release. I built the cash-closing and certification flow, invoicing and billing reports, quotes, appointments, medical orders, and an AI assistant chat backed by an Azure AI Foundry agent.",
        'projects[4].image': "/projects/Evotally.webp",
        'projects[4].imgAlt': "Evotally financial summary dashboard",

        'aboutMe.texts[0]': 'My name is Ezequiel Aguirre. I\'m a Full-stack Developer from Buenos Aires with a strong front-end background. I specialize in React and TypeScript, and over the last two years I\'ve grown into backend development with .NET, SQL Server and Azure.',
        'aboutMe.texts[1]': 'I learned React by studying different ways to implement things without relying on third-party libraries. That gave me a deep understanding of how it works internally, and it still shapes how I approach performance.',
        'aboutMe.texts[2]': 'I started as a Front-end Developer at MContigo, on health media sites with millions of daily visits. Since 2024 I\'ve been at Evodicom, building healthcare software end to end: DICOM viewers, radiology reports, billing and clinic management.',
        'aboutMe.texts[3]': 'I enjoy owning features from the database to the UI, making apps faster, and leaving codebases better than I found them. I\'m open to new challenges where I can keep growing as a full-stack engineer.',

        'footer.disclaimer': 'Ezequiel Aguirre.'
    },
    es: {
        'profesion': 'Desarrollador Full-stack.',

        'nav.experience': 'Experiencia',
        'nav.proyects': 'Proyectos',
        'nav.aboutMe': 'Sobre mí',
        'nav.contact': 'Contacto',

        'hero.title': "Hola, soy Ezequiel",
        'hero.openforwork': 'Disponible para trabajar',
        'hero.description': 'Más de 4 años construyendo productos web, desde Buenos Aires, Argentina. Desarrollo SaaS de salud de punta a punta con React, TypeScript y .NET sobre Azure, desde visores DICOM hasta sistemas de facturación.',
        'hero.contact': 'Contáctame',
        'hero.cv': "Descarga CV",

        'exp[0].title': 'Desarrollador Web Freelance',
        'exp[0].date': 'Septiembre 2021 - Julio 2022',
        'exp[0].company': 'Independiente',
        'exp[0].description': 'Desarrollé pequeños proyectos web para mejorar mis conocimientos. Desarrollador y mantenedor de Reventando Otros Mundos, una aplicación full-stack en Next.js.',

        'exp[1].title': 'Desarrollador Front-end',
        'exp[1].date': 'Junio 2022 - Junio 2024',
        'exp[1].description': 'Trabajé en los sitios Next.js y herramientas internas de la empresa, incluido un sitio de salud con millones de visitas diarias publicado en más de diez idiomas. Reduje costos de servidor con On-Demand Static Revalidation, mejoré los Core Web Vitals e implementé nuevos diseños. Desde octubre de 2023 seguí trabajando con la empresa como contratista en funcionalidades específicas.',

        'exp[3].title': 'Desarrollador Full-stack',
        'exp[3].date': 'Junio 2024 - Presente',
        'exp[3].description': 'Trabajo en los dos productos SaaS de salud de la empresa: Evodicom (una plataforma PACS en la nube para informes radiológicos) y Evotally (un ERP para clínicas). Desarrollo funcionalidades de punta a punta con React 19, TypeScript, .NET 10 y SQL Server sobre Azure. Entre otras cosas, construí la versión móvil del visor DICOM, impulsé la migración de la web a Vite y RoosterJS v9, y fui el autor principal del portal de órdenes médicas para pacientes.',

        'project.code' : "Código",
        'project.production' : "Producción",
        'project.demoData' : "Datos de demostración",

        'projects[0].description': "Biblioteca utilizada en el programa de radio Invernalia para listar los juegos ya transmitidos en Twitch y los animes reseñados durante el programa.",
        'projects[0].imgAlt': "Página de inicio de Reventando Otros Mundos",

        'projects[1].title': "Mejor con Salud",
        'projects[1].description': "Sitio de artículos de salud de MContigo. Sugerí e implementé On-Demand Static Revalidation, lo que redujo considerablemente los costos de servidor. Además, implementé nuevos diseños y componentes de Amazon, y mejoré significativamente los Core Web Vitals.",
        'projects[1].link': 'https://mejorconsalud.as.com',
        'projects[1].image': "/projects/MejorConSalud.webp",
        'projects[1].imgAlt': "Página de inicio de Mejor con Salud",

        'projects[2].description': "Sitio web de viajes de MContigo. Realicé la migración completa de React a Next.js 13, e implementé el pipeline de despliegue y la configuración de Docker. El sitio ya no está en línea.",
        'projects[2].imgAlt': "Página de inicio de Travel Plannet",

        'projects[3].description': 'Plataforma PACS en la nube para informes radiológicos. Los centros médicos la usan para visualizar estudios DICOM, redactar y firmar informes, y compartirlos con médicos y pacientes. Trabajo en el visor DICOM propio basado en OHIF (versión móvil, 3D/MPR, optimizaciones de memoria y precarga) y en el editor de informes tipo Word. También desarrollé las firmas digitales y los códigos QR en los informes, la doble lectura y el envío de estudios por WhatsApp y QR.',
        'projects[3].imgAlt': "Visor de estudios de Evodicom",

        'projects[4].description': "ERP multi-tenant para clínicas médicas y centros de diagnóstico por imagen: órdenes, pagos, corte de caja diario, facturación electrónica (CFDI) y reportes financieros. Soy uno de los principales desarrolladores desde la primera versión. Desarrollé el corte de caja y su certificación, la facturación y sus reportes, las cotizaciones, la agenda de citas, las órdenes médicas y un chat con asistente de IA basado en un agente de Azure AI Foundry.",
        'projects[4].imgAlt': "Dashboard de resumen financiero de Evotally",

        'aboutMe.texts[0]': 'Me llamo Ezequiel Aguirre. Soy Desarrollador Full-stack de Buenos Aires con una fuerte base en front-end. Me especializo en React y TypeScript, y en los últimos dos años crecí en el backend con .NET, SQL Server y Azure.',
        'aboutMe.texts[1]': 'Aprendí React estudiando distintas formas de implementar las cosas sin depender de librerías de terceros. Gracias a eso tengo un conocimiento profundo de cómo funciona internamente, y eso sigue guiando cómo encaro el rendimiento.',
        'aboutMe.texts[2]': 'Empecé como Desarrollador Front-end en MContigo, en sitios de salud con millones de visitas diarias. Desde 2024 trabajo en Evodicom, desarrollando software de salud de punta a punta: visores DICOM, informes radiológicos, facturación y gestión de clínicas.',
        'aboutMe.texts[3]': 'Disfruto hacerme cargo de funcionalidades desde la base de datos hasta la interfaz, hacer las aplicaciones más rápidas y dejar el código mejor de lo que lo encontré. Estoy abierto a nuevos desafíos donde pueda seguir creciendo como desarrollador full-stack.',

        'footer.disclaimer': 'Ezequiel Aguirre.'
      },
  } as const;
