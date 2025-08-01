import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

// Import local images
import tomato from '../assets/tomato.jpg';
import spinach from '../assets/spinach.jpg';
import apple from '../assets/apple.jpg';
import banana from '../assets/banana.jpg';
import seeds from '../assets/seeds.jpg';
import rice from '../assets/rice.jpg';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  stock: number;
  badge?: string;
  dealEnds?: string;
}

const FeaturedProducts: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [loadingStates, setLoadingStates] = useState<{ [key: number]: boolean }>({});
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Tomato Seeds',
      category: 'Vegetables',
      image: tomato,
      price: 120,
      originalPrice: 150,
      discount: 30,
      rating: 4.5,
      reviews: 128,
      stock: 50,
      badge: 'Best Seller',
      dealEnds: '2024-12-31'
    },
    {
      id: 2,
      name: 'Fresh Vegetables Pack',
      category: 'Vegetables',
      image: spinach,
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviews: 256,
      stock: 8,
      badge: 'Organic',
      dealEnds: '2024-12-31'
    },
    {
      id: 3,
      name: 'Premium Grains Collection',
      category: 'Grains',
      image: rice,
      price: 499,
      originalPrice: 799,
      discount: 40,
      rating: 4.6,
      reviews: 89,
      stock: 5,
      badge: 'Premium',
      dealEnds: '2024-12-31'
    },
    {
      id: 4,
      name: 'Fresh Apples Pack',
      category: 'Fruits',
      image: apple,
      price: 199,
      originalPrice: 299,
      discount: 35,
      rating: 4.7,
      reviews: 167,
      stock: 12,
      badge: 'Fresh',
      dealEnds: '2024-12-31'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Deals' },
    { id: 'vegetables', label: 'Vegetables' },
    { id: 'fruits', label: 'Fruits' },
    { id: 'grains', label: 'Grains' },
    { id: 'pulses', label: 'Pulses' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeFilter);

  const addToCart = async (product: Product) => {
    setLoadingStates(prev => ({ ...prev, [product.id]: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Added to cart:', product.name);
    setLoadingStates(prev => ({ ...prev, [product.id]: false }));
  };

  const addToWishlist = async (product: Product) => {
    setLoadingStates(prev => ({ ...prev, [product.id]: true }));
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log('Added to wishlist:', product.name);
    setLoadingStates(prev => ({ ...prev, [product.id]: false }));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.i
        key={index}
        className={`fas fa-star ${index < Math.floor(rating) ? 'filled' : ''}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
        whileHover={{ scale: 1.2, color: '#ffc107' }}
      />
    ));
  };

  return (
    <motion.section 
      className="featured-products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-content">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Today's Deals
            </motion.h2>
            <motion.p 
              className="section-description"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Limited time offers on premium agricultural products
            </motion.p>
          </div>
          
          {/* Countdown Timer */}
          <motion.div 
            className="countdown-timer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.5rem',
              background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
              borderRadius: '15px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)'
            }}
          >
            <motion.i 
              className="fas fa-clock"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span style={{ fontWeight: '600' }}>Deal Ends In:</span>
            <motion.div 
              className="timer-display"
              style={{ display: 'flex', gap: '0.5rem' }}
            >
              <motion.span
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  minWidth: '40px',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {timeLeft.hours.toString().padStart(2, '0')}
              </motion.span>
              <span>:</span>
              <motion.span
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  minWidth: '40px',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
              >
                {timeLeft.minutes.toString().padStart(2, '0')}
              </motion.span>
              <span>:</span>
              <motion.span
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  minWidth: '40px',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
              >
                {timeLeft.seconds.toString().padStart(2, '0')}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="products-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.5rem',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '2rem 0'
          }}
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id} 
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                layout
                style={{
                  background: 'var(--bg-color)',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px var(--shadow-color)',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  minHeight: '350px',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div className="product-image" style={{
                  position: 'relative',
                  height: '180px',
                  overflow: 'hidden',
                  borderRadius: '15px',
                  marginBottom: '1rem'
                }}>
                  <motion.img 
                    src={product.image} 
                    alt={product.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '15px'
                    }}
                  />
                  {product.badge && (
                    <motion.span 
                      className="product-badge"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                    >
                      {product.badge}
                    </motion.span>
                  )}
                  
                  {/* Deal Ends Badge */}
                  <motion.div
                    className="deal-ends-badge"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                      color: 'white',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      zIndex: 3
                    }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ['0 2px 8px rgba(255, 107, 107, 0.3)', '0 4px 12px rgba(255, 107, 107, 0.5)', '0 2px 8px rgba(255, 107, 107, 0.3)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <i className="fas fa-fire" style={{ marginRight: '0.3rem' }}></i>
                    Deal
                  </motion.div>
                  
                  {/* Discount Badge */}
                  <motion.div
                    className="discount-badge"
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                      color: 'white',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      zIndex: 3
                    }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ['0 2px 8px rgba(76, 175, 80, 0.3)', '0 4px 12px rgba(76, 175, 80, 0.5)', '0 2px 8px rgba(76, 175, 80, 0.3)']
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    -{product.discount}%
                  </motion.div>
                  
                  <motion.div 
                    className="product-actions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button 
                      className="wishlist-btn"
                      onClick={() => addToWishlist(product)}
                      title="Add to Wishlist"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      disabled={loadingStates[product.id]}
                    >
                      <i className="fas fa-heart"></i>
                    </motion.button>
                    <motion.button 
                      className="quick-view-btn"
                      title="Quick View"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fas fa-eye"></i>
                    </motion.button>
                  </motion.div>
                </div>

                <div className="product-info" style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <motion.span 
                    className="product-category"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{
                      color: 'var(--primary-color)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {product.category}
                  </motion.span>
                  <motion.h3 
                    className="product-name"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      color: 'var(--text-color)',
                      margin: '0',
                      lineHeight: '1.3',
                      minHeight: '2.2rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {product.name}
                  </motion.h3>
                  
                  <motion.div 
                    className="rating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <div className="rating-stars" style={{ display: 'flex', gap: '0.2rem' }}>
                      {renderStars(product.rating)}
                    </div>
                    <span className="review-count" style={{
                      color: 'var(--text-color-light)',
                      fontSize: '0.9rem'
                    }}>({product.reviews} reviews)</span>
                  </motion.div>

                  <motion.div 
                    className="price-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}
                  >
                    <motion.span 
                      className="original-price"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      style={{
                        textDecoration: 'line-through',
                        color: 'var(--text-color-light)',
                        fontSize: '1rem'
                      }}
                    >
                      ₹{product.originalPrice}
                    </motion.span>
                    <motion.span 
                      className="price"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      style={{
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: 'var(--primary-color)'
                      }}
                    >
                      ₹{product.price}
                    </motion.span>
                  </motion.div>

                  <motion.button 
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0 || loadingStates[product.id]}
                    whileHover={product.stock > 0 && !loadingStates[product.id] ? { scale: 1.05, y: -2 } : {}}
                    whileTap={product.stock > 0 && !loadingStates[product.id] ? { scale: 0.95 } : {}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    style={{
                      background: 'linear-gradient(135deg, var(--primary-color), #45a049)',
                      color: 'white',
                      border: 'none',
                      padding: '0.8rem',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: product.stock > 0 && !loadingStates[product.id] ? 'pointer' : 'not-allowed',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
                      opacity: product.stock === 0 || loadingStates[product.id] ? 0.6 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginTop: 'auto'
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {loadingStates[product.id] ? (
                        <motion.div
                          key="loading"
                          className="loading-spinner"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <LoadingSpinner size="small" type="dots" />
                          <span>Adding...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="normal"
                          className="button-content"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <i className="fas fa-shopping-cart"></i>
                          <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="load-more"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.button 
            className="load-more-btn"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: 'linear-gradient(135deg, #4CAF50, #45a049)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <motion.i 
              className="fas fa-fire"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            View All Deals
            <motion.i 
              className="fas fa-arrow-right"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.button>
          
          <motion.p 
            className="deals-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              marginTop: '1rem',
              color: 'var(--text-color-light)',
              fontSize: '0.9rem',
              textAlign: 'center'
            }}
          >
            <i className="fas fa-info-circle" style={{ marginRight: '0.5rem' }}></i>
            Discover 50+ more exclusive deals on our products page!
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedProducts; 