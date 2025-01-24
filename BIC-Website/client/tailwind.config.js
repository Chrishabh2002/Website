/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom backdrop blur utilities
      backdropBlur: {
        xl: '24px',
      },
      // Custom animations
      animation: {
        'text-glitch': 'textGlitch 1.5s infinite',
        'scanline': 'scanline 6s linear infinite',
        'holo-beam': 'holoBeam 8s linear infinite',
        'grid-pulse': 'gridPulse 3s ease-in-out infinite',
        'particle-float': 'particleFloat 4s ease-in-out infinite',
        'orb-pulse': 'orbPulse 6s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 3s ease infinite',
      },
      // Keyframes for animations
      keyframes: {
        gradientPulse: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        textGlitch: {
          '0%': { clipPath: 'polygon(0 2%, 100% 2%, 100% 5%, 0 5%)' },
          '10%': { clipPath: 'polygon(0 15%, 100% 15%, 100% 15%, 0 15%)' },
          '20%': { transform: 'translate(2px, 0)' },
          '30%': { transform: 'translate(-1px, 0)' },
          '40%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 40%, 0 40%)' },
          '50%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        holoBeam: {
          '0%': { opacity: '0', transform: 'rotate(45deg) translateY(-100%)' },
          '50%': { opacity: '0.3' },
          '100%': { opacity: '0', transform: 'rotate(45deg) translateY(300%)' },
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-100px) scale(0.5)' },
        },
        orbPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.2)' },
        },
      },
      // Custom background images
      backgroundImage: {
        'grid-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9Im5vbmUiLz48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyMDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjxyZWN0IHg9IjIwIiB3aWR0aD0iMiIgaGVpZ2h0PSIyMDAiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')",
      },
    },
  },
  plugins: [],
};