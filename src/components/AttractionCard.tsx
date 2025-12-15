import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Trophy } from 'lucide-react';
import type { Attraction } from '../data/attractions';

interface AttractionCardProps {
  attraction: Attraction;
  onClick?: (attraction: Attraction) => void;
}

export default function AttractionCard({ attraction, onClick }: AttractionCardProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 }
  };

  const getCategoryClass = (category: string) => {
    return `category-badge category-${category}`;
  };

  return (
    <motion.div
      className="attraction-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10 }}
      onClick={() => onClick?.(attraction)}
    >
      <motion.img
        src={attraction.image}
        alt={attraction.name}
        className="attraction-card-image"
        variants={imageVariants}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.3 }}
      />

      <div className="attraction-card-content">
        <span className={getCategoryClass(attraction.category)}>
          {attraction.category}
        </span>

        <h3>{attraction.name}</h3>

        <div className="attraction-card-meta">
          <span>📍 {attraction.district}</span>
          <span>⭐ {attraction.rating}</span>
        </div>

        <p className="attraction-card-description">{attraction.description}</p>

        <div className="attraction-card-rating">
          <span className="stars">★★★★★</span>
          <span className="rating-text">({attraction.reviews} reviews)</span>
        </div>

        <div className="highlights">
          {attraction.highlights.slice(0, 3).map((highlight, index) => (
            <span key={index} className="highlight-tag">
              {highlight}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '16px' }}>
          <span style={{ color: 'var(--text-light)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={16} />
            {attraction.bestTime}
          </span>
          {attraction.difficulty && (
            <span style={{
              color: 'var(--accent)',
              fontSize: '0.85rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <Trophy size={14} />
              {attraction.difficulty}
            </span>
          )}
        </div>

        <a href="#" className="learn-more-link">
          Learn More
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}

