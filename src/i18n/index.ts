import english from "@/i18n/en.json";
import french from "@/i18n/fr.json";
import russian from "@/i18n/ru.json";

const LANG = {
  ENGLISH: "en",
  FRENCH: "fr",
  RUSSIAN: "ru",
};

export const getI18N = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return english;
  if (currentLocale === LANG.FRENCH) return french;
  if (currentLocale === LANG.RUSSIAN) return russian;
  return french;
};
