import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      details: '123 Farm Road, Green Valley, Delhi - 110001, India',
      color: '#4CAF50'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      details: '+91 98765 43210',
      color: '#2196F3'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      details: 'info@farmease.com',
      color: '#FF9800'
    },
    {
      icon: 'fas fa-clock',
      title: 'Working Hours',
      details: 'Mon-Sat: 9AM-6PM',
      color: '#9C27B0'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
          color: 'white',
          padding: '4rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: '3rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Get in touch with us for any questions, support, or partnership opportunities
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section 
        className="contact-info-section"
        style={{
          padding: '4rem 0',
          background: 'var(--bg-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: 'var(--card-bg-color)',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px var(--shadow-color)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <motion.div 
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${info.color}, ${info.color}dd)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white',
                    fontSize: '2rem'
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <i className={info.icon}></i>
                </motion.div>
                <motion.h3 
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--text-color)'
                  }}
                >
                  {info.title}
                </motion.h3>
                <motion.p 
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-color-light)',
                    lineHeight: '1.6'
                  }}
                >
                  {info.details}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section 
        className="contact-form-section"
        style={{
          padding: '4rem 0',
          background: 'var(--card-bg-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--text-color)'
                }}
              >
                Send us a Message
              </motion.h2>
              <motion.p 
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-color-light)',
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}
              >
                Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
              </motion.p>

              <motion.form 
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                <motion.div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem'
                  }}
                >
                  <motion.div>
                    <motion.label 
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '600',
                        color: 'var(--text-color)'
                      }}
                    >
                      Name *
                    </motion.label>
                    <motion.input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '2px solid var(--border-color)',
                        background: 'var(--input-bg-color)',
                        color: 'var(--text-color)',
                        fontSize: '1rem'
                      }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  <motion.div>
                    <motion.label 
                      style={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        fontWeight: '600',
                        color: 'var(--text-color)'
                      }}
                    >
                      Email *
                    </motion.label>
                    <motion.input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        borderRadius: '8px',
                        border: '2px solid var(--border-color)',
                        background: 'var(--input-bg-color)',
                        color: 'var(--text-color)',
                        fontSize: '1rem'
                      }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </motion.div>

                <motion.div>
                  <motion.label 
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      color: 'var(--text-color)'
                    }}
                  >
                    Subject *
                  </motion.label>
                  <motion.select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '2px solid var(--border-color)',
                      background: 'var(--input-bg-color)',
                      color: 'var(--text-color)',
                      fontSize: '1rem',
                      cursor: 'pointer'
                    }}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </motion.select>
                </motion.div>

                <motion.div>
                  <motion.label 
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontWeight: '600',
                      color: 'var(--text-color)'
                    }}
                  >
                    Message *
                  </motion.label>
                  <motion.textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '2px solid var(--border-color)',
                      background: 'var(--input-bg-color)',
                      color: 'var(--text-color)',
                      fontSize: '1rem',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  whileHover={isSubmitting ? {} : { scale: 1.05, y: -2 }}
                  whileTap={isSubmitting ? {} : { scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid transparent',
                          borderTop: '2px solid white',
                          borderRadius: '50%'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3 
                style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--text-color)'
                }}
              >
                Visit Our Office
              </motion.h3>
              
              {/* Map Placeholder */}
              <motion.div 
                style={{
                  width: '100%',
                  height: '300px',
                  background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  marginBottom: '2rem'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div style={{ textAlign: 'center' }}>
                  <i className="fas fa-map" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                  <p>Interactive Map</p>
                  <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>123 Farm Road, Green Valley, Delhi</p>
                </div>
              </motion.div>

              <motion.div 
                style={{
                  background: 'var(--bg-color)',
                  padding: '2rem',
                  borderRadius: '15px',
                  border: '1px solid var(--border-color)'
                }}
              >
                <motion.h4 
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--text-color)'
                  }}
                >
                  Business Hours
                </motion.h4>
                <motion.div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem'
                  }}
                >
                  <motion.div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-color)'
                    }}
                  >
                    <span style={{ color: 'var(--text-color)' }}>Monday - Friday</span>
                    <span style={{ color: 'var(--text-color-light)' }}>9:00 AM - 6:00 PM</span>
                  </motion.div>
                  <motion.div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-color)'
                    }}
                  >
                    <span style={{ color: 'var(--text-color)' }}>Saturday</span>
                    <span style={{ color: 'var(--text-color-light)' }}>9:00 AM - 4:00 PM</span>
                  </motion.div>
                  <motion.div 
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0.5rem 0'
                    }}
                  >
                    <span style={{ color: 'var(--text-color)' }}>Sunday</span>
                    <span style={{ color: 'var(--text-color-light)' }}>Closed</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact; 