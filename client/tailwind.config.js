/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        saira: ["Saira", "sans-serif"],
        poller: ["Poller One", "cursive"],
        baumans: ["Baumans", "system-ui"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        richPink: {
          100: "#B84B68",
        },
        richViolet: {
          800: "#2B0C34",
          100: "#A546C6",
          600: "#310E3C",
        },
        richBlue: {
          100: "#385F98",
        },
        richYellow: "#FED83C",
      },
    },
  },
  plugins: [],
};
