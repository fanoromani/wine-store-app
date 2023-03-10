const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        fontSale: "10px",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
        josefin: "Josefin Sans, sans-serif",
      },
      colors: {
        base: {
          background: "#FAFAFA",
          card: "#F3F2F2",
          input: "#EDEDED",
          button: "#E6E5E5",
          hover: "#D7D5D5",
          label: "#8D8686",
          text: "#574F4D",
          subtitle: "#403937",
          title: "#272221",
        },
        purple: {
          light: "#EBE5F9",
          base: "#8047F8",
          dark: "#4B2995",
        },
        yellow: {
          light: "#F1E9C9",
          base: "#DBAC2C",
          dark: "#C47F17",
        },
      },
    },
  },
  plugins: [],
};
