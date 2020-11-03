import generateAccessibilityTests from '../../../scripts/generateAccessibilityTests';

const component = 'Headline';

generateAccessibilityTests({
  path: `Content/${component}`,
  component,
});
