import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  quantity: number;
  stock: number;
  category: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Organic Tomatoes',
      image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=200',
      price: 120,
      originalPrice: 150,
      quantity: 2,
      stock: 50,
      category: 'vegetables'
    },
    {
      id: 2,
      name: 'Fresh Spinach',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200',
      price: 80,
      originalPrice: 100,
      quantity: 1,
      stock: 30,
      category: 'vegetables'
    },
    {
      id: 3,
      name: 'Premium Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200',
      price: 299,
      originalPrice: 399,
      quantity: 1,
      stock: 25,
      category: 'grains'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.min(newQuantity, item.stock) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyCoupon = async () => {
    if (!couponCode.trim()) return;
    
    setIsApplyingCoupon(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate coupon validation
    if (couponCode.toLowerCase() === 'welcome10') {
      setAppliedCoupon('WELCOME10');
    }
    
    setIsApplyingCoupon(false);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedCoupon ? subtotal * 0.1 : 0; // 10% discount
  const shipping = subtotal > 2000 ? 0 : 100;
  const total = subtotal - discount + shipping;

  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);

  return (
    <div className="cart-page">
      {/* Hero Section */}
      <motion.section 
        className="cart-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
          color: 'white',
          padding: '3rem 0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}
          >
            Shopping Cart
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              fontSize: '1.1rem',
              opacity: 0.9
            }}
          >
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </motion.p>
        </div>
      </motion.section>

      {/* Cart Content */}
      <motion.section 
        className="cart-content"
        style={{
          padding: '3rem 0',
          background: 'var(--bg-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          {cartItems.length === 0 ? (
            <motion.div 
              style={{
                textAlign: 'center',
                padding: '4rem 0'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.i 
                className="fas fa-shopping-cart"
                style={{
                  fontSize: '4rem',
                  color: 'var(--text-color-light)',
                  marginBottom: '2rem'
                }}
              />
              <motion.h2 
                style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--text-color)'
                }}
              >
                Your cart is empty
              </motion.h2>
              <motion.p 
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-color-light)',
                  marginBottom: '2rem'
                }}
              >
                Looks like you haven't added any items to your cart yet.
              </motion.p>
              <motion.button 
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Continue Shopping
              </motion.button>
            </motion.div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '3rem',
              alignItems: 'start'
            }}>
              {/* Cart Items */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: '600',
                    marginBottom: '2rem',
                    color: 'var(--text-color)'
                  }}
                >
                  Cart Items
                </motion.h2>
                
                <motion.div 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}
                >
                  <AnimatePresence mode="wait">
                    {cartItems.map((item, index) => (
                      <motion.div 
                        key={item.id}
                        className="cart-item"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30, height: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        style={{
                          background: 'var(--card-bg-color)',
                          borderRadius: '15px',
                          padding: '1.5rem',
                          boxShadow: '0 4px 15px var(--shadow-color)',
                          border: '1px solid var(--border-color)',
                          display: 'flex',
                          gap: '1.5rem',
                          alignItems: 'center'
                        }}
                      >
                        {/* Item Image */}
                        <motion.img 
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '10px',
                            objectFit: 'cover'
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Item Details */}
                        <motion.div 
                          style={{
                            flex: 1
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
                            {item.name}
                          </motion.h3>
                          <motion.p 
                            style={{
                              fontSize: '0.9rem',
                              color: 'var(--text-color-light)',
                              marginBottom: '1rem'
                            }}
                          >
                            Category: {item.category}
                          </motion.p>
                          
                          <motion.div 
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem'
                            }}
                          >
                            <motion.span 
                              style={{
                                fontSize: '1.3rem',
                                fontWeight: '700',
                                color: '#4CAF50'
                              }}
                            >
                              ₹{item.price}
                            </motion.span>
                            <motion.span 
                              style={{
                                textDecoration: 'line-through',
                                color: 'var(--text-color-light)',
                                fontSize: '1rem'
                              }}
                            >
                              ₹{item.originalPrice}
                            </motion.span>
                          </motion.div>
                        </motion.div>

                        {/* Quantity Controls */}
                        <motion.div 
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem'
                          }}
                        >
                          <motion.div 
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <motion.button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              style={{
                                width: '35px',
                                height: '35px',
                                borderRadius: '50%',
                                border: '2px solid var(--border-color)',
                                background: 'var(--card-bg-color)',
                                color: 'var(--text-color)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <i className="fas fa-minus"></i>
                            </motion.button>
                            
                            <motion.span 
                              style={{
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                color: 'var(--text-color)',
                                minWidth: '40px',
                                textAlign: 'center'
                              }}
                            >
                              {item.quantity}
                            </motion.span>
                            
                            <motion.button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              disabled={item.quantity >= item.stock}
                              style={{
                                width: '35px',
                                height: '35px',
                                borderRadius: '50%',
                                border: '2px solid var(--border-color)',
                                background: 'var(--card-bg-color)',
                                color: item.quantity >= item.stock ? 'var(--text-color-light)' : 'var(--text-color)',
                                cursor: item.quantity >= item.stock ? 'not-allowed' : 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                              whileHover={item.quantity >= item.stock ? {} : { scale: 1.1 }}
                              whileTap={item.quantity >= item.stock ? {} : { scale: 0.9 }}
                            >
                              <i className="fas fa-plus"></i>
                            </motion.button>
                          </motion.div>
                          
                          <motion.button 
                            onClick={() => removeItem(item.id)}
                            style={{
                              padding: '0.5rem 1rem',
                              background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '8px',
                              fontSize: '0.9rem',
                              cursor: 'pointer'
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Remove
                          </motion.button>
                        </motion.div>

                        {/* Total Price */}
                        <motion.div 
                          style={{
                            textAlign: 'right'
                          }}
                        >
                          <motion.div 
                            style={{
                              fontSize: '1.3rem',
                              fontWeight: '700',
                              color: '#4CAF50'
                            }}
                          >
                            ₹{item.price * item.quantity}
                          </motion.div>
                          <motion.div 
                            style={{
                              fontSize: '0.9rem',
                              color: 'var(--text-color-light)'
                            }}
                          >
                            {item.quantity} × ₹{item.price}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* Order Summary */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'sticky',
                  top: '2rem'
                }}
              >
                <motion.div 
                  style={{
                    background: 'var(--card-bg-color)',
                    borderRadius: '15px',
                    padding: '2rem',
                    boxShadow: '0 4px 15px var(--shadow-color)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <motion.h2 
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      marginBottom: '2rem',
                      color: 'var(--text-color)'
                    }}
                  >
                    Order Summary
                  </motion.h2>

                  {/* Savings Info */}
                  {savings > 0 && (
                    <motion.div 
                      style={{
                        background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                        color: 'white',
                        padding: '1rem',
                        borderRadius: '10px',
                        marginBottom: '2rem',
                        textAlign: 'center'
                      }}
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <motion.div 
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          marginBottom: '0.5rem'
                        }}
                      >
                        🎉 You're saving ₹{savings}!
                      </motion.div>
                      <motion.div 
                        style={{
                          fontSize: '0.9rem',
                          opacity: 0.9
                        }}
                      >
                        Great deals on selected items
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Coupon Section */}
                  <motion.div 
                    style={{
                      marginBottom: '2rem'
                    }}
                  >
                    <motion.h3 
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: 'var(--text-color)'
                      }}
                    >
                      Apply Coupon
                    </motion.h3>
                    
                    {appliedCoupon ? (
                      <motion.div 
                        style={{
                          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                          color: 'white',
                          padding: '1rem',
                          borderRadius: '8px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span>Coupon applied: {appliedCoupon}</span>
                        <motion.button 
                          onClick={removeCoupon}
                          style={{
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            padding: '0.3rem 0.6rem',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Remove
                        </motion.button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        style={{
                          display: 'flex',
                          gap: '0.5rem'
                        }}
                      >
                        <motion.input 
                          type="text"
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          style={{
                            flex: 1,
                            padding: '0.8rem',
                            borderRadius: '8px',
                            border: '2px solid var(--border-color)',
                            background: 'var(--input-bg-color)',
                            color: 'var(--text-color)',
                            fontSize: '0.9rem'
                          }}
                          whileFocus={{ scale: 1.02 }}
                        />
                        <motion.button 
                          onClick={applyCoupon}
                          disabled={isApplyingCoupon || !couponCode.trim()}
                          style={{
                            padding: '0.8rem 1rem',
                            background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '0.9rem',
                            cursor: isApplyingCoupon || !couponCode.trim() ? 'not-allowed' : 'pointer',
                            opacity: isApplyingCoupon || !couponCode.trim() ? 0.6 : 1
                          }}
                          whileHover={isApplyingCoupon || !couponCode.trim() ? {} : { scale: 1.05 }}
                          whileTap={isApplyingCoupon || !couponCode.trim() ? {} : { scale: 0.95 }}
                        >
                          {isApplyingCoupon ? 'Applying...' : 'Apply'}
                        </motion.button>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Price Breakdown */}
                  <motion.div 
                    style={{
                      marginBottom: '2rem'
                    }}
                  >
                    <motion.div 
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                        fontSize: '1rem',
                        color: 'var(--text-color)'
                      }}
                    >
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </motion.div>
                    
                    {discount > 0 && (
                      <motion.div 
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          marginBottom: '1rem',
                          fontSize: '1rem',
                          color: '#4CAF50'
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <span>Discount</span>
                        <span>-₹{discount}</span>
                      </motion.div>
                    )}
                    
                    <motion.div 
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '1rem',
                        fontSize: '1rem',
                        color: 'var(--text-color)'
                      }}
                    >
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                    </motion.div>
                    
                    <motion.div 
                      style={{
                        borderTop: '2px solid var(--border-color)',
                        paddingTop: '1rem',
                        marginTop: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '1.3rem',
                        fontWeight: '700',
                        color: 'var(--text-color)'
                      }}
                    >
                      <span>Total</span>
                      <span>₹{total}</span>
                    </motion.div>
                  </motion.div>

                  {/* Checkout Button */}
                  <motion.button 
                    style={{
                      width: '100%',
                      padding: '1.2rem',
                      background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Proceed to Checkout
                  </motion.button>

                  {/* Continue Shopping */}
                  <motion.button 
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'transparent',
                      color: 'var(--text-color)',
                      border: '2px solid var(--border-color)',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      marginTop: '1rem'
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue Shopping
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Cart; 