module.exports = {
  name: 'Content',
  content: './styleguide/docs/Content.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/accordion/Accordion.js',
      'src/components/accordion-item/AccordionItem.js',
      'src/components/avatar/Avatar.js',
      'src/components/comment/Comment.js',
      'src/components/post/Post.js',
      // 'src/components/randomize/Randomize.js',
      'src/components/tab/Tab.js',
      'src/components/tab-panel/TabPanel.js',
      'src/components/tabs/Tabs.js',
      'src/components/truncate/Truncate.js',
    ];
  },
};
