import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import AttractionCard from '../components/AttractionCard';
import { attractions } from '../data/attractions';
import type { Attraction } from '../data/attractions';

export default function Attractions() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['eco-tourism', 'cultural', 'historical', 'adventure'];

  const filteredAttractions = useMemo(() => {
    return attractions.filter(attraction => {
      const matchesCategory = !selectedCategory || attraction.category === selectedCategory;
      const matchesSearch = attraction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           attraction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           attraction.district.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '50vh' }}>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Attractions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the best eco-tourism, cultural, historical, and adventure sites in Jharkhand
          </motion.p>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="section">
        <div className="container">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              marginBottom: '40px',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'relative',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <Search size={20} style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--primary)'
              }} />
              <input
                type="text"
                placeholder="Search attractions by name, location, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 48px',
                  border: '2px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'var(--transition)',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.button
              className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Count */}
          <motion.p
            style={{
              textAlign: 'center',
              color: 'var(--text-light)',
              marginBottom: '30px',
              fontSize: '0.95rem'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Found {filteredAttractions.length} {filteredAttractions.length === 1 ? 'attraction' : 'attractions'}
          </motion.p>

          {/* Attractions Grid */}
          {filteredAttractions.length > 0 ? (
            <motion.div
              className="attractions-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {filteredAttractions.map((attraction) => (
                <motion.div key={attraction.id} variants={itemVariants}>
                  <AttractionCard
                    attraction={attraction}
                    onClick={(attr) => {
                      console.log('Clicked:', attr);
                      // Add modal or detail page functionality here
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: 'var(--text-light)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>No attractions found</p>
              <p>Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

