const withMDX = require("@next/mdx")();
module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["tsx", "mdx"],
});
