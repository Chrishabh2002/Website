import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaRocket } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 mt-auto overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9Im5vbmUiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyMDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjxyZWN0IHg9IjIwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyMDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] animate-grid-pulse"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col space-y-6">
            <div className="group relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:animate-text-glitch">
                Bharat Inspire
              </h2>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 animate-line-expand"></div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming visions into digital reality through innovative solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                <FaRocket className="inline-block mr-2 animate-pulse" />
                Launch Project
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Case Studies', 'Careers'].map((item, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-300 transition-all duration-300"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-800/30 rounded-lg">
                  <span className="text-cyan-400">📌</span>
                </div>
                <span className="text-gray-400">Cyber Tower, New Delhi</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-800/30 rounded-lg">
                  <span className="text-cyan-400">📞</span>
                </div>
                <span className="text-gray-400">+91 99999 55555</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Newsletter
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-800/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: <FaFacebook />, name: 'Facebook' },
            { icon: <FaTwitter />, name: 'Twitter' },
            { icon: <FaLinkedin />, name: 'LinkedIn' },
            { icon: <FaInstagram />, name: 'Instagram' }
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              className="group p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-blue-800/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-cyan-400 group-hover:text-blue-400 transition-colors duration-300">
                  {social.icon}
                </span>
                <span className="text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {social.name}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-800/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gray-900 text-cyan-400 rounded-full text-sm font-mono">
              // Stay Connected
            </span>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <p className="text-gray-400 text-sm font-mono">
            © {new Date().getFullYear()} Bharat Inspire. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-6 py-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border border-cyan-400/20 rounded-full hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex items-center space-x-2"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Back to Top
            </span>
            <span className="text-cyan-400 animate-bounce">🚀</span>
          </button>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl animate-orb-pulse"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-500/20 rounded-full blur-3xl animate-orb-pulse delay-2000"></div>
    </footer>
  );
};

export default Footer;