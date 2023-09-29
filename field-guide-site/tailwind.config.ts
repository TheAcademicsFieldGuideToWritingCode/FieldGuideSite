import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#961a22',
        secondary: '#b17780',
        accent1: '#c7bfce',
        accent2: '#c4d2e0',
        base: '#dce0e4'
      }
    }
  },
  plugins: [],
} satisfies Config;
