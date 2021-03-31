const containers = require('./containers');
const content = require('./content');
const sassUtilities = require('./sass-utilities');
const dataDisplay = require('./data-display');
const experimental = require('./experimental');
const dom = require('./dom');
const gettingStarted = require('./getting-started');
const formControls = require('./form-controls');
const iconography = require('./iconography');
const informational = require('./informational');
const landmarks = require('./landmarks');
const layout = require('./layout');
const navigation = require('./navigation');
const providers = require('./providers');
const recipes = require('./recipes');
const wallet = require('./wallet');
const hiddenCompounds = require('./hidden-compounds');

module.exports = [
  gettingStarted,
  containers,
  content,
  dataDisplay,
  dom,
  formControls,
  iconography,
  informational,
  landmarks,
  layout,
  navigation,
  wallet,
  providers,
  experimental,
  recipes,
  sassUtilities,
  hiddenCompounds,
];
