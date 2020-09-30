import generateAccessibilityTests from '../../../scripts/generateAccessibilityTests';

const component = 'ChatWindow';

generateAccessibilityTests({
  path: `Containers/${component}`,
  component,
});
