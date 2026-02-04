const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        teal: colors.teal,
        blue: colors.blue,
        gray: colors.gray,
        white: colors.white,
        accent: {
          50: '#e6f8f9',
          100: '#b3ecef',
          200: '#80e0e6',
          300: '#4dd4dc',
          400: '#26c8d3',
          500: '#00bcc9',
          600: '#00aab6',
          700: '#00979f',
          800: '#008589',
          900: '#006266',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        sakamoto: ['Sakamoto', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'Arial', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        ubuntu: ['var(--font-ubuntu)', 'sans-serif'],
        'google-sans': ['"Google Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'first': "moveVertical 30s ease infinite",
        'second': "moveInCircle 20s reverse infinite",
        'third': "moveInCircle 40s linear infinite",
        'fourth': "moveHorizontal 40s ease infinite",
        'fifth': "moveInCircle 20s ease infinite",
        'pulse-delay-1': 'pulse 1.4s ease-in-out infinite',
        'pulse-delay-2': 'pulse 1.4s ease-in-out 0.2s infinite',
        'pulse-delay-3': 'pulse 1.4s ease-in-out 0.4s infinite',
        'loading-progress': 'loadingProgress 1.8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        loadingProgress: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveHorizontal: {
          "0%": { transform: "translateX(-50%) translateY(-10%)" },
          "50%": { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        moveInCircle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}