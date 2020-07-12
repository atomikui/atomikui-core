const containers = require('./containers');
const content = require('./content');
const cssUtilities = require('./css-utilities');
const dataDisplay = require('./data-display');
const experimental = require('./experimental');
const dom = require('./dom');
const gettingStarted = require('./getting-started');
const formControls = require('./form-controls');
const iconography = require('./iconography');
const informational = require('./informational');
const layout = require('./layout');
const navigation = require('./navigation');
const providers = require('./providers');
const templates = require('./templates');
const wallet = require('./wallet');

module.exports = [
  gettingStarted,
  containers,
  content,
  dataDisplay,
  dom,
  formControls,
  iconography,
  informational,
  layout,
  navigation,
  wallet,
  providers,
  experimental,
  templates,
  cssUtilities,
];
