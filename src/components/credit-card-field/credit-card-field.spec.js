import generateAccessibilityTests from '../../../scripts/generateAccessibilityTests';

const component = 'CreditCardField';

generateAccessibilityTests({
  path: `Experimental/${component}`,
  component,
});
