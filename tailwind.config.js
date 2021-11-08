const plugin = require('tailwindcss/plugin') 

module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gcinavy: "#000818",
        socblue: 'rgb(50,164,221,0.5)'
      }
    },
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

//sfdsdfgfds