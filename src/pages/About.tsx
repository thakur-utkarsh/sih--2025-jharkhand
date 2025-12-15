import { motion } from 'framer-motion';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Promoting sustainable eco-tourism and cultural preservation in Jharkhand
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center'
            }}
          >
            <motion.h2
              variants={itemVariants}
              style={{
                fontSize: '2.5rem',
                marginBottom: '20px',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: '1.2rem',
                color: 'var(--text-light)',
                lineHeight: '1.8',
                marginBottom: '40px'
              }}
            >
              To develop a smart digital platform that promotes eco-tourism and cultural heritage in Jharkhand
              while supporting local communities, preserving tribal traditions, and protecting natural ecosystems.
            </motion.p>
          </motion.div>

          {/* Values */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginTop: '60px'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { title: '🌱 Sustainability', desc: 'Minimize environmental impact while maximizing positive change' },
              { title: '👥 Community First', desc: 'Support local economies and empower tribal communities' },
              { title: '🏛️ Heritage Preservation', desc: 'Protect and celebrate Jharkhand\'s rich cultural legacy' },
              { title: '🤝 Authenticity', desc: 'Genuine experiences that connect travelers with local cultures' }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow)',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ marginBottom: '15px', color: 'var(--dark)', fontSize: '1.3rem' }}>
                  {value.title}
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ background: '#f3f4f6' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '15px',
              color: 'var(--dark)'
            }}>
              Platform Features
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
              Smart tools to enhance your eco-tourism experience
            </p>
          </motion.div>

          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: '🗺️', title: 'Interactive Maps', desc: 'Explore attractions with detailed locations and directions' },
              { icon: '📅', title: 'Smart Itineraries', desc: 'AI-curated travel plans based on your interests' },
              { icon: '🎫', title: 'Easy Bookings', desc: 'Seamless reservation system for accommodations and tours' },
              { icon: '👤', title: 'Local Guides', desc: 'Connect with experienced local guides for authentic experiences' },
              { icon: '💬', title: 'Community Reviews', desc: 'Real feedback from travelers and locals' },
              { icon: '🌍', title: 'Sustainability Tracking', desc: 'Monitor and measure your eco-friendly impact' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow)',
                  transition: 'var(--transition)'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{feature.icon}</div>
                <h3 style={{ marginBottom: '10px', color: 'var(--dark)' }}>{feature.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '60px' }}
          >
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '15px',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Built for SIH 2025
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
              A Smart India Hackathon project dedicated to sustainable tourism
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

