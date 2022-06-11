module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("daisyui")],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
};
