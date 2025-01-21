import { useTranslation } from "react-i18next";

export const useT = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang: string) => i18n.changeLanguage(lang);
  return { t, changeLanguage };
};
