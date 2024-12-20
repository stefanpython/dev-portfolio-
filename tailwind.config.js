/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3.5s linear infinite", // slower rotation
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: ["dark"],
    darkTheme: "dark",
  },
};
