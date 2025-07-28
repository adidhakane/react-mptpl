// ProductCategories.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/productCategories.module.css';

const ProductCategories = () => {
  const [flippedCard, setFlippedCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      title: "Industrial Products",
      image: "/Images/Products-Industrial.jpg",
      description: "Advanced control solutions for industrial power generation and engine management systems.",
      slug: "industrial-products",
      colorTheme: "industrial",
      applications: [
        "Power Plants",
        "Manufacturing Units", 
        "Oil & Gas Industry",
        "Marine Applications",
        "Mining Operations"
        // "Data Centers"
      ]
    },
    {
      title: "Automotive Products",
      image: "/Images/Products-Automotive.jpg",
      description: "Cutting-edge electronic systems for conventional vehicles enhancing efficiency and control.",
      slug: "automotive-products",
      colorTheme: "automotive",
      applications: [
        "Passenger Cars",
        "Commercial Vehicles",
        "Heavy Duty Trucks",
        "Agricultural Vehicles", 
        "Construction Equipment"
        // "Racing Vehicles"
      ]
    },
    {
      title: "EV Products",
      image: "/Images/Products-ElectricVehicles.jpg",
      description: "Innovative electric vehicle technologies for the future of sustainable transportation.",
      slug: "ev-products",
      colorTheme: "ev",
      applications: [
        "Electric Cars",
        "E-Bikes & Scooters",
        "Electric Buses",
        "Charging Stations",
        "Fleet Management"
        // "Smart Grid Integration"
      ]
    },
    {
      title: "IoT & Embedded Systems",
      image: "/Images/Products-IoT&Emb.jpg",
      description: "Smart embedded systems and IoT products enabling seamless integration and automation.",
      slug: "iot-embedded-systems",
      colorTheme: "iot",
      applications: [
        "Smart Cities",
        "Industrial IoT",
        "Home Automation",
        "Healthcare Monitoring",
        "Agriculture Tech"
        // "Environmental Sensing"
      ]
    }
  ];

  const handleCardHover = (index) => {
    setFlippedCard(index);
    setActiveCategory(index);
  };

  const handleCardLeave = () => {
    setFlippedCard(null);
    // Keep applications visible for a moment to allow interaction
    setTimeout(() => {
      setActiveCategory(null);
    }, );
  };

  const handleApplicationsHover = () => {
    // Keep applications visible when hovering over them
    setActiveCategory(activeCategory);
  };

  return (
    <section className={styles.products} id="products">
      <div className={styles.productsContainer}>
        <h2>Our Products</h2>
        <h3>Madhura delivers Electro-mechanical products for Engine, Vehicle, Generating set & Control panel.</h3>

        <div className={styles.productGrid}>
          {categories.map((category, index) => (
            <div 
              key={index}
              className={styles.productCardWrapper}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <div 
                className={`${styles.flipCard} ${flippedCard === index ? styles.flipped : ''} ${styles[category.colorTheme]}`}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${category.title}`}
              >
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img 
                      src={category.image} 
                      alt={`${category.title} category`} 
                      loading="lazy"
                    />
                    <h3>{category.title}</h3>
                  </div>
                  <div className={styles.flipCardBack}>
                    <h3>{category.title}</h3>
                    <p className={styles.categoryDescription}>{category.description}</p>
                    <Link 
                      to={`/products/${category.slug}`} 
                      className={styles.productButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Horizontal Applications Section */}
          {activeCategory !== null && (
            <div 
              className={styles.applicationsSection}
              onMouseEnter={handleApplicationsHover}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className={`${styles.applicationsContainer} ${styles[categories[activeCategory].colorTheme]}`}>
                <div className={styles.applicationsHeader}>
                  <h3 className={styles.applicationsTitle}>
                    Applications
                  </h3>
                  {/* <p className={styles.applicationsSubtitle}>Applications & Use Cases</p> */}
                </div>
                
                <div className={styles.applicationsGrid}>
                  {categories[activeCategory].applications.map((application, idx) => (
                    <div 
                      key={idx}
                      className={styles.applicationCard}
                    >
                      {application}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
