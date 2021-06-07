module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "eotr-pattern": "url('/images/EOTR.png')",
      }),
      fontFamily: {
        header: ["Lato", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
        Nav: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
