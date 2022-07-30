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
      output: 'Bookmarklet.jsx',
      linkName: 'Bookmarklet',
      pageTitle: 'Another Cool Bookmarklet',
      repo: 'https://github.com/tomrule007/bookmarklet-webpack-plugin',
      author: 'Jon Nicholson',
      templatePath: require.resolve('./custom.react.hbs'),
    }),
  ],
};
