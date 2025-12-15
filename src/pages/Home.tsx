import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Zap, Users, Globe, Mountain, Compass } from 'lucide-react';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const features = [
    {
      icon: Leaf,
      title: 'Eco-Tourism',
      description: 'Explore pristine natural attractions while preserving the environment and biodiversity of Jharkhand.'
    },
    {
      icon: Users,
      title: 'Cultural Heritage',
      description: 'Experience authentic tribal cultures, traditions, and immerse yourself in local communities.'
    },
    {
      icon: Mountain,
      title: 'Adventure Activities',
      description: 'Thrilling trekking, rock climbing, and adventure sports in scenic landscapes.'
    },
    {
      icon: Globe,
      title: 'Sustainable Travel',
      description: 'Support local economies while maintaining ecological balance and cultural authenticity.'
    },
    {
      icon: Compass,
      title: 'Expert Guides',
      description: 'Local experts provide insights into history, culture, and natural wonders.'
    },
    {
      icon: Zap,
      title: 'Smart Platform',
      description: 'Digital platform for bookings, itineraries, and real-time travel information.'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Jharkhand
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the untouched beauty of nature, vibrant tribal culture, and historical landmarks.
            Sustainable eco-tourism for conscious travelers.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/attractions" className="btn btn-primary">
              Explore Attractions
            </Link>
            <button className="btn btn-secondary">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Why Choose EcoTourism Jharkhand?</h2>
            <p>Discover sustainable travel experiences that benefit you and the community</p>
          </div>

          <motion.div
            className="attractions-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="feature-card"
                  whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
                  style={{
                    background: 'white',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: 'var(--shadow)',
                    textAlign: 'center',
                    transition: 'var(--transition)'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{ marginBottom: '20px' }}
                  >
                    <Icon size={48} color="var(--primary)" strokeWidth={1.5} />
                  </motion.div>
                  <h3 style={{ marginBottom: '10px', color: 'var(--dark)' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #10b981 0%, #8b5cf6 100%)',
        color: 'white'
      }}>
        <div className="container">
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
              textAlign: 'center'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: '50+', label: 'Tourist Attractions' },
              { number: '15', label: 'Districts Covered' },
              { number: '10,000+', label: 'Happy Travelers' },
              { number: '100%', label: 'Sustainable' }
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    marginBottom: '10px'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'white', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: 'var(--dark)',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Ready to Explore?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              marginBottom: '30px',
              maxWidth: '600px',
              margin: '0 auto 30px'
            }}>
              Start your sustainable adventure in Jharkhand today. Discover hidden gems, connect with local communities, and create unforgettable memories.
            </p>
            <Link to="/attractions" className="btn btn-primary">
              Browse All Attractions
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

