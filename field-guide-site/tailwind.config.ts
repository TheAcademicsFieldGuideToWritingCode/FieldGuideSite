import { type Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            fontFamily: {
                'nunito': ['Nunito', 'sans-serif'],
            },
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} satisfies Config;
