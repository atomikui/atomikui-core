The DatePicker allows the user to either enter a date manually via input or select a date from the calendar widget.

```jsx
import { DatePicker } from '@atomikui/core';

<>
  <DatePicker
    label="Select a Date"
    helpText="Expected Format: MM/DD/YYYY"
    value="05/22/2020"
    onChange={(date) => console.log(date)}
  />
</>;
```

### Disabled

The `disabled` prop prevents any user input on the DatePicker input and disables calendar date selection.

```jsx
import { DatePicker } from '@atomikui/core';

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

The `readOnly` prop prevents user input on the DatePicker input, but still allows calendar date selection.

```jsx
import { DatePicker } from '@atomikui/core';

<>
  <DatePicker
    label="Select a Date"
    onChange={(date) => console.log(date)}
    value="04/08/2020"
    readOnly
  />
</>;
```
