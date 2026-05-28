import type { LocalizedText } from './types';

interface HeroContent {
  kicker: LocalizedText;
  intro: LocalizedText;
}

export interface Principle {
  body: LocalizedText;
}

export const heroContent: HeroContent = {
  kicker: {
    en: 'Customer Success · IT · Applied AI',
    he: 'Customer Success · IT · AI יישומי',
  },
  intro: {
    en: '17 years scoping, building, and operating systems for the people who use them — now with applied AI in the mix.',
    he: '17 שנים של אפיון, בנייה והפעלת מערכות מול האנשים שמשתמשים בהן — היום גם עם AI יישומי בתמהיל.',
  },
};

export const principles: Principle[] = [
  {
    body: {
      en: 'Turn messy constraints into clear systems and plans.',
      he: 'הופך אילוצים מבולגנים למערכות ברורות ולתוכניות.',
    },
  },
  {
    body: {
      en: 'Build AI automations on real tools, data, and processes.',
      he: 'בונה אוטומציות AI על כלים, מידע ותהליכים אמיתיים.',
    },
  },
  {
    body: {
      en: 'Reliability first — logging, permissions, fallbacks, human approval.',
      he: 'אמינות קודם — לוגים, הרשאות, fallback ואישור אנושי.',
    },
  },
  {
    body: {
      en: 'Durable solutions over fragile demos.',
      he: 'פתרונות עמידים — לא דמואים שבירים.',
    },
  },
];
