module.exports = {
  content: './styleguide/docs/Informational.md',
  name: 'Informational',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/alert/Alert.js',
      'src/components/badge/Badge.js',
      'src/components/hint/Hint.js',
      'src/components/label/Label.js',
      'src/components/progress-bar/ProgressBar.js',
      'src/components/rating/Rating.js',
      'src/components/spinner/Spinner.js',
      'src/components/tooltip/Tooltip.js',
    ];
  },
};
