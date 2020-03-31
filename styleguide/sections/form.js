module.exports = {
  content: './styleguide/docs/Controls.md',
  name: 'Form',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => [
    'src/components/button/Button.js',
    'src/components/button-group/ButtonGroup.js',
    'src/components/dropdown/Dropdown.js',
    'src/components/form-field/FormField.js',
    'src/components/form-option/FormOption.js',
    'src/components/range-slider/RangeSlider.js',
    'src/components/switch/Switch.js',
    'src/components/switch-panel/SwitchPanel.js',
  ],
};
