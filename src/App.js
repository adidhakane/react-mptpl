// App.js
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;