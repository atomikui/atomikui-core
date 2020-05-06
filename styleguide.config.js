const dotenv = require('dotenv-flow');
const path = require('path');
const sections = require('./styleguide/sections');
const { version } = require('./package.json');

dotenv.config();

const theme = process.env.THEME;

module.exports = {
  version,
  title: 'React Component Library',
  pagePerSection: true,
  sections: [...sections],
  moduleAliases: {
    '@alaneicker/react-component-library': path.resolve(__dirname, 'src'),
  },
  assetsDir: './public',
  styleguideDir: './build',
  require: [
    './src/styles/main.scss',
    './styleguide/styles/main.scss',
    ...(theme === 'dark' ? ['./styleguide/styles/dark.scss'] : []),
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap',
        },
      ],
    },
  },
  theme: {
    color: {
      // Base styleguide dark theme styles
      ...(theme === 'dark' && {
        base: '#efefef',
        baseBackground: '#1a1a1a',
        border: '#444',
        link: '#88ccfc',
      }),
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
