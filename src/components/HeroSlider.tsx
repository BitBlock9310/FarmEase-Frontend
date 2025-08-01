import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local images
import heroFarm from '../assets/hero-farm.jpg';
import freshVegetables from '../assets/fresh-vegetables.jpg';
import grains from '../assets/grains.jpg';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  discount: string;
  badge: string;
  features: string[];
}

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      image: freshVegetables,
      title: 'Premium Organic Vegetables',
      description: 'Experience farm-fresh, handpicked vegetables delivered straight to your doorstep. Grown naturally without any harmful chemicals.',
      price: '₹24.99',
      originalPrice: '₹29.99',
      discount: '-20%',
      badge: 'Best Seller',
      features: ['100% Organic', 'Free Delivery', '24/7 Support']
    },
    {
      id: 2,
      image: heroFarm,
      title: 'Exotic Fresh Fruits',
      description: 'Discover our premium selection of seasonal fruits, handpicked at peak ripeness for maximum flavor and nutrition.',
      price: '₹34.99',
      originalPrice: '₹39.99',
      discount: '-15%',
      badge: 'New Arrival',
      features: ['Farm Fresh', 'Premium Quality', '100% Natural']
    },
    {
      id: 3,
      image: grains,
      title: 'Organic Whole Grains',
      description: 'Premium quality organic grains, rich in nutrients and perfect for a healthy lifestyle. Available in bulk quantities.',
      price: '₹39.99',
      originalPrice: '₹49.99',
      discount: '-25%',
      badge: 'Limited Time',
      features: ['Certified Organic', 'Bulk Available', 'Quality Assured']
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isTransitioning, slides.length]);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setTimeout(() => setIsAutoPlaying(true), 2000);
    }, 600);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setTimeout(() => setIsAutoPlaying(true), 2000);
    }, 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setIsTransitioning(false);
      setTimeout(() => setIsAutoPlaying(true), 2000);
    }, 600);
  };

  return (
    <motion.section 
      className="hero-slider"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ position: 'relative' }}
    >
      <div className="slider-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="slide active"
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeInOut",
              scale: { duration: 0.4 }
            }}
          >
            <div className="slide-image">
              <motion.img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                initial={{ scale: 1.2, filter: 'brightness(0.8)' }}
                animate={{ scale: 1, filter: 'brightness(1)' }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className="slide-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.1))'
                }}
              />
            </div>
            
            <div className="slide-content">
              <motion.span 
                className="product-badge"
                initial={{ scale: 0, rotate: -180, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {slides[currentSlide].badge}
              </motion.span>
              
              <motion.h2 
                className="product-title"
                initial={{ opacity: 0, y: 40, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              >
                {slides[currentSlide].title}
              </motion.h2>
              
              <motion.p 
                className="product-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div 
                className="product-details"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {slides[currentSlide].features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="product-detail-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.15, duration: 0.6 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                  >
                    <motion.i 
                      className="fas fa-check"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.8 + idx * 0.15, duration: 0.5, type: "spring" }}
                    />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="product-price"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
              >
                <motion.span 
                  className="original-price"
                  initial={{ opacity: 0, scale: 0.8, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  {slides[currentSlide].originalPrice}
                </motion.span>
                <motion.span 
                  className="price"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {slides[currentSlide].price}
                </motion.span>
                <motion.span 
                  className="discount"
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                >
                  {slides[currentSlide].discount}
                </motion.span>
              </motion.div>
              
              <motion.div 
                className="product-actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8 }}
              >
                <motion.a 
                  href="/products"
                  className="cta-button"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 8px 25px rgba(76, 175, 80, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.i 
                    className="fas fa-shopping-cart"
                    whileHover={{ rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  />
                  Shop Now
                </motion.a>
                <motion.a 
                  href="/products"
                  className="secondary-button"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.i 
                    className="fas fa-eye"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  />
                  View Details
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Center Bottom Controls */}
      <motion.div 
        className="slider-controls"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <motion.button 
          className="prev-slide" 
          onClick={prevSlide}
          whileHover={{ 
            scale: 1.1, 
            x: -5,
            backgroundColor: "rgba(255, 255, 255, 0.2)"
          }}
          whileTap={{ scale: 0.9 }}
          disabled={isTransitioning}
        >
          <motion.i 
            className="fas fa-chevron-left"
            whileHover={{ x: -2 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
        
        {/* Dots in Center */}
        <motion.div 
          className="slider-dots"
        >
          {slides.map((_, index) => (
            <motion.span 
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              whileHover={{ 
                scale: 1.3,
                backgroundColor: index === currentSlide ? '#4CAF50' : 'rgba(255, 255, 255, 0.8)'
              }}
              whileTap={{ scale: 0.8 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: index === currentSlide ? 1.2 : 1,
                backgroundColor: index === currentSlide ? '#4CAF50' : 'rgba(255, 255, 255, 0.5)'
              }}
              transition={{ 
                delay: 1.2 + index * 0.1, 
                duration: 0.5,
                scale: { type: "spring", stiffness: 300 }
              }}
            />
          ))}
        </motion.div>
        
        <motion.button 
          className="next-slide" 
          onClick={nextSlide}
          whileHover={{ 
            scale: 1.1, 
            x: 5,
            backgroundColor: "rgba(255, 255, 255, 0.2)"
          }}
          whileTap={{ scale: 0.9 }}
          disabled={isTransitioning}
        >
          <motion.i 
            className="fas fa-chevron-right"
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      </motion.div>
      
      {/* Enhanced Progress Bar */}
      <motion.div 
        className="progress-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          duration: 5, 
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
        key={currentSlide}
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          height: '4px',
          background: 'linear-gradient(90deg, #4CAF50, #45a049)',
          transformOrigin: 'left',
          borderRadius: '2px',
          boxShadow: '0 2px 8px rgba(76, 175, 80, 0.3)'
        }}
      />
    </motion.section>
  );
};

export default HeroSlider; 