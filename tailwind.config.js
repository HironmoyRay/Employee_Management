/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      // transparent: "transparent",
      // current: "currentColor",
      PRIMARY: {
        light: "#3B82F6",
        DEFAULT: "#1D4ED8",
        dark: "#1E3A8A",
      },
      DANGER: {
        light: "#EF4444",
        DEFAULT: "#B91C1C",
        dark: "#7F1D1D",
      },
      ACCENT:{
        light: "#8B5CF6",
        DEFAULT: "#6D28D9",
        dark: "#4C1D95",
      },
      SUCCESS:{
        light: "#10B981",
        DEFAULT: "#047857",
        dark: "#064E3B",
      },
      SECONDARY: {
        darkest: "#111827",
        dark: "#374151",
        DEFAULT: "#6B7280",
        light: "#D1D5DB",
        lightest: "#F3F4F6",
      },
      WHITE:{
        DEFAULT:"#ffffff"
      },
    },
  },
  plugins: [require("daisyui")],
};
