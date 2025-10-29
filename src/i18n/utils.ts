export async function loadTranslations(lang: string) {
  try {
    const translations = await import(`../locales/${lang}/common.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${lang}`, error);
    const fallback = await import(`../locales/en/common.json`);
    return fallback.default;
  }
}

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return lang || "en";
}
