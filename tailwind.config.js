/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      body: ["DM Sans", "sans-serif"],
    },
    screens: {
      sm: { max: "414px" },
      md: { max: "820px" },
      lg: { max: "1023px" },
    },
    extend: {},
    backgroundColor: {
      "main-100": "#0b5c99",
      "black": "#000000",
      "gray": "#333333",

    },
    colors: {
      "gray": "#333333",
      "while": "#ffffff",
      "blue": "#0b5c99",
      "color-text": "#3A3A3A",
      "main": "#0b5c99",



    },
    backgroundImage: {
      'banner1': "url('/src/assets/banner1.jpg')",
      'banner2': "url('/src/assets/banner2.jpg')",
      'banner3': "url('/src/assets/banner3.jpg')",
      'bg-img': "url('/src/assets/bg-hexagon.jpg')",
      'bg-img2': "url('/src/assets/img-bg2.png')",

    }
  },
  plugins: [],
};
