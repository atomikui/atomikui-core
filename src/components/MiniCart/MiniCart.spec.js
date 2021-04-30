import generateAccessibilityTests from '../../../scripts/generateAccessibilityTests';

const component = 'MintCart';

generateAccessibilityTests({
  path: `Payment/${component}`,
  component,
});
