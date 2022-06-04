module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2596be",
          info: "#74BF62",
          secondary: "#3D4E57",
          accent: "#070834",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",
          success: "#1BBB70",
          warning: "#DF7E07",
          error: "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
