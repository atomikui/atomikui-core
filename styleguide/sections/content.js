module.exports = {
  name: 'Content',
  content: './styleguide/docs/Content.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/accordion/Accordion.jsx',
      'src/components/accordion-item/AccordionItem.jsx',
      'src/components/avatar/Avatar.jsx',
      'src/components/badge/Badge.jsx',
      'src/components/comment/Comment.jsx',
      'src/components/headline/Headline.jsx',
      'src/components/quotation/Quotation.jsx',
      'src/components/post/Post.jsx',
      'src/components/tab-panel/TabPanel.jsx',
      'src/components/tabs/Tabs.jsx',
      'src/components/tab/Tab.jsx',
      'src/components/tag/Tag.jsx',
      'src/components/truncate/Truncate.jsx',
    ];
  },
};
