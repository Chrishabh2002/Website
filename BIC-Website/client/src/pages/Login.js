import React, { useState, useEffect } from 'react';
import { loginUser } from '../api/api';
import { EnvelopeIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const AuthForm = ({ isLogin = true }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      const user = { email, password };
      const response = await loginUser(user);
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        // Redirect logic here
      } else {
        setError('Invalid credentials or server error');
      }
    } catch (err) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-4 relative overflow-hidden" style={{ paddingTop: '6rem' }}>
      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-blue-400/30 rounded-full"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [-100, 100],
              x: Math.random() > 0.5 ? [-20, 20] : [20, -20]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full max-w-md space-y-8 bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10" >
        {/* Animated Header */}
        <div className="text-center space-y-2">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FingerPrintIcon className="h-12 w-12 text-cyan-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {isLogin ? 'Secure Access' : 'Create Account'}
            </h1>
          </motion.div>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400"
          >
            {isLogin ? 'Enter your credentials to continue' : 'Start your journey with us'}
          </motion.p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div 
                className={`group relative transition-all duration-300 ${
                  activeInput === 'email' ? 'opacity-100' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <EnvelopeIcon className={`h-6 w-6 absolute left-3 top-1/2 -translate-y-1/2 z-10 transition-colors duration-300 ${
                  activeInput === 'email' ? 'text-cyan-400' : 'text-gray-400'
                }`} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setActiveInput('email')}
                  onBlur={() => setActiveInput(null)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-700/50 rounded-xl border-2 border-blue-800/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 placeholder-gray-400 text-white transition-all duration-300"
                  required
                />
              </div>
            </motion.div>

            {/* Password Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div 
                className={`group relative transition-all duration-300 ${
                  activeInput === 'password' ? 'opacity-100' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <LockClosedIcon className={`h-6 w-6 absolute left-3 top-1/2 -translate-y-1/2 z-10 transition-colors duration-300 ${
                  activeInput === 'password' ? 'text-cyan-400' : 'text-gray-400'
                }`} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setActiveInput('password')}
                  onBlur={() => setActiveInput(null)}
                  className="w-full pl-12 pr-12 py-3 bg-gray-700/50 rounded-xl border-2 border-blue-800/30 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 placeholder-gray-400 text-white transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-gray-700/50 hover:bg-gray-700/70 transition-colors duration-300"
                >
                  <span className={`block transition-all duration-300 ${showPassword ? 'text-cyan-400' : 'text-gray-400'}`}>
                    {showPassword ? '👁️' : '👁️🗨️'}
                  </span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm flex items-center space-x-2 px-4 py-3 bg-red-900/20 rounded-lg border border-red-400/30"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-medium hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isLoading ? (
              <ArrowPathIcon className="w-5 h-5 mx-auto animate-spin" />
            ) : (
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <UserCircleIcon className="w-5 h-5" />
                <span>{isLogin ? 'Authenticate' : 'Create Account'}</span>
              </span>
            )}
          </motion.button>

          {/* Additional Options */}
          <div className="flex items-center justify-between text-sm">
            <a href="/forgot-password" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              Forgot password?
            </a>
            <a href={isLogin ? '/signup' : '/login'} className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
              {isLogin ? 'Create account' : 'Existing user? Login'}
            </a>
          </div>

          {/* Social Login Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-800/30" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-gray-800/50 text-gray-400 text-sm rounded-full">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3">
            {['Google', 'GitHub', 'Microsoft'].map((provider) => (
              <motion.button
                key={provider}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="flex items-center justify-center p-3 bg-gray-700/50 hover:bg-gray-700/70 rounded-xl transition-all duration-300 group"
              >
                <img 
                  src={`/${provider.toLowerCase()}-icon.svg`} 
                  alt={provider} 
                  className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                />
              </motion.button>
            ))}
          </div>
        </form>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-center text-sm text-gray-400 flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5 text-cyan-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>256-bit SSL Encryption</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthForm;