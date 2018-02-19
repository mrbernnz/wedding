const postCssImport = require('postcss-import')();
const cssNext = require('postcss-cssnext')();
const cssNano = require('cssnano')();
const reporter = require('postcss-reporter')();

module.exports = {
  siteMetadata: {
    title: 'Noel and Tricia Website'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [postCssImport, cssNext, cssNano, reporter],
        precision: 8
      }
    }
  ]
};
