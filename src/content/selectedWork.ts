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
  featured?: boolean;
}

export const selectedWorkContent = {
  kicker: {
    en: 'Selected work',
    he: 'עבודות נבחרות',
  },
  title: {
    en: 'A small set of proof for the kinds of systems I build.',
    he: 'סט קטן וממוקד של הוכחות לסוג המערכות שאני בונה.',
  },
  intro: {
    en: 'Instead of a generic gallery, this section highlights a few projects that best demonstrate systems thinking, implementation depth, and the ability to connect AI to real operational work.',
    he: 'במקום גלריית פרויקטים כללית, הסקשן הזה מציג כמה עבודות שמדגימות הכי טוב חשיבה מערכתית, עומק ביצוע, ויכולת לחבר AI לעבודה תפעולית אמיתית.',
  },
  items: [
    {
      id: 'tailorcv',
      name: 'TailorCV',
      eyebrow: {
        en: 'Applied AI for hiring workflows',
        he: 'AI יישומי לתהליכי גיוס',
      },
      summary: {
        en: 'A recruiter-facing CV tailoring system that maps job requirements to real experience while keeping the output factual, useful, and constrained.',
        he: 'מערכת התאמת קורות חיים שממפה דרישות משרה לניסיון אמיתי, תוך שמירה על פלט מדויק, שימושי ומוגבל היטב.',
      },
      proofBullets: {
        en: [
          'Shows product thinking, guardrails, and credibility-aware AI output.',
          'Demonstrates the ability to turn messy hiring inputs into a structured workflow.',
          'Bridges applied AI with a clear business use case and an employer-facing audience.',
        ],
        he: [
          'מוכיח חשיבה מוצרית, guardrails, ופלט AI שמודע לאמינות.',
          'מדגים יכולת להפוך קלט גיוסי מבולגן לזרימת עבודה מסודרת.',
          'מחבר בין AI יישומי, צורך עסקי ברור, וקהל יעד של מגייסים ומעסיקים.',
        ],
      },
      tags: ['Python', 'FastAPI', 'React', 'Applied AI', 'Hiring Workflow'],
      links: [
        { label: 'repo', href: 'https://github.com/yishaik/TailorCV' },
        { label: 'live', href: 'https://tailor-cv-tau.vercel.app' },
      ],
      featured: true,
    },
    {
      id: 'taskhiburim',
      name: 'TaskHiburim',
      eyebrow: {
        en: 'Operational workflow system',
        he: 'מערכת תפעולית לניהול זרימות עבודה',
      },
      summary: {
        en: 'A collaborative task management system that combines dashboard workflows, Telegram automation, scheduling, and AI-assisted coordination.',
        he: 'מערכת ניהול משימות שיתופית שמשלבת דשבורד, אוטומציית טלגרם, תזמון ותיאום בעזרת AI.',
      },
      proofBullets: {
        en: [
          'Connects multiple interfaces and automations into one working operational system.',
          'Shows ability to build internal tooling around real users and recurring workflows.',
          'Demonstrates delivery beyond a single front-end surface.',
        ],
        he: [
          'מחבר כמה ממשקים ואוטומציות למערכת תפעולית אחת שעובדת בפועל.',
          'מוכיח יכולת לבנות כלי עבודה סביב משתמשים אמיתיים וזרימות חוזרות.',
          'מדגים delivery שחורג ממסך בודד של frontend.',
        ],
      },
      tags: ['Next.js', 'React', 'Telegram', 'Automation', 'Internal Tools'],
    },
    {
      id: 'ai-agency',
      name: 'AI Agency',
      eyebrow: {
        en: 'Multi-agent orchestration',
        he: 'תזמור מערכות multi-agent',
      },
      summary: {
        en: 'A multi-agent platform with specialized AI roles, tool use, coordination patterns, and a system design lens rather than a single-bot mindset.',
        he: 'פלטפורמת multi-agent עם תפקידים מתמחים, שימוש בכלים, דפוסי תיאום, וראיית מערכת במקום חשיבה של בוט יחיד.',
      },
      proofBullets: {
        en: [
          'Shows architectural thinking around autonomous systems, specialization, and coordination.',
          'Proves comfort with more complex AI system design than prompt-layer wrappers.',
          'Supports the positioning around practical AI infrastructure and internal tooling.',
        ],
        he: [
          'מראה חשיבה ארכיטקטונית סביב מערכות אוטונומיות, התמחות ותיאום.',
          'מוכיח נוחות עם תכנון מערכות AI מורכבות יותר מאשר wrapper של prompts.',
          'תומך במיצוב של תשתיות AI פרקטיות וכלים פנימיים.',
        ],
      },
      tags: ['Python', 'Multi-Agent', 'FastAPI', 'React', 'System Design'],
    },
  ] satisfies SelectedWorkItem[],
};
