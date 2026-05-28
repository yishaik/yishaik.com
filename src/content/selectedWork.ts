import type { LocalizedText } from './types';

interface WorkLink {
  label: 'repo' | 'live';
  href: string;
}

export interface ArchitectureFlow {
  steps: LocalizedText[];
  caption: LocalizedText;
}

export interface SelectedWorkItem {
  id: string;
  name: string;
  eyebrow: LocalizedText;
  problem: LocalizedText;
  summary: LocalizedText;
  proofBullets: {
    en: string[];
    he: string[];
  };
  tags: string[];
  status: LocalizedText;
  built: LocalizedText;
  links?: WorkLink[];
  architecture?: ArchitectureFlow;
}

export const selectedWorkContent = {
  title: {
    en: 'Proofs worth evaluating.',
    he: 'הוכחות שכדאי להעריך לפיהן.',
  },
  intro: {
    en: 'Three projects shipped end-to-end — a hiring tool, a persona chat, and this site.',
    he: 'שלושה פרויקטים שנשלחו מקצה לקצה — כלי גיוס, צ׳אט פרסונות, והאתר הזה.',
  },
  labels: {
    problem: { en: 'Problem', he: 'בעיה' },
    stack: { en: 'Stack', he: 'מחסנית' },
    status: { en: 'Status', he: 'סטטוס' },
    built: { en: 'Built', he: 'בנייה' },
  },
  items: [
    {
      id: 'tailorcv',
      name: 'TailorCV',
      eyebrow: {
        en: 'Applied AI · Hiring workflow',
        he: 'AI יישומי · תהליך גיוס',
      },
      problem: {
        en: 'Tailor CVs to a job without fabricating experience.',
        he: 'התאמת קו״ח למשרה — בלי לבדות ניסיון.',
      },
      summary: {
        en: 'Maps job requirements to real experience, with a fabrication guard that blocks any claim not in the source CV.',
        he: 'ממפה דרישות משרה לניסיון אמיתי, עם חסם הזיות שחוסם כל הצהרה שלא קיימת בקו״ח המקור.',
      },
      proofBullets: {
        en: [
          'Product thinking + guardrails on top of LLM output.',
          'Messy hiring inputs → structured, repeatable workflow.',
        ],
        he: [
          'חשיבה מוצרית ו־guardrails מעל פלט LLM.',
          'קלט גיוסי מבולגן → זרימת עבודה מסודרת וחוזרת.',
        ],
      },
      tags: ['Python', 'FastAPI', 'React', 'Gemini', 'Applied AI'],
      status: { en: 'Live · active', he: 'באוויר · פעיל' },
      built: { en: 'Solo', he: 'סולו' },
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/TailorCV' },
        { label: 'live', href: 'https://tailor-cv-tau.vercel.app' },
      ],
      architecture: {
        steps: [
          { en: 'CV + Job spec', he: 'קו״ח + משרה' },
          { en: 'Extract facts & requirements', he: 'חילוץ עובדות ודרישות' },
          { en: 'Map evidence ↔ requirements', he: 'מיפוי עדויות לדרישות' },
          { en: 'Rewrite (fabrication guard)', he: 'כתיבה מחדש (חסם הזיות)' },
          { en: 'Tailored CV + cover letter', he: 'קו״ח + מכתב מותאמים' },
        ],
        caption: {
          en: 'Every step is anchored in evidence — the guardrail blocks any claim not present in the source CV.',
          he: 'כל שלב מעוגן בעדות — ה־guardrail חוסם כל הצהרה שלא קיימת בקו״ח המקור.',
        },
      },
    },
    {
      id: 'whatsai',
      name: 'whatsai',
      eyebrow: {
        en: 'Applied AI · Persona chat',
        he: 'AI יישומי · צ׳אט פרסונות',
      },
      problem: {
        en: 'Switch between AI personas without leaking the API key client-side.',
        he: 'מעבר בין פרסונות AI בלי לחשוף את ה־API key ללקוח.',
      },
      summary: {
        en: 'A small web app for chatting with LLM-backed personas — API routes keep the model key on the server.',
        he: 'אפליקציית ווב קטנה לשיחה עם פרסונות LLM — ראוטי שרת שומרים את מפתח המודל בצד השרת.',
      },
      proofBullets: {
        en: [
          'Server-side routes keep the Gemini key off the client.',
          'Shipped end-to-end — Vite + React on Vercel.',
        ],
        he: [
          'ראוטים בצד שרת שומרים את מפתח Gemini מחוץ ללקוח.',
          'נשלח מקצה לקצה — Vite + React על Vercel.',
        ],
      },
      tags: ['TypeScript', 'React', 'Vite', 'Gemini', 'Vercel'],
      status: { en: 'Live · experiment', he: 'באוויר · ניסוי' },
      built: { en: 'Solo', he: 'סולו' },
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
      problem: {
        en: 'Surface positioning, work, and proof in one bilingual place.',
        he: 'לרכז מיצוב, עבודות והוכחות במקום אחד דו־לשוני.',
      },
      summary: {
        en: 'This site — bilingual, accessible, fast, and tuned for SEO. An ongoing product, not a static profile.',
        he: 'האתר הזה — דו־לשוני, נגיש, מהיר, ומכוון ל־SEO. מוצר מתפתח, לא פרופיל סטטי.',
      },
      proofBullets: {
        en: [
          'Astro + Tailwind, bilingual UX, accessibility-first.',
          'Tuned for speed and SEO.',
        ],
        he: [
          'Astro + Tailwind, UX דו־לשוני, נגישות קודם.',
          'מכוון לביצועים ול־SEO.',
        ],
      },
      tags: ['Astro', 'Tailwind', 'Bilingual', 'SEO'],
      status: { en: 'Live · active', he: 'באוויר · פעיל' },
      built: { en: 'Solo', he: 'סולו' },
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/yishaik.com' },
        { label: 'live', href: 'https://yishaik.com' },
      ],
    },
  ] satisfies SelectedWorkItem[],
};
