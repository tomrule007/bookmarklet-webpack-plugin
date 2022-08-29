const BookmarkletPlugin = require('bookmarklet-webpack-plugin');
const path = require('path');

module.exports = {
  // Currently only supports production mode
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new BookmarkletPlugin({
      input: 'main.js',
      output: 'index.html',
      linkName: 'Bookmarklet',
      pageTitle: 'Cool Bookmarklet',
      repo: 'https://github.com/tomrule007/bookmarklet-webpack-plugin',
      author: 'Thomas J. Herzog',
    }),
  ],
};
