/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Abel', 'sans-serif'],
        allFont: ["Montserrat", 'sans-serif'],
        subtitleFont: ["Island Moments", 'cursive'],
        a: ['Great Vibes', 'cursive']
      },
      colors: {
        primary: "#FFC300",
        secondary: "#FD9B26",
        heading: "#0b2727",
        text: "#6e7074"
      },
      scale:{
        gallery:'1.05'
      }

    },
  },
  plugins: [],
}

