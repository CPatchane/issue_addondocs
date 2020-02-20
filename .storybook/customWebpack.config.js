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

  config.module.rules.push({
    // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
    //     the docs page from the markdown
    test: /\.story\.mdx$/,
    use: [
      require.resolve("babel-loader"),
      {
        loader: "@mdx-js/loader",
        options: {
          compilers: [createCompiler({})],
        },
      },
    ],
  })

  // Run `source-loader` on story files to show their source code
  // automatically in `DocsPage` or the `Source` doc block.
  config.module.rules.push({
    test: /\.story\.tsx?$/,
    loader: require.resolve("@storybook/source-loader"),
    exclude: [/node_modules/],
    enforce: "pre",
  })

  return config
}
