module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/3": "33%",
      "2/5": "40%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    maxHeight: {
      0: "0",
      "1/4": "25%",
      "1/3": "33%",
      "2/5": "40%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      colors: {
        coolDarkGray: "#4E4C67",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
