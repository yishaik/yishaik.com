import type { LocalizedText } from './types';

export interface HomepageProofItem {
  value: LocalizedText;
  label: LocalizedText;
}

export const homepageProof: HomepageProofItem[] = [
  {
    value: { en: '17+', he: '17+' },
    label: {
      en: 'years across IT, cloud, security, and technical operations',
      he: 'שנות ניסיון ב־IT, ענן, אבטחה ותפעול טכני',
    },
  },
  {
    value: { en: '70+', he: '70+' },
    label: {
      en: 'projects and internal systems delivered',
      he: 'פרויקטים ומערכות פנימיות שנבנו',
    },
  },
  {
    value: { en: '50+', he: '50+' },
    label: {
      en: 'AI agents and automation workflows designed',
      he: 'סוכני AI וזרימות אוטומציה שתוכננו',
    },
  },
  {
    value: { en: 'Microsoft · Claroty', he: 'Microsoft · Claroty' },
    label: {
      en: 'enterprise environments with real operational constraints',
      he: 'סביבות enterprise עם אילוצים תפעוליים אמיתיים',
    },
  },
];
