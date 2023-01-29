/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00353E",
        "primary-dark": "#002329",
        secondary: "#005A69",
        tertiary: "#00D2F6",
      },
      height: {
        0.5: "0.125rem",
      },
    },
  },
  plugins: [],
};
