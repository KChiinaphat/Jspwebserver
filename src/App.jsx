// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Product from "./pages/Product";  
import Service from "./pages/Service";
import ProductDetail from "./pages/ProductDetail";
import AdminPage from "./pages/Admin";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* แสดง Navbar และ Footer เฉพาะในหน้าที่ไม่ใช่ "/login" */}
      {!location.pathname.includes("/login") && <Navbar />}
      <ScrollToTop />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          {/* สามารถเพิ่ม Route สำหรับหน้าอื่นๆ ได้ */}
        </Routes>
      </main>
      {/* แสดง Footer เฉพาะในหน้าที่ไม่ใช่ "/login" */}
      {!location.pathname.includes("/login") && <Footer />}
    </div>
  );
}

export default App;
