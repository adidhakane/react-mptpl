// src/pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductPageHeader from '../components/products/ProductPageHeader';
import ProductOverview from '../components/products/ProductOverview';
import ProductCategoryNav from '../components/products/ProductCategoryNav';
import styles from '../styles/Products.module.css';

// Move categories outside the component so it doesn't recreate on every render
const categories = [
  {
    id: "industrial-products",
    title: "Industrial Products",
    products: [
      {
        id: "generating-controllers",
        title: "Generating Set Controllers (AMF)",
        description: "Our Automatic Mains Failure (AMF) controllers provide comprehensive monitoring and control for single generator sets. These controllers ensure seamless power transition during mains failure and offer advanced protection features.",
        features: [
          "Automatic engine start/stop based on mains supply status",
          "Comprehensive generator parameter monitoring",
          "Configurable input/output channels",
          "Multiple communication interfaces (RS485, CAN, USB)",
          "Event logging and remote monitoring capabilities"
        ],
        image: "/Images/Automatic-Battery-Monitoring-System.jpeg",
        imagePosition: "right"
      },
      {
        id: "synchronizing-controllers",
        title: "Synchronizing Controllers",
        description: "Our synchronizing controllers enable parallel operation of multiple generator sets, ensuring optimal load sharing and power management. These sophisticated controllers are designed for complex power generation systems.",
        features: [
          "Automatic synchronization of multiple generator sets",
          "Load sharing and power management",
          "Peak shaving and load dependent start/stop",
          "Mains protection and power import/export control",
          "Comprehensive system visualization and control"
        ],
        image: "/Images/Smart-Power-Distribution-Unit.jpeg",
        imagePosition: "left"
      },
      {
        id: "engine-controllers",
        title: "Engine Controllers for Pumps & Compressors",
        description: "Our specialized engine controllers are designed for industrial applications such as pumps, compressors, and other engine-driven equipment. These controllers provide reliable operation and protection for critical industrial processes.",
        features: [
          "Engine parameter monitoring and protection",
          "Process-specific control algorithms",
          "Pressure/flow/level control capabilities",
          "Flexible configuration for various applications",
          "Remote monitoring and control integration"
        ],
        image: "/Images/Embedded-Engine-Control-Unit.jpeg",
        imagePosition: "right"
      }
    ]
  },
  {
    id: "automotive-products",
    title: "Automotive Products",
    products: [
      {
        id: "electronic-throttle",
        title: "Electronic Throttle Controls",
        description: "Our Electronic Throttle Control systems provide precise control over engine speed and power output. These systems replace traditional mechanical linkages with electronic sensors and actuators for improved performance and efficiency.",
        features: [
          "Drive-by-wire technology for precise throttle control",
          "Adaptive control algorithms for various operating conditions",
          "Integration with vehicle management systems",
          "Enhanced fuel efficiency and emissions control",
          "Customizable for various vehicle applications"
        ],
        image: "/Images/Remote-Generator-Monitoring-System.jpeg",
        imagePosition: "right"
      },
      {
        id: "electric-powertrain",
        title: "Electric Powertrain",
        description: "Our Electric Powertrain solutions provide comprehensive power management for electric vehicles. These systems integrate motor controllers, battery management, and power distribution for optimal performance and efficiency.",
        features: [
          "High-efficiency motor control systems",
          "Integrated power management",
          "Regenerative braking capabilities",
          "Thermal management systems",
          "CAN/LIN communication for vehicle integration"
        ],
        image: "/Images/Industrial-IoT-(IIoT)-Data-Logger.jpeg",
        imagePosition: "left"
      }
    ]
  },
  {
    id: "ev-products",
    title: "EV Products",
    products: [
      {
        id: "ev-charging",
        title: "Electric Vehicle Charging Systems",
        description: "Our EV Charging Systems provide reliable and efficient charging solutions for electric vehicles. These systems feature advanced power management, user authentication, and network connectivity for seamless operation.",
        features: [
          "AC and DC charging capabilities",
          "Smart load management",
          "User authentication and billing integration",
          "Remote monitoring and diagnostics",
          "OCPP compliance for charging network integration"
        ],
        image: "/Images/Automatic-Battery-Monitoring-System.jpeg",
        imagePosition: "right"
      }
    ]
  },
  {
    id: "iot-embedded-systems",
    title: "IoT & Embedded Systems",
    products: [
      {
        id: "embedded-controllers",
        title: "Embedded System Controllers",
        description: "Our Embedded System Controllers provide reliable control and monitoring for various industrial and commercial applications. These controllers feature robust hardware, flexible I/O options, and comprehensive communication capabilities.",
        features: [
          "Modular hardware architecture",
          "Configurable I/O channels",
          "Multiple communication interfaces",
          "Real-time operating system",
          "Customizable application software"
        ],
        image: "/Images/Industrial-IoT-(IIoT)-Data-Logger.jpeg",
        imagePosition: "right"
      }
    ]
  }
];

const Products = () => {
  const { category } = useParams();
  const [setActiveCategory] = useState(null);
  const [pageBackground, setPageBackground] = useState('#ffffff');

  // Fix: Remove categories from dependency array since it's now outside the component
  useEffect(() => {
    if (category) {
      const currentCategory = categories.find(cat => cat.id === category);
      if (currentCategory) {
        setActiveCategory(currentCategory);
        setPageBackground(currentCategory.background);
      }
    }
  }, [category]); // ✅ Only category as dependency

  // Scroll to specific category if provided in URL
  useEffect(() => {
    if (category) {
      const element = document.getElementById(category);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [category]);

  return (
    <div id="wrapper" style={{ backgroundColor: pageBackground, transition: 'background-color 0.5s ease' }}>
      <Header />
      
      <ProductPageHeader />
      <ProductCategoryNav categories={categories} />
      <div className={styles.fullWidthContainer}>
        <ProductOverview />
        
        {categories.map((cat) => (
          <div 
            key={cat.id}
            id={cat.id}
            className={styles.productCategory}
          >
            <h2>{cat.title}</h2>
            
            {cat.products.map((product) => (
              <div 
                key={product.id} 
                id={product.id}
                className={styles.productRow}
              >
                {product.imagePosition === 'left' ? (
                  <>
                    <div className={styles.productImg}>
                      <img src={product.image} alt={product.title} loading="lazy" />
                    </div>
                    <div className={styles.productInfo}>
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <ul>
                        {product.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <a href="#" className={styles.btn}>Technical Specifications</a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.productInfo}>
                      <h2>{product.title}</h2>
                      <p>{product.description}</p>
                      <ul>
                        {product.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                      <a href="#" className={styles.btn}>Technical Specifications</a>
                    </div>
                    <div className={styles.productImg}>
                      <img src={product.image} alt={product.title} loading="lazy" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;