module.exports = {
  jit: true,
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom": "url('https://i.imgur.com/zyXyjnM.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
