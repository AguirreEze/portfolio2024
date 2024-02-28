import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // @ts-ignore Error from the oficial docs on Astro https://docs.astro.build/en/recipes/i18n/#translate-ui-strings
    return ui[lang][key] || ui[defaultLang][key];
  }
}