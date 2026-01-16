/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--danger-foreground))",
        },
        default: {
          DEFAULT: "hsl(var(--default))",
          foreground: "hsl(var(--default-foreground))",
          50: "hsl(var(--default-50))",
          100: "hsl(var(--default-100))",
          200: "hsl(var(--default-200))",
          300: "hsl(var(--default-300))",
          400: "hsl(var(--default-400))",
          500: "hsl(var(--default-500))",
          600: "hsl(var(--default-600))",
          700: "hsl(var(--default-700))",
          800: "hsl(var(--default-800))",
          900: "hsl(var(--default-900))",
        },
        divider: "hsl(var(--divider))",
      },
    },
  },
  darkMode: "class",
  plugins: [],
  // Optimize CSS output
  corePlugins: {
    preflight: true,
  },
};
