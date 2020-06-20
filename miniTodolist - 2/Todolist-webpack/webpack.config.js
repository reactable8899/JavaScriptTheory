const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    library: 'TodoList',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: "source-map"
};
