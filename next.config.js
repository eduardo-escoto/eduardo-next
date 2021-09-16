const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);
module.exports = withTM({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
