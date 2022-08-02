const withPWA = require("next-pwa");

module.export = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disabled: process.env.NODE_ENV === "development",
  },
});
