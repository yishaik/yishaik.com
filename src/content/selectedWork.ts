import type { LocalizedText } from './types';

interface WorkLink {
  label: 'repo' | 'live';
  href: string;
}

export interface SelectedWorkItem {
  id: string;
  name: string;
  eyebrow: LocalizedText;
  summary: LocalizedText;
  proofBullets: {
    en: string[];
    he: string[];
  };
  tags: string[];
  links?: WorkLink[];
}

export const selectedWorkContent = {
  title: {
    en: 'A small set of proof — work and code to be evaluated by.',
    he: 'סט קטן וממוקד של הוכחות — עבודות וקוד שחשוב לי שיעריכו אצלי.',
  },
  intro: {
    en: 'Instead of a generic gallery, a few projects and repositories that best demonstrate systems thinking, implementation depth, and the ability to connect AI to real operational work.',
    he: 'במקום גלריית פרויקטים כללית, כמה עבודות וריפוזיטוריז שמדגימים הכי טוב חשיבה מערכתית, עומק ביצוע, ויכולת לחבר AI לעבודה תפעולית אמיתית.',
  },
  items: [
    {
      id: 'tailorcv',
      name: 'TailorCV',
      eyebrow: {
        en: 'Applied AI · Hiring workflow',
        he: 'AI יישומי · תהליך גיוס',
      },
      summary: {
        en: 'A recruiter-facing CV tailoring system that maps job requirements to real experience while keeping the output factual, useful, and constrained.',
        he: 'מערכת התאמת קורות חיים שממפה דרישות משרה לניסיון אמיתי, תוך שמירה על פלט מדויק, שימושי ומוגבל היטב.',
      },
      proofBullets: {
        en: [
          'Shows product thinking, guardrails, and credibility-aware AI output.',
          'Turns messy hiring inputs into a structured, repeatable workflow.',
          'Bridges applied AI with a clear business use case.',
        ],
        he: [
          'חשיבה מוצרית, guardrails, ופלט AI שמודע לאמינות.',
          'הופך קלט גיוסי מבולגן לזרימת עבודה מסודרת.',
          'מחבר בין AI יישומי, צורך עסקי ברור וקהל יעד ברור.',
        ],
      },
      tags: ['Python', 'FastAPI', 'React', 'Gemini', 'Applied AI'],
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/TailorCV' },
        { label: 'live', href: 'https://tailor-cv-tau.vercel.app' },
      ],
    },
    {
      id: 'yishaik-com',
      name: 'yishaik.com',
      eyebrow: {
        en: 'Bilingual personal platform',
        he: 'פלטפורמה אישית דו־לשונית',
      },
      summary: {
        en: 'My personal site — a bilingual surface where I curate positioning, work, and proof in a single clear place.',
        he: 'האתר האישי שלי — פלטפורמה דו־לשונית שמרכזת מיצוב, עבודות והוכחות במקום אחד ברור.',
      },
      proofBullets: {
        en: [
          'Attention to information design, bilingual UX, and clear positioning.',
          'Built with Astro and Tailwind, tuned for accessibility and speed.',
          'An ongoing personal product — not a static profile.',
        ],
        he: [
          'דגש על עיצוב מידע, חוויית משתמש דו־לשונית ומיצוב ברור.',
          'נבנה ב-Astro ו-Tailwind, עם דגש על נגישות וביצועים.',
          'מוצר אישי מתפתח — לא פרופיל סטטי.',
        ],
      },
      tags: ['Astro', 'Tailwind', 'Bilingual', 'SEO'],
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/yishaik.com' },
        { label: 'live', href: 'https://yishaik.com' },
      ],
    },
    {
      id: 'whatsai',
      name: 'whatsai',
      eyebrow: {
        en: 'Messaging-native AI automation',
        he: 'אוטומציית AI ממוקדת מסרים',
      },
      summary: {
        en: 'A messaging-focused AI assistant that brings conversational workflows and automation directly into WhatsApp.',
        he: 'עוזר AI ממוקד מסרים שמביא תהליכי שיחה ואוטומציה ישירות לתוך WhatsApp.',
      },
      proofBullets: {
        en: [
          'Meets users on the platform they already use — no new surface to learn.',
          'Connects messaging, automation, and AI response into one practical flow.',
          'Applied AI aimed at real day-to-day workflows, not demos.',
        ],
        he: [
          'פוגש משתמשים בפלטפורמה שכבר קיימת אצלם — בלי ממשק חדש ללמוד.',
          'מחבר מסרים, אוטומציה ותגובת AI לזרימה אחת פרקטית.',
          'AI יישומי שמכוון לעבודה יומיומית אמיתית.',
        ],
      },
      tags: ['TypeScript', 'WhatsApp', 'AI Assistant', 'Automation'],
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/whatsai' },
        { label: 'live', href: 'https://whatsai.yishaik.com' },
      ],
    },
  ] satisfies SelectedWorkItem[],
};
