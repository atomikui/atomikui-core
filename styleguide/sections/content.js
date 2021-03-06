module.exports = {
  name: 'Content',
  content: './styleguide/docs/Content.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => [
    'src/components/accordion/Accordion.jsx',
    'src/components/avatar/Avatar.jsx',
    'src/components/badge/Badge.jsx',
    'src/components/comment/Comment.jsx',
    'src/components/gallery/Gallery.jsx',
    'src/components/quotation/Quotation.jsx',
    'src/components/post/Post.jsx',
    'src/components/tabs/Tabs.jsx',
    'src/components/tag/Tag.jsx',
    'src/components/truncate/Truncate.jsx',
    'src/components/UserPersona/UserPersona.jsx',
  ],
};
