import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [notifications, setNotifications] = useState<Array<{id: number, message: string, type: 'success' | 'error' | 'info'}>>([]);

  const searchSuggestions = [
    'Organic Tomatoes',
    'Fresh Vegetables',
    'Premium Seeds',
    'Farming Tools',
    'Organic Fertilizers'
  ];

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // TODO: Implement search functionality
      addNotification(`Searching for: ${searchQuery}`, 'info');
      setSearchQuery('');
      setShowSearchSuggestions(false);
    }
  };

  const addNotification = (message: string, type: 'success' | 'error' | 'info') => {
    const newNotification = {
      id: Date.now(),
      message,
      type
    };
    setNotifications(prev => [...prev, newNotification]);
    
    // Auto remove notification after 3 seconds
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 3000);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Notifications */}
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            className={`notification ${notification.type}`}
            initial={{ opacity: 0, y: -50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -50, x: -50 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              zIndex: 10000,
              padding: '12px 20px',
              borderRadius: '8px',
              color: 'white',
              fontSize: '14px',
              fontWeight: 500,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              backgroundColor: notification.type === 'success' ? '#4CAF50' : 
                             notification.type === 'error' ? '#f44336' : '#2196F3',
              cursor: 'pointer'
            }}
            onClick={() => removeNotification(notification.id)}
            whileHover={{ scale: 1.05 }}
          >
            {notification.message}
          </motion.div>
        ))}
      </AnimatePresence>

      <nav>
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <motion.i 
              className="fas fa-leaf"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <span>Farmease</span>
          </Link>
        </motion.div>
        
        <div className="search-container">
          <motion.div 
            className="search-bar"
            animate={{ scale: isSearchFocused ? 1.02 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="category-select">
              <select>
                <option value="">All Categories</option>
                <option value="seeds">Seeds</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="grains">Grains</option>
                <option value="pulses">Pulses</option>
              </select>
            </div>
            <input 
              type="text" 
              placeholder="Search for products..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchSuggestions(e.target.value.length > 0);
              }}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => {
                setIsSearchFocused(false);
                setTimeout(() => setShowSearchSuggestions(false), 200);
              }}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSearch}
            >
              <i className="fas fa-search"></i>
            </motion.button>
          </motion.div>

          {/* Search Suggestions */}
          <AnimatePresence>
            {showSearchSuggestions && searchQuery.length > 0 && (
              <motion.div
                className="search-suggestions"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  zIndex: 1000,
                  maxHeight: '200px',
                  overflowY: 'auto'
                }}
              >
                {searchSuggestions
                  .filter(suggestion => 
                    suggestion.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((suggestion, index) => (
                    <motion.div
                      key={index}
                      className="suggestion-item"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: '#f5f5f5' }}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSearchSuggestions(false);
                      }}
                      style={{
                        padding: '12px 16px',
                        cursor: 'pointer',
                        borderBottom: '1px solid #f0f0f0'
                      }}
                    >
                      <i className="fas fa-search" style={{ marginRight: '8px', color: '#666' }}></i>
                      {suggestion}
                    </motion.div>
                  ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="nav-icons">
          <motion.button 
            className="theme-toggle" 
            id="themeToggle" 
            aria-label="Toggle theme"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <motion.i 
              className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}
              animate={{ rotate: isDarkMode ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.div 
            className="cart-icon" 
            aria-label="Shopping cart"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="fas fa-shopping-cart"></i>
              <span>Cart</span>
              <motion.span 
                className="cart-count"
                initial={{ scale: 0 }}
                animate={{ scale: cartCount > 0 ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {cartCount}
              </motion.span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="account-icon" 
            aria-label="My account"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/auth" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <i className="fas fa-user"></i>
              <span>Account</span>
            </Link>
          </motion.div>
          
          <motion.button 
            className="mobile-menu-toggle" 
            aria-label="Open menu"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.i 
              className="fas fa-bars"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </nav>
      
      <motion.div 
        className="category-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <ul>
          {[
            { to: "/products?category=seeds", icon: "fas fa-seedling", text: "Seeds" },
            { to: "/products?category=fruits", icon: "fas fa-apple-alt", text: "Fruits" },
            { to: "/products?category=vegetables", icon: "fas fa-carrot", text: "Vegetables" },
            { to: "/products?category=grains", icon: "fas fa-bread-slice", text: "Grains" },
            { to: "/products?category=pulses", icon: "fas fa-seedling", text: "Pulses" }
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.to}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <i className={item.icon}></i> {item.text}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu active"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-header">
              <motion.button 
                className="mobile-menu-close" 
                aria-label="Close menu"
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-times"></i>
              </motion.button>
            </div>
            <motion.div 
              className="mobile-menu-content"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ul>
                {[
                  { to: "/products?category=seeds", icon: "fas fa-seedling", text: "Seeds" },
                  { to: "/products?category=fruits", icon: "fas fa-apple-alt", text: "Fruits" },
                  { to: "/products?category=vegetables", icon: "fas fa-carrot", text: "Vegetables" },
                  { to: "/products?category=grains", icon: "fas fa-bread-slice", text: "Grains" },
                  { to: "/products?category=pulses", icon: "fas fa-seedling", text: "Pulses" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        to={item.to}
                        style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <i className={item.icon}></i> {item.text}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 