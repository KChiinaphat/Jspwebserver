import { useTranslation } from "react-i18next";
import { FaFacebook, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import logo from "../assets/JSP_Logo.jpg";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-base-200 text-base-content py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="Logo" className="h-20 w-auto" />
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
          <h3 className="text-lg font-semibold mb-2">{t("quicklinks", "Quick Links")}</h3>
          <ul className="space-y-1">
            <li><a href="/home" className="hover:text-primary">{t("home", "Home")}</a></li>
            <li><a href="/about" className="hover:text-primary">{t("about", "About Us")}</a></li>
            <li><a href="/product" className="hover:text-primary">{t("products", "Products")}</a></li>
            <li><a href="/service" className="hover:text-primary">{t("services", "Services")}</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">{t("contact", "Contact Us")}</h3>
          <p className="flex items-center gap-2"><FaPhone /> <a href="tel:+66819879729" className="hover:text-primary">081-987-9729</a></p> {/* เพิ่มลิงค์เบอร์โทร */}
          <p className="flex items-center gap-2"><FaEnvelope /> power.modular@gmail.com</p>
          <p className="flex items-center gap-2"><FaClock /> {t("hours", "Mon - Fri, 8:00 AM - 5:00 PM")}</p>
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
