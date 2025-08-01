import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // TODO: Implement newsletter subscription
      console.log('Subscribing email:', email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubscribed(true);
      setShowSuccess(true);
      setEmail('');
      setIsSubmitting(false);
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const features = [
    {
      icon: 'fas fa-gift',
      title: 'Exclusive Offers',
      description: 'Get early access to sales and discounts',
      color: '#4CAF50',
      gradient: 'linear-gradient(135deg, #4CAF50, #45a049)',
      bgGradient: 'linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(69, 160, 73, 0.05))'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Fresh Updates',
      description: 'Be the first to know about new products',
      color: '#2196F3',
      gradient: 'linear-gradient(135deg, #2196F3, #1976D2)',
      bgGradient: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(25, 118, 210, 0.05))'
    },
    {
      icon: 'fas fa-truck',
      title: 'Delivery Updates',
      description: 'Track your orders and delivery status',
      color: '#FF9800',
      gradient: 'linear-gradient(135deg, #FF9800, #F57C00)',
      bgGradient: 'linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(245, 124, 0, 0.05))'
    },
    {
      icon: 'fas fa-percentage',
      title: 'Special Discounts',
      description: 'Receive personalized discount codes',
      color: '#9C27B0',
      gradient: 'linear-gradient(135deg, #9C27B0, #7B1FA2)',
      bgGradient: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(123, 31, 162, 0.05))'
    }
  ];

  return (
    <motion.section 
      className="newsletter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'var(--bg-color)',
        padding: '4rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, var(--primary-color-light) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--secondary-color-light) 0%, transparent 50%)',
          zIndex: 0
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="newsletter-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '3rem',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
          minHeight: '500px'
        }}>
          
          {/* Left Side - Features */}
          <motion.div 
            className="newsletter-features"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              minHeight: '400px'
            }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="newsletter-feature"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                }}
                style={{
                  background: feature.bgGradient,
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: '0 4px 15px var(--shadow-color)',
                  border: `2px solid ${feature.color}20`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '200px',
                  minWidth: '250px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                {/* Background Pattern */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at 20% 80%, ${feature.color}10 0%, transparent 50%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: feature.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    fontSize: '2rem',
                    color: 'white',
                    position: 'relative',
                    zIndex: 2,
                    boxShadow: `0 4px 15px ${feature.color}40`
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 10,
                    boxShadow: `0 6px 20px ${feature.color}60`
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={feature.icon}></i>
                </motion.div>
                
                <div className="newsletter-feature-content" style={{ 
                   position: 'relative', 
                   zIndex: 2,
                   flex: 1,
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   alignItems: 'center'
                 }}>
                  <motion.h4 
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      margin: '0 0 0.8rem',
                      color: 'var(--text-color)',
                      background: feature.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p 
                    style={{
                      fontSize: '1rem',
                      color: 'var(--text-color-light)',
                      margin: 0,
                      lineHeight: '1.5',
                      fontWeight: '500'
                    }}
                    whileHover={{ color: 'var(--text-color)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
                
                {/* Hover Border Effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    border: `2px solid ${feature.color}`,
                    borderRadius: '20px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  whileHover={{ opacity: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right Side - Form */}
          <motion.div 
            className="newsletter-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div 
              className="newsletter-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '2rem' }}
            >
              <motion.h2 
                style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  margin: '0 0 1rem',
                  background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Stay Updated!
              </motion.h2>
              <motion.p 
                style={{
                  fontSize: '1.3rem',
                  color: 'var(--text-color-light)',
                  margin: 0,
                  lineHeight: '1.6',
                  maxWidth: '500px'
                }}
              >
                Get exclusive access to the latest deals, fresh products, and farming insights delivered straight to your inbox.
              </motion.p>
            </motion.div>
            
            <motion.form 
              className="newsletter-form" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                background: 'var(--card-bg-color)',
                padding: '3rem',
                borderRadius: '25px',
                boxShadow: '0 8px 25px var(--shadow-color)',
                border: '1px solid var(--border-color)',
                minWidth: '500px'
              }}
            >
              
              <motion.div 
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                style={{ marginBottom: '1.5rem' }}
              >
                <motion.label 
                  htmlFor="newsletter-email"
                  style={{
                    display: 'block',
                    marginBottom: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--text-color)',
                    fontSize: '1.1rem'
                  }}
                >
                  Email Address
                </motion.label>
                <motion.input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter your email address to get started..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: '100%',
                    padding: '1.2rem',
                    border: '2px solid var(--border-color)',
                    borderRadius: '15px',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    background: 'var(--input-bg-color)',
                    color: 'var(--text-color)',
                    boxShadow: '0 2px 8px var(--shadow-color)'
                  }}
                />
              </motion.div>
              
              <motion.button 
                type="submit" 
                className="submit-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                  color: 'white',
                  border: 'none',
                  padding: '1.2rem',
                  borderRadius: '15px',
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.8rem',
                  opacity: isSubmitting ? 0.7 : 1,
                  marginTop: '1rem'
                }}
              >
                <motion.span
                  animate={{ opacity: isSubmitting ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                </motion.span>
                <motion.i 
                  className="fas fa-arrow-right"
                  animate={{ 
                    x: isSubmitting ? 5 : 0,
                    opacity: isSubmitting ? 0.5 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              {/* Success Message */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                      color: 'white',
                      borderRadius: '12px',
                      textAlign: 'center',
                      fontWeight: '600'
                    }}
                  >
                    <i className="fas fa-check-circle" style={{ marginRight: '0.5rem' }}></i>
                    Successfully subscribed! Welcome to our community! 🎉
                  </motion.div>
                )}
              </AnimatePresence>
              
              <motion.div 
                className="form-footer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                style={{
                  marginTop: '1.5rem',
                  textAlign: 'center'
                }}
              >
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-color-light)',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  By subscribing, you agree to our{' '}
                  <motion.a 
                    href="/privacy"
                    whileHover={{ color: '#4CAF50' }}
                    transition={{ duration: 0.3 }}
                    style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                  >
                    Privacy Policy
                  </motion.a>{' '}
                  and{' '}
                  <motion.a 
                    href="/terms"
                    whileHover={{ color: '#4CAF50' }}
                    transition={{ duration: 0.3 }}
                    style={{ color: 'var(--primary-color)', textDecoration: 'none' }}
                  >
                    Terms of Service
                  </motion.a>
                </p>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter; 