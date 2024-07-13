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
        "iconScreen": { "max":"768px"},
        "xsm" : { "max":"699px"},
        "tab": { "max": "888px" },
        // "md": {'max': '960px',}
      },

      fontSize: {
        "fz-xxs": '12px',
        "fz-xs": '13px',
        "fz-sm": '14px',
        "fz-md": '16px',
        "fz-lg": '18px',
        "fz-xl": '20px',
        "fz-xxl": '22px',
        "fz-heading": '32px',

        "big-head-clamp": 'clamp(24px, 8vw, 66px)',
        "num-head-clamp": 'clamp(16px,3vw,32px)',
        "title-clamp": 'clamp(2.5rem,5vw,2.75rem)',
        "proj-title-clamp": 'clamp(1rem,5vw,1.2rem)',
        "intro-clamp": "text-[clamp(fz-sm, 5vw, fz-md)]",
        "nav-sm-clamp": "clamp(fz-sm, 4vw, fz-lg)",
      },

      fontFamily: {
        "font-mono": ['"Fira Mono"', 'monospace'],
        "font-sans": ['"Nunito Sans"', 'sans-serif']
      },

      textColor: {
        "green": "#64ffda",
        "lightest-slate": "#ccd6f6",
        "lightest-navy": '#233554'
      },

      borderColor: {
        "green-border": "#64ffda"
      },

      colors: {
        "green-color": "#64ffda",
        "light-slate": '#a8b2d1'
      },

     transformOrigin:{
      "center-left": '-8% -4%'
     },

     boxShadow: {
      'custom': '3px 3px 0px 0px #64ffda',
      'nav-shadow': "-10px 0px 30px -15px rgba(2,12,27,0.7)"
    },

    backgroundColor: {
      'green-bg': '#64ffda',
      "light-navy": "#112240",
      "slate": "#8892b0"
    }
    
    },
  },

  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [require("tailwindcss-animate")],
}