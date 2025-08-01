import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  description: string;
}

const Products: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'all', name: 'All Products', icon: 'fas fa-th' },
    { id: 'vegetables', name: 'Vegetables', icon: 'fas fa-carrot' },
    { id: 'fruits', name: 'Fruits', icon: 'fas fa-apple-alt' },
    { id: 'grains', name: 'Grains', icon: 'fas fa-seedling' },
    { id: 'pulses', name: 'Pulses', icon: 'fas fa-circle' },
    { id: 'dairy', name: 'Dairy', icon: 'fas fa-cheese' },
    { id: 'tools', name: 'Farming Tools', icon: 'fas fa-tools' }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=300',
      price: 120,
      originalPrice: 150,
      discount: 20,
      rating: 4.5,
      reviews: 128,
      stock: 50,
      badge: 'Organic',
      description: 'Fresh organic tomatoes grown without pesticides'
    },
    {
      id: 2,
      name: 'Fresh Spinach',
      category: 'vegetables',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300',
      price: 80,
      originalPrice: 100,
      discount: 20,
      rating: 4.8,
      reviews: 256,
      stock: 30,
      badge: 'Fresh',
      description: 'Nutritious spinach packed with vitamins'
    },
    {
      id: 3,
      name: 'Premium Basmati Rice',
      category: 'grains',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300',
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.6,
      reviews: 89,
      stock: 25,
      badge: 'Premium',
      description: 'Aromatic long-grain basmati rice'
    },
    {
      id: 4,
      name: 'Fresh Apples',
      category: 'fruits',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=300',
      price: 199,
      originalPrice: 299,
      discount: 33,
      rating: 4.7,
      reviews: 167,
      stock: 40,
      badge: 'Fresh',
      description: 'Sweet and crisp organic apples'
    },
    {
      id: 5,
      name: 'Organic Bananas',
      category: 'fruits',
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300',
      price: 89,
      originalPrice: 119,
      discount: 25,
      rating: 4.4,
      reviews: 143,
      stock: 60,
      badge: 'Organic',
      description: 'Naturally ripened organic bananas'
    },
    {
      id: 6,
      name: 'Moong Dal',
      category: 'pulses',
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=300',
      price: 149,
      originalPrice: 199,
      discount: 25,
      rating: 4.3,
      reviews: 98,
      stock: 35,
      badge: 'Premium',
      description: 'High-quality moong dal for healthy cooking'
    },
    {
      id: 7,
      name: 'Fresh Milk',
      category: 'dairy',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300',
      price: 69,
      originalPrice: 89,
      discount: 22,
      rating: 4.9,
      reviews: 234,
      stock: 20,
      badge: 'Fresh',
      description: 'Pure and fresh farm milk'
    },
    {
      id: 8,
      name: 'Garden Shovel',
      category: 'tools',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300',
      price: 599,
      originalPrice: 799,
      discount: 25,
      rating: 4.2,
      reviews: 76,
      stock: 15,
      badge: 'Quality',
      description: 'Durable garden shovel for farming'
    }
  ];

  const filteredProducts = products.filter(product => 
    activeFilter === 'all' || product.category === activeFilter
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'discount':
        return b.discount - a.discount;
      default:
        return 0;
    }
  });

  return (
    <div className="products-page">
      {/* Hero Section */}
      <motion.section 
        className="products-hero"
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
            Our Products
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
            Discover fresh, organic agricultural products directly from farmers to your table
          </motion.p>
        </div>
      </motion.section>

      {/* Filters Section */}
      <motion.section 
        className="filters-section"
        style={{
          padding: '2rem 0',
          background: 'var(--bg-color)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            {/* Category Filters */}
            <motion.div 
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '25px',
                    border: '2px solid var(--border-color)',
                    background: activeFilter === category.id 
                      ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
                      : 'var(--card-bg-color)',
                    color: activeFilter === category.id ? 'white' : 'var(--text-color)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <i className={category.icon}></i>
                  {category.name}
                </motion.button>
              ))}
            </motion.div>

            {/* Sort and View Controls */}
            <motion.div 
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center'
              }}
            >
              <motion.select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: '2px solid var(--border-color)',
                  background: 'var(--card-bg-color)',
                  color: 'var(--text-color)',
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="discount">Best Discount</option>
              </motion.select>

              <motion.div 
                style={{
                  display: 'flex',
                  gap: '0.5rem'
                }}
              >
                <motion.button
                  onClick={() => setViewMode('grid')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '2px solid var(--border-color)',
                    background: viewMode === 'grid' 
                      ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
                      : 'var(--card-bg-color)',
                    color: viewMode === 'grid' ? 'white' : 'var(--text-color)',
                    cursor: 'pointer'
                  }}
                >
                  <i className="fas fa-th"></i>
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    padding: '0.8rem',
                    borderRadius: '8px',
                    border: '2px solid var(--border-color)',
                    background: viewMode === 'list' 
                      ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
                      : 'var(--card-bg-color)',
                    color: viewMode === 'list' ? 'white' : 'var(--text-color)',
                    cursor: 'pointer'
                  }}
                >
                  <i className="fas fa-list"></i>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <motion.section 
        className="products-grid-section"
        style={{
          padding: '3rem 0',
          background: 'var(--bg-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div 
            style={{
              display: viewMode === 'grid' ? 'grid' : 'flex',
              gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : 'none',
              flexDirection: viewMode === 'list' ? 'column' : 'row',
              gap: '2rem'
            }}
          >
            <AnimatePresence mode="wait">
              {sortedProducts.map((product, index) => (
                <motion.div 
                  key={product.id}
                  className="product-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  style={{
                    background: 'var(--card-bg-color)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px var(--shadow-color)',
                    border: '1px solid var(--border-color)',
                    display: viewMode === 'list' ? 'flex' : 'block',
                    gap: viewMode === 'list' ? '2rem' : '0'
                  }}
                >
                  {/* Product Image */}
                  <motion.div 
                    style={{
                      position: 'relative',
                      height: viewMode === 'list' ? '200px' : '250px',
                      minWidth: viewMode === 'list' ? '200px' : 'auto',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.img 
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {product.badge && (
                      <motion.span 
                        style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                          color: 'white',
                          padding: '0.3rem 0.6rem',
                          borderRadius: '8px',
                          fontSize: '0.8rem',
                          fontWeight: '600'
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {product.badge}
                      </motion.span>
                    )}
                    <motion.span 
                      style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                        color: 'white',
                        padding: '0.3rem 0.6rem',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}
                    >
                      -{product.discount}%
                    </motion.span>
                  </motion.div>

                  {/* Product Info */}
                  <motion.div 
                    style={{
                      padding: viewMode === 'list' ? '0' : '1.5rem',
                      flex: viewMode === 'list' ? 1 : 'none'
                    }}
                  >
                    <motion.h3 
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: 'var(--text-color)'
                      }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    {viewMode === 'list' && (
                      <motion.p 
                        style={{
                          color: 'var(--text-color-light)',
                          marginBottom: '1rem',
                          lineHeight: '1.5'
                        }}
                      >
                        {product.description}
                      </motion.p>
                    )}

                    <motion.div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem'
                      }}
                    >
                      {Array.from({ length: 5 }, (_, i) => (
                        <motion.i
                          key={i}
                          className={`fas fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                          style={{
                            color: i < Math.floor(product.rating) ? '#ffc107' : '#ddd',
                            fontSize: '0.9rem'
                          }}
                        />
                      ))}
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-color-light)' }}>
                        ({product.reviews})
                      </span>
                    </motion.div>

                    <motion.div 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <motion.span 
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: '700',
                          color: '#4CAF50'
                        }}
                      >
                        ₹{product.price}
                      </motion.span>
                      <motion.span 
                        style={{
                          textDecoration: 'line-through',
                          color: 'var(--text-color-light)',
                          fontSize: '1rem'
                        }}
                      >
                        ₹{product.originalPrice}
                      </motion.span>
                    </motion.div>

                    <motion.button 
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Cart
                    </motion.button>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Products; 