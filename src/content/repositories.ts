export interface RepositoryHighlight {
  name: string;
  description: { en: string; he: string };
  tags: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export const repositoryHighlights: RepositoryHighlight[] = [
  {
    name: 'yishaik.com',
    description: {
      en: 'My personal website and portfolio — the place where I curate the work, positioning, and proof I want talent teams to evaluate first.',
      he: 'האתר האישי והפורטפוליו שלי — המקום שבו אני מרכז את העבודות, המיצוב וההוכחות שאני רוצה שצוותי גיוס יראו קודם.',
    },
    tags: ['Astro', 'Tailwind CSS', 'Personal Brand', 'Bilingual'],
    github: 'https://github.com/yishaik/yishaik.com',
    live: 'https://yishaik.com',
    featured: true,
  },
  {
    name: 'TailorCV',
    description: {
      en: 'AI-powered resume tailoring system that maps job requirements to real experience while keeping the output factual and recruiter-friendly.',
      he: 'מערכת התאמת קורות חיים מבוססת AI שממפה דרישות משרה לניסיון אמיתי, תוך שמירה על פלט מדויק, אמין וידידותי למגייסים.',
    },
    tags: ['Python', 'FastAPI', 'React', 'Google Gemini', 'Applied AI'],
    github: 'https://github.com/yishaik/TailorCV',
    live: 'https://tailor-cv-tau.vercel.app',
  },
  {
    name: 'whatsai',
    description: {
      en: 'Messaging-focused AI assistant project centered on practical conversational workflows and automation through WhatsApp.',
      he: 'פרויקט עוזר AI ממוקד מסרים, עם דגש על תהליכי שיחה פרקטיים ואוטומציה דרך WhatsApp.',
    },
    tags: ['TypeScript', 'WhatsApp', 'AI Assistant', 'Automation'],
    github: 'https://github.com/yishaik/whatsai',
  },
];
