import type { LocalizedText } from './types';

export interface WhyYishaiPillar {
  title: LocalizedText;
  body: LocalizedText;
}

export const whyYishaiContent = {
  kicker: {
    en: 'Why Yishai',
    he: 'למה ישי',
  },
  title: {
    en: 'Not another generic AI profile — a builder who knows how to build and how to operate.',
    he: 'לא עוד פרופיל AI גנרי — אלא builder שיודע גם לבנות וגם להפעיל.',
  },
  intro: {
    en: 'The differentiator is not just AI, and not just IT. It is the combination: taking real operational problems, translating them into useful systems, and connecting automation, infrastructure, and delivery that can actually run in the real world.',
    he: 'היתרון שלי הוא לא רק ב-AI, ולא רק ב-IT. הוא בשילוב ביניהם — לקחת בעיות אמיתיות, לתרגם אותן למערכות שימושיות, ולחבר בין אוטומציה, תשתיות ו-delivery שאפשר באמת להפעיל בעולם האמיתי.',
  },
  pillars: [
    {
      title: {
        en: 'Applied AI, not demo AI',
        he: 'AI עם כיוון פרקטי',
      },
      body: {
        en: 'Focused on systems that help teams operate better — not just flashy prototypes or one-off chat experiences.',
        he: 'ממוקד במערכות שעוזרות לאנשים לעבוד טוב יותר — לא רק בדמו מרשים או צ׳אטבוט חד־פעמי.',
      },
    },
    {
      title: {
        en: 'Systems thinking and automation',
        he: 'חשיבה מערכתית ואוטומציה',
      },
      body: {
        en: 'Looks for bottlenecks, maps workflows, and builds internal tools that reduce friction and improve execution speed.',
        he: 'מזהה צווארי בקבוק, ממפה תהליכים, ובונה כלים פנימיים שמורידים חיכוך ומשפרים את קצב העבודה.',
      },
    },
    {
      title: {
        en: 'Real infrastructure depth',
        he: 'עומק תשתיתי ותפעולי',
      },
      body: {
        en: 'Brings hands-on experience from enterprise environments, senior support, cloud, security, and technical operations.',
        he: 'מביא ניסיון אמיתי מסביבות enterprise, תמיכה בכירה, ענן, אבטחה ותפעול טכני.',
      },
    },
  ] satisfies WhyYishaiPillar[],
};
