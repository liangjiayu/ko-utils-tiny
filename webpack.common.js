const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    library: 'JU',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  plugins: [new CleanWebpackPlugin()],
};
