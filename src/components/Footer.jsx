import { useTranslation } from "react-i18next";
import { 
  FaFacebook, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaInstagram, 
  FaChevronRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/JSP_Logo.jpg";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">

      
      {/* Main Footer */}
      <div className="container mx-auto py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/">
              <img src={logo} alt="Power E-modular Logo" className="h-16 w-auto bg-white rounded-lg p-1" />
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              {t("footer.description", "Power E-modular is a leading company specializing in innovative electrical solutions for modern applications.")}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://web.facebook.com/p/POWER-E-MODULARCOLTD-100051458839623"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="#instagram"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#linkedin"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2">
              {t("quicklinks", "Quick Links")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/home" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FaChevronRight size={12} className="mr-2" />
                  {t("home", "Home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FaChevronRight size={12} className="mr-2" />
                  {t("about", "About Us")}
                </Link>
              </li>
              <li>
                <Link to="/product" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FaChevronRight size={12} className="mr-2" />
                  {t("products", "Products")}
                </Link>
              </li>
              <li>
                <Link to="/service" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FaChevronRight size={12} className="mr-2" />
                  {t("services", "Services")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-400 hover:text-primary transition-colors">
                  <FaChevronRight size={12} className="mr-2" />
                  {t("contact", "Contact Us")}
                </Link>
              </li>
            </ul>
          </div>

      

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b border-gray-700 pb-2">
              {t("contact", "Contact Us")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>{t("address", "123 Sukhumvit Rd, Bangkok 10110, Thailand")}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <a href="tel:+66819879729" className="hover:text-primary transition-colors">081-987-9729</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:power.modular@gmail.com" className="hover:text-primary transition-colors">power.modular@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-primary flex-shrink-0" />
                <span>{t("hours", "Mon - Fri, 8:00 AM - 5:00 PM")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            {t("footer.copyright", `© ${currentYear} Power E-modular. All Rights Reserved`)}
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6 text-sm">
              <li><a href="/privacy" className="text-gray-500 hover:text-primary transition-colors">{t("privacy", "Privacy Policy")}</a></li>
              <li><a href="/terms" className="text-gray-500 hover:text-primary transition-colors">{t("terms", "Terms of Service")}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;