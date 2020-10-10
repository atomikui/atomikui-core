module.exports = {
  name: 'Data Display',
  content: './styleguide/docs/DataDisplay.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/list/List.jsx',
      'src/components/list-item/ListItem.jsx',
      'src/components/table/Table.jsx',
    ];
  },
};
