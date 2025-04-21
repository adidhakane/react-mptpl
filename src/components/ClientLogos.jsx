// import React from 'react';
// import styles from '../styles/clientLogos.module.css';

// const ClientLogos = () => {
//   const logoCategories = [
//     {
//       title: "Engine Manufacturers",
//       images: [
//         "/Resized_Logos/Kirloskar-Oil-Engines-Ltd.png",
//         "/Resized_Logos/Cummins-India-Ltd.png",
//         "/Resized_Logos/Greaves-Cotton-Ltd.jpg",
//         "/Resized_Logos/AVETC-(Former-Hindustan-Motors-Ltd).png",
//         "/Resized_Logos/Hindustan-Power-Plus-ltd-(CATERPILLER).png",
//         "/Resized_Logos/Mahindra&Mahindra-Ltd.jpg",
//         "/Resized_Logos/BEML.png",
//         "/Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd.jpg"
//       ]
//     },
//     {
//       title:"Telecom Industries",
//       images:[
//         "/Resized_Logos/Reliance-Infocom.png",
//         "/Resized_Logos/BSNL.png",
//         "/Resized_Logos/Tata-Teleservices.png",
//         "/Resized_Logos/Hutch-Vodafone.png",
//         "/Resized_Logos/Airtel.png",
//         "/Resized_Logos/Linage-Power.jpg",
//         "/Resized_Logos/ITIL.jpg",
//         "/Resized_Logos/GTL.png",
//         "/Resized_Logos/INDUS.png",
//         "/Resized_Logos/ESSAR.jpg"
//       ]
//     },
//     {
//       title:"Control Panel Manufacturers",
//       images:[
//         "/Resized_Logos/Accusonic Controls Pvt Ltd, Pune.png",
//         "/Resized_Logos/Autocon Engineers Pvt LTd, Pune.jpg",
//         "/Resized_Logos/Loha Electric Company, Bangalore.png",
//         "/Resized_Logos/Power Control Engineers, Pune.jpg",
//         "/Resized_Logos/Accurate Industrial Controls, Pune.jpg",
//         "/Resized_Logos/Sarthak Engineers, Pune.jpg" ,
//         "/Resized_Logos/Priya Electricals, Chennai.jpg",
//         "/Resized_Logos/R. A. Industrial, Kolkata.png",
//         "/Resized_Logos/EAP, Kolkata.jpg" ,
//         "/Resized_Logos/Power Tech Systems, Pune.jpg"
//       ]
//     },
//     {
//       title:"Vehicle Manufacturers",
//       images:[
//         "Resized_Logos/Tata-Motors.png",
//         "Resized_Logos/BEML2.png",
//         "Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd2.jpg",
                                     
//       ]
//     },
//     {
//       title:"Generating Set Manufacturers / Dealers",
//       images:[
//         "Resized_Logos/Ashok-Leyland.png",
//         "Resized_Logos/Sterling-Generators-Pvt-Ltd.png",
//         "Resized_Logos/Jakson-Engineers-Ltd-New-Delhi.jpg",
//         "Resized_Logos/Rai-Industrial-Power-Pvt-Ltd.jpg",
//         "Resized_Logos/Powerica.jpg",
//         "Resized_Logos/Pai-Kane-group.png",
//         "Resized_Logos/Sudhir-Gensets-Ltd.jpg",
//         "Resized_Logos/Empower-Genset-Pvt-Ltd.jpg",
//         "Resized_Logos/Genset India Ltd., Kolkata.jpg",
//         "Resized_Logos/Supernova Engineers Ltd, Ahmadabad.png",
//         "Resized_Logos/MAK Controls Pvt Ltd, Coimbatore.jpg","Resized_Logos/Meera & Co., Ludhiana.png",
//         "Resized_Logos/United Machinery, Kolkata.jpg",
//         "Resized_Logos/Lambda Group, New Delhi.png",
//         "Resized_Logos/Accurate Power Systems, Pune.jpg"
//       ]
//     }
//   ];

//   return (
//     <div className={styles.logoContainer}>
//       {logoCategories.map((category, index) => (
//         <div key={index} className={styles.category}>
//           <h2>{category.title}</h2>
//           <div className={styles.logoScroller}>
//             <div className={styles.logoTrack}>
//               {[...category.images, ...category.images].map((img, i) => (
//                 <div key={i} className={styles.logoItem}>
//                   <img 
//                     src={img} 
//                     alt={category.title} 
//                     className={styles.logoImage}
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ClientLogos;


// // Option 1 - Tabbed Interface -- 8/10
// import React, { useState } from 'react';
// import styles from '../styles/clientLogos.module.css';

// const ClientLogos = () => {
//   const [activeTab, setActiveTab] = useState(0);
//   const logoCategories = [
//     {
//       title: "Engine Manufacturers",
//       images: [
//         "/Resized_Logos/Kirloskar-Oil-Engines-Ltd.png",
//         "/Resized_Logos/Cummins-India-Ltd.png",
//         "/Resized_Logos/Greaves-Cotton-Ltd.jpg",
//         "/Resized_Logos/AVETC-(Former-Hindustan-Motors-Ltd).png",
//         "/Resized_Logos/Hindustan-Power-Plus-ltd-(CATERPILLER).png",
//         "/Resized_Logos/Mahindra&Mahindra-Ltd.jpg",
//         "/Resized_Logos/BEML.png",
//         "/Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd.jpg"
//       ]
//     },
//     {
//       title:"Telecom Industries",
//       images:[
//         "/Resized_Logos/Reliance-Infocom.png",
//         "/Resized_Logos/BSNL.png",
//         "/Resized_Logos/Tata-Teleservices.png",
//         "/Resized_Logos/Hutch-Vodafone.png",
//         "/Resized_Logos/Airtel.png",
//         "/Resized_Logos/Linage-Power.jpg",
//         "/Resized_Logos/ITIL.jpg",
//         "/Resized_Logos/GTL.png",
//         "/Resized_Logos/INDUS.png",
//         "/Resized_Logos/ESSAR.jpg"
//       ]
//     },
//     {
//       title:"Control Panel Manufacturers",
//       images:[
//         "/Resized_Logos/Accusonic Controls Pvt Ltd, Pune.png",
//         "/Resized_Logos/Autocon Engineers Pvt LTd, Pune.jpg",
//         "/Resized_Logos/Loha Electric Company, Bangalore.png",
//         "/Resized_Logos/Power Control Engineers, Pune.jpg",
//         "/Resized_Logos/Accurate Industrial Controls, Pune.jpg",
//         "/Resized_Logos/Sarthak Engineers, Pune.jpg" ,
//         "/Resized_Logos/Priya Electricals, Chennai.jpg",
//         "/Resized_Logos/R. A. Industrial, Kolkata.png",
//         "/Resized_Logos/EAP, Kolkata.jpg" ,
//         "/Resized_Logos/Power Tech Systems, Pune.jpg"
//       ]
//     },
//     {
//       title:"Vehicle Manufacturers",
//       images:[
//         "Resized_Logos/Tata-Motors.png",
//         "Resized_Logos/BEML2.png",
//         "Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd2.jpg",
                                     
//       ]
//     },
//     {
//       title:"Generating Set Manufacturers / Dealers",
//       images:[
//         "Resized_Logos/Ashok-Leyland.png",
//         "Resized_Logos/Sterling-Generators-Pvt-Ltd.png",
//         "Resized_Logos/Jakson-Engineers-Ltd-New-Delhi.jpg",
//         "Resized_Logos/Rai-Industrial-Power-Pvt-Ltd.jpg",
//         "Resized_Logos/Powerica.jpg",
//         "Resized_Logos/Pai-Kane-group.png",
//         "Resized_Logos/Sudhir-Gensets-Ltd.jpg",
//         "Resized_Logos/Empower-Genset-Pvt-Ltd.jpg",
//         "Resized_Logos/Genset India Ltd., Kolkata.jpg",
//         "Resized_Logos/Supernova Engineers Ltd, Ahmadabad.png",
//         "Resized_Logos/MAK Controls Pvt Ltd, Coimbatore.jpg","Resized_Logos/Meera & Co., Ludhiana.png",
//         "Resized_Logos/United Machinery, Kolkata.jpg",
//         "Resized_Logos/Lambda Group, New Delhi.png",
//         "Resized_Logos/Accurate Power Systems, Pune.jpg"
//       ]
//     }
//   ];

//   return (
//     <div className={styles.logoContainerCompact}>
//       <h2 className={styles.sectionTitle}>Our Clients</h2>
      
//       <div className={styles.tabContainer}>
//         {logoCategories.map((category, index) => (
//           <button 
//             key={index}
//             className={`${styles.tabButton} ${activeTab === index ? styles.activeTab : ''}`}
//             onClick={() => setActiveTab(index)}
//           >
//             {category.title}
//           </button>
//         ))}
//       </div>
      
//       <div className={styles.logoDisplay}>
//         <h3 className={styles.categoryTitle}>{logoCategories[activeTab].title}</h3>
//         <div className={styles.logoGrid}>
//           {logoCategories[activeTab].images.map((img, i) => (
//             <div key={i} className={styles.logoItem}>
//               <img 
//                 src={img} 
//                 alt={logoCategories[activeTab].title} 
//                 className={styles.logoImage}
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;


// // Option 2 - Compact All-in-One View -- 6/10
// ClientLogos.jsx
// import React from 'react';
// import styles from '../styles/clientLogos.module.css';

// const ClientLogos = () => {
  // const logoCategories = [
  //       {
  //         title: "Engine Manufacturers",
  //         images: [
  //           "/Resized_Logos/Kirloskar-Oil-Engines-Ltd.png",
  //           "/Resized_Logos/Cummins-India-Ltd.png",
  //           "/Resized_Logos/Greaves-Cotton-Ltd.jpg",
  //           "/Resized_Logos/AVETC-(Former-Hindustan-Motors-Ltd).png",
  //           "/Resized_Logos/Hindustan-Power-Plus-ltd-(CATERPILLER).png",
  //           "/Resized_Logos/Mahindra&Mahindra-Ltd.jpg",
  //           "/Resized_Logos/BEML.png",
  //           "/Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd.jpg"
  //         ]
  //       },
  //       {
  //         title:"Telecom Industries",
  //         images:[
  //           "/Resized_Logos/Reliance-Infocom.png",
  //           "/Resized_Logos/BSNL.png",
  //           "/Resized_Logos/Tata-Teleservices.png",
  //           "/Resized_Logos/Hutch-Vodafone.png",
  //           "/Resized_Logos/Airtel.png",
  //           "/Resized_Logos/Linage-Power.jpg",
  //           "/Resized_Logos/ITIL.jpg",
  //           "/Resized_Logos/GTL.png",
  //           "/Resized_Logos/INDUS.png",
  //           "/Resized_Logos/ESSAR.jpg"
  //         ]
  //       },
  //       {
  //         title:"Control Panel Manufacturers",
  //         images:[
  //           "/Resized_Logos/Accusonic Controls Pvt Ltd, Pune.png",
  //           "/Resized_Logos/Autocon Engineers Pvt LTd, Pune.jpg",
  //           "/Resized_Logos/Loha Electric Company, Bangalore.png",
  //           "/Resized_Logos/Power Control Engineers, Pune.jpg",
  //           "/Resized_Logos/Accurate Industrial Controls, Pune.jpg",
  //           "/Resized_Logos/Sarthak Engineers, Pune.jpg" ,
  //           "/Resized_Logos/Priya Electricals, Chennai.jpg",
  //           "/Resized_Logos/R. A. Industrial, Kolkata.png",
  //           "/Resized_Logos/EAP, Kolkata.jpg" ,
  //           "/Resized_Logos/Power Tech Systems, Pune.jpg"
  //         ]
  //       },
  //       {
  //         title:"Vehicle Manufacturers",
  //         images:[
  //           "Resized_Logos/Tata-Motors.png",
  //           "Resized_Logos/BEML2.png",
  //           "Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd2.jpg",
                                         
  //         ]
  //       },
  //       {
  //         title:"Generating Set Manufacturers / Dealers",
  //         images:[
  //           "Resized_Logos/Ashok-Leyland.png",
  //           "Resized_Logos/Sterling-Generators-Pvt-Ltd.png",
  //           "Resized_Logos/Jakson-Engineers-Ltd-New-Delhi.jpg",
  //           "Resized_Logos/Rai-Industrial-Power-Pvt-Ltd.jpg",
  //           "Resized_Logos/Powerica.jpg",
  //           "Resized_Logos/Pai-Kane-group.png",
  //           "Resized_Logos/Sudhir-Gensets-Ltd.jpg",
  //           "Resized_Logos/Empower-Genset-Pvt-Ltd.jpg",
  //           "Resized_Logos/Genset India Ltd., Kolkata.jpg",
  //           "Resized_Logos/Supernova Engineers Ltd, Ahmadabad.png",
  //           "Resized_Logos/MAK Controls Pvt Ltd, Coimbatore.jpg","Resized_Logos/Meera & Co., Ludhiana.png",
  //           "Resized_Logos/United Machinery, Kolkata.jpg",
  //           "Resized_Logos/Lambda Group, New Delhi.png",
  //           "Resized_Logos/Accurate Power Systems, Pune.jpg"
  //         ]
  //       }
  //     ];

//   return (
//     <div className={styles.logoContainerCompact}>
//       <h2 className={styles.sectionTitle}>Our Clients</h2>
      
//       <div className={styles.categoryGrid}>
//         {logoCategories.map((category, index) => (
//           <div key={index} className={styles.categoryCard}>
//             <h3 className={styles.categoryTitle}>{category.title}</h3>
//             <div className={styles.logoSlider}>
//               <div className={styles.logoTrack}>
//                 {[...category.images, ...category.images].map((img, i) => (
//                   <div key={i} className={styles.logoItem}>
//                     <img 
//                       src={img} 
//                       alt={category.title} 
//                       className={styles.logoImage}
//                       loading="lazy"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;



// Option 3: Accordion Style (Best for Mobile) -- 7/10
// ClientLogos.jsx
// import React, { useState } from 'react';
// import styles from '../styles/clientLogos.module.css';

// const ClientLogos = () => {
//   const [expandedCategory, setExpandedCategory] = useState(0);
  
  // const logoCategories = [
  //   {
  //     title: "Engine Manufacturers",
  //     images: [
  //       "/Resized_Logos/Kirloskar-Oil-Engines-Ltd.png",
  //       "/Resized_Logos/Cummins-India-Ltd.png",
  //       "/Resized_Logos/Greaves-Cotton-Ltd.jpg",
  //       "/Resized_Logos/AVETC-(Former-Hindustan-Motors-Ltd).png",
  //       "/Resized_Logos/Hindustan-Power-Plus-ltd-(CATERPILLER).png",
  //       "/Resized_Logos/Mahindra&Mahindra-Ltd.jpg",
  //       "/Resized_Logos/BEML.png",
  //       "/Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd.jpg"
  //     ]
  //   },
  //   {
  //     title:"Telecom Industries",
  //     images:[
  //       "/Resized_Logos/Reliance-Infocom.png",
  //       "/Resized_Logos/BSNL.png",
  //       "/Resized_Logos/Tata-Teleservices.png",
  //       "/Resized_Logos/Hutch-Vodafone.png",
  //       "/Resized_Logos/Airtel.png",
  //       "/Resized_Logos/Linage-Power.jpg",
  //       "/Resized_Logos/ITIL.jpg",
  //       "/Resized_Logos/GTL.png",
  //       "/Resized_Logos/INDUS.png",
  //       "/Resized_Logos/ESSAR.jpg"
  //     ]
  //   },
  //   {
  //     title:"Control Panel Manufacturers",
  //     images:[
  //       "/Resized_Logos/Accusonic Controls Pvt Ltd, Pune.png",
  //       "/Resized_Logos/Autocon Engineers Pvt LTd, Pune.jpg",
  //       "/Resized_Logos/Loha Electric Company, Bangalore.png",
  //       "/Resized_Logos/Power Control Engineers, Pune.jpg",
  //       "/Resized_Logos/Accurate Industrial Controls, Pune.jpg",
  //       "/Resized_Logos/Sarthak Engineers, Pune.jpg" ,
  //       "/Resized_Logos/Priya Electricals, Chennai.jpg",
  //       "/Resized_Logos/R. A. Industrial, Kolkata.png",
  //       "/Resized_Logos/EAP, Kolkata.jpg" ,
  //       "/Resized_Logos/Power Tech Systems, Pune.jpg"
  //     ]
  //   },
  //   {
  //     title:"Vehicle Manufacturers",
  //     images:[
  //       "Resized_Logos/Tata-Motors.png",
  //       "Resized_Logos/BEML2.png",
  //       "Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd2.jpg",
                                     
  //     ]
  //   },
  //   {
  //     title:"Generating Set Manufacturers / Dealers",
  //     images:[
  //       "Resized_Logos/Ashok-Leyland.png",
  //       "Resized_Logos/Sterling-Generators-Pvt-Ltd.png",
  //       "Resized_Logos/Jakson-Engineers-Ltd-New-Delhi.jpg",
  //       "Resized_Logos/Rai-Industrial-Power-Pvt-Ltd.jpg",
  //       "Resized_Logos/Powerica.jpg",
  //       "Resized_Logos/Pai-Kane-group.png",
  //       "Resized_Logos/Sudhir-Gensets-Ltd.jpg",
  //       "Resized_Logos/Empower-Genset-Pvt-Ltd.jpg",
  //       "Resized_Logos/Genset India Ltd., Kolkata.jpg",
  //       "Resized_Logos/Supernova Engineers Ltd, Ahmadabad.png",
  //       "Resized_Logos/MAK Controls Pvt Ltd, Coimbatore.jpg","Resized_Logos/Meera & Co., Ludhiana.png",
  //       "Resized_Logos/United Machinery, Kolkata.jpg",
  //       "Resized_Logos/Lambda Group, New Delhi.png",
  //       "Resized_Logos/Accurate Power Systems, Pune.jpg"
  //     ]
  //   }
  // ];  

//   const toggleCategory = (index) => {
//     setExpandedCategory(expandedCategory === index ? -1 : index);
//   };

//   return (
//     <div className={styles.logoContainerCompact}>
//       <h2 className={styles.sectionTitle}>Our Clients</h2>
      
//       <div className={styles.accordionContainer}>
//         {logoCategories.map((category, index) => (
//           <div 
//             key={index} 
//             className={`${styles.accordionItem} ${expandedCategory === index ? styles.expanded : ''}`}
//           >
//             <div 
//               className={styles.accordionHeader}
//               onClick={() => toggleCategory(index)}
//             >
//               <h3>{category.title}</h3>
//               <span className={styles.accordionIcon}>
//                 {expandedCategory === index ? '−' : '+'}
//               </span>
//             </div>
            
//             <div className={styles.accordionContent}>
//               <div className={styles.logoGrid}>
//                 {category.images.map((img, i) => (
//                   <div key={i} className={styles.logoItem}>
//                     <img 
//                       src={img} 
//                       alt={category.title} 
//                       className={styles.logoImage}
//                       loading="lazy"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;


// Option 4: Compact Single-Row Sliders (Recommended) -- 7.5/10
// ClientLogos.jsx
// import React from 'react';
// import styles from '../styles/clientLogos.module.css';

// const ClientLogos = () => {
//   const logoCategories = [
//     {
//       title: "Engine Manufacturers",
//       images: [
//         "/Resized_Logos/Kirloskar-Oil-Engines-Ltd.png",
//         "/Resized_Logos/Cummins-India-Ltd.png",
//         "/Resized_Logos/Greaves-Cotton-Ltd.jpg",
//         "/Resized_Logos/AVETC-(Former-Hindustan-Motors-Ltd).png",
//         "/Resized_Logos/Hindustan-Power-Plus-ltd-(CATERPILLER).png",
//         "/Resized_Logos/Mahindra&Mahindra-Ltd.jpg",
//         "/Resized_Logos/BEML.png",
//         "/Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd.jpg"
//       ]
//     },
//     {
//       title:"Telecom Industries",
//       images:[
//         "/Resized_Logos/Reliance-Infocom.png",
//         "/Resized_Logos/BSNL.png",
//         "/Resized_Logos/Tata-Teleservices.png",
//         "/Resized_Logos/Hutch-Vodafone.png",
//         "/Resized_Logos/Airtel.png",
//         "/Resized_Logos/Linage-Power.jpg",
//         "/Resized_Logos/ITIL.jpg",
//         "/Resized_Logos/GTL.png",
//         "/Resized_Logos/INDUS.png",
//         "/Resized_Logos/ESSAR.jpg"
//       ]
//     },
//     {
//       title:"Control Panel Manufacturers",
//       images:[
//         "/Resized_Logos/Accusonic Controls Pvt Ltd, Pune.png",
//         "/Resized_Logos/Autocon Engineers Pvt LTd, Pune.jpg",
//         "/Resized_Logos/Loha Electric Company, Bangalore.png",
//         "/Resized_Logos/Power Control Engineers, Pune.jpg",
//         "/Resized_Logos/Accurate Industrial Controls, Pune.jpg",
//         "/Resized_Logos/Sarthak Engineers, Pune.jpg" ,
//         "/Resized_Logos/Priya Electricals, Chennai.jpg",
//         "/Resized_Logos/R. A. Industrial, Kolkata.png",
//         "/Resized_Logos/EAP, Kolkata.jpg" ,
//         "/Resized_Logos/Power Tech Systems, Pune.jpg"
//       ]
//     },
//     {
//       title:"Vehicle Manufacturers",
//       images:[
//         "Resized_Logos/Tata-Motors.png",
//         "Resized_Logos/BEML2.png",
//         "Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd2.jpg",
                                     
//       ]
//     },
//     {
//       title:"Generating Set Manufacturers / Dealers",
//       images:[
//         "Resized_Logos/Ashok-Leyland.png",
//         "Resized_Logos/Sterling-Generators-Pvt-Ltd.png",
//         "Resized_Logos/Jakson-Engineers-Ltd-New-Delhi.jpg",
//         "Resized_Logos/Rai-Industrial-Power-Pvt-Ltd.jpg",
//         "Resized_Logos/Powerica.jpg",
//         "Resized_Logos/Pai-Kane-group.png",
//         "Resized_Logos/Sudhir-Gensets-Ltd.jpg",
//         "Resized_Logos/Empower-Genset-Pvt-Ltd.jpg",
//         "Resized_Logos/Genset India Ltd., Kolkata.jpg",
//         "Resized_Logos/Supernova Engineers Ltd, Ahmadabad.png",
//         "Resized_Logos/MAK Controls Pvt Ltd, Coimbatore.jpg","Resized_Logos/Meera & Co., Ludhiana.png",
//         "Resized_Logos/United Machinery, Kolkata.jpg",
//         "Resized_Logos/Lambda Group, New Delhi.png",
//         "Resized_Logos/Accurate Power Systems, Pune.jpg"
//       ]
//     }
//   ];  

//   return (
//     <div className={styles.logoContainerCompact}>
//       <h2 className={styles.sectionTitle}>Our Clients</h2>
      
//       <div className={styles.allCategories}>
//         {logoCategories.map((category, index) => (
//           <div key={index} className={styles.categoryRow}>
//             <h3 className={styles.categoryTitle}>{category.title}</h3>
//             <div className={styles.logoScroller}>
//               <div className={styles.logoTrack} style={{animationDuration: `${30 + index * 5}s`}}>
//                 {[...category.images, ...category.images].map((img, i) => (
//                   <div key={i} className={styles.logoItem}>
//                     <img 
//                       src={img} 
//                       alt={category.title} 
//                       className={styles.logoImage}
//                       loading="lazy"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;


// Option 5 - As per nikhil sir's suggestion -- big clients static remaining clients scrolling
// ClientLogos.jsx
import React from 'react';
import styles from '../styles/clientLogos.module.css';

const ClientLogos = () => {
  // Top 12 premium clients - static display
  const premiumClients = [
    "/Resized_Logos/Kirloskar-Oil-Engines-Ltd.png",
    "/Resized_Logos/Cummins-India-Ltd.png",
    "/Resized_Logos/Greaves-Cotton-Ltd.jpg",
    "/Resized_Logos/Mahindra&Mahindra-Ltd.jpg",
    "/Resized_Logos/Tata-Motors.png",
    "/Resized_Logos/BEML.png",
    "/Resized_Logos/Reliance-Infocom.png",
    "/Resized_Logos/BSNL.png",
    "/Resized_Logos/Tata-Teleservices.png",
    "/Resized_Logos/Airtel.png",
    "/Resized_Logos/Ashok-Leyland.png",
    "/Resized_Logos/Eicher-Volvo-Commercial-Vehicles-Ltd.jpg"
  ];

  // Remaining clients - scrolling display
  const scrollingClients = [
    "/Resized_Logos/AVETC-(Former-Hindustan-Motors-Ltd).png",
    "/Resized_Logos/Hindustan-Power-Plus-ltd-(CATERPILLER).png",
    "/Resized_Logos/Hutch-Vodafone.png",
    "/Resized_Logos/Linage-Power.jpg",
    "/Resized_Logos/ITIL.jpg",
    "/Resized_Logos/GTL.png",
    "/Resized_Logos/INDUS.png",
    "/Resized_Logos/ESSAR.jpg",
    "/Resized_Logos/Accusonic Controls Pvt Ltd, Pune.png",
    "/Resized_Logos/Autocon Engineers Pvt LTd, Pune.jpg",
    "/Resized_Logos/Loha Electric Company, Bangalore.png",
    "/Resized_Logos/Power Control Engineers, Pune.jpg",
    "/Resized_Logos/Accurate Industrial Controls, Pune.jpg",
    "/Resized_Logos/Sarthak Engineers, Pune.jpg",
    "/Resized_Logos/Priya Electricals, Chennai.jpg",
    "/Resized_Logos/R. A. Industrial, Kolkata.png",
    "/Resized_Logos/EAP, Kolkata.jpg",
    "/Resized_Logos/Power Tech Systems, Pune.jpg",
    "/Resized_Logos/BEML2.png",
    "/Resized_Logos/Sterling-Generators-Pvt-Ltd.png",
    "/Resized_Logos/Jakson-Engineers-Ltd-New-Delhi.jpg",
    "/Resized_Logos/Rai-Industrial-Power-Pvt-Ltd.jpg",
    "/Resized_Logos/Powerica.jpg",
    "/Resized_Logos/Pai-Kane-group.png",
    "/Resized_Logos/Sudhir-Gensets-Ltd.jpg",
    "/Resized_Logos/Empower-Genset-Pvt-Ltd.jpg",
    "/Resized_Logos/Genset India Ltd., Kolkata.jpg",
    "/Resized_Logos/Supernova Engineers Ltd, Ahmadabad.png",
    "/Resized_Logos/MAK Controls Pvt Ltd, Coimbatore.jpg",
    "/Resized_Logos/Meera & Co., Ludhiana.png",
    "/Resized_Logos/United Machinery, Kolkata.jpg",
    "/Resized_Logos/Lambda Group, New Delhi.png",
    "/Resized_Logos/Accurate Power Systems, Pune.jpg"
  ];

  return (
    <div className={styles.clientShowcase}>
      <h2 className={styles.sectionTitle}>Our Clients</h2>
      
      {/* Premium clients - static grid */}
      <div className={styles.premiumGrid}>
        {premiumClients.map((logo, index) => (
          <div key={index} className={styles.premiumLogoItem}>
            <img 
              src={logo} 
              alt={`Premium Client ${index + 1}`} 
              className={styles.premiumLogoImage}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
      {/* Divider */}
      <div className={styles.divider}>
        <span>More Clients</span>
      </div>
      
      {/* Scrolling clients */}
      <div className={styles.scrollingContainer}>
        <div className={styles.scrollingTrack}>
          {[...scrollingClients, ...scrollingClients].map((logo, index) => (
            <div key={index} className={styles.scrollingLogoItem}>
              <img 
                src={logo} 
                alt={`Client ${index + 1}`} 
                className={styles.scrollingLogoImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogos;
