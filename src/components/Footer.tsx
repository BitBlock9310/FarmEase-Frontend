import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { to: '/', text: 'Home' },
        { to: '/about', text: 'About' },
        { to: '/products', text: 'Products' },
        { to: '/contact', text: 'Contact' }
      ]
    },
    {
      title: 'Customer Support',
      links: [
        { to: '/help', text: 'Help Center' },
        { to: '/shipping', text: 'Shipping Info' },
        { to: '/returns', text: 'Returns' },
        { to: '/faq', text: 'FAQ' }
      ]
    },
    {
      title: 'Contact Info',
      links: [
        { to: 'tel:+919876543210', text: '+91 98765 43210' },
        { to: 'mailto:info@farmease.com', text: 'info@farmease.com' },
        { to: '/contact', text: 'Mon-Sat: 9AM-6PM' },
        { to: '/address', text: '123 Farm Road, Delhi' }
      ]
    }
  ];

  const footerBottomLinks = [
    { to: '/privacy', text: 'Privacy Policy' },
    { to: '/terms', text: 'Terms of Service' },
    { to: '/shipping', text: 'Shipping Policy' },
    { to: '/cookies', text: 'Cookie Policy' }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'var(--bg-color)',
        borderTop: '1px solid var(--border-color)'
      }}
    >
      <div 
        className="footer-content"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '3rem 2rem 2rem',
          background: 'radial-gradient(circle at 20% 80%, var(--primary-color-light) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--secondary-color-light) 0%, transparent 50%)'
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem'
        }}>
          {/* Company Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              minHeight: '150px'
            }}
          >
            <motion.div 
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '0.8rem',
                background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              FarmEase
            </motion.div>
            <motion.p 
              style={{
                fontSize: '0.9rem',
                lineHeight: '1.4',
                color: 'var(--text-color-light)',
                marginBottom: '1.5rem'
              }}
            >
              Empowering farmers and connecting consumers with fresh, organic agricultural products through innovative technology.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              style={{
                display: 'flex',
                gap: '0.8rem'
              }}
            >
              {[
                { icon: 'fab fa-facebook', color: '#1877f2' },
                { icon: 'fab fa-twitter', color: '#1da1f2' },
                { icon: 'fab fa-instagram', color: '#e4405f' },
                { icon: 'fab fa-linkedin', color: '#0077b5' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${social.color}, ${social.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1rem'
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={sectionIndex}
              className="footer-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + sectionIndex * 0.1, duration: 0.6 }}
              style={{
                minHeight: '150px'
              }}
            >
              <motion.h4 
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: 'var(--text-color)',
                  position: 'relative'
                }}
                whileHover={{ scale: 1.02 }}
              >
                {section.title}
                <motion.div 
                  style={{
                    position: 'absolute',
                    bottom: '-5px',
                    left: 0,
                    width: '30px',
                    height: '2px',
                    background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                    borderRadius: '1px'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: '30px' }}
                  transition={{ delay: 0.5 + sectionIndex * 0.1, duration: 0.6 }}
                />
              </motion.h4>
              
              <motion.ul 
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}
              >
                {section.links.map((link, linkIndex) => (
                  <motion.li 
                    key={linkIndex}
                    style={{
                      marginBottom: '0.8rem'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05, duration: 0.5 }}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link 
                        to={link.to}
                        style={{
                          color: 'var(--text-color-light)',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#4CAF50';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--text-color-light)';
                        }}
                      >
                        <i className="fas fa-chevron-right" style={{ width: '16px', color: '#4CAF50', fontSize: '0.8rem' }}></i>
                        {link.text}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        style={{
          borderTop: '1px solid var(--border-color)',
          padding: '2rem 0',
          background: 'var(--card-bg-color)'
        }}
      >
        <div 
          className="footer-bottom-content"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <motion.p 
            style={{
              color: 'var(--text-color-light)',
              margin: 0,
              fontSize: '0.9rem'
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            © 2024 Farmease. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="footer-links"
            style={{
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {footerBottomLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={link.to}
                  style={{
                    color: 'var(--text-color-light)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#4CAF50';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-color-light)';
                  }}
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 