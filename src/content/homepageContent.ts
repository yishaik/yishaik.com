import type { LocalizedText } from './types';

interface HeroContent {
  kicker: LocalizedText;
  intro: LocalizedText;
}

export const heroContent: HeroContent = {
  kicker: {
    en: 'For recruiters, hiring managers, and teams looking for a practical builder',
    he: 'למגייסים, מנהלים וצוותים שמחפשים builder פרקטי',
  },
  intro: {
    en: 'I build systems that help teams move faster, reduce friction, and turn operational complexity into workflows people can actually use.',
    he: 'אני בונה מערכות שעוזרות לצוותים לעבוד מהר יותר, להוריד חיכוך, ולהפוך מורכבות תפעולית לזרימות עבודה שאנשים באמת משתמשים בהן.',
  },
};
