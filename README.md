# Bookmarklet Webpack Plugin [![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/tomrule007/bookmarklet-webpack-plugin/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/tomrule007/bookmarklet-webpack-plugin/blob/master/.github/CONTRIBUTING.md)

Convert a javascript bundle into a html page with a link to bookmarklet-ified version of the javascript bundle.

## How it works

Take the final output of your webpack config, with all your desired transformations/bundling/minification/ect. included. This plugin applies a final transformation of wrapping the function in an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), applying [URI encoding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) and appending `javascript:` to make it executable via a browser link.

That code is then wrapped in styled html document to display the bookmarklet link and project information and instructions for users to use the bookmarklet. The page is customizable via multiple optional plugin parameter properties. (future versions will include a template engine support for full customization).

\*Currently only supports webpack production mode builds.

See example below for more details.

## Installation

```Bash
npm install --save-dev bookmarklet-webpack-plugin
```

## example Usage

Input:

```js
// index.js
const hello = 'hello';
const world = 'world';
console.log(`${hello} ${world}`);
```

```js
// webpack.config.js
const BookmarkletPlugin = require('bookmarklet-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',  // Currently only supports production mode.
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // ...
  plugins: plugins: [
    new BookmarkletPlugin({
      bundle: 'main.js',             // required
      output: 'index.html',          // <- default
      linkName:'Bookmarklet',        // <- default
      pageTitle: 'Cool Bookmarklet', // <- default
      repo:'http://example.com',     // default -> '' (removed line)
      author:'Example Author',       // default -> '' (removed line)
    }),
  ],
};
```

Output:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* basic styling */
    </style>
  </head>
  <body>
    <div id="main">
      <h1>Cool Bookmarklet</h1>
      <p>By: Example Author</p>
      <div class="bookmarkContainer">
        <p>
          <a class="bookmarklet" href="">Bookmarklet</a>
        </p>
        <p>
          Drag this button to your bookmarks bar to save it as a bookmarklet.
        </p>
      </div>
      <p>
        See source at <br />
        <a href="http://example.com">http://example.com</a>
      </p>
    </div>
  </body>
</html>
```

## Future Features and Project Goals

- [ ] Testing
  - [ ] Basic unit tests
  - [ ] End to end test with multiple example setups
- [ ] Add error handling for edge cases with Webpack's builtin error handling api
- [ ] setup schema-util for options parameter object
- [ ] Add template engine support (allow for fully customizable html output)

If you would like to get involved in an open source project I encourage you to checkout the [Contributing guidelines](https://github.com/tomrule007/bookmarklet-webpack-plugin/blob/master/.github/CONTRIBUTING.md) and open a discussion on the issues board. There is plenty to do and I would love your help. :)
