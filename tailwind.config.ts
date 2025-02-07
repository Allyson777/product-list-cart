import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-red': 'hsl(var(--custom-red))',
        'custom-green': 'hsl(var(--custom-gren))',
        'rose': {
          50: 'hsl(var(--rose-50))',
          100: 'hsl(var(--rose-100))',
          300: 'hsl(var(--rose-300))',
          400: 'hsl(var(--rose-400))',
          500: 'hsl(var(--rose-500))',
          900: 'hsl(var(--rose-900))',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
