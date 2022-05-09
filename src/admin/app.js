import logo from "./extensions/logo.png";
import favicon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: logo,
    },

    head: {
      favicon: favicon,
    },

    locales: ["es"],

    menu: {
      logo: logo,
    },

    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Cloudworks Global",
        "app.components.LeftMenu.navbrand.workplace": "CV",
      },

      es: {
        "app.components.LeftMenu.navbrand.title": "Cloudworks Global",
        "app.components.LeftMenu.navbrand.workplace": "CV",
      },
    },

    theme: {
      colors: {
        alternative100: "#3AB8BB",
        alternative200: "#25C9CC",
        alternative500: "#0CC0F2",
        alternative600: "#0CA8F0",
        alternative700: "#2368cc",
        danger700: "#b72b1a",
      },
    },
    tutorials: false,
    notifications: { release: false },
  },

  bootstrap() {},
};
