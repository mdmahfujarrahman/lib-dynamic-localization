
import i18next from "i18next";
import { initReactI18next } from "react-i18next";


export const initializeLocalization = (
  resources: Record<string, Record<string, any>>,
  defaultLanguage: string = "en"
): void => {
  if (!i18next.isInitialized) {
    i18next.use(initReactI18next).init({
      resources,
      lng: defaultLanguage,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false, 
      },
    });
  }
};
