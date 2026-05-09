export default {
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#dae2fd",
        "surface-container-lowest": "#ffffff",
        "error-container": "#ffdad6",
        "secondary-container": "#dae2fd",
        "surface-container-high": "#e7e7f3",
        "on-background": "#191b23",
        "surface-variant": "#e1e2ed",
        "on-secondary-fixed": "#131b2e",

        primary: "#004ac6",

        "on-primary-fixed": "#00174b",
        "on-secondary-container": "#5c647a",
        "on-primary-fixed-variant": "#003ea8",
        "primary-container": "#2563eb",
        "secondary-fixed-dim": "#bec6e0",
        "on-primary-container": "#eeefff",
        "on-secondary-fixed-variant": "#3f465c",
        "surface-container": "#ededf9",
        "on-error": "#ffffff",
        "on-tertiary-fixed": "#00201c",
        "outline-variant": "#c3c6d7",
        "tertiary-fixed": "#71f8e4",
        "tertiary-container": "#007b6e",
        "on-surface-variant": "#434655",
        "inverse-primary": "#b4c5ff",
        "primary-fixed-dim": "#b4c5ff",
        "surface-tint": "#0053db",

        surface: "#faf8ff",

        "tertiary-fixed-dim": "#4fdbc8",
        "surface-dim": "#d9d9e5",
        "surface-container-low": "#f3f3fe",
        "surface-bright": "#faf8ff",
        "on-tertiary-container": "#b1fff1",
        "on-primary": "#ffffff",
        "surface-container-highest": "#e1e2ed",
        "on-surface": "#191b23",
        "inverse-on-surface": "#f0f0fb",
        "inverse-surface": "#2e3039",
        "on-error-container": "#93000a",

        secondary: "#565e74",

        background: "#faf8ff",

        "on-secondary": "#ffffff",

        outline: "#737686",

        error: "#ba1a1a",

        "primary-fixed": "#dbe1ff",

        "on-tertiary": "#ffffff",

        "on-tertiary-fixed-variant": "#005048",

        tertiary: "#006056",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.5rem",
        full: "9999px",
      },

      spacing: {
        "container-max": "1280px",
        "stack-md": "16px",
        unit: "4px",
        "stack-sm": "8px",
        "margin-mobile": "20px",
        "stack-xl": "64px",
        gutter: "24px",
        "margin-desktop": "64px",
        "stack-lg": "32px",
      },

      fontFamily: {
        "display-xl": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-sm": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg": ["Plus Jakarta Sans", "sans-serif"],
        h1: ["Plus Jakarta Sans", "sans-serif"],
        h2: ["Plus Jakarta Sans", "sans-serif"],
        h3: ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
      },

      fontSize: {
        "display-xl": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.02em",
            fontWeight: "800",
          },
        ],

        "display-lg": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        h1: [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],

        h2: [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: "700",
          },
        ],

        h3: [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],

        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.05em",
            fontWeight: "600",
          },
        ],

        "label-sm": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
          },
        ],
      },
    },
  },

  plugins: [],
};
