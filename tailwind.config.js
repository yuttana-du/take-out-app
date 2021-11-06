module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        header: ["Bluu-Suuperstar"],
        body: ["SF-Pro-Display"],
      },
      colors: {
        RedVermilionBird: "#E92F48",
        BlackTortoise: "#424242",
        DeepGrey: "#7E8389",
        Container: "#F2F2F2",
        white: "#FFFFFF",
        pink: "#F2C9C9",
        brow: "#741C28",
      },
      fontSize: {
        header: "1.375rem",
        normal: "0.9375rem",
        font17: "1.0625rem",
        about: "0.75rem",
      },
      borderRadius: {
        timer: "0.625rem",
      },
      padding: {
        timerLR: "0.625rem",
        timerTB: "0.6875rem",
      },
      spacing: {
        w5: "0.3125rem",
        w7: "0.4375rem",
        w10: "0.625rem",
        w15: "0.9375rem",
        w22: "1.375rem",
        w35: "2.1875rem",
        w38: "2.375rem",
        w39: "2.4375rem",
        w58: "3.625rem",
        w59: "3.6875rem",
        w79: "4.9375rem",
        w60: "3.75rem",
        w74: "4.625rem",
        w88: "5.5rem",
        w212: "13.25rem",
        w335: "20.9375rem",
      },
      minWidth: {
        212: "13.25rem",
        88: "5.5rem",
        335: "20.9375rem",
      },
      lineHeight: {
        A18: "1.125rem",
        A15: "0.9375rem",
      },
      letterSpacing: { A8: "-0.005rem" },
      height: {
        h18: "18px",
        h22: "22px",
        h26: "26px",
        h30: "30px",
      },
      backgroundImage: {
        "califorina-roll": "url('/images/califorina-roll.png')",
        "salmon-roll": "url('/images/Salmon-Roll.png')",
        "salmon-sashimi": "url('/images/Salmon-Sashimi.png')",
        "tuna-roll": "url('/images/Tuna-Roll.png')",
        "vegetable-lo-mein": "url('/images/Vegetable-Lo-Mein.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
