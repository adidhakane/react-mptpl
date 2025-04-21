// src/components/products/ProductCategoryNav.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/Products.module.css';

const ProductCategoryNav = ({ categories }) => {
  const { category } = useParams();
  
  return (
    <div className={styles.categoryNavigation}>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id} className={cat.id === category ? styles.active : ''}>
            <Link to={`/products/${cat.id}`}>{cat.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryNav;
