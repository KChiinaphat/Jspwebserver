import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/JSP_Logo.jpg";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-base-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-20 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 px-8 text-black font-semibold text-lg ml-auto">
          <li><Link to="/home" className="hover:text-primary">{t("home", "Home")}</Link></li>
          <li><Link to="/about" className="hover:text-primary">{t("about", "About")}</Link></li>
          <li><Link to="/service" className="hover:text-primary">{t("services", "Services")}</Link></li>
          <li><Link to="/product" className="hover:text-primary">{t("product", "Product")}</Link></li>
          <li><Link to="/login" className="hover:text-primary">{t("login", "Login")}</Link></li>
        </ul>

        {/* Language Switcher */}
        <LanguageSwitcher />

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-4">
          <li><Link to="/home" onClick={() => setIsOpen(false)}>{t("home", "Home")}</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>{t("about", "About")}</Link></li>
          <li><Link to="/service" onClick={() => setIsOpen(false)}>{t("services", "Services")}</Link></li>
          <li><Link to="/product" onClick={() => setIsOpen(false)}>{t("product", "Product")}</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>{t("login", "Login")}</Link></li>
          {/* Language Switcher in mobile */}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
