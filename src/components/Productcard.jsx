import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, description, image, price }) => {
  console.log("Product ID:", id); // ตรวจสอบว่า id ถูกส่งไปหรือไม่
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-2xl font-bold text-red-500">{`$${price} บาท`}</p>
        <Link to={`/products/${id}`} className="block text-center">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4">
            รายละเอียด
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
