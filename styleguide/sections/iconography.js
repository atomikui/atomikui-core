module.exports = {
  name: 'Iconography',
  content: './styleguide/docs/Iconography.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  sections: [
    {
      name: 'Icons',
      content: 'src/components/icon/Icon.md',
      usageMode: 'expand',
      exampleMode: 'expand',
    },
  ],
  components: () => {
    return ['src/components/flag/Flag.jsx'];
  },
};
