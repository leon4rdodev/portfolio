import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}

export function getAlternateUrl(url: URL): string {
  const lang = getLangFromUrl(url);
  const alternate = getAlternateLang(lang);
  return url.pathname.replace(`/${lang}`, `/${alternate}`);
}
