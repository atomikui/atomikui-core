module.exports = {
  content: './styleguide/docs/Landmarks.md',
  name: 'Landmarks',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/footer/Footer.jsx',
      'src/components/header/Header.jsx',
    ];
  },
};
