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
      'src/components/avatar/Avatar.js',
      'src/components/comment/Comment.js',
      'src/components/post/Post.js',
      'src/components/tabs/Tabs.js',
      'src/components/tabs/Tab.js',
      'src/components/tabs/TabPanel.js',
      'src/components/truncate/Truncate.js',
    ];
  },
  sections: [
    {
      name: 'Icons',
      content: 'src/components/icon/Icon.md',
      usageMode: 'expand',
      exampleMode: 'expand',
    },
  ],
};
