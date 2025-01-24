// src/pages/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { staggerContainer, fadeIn, zoomIn, textVariant, planetVariants, slideIn } from '../utils/motion';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden relative py-20">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <svg className="absolute inset-0 w-full h-full opacity-50">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </motion.div>

      {/* Parallax Layer */}
      <motion.div
        style={{ scale: scaleProgress, opacity: opacityProgress }}
        className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(21,94,117,0.1)_0%,_transparent_70%)]"
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4" style={{ paddingTop: '4rem' }}>
        {/* Hero Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="text-center mb-12 relative"
        >
          <motion.div
            variants={planetVariants('left')}
            className="absolute -top-32 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-full blur-3xl opacity-50"
          />

          <motion.h1
            variants={textVariant(0.5)}
            className="text-5xl md:text-7xl font-bold mb-6 relative"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Bharat Inspire Consultancy
            </span>
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-1 bg-cyan-500/50"
              style={{ width: '150%', scaleX: scrollYProgress }}
            />
          </motion.h1>

          <motion.p
            variants={textVariant(0.7)}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto relative"
          >
            <span className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 px-4 py-2 rounded-lg backdrop-blur-sm">
              Your Comprehensive Partner in Business Evolution
            </span>
          </motion.p>
        </motion.div>

        {/* Value Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-4 gap-6 mb-16 relative"
        >
          {['Setup', 'Growth', 'Protection', 'Expansion'].map((stage, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn('up', 'spring', idx * 0.2, 1)}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: -2 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-blue-900/50 hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0c4a6e_0%,#0891b2_50%,#0c4a6e_100%)] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-cyan-400 text-2xl mb-3">0{idx + 1}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stage} Solutions</h3>
                <p className="text-gray-400">Comprehensive strategies for business {stage.toLowerCase()}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="mb-24 relative"
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-900/50 to-cyan-900/50 rounded-full" />

          {[
            { year: '2008', title: 'Company Founded', desc: 'Started our journey in business consultancy' },
            { year: '2012', title: 'First Expansion', desc: 'Opened international branches' },
            { year: '2018', title: 'Tech Revolution', desc: 'Implemented AI-driven solutions' },
            { year: '2024', title: 'Global Reach', desc: 'Serving 50+ countries worldwide' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn(idx % 2 === 0 ? 'left' : 'right', 'spring', 0.5, 1)}
              className={`relative mb-16 w-full ${idx % 2 === 0 ? 'pr-40' : 'pl-40'}`}
            >
              <div className={`absolute top-4 ${idx % 2 === 0 ? '-left-2' : '-right-2'}`}>
                <div className="w-4 h-4 bg-cyan-500 rounded-full ring-4 ring-cyan-900/50" />
              </div>
              <div className={`p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-blue-900/50 ${idx % 2 === 0 ? 'ml-auto' : 'mr-auto'}`} style={{ width: '80%' }}>
                <div className="text-cyan-400 text-lg mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expert Team Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="mb-16"
        >
          <motion.div variants={textVariant(0.5)} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Expert Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Meet our team of certified professionals with decades of combined experience</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                variants={fadeIn('up', 'spring', i * 0.2, 1)}
                className="relative group h-96 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 transition-all duration-500 group-hover:opacity-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-60% to-transparent" />
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">Dr. John Smith</h3>
                  <p className="text-cyan-400 mb-4">Business Strategist</p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <p className="text-gray-300">15+ years experience in corporate strategy</p>
                    <div className="flex gap-2">
                      {['MBA', 'PMP', 'CFA'].map((badge, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          className="mb-24 relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-lg border border-blue-900/50 p-12 text-center"
        >
          <div className="absolute inset-0 animate-holo-hover opacity-30" />
          <motion.div
            variants={textVariant(0.5)}
            className="relative z-10"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Join hundreds of successful companies who trusted our expertise</p>
            <div className="flex justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Start Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyan-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-cyan-500 rounded-full pointer-events-none z-50"
        animate={{
          scale: [1, 0.8, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Floating Chat Bot */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-cyan-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            <span className="text-2xl">🤖</span>
          </motion.button>

          {isChatOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute bottom-20 right-0 w-80 h-96 bg-gray-900/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/20 flex flex-col"
            >
              <div className="p-4 border-b border-cyan-500/20 flex justify-between items-center">
                <h3 className="text-cyan-400 font-bold">BIC Assistant</h3>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-400 hover:text-cyan-400 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center">🤖</div>
                  <div className="bg-gray-800/50 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Hello! How can I help you today?</p>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-cyan-500/20">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-800/50 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button className="px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-lg transition-colors">
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;