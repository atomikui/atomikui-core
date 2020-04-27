module.exports = {
  name: 'Content',
  content: './styleguide/docs/Content.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/accordion/Accordion.js',
      'src/components/accordion/AccordionItem.js',
      'src/components/tabs/Tabs.js',
      'src/components/truncate/Truncate.js',
    ];
  },
};
