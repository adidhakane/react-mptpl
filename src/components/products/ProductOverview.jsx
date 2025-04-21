// src/components/products/ProductOverview.jsx
import React from 'react';
import styles from '../../styles/Products.module.css';

const ProductOverview = () => {
  const overviewImages = [
    {
      src: "/Images/Automatic-Battery-Monitoring-System.jpeg",
      alt: "Product 1 Overview"
    },
    {
      src: "/Images/Smart-Power-Distribution-Unit.jpeg",
      alt: "Product 2 Overview"
    },
    {
      src: "/Images/Embedded-Engine-Control-Unit.jpeg",
      alt: "Product 3 Overview"
    },
    {
      src: "/Images/Remote-Generator-Monitoring-System.jpeg",
      alt: "Product 4 Overview"
    },
    {
      src: "/Images/Industrial-IoT-(IIoT)-Data-Logger.jpeg",
      alt: "Product 5 Overview"
    }
  ];

  return (
    <div className={styles.productOverview}>
      {overviewImages.map((image, index) => (
        <img 
          key={index} 
          src={image.src} 
          alt={image.alt} 
          loading={index > 1 ? "lazy" : "eager"}
        />
      ))}
    </div>
  );
};

export default ProductOverview;
