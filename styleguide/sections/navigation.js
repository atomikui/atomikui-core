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
      'src/components/menu/Menu.js',
      'src/components/menu/MenuItem.js',
      'src/components/pagination/Pagination.js',
      'src/components/stepper/Step.js',
      'src/components/stepper/Stepper.js',
    ];
  },
};
