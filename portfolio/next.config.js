const withMDX = require("@next/mdx")();
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["tsx", "mdx"],
  i18n: {
    locales: ["en-gb"],
    defaultLocale: "en-gb",
  },
});
