import React from "react";
import ProductCard from "../components/Productcard";

const productData = [
  {
    name: "Switchgear Cabinet",
    description: "ตู้ควบคุมไฟฟ้าคุณภาพสูง ทนทาน ปลอดภัย",
    image: "/images/product1.jpg",
  },
  {
    name: "Control Panel",
    description: "แผงควบคุมระบบไฟฟ้า สำหรับงานอุตสาหกรรม",
    image: "/images/product2.jpg",
  },
];

const Product = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
