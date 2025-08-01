import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import components
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import FeaturesBar from './components/FeaturesBar';
import FeaturedProducts from './components/FeaturedProducts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Import pages
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

// Import styles
import './styles/main.css';
import './styles/home.css';
import './styles/style.css';
import './styles/dark-mode.css';
import './styles/navigation.css';
import './styles/chatbot.css';
import './styles/mobile.css';
import './styles/products.css';
import './styles/filter-styles.css';
import './styles/auth.css';
import './styles/cart.css';
import './styles/checkout.css';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSlider />
      <FeaturesBar />
      <FeaturedProducts />
      <Newsletter />
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
