module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/forms")],
};
