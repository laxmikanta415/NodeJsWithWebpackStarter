const path = require("path");
const NodeExternals = require("webpack-node-externals");
const StartServerPlugin = require("start-server-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.js",
  node: {
    __dirname: true,
    __filename: true
  },
  watch: true,
  output: {
    filename: "bundle.server.js",
    path: path.join(__dirname, "/dist/")
  },
  externals: [new NodeExternals()],
  target: "node",
  mode: "development",
  devtool: "sorucemap",
  plugins: [new StartServerPlugin("bundle.server.js")]
};
