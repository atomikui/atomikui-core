module.exports = {
  ...require('babel-config-atomikui'),
  env: {
    production: {
      plugins: ['babel-plugin-jsx-remove-data-test-id'],
    },
  },
};
