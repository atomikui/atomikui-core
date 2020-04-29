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
    theme === 'dark' && './styleguide/styles/dark.scss',
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Hind+Madurai:300,300i,400,400i,500,500i,700,700i',
        },
      ],
    },
  },
  theme: {
    ...(theme === 'dark' && {
      color: {
        base: '#efefef',
        baseBackground: '#1a1a1a',
        border: '#444',
      },
    }),
    fontFamily: {
      base: '"Hind Madurai", Arial, Helvetica, sans-serif',
    },
  },
};
