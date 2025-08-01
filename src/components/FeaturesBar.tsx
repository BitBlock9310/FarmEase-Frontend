import React from 'react';
import { motion, Variants } from 'framer-motion';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

const FeaturesBar: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      icon: 'fas fa-shipping-fast',
      title: 'Free Shipping',
      description: 'On orders over ₹2000',
      color: '#4CAF50'
    },
    {
      id: 2,
      icon: 'fas fa-undo',
      title: 'Easy Returns',
      description: '30-day return policy',
      color: '#2196F3'
    },
    {
      id: 3,
      icon: 'fas fa-shield-alt',
      title: 'Secure Payment',
      description: '100% secure checkout',
      color: '#FF9800'
    },
    {
      id: 4,
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Expert assistance',
      color: '#9C27B0'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { 
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <motion.section 
      className="features-bar"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="features-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1rem',
            alignItems: 'stretch'
          }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id} 
              className="feature-item"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '1rem',
                padding: '1.5rem',
                background: 'var(--bg-color)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px var(--shadow-color)',
                border: '1px solid var(--border-color)',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '120px',
                minWidth: '280px',
                height: '100%'
              }}
            >
              {/* Background Gradient */}
              <motion.div
                className="feature-bg"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}05)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                whileHover={{ opacity: 1 }}
              />
              
              <motion.div
                className="feature-icon"
                variants={iconVariants}
                whileHover="hover"
                style={{
                  fontSize: '2rem',
                  color: feature.color,
                  background: `${feature.color}15`,
                  padding: '0.8rem',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 2,
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '60px',
                  minHeight: '60px'
                }}
              >
                <i className={feature.icon}></i>
              </motion.div>
              
              <motion.div 
                className="feature-content"
                style={{
                  flex: 1,
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <motion.h4
                  style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.5rem',
                    color: 'var(--text-color)',
                    fontWeight: '600',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  {feature.title}
                </motion.h4>
                <motion.p
                  style={{
                    color: 'var(--text-color-light)',
                    fontSize: '0.9rem',
                    lineHeight: '1.3',
                    margin: 0,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
              
              {/* Hover Effect Border */}
              <motion.div
                className="feature-border"
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
      </div>
    </motion.section>
  );
};

export default FeaturesBar; 