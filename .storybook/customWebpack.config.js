const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const createCompiler = require("@storybook/addon-docs/mdx-compiler-plugin")

module.exports = config => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      require.resolve("babel-loader"),
      {
        loader: require.resolve("ts-loader"),
        options: {
          compilerOptions: {
            noEmit: false,
          },
        },
      },
      require.resolve("react-docgen-typescript-loader"),
    ],
    exclude: /node_modules/,
  })

  config.plugins.push(new ForkTsCheckerWebpackPlugin())

  // Run `source-loader` on story files to show their source code
  // automatically in `DocsPage` or the `Source` doc block.
  config.module.rules.push({
    test: /\.story\.tsx?$/,
    loader: require.resolve("@storybook/source-loader"),
    exclude: [/node_modules/],
    enforce: "pre",
  })

  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
