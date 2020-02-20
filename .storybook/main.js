const webpackConfig = require("./customWebpack.config")

module.exports = {
  stories: ["../src/components/**/*.story.mdx"],
  webpackFinal: webpackConfig,
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: false,
        sourceLoaderOptions: null,
      },
    },
  ],
}
