import type { Config } from "tailwindcss";

export default {
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
      },
      screens: {
        "400": "400px",
        "590": "590px",
        "700": "700px",
        "990": "990px",
        "1200": "1200px",
        "1400": "1400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
