import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: 'fas fa-users' },
    { number: '500+', label: 'Products', icon: 'fas fa-seedling' },
    { number: '50+', label: 'Cities Served', icon: 'fas fa-map-marker-alt' },
    { number: '24/7', label: 'Support', icon: 'fas fa-headset' }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
      description: 'Agricultural expert with 15+ years of experience'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200',
      description: 'Supply chain specialist ensuring quality delivery'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200',
      description: 'Blockchain expert driving innovation'
    }
  ];

  const values = [
    {
      icon: 'fas fa-leaf',
      title: 'Sustainability',
      description: 'Promoting eco-friendly farming practices'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Trust',
      description: 'Building lasting relationships with farmers'
    },
    {
      icon: 'fas fa-star',
      title: 'Quality',
      description: 'Ensuring premium product standards'
    },
    {
      icon: 'fas fa-heart',
      title: 'Community',
      description: 'Supporting local farming communities'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
          color: 'white',
          padding: '6rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: '3.5rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}
          >
            About FarmEase
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontSize: '1.3rem',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Empowering farmers and connecting consumers with fresh, organic agricultural products through innovative technology and sustainable practices.
          </motion.p>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="stats-section"
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
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
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
                <motion.i 
                  className={stat.icon}
                  style={{
                    fontSize: '2.5rem',
                    color: '#4CAF50',
                    marginBottom: '1rem',
                    display: 'block'
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3 
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    margin: '0 0 0.5rem',
                    color: 'var(--text-color)'
                  }}
                >
                  {stat.number}
                </motion.h3>
                <motion.p 
                  style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-color-light)',
                    margin: 0
                  }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section 
        className="story-section"
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
            alignItems: 'center'
          }}>
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
                Our Story
              </motion.h2>
              <motion.p 
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'var(--text-color-light)',
                  marginBottom: '1.5rem'
                }}
              >
                FarmEase was born from a simple vision: to bridge the gap between farmers and consumers while promoting sustainable agriculture. Founded in 2020, we started as a small initiative to help local farmers sell their products directly to consumers.
              </motion.p>
              <motion.p 
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: 'var(--text-color-light)',
                  marginBottom: '1.5rem'
                }}
              >
                Today, we've grown into a comprehensive platform that connects thousands of farmers with consumers across India, ensuring fresh, organic products reach your table while supporting local farming communities.
              </motion.p>
              <motion.button 
                style={{
                  background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                height: '400px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '4rem'
              }}
            >
              <i className="fas fa-seedling"></i>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="values-section"
        style={{
          padding: '4rem 0',
          background: 'var(--bg-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h2 
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--text-color)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8 }}
                style={{
                  background: 'var(--card-bg-color)',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px var(--shadow-color)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <motion.i 
                  className={value.icon}
                  style={{
                    fontSize: '3rem',
                    color: '#4CAF50',
                    marginBottom: '1.5rem',
                    display: 'block'
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--text-color)'
                  }}
                >
                  {value.title}
                </motion.h3>
                <motion.p 
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-color-light)',
                    lineHeight: '1.6'
                  }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="team-section"
        style={{
          padding: '4rem 0',
          background: 'var(--card-bg-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h2 
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              textAlign: 'center',
              marginBottom: '3rem',
              color: 'var(--text-color)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -8 }}
                style={{
                  background: 'var(--bg-color)',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px var(--shadow-color)',
                  border: '1px solid var(--border-color)'
                }}
              >
                <motion.img 
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    marginBottom: '1.5rem',
                    objectFit: 'cover'
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: 'var(--text-color)'
                  }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  style={{
                    fontSize: '1.1rem',
                    color: '#4CAF50',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-color-light)',
                    lineHeight: '1.6'
                  }}
                >
                  {member.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 