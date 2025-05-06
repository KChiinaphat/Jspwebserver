// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Service from "./pages/Service";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product />} />
          {/* สามารถเพิ่ม Route สำหรับหน้าอื่นๆ ได้ */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
