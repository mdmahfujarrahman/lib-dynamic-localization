import i18next from "i18next";

export const changeLanguage = async (lang: string): Promise<void> => {
  if (typeof window !== "undefined") {
    await i18next.changeLanguage(lang); 
  } else {
    i18next.language = lang; 
    i18next.options.lng = lang;
  }
};
