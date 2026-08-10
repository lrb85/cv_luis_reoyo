import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function getYearsOfExperience(): number {
  const startDate = new Date('2014-09-17');
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    const str = ui[lang][key] || ui[defaultLang][key];
    if (typeof str === 'string' && str.includes('{years}')) {
      return str.replace('{years}', getYearsOfExperience().toString());
    }
    return str as string;
  }
}
