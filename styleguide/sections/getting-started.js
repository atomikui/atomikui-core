module.exports = {
  name: 'Getting Started',
  content: './README.md',
  sectionDepth: 6,
  sections: [
    {
      name: 'Installation',
      content: './styleguide/docs/Installation.md',
    },
    {
      name: 'Test Coverage',
      external: true,
      href: './jest-coverage-report.html',
    },
  ],
};
