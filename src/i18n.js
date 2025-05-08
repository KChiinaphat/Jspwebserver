import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
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
          quicklinks: "Quick links",
          home: "Home",
          about: "About",
          contact: "Contact",
          welcome: "Welcome",
          products: "Products",
          aboutus: "About Us",
          services: "Services",
          product: "Product", 
          login: "Login",
          hours: "Mon - Fri, 8:00 AM - 5:00 PM",
          details: "Details",
          ourproducts: "Our Products",
        },
      },
      th: {
        translation: {
          quicklinks: "ลิงค์ด่วน",
          home: "หน้าแรก",
          about: "เกี่ยวกับเรา",
          contact: "ติดต่อ",
          welcome: "ยินดีต้อนรับ",
          products: "สินค้า",
          aboutus: "เกี่ยวกับเรา",
          services: "บริการ",
          product: "สินค้า",
          login: "เข้าสู่ระบบ",
          hours: "จันทร์ - ศุกร์, 8:00 น. - 17:00 น.",
          details: "รายละเอียด",
          ourproducts: "สินค้าของเรา",
        },
      },
    },
  });

export default i18n;
