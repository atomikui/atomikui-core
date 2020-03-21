```jsx
import { Dropdown } from '@alaneicker/react-component-library';

<Dropdown 
  label="Select a Color"
  defaultValue="green"
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