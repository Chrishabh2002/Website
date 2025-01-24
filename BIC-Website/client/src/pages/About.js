import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn, zoomIn } from '../utils/motion';


const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '10rem' }}
    >
      {/* Hero Section */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
          About Bharat Inspire Consultancy
        </h1>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Empowering Businesses to Thrive in India's Dynamic Market
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            "Guiding businesses through intricate landscapes to unlock their full potential"
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <span className="text-2xl text-cyan-400">💰</span>
              </div>
              <div>
                <h3 className="text-xl text-white">Funding Solutions</h3>
                <p className="text-gray-400">Tailored financial strategies</p>
              </div>
            </div>
            {/* Add other mission points similarly */}
          </div>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30"
        >
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Vision</h2>
          <p className="text-gray-300 mb-6">
            "To be the trusted partner for businesses at every stage"
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 rounded-xl"
          >
            <h3 className="text-xl text-white mb-2">2025 Goal</h3>
            <p className="text-gray-300">Empower 10,000+ Indian Businesses</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8 mb-24"
      >
        {[
          { value: '10+', label: 'Years Experience' },
          { value: '5K+', label: 'Businesses Served' },
          { value: '₹500Cr+', label: 'Funds Raised' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 'spring', index * 0.2, 1)}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 text-center border border-cyan-500/30"
          >
            <div className="text-5xl font-bold text-cyan-400 mb-4">
              {stat.value}
            </div>
            <div className="text-xl text-gray-300">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        variants={staggerContainer}
        className="mb-24"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Why Choose BIC?
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Cross-Industry Expertise', icon: '🌐' },
            { title: 'Bespoke Solutions', icon: '🎯' },
            { title: 'End-to-End Partnership', icon: '🤝' },
            { title: 'Tech-Driven Approach', icon: '💻' },
            { title: 'Client-Centric Values', icon: '❤️' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideIn('left', 'tween', 0.2, 1) : slideIn('right', 'tween', 0.2, 1)}
              whileHover={{ y: -10 }}
              className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={zoomIn(0.5, 1)}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-8">
          Ready to Transform Your Business?
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default About;