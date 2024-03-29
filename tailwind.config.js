/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ECCFD1",
        secondary: "#CC5C70",
        tertiary: "#C97E89",
        "black-100": "#4C3629",
        "black-200": "#251916",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #4C3629",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};