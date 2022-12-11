module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      background: "#f4f6f6",
      "card-primary": "#f7ebe1",
      "card-primary-hover": "#f7ebbf",
      "card-secondary": "#f4f6f6",
      "card-important": "#1a1a1a",
      transparent: "transparent",
      pink: "#d18462",
      red: "#c94c67",
      peach: "#d18462",
      redpeach: "#c94c67",
      nextred: "#e95076",
      "text-gradient-primary": "#f7ebe1",
      secondary: "#555",
      "text-gradient-secondary": "#faaa",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "apple-radius": "30px",
      },
      fontSize: {
        title: "3rem",
      },
    },

    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
  },

  plugins: [
    function ({ addVariant }) {
      addVariant("children", "& > *");
    },
  ],
};
