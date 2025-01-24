// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  HomeIcon,
  UserIcon,
  ArrowRightOnRectangleIcon as LogoutIcon,
  SunIcon,
  MoonIcon,
  SparklesIcon,
  UserPlusIcon,
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrollPosition > 50 ? 'backdrop-blur-xl bg-black/80' : 'backdrop-blur-md bg-black/50'
    } ${isDarkMode ? 'dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center" >
          {/* Logo */}
          <Link
            to="/"
            className="group relative z-10 flex items-center space-x-2"
          >
            <SparklesIcon className="h-8 w-8 text-blue-400 animate-pulse" />
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative">
              BIC
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<HomeIcon className="h-6 w-6" />}>
              Home
            </NavLink>
            <NavLink to="/about" icon={<UserGroupIcon className="h-6 w-6" />}>
              About Us
            </NavLink>
            <NavLink to="/services" icon={<UserIcon className="h-6 w-6" />}>
              Services
            </NavLink>
            <NavLink to="/contact" icon={<ChatBubbleBottomCenterTextIcon className="h-6 w-6" />}>
              Contact Us
            </NavLink>
            {user ? (
              <button
                onClick={logout}
                className="flex items-center space-x-2 group text-gray-300 hover:text-white transition-all duration-300"
              >
                <div className="relative">
                  <LogoutIcon className="h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="absolute inset-0 border-2 border-blue-400 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300"></span>
                </div>
                <span className="font-medium">Logout</span>
              </button>
            ) : (
              <>
                <NavLink to="/login" icon={<UserIcon className="h-6 w-6" />}>
                  Login
                </NavLink>
                <HighlightedNavLink 
                  to="/signup" 
                  icon={<UserPlusIcon className="h-6 w-6" />}
                >
                  Sign Up
                </HighlightedNavLink>
              </>
            )}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative w-12 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1 transition-all duration-500 hover:scale-110"
            >
              <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-white transition-all duration-500 ${
                isDarkMode ? 'left-5 rotate-180' : 'left-1'
              }`}>
                {isDarkMode ? (
                  <MoonIcon className="w-full h-full text-blue-600" />
                ) : (
                  <SunIcon className="w-full h-full text-amber-400" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-blue-900/30 transition-all duration-300"
          >
            <div className={`w-8 h-1 bg-blue-400 mb-1 rounded-full transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></div>
            <div className={`w-8 h-1 bg-blue-400 mb-1 rounded-full transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-8 h-1 bg-blue-400 rounded-full transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-8 space-y-4 bg-black/80 backdrop-blur-xl">
          <MobileNavLink to="/" icon={<HomeIcon className="h-6 w-6" />}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/about" icon={<UserGroupIcon className="h-6 w-6" />}>
            About Us
          </MobileNavLink>
          <MobileNavLink to="/services" icon={<UserIcon className="h-6 w-6" />}>
            Services
          </MobileNavLink>
          <MobileNavLink to="/contact" icon={<ChatBubbleBottomCenterTextIcon className="h-6 w-6" />}>
            Contact Us
          </MobileNavLink>
          {user ? (
            <button
              onClick={logout}
              className="w-full flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-blue-900/20 rounded-lg transition-all duration-300"
            >
              <LogoutIcon className="h-6 w-6" />
              <span>Logout</span>
            </button>
          ) : (
            <>
              <MobileNavLink to="/login" icon={<UserIcon className="h-6 w-6" />}>
                Login
              </MobileNavLink>
              <MobileHighlightedNavLink 
                to="/signup" 
                icon={<UserPlusIcon className="h-6 w-6" />}
              >
                Sign Up
              </MobileHighlightedNavLink>
            </>
          )}
          
          <div className="pt-4 border-t border-blue-900/50">
            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gradient-to-r from-blue-500/30 to-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
            >
              {isDarkMode ? (
                <>
                  <SunIcon className="h-6 w-6 text-amber-300" />
                  <span className="text-cyan-200">Light Mode</span>
                </>
              ) : (
                <>
                  <MoonIcon className="h-6 w-6 text-blue-300" />
                  <span className="text-blue-200">Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable Components
const NavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="group flex items-center space-x-2 relative py-2 px-4 rounded-full hover:bg-blue-900/20 transition-all duration-300"
  >
    <div className="relative">
      {icon}
      <span className="absolute -inset-1 bg-blue-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </div>
    <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
      {children}
    </span>
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-bottom-left"></span>
  </Link>
);

const HighlightedNavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="group flex items-center space-x-2 relative py-2 px-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
  >
    <div className="relative">
      {icon}
      <span className="absolute -inset-1 bg-white/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </div>
    <span className="text-white font-medium">{children}</span>
  </Link>
);

const MobileNavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-blue-900/20 rounded-lg transition-all duration-300"
  >
    <div className="relative">
      {icon}
      <span className="absolute -inset-1 bg-blue-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </div>
    <span>{children}</span>
  </Link>
);

const MobileHighlightedNavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white transition-all duration-300"
  >
    <div className="relative">
      {icon}
      <span className="absolute -inset-1 bg-white/10 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </div>
    <span>{children}</span>
  </Link>
);

export default Navbar;