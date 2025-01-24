import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icon Components (keep the same as before)
const GoogleIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LoadingSpinner = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
  </svg>
);

const AlertIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 6h2v8h-2v-8zm1 12.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
  </svg>
);

const SignUp = () => {
  // State management
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Password strength calculator
  const calculateStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[a-z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;
    return Math.min(strength, 4);
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (passwordStrength < 3) newErrors.password = 'Password too weak';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Password strength effect
  useEffect(() => {
    setPasswordStrength(calculateStrength(formData.password));
  }, [formData.password]);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      // Reset form after success
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social login handlers
  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement OAuth flow here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden" style={{ paddingTop: '4rem' }}>
      {/* Success/Error Messages */}
      <AnimatePresence>
        {submitStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-4 mx-auto p-4 rounded-lg flex items-center space-x-2 ${
              submitStatus === 'success'
                ? 'bg-green-500/20 border border-green-400/30'
                : 'bg-red-500/20 border border-red-400/30'
            }`}
          >
            {submitStatus === 'success' ? (
              <>
                <CheckIcon className="w-5 h-5 text-green-400" />
                <span className="text-green-300">Signup successful!</span>
              </>
            ) : (
              <>
                <AlertIcon className="w-5 h-5 text-red-400" />
                <span className="text-red-300">Signup failed. Please try again.</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative z-10 bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md border border-blue-400/20 shadow-2xl shadow-blue-900/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Create Account
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-blue-400/20 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 placeholder-transparent peer"
              placeholder="Username"
              required
            />
            <label className="absolute left-4 -top-3 px-1 bg-gray-900/50 text-blue-300 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-300">
              Username
            </label>
          </motion.div>

          {/* Email Field */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-blue-400/20 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 placeholder-transparent peer"
              placeholder="Email"
              required
            />
            <label className="absolute left-4 -top-3 px-1 bg-gray-900/50 text-blue-300 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-300">
              Email
            </label>
          </motion.div>

          {/* Password Field */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-blue-400/20 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 placeholder-transparent peer"
              placeholder="Password"
              required
            />
            <label className="absolute left-4 -top-3 px-1 bg-gray-900/50 text-blue-300 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-300">
              Password
            </label>
          </motion.div>

          {/* Password Strength Indicator */}
          <div className="mt-2">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    i < passwordStrength ? 'bg-blue-400' : 'bg-gray-700'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-400">
              {['Weak', 'Fair', 'Good', 'Strong'][passwordStrength - 1] || 'Very Weak'}
            </span>
          </div>

          {/* Form Validation Messages */}
          <AnimatePresence>
            {Object.entries(errors).map(
              ([field, message]) =>
                message && (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {message}
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* Social Login Buttons */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900/50 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <motion.button
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="w-full flex items-center justify-center p-3 bg-gray-800/50 hover:bg-gray-700/30 rounded-lg transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GoogleIcon className="w-5 h-5 text-red-400 group-hover:text-red-300 transition-colors" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => handleSocialLogin('github')}
                className="w-full flex items-center justify-center p-3 bg-gray-800/50 hover:bg-gray-700/30 rounded-lg transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GitHubIcon className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </motion.button>
            </div>
          </div>

          {/* Submit Button with Loading State */}
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white relative overflow-hidden group mt-6"
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <LoadingSpinner className="w-5 h-5 animate-spin" />
              </div>
            ) : (
              <>
                <span className="relative z-10">Sign Up Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;