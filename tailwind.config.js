const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // See https://tailwindcss.com/docs/customizing-colors
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        amber: colors.amber,
        indigo: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
