export interface SkillCategory {
  name: { en: string; he: string };
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: { en: 'Programming Languages', he: 'שפות תכנות' },
    icon: '{ }',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Kotlin', 'SQL', 'HTML/CSS'],
  },
  {
    name: { en: 'AI & Agents', he: 'AI וסוכנים' },
    icon: '🤖',
    skills: ['CrewAI', 'LangChain', 'OpenAI API', 'Claude API', 'Google Gemini', 'Multi-Agent Systems', 'RAG'],
  },
  {
    name: { en: 'Frontend', he: 'צד לקוח' },
    icon: '🎨',
    skills: ['React', 'Next.js', 'Astro', 'Tailwind CSS', 'Material UI', 'Jetpack Compose'],
  },
  {
    name: { en: 'Backend', he: 'צד שרת' },
    icon: '⚙️',
    skills: ['FastAPI', 'Node.js', 'Express', 'n8n', 'Telegram Bot API', 'REST APIs'],
  },
  {
    name: { en: 'Infrastructure', he: 'תשתיות' },
    icon: '☁️',
    skills: ['Docker', 'Cloudflare', 'GitHub Actions', 'Traefik', 'CI/CD', 'Linux'],
  },
  {
    name: { en: 'Databases & Tools', he: 'בסיסי נתונים וכלים' },
    icon: '🗄️',
    skills: ['PostgreSQL', 'Redis', 'Airtable', 'MongoDB', 'Room DB', 'Dify', 'Langfuse'],
  },
];
