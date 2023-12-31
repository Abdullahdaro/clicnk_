/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        secondary: "#00f6ff",
        main: "rgba(216, 167, 104, 0.91)",
        bg: "rgba(221, 172, 104, 0.15);",
        bg1:'rgba(60, 60, 59, 0.02)',
        bgno: 'rgba(221, 172, 104, 0.10)'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "350px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};