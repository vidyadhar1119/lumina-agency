import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "selector",
    theme: {
        extend: {
            colors: {
                surface: {
                    dark: "#0c0a09",
                    "dark-2": "#161412",
                    "dark-3": "#1e1b18",
                    light: "#fafaf9",
                    "light-2": "#f5f5f4",
                    "light-3": "#e7e5e4",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-syne)", "sans-serif"],
            },
            animation: {
                "fade-up": "fadeUp 0.7s ease-out forwards",
                "fade-in": "fadeIn 0.5s ease-out forwards",
                shimmer: "shimmer 3s linear infinite",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(28px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
