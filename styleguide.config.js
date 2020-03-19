const sections = require('./styleguide/sections');

module.exports = {
  pagePerSection: true,
  sections: [
    ...sections
  ],
  styleguideDir: './build',
}