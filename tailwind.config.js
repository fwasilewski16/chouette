/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%": { transform: "scale(1,1)" },
          "100%": { transform: "scale(1.15,1.15)" },
        },
      },
      animation: {
        "zoomIn": "zoom 12s linear infinite",
      },
      fontFamily: {
        montserrat: "Montserrat",
      }
    },
  },
  plugins: [],
}

