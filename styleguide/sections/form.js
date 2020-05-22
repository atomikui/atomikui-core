module.exports = {
  content: './styleguide/docs/Controls.md',
  name: 'Form',
  usageMode: 'expand',
  exampleMode: 'expand',
  sectionDepth: 6,
  components: () => {
    return [
      'src/components/auto-complete/AutoComplete.js',
      'src/components/button/Button.js',
      'src/components/button-group/ButtonGroup.js',
      'src/components/check-option/CheckOption.js',
      'src/components/date-picker/DatePicker.js',
      'src/components/dropdown/Dropdown.js',
      'src/components/file-upload/FileUpload.js',
      'src/components/form-field/FormField.js',
      'src/components/range-slider/RangeSlider.js',
      'src/components/switch/Switch.js',
      'src/components/switch-panel/SwitchPanel.js',
    ];
  },
};
