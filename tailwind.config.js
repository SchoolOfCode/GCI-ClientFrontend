const plugin = require('tailwindcss/plugin') 

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.5xl") },
        h2: { fontSize: theme("fontSize.3xl") },
        h3: { fontSize: theme("fontSize.lg") },
      
      });
    }),
  ],
};
