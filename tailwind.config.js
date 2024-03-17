/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "inner-custom": "inset 0 1px 2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
