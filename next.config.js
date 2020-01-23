/* tslint:disable:no-var-requires */
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "./src")
    };
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        systemvars: true
      })
    ];
    return config;
  }
};
