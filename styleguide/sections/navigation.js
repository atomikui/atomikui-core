module.exports = {
  content: './styleguide/docs/Navigation.md',
  name: 'Navigation',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => [
    'src/components/breadcrumb/Breadcrumb.jsx',
    'src/components/link/Link.jsx',
    'src/components/pagination/Pagination.jsx',
    'src/components/stepper/Stepper.jsx',
  ],
};
