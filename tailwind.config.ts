import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f0f23",
        secondary: "#1a1a3e",
        accent: "#64c8ff",
        dark: "#0f0f23",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 20px rgba(100, 200, 255, 0.5)",
        "glow-lg": "0 0 30px rgba(100, 200, 255, 0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
