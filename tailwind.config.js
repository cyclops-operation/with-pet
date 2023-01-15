const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      padding: {
        2.5: '0.625rem',
        4.5: '1.125rem'
      },
      dropShadow: {
        default: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '50%': { opacity: 0 },
          '100%': { transform: 1 }
        },
        'slide-bounce': {
          '0%': { transform: 'translateY(10vh)', opacity: 0 },
          '50%': { opacity: 1 },
          '95%': { transform: 'translateY(-0.1vh)' },
          '100%': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1.5s ease-in-out',
        'slide-bounce': 'slide-bounce 1.5s ease-in-out'
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-of-type)')
    })
  ]
}
