The RangeSlider component is a form control that allows a user to specify a numeric value which must be no less than a given value, and no more than another given value.

### Basic Range Slider

```jsx
import { RangeSlider } from '@alaneicker/react-component-library';

<RangeSlider
  label="Select Amount"
  errorText="This field is required"
  hasError={false}
  min="100"
  max="1000"
  step="100"
  value="400"
  onChange={(value) => console.log(value)}
/>;
```

### Range Slider With Ticks and Labels

```jsx
import { RangeSlider } from '@alaneicker/react-component-library';

<RangeSlider
  label="Select Amount"
  errorText="This field is required"
  hasError={false}
  hideLabelsOnMobile={true}
  min="100"
  max="1000"
  step="100"
  value="400"
  ticks={[
    { text: '$100', val: '100' },
    { text: '$200', val: '200' },
    { text: '$300', val: '300' },
    { text: '$400', val: '400' },
    { text: '$500', val: '500' },
    { text: '$600', val: '600' },
    { text: '$700', val: '700' },
    { text: '$800', val: '800' },
    { text: '$900', val: '900' },
    { text: '$1000', val: '1000' },
  ]}
  onChange={(value) => console.log(value)}
/>;
```

### Disabled State

```jsx
import { RangeSlider } from '@alaneicker/react-component-library';

<RangeSlider
  label="Select Amount"
  disabled={true}
  hideLabelsOnMobile={true}
  min="100"
  max="1000"
  step="100"
  value="400"
  onChange={(value) => console.log(value)}
  ticks={[
    { text: '$100', val: '100' },
    { text: '$200', val: '200' },
    { text: '$300', val: '300' },
    { text: '$400', val: '400' },
    { text: '$500', val: '500' },
    { text: '$600', val: '600' },
    { text: '$700', val: '700' },
    { text: '$800', val: '800' },
    { text: '$900', val: '900' },
    { text: '$1000', val: '1000' },
  ]}
/>;
```
