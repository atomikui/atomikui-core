module.exports = {
  name: 'Containers',
  content: './styleguide/docs/Containers.md',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/card/Card.js',
      'src/components/chat-window/ChatWindow.js',
      'src/components/drawer/Drawer.js',
      'src/components/modal/Modal.js',
      'src/components/overlay/Overlay.js',
      'src/components/sticky/Sticky.js',
    ];
  },
};
