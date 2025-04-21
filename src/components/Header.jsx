// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/style.css';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logo">
//           <Link to="/">
//             <img 
//               src="/Images/logo.jpg" 
//               alt="Madhura International Logo" 
//               className="logo-img"
//             />
//           </Link>
//         </div>
        
//         <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/products">Products</Link></li>
//             <li><Link to="/group-profile">Group Profile</Link></li>
//             <li><Link to="/careers">Careers</Link></li>
//             <li><a href="#footer">Contact Us</a></li>
//           </ul>
//         </nav>

//         <div 
//           className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`} 
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


// Monica - Enhanced
// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Layout.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="Images/logo.jpg" alt="Madhura International Logo" />
          </Link>
        </div>
        
        <div className={styles.mobileMenuToggle} onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        
        <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/group-profile">Group Profile</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><a href="#footer">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
