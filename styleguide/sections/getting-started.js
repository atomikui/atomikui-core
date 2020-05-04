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
      name: 'Theming',
      content: './styleguide/docs/Theming.md',
    },
  ],
  components: () => {
    return ['src/components/stats/Stats.js'];
  },
};
