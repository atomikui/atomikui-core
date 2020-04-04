```jsx
import { DatePicker } from '@alaneicker/react-component-library';

<>
  <DatePicker
    label="Select a Date"
    helpText="Expected Format: MM/DD/YYYY"
    onChange={(date) => console.log(date)}
    value="04/08/2020"
  />
</>;
```

### Disabled

The `disabled` prop prevents any user input on the `DatePicker` input and disables calendar date selection.

```jsx
import { DatePicker } from '@alaneicker/react-component-library';

<>
  <DatePicker
    label="Select a Date"
    onChange={(date) => console.log(date)}
    value="04/08/2020"
    disabled
  />
</>;
```

### Read Only

The `readOnly` prop prevents user input on the `DatePicker` input, but still allows calendar date selection.

```jsx
import { DatePicker } from '@alaneicker/react-component-library';

<>
  <DatePicker
    label="Select a Date"
    onChange={(date) => console.log(date)}
    value="04/08/2020"
    readOnly
  />
</>;
```
