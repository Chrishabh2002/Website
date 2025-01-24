import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn, zoomIn } from '../utils/motion'; // Import your motion utils

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            newErrors.email = 'Valid email is required';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (touched[name]) {
            validateForm();
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        validateForm();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        try {
            // Add your submission logic here
            console.log('Form submitted:', formData);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-16 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto" style={{ paddingTop: '4rem' }}>
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-300 text-lg">
                        Have questions? We're here to help!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.form
                        variants={staggerContainer}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <motion.div
                            variants={fadeIn('right', 'tween', 0.2, 1)}
                            className="relative"
                        >
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full bg-gray-800/50 backdrop-blur-sm rounded-lg border ${
                                    errors.name ? 'border-red-500' : 'border-cyan-500/30'
                                } focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-gray-100 px-4 py-3 transition-all duration-300`}
                                placeholder="John Doe"
                            />
                            {errors.name && touched.name && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm mt-1"
                                >
                                    {errors.name}
                                </motion.p>
                            )}
                        </motion.div>

                        <motion.div
                            variants={fadeIn('right', 'tween', 0.4, 1)}
                            className="relative"
                        >
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`w-full bg-gray-800/50 backdrop-blur-sm rounded-lg border ${
                                    errors.email ? 'border-red-500' : 'border-cyan-500/30'
                                } focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-gray-100 px-4 py-3 transition-all duration-300`}
                                placeholder="john@example.com"
                            />
                            {errors.email && touched.email && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm mt-1"
                                >
                                    {errors.email}
                                </motion.p>
                            )}
                        </motion.div>

                        <motion.div
                            variants={fadeIn('right', 'tween', 0.6, 1)}
                            className="relative"
                        >
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                rows="5"
                                className={`w-full bg-gray-800/50 backdrop-blur-sm rounded-lg border ${
                                    errors.message ? 'border-red-500' : 'border-cyan-500/30'
                                } focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-gray-100 px-4 py-3 transition-all duration-300`}
                                placeholder="Your message..."
                            />
                            {errors.message && touched.message && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm mt-1"
                                >
                                    {errors.message}
                                </motion.p>
                            )}
                        </motion.div>

                        <motion.div
                            variants={fadeIn('right', 'tween', 0.8, 1)}
                            className="pt-4"
                        >
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 ${
                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </motion.button>
                        </motion.div>
                    </motion.form>

                    <motion.div
                        variants={slideIn('left', 'tween', 0.5, 1)}
                        className="space-y-8"
                    >
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
                            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">Phone</p>
                                        <p className="text-cyan-400 font-medium">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">Email</p>
                                        <p className="text-cyan-400 font-medium">contact@bic.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-cyan-500/10 rounded-lg">
                                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">Address</p>
                                        <p className="text-cyan-400 font-medium">123 Business Street, New Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            variants={zoomIn(0.5, 1)}
                            className="h-96 bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30"
                        >
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566309143643!2d77.23191351508222!3d28.613900982424255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9dc4d0d%3A0x71dd62b6126e192!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1625047702918!5m2!1sen!2sin"
                                className="w-full h-full"
                                allowFullScreen=""
                                loading="lazy"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUs;