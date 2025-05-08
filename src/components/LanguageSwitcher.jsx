import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="hidden md:flex gap-2 ml-4 text-sm items-center">
      <button onClick={() => changeLanguage("th")} className="hover:text-primary">TH</button>
      <span>|</span>
      <button onClick={() => changeLanguage("en")} className="hover:text-primary">EN</button>
    </div>
  );
}

export default LanguageSwitcher;
