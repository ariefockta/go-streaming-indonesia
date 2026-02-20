/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#D92323",
        "primary-dark": "#B01818",
        "primary-light": "#FFEBEE",
        "accent": "#F0F0F0",
        "background-light": "#FAFAFA",
        "background-dark": "#1A1A1A",
      },
      fontFamily: {
        "display": ["Spline Sans", "sans-serif"],
        "sans": ["Spline Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
