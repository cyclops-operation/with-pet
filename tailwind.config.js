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
        4.5: '1.125rem'
      },
      dropShadow: {
        default: '0px 1px 2px rgba(16, 24, 40, 0.05)'
      }
    }
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-of-type)')
    })
  ]
}
