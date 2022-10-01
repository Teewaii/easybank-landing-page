/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700
    },
    colors: {
      'DarkBlue': '#2d314d',
      'LimeGreen': '#31d35c',
      'BrightCyan': '#2bb7da',
      'GrayishBlue': '#9698a6',
      'body-grey': '#f3f4f6',
      'VeryLightGray': '#f3f4f6',
      'White': '#ffffff',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',


      },
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
