const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'ko-utils.js',
    library: 'YU',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  plugins: [new CleanWebpackPlugin()],
};
