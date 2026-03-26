export interface Project {
  id: string;
  name: string;
  description: { en: string; he: string };
  tags: string[];
  category: 'ai' | 'web' | 'mobile' | 'tools';
  github?: string;
  live?: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: 'ai-agency',
    name: 'AI Agency',
    description: {
      en: 'Multi-agent orchestration platform with 50+ specialized AI agents organized in a hierarchical structure. Features inter-agent communication, natural language interface, and 26+ integrated tools.',
      he: 'פלטפורמת תיאום רב-סוכנית עם 50+ סוכני AI מתמחים במבנה היררכי. כוללת תקשורת בין-סוכנית, ממשק שפה טבעית ו-26+ כלים משולבים.',
    },
    tags: ['Python', 'CrewAI', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    category: 'ai',
    featured: true,
    gradient: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'merkaz-crm',
    name: 'Merkaz CRM',
    description: {
      en: 'Smart CRM platform powered by 12 specialized AI agents for automated business processes, market research, impact analysis, and report generation with Hebrew-first design.',
      he: 'פלטפורמת CRM חכמה מופעלת על ידי 12 סוכני AI מתמחים לתהליכים עסקיים אוטומטיים, מחקר שוק, ניתוח השפעה והפקת דוחות בעיצוב עברית-ראשון.',
    },
    tags: ['Python', 'React', 'Dify', 'n8n', 'Langfuse', 'PostgreSQL'],
    category: 'ai',
    featured: true,
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'taskhiburim',
    name: 'TaskHiburim',
    description: {
      en: 'Collaborative task management system with web dashboard, Telegram bot with AI agent, Mini App, notification scheduler, and n8n workflow integration.',
      he: 'מערכת ניהול משימות שיתופית עם לוח בקרה, בוט טלגרם עם סוכן AI, Mini App, מתזמן התראות ואינטגרציה עם n8n.',
    },
    tags: ['Next.js', 'React', 'Tailwind', 'Telegram Bot', 'Claude AI', 'Airtable'],
    category: 'web',
    featured: true,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'tailorcv',
    name: 'TailorCV',
    description: {
      en: 'AI-powered CV tailoring system that adapts your resume to job postings. Features job extraction, requirements mapping, CV generation with QA guardrails — never fabricates experience.',
      he: 'מערכת התאמת קורות חיים מבוססת AI שמתאימה את הקו"ח להצעות עבודה. כוללת חילוץ דרישות, מיפוי, הפקת קו"ח עם בקרת איכות — לעולם לא ממציאה ניסיון.',
    },
    tags: ['Python', 'FastAPI', 'React', 'Material UI', 'Google Gemini'],
    category: 'ai',
    featured: true,
    gradient: 'from-orange-500 to-red-600',
  },
  {
    id: 'portals-mvp',
    name: 'Portals',
    description: {
      en: 'Tourist souvenir experience platform — upload a photo, choose a portal, and get an AI-generated story with animated video. Bilingual Hebrew & English.',
      he: 'פלטפורמת חוויית מזכרות לתיירים — העלו תמונה, בחרו פורטל וקבלו סיפור מיוצר ב-AI עם וידאו מונפש. דו-לשוני עברית ואנגלית.',
    },
    tags: ['Python', 'FastAPI', 'React', 'Google Gemini', 'Veo AI'],
    category: 'web',
    featured: false,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'nueroflix',
    name: 'Nueroflix',
    description: {
      en: 'AI Video Director — automated video creation for educational content using AI agents (Director, Script Writer, Set Designer). Built for Google Hackathon.',
      he: 'במאי וידאו AI — יצירת וידאו אוטומטית לתוכן חינוכי באמצעות סוכני AI (במאי, כותב תסריט, מעצב סט). נבנה להאקתון של Google.',
    },
    tags: ['Next.js', 'AI Agents', 'Google Gemini', 'Video Generation'],
    category: 'ai',
    featured: false,
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    id: 'researchcrew',
    name: 'ResearchCrew',
    description: {
      en: 'Automated research system with a 3-agent crew: Senior Researcher, Data Analyst, and Report Writer. Web UI with real-time progress tracking.',
      he: 'מערכת מחקר אוטומטית עם צוות של 3 סוכנים: חוקר בכיר, מנתח נתונים וכותב דוחות. ממשק ווב עם מעקב התקדמות בזמן אמת.',
    },
    tags: ['Python', 'CrewAI', 'React', 'Web Search'],
    category: 'ai',
    featured: false,
    gradient: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'openclaw',
    name: 'OpenClaw',
    description: {
      en: 'Personal AI assistant using messaging platforms (WhatsApp, Telegram, Slack). Employs LLMs with a modular skills system for versatile task handling.',
      he: 'עוזר AI אישי המשתמש בפלטפורמות הודעות (WhatsApp, Telegram, Slack). מפעיל מודלי שפה עם מערכת מיומנויות מודולרית לטיפול במגוון משימות.',
    },
    tags: ['Python', 'LLMs', 'WhatsApp', 'Telegram', 'Skills System'],
    category: 'ai',
    featured: true,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'boty',
    name: 'Boty',
    description: {
      en: 'Comprehensive Android AI assistant built with Kotlin and Jetpack Compose. Features local LLM execution via MediaPipe, privacy-focused with clean architecture.',
      he: 'עוזר AI אנדרואיד מקיף בנוי עם Kotlin ו-Jetpack Compose. הרצת LLM מקומית דרך MediaPipe, ממוקד פרטיות עם ארכיטקטורה נקייה.',
    },
    tags: ['Kotlin', 'Jetpack Compose', 'MediaPipe', 'Room DB', 'Hilt'],
    category: 'mobile',
    featured: false,
    gradient: 'from-sky-500 to-blue-600',
  },
  {
    id: 'grokvest',
    name: 'Grokvest',
    description: {
      en: 'Automated crypto trading bot with ML-powered decision making using XGBoost and OpenAI API for market analysis and trade execution.',
      he: 'בוט מסחר קריפטו אוטומטי עם קבלת החלטות מבוססת ML באמצעות XGBoost ו-OpenAI API לניתוח שוק וביצוע עסקאות.',
    },
    tags: ['Python', 'XGBoost', 'OpenAI', 'Trading APIs'],
    category: 'tools',
    featured: false,
    gradient: 'from-lime-500 to-green-600',
  },
  {
    id: 'video-maker',
    name: 'Video Maker',
    description: {
      en: 'Automated video editing tool for creating personalized event videos using Python, React, and FFmpeg for media processing.',
      he: 'כלי עריכת וידאו אוטומטי ליצירת סרטוני אירועים מותאמים אישית באמצעות Python, React ו-FFmpeg לעיבוד מדיה.',
    },
    tags: ['Python', 'React', 'FFmpeg'],
    category: 'tools',
    featured: false,
    gradient: 'from-red-500 to-orange-600',
  },
];
