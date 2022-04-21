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
      background: "#222",
      "card-primary": "#f4f6f6",
      "card-secondary": "#f7ebe1",
      transparent: "transparent",
      pink: "rgb(244 114 182)",
      red: "rgb(220 38 38)",
      peach: "#d18462",
      redpeach: "#c94c67",
      "text-gradient-primary": "#f7ebe1",
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
    },
  },

  plugins: [],
};
