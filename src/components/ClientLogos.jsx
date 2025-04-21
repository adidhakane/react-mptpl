import React from 'react';
import styles from '../styles/clientLogos.module.css';

const ClientLogos = () => {
  const logoCategories = [
    {
      title: "Engine Manufacturers",
      images: [
        "/Resized_Logos/Kirloskar-Oil-Engines-Ltd.png",
        "/Resized_Logos/Cummins-India-Ltd.png",
        "/Resized_Logos/Greaves-Cotton-Ltd.jpg",
        "/Resized_Logos/AVETC-(Former-Hindustan-Motors-Ltd).png",
        "/Resized_Logos/Hindustan-Power-Plus-ltd-(CATERPILLER).png",
        "/Resized_Logos/Mahindra&Mahindra-Ltd.jpg",
        "/Resized_Logos/BEML.png",
        "/Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd.jpg"
      ]
    },
    {
      title:"Telecom Industries",
      images:[
        "/Resized_Logos/Reliance-Infocom.png",
        "/Resized_Logos/BSNL.png",
        "/Resized_Logos/Tata-Teleservices.png",
        "/Resized_Logos/Hutch-Vodafone.png",
        "/Resized_Logos/Airtel.png",
        "/Resized_Logos/Linage-Power.jpg",
        "/Resized_Logos/ITIL.jpg",
        "/Resized_Logos/GTL.png",
        "/Resized_Logos/INDUS.png",
        "/Resized_Logos/ESSAR.jpg"
      ]
    },
    {
      title:"Control Panel Manufacturers",
      images:[
        "/Resized_Logos/Accusonic Controls Pvt Ltd, Pune.png",
        "/Resized_Logos/Autocon Engineers Pvt LTd, Pune.jpg",
        "/Resized_Logos/Loha Electric Company, Bangalore.png",
        "/Resized_Logos/Power Control Engineers, Pune.jpg",
        "/Resized_Logos/Accurate Industrial Controls, Pune.jpg",
        "/Resized_Logos/Sarthak Engineers, Pune.jpg" ,
        "/Resized_Logos/Priya Electricals, Chennai.jpg",
        "/Resized_Logos/R. A. Industrial, Kolkata.png",
        "/Resized_Logos/EAP, Kolkata.jpg" ,
        "/Resized_Logos/Power Tech Systems, Pune.jpg"
      ]
    },
    {
      title:"Vehicle Manufacturers",
      images:[
        "Resized_Logos/Tata-Motors.png",
        "Resized_Logos/BEML2.png",
        "Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd2.jpg",
                                     
      ]
    },
    {
      title:"Generating Set Manufacturers / Dealers",
      images:[
        "Resized_Logos/Ashok-Leyland.png",
        "Resized_Logos/Sterling-Generators-Pvt-Ltd.png",
        "Resized_Logos/Jakson-Engineers-Ltd-New-Delhi.jpg",
        "Resized_Logos/Rai-Industrial-Power-Pvt-Ltd.jpg",
        "Resized_Logos/Powerica.jpg",
        "Resized_Logos/Pai-Kane-group.png",
        "Resized_Logos/Sudhir-Gensets-Ltd.jpg",
        "Resized_Logos/Empower-Genset-Pvt-Ltd.jpg",
        "Resized_Logos/Genset India Ltd., Kolkata.jpg",
        "Resized_Logos/Supernova Engineers Ltd, Ahmadabad.png",
        "Resized_Logos/MAK Controls Pvt Ltd, Coimbatore.jpg","Resized_Logos/Meera & Co., Ludhiana.png",
        "Resized_Logos/United Machinery, Kolkata.jpg",
        "Resized_Logos/Lambda Group, New Delhi.png",
        "Resized_Logos/Accurate Power Systems, Pune.jpg"
      ]
    }
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