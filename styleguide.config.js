const path = require('path');
const sections = require('./styleguide/sections');
const { version } = require('./package.json');

module.exports = {
  version,
  title: 'Atomik UI',
  pagePerSection: true,
  sections: [...sections],
  moduleAliases: {
    '@atomikui/core': path.resolve(__dirname, 'src'),
  },
  assetsDir: './public',
  styleguideDir: './build',
  require: [
    './src/styles/main.scss',
    './styleguide/styles/main.scss',
    './scripts/app.js',
  ],
  template: {
    favicon: 'favicon.ico',
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
        },
      ],
    },
  },
  theme: {
    color: {
      // syntax highlighting styles
      codeBackground: '#272C34',
      codeString: '#a6e22e',
      codeKeyword: '#66d9ef',
      codeOperator: '#f8f8f2',
      codePunctuation: '#f8f8f2',
      codeBase: '#f8f8f2',
      codeFunction: '#e6db74',
      codeProperty: '',
    },
    fontFamily: {
      base: '"Lato", Arial, Helvetica, sans-serif',
    },
  },
};
