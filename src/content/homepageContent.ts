import type { LocalizedText } from './types';

interface HeroContent {
  kicker: LocalizedText;
  intro: LocalizedText;
}

export interface RoleTrack {
  code: string;
  label: LocalizedText;
  href: string;
}

export interface Principle {
  body: LocalizedText;
}

export const heroContent: HeroContent = {
  kicker: {
    en: 'Customer Success · IT Management · AI Engineering · Independent project work',
    he: 'Customer Success · ניהול IT · הנדסת AI · פרויקטים עצמאיים',
  },
  intro: {
    en: 'Seventeen years across customer-facing engineering, IT management, and applied AI — the same person can scope the problem with the team, build the system, and operate it in production.',
    he: '17 שנים של עבודה מול לקוחות, ניהול IT והנדסת AI יישומית — אותו אדם יכול למפות את הבעיה מול הצוות, לבנות את הפתרון ולהפעיל אותו בפרודקשן.',
  },
};

export const roleTracks: RoleTrack[] = [
  {
    code: 'CS',
    href: '#exp-microsoft',
    label: {
      en: 'Customer Success engineering, implementation, technical account work',
      he: 'הנדסת Customer Success, אינטגרציה וניהול טכני של לקוחות',
    },
  },
  {
    code: 'IT',
    href: '#exp-profero',
    label: {
      en: 'IT management, technical operations, cloud and security delivery',
      he: 'ניהול IT, תפעול טכני, ענן ואבטחה',
    },
  },
  {
    code: 'AI',
    href: '#work-tailorcv',
    label: {
      en: 'AI engineering, automation, internal tools, agent workflows',
      he: 'הנדסת AI, אוטומציה, כלים פנימיים, סוכנים',
    },
  },
  {
    code: '··',
    href: '#contact',
    label: {
      en: 'Independent project work and focused consulting',
      he: 'פרויקטים עצמאיים וייעוץ ממוקד',
    },
  },
];

export const principles: Principle[] = [
  {
    body: {
      en: 'I turn messy ideas, workflows, and constraints into clear systems, architectures, and execution plans.',
      he: 'אני הופך רעיונות מבולגנים, זרימות עבודה ואילוצים — למערכות ברורות, ארכיטקטורות ותוכניות ביצוע.',
    },
  },
  {
    body: {
      en: 'I build practical AI automations that connect real tools, real data, and real business processes.',
      he: 'אני בונה אוטומציות AI פרקטיות שמחברות כלים אמיתיים, מידע אמיתי ותהליכים עסקיים אמיתיים.',
    },
  },
  {
    body: {
      en: 'I care about reliability: logging, permissions, fallback paths, and human approval where it matters.',
      he: 'חשובה לי אמינות: לוגים, הרשאות, מסלולי fallback ואישור אנושי איפה שצריך.',
    },
  },
  {
    body: {
      en: 'I move fast, but I prefer durable solutions over fragile demos.',
      he: 'אני זז מהר, אבל מעדיף פתרונות עמידים על פני דמואים שבירים.',
    },
  },
  {
    body: {
      en: 'I think across product, infrastructure, UX, and operations — not just code.',
      he: 'אני חושב לרוחב — מוצר, תשתית, UX ותפעול — לא רק קוד.',
    },
  },
];
