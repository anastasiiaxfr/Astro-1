import english from "@/i18n/en.json";
import french from "@/i18n/fr.json";

const LANG = {
  ENGLISH: "en",
  FRENCH: "fr",
};

export const getI18N = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === LANG.ENGLISH) return english;
  if (currentLocale === LANG.FRENCH) return french;
  return french;
};
