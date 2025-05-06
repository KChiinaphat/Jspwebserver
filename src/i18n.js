// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "th",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          contact: "Contact",
          blog: "Blog",
          welcome: "Welcome",
        },
      },
      th: {
        translation: {
          home: "หน้าแรก",
          about: "เกี่ยวกับเรา",
          contact: "ติดต่อ",
          blog: "บล็อก",
          welcome: "ยินดีต้อนรับ",
        },
      },
    },
  });

export default i18n;
