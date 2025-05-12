import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaShoppingCart, FaSearch, FaStar } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const ProductCard = ({ id, name, description, image, price, rating = 4.5, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat('th-TH').format(price);

  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-64">
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-primary/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        )}
        
        {/* Product Image */}
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`} 
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Link 
            to={`/products/${id}`} 
            className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            title={t("view", "View details")}
          >
            <FaEye />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <FaStar 
                key={index} 
                className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} 
                  ${index === Math.floor(rating) && rating % 1 > 0 ? 'text-yellow-400' : ''}`}
                size={14}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({rating})</span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-primary transition-colors">
          <Link to={`/products/${id}`}>
            {name}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">{description}</p>

        {/* Price and Button Row */}
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xl font-bold text-primary">{formattedPrice} บาท</p>
          <Link 
            to={`/products/${id}`}
            className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium transition-all bg-primary rounded-lg hover:bg-primary-dark group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full group-hover:translate-x-0 ease">
              <FaEye />
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:-translate-x-full ease">
              {t("details", "รายละเอียด")}
            </span>
            <span className="relative invisible">{t("details", "รายละเอียด")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;