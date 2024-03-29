/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  variants: {
    extend: {
      display: ["hover", "focus", "group-hover"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#00353E",
        "primary-dark": "#002329",
        secondary: "#005A69",
        tertiary: "#00D2F6",
        textColor: "#eeeeee",
      },
      height: {
        0.5: "0.125rem",
        118.75: "29.688rem",
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
