module.exports = {
  content: './styleguide/docs/Navigation.md',
  name: 'Navigation',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/breadcrumb/Breadcrumb.js',
      'src/components/link/Link.js',
      'src/components/pagination/Pagination.js',
      'src/components/step/Step.js',
      'src/components/stepper/Stepper.js',
    ];
  },
};
