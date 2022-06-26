import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import it from "./locales/it/translation.json";
import en from "./locales/en/translation.json";

i18n.use(initReactI18next).init({
  lng: "it",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    it: { translation: it },
    en: { translation: en },
  },
});

export default i18n;
