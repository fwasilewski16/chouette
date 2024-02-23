/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        down: {
          "0%": { transform: "translate(0,0)" },
          "100%": { transform: "translate(0,-50px)" },
        },
        up: {
          "0%": { transform: "translate(0,-50px)" },
          "100%": { transform: "translate(0,0)" },
        },
      },
      animation: {
        "scrollDown": "down 13s linear infinite",
        "scrollUp": "up 15s linear infinite"
      },
      fontFamily: {
        inter: "Inter",
      }
    },
  },
  plugins: [],
}

