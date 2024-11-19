/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(10%)" }, // Start from right side
          "100%": { transform: "translateX(-100%)" }, // End on the left side
        },
      },
      animation: {
        marquee: "marquee 15s linear infinite", // Adjust the speed with the duration
      },
    },
  },
  plugins: [],
};

