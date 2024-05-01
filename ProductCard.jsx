import React from 'react';
import './ProductCard.css';

const ProductCard = ({ productName, price, description, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={productName} style={{ maxWidth: '200px' }} />
      <div className="product-details">
        <h2>{productName}</h2>
        <p className="price">₹{price}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
