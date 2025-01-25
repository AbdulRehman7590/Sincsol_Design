import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      /**
       * Animations Section (Custom Added)
       * A comprehensive set of animations including fade, slide, bounce, spin, zoom, rotate, wiggle, and shake.
       */
      animation: {
        "fade": "fade 2s ease-in-out forwards",
        "fade-up": "fadeUp 2s ease-in-out forwards",
        "fade-down": "fadeDown 2s ease-in-out forwards",
        "fade-left": "fadeLeft 2s ease-in-out forwards",
        "fade-right": "fadeRight 2s ease-in-out forwards",
        "bounce": "bounce 1.5s infinite",
        "float": "bounce 2s infinite",
        "spin": "spin 1.5s linear infinite",
        "pulse": "pulse 2s infinite",
        "slide-left": "slideLeft 1.5s ease-in-out forwards",
        "slide-right": "slideRight 1.5s ease-in-out forwards",
        "zoom-in": "zoomIn 1s ease-in-out forwards",
        "zoom-out": "zoomOut 1s ease-in-out forwards",
        "flip-x": "flipX 1s ease-in-out forwards",
        "flip-y": "flipY 1s ease-in-out forwards",
        "shake": "shake 0.8s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "rotate": "rotate 2.5s linear infinite",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },        
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-2px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        zoomOut: {
          "0%": { transform: "scale(1.5)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        flipX: {
          "0%": { transform: "rotateX(0)" },
          "100%": { transform: "rotateX(180deg)" },
        },
        flipY: {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-50%)" },
          "75%": { transform: "translateX(50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
