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
    en: 'A small set of proofs — work and code worth evaluating.',
    he: 'סט קטן וממוקד של הוכחות — עבודות וקוד שכדאי להעריך לפיהם.',
  },
  intro: {
    en: 'Three projects that show how the same person can move between applied AI, a customer-facing workflow, and a piece of personal product engineering.',
    he: 'שלושה פרויקטים שמראים איך אותו אדם נע בין AI יישומי, תהליך מול לקוח, וחתיכת הנדסת מוצר אישית.',
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
        en: 'A CV-tailoring assistant that maps job requirements to real experience while keeping the output factual, useful, and constrained.',
        he: 'עוזר להתאמת קורות חיים שממפה דרישות משרה לניסיון אמיתי, תוך שמירה על פלט מדויק, שימושי ומוגבל היטב.',
      },
      proofBullets: {
        en: [
          'Product thinking, guardrails, and credibility-aware AI output.',
          'Turns messy hiring inputs into a structured, repeatable workflow.',
          'Bridges applied AI with a clear business use case.',
        ],
        he: [
          'חשיבה מוצרית, guardrails, ופלט AI שמודע לאמינות.',
          'הופך קלט גיוסי מבולגן לזרימת עבודה מסודרת וחוזרת.',
          'מחבר בין AI יישומי לבין צורך עסקי ברור.',
        ],
      },
      tags: ['Python', 'FastAPI', 'React', 'Gemini', 'Applied AI'],
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/TailorCV' },
        { label: 'live', href: 'https://tailor-cv-tau.vercel.app' },
      ],
    },
    {
      id: 'whatsai',
      name: 'whatsai',
      eyebrow: {
        en: 'Customer-facing automation · Messaging-native',
        he: 'אוטומציה מול לקוח · ערוץ מסרים',
      },
      summary: {
        en: 'A messaging-focused AI assistant that lives where users already are — bringing conversational workflows and automation directly into WhatsApp.',
        he: 'עוזר AI ממוקד מסרים שחי איפה שהמשתמשים כבר נמצאים — מביא תהליכי שיחה ואוטומציה ישירות לתוך WhatsApp.',
      },
      proofBullets: {
        en: [
          'Meets users on the platform they already use — no new surface to learn.',
          'Connects messaging, automation, and AI response into one practical flow.',
          'Customer-facing AI aimed at real day-to-day workflows, not demos.',
        ],
        he: [
          'פוגש משתמשים בפלטפורמה שכבר קיימת אצלם — בלי ממשק חדש ללמוד.',
          'מחבר מסרים, אוטומציה ותגובת AI לזרימה אחת פרקטית.',
          'AI מול לקוח לעבודה יומיומית אמיתית — לא דמואים.',
        ],
      },
      tags: ['TypeScript', 'WhatsApp', 'AI Assistant', 'Automation'],
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/whatsai' },
        { label: 'live', href: 'https://whatsai.yishaik.com' },
      ],
    },
    {
      id: 'yishaik-com',
      name: 'yishaik.com',
      eyebrow: {
        en: 'Personal product · Bilingual platform',
        he: 'מוצר אישי · פלטפורמה דו־לשונית',
      },
      summary: {
        en: 'This site — a bilingual surface that curates positioning, work, and proof in one clear place.',
        he: 'האתר הזה — פלטפורמה דו־לשונית שמרכזת מיצוב, עבודות והוכחות במקום אחד ברור.',
      },
      proofBullets: {
        en: [
          'Information design, bilingual UX, and clear positioning.',
          'Built with Astro and Tailwind — tuned for accessibility, speed, and SEO.',
          'An ongoing personal product, not a static profile.',
        ],
        he: [
          'עיצוב מידע, חוויית משתמש דו־לשונית ומיצוב ברור.',
          'נבנה ב־Astro ו־Tailwind — עם דגש על נגישות, ביצועים ו־SEO.',
          'מוצר אישי מתפתח — לא פרופיל סטטי.',
        ],
      },
      tags: ['Astro', 'Tailwind', 'Bilingual', 'SEO'],
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/yishaik.com' },
        { label: 'live', href: 'https://yishaik.com' },
      ],
    },
  ] satisfies SelectedWorkItem[],
};
