/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-bg': '#0d0d1a',
        'app-card': '#1a1a2e',
        'app-border': '#2a2a4a',
        'track1': '#E8A87C',
        'track2': '#6C8EBF',
        'track3': '#7CB87C',
      },
      animation: {
        'pulse-success': 'pulse-success 0.6s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        'pulse-success': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(124,184,124,0.7)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 0 12px rgba(124,184,124,0)' },
          '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(124,184,124,0)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
