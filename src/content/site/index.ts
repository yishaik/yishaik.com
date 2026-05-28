// Central content loader. These JSON files are what the /admin CMS edits;
// components read everything from here. Each localized value is { en, he }.
import generalData from './general.json';
import heroData from './hero.json';
import aboutData from './about.json';
import experienceData from './experience.json';
import skillsData from './skills.json';
import contactData from './contact.json';

export type LocalizedText = { en: string; he: string };
export type Locale = 'en' | 'he';

export const general = generalData;
export const hero = heroData;
export const about = aboutData;
export const experienceContent = experienceData;
export const skillsContent = skillsData;
export const contact = contactData;

/** Resolve a `{ en, he }` value for the active locale. */
export function L(value: LocalizedText, locale: Locale): string {
  return value[locale];
}
