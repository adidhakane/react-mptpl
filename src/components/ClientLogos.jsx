import React from 'react';
import styles from '../styles/clientLogos.module.css';

const ClientLogos = () => {
  const logoCategories = [
    {
      title: "Engine Manufacturers",
      images: [
        "/Resized_Logos/Kirloskar-Oil-Engines-Ltd.png",
        "/Resized_Logos/Cummins-India-Ltd.png",
        // Add all other engine manufacturer logos
      ]
    },
    // Repeat for other categories
  ];

  return (
    <div className={styles.logoContainer}>
      {logoCategories.map((category, index) => (
        <div key={index} className={styles.category}>
          <h2>{category.title}</h2>
          <div className={styles.logoScroller}>
            <div className={styles.logoTrack}>
              {[...category.images, ...category.images].map((img, i) => (
                <div key={i} className={styles.logoItem}>
                  <img 
                    src={img} 
                    alt={category.title} 
                    className={styles.logoImage}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;