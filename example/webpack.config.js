const BookmarkletPlugin = require('../bookmarklet-webpack-plugin');  //Should be just 'bookmarklet-webpack-plugin' when you have the package installed
const path = require('path');

module.exports = {
  mode: 'production',  // Currently only supports production mode.
  entry: '.example/src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // ...
  plugins: plugins: [
    new BookmarkletPlugin({
      input: 'main.js',             // required (must match webpack output)
      output: 'index.html',          // <- default
      linkName:'Bookmarklet',        // <- default
      pageTitle: 'Cool Bookmarklet', // <- default
      repo:'http://example.com',     // default -> '' (removed line)
      author:'Example Author',       // default -> '' (removed line)
    }),
  ],
};