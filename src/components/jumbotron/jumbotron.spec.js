import generateAccessibilityTests from '../../../scripts/generateAccessibilityTests';

const component = 'Jumbotron';

generateAccessibilityTests({
  path: `Containers/${component}`,
  component,
});
