module.exports = {
  content: './styleguide/docs/Controls.md',
  name: 'Controls',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => [
    'src/components/button/Button.js',
    'src/components/dropdown/Dropdown.js',
    'src/components/formfield/FormField.js',
    'src/components/switch/Switch.js',
    'src/components/switch-panel/SwitchPanel.js'
  ],
};