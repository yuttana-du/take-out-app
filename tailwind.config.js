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
      },
      fontSize: {
        header: "1.375rem",
        normal: "0.9375rem",
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
        w59: "3.6875rem",
        w79: "4.9375rem",
        w60: "3.75rem",
        w212: "13.25rem",
      },
      lineHeight: {
        A18: "1.125rem",
        A15: "0.9375rem",
      },
      letterSpacing: { A8: "-0.005rem" },
      height: {
        h18: "18px",
        h22: "22px",
        h30: "30px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
