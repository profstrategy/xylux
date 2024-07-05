/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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

      screens: {
        "iconScreen": { "max":"767px"},
        "iphonesm" : { "max":"639px"},
        
      },

      fontSize: {
        "big-head-clamp": 'clamp(2.5rem,8vw,5rem)',
        "num-head-clamp": 'clamp(1.625rem,5vw,3.75rem)',
        "title-clamp": 'clamp(2.5rem,5vw,2.75rem)',
        "proj-title-clamp": 'clamp(1.5rem,5vw,1.75rem)',
        "fz-xxs": '12px',
        "fz-xs": '13px',
        "fz-sm": '14px',
        "fz-md": '16px',
        "fz-lg": '18px',
        "fz-xl": '20px',
        "fz-xxl": '22px'
      },

      fontFamily: {
        "font-mono": ['"Fira Mono"', 'monospace'],
        "font-sans": ['"Nunito Sans"', 'sans-serif']
      },

      textColor: {
        "green": "#64ffda",
        "lightest-slate": "#ccd6f6"
      },

      borderColor: {
        "green-border": "#64ffda"
      },

      colors: {
        "green-color": "#64ffda"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}