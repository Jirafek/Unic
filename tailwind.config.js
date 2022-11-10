/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ecd23b',
      },
      container: {
        center: true,
        padding: '1.25rem',
      },
      screens: {
        '3xl': '2500px',
        'vsm': '400px',
        'mid': '1920px',
        'cent': '1800px'
      },
      keyframes: {
        preload: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      );
    },
  ],
};
