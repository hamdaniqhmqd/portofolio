/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#14b8a6',
        'secondary': '#94a3b8',
        'dark': '#020617',
        'light': '#f1f5f9',
      },
      screens: {
        '2xl': '1320px',  
      },  
    },
  },
  plugins: [],
}

