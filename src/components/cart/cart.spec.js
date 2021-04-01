import generateAccessibilityTests from '../../../scripts/generateAccessibilityTests';

const component = 'Cart';

generateAccessibilityTests({
  path: `Payment/${component}`,
  component,
});
