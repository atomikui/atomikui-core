const path = require('path');
const sections = require('./styleguide/sections');
const { version } = require('./package.json');

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
  require: ['./src/styles/main.scss', './styleguide/styles/main.scss'],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Noto+Sans:400,700|Bree+Serif&display=swap',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Noto Sans", Helvetica, sans-serif',
    },
  },
};
