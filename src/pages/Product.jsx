import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/Productcard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">  Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id} // ถ้าคุณใช้ _id แทน products_id
            id={product._id} // ถ้าคุณใช้ _id แทน products_id
            name={product.products_name} // ใช้ชื่อที่ตรงกับฟิลด์ใน API
            description={product.products_description}
            image={product.image_url}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
