import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Playfair Display", "serif"],
      body: ["Lora", "serif"],
      sans: ["Lora", "serif"],
    },
    extend: {
      colors: {
        warm: {
          cream: "#FBF7F0",
          brown: "#3D2817",
          terracotta: "#C85A3A",
          sage: "#7BA68F",
          tan: "#D4A574",
          darkBrown: "#8B5A3C",
          taupe: "#A67C52",
          lightBeige: "#E8DFD3",
        },
      },
      boxShadow: {
        warm: "0 4px 12px rgba(61, 40, 23, 0.08)",
        "warm-lg": "0 12px 24px rgba(61, 40, 23, 0.12)",
        "warm-hover": "0 8px 20px rgba(200, 90, 58, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
