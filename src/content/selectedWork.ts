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
    en: 'Three projects that show applied AI as something to actually ship — a hiring-workflow tool, a persona chat experiment, and this site you are reading.',
    he: 'שלושה פרויקטים שמראים AI יישומי בתור משהו שמשלחים לפרודקשן — כלי לתהליכי גיוס, ניסוי עם פרסונות, והאתר שאתה קורא עכשיו.',
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
        en: 'Applied AI · Persona chat',
        he: 'AI יישומי · צ׳אט פרסונות',
      },
      summary: {
        en: 'AI Persona Chat — a small web app for talking to different LLM-backed personas, with API routes that keep the model key on the server.',
        he: 'AI Persona Chat — אפליקציית ווב קטנה לשיחה עם פרסונות מבוססות־LLM, עם ראוטי שרת ששומרים את מפתח המודל מחוץ ללקוח.',
      },
      proofBullets: {
        en: [
          'Switch between personas to converse with distinct LLM-backed characters.',
          'Server-side API routes keep the Gemini key off the client, even in dev.',
          'Side project shipped end-to-end — Vite + React, deployed on Vercel.',
        ],
        he: [
          'מעבר בין פרסונות לשיחה עם דמויות שונות מבוססות־LLM.',
          'ראוטים בצד שרת שומרים את מפתח ה־Gemini הרחק מהלקוח, גם בפיתוח.',
          'פרויקט צד שנשלח מקצה לקצה — Vite + React, פרוס ב־Vercel.',
        ],
      },
      tags: ['TypeScript', 'React', 'Vite', 'Gemini', 'Vercel'],
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
