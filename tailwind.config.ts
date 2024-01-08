import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "white-smoke": "#f5f5f5",
        "black-smoke": "#212121",
      },
    },
  },
  plugins: [],
} satisfies Config
