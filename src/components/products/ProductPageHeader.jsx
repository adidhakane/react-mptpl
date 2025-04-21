// src/components/products/ProductPageHeader.jsx
import React from 'react';
import styles from '../../styles/Products.module.css';

const ProductPageHeader = () => {
  return (
    <section className={styles.productPageHeader}>
      <div className={styles.container}>
        <h1>Our Products</h1>
        <p>Discover our comprehensive range of high-quality control solutions for various industries</p>
      </div>
    </section>
  );
};

export default ProductPageHeader;
