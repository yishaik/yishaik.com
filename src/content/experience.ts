export interface Experience {
  company: { en: string; he: string };
  role: { en: string; he: string };
  period: string;
  description: { en: string; he: string };
  highlights: { en: string[]; he: string[] };
}

export const experience: Experience[] = [
  {
    company: { en: 'Profero (CyberProof)', he: 'פרופרו (סייברפרוף)' },
    role: { en: 'Software Developer', he: 'מפתח תוכנה' },
    period: '2022 — Present',
    description: {
      en: 'Developing cybersecurity platform tools and automation systems.',
      he: 'פיתוח כלי פלטפורמת אבטחת סייבר ומערכות אוטומציה.',
    },
    highlights: {
      en: [
        'Building security automation and orchestration tools',
        'Full-stack development with modern web technologies',
        'Integrating AI capabilities into security workflows',
      ],
      he: [
        'בניית כלי אוטומציה ותיאום אבטחה',
        'פיתוח Full-Stack עם טכנולוגיות ווב מודרניות',
        'שילוב יכולות AI בתהליכי אבטחה',
      ],
    },
  },
  {
    company: { en: 'Microsoft', he: 'מיקרוסופט' },
    role: { en: 'Support Engineer', he: 'מהנדס תמיכה' },
    period: '2016 — 2017',
    description: {
      en: 'Technical support engineering for enterprise customers.',
      he: 'הנדסת תמיכה טכנית ללקוחות ארגוניים.',
    },
    highlights: {
      en: [
        'Resolved complex technical issues for enterprise clients',
        'Collaborated with product teams on customer feedback',
        'Developed internal tools to improve support efficiency',
      ],
      he: [
        'פתרון בעיות טכניות מורכבות ללקוחות ארגוניים',
        'שיתוף פעולה עם צוותי מוצר על משוב לקוחות',
        'פיתוח כלים פנימיים לשיפור יעילות התמיכה',
      ],
    },
  },
  {
    company: { en: 'Secure Islands', he: 'Secure Islands' },
    role: { en: 'QA & Integration Engineer', he: 'מהנדס QA ואינטגרציה' },
    period: '2014 — 2016',
    description: {
      en: 'Quality assurance, system integration, and technical support for data security products.',
      he: 'אבטחת איכות, אינטגרציית מערכות ותמיכה טכנית למוצרי אבטחת מידע.',
    },
    highlights: {
      en: [
        'Led QA processes for enterprise security solutions',
        'Managed system integration projects',
        'Provided technical support and customer training',
      ],
      he: [
        'הובלת תהליכי QA לפתרונות אבטחה ארגוניים',
        'ניהול פרויקטי אינטגרציית מערכות',
        'מתן תמיכה טכנית והדרכת לקוחות',
      ],
    },
  },
  {
    company: { en: 'Elevation Academy', he: 'אלבשן אקדמי' },
    role: { en: 'Full-Stack Web Development', he: 'פיתוח ווב Full-Stack' },
    period: '2017',
    description: {
      en: 'Intensive full-stack web development bootcamp covering JavaScript, HTML, CSS, and MEAN Stack.',
      he: 'בוטקמפ אינטנסיבי לפיתוח ווב Full-Stack הכולל JavaScript, HTML, CSS ו-MEAN Stack.',
    },
    highlights: {
      en: [
        'JavaScript, HTML, CSS, MEAN Stack',
        'Full-stack project development',
        'Agile development methodologies',
      ],
      he: [
        'JavaScript, HTML, CSS, MEAN Stack',
        'פיתוח פרויקטים Full-Stack',
        'מתודולוגיות פיתוח Agile',
      ],
    },
  },
];
