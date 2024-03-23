import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColors: {
        "custom-gradient": ["180deg", "#18282A", "#221A2C"],
      },
      colors: {
        dark: "#292B32",
        darkText: "#ffffff",
      },
    },
  },
  plugins: [require("tailwindcss-gradients")],
};
export default config;
