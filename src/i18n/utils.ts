import { defaultLang, ui, type Dictionary, type Lang } from "@/i18n/ui";

const EN_PREFIX = "/en";

export function isLang(value: string | undefined): value is Lang {
  return value === "es" || value === "en";
}

/**
 * Astro.currentLocale is undefined on routes it cannot map to a locale
 * (the shared 404 page, for one), so callers always fall back to the default.
 */
export function getLang(currentLocale: string | undefined): Lang {
  return isLang(currentLocale) ? currentLocale : defaultLang;
}

/**
 * Returns the dictionary widened to the Dictionary interface: consumers get
 * `string` and the optional keys, not the narrow literals `as const` infers.
 */
export function useTranslations(lang: Lang): Dictionary {
  return ui[lang];
}

/** Prefixes a root-relative path with the locale segment when needed. */
export function localizePath(path: string, lang: Lang): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (lang === defaultLang) return normalized;
  return normalized === "/" ? `${EN_PREFIX}/` : `${EN_PREFIX}${normalized}`;
}

/** Strips the locale segment, yielding the path as the default locale serves it. */
export function stripLocale(pathname: string): string {
  if (pathname === EN_PREFIX) return "/";
  if (pathname.startsWith(`${EN_PREFIX}/`)) {
    return pathname.slice(EN_PREFIX.length) || "/";
  }
  return pathname;
}

/** The same page in the other language, for the switcher and hreflang tags. */
export function alternatePath(pathname: string, lang: Lang): string {
  return localizePath(stripLocale(pathname), lang);
}
