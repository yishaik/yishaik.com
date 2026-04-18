import type { LocalizedText } from './types';

interface HeroContent {
  kicker: LocalizedText;
  headline: LocalizedText;
  intro: LocalizedText;
  contextLabel: LocalizedText;
  contextTitle: LocalizedText;
  contextPoints: {
    en: string[];
    he: string[];
  };
}

interface ExperienceContent {
  kicker: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  proofStrip: {
    en: string[];
    he: string[];
  };
}

interface ContactContent {
  kicker: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  directLabel: LocalizedText;
  directTitle: LocalizedText;
  opportunityTypes: {
    en: string[];
    he: string[];
  };
}

export const heroContent: HeroContent = {
  kicker: {
    en: 'For recruiters, hiring managers, and teams looking for a practical builder',
    he: 'למגייסים, מנהלים וצוותים שמחפשים builder פרקטי',
  },
  headline: {
    en: 'Practical AI systems, automations, and internal tools — grounded in real IT, infrastructure, and operations.',
    he: 'מערכות AI פרקטיות, אוטומציות וכלים פנימיים — עם עומק אמיתי ב־IT, תשתיות ותפעול.',
  },
  intro: {
    en: 'I build systems that help teams move faster, reduce friction, and turn operational complexity into workflows people can actually use.',
    he: 'אני בונה מערכות שעוזרות לצוותים לעבוד מהר יותר, להוריד חיכוך, ולהפוך מורכבות תפעולית לזרימות עבודה שאנשים באמת משתמשים בהן.',
  },
  contextLabel: {
    en: 'What makes this profile useful',
    he: 'מה הופך את הפרופיל הזה לשימושי',
  },
  contextTitle: {
    en: 'A profile that connects applied AI with operational delivery.',
    he: 'פרופיל שמחבר בין AI יישומי לבין delivery תפעולי.',
  },
  contextPoints: {
    en: [
      'Builds useful systems, not just impressive demos.',
      'Combines AI capability with workflow thinking and implementation discipline.',
      'Comfortable at the intersection of product, automation, infra, and operations.',
    ],
    he: [
      'בונה מערכות שימושיות, לא רק דמואים מרשימים.',
      'משלב יכולות AI עם חשיבה תהליכית ומשמעת ביצוע.',
      'עובד טוב בצומת שבין מוצר, אוטומציה, תשתיות ותפעול.',
    ],
  },
};

export const experienceContent: ExperienceContent = {
  kicker: {
    en: 'Experience & credibility',
    he: 'ניסיון ואמינות',
  },
  title: {
    en: 'Professional depth that makes the current work more trustworthy.',
    he: 'עומק מקצועי שהופך גם את העבודה הנוכחית ליותר אמינה.',
  },
  intro: {
    en: 'Behind the current AI and automation work is a long arc of enterprise support, cloud, security, and technical operations roles. That history matters because it reduces the gap between idea and production reality.',
    he: 'מאחורי העבודה הנוכחית ב־AI ואוטומציה יש רצף ארוך של תפקידי enterprise support, ענן, אבטחה ותפעול טכני. ההיסטוריה הזו חשובה כי היא מצמצמת את הפער בין רעיון לבין מציאות תפעולית.',
  },
  proofStrip: {
    en: ['Microsoft', 'Claroty', 'abra', 'Profero'],
    he: ['Microsoft', 'Claroty', 'abra', 'Profero'],
  },
};

export const contactContent: ContactContent = {
  kicker: {
    en: 'Next step',
    he: 'השלב הבא',
  },
  title: {
    en: 'If the fit is relevant, let\'s talk.',
    he: 'אם יש התאמה, בוא נדבר.',
  },
  intro: {
    en: 'Open to conversations about full-time roles, focused consulting, and systems work involving AI, automation, internal tools, and technical operations.',
    he: 'פתוח לשיחות על תפקידי full-time, ייעוץ ממוקד, ועבודה מערכתית סביב AI, אוטומציה, כלים פנימיים ו־technical operations.',
  },
  directLabel: {
    en: 'Reach out directly',
    he: 'צור קשר ישירות',
  },
  directTitle: {
    en: 'Email is still the fastest way to start a serious conversation.',
    he: 'אימייל הוא עדיין הדרך הכי מהירה להתחיל שיחה רצינית.',
  },
  opportunityTypes: {
    en: [
      'AI systems and automation roles',
      'Internal tools or technical operations work',
      'Recruiter outreach and hiring conversations',
    ],
    he: [
      'תפקידי AI systems ואוטומציה',
      'תפקידי internal tools או technical operations',
      'פניות ממגייסים ושיחות hiring',
    ],
  },
};
