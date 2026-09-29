import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#E5252A",
          "red-hover": "#C81E23",
          "red-light": "#FDF2F2",
          dark: "#111827",
          black: "#000000",
          surface: "#FFFFFF",
          "surface-muted": "#F9FAFB",
          "surface-alt": "#F3F4F6",
          border: "#E5E7EB",
          "border-dark": "#D1D5DB",
          text: "#111827",
          "text-muted": "#4B5563",
          "text-light": "#6B7280",
        },
      },
      fontFamily: {
        serif: ['"Times New Roman"', "Times", "Georgia", "serif"],
        sans: ["Arial", "Helvetica", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Times New Roman"', "Times", "Georgia", "serif"],
      },
      animation: {
        "marquee-left": "marqueeLeft 35s linear infinite",
        "marquee-right": "marqueeRight 35s linear infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
