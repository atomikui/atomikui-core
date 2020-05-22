const containers = require('./containers');
const content = require('./content');
const cssUtilities = require('./css-utilities');
const dataDisplay = require('./data-display');
const experimental = require('./experimental');
const dom = require('./dom');
const gettingStarted = require('./getting-started');
const form = require('./form');
const iconography = require('./iconography');
const informational = require('./informational');
const layout = require('./layout');
const navigation = require('./navigation');
const providers = require('./providers');
const templates = require('./templates');

module.exports = [
  gettingStarted,
  containers,
  content,
  dataDisplay,
  dom,
  form,
  iconography,
  informational,
  layout,
  navigation,
  providers,
  experimental,
  templates,
  cssUtilities,
];
