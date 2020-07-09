const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

  context: path.join(__dirname, 'src'),
  entry: {
  index: './index.js',
  styles: './css/style.css'
},
  output: {
    filename: '[name].js',
    library: 'TodoList',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
};
