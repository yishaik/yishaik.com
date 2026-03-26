import en from './en.json';
import he from './he.json';

const translations: Record<string, Record<string, unknown>> = { en, he };

export type Locale = 'en' | 'he';

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: unknown = translations[locale];
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  return typeof value === 'string' ? value : key;
}

export function getDir(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'he' ? 'rtl' : 'ltr';
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'he' : 'en';
}

export function getLocalePath(locale: Locale): string {
  return locale === 'en' ? '/' : '/he/';
}
