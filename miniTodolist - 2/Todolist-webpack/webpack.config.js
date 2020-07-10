const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  context: path.join(__dirname, 'src'),
  entry: {
    index: './index.js',
    //styles: './css/style.css'
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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/dist/',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
            }
          },
          'postcss-loader',
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      })
  ],
};
