module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        dark_second_bg_header_color: "#343a40",
        dark_main_bg_color: "#1f2125",
        dark_second_bg_color: "#ffffff",

        dark_main_txt_color: "#000",

        dark_border_color: "#000",

        dark_main_tooltip_color: "#fff",

        dark_sidebar: "#000",

        main_hover_color: "#22a5ad",
        second_hover_color: "#838383",

        third_bg_colors: "#000",
        forth_bg_colors: "#22a5ad",

        border_color: "#5d5d5d",
        second_border_color: "#343a40",

        icon_hover_color: "#5d5d5d",
        second_icon_hover_color: "#5d5d5d",

        light_main_bg_color: "#fff",
        light_second_bg_color: "#343a40",

        light_main_txt_color: "#fff",

        light_main_tooltip_color: "#000",

        light_sidebar: "#FFF",

        transparent: "transparent",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bermuda: "#78dcca",
        black: "#000",
        white: "#fff",
        "bubble-gum": "#ff77e9",
      },
      container: {
        padding: {
          DEFAULT: ".5rem",
          sm: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
      },

      backgroundImage: {
        Section2MoonBlack:
          "url('/src/Components/Images/HomePage/Section2_PrayerTimes/moonblack.jpg')",
        QuranPage:
          "url('/src/Components/Images/HomePage/QranPage/mushaf-bg.svg')",
      },
      // screens: {
      //   xsScreen: "320px", // Custom breakpoint
      //   'max_sm': {'min': '285px'} //
      // },
    },

    plugins: [],
  },
};
