### Default State

```jsx
import { Dropdown } from '@alaneicker/react-component-library';

<Dropdown 
  label="Select a Color"
  errorText="Please select a color"
  options={[
    { text: 'red', value: 'red' },
    { text: 'orange', value: 'orange' },
    { text: 'yellow', value: 'yellow' },
    { text: 'green', value: 'green' },
    { text: 'blue', value: 'blue' },
    { text: 'purple', value: 'purple' }
  ]}
/>
```

### Error State

```jsx
import { Dropdown } from '@alaneicker/react-component-library';

<Dropdown 
  label="Select a Color"
  errorText="Please select a color"
  hasError={true}
  required
  options={[
    { text: 'red', value: 'red' },
    { text: 'orange', value: 'orange' },
    { text: 'yellow', value: 'yellow' },
    { text: 'green', value: 'green' },
    { text: 'blue', value: 'blue' },
    { text: 'purple', value: 'purple' }
  ]}
/>
```