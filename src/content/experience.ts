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
      en: 'Owned IT operations, infrastructure, and identity for a security company — supporting a distributed team and external auditors.',
      he: 'אחריות על תפעול IT, תשתיות וניהול זהויות בחברת סייבר — תמיכה בצוות מבוזר ובמבדקי ביקורת חיצוניים.',
    },
    highlights: {
      en: [
        'Day-to-day IT, endpoint, and identity management for a distributed team',
        'Cloud and SaaS administration with security and compliance review in mind',
        'Vendor coordination, procurement, and onboarding/offboarding processes',
      ],
      he: [
        'ניהול IT שוטף, נקודות קצה וזהויות לצוות מבוזר',
        'ניהול ענן ו־SaaS תוך התחשבות באבטחה ובדרישות compliance',
        'תיאום ספקים, רכש ותהליכי קליטה ופרידה',
      ],
    },
  },
  {
    company: { en: 'abra', he: 'אברה' },
    role: { en: 'IT Specialist (MSP)', he: 'מומחה IT (MSP)' },
    period: 'Sep 2020 — May 2024',
    description: {
      en: 'Delivered cloud IT and security services to SMB clients across multiple industries — combining hands-on delivery with customer-facing work.',
      he: 'מתן שירותי IT ואבטחת ענן ללקוחות SMB במגוון תחומים — שילוב של ביצוע hands-on ועבודה ישירה מול לקוחות.',
    },
    highlights: {
      en: [
        'Multi-client cloud IT and security delivery across Microsoft 365 and Google Workspace',
        'Owned client relationships end-to-end: scoping, implementation, ongoing operations',
        'Implemented MFA, conditional access, and endpoint hardening across client tenants',
      ],
      he: [
        'מתן שירותי IT ואבטחת ענן ללקוחות מרובים על Microsoft 365 ו־Google Workspace',
        'ניהול קשרי לקוח מקצה לקצה: אפיון, יישום ותפעול שוטף',
        'יישום MFA, conditional access והקשחת נקודות קצה בסביבות לקוח',
      ],
    },
  },
  {
    company: { en: 'Claroty', he: 'קלרוטי' },
    role: { en: 'Tier 3 Support Engineer', he: 'מהנדס תמיכה Tier 3' },
    period: 'Sep 2017 — Oct 2019',
    description: {
      en: 'Senior escalation engineer for an OT/IoT cybersecurity platform — owning the hardest issues end-to-end with enterprise customers.',
      he: 'מהנדס אסקלציה בכיר לפלטפורמת אבטחת OT/IoT — אחריות מקצה לקצה על תקלות מורכבות מול לקוחות ארגוניים.',
    },
    highlights: {
      en: [
        'Tier 3 escalation owner for enterprise customers — diagnosis, fix, and post-incident follow-up',
        'Bridged customers and R&D on platform bugs, network issues, and product improvements',
        'Customer-facing throughout: status updates, root-cause writeups, and remediation plans',
      ],
      he: [
        'אחריות על אסקלציות Tier 3 ללקוחות ארגוניים — אבחון, פתרון ומעקב פוסט־אירוע',
        'גישור בין לקוחות ל־R&D סביב באגים, בעיות רשת ושיפורי מוצר',
        'עבודה מול לקוחות לאורך כל התהליך: עדכוני סטטוס, סיכומי root-cause ותוכניות תיקון',
      ],
    },
  },
  {
    company: { en: 'Microsoft', he: 'מיקרוסופט' },
    role: { en: 'Premier Support Engineer', he: 'מהנדס תמיכת Premier' },
    period: 'Jan 2016 — Dec 2016',
    description: {
      en: 'Top-tier support for major enterprises and Premier customers — working within strict SLAs and customer-success expectations.',
      he: 'תמיכה ברמה הגבוהה ביותר ללקוחות ארגוניים ו־Premier — עבודה תחת SLA הדוק וציפיות גבוהות של customer success.',
    },
    highlights: {
      en: [
        'Enterprise and Premier customer support under SLA — accountable for resolution and communication',
        'Built an internal support knowledge center used by the team',
        'Helped migrate processes from a startup model to enterprise-grade support practices',
      ],
      he: [
        'תמיכה ללקוחות ארגוניים ו־Premier תחת SLA — אחריות על פתרון ועל תקשורת מול הלקוח',
        'הקמת מרכז ידע פנימי לתמיכה לשימוש הצוות',
        'סיוע במעבר מתהליכי סטארט־אפ לעבודה ברמת ארגון',
      ],
    },
  },
  {
    company: { en: 'Secure Islands Technologies (acquired by Microsoft)', he: 'Secure Islands (נרכשה ע״י מיקרוסופט)' },
    role: { en: 'Post-Sales Engineer', he: 'מהנדס פוסט־סייל' },
    period: 'Sep 2012 — Jul 2016',
    description: {
      en: 'Implementation and integration of data-security software at major international financial and legal institutions — long-form customer-facing engineering.',
      he: 'הטמעה ואינטגרציה של תוכנת אבטחת מידע במוסדות פיננסיים ומשפטיים בינלאומיים מובילים — עבודת הנדסה ממושכת מול לקוחות.',
    },
    highlights: {
      en: [
        'Integration and implementation engineer at international financial and legal institutions',
        'On-site and remote B2B customer engineering across Israel and abroad',
        'Bridge between customers and the product team — software testing, feedback, escalation',
      ],
      he: [
        'מהנדס אינטגרציה והטמעה במוסדות פיננסיים ומשפטיים בינלאומיים',
        'תמיכת לקוחות B2B באתר ומרחוק, בארץ ובחו״ל',
        'גישור בין הלקוח לצוות המוצר — בדיקות תוכנה, פידבק ואסקלציה',
      ],
    },
  },
  {
    company: { en: 'Ajax Union Inc', he: 'Ajax Union Inc' },
    role: { en: 'IT & Networks', he: 'IT ורשתות' },
    period: 'Feb 2011 — Feb 2012',
    description: {
      en: 'Hands-on IT infrastructure and network management for a US-based marketing agency.',
      he: 'ניהול תשתיות IT ורשתות hands-on עבור סוכנות שיווק אמריקאית.',
    },
    highlights: {
      en: [
        'Network monitoring and VoIP implementation',
        'Data center environment setup and ongoing operations',
        'Cloud and Google Apps administration',
      ],
      he: [
        'ניטור רשתות ויישום VoIP',
        'הקמת סביבת מרכז נתונים ותפעול שוטף',
        'ניהול ענן ו־Google Apps',
      ],
    },
  },
  {
    company: { en: 'Malam', he: 'מלם' },
    role: { en: 'PC & Network Technical Support', he: 'תמיכה טכנית מחשבים ורשתות' },
    period: 'Oct 2008 — Aug 2010',
    description: {
      en: 'Technical troubleshooting in a large government office with over 500 workstations.',
      he: 'פתרון תקלות טכניות במשרד ממשלתי גדול עם למעלה מ־500 תחנות עבודה.',
    },
    highlights: {
      en: [
        'Imaging, crash recovery, and data restoration at scale',
        'System and network troubleshooting in a high-stress environment',
        'Authored a user-friendly guide for non-technical users',
      ],
      he: [
        'הקמת תמונות מערכת, התאוששות מקריסות ושחזור נתונים בקנה מידה גדול',
        'פתרון תקלות מערכת ורשת בסביבה לחוצה',
        'כתיבת מדריך ידידותי למשתמשים שאינם אנשי IT',
      ],
    },
  },
  {
    company: { en: 'B.H. Comtec', he: 'B.H. Comtec' },
    role: { en: 'PC Hardware Technician', he: 'טכנאי חומרה' },
    period: 'Dec 2007 — Sep 2008',
    description: {
      en: 'Diagnosis and repair of hardware faults on desktops and laptops.',
      he: 'אבחון ותיקון תקלות חומרה במחשבים נייחים וניידים.',
    },
    highlights: {
      en: [
        'Hardware fault diagnosis and repair',
        'Software and hardware installation',
      ],
      he: [
        'אבחון ותיקון תקלות חומרה',
        'התקנת תוכנה וחומרה',
      ],
    },
  },
];
