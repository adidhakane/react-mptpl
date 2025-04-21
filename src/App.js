// // App.js
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import './styles/style.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* <Header /> */}
//         {/* <Home /> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:category" element={<Products />} />
//           {/* Add more routes as needed */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// Monica - Enhanced
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
// import GroupProfile from './pages/GroupProfile';
// import Careers from './pages/Careers';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        {/* <Route path="/group-profile" element={<GroupProfile />} /> */}
        {/* <Route path="/careers" element={<Careers />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
