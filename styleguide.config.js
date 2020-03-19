const sections = require('./styleguide/sections');

module.exports = {
  pagePerSection: true,
  sections: [
    ...sections
  ],
  styleguideDir: './build',
  require: [
    './src/styles/main.scss',
    './styleguide/styles/main.scss'
  ],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Noto+Sans&display=swap'
        }
      ]
    }
  },
  theme: {
    fontFamily: {
      base: '"Noto Sans", Helvetica, sans-serif'
    }
  }
}