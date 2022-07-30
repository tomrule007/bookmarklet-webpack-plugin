const fs = require('fs');
const validateOptions = require('schema-utils');
const { RawSource } = require('webpack-sources');
const Handlebars = require('handlebars');

// TODO: Setup schema file
// > include default values
// > Add more error handling

// schema for options object
const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string',
    },
  },
};

module.exports = class BookmarkletWebpackPlugin {
  constructor(options = {}) {
    validateOptions(schema, options, 'BookmarkletWebpackPlugin');
    this.options = options;
  }

  apply(compiler) {
    const {
      input,
      output = 'index.html',
      repo,
      linkName = 'Bookmarklet',
      pageTitle = 'Bookmarklet',
      author,
      templatePath = require.resolve('./default.html.hbs'),
    } = this.options;

    compiler.hooks.emit.tapAsync(
      'BookmarkletWebpackPlugin',
      (compilation, cb) => {
        const asset = Object.entries(compilation.assets).filter(([key, _]) =>
          key.includes(input)
        );

        if (asset.length > 1)
          throw Error(
            `
            BookmarkletWebpackPlugin: 

            input: ${input}, returned no matching assets

            *Make sure you provide the options object to the plugin with a valid 'input' property
                Example  
                  plugins: [new BookmarkletWebpackPlugin({input: 'main', output: 'bookmarkletPage.html'})],

            input should match the javascript bundle name -- Output:{filename: [[name]].js
            currently does not support [contentHash] but will return partial matches
            `
          );
        if (asset.length > 1)
          throw Error(
            `
            BookmarkletWebpackPlugin: 
              
            input: ${input} 
            
            Matched multiple assets: ${asset.map(([key, _]) => key).join(', ')}

            *Must rename assets or use a better match bundle name.
            `
          );
        const assetName = asset[0][0];
        const code = encodeURIComponent(asset[0][1]._value);
        const bookmarkletCode = `javascript:(function(){${code}})()`;

        // Remove the javascript asset output
        delete compilation.assets[assetName];

        try {
          const templateSource = fs.readFileSync(templatePath, 'utf8');
          const generateOutput = Handlebars.compile(templateSource);
          compilation.assets[output] = new RawSource(
            generateOutput({
              bookmarkletCode,
              repo,
              linkName,
              pageTitle,
              author,
            })
          );
        } catch (error) {
          throw Error(
            `
            BookmarkletWebpackPlugin: 
              
            input: ${input} 
            
            Failed to generate output from template: ${error.message}
            `
          );
        }

        cb();
      }
    );
  }
};
