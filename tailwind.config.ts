import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "squiggly-bounce": {
          '0%, 100%' : { marginTop: "100rem" },
          '50%': { marginTop: "20rem" }
        }
      },
      animation: {
        "squiggly-bounce": "squiggly-bounce 0.5s ease-in"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config