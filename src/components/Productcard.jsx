import React from "react";

const ProductCard = ({ name, description, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-sm mx-auto">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
