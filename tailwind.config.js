/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "halo-blue": {
          DEFAULT: "#00FFFF",
          light: "#4CC2FF",
        },
        "halo-dark-blue": {
          DEFAULT: "#0077BE",
          light: "#005A8C",
        },
        "halo-orange": {
          DEFAULT: "#FFA500",
          light: "#FF7F00",
        },
        "halo-light-blue": {
          DEFAULT: "#87CEEB",
          light: "#5CACEE",
        },
        "halo-background": {
          DEFAULT: "#000000",
          light: "#E6F3FF",
        },
        "halo-text": {
          DEFAULT: "#FFFFFF",
          light: "#1A3A5A",
        },
        "halo-accent": {
          DEFAULT: "#7DF9FF",
          light: "#00CED1",
        },
      },
      backgroundImage: {
        "light-texture": "url('/light-texture.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

