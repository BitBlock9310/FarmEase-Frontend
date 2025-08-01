import React from 'react';
import { motion, Variants } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
  fullScreen?: boolean;
  type?: 'spinner' | 'dots' | 'pulse' | 'wave';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = '#4CAF50',
  text,
  fullScreen = false,
  type = 'spinner'
}) => {
  const sizeMap = {
    small: '20px',
    medium: '40px',
    large: '60px'
  };

  const spinnerSize = sizeMap[size];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const spinnerVariants: Variants = {
    hidden: { rotate: 0 },
    visible: { 
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };
  
  const pulseVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: { 
      scale: [0.8, 1.2, 0.8],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const dotsVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const waveVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const waveBarVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const renderLoadingContent = () => {
    switch (type) {
      case 'dots':
        return (
          <motion.div
            className="dots-container"
            variants={dotsVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: '8px' }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="dot"
                variants={dotVariants}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: color
                }}
              />
            ))}
          </motion.div>
        );

      case 'pulse':
        return (
          <motion.div
            className="pulse-container"
            variants={pulseVariants}
            initial="hidden"
            animate="visible"
            style={{
              width: spinnerSize,
              height: spinnerSize,
              borderRadius: '50%',
              backgroundColor: color
            }}
          />
        );

      case 'wave':
        return (
          <motion.div
            className="wave-container"
            variants={waveVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="wave-bar"
                variants={waveBarVariants}
                style={{
                  width: '4px',
                  height: '20px',
                  backgroundColor: color,
                  borderRadius: '2px'
                }}
              />
            ))}
          </motion.div>
        );

      default:
        return (
          <motion.div
            className="spinner-container"
            variants={spinnerVariants}
            initial="hidden"
            animate="visible"
          >
            <div 
              className="spinner"
              style={{ 
                width: spinnerSize, 
                height: spinnerSize,
                borderColor: color,
                borderTopColor: color
              }}
            />
          </motion.div>
        );
    }
  };

  const content = (
    <motion.div
      className={`loading-container ${fullScreen ? 'fullscreen' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="loading-content">
        {renderLoadingContent()}
        
        {text && (
          <motion.p
            className="loading-text"
            variants={pulseVariants}
            initial="hidden"
            animate="visible"
          >
            {text}
          </motion.p>
        )}
      </div>
    </motion.div>
  );

  if (fullScreen) {
    return (
      <div className="loading-overlay">
        {content}
      </div>
    );
  }

  return content;
};

export default LoadingSpinner; 