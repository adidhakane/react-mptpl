// src/components/products/ProductCategory.jsx
import React from 'react';
import ProductRow from './ProductRow';
import styles from '../../styles/Products.module.css';

const ProductCategory = ({ category, isDarkBackground, isVisible }) => {
  return (
    <div 
      id={category.id} 
      className={`
        ${styles.productCategory} 
        ${isDarkBackground ? styles.darkBackground : styles.lightBackground}
        ${isVisible ? styles.visibleCategory : ''}
      `}
    >
      <h2>{category.title}</h2>
      
      {category.products.map((product) => (
        <ProductRow 
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductCategory;
