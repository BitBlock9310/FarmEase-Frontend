import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! Welcome to Farmease. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: Date.now(),
        text: inputValue,
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: 'Thank you for your message! Our team will get back to you soon.',
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
      {/* Hover Button */}
      <motion.button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4CAF50, #45a049)',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1001
        }}
        aria-label="Toggle chatbot"
      >
        <motion.i 
          className="fas fa-comments"
          animate={{ 
            rotate: isHovered ? [0, -10, 10, 0] : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Notification Badge */}
        <motion.div
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#ff6b6b',
            color: 'white',
            fontSize: '0.7rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          1
        </motion.div>
      </motion.button>

      {/* Chat Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-container"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '0',
              width: '350px',
              height: '500px',
              background: 'var(--card-bg-color)',
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <motion.div 
              className="chatbot-header"
              style={{
                background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                color: 'white',
                padding: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px'
              }}
            >
              <motion.div 
                className="chatbot-title"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: '600'
                }}
              >
                <motion.i 
                  className="fas fa-robot"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>Farmease Assistant</span>
              </motion.div>
              <motion.button 
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '0.5rem'
                }}
                aria-label="Close chatbot"
              >
                <i className="fas fa-times"></i>
              </motion.button>
            </motion.div>

            {/* Messages */}
            <motion.div 
              className="chatbot-messages"
              style={{
                flex: 1,
                padding: '1rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              {messages.map((message) => (
                <motion.div 
                  key={message.id} 
                  className={`message ${message.isUser ? 'user' : 'bot'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: 'flex',
                    justifyContent: message.isUser ? 'flex-end' : 'flex-start'
                  }}
                >
                  <motion.div 
                    className="message-content"
                    style={{
                      maxWidth: '80%',
                      padding: '0.8rem 1rem',
                      borderRadius: '15px',
                      background: message.isUser 
                        ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
                        : 'var(--border-color)',
                      color: message.isUser ? 'white' : 'var(--text-color)',
                      position: 'relative'
                    }}
                  >
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>{message.text}</p>
                    <span 
                      className="message-time"
                      style={{
                        fontSize: '0.7rem',
                        opacity: 0.7,
                        display: 'block',
                        marginTop: '0.3rem'
                      }}
                    >
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </motion.div>

            {/* Input */}
            <motion.div 
              className="chatbot-input"
              style={{
                padding: '1rem',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                gap: '0.5rem'
              }}
            >
              <motion.input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                whileFocus={{ scale: 1.02 }}
                style={{
                  flex: 1,
                  padding: '0.8rem',
                  border: '2px solid var(--border-color)',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  background: 'var(--input-bg-color)',
                  color: 'var(--text-color)',
                  outline: 'none'
                }}
              />
              <motion.button 
                className="send-button"
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  padding: '0.8rem',
                  borderRadius: '12px',
                  background: inputValue.trim() 
                    ? 'linear-gradient(135deg, #4CAF50, #45a049)' 
                    : '#ccc',
                  border: 'none',
                  color: 'white',
                  cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                  fontSize: '1rem'
                }}
              >
                <i className="fas fa-paper-plane"></i>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot; 