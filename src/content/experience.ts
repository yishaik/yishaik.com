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
      en: 'Managing IT operations and infrastructure.',
      he: 'ניהול תפעול IT ותשתיות.',
    },
    highlights: {
      en: [
        'IT management and operations oversight',
        'Remote team coordination',
      ],
      he: [
        'ניהול IT ופיקוח על תפעול',
        'תיאום צוות מרחוק',
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
      en: 'Top level support to major enterprises and premier customers according to SLA.',
      he: 'תמיכה ברמה הגבוהה ביותר לארגונים גדולים ולקוחות פרימיום בהתאם ל-SLA.',
    },
    highlights: {
      en: [
        'Enterprise and premier customer support per SLA',
        'Built a support knowledge center',
        'Managed migration from start-up to enterprise processes',
      ],
      he: [
        'תמיכה ללקוחות ארגוניים ופרימיום בהתאם ל-SLA',
        'הקמת מרכז ידע לתמיכה',
        'ניהול מעבר מתהליכי סטארט-אפ לארגון',
      ],
    },
  },
  {
    company: { en: 'Secure Islands Technologies (acquired by Microsoft)', he: 'Secure Islands (נרכשה ע״י מיקרוסופט)' },
    role: { en: 'Post Sales Engineer', he: 'מהנדס פוסט-סייל' },
    period: 'Sep 2012 — Jul 2016',
    description: {
      en: 'Implementation and integration of data security software in major international financial and legal institutions.',
      he: 'הטמעה ואינטגרציה של תוכנת אבטחת מידע במוסדות פיננסיים ומשפטיים בינלאומיים מובילים.',
    },
    highlights: {
      en: [
        'Integration and implementation at international financial and legal institutions',
        'B2B client support in Israel and abroad',
        'Manual software testing',
        'On-site integration and high-level client support',
      ],
      he: [
        'אינטגרציה והטמעה במוסדות פיננסיים ומשפטיים בינלאומיים',
        'תמיכת לקוחות B2B בישראל ובחו״ל',
        'בדיקות תוכנה ידניות',
        'אינטגרציה באתר הלקוח ותמיכה ברמה גבוהה',
      ],
    },
  },
  {
    company: { en: 'Ajax Union Inc', he: 'Ajax Union Inc' },
    role: { en: 'IT and Networks', he: 'IT ורשתות' },
    period: 'Feb 2011 — Feb 2012',
    description: {
      en: 'IT infrastructure and network management.',
      he: 'ניהול תשתיות IT ורשתות.',
    },
    highlights: {
      en: [
        'Network monitoring',
        'VoIP implementation',
        'Data center environment setup',
        'Cloud and Google Apps management',
      ],
      he: [
        'ניטור רשתות',
        'הטמעת VoIP',
        'הקמת סביבת מרכז נתונים',
        'ניהול ענן ו-Google Apps',
      ],
    },
  },
  {
    company: { en: 'Malam', he: 'מלם' },
    role: { en: 'PC and Network Technical Support', he: 'תמיכה טכנית מחשבים ורשתות' },
    period: 'Oct 2008 — Aug 2010',
    description: {
      en: 'Technical troubleshooting within a large government office with over 500 workstations.',
      he: 'פתרון תקלות טכניות במשרד ממשלתי גדול עם למעלה מ-500 תחנות עבודה.',
    },
    highlights: {
      en: [
        'Image creation, system crashes, and data recoveries',
        'System and network issue resolution in high-stress environment',
        'Authored user-friendly guide for non-IT users',
        'Researched rare troubleshooting problems',
      ],
      he: [
        'יצירת תמונות מערכת, טיפול בקריסות ושחזור נתונים',
        'פתרון תקלות מערכת ורשת בסביבה לחוצה',
        'כתיבת מדריך ידידותי למשתמשים שאינם אנשי IT',
        'מחקר בעיות פתרון תקלות נדירות',
      ],
    },
  },
  {
    company: { en: 'B.H. Comtec', he: 'B.H. Comtec' },
    role: { en: 'PC Hardware Technician', he: 'טכנאי חומרה' },
    period: 'Dec 2007 — Sep 2008',
    description: {
      en: 'Identification and repair of hardware malfunctions in desktop and laptop computers.',
      he: 'זיהוי ותיקון תקלות חומרה במחשבים נייחים וניידים.',
    },
    highlights: {
      en: [
        'Hardware malfunction diagnosis and repair',
        'Software and hardware installation',
      ],
      he: [
        'אבחון ותיקון תקלות חומרה',
        'התקנת תוכנה וחומרה',
      ],
    },
  },
];
