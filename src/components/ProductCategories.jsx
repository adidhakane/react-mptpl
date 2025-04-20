import React, { useState } from 'react';
import styles from '../styles/style.module.css';

const ProductCategories = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const categories = [
    {
      title: "Industrial Products",
      image: "/Images/Industrial.jpeg",
      items: [
        "Generating set Controllers",
        "Synchronizing Controllers",
        "Engine Controllers",
        "Electronic Speed Governor",
        "Ignition System for Gas Engines"
      ]
    },
    {
        title: "Automotive Products",
        image: "/Images/Automotive.jpeg",
        items: [
          "Electronic Throttle Controls",
          "Electric Powertrain",
          "Battery Management system BMS",
          "DC-DC Converter",
          "Ultracapacitor & Li-ion Capacitor"
        ]
      },
      {
        title: "EV Products",
        image: "/Images/EV.jpeg",
        items: [
          "Electric Vehicle Charging Systems",
          "EV Motor Controllers",
          "Battery Packs and Systems",
          "Power Electronics for EVs"
        ]
      },
      {
        title: "IoT & Embedded Systems",
        image: "/Images/IOT&Embedded.jpeg",
        items: [
          "Embedded System Controllers",
          "IoT Sensor Networks",
          "Wireless Communication Systems",
          "Smart Home Automation"
        ]
      }
  ];

  return (
    <section className={styles.products}>
      <h2>Our Products</h2>
      <p>Madhura delivers Electro-mechanical products for Engine, Vehicle, Generating set & Control panel.</p>
      
      <div className={styles.productGrid}>
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`${styles.flipCard} ${flippedCard === index ? styles.flipped : ''}`}
            onMouseEnter={() => setFlippedCard(index)}
            onMouseLeave={() => setFlippedCard(null)}
          >
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img src={category.image} alt={category.title} />
                <h3>{category.title}</h3>
              </div>
              <div className={styles.flipCardBack}>
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;