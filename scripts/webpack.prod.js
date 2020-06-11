const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'ko-utils-tiny.js',
    library: 'KO',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  plugins: [],
});
