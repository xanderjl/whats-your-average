const path = require("path")
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@fonts": path.resolve(__dirname, "src/fonts"),
        "@static": path.resolve(__dirname, "static"),
      },
    },
    plugins: [new NodePolyfillPlugin()],
  })
}
