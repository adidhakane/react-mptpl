// src/components/products/ProductRow.jsx
import React from 'react';
import styles from '../../styles/Products.module.css';

const ProductRow = ({ product }) => {
  const { title, description, features, image, imagePosition, id } = product;
  
  const renderProductInfo = () => (
    <div className={styles.productInfo}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href="#" className={styles.btn}>Technical Specifications</a>
    </div>
  );
  
  const renderProductImage = () => (
    <div className={styles.productImg}>
      <img src={image} alt={title} loading="lazy" />
    </div>
  );
  
  return (
    <div className={styles.productRow} id={id}>
      {imagePosition === 'left' ? (
        <>
          {renderProductImage()}
          {renderProductInfo()}
        </>
      ) : (
        <>
          {renderProductInfo()}
          {renderProductImage()}
        </>
      )}
    </div>
  );
};

export default ProductRow;
