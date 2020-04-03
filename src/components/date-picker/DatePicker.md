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

```jsx
import { DatePicker } from '@alaneicker/react-component-library';

<>
  <DatePicker
    label="Select a Date"
    helpText="Expected Format: MM/DD/YYYY"
    onChange={(date) => console.log(date)}
    value="04/08/2020"
    disabled
  />
</>;
```

### Read Only

```jsx
import { DatePicker } from '@alaneicker/react-component-library';

<>
  <DatePicker
    label="Select a Date"
    helpText="Expected Format: MM/DD/YYYY"
    onChange={(date) => console.log(date)}
    value="04/08/2020"
    readOnly
  />
</>;
```
