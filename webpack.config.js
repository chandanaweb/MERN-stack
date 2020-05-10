const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src')+ '/app.js',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  output: {
    path: path.join(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/"
  }
};