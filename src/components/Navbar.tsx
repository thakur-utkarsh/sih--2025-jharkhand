import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const linkVariants = {
    hover: {
      color: 'var(--primary)',
      transition: { duration: 0.2 }
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      className="navbar"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          <Leaf size={28} />
          <span>EcoTourism JH</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links" style={{ display: window.innerWidth > 768 ? 'flex' : 'none' }}>
          <li>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/attractions" className={isActive('/attractions') ? 'active' : ''}>
                Attractions
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/about" className={isActive('/about') ? 'active' : ''}>
                About
              </Link>
            </motion.div>
          </li>
          <li>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>
                Contact
              </Link>
            </motion.div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: window.innerWidth <= 768 ? 'block' : 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)' }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            background: 'white',
            padding: '20px',
            borderTop: '1px solid var(--border)',
            display: window.innerWidth <= 768 ? 'block' : 'none'
          }}
        >
          <Link to="/" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '10px 0', color: 'var(--text)', textDecoration: 'none' }}>
            Home
          </Link>
          <Link to="/attractions" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '10px 0', color: 'var(--text)', textDecoration: 'none' }}>
            Attractions
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '10px 0', color: 'var(--text)', textDecoration: 'none' }}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '10px 0', color: 'var(--text)', textDecoration: 'none' }}>
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

