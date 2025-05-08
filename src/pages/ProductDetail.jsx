import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  console.log("Product ID from URL:", id); // ตรวจสอบค่า id ที่ได้จาก URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => {
        console.error("Error fetching product:", err);
        // แสดงข้อความแสดงข้อผิดพลาดให้ผู้ใช้ทราบ
      });
  }, [id]);
  

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.products_name}</h1> {/* ใช้ชื่อฟิลด์ 'name' แทน 'products_name' */}
      <img src={product.image_url} alt={product.products_name} className="w-full max-w-lg mb-4" /> {/* ใช้ 'imageUrl' */}
      <p className="text-lg text-gray-700">{product.products_description}</p> {/* ใช้ 'description' */}
      <p className="text-2xl text-green-600 mt-2">{product.price} บาท</p>
    </div>
  );
};

export default ProductDetail;
