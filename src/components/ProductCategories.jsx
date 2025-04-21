// import React, { useState } from 'react';
// import styles from '../styles/style.module.css';

// const ProductCategories = () => {
//   const [flippedCard, setFlippedCard] = useState(null);

//   const categories = [
//     {
//       title: "Industrial Products",
//       image: "/Images/Products-Industrial.jpg",
//       items: [
//         "Generating set Controllers",
//         "Synchronizing Controllers",
//         "Engine Controllers",
//         "Electronic Speed Governor",
//         "Ignition System for Gas Engines"
//       ]
//     },
//     {
//         title: "Automotive Products",
//         image: "/Images/Products-Automotive.jpg",
//         items: [
//           "Electronic Throttle Controls",
//           "Electric Powertrain",
//           "Battery Management system BMS",
//           "DC-DC Converter",
//           "Ultracapacitor & Li-ion Capacitor"
//         ]
//       },
//       {
//         title: "EV Products",
//         image: "/Images/Products-ElectricVehicles.jpg",
//         items: [
//           "Electric Vehicle Charging Systems",
//           "EV Motor Controllers",
//           "Battery Packs and Systems",
//           "Power Electronics for EVs"
//         ]
//       },
//       {
//         title: "IoT & Embedded Systems",
//         image: "/Images/Products-IoT&Emb.jpg",
//         items: [
//           "Embedded System Controllers",
//           "IoT Sensor Networks",
//           "Wireless Communication Systems",
//           "Smart Home Automation"
//         ]
//       }
//   ];

//   return (
//     <section className={styles.products}>
//       <h2>Our Products</h2>
//       <p>Madhura delivers Electro-mechanical products for Engine, Vehicle, Generating set & Control panel.</p>
      
//       <div className={styles.productGrid}>
//         {categories.map((category, index) => (
//           <div 
//             key={index}
//             className={`${styles.flipCard} ${flippedCard === index ? styles.flipped : ''}`}
//             onMouseEnter={() => setFlippedCard(index)}
//             onMouseLeave={() => setFlippedCard(null)}
//           >
//             <div className={styles.flipCardInner}>
//               <div className={styles.flipCardFront}>
//                 <img src={category.image} alt={category.title} />
//                 <h3>{category.title}</h3>
//               </div>
//               <div className={styles.flipCardBack}>
//                 <h3>{category.title}</h3>
//                 <ul>
//                   {category.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductCategories;


//Monica - Enhanced
// ProductCategories.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/style.module.css';

const ProductCategories = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const categories = [
    {
      title: "Industrial Products",
      image: "/Images/Products-Industrial.jpg",
      description: "Advanced control solutions for industrial power generation and engine management systems. Our reliable products ensure optimal performance in demanding environments.",
      slug: "industrial-products",
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
      image: "/Images/Products-Automotive.jpg",
      description: "Cutting-edge electronic systems for conventional vehicles. Our automotive solutions enhance efficiency, control, and power management across diverse applications.",
      slug: "automotive-products",
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
      image: "/Images/Products-ElectricVehicles.jpg",
      description: "Innovative electric vehicle technologies designed for the future of transportation. Our EV solutions deliver superior performance, range, and charging capabilities.",
      slug: "ev-products",
      items: [
        "Electric Vehicle Charging Systems",
        "EV Motor Controllers",
        "Battery Packs and Systems",
        "Power Electronics for EVs"
      ]
    },
    {
      title: "IoT & Embedded Systems",
      image: "/Images/Products-IoT&Emb.jpg",
      description: "Our embedded systems and IoT products enable seamless integration and intelligent automation.",
      slug: "iot-embedded-systems",
      items: [
        "Embedded System Controllers",
        "IoT Sensor Networks",
        "Wireless Communication Systems",
        "Smart Home Automation"
      ]
    }
  ];

  const handleCardFlip = (index) => {
    setFlippedCard(index);
  };

  const handleCardReset = () => {
    setFlippedCard(null);
  };

  return (
    <section className={styles.products} id="products">
      <h2>Our Products</h2>
      <p>Madhura delivers Electro-mechanical products for Engine, Vehicle, Generating set & Control panel.</p>
      
      <div className={styles.productGrid}>
        {categories.map((category, index) => (
          <div 
            key={index}
            className={`${styles.flipCard} ${flippedCard === index ? styles.flipped : ''}`}
            onMouseEnter={() => handleCardFlip(index)}
            onMouseLeave={handleCardReset}
            onFocus={() => handleCardFlip(index)}
            onBlur={handleCardReset}
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
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;