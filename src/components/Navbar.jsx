import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-100 p-4 shadow-md  ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
       <img src="/public/JSP_Logo.jpg" alt="Logo" className="h-20 w-auto" />
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 px-8 text-black font-semibold text-lg">
        <li><Link to="/home" className="hover:text-primary">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/service" className="hover:text-primary">Services</Link></li>
          <li><Link to="/product" className="hover:text-primary">Product</Link></li>
          <li><Link to="/login" className="hover:text-primary">Login</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-4">
          <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
