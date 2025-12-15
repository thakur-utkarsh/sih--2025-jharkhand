import { motion } from 'framer-motion';
import { Leaf, Users, Globe, Zap } from 'lucide-react';

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <motion.div className="footer-section" variants={itemVariants}>
            <h3>🌿 EcoTourism JH</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '15px' }}>
              Promoting sustainable and cultural tourism in Jharkhand while preserving natural heritage and tribal traditions.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ color: 'var(--primary)', fontSize: '20px' }}>f</a>
              <a href="#" style={{ color: 'var(--primary)', fontSize: '20px' }}>𝕏</a>
              <a href="#" style={{ color: 'var(--primary)', fontSize: '20px' }}>📷</a>
            </div>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/attractions">Attractions</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/">Privacy Policy</a>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Categories</h3>
            <a href="/attractions?category=eco-tourism">Eco-Tourism</a>
            <a href="/attractions?category=cultural">Cultural Sites</a>
            <a href="/attractions?category=historical">Historical</a>
            <a href="/attractions?category=adventure">Adventure</a>
          </motion.div>

          <motion.div className="footer-section" variants={itemVariants}>
            <h3>Contact Info</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '10px' }}>
              📍 Jharkhand, India
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '10px' }}>
              📧 info@ecotourismjh.com
            </p>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              📱 +91-XXXXX-XXXXX
            </p>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 EcoTourism Jharkhand. All rights reserved. | Smart India Hackathon Project</p>
        </div>
      </div>
    </motion.footer>
  );
}

