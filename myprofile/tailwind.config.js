/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        lime: "#04dd00",
        darkgray: "#acacac",
        pink: "#ecc1c1",
        darkseagreen: "#b9e4ab",
        wheat: "#e7d9aa",
        red: "#ff0000",
        gold: {
          "100": "#ffd540",
          "200": "#ffc700",
        },
        cornflowerblue: "#1294f2",
        "gray-4": "#bdbdbd",
        "gray-3": "#828282",
        whitesmoke: "#f6f6f6",
        blueviolet: "#8150f8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        lato: "Lato",
      },
      borderRadius: {
        "3xs": "10px",
        "58xl-5": "77.5px",
      },
    },
    fontSize: {
      xl: "20px",
      mid: "17px",
      "3xs": "10px",
      mini: "15px",
      smi: "13px",
      "2xs": "11px",
      sm: "14px",
      "3xs-3": "9.3px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
