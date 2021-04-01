import generateAccessibilityTests from '../../../scripts/generateAccessibilityTests';

const component = 'Wallet';

generateAccessibilityTests({
  path: `Payment/${component}`,
  component,
});
