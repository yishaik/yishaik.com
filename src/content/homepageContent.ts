import type { LocalizedText } from './types';

interface HeroContent {
  kicker: LocalizedText;
  intro: LocalizedText;
}

export interface RoleTrack {
  code: string;
  label: LocalizedText;
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
    label: {
      en: 'Customer Success engineering, implementation, technical account work',
      he: 'הנדסת Customer Success, אינטגרציה וניהול טכני של לקוחות',
    },
  },
  {
    code: 'IT',
    label: {
      en: 'IT management, technical operations, cloud and security delivery',
      he: 'ניהול IT, תפעול טכני, ענן ואבטחה',
    },
  },
  {
    code: 'AI',
    label: {
      en: 'AI engineering, automation, internal tools, agent workflows',
      he: 'הנדסת AI, אוטומציה, כלים פנימיים, סוכנים',
    },
  },
  {
    code: '··',
    label: {
      en: 'Independent project work and focused consulting',
      he: 'פרויקטים עצמאיים וייעוץ ממוקד',
    },
  },
];
