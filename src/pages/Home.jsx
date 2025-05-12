import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaShieldAlt, FaTools, FaCertificate, FaUserTie } from "react-icons/fa";
import axios from "axios";

function Home() {
  const { t } = useTranslation();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ดึงข้อมูลจาก API
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-32 px-6 md:px-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">JSP METAL WORKS CO.,LTD</h1>
            <p className="text-xl mb-8">
              ผู้เชี่ยวชาญด้านการผลิตตู้ไฟฟ้าเปล่าคุณภาพสูง มาตรฐานอุตสาหกรรม
              ทั้งแบบเหล็กและสแตนเลส ตามความต้องการของลูกค้า
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/product">
                <button className="bg-primary hover:bg-primary-focus text-white px-6 py-3 rounded-lg font-semibold">
                  ดูสินค้าของเรา
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-lg font-semibold">
                  ติดต่อเรา
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">จุดเด่นของสินค้าเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <FaShieldAlt className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">ความปลอดภัยสูงสุด</h3>
              <p className="text-gray-600">
                ออกแบบตามมาตรฐานความปลอดภัยระดับสากล IP54, IP65 และ NEMA
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <FaTools className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">ผลิตตามสั่ง</h3>
              <p className="text-gray-600">
                รองรับการผลิตตามแบบและขนาดที่ลูกค้าต้องการ ทั้งเหล็กและสแตนเลส
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <FaCertificate className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">มาตรฐานอุตสาหกรรม</h3>
              <p className="text-gray-600">
                ได้รับการรับรองมาตรฐานระดับสากล ผ่านการทดสอบคุณภาพทุกชิ้น
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <FaUserTie className="text-5xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">ทีมงานมากประสบการณ์</h3>
              <p className="text-gray-600">
                ทีมวิศวกรและช่างผู้เชี่ยวชาญ พร้อมให้คำปรึกษาและแก้ไขปัญหา
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-16 px-6 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">ประเภทตู้ไฟฟ้าของเรา</h2>
          {loading ? (
            <p className="text-center">กำลังโหลด...</p>
          ) : error ? (
            <p className="text-center text-red-500">ข้อผิดพลาด: {error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((product) => (
                <div key={product._id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.products_name}</h3>
                    <p className="text-gray-600 mb-4">{product.products_description}</p>
                    <p className="text-gray-800 font-semibold mb-4">ราคา: {product.price.toLocaleString()} บาท</p>
                    <Link to={`/products/${product._id}`}>
                      <button className="text-primary hover:text-primary-focus font-semibold">
                        ดูเพิ่มเติม →
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">พร้อมให้คำปรึกษาเกี่ยวกับตู้ไฟฟ้าเปล่า</h2>
          <p className="text-xl mb-8">
            ติดต่อเราวันนี้เพื่อรับคำปรึกษาและใบเสนอราคาฟรี
          </p>
          <Link to="/contact">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold">
              ติดต่อเรา
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;