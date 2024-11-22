/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", // Deep Indigo
        secondary: "#9333ea", // Purple
        accent: "#f59e0b", // Amber
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Menggunakan Google Font Poppins
      },
      backgroundImage: {
        'gradient-radial': "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 100%)",
        'gradient-moving': "linear-gradient(45deg, #1e40af, #9333ea, #f59e0b)",
      },
      animation: {
        gradientMove: "gradientMove 8s infinite alternate",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
