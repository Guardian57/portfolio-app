import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "logo-blue": "#00a6e9",
        "logo-dark-blue": "#0F204F",
        "alabaster": "#F8F6F2",
        "isabel": "#EDEAE8",
        "snow": "#FFFBFF",
      },
      screens: {
        'bento-grid':'69.5rem', 
      },
    },
  },
  plugins: [],
};
export default config;
