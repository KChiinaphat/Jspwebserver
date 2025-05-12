import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/JSP_Logo.jpg";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const { t } = useTranslation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Set active menu item based on current path
    const path = window.location.pathname;
    setActiveItem(path.substring(1) || "home");

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg py-2" 
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <img 
            src={logo} 
            alt="Power E-modular Logo" 
            className={`transition-all duration-300 ${
              scrolled ? "h-14 w-auto" : "h-16 w-auto"
            }`} 
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 px-8 font-medium ml-auto">
          <li>
            <Link 
              to="/home" 
              className={`py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeItem === "home" 
                  ? "text-primary after:w-full after:bg-primary" 
                  : "text-gray-700 after:bg-primary"
              }`}
            >
              {t("home", "Home")}
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeItem === "about" 
                  ? "text-primary after:w-full after:bg-primary" 
                  : "text-gray-700 after:bg-primary"
              }`}
            >
              {t("about", "About")}
            </Link>
          </li>
          <li>
            <Link 
              to="/service" 
              className={`py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeItem === "service" 
                  ? "text-primary after:w-full after:bg-primary" 
                  : "text-gray-700 after:bg-primary"
              }`}
            >
              {t("services", "Services")}
            </Link>
          </li>
          <li>
            <Link 
              to="/product" 
              className={`py-2 px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${
                activeItem === "product" 
                  ? "text-primary after:w-full after:bg-primary" 
                  : "text-gray-700 after:bg-primary"
              }`}
            >
              {t("product", "Products")}
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="ml-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
            >
              {t("login", "login")}
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center ml-6">
          <LanguageSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-gray-700 hover:text-primary p-2 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-gray-900/60 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <div 
        className={`fixed top-0 right-0 h-full w-[250px] md:hidden bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-primary"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        
        <div className="px-4 pb-4">
          <img src={logo} alt="Logo" className="h-14 w-auto mb-8" />
        </div>
        
        <ul className="flex flex-col">
          <li>
            <Link 
              to="/home" 
              className={`block py-3 px-6 border-l-4 ${
                activeItem === "home" ? "border-primary text-primary bg-primary/5" : "border-transparent"
              } hover:bg-gray-50`}
              onClick={() => setIsOpen(false)}
            >
              {t("home", "Home")}
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`block py-3 px-6 border-l-4 ${
                activeItem === "about" ? "border-primary text-primary bg-primary/5" : "border-transparent"
              } hover:bg-gray-50`}
              onClick={() => setIsOpen(false)}
            >
              {t("about", "About")}
            </Link>
          </li>
          <li>
            <Link 
              to="/service" 
              className={`block py-3 px-6 border-l-4 ${
                activeItem === "service" ? "border-primary text-primary bg-primary/5" : "border-transparent"
              } hover:bg-gray-50`}
              onClick={() => setIsOpen(false)}
            >
              {t("services", "Services")}
            </Link>
          </li>
          <li>
            <Link 
              to="/product" 
              className={`block py-3 px-6 border-l-4 ${
                activeItem === "product" ? "border-primary text-primary bg-primary/5" : "border-transparent"
              } hover:bg-gray-50`}
              onClick={() => setIsOpen(false)}
            >
              {t("product", "Products")}
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="block py-3 px-6 border-l-4 border-transparent hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t("login", "login")}
            </Link>
          </li>
          <li className="mt-4 px-6 py-4 border-t">
            <p className="text-sm text-gray-500 mb-2">{t("language", "Language")}</p>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;