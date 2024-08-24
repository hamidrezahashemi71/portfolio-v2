import type { Config } from "tailwindcss"

const config = {
  darkMode: 'selector',
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
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        dark: {
          primary: "#071E3D",
          secondary: "#1F4287",
          text: "#FFFBF5",
          accent: {
            DEFAULT: "#21E6C1",
            hover: "#278EA5"
          }
        },
        light: {
          primary: "#FED9ED",
          secondary: "#E7BCDE",
          text: "#071E3D",
          accent: {
            DEFAULT: "#FF407D",
            hover: "#FFCAD4"
          }
        },
      },
      fontFamily: {
        jet: ['var(--font-jet)'],
        dana: ['var(--font-dana)']
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config