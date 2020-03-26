module.exports = {
  content: './styleguide/docs/Informational.md',
  name: 'Informational',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => [
    'src/components/alert/Alert.js',
    'src/components/hint/Hint.js',
    'src/components/label/Label.js',
    'src/components/modal/Modal.js',
    'src/components/progress-bar/ProgressBar.js',
    'src/components/stepper/Stepper.js',
  ],
};
