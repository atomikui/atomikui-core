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
            'https://fonts.googleapis.com/css?family=Montserrat:300,300i,400,400i,500,500i,600,600i,700,700i,900,900i',
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Montserrat", Arial, Helvetica, sans-serif',
    },
  },
};
