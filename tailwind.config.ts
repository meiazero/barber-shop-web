import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
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

