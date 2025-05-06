import { useTranslation } from "react-i18next";
import { FaFacebook, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-base-200 text-base-content py-10 px-5 md:px-20 bg-">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-primary">JSP</h2>
          <p className="mt-2">
            {t(
              "footer.description",
              "We are a leading provider of sustainable power solutions in Thailand, committed to creating a better future with environmentally friendly technology."
            )}
          </p>
          <div className="mt-4">
            <a
              href="https://web.facebook.com/p/POWER-E-MODULARCOLTD-100051458839623"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-2xl hover:text-blue-500"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center"> {/* ใช้ ml-auto เพื่อขยับไปขวา */}
            <h3 className="text-lg font-semibold mb-2">{t("footer.quickLinks", "Quick Links")}</h3>
            <ul className="space-y-1">
              <li><a href="/home" className="hover:text-primary">{t("home", "Home")}</a></li>
              <li><a href="/about" className="hover:text-primary">{t("about", "About Us")}</a></li>
              <li><a href="/product" className="hover:text-primary">{t("products", "Products")}</a></li>
              <li><a href="/catalog" className="hover:text-primary">{t("catalog", "Catalog")}</a></li>
              <li><a href="#projectreference" className="hover:text-primary">{t("projectReference", "Project Reference")}</a></li>
            </ul>
          </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{t("contact", "Contact Us")}</h3>
          <p className="flex items-center gap-2"><FaPhone /> 081-987-9729</p>
          <p className="flex items-center gap-2"><FaEnvelope /> power.modular@gmail.com</p>
          <p className="flex items-center gap-2"><FaClock /> {t("footer.hours", "Mon - Fri, 8:00 AM - 5:00 PM")}</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t pt-5 text-center text-sm">
        <p>{t("footer.copyright", "© 2025 PowerEmodular. All Rights Reserved")}</p>
      </div>
    </footer>
  );
}

export default Footer;
