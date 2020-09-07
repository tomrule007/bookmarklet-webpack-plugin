# Bookmarklet Webpack Plugin [![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)](https://github.com/tomrule007/bookmarklet-webpack-plugin/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/tomrule007/bookmarklet-webpack-plugin/blob/master/.github/CONTRIBUTING.md)

Convert a javascript bundle into a html page with a link to bookmarklet-ified version of the javascript bundle.

## How it works

Take the final output of your webpack config, with all your desired transformations/bundling/minification/ect. included. This plugin applies a final transformation of wrapping the function in an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), applying [URI encoding](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) and perpend `javascript:` to make it executable via a browser link.

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
      input: 'main.js',             // required (must match webpack output)
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

[Demo Link](https://tomrule007.github.io/bookmarklet-webpack-plugin/example/dist/index.html) - open console log to see `hello world` when clicking the bookmarklet link.

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
          <a
            class="bookmarklet"
            href="javascript:(function(){!function(e)%7Bvar%20t%3D%7B%7D%3Bfunction%20r(n)%7Bif(t%5Bn%5D)return%20t%5Bn%5D.exports%3Bvar%20o%3Dt%5Bn%5D%3D%7Bi%3An%2Cl%3A!1%2Cexports%3A%7B%7D%7D%3Breturn%20e%5Bn%5D.call(o.exports%2Co%2Co.exports%2Cr)%2Co.l%3D!0%2Co.exports%7Dr.m%3De%2Cr.c%3Dt%2Cr.d%3Dfunction(e%2Ct%2Cn)%7Br.o(e%2Ct)%7C%7CObject.defineProperty(e%2Ct%2C%7Benumerable%3A!0%2Cget%3An%7D)%7D%2Cr.r%3Dfunction(e)%7B%22undefined%22!%3Dtypeof%20Symbol%26%26Symbol.toStringTag%26%26Object.defineProperty(e%2CSymbol.toStringTag%2C%7Bvalue%3A%22Module%22%7D)%2CObject.defineProperty(e%2C%22__esModule%22%2C%7Bvalue%3A!0%7D)%7D%2Cr.t%3Dfunction(e%2Ct)%7Bif(1%26t%26%26(e%3Dr(e))%2C8%26t)return%20e%3Bif(4%26t%26%26%22object%22%3D%3Dtypeof%20e%26%26e%26%26e.__esModule)return%20e%3Bvar%20n%3DObject.create(null)%3Bif(r.r(n)%2CObject.defineProperty(n%2C%22default%22%2C%7Benumerable%3A!0%2Cvalue%3Ae%7D)%2C2%26t%26%26%22string%22!%3Dtypeof%20e)for(var%20o%20in%20e)r.d(n%2Co%2Cfunction(t)%7Breturn%20e%5Bt%5D%7D.bind(null%2Co))%3Breturn%20n%7D%2Cr.n%3Dfunction(e)%7Bvar%20t%3De%26%26e.__esModule%3Ffunction()%7Breturn%20e.default%7D%3Afunction()%7Breturn%20e%7D%3Breturn%20r.d(t%2C%22a%22%2Ct)%2Ct%7D%2Cr.o%3Dfunction(e%2Ct)%7Breturn%20Object.prototype.hasOwnProperty.call(e%2Ct)%7D%2Cr.p%3D%22%22%2Cr(r.s%3D0)%7D(%5Bfunction(e%2Ct)%7Bconsole.log(%22hello%20world%22)%7D%5D)%3B})()"
            >Bookmarklet</a
          >
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

\*Bookmarklet href link will vary depending on your webpack config and if you are using babel.

## Future Features and Project Goals

- [ ] Testing
  - [ ] Basic unit tests
  - [ ] End to end test with multiple example setups
- [ ] Add error handling for edge cases with Webpack's builtin error handling api
- [ ] setup schema-util for options parameter object
- [ ] Add template engine support (allow for fully customizable html output)

If you would like to get involved in an open source project I encourage you to checkout the [Contributing guidelines](https://github.com/tomrule007/bookmarklet-webpack-plugin/blob/master/.github/CONTRIBUTING.md) and open a discussion on the issues board. There is plenty to do and I would love your help. :)

## Inspirations / Credits

I wanted to simplify the build process of my bookmarklet: [paintballnet-hotkeys](https://github.com/tomrule007/paintballnet-hotkeys). I started with `mrcoles/bookmarklet` which is a great package with a lot of features but it didn't integrate too well with my webpack config. Webpack minification process would strip the meta comments that killed most of the packages features. I then investigated a webpack solution to reduce the build steps and found `ivanzk/bookmarklet-wrapper-webpack-plugin`. This package was a great but didn't output the html template page that I desired.

- [mrcoles/bookmarklet](https://github.com/mrcoles/bookmarklet) - The current source for the included html template.
- [ivanzk/bookmarklet-wrapper-webpack-plugin](https://github.com/ivanzk/bookmarklet-wrapper-webpack-plugin/blob/master/index.js) - The starter logic for integrating into webpack's plugin system.
