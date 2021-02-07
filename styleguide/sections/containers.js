module.exports = {
  name: 'Containers',
  content: './styleguide/docs/Containers.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => [
    'src/components/card/Card.jsx',
    'src/components/chat-window/ChatWindow.jsx',
    'src/components/collapse/Collapse.jsx',
    'src/components/drawer/Drawer.jsx',
    'src/components/jumbotron/Jumbotron.jsx',
    'src/components/modal/Modal.jsx',
    'src/components/overlay/Overlay.jsx',
  ],
};
