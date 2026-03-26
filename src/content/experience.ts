export interface Experience {
  company: { en: string; he: string };
  role: { en: string; he: string };
  period: string;
  description: { en: string; he: string };
  highlights: { en: string[]; he: string[] };
}

export const experience: Experience[] = [
  {
    company: { en: 'Profero', he: 'פרופרו' },
    role: { en: 'IT Manager', he: 'מנהל IT' },
    period: 'Jun 2024 — Aug 2025',
    description: {
      en: 'IT management and cybersecurity operations.',
      he: 'ניהול IT ופעילות אבטחת סייבר.',
    },
    highlights: {
      en: [
        'Managed IT infrastructure and security operations',
        'Oversaw cybersecurity tools and automation systems',
        'Integrated AI capabilities into security workflows',
      ],
      he: [
        'ניהול תשתיות IT ופעולות אבטחה',
        'פיקוח על כלי אבטחת סייבר ומערכות אוטומציה',
        'שילוב יכולות AI בתהליכי אבטחה',
      ],
    },
  },
  {
    company: { en: 'abra', he: 'אברה' },
    role: { en: 'IT Specialist', he: 'מומחה IT' },
    period: 'Sep 2020 — May 2024',
    description: {
      en: 'Providing cloud IT and security services for small and medium businesses.',
      he: 'מתן שירותי IT ואבטחת ענן לעסקים קטנים ובינוניים.',
    },
    highlights: {
      en: [
        'Delivered cloud IT and security services to SMBs',
        'Managed multi-client environments and infrastructure',
        'Implemented security best practices across client systems',
      ],
      he: [
        'מתן שירותי IT ואבטחת ענן ללקוחות SMB',
        'ניהול סביבות ותשתיות לקוחות מרובים',
        'יישום שיטות עבודה מומלצות באבטחה במערכות לקוחות',
      ],
    },
  },
  {
    company: { en: 'Claroty', he: 'קלרוטי' },
    role: { en: 'Tier 3 Support Engineer', he: 'מהנדס תמיכה Tier 3' },
    period: 'Sep 2017 — Oct 2019',
    description: {
      en: 'Senior technical support engineering for an OT/IoT cybersecurity platform.',
      he: 'הנדסת תמיכה טכנית בכירה לפלטפורמת אבטחת סייבר OT/IoT.',
    },
    highlights: {
      en: [
        'Provided Tier 3 escalation support for enterprise customers',
        'Diagnosed and resolved complex platform and network issues',
        'Collaborated with R&D on product bugs and improvements',
      ],
      he: [
        'תמיכת Tier 3 ללקוחות ארגוניים',
        'אבחון ופתרון בעיות פלטפורמה ורשת מורכבות',
        'שיתוף פעולה עם R&D על באגים ושיפורי מוצר',
      ],
    },
  },
  {
    company: { en: 'Microsoft', he: 'מיקרוסופט' },
    role: { en: 'Support Engineer', he: 'מהנדס תמיכה' },
    period: 'Jan 2016 — Dec 2016',
    description: {
      en: 'Technical support engineering for enterprise and premier customers.',
      he: 'הנדסת תמיכה טכנית ללקוחות ארגוניים ו-Premier.',
    },
    highlights: {
      en: [
        'Provided top-level support to major enterprise and premier customers per SLA',
        'Built a support knowledge center and led migration from startup to enterprise environment',
        'Collaborated with product teams on customer feedback',
      ],
      he: [
        'תמיכה ברמה גבוהה ללקוחות ארגוניים ו-Premier לפי SLA',
        'בניית מרכז ידע לתמיכה והובלת מעיבר מסביבת סטארטאפ לארגון',
        'שיתוף פעולה עם צוותי מוצר על משוב לקוחות',
      ],
    },
  },
  {
    company: { en: 'Secure Islands', he: 'Secure Islands' },
    role: { en: 'Post Sales Engineer — Integration & Support', he: 'מהנדס פוסט-סיילס — אינטגרציה ותמיכה' },
    period: 'Sep 2012 — Jul 2016',
    description: {
      en: 'Implementation, integration, and support for data security software at major international institutions. (Company acquired by Microsoft.)',
      he: 'יישום, אינטגרציה ותמיכה בתוכנת אבטחת מידע במוסדות בינלאומיים מרכזיים. (החברה נרכשה על ידי מיקרוסופט.)',
    },
    highlights: {
      en: [
        'Implemented data security software at major international financial and legal institutions',
        'Provided B2B support to clients in Israel and abroad',
        'Conducted on-site integrations and high-level client support',
        'Performed manual software testing and QA',
      ],
      he: [
        'יישום תוכנת אבטחת מידע במוסדות פיננסיים ומשפטיים בינלאומיים מרכזיים',
        'תמיכת B2B ללקוחות בישראל ובחו"ל',
        'ביצוע אינטגרציות באתר ותמיכת לקוחות ברמה גבוהה',
        'בדיקות תוכנה ידניות ו-QA',
      ],
    },
  },
  {
    company: { en: 'Elevation Academy', he: 'אלבשן אקדמי' },
    role: { en: 'Full-Stack Web Development Course', he: 'קורס פיתוח ווב Full-Stack' },
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
