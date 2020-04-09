const content = require('./content');
const gettingStarted = require('./getting-started');
const form = require('./form');
const informational = require('./informational');
const layout = require('./layout');
const navigation = require('./navigation');
const testCoverage = require('./test-coverage');

module.exports = [
  gettingStarted,
  testCoverage,
  content,
  form,
  informational,
  layout,
  navigation,
];
