### Default State

```jsx
import { useState } from 'react';
import { Dropdown } from '@alaneicker/react-component-library';

const [value, setValue] = useState('');

<Dropdown 
  label="Select a Color"
  errorText="Please select a color"
  onChange={(e) => setValue(e.target.value)}
  value={value}
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
import { useState } from 'react';
import { Dropdown } from '@alaneicker/react-component-library';

const [value, setValue] = useState('');

<Dropdown 
  label="Select a Color"
  errorText="Please select a color"
  hasError={!value}
  required
  onChange={(e) => setValue(e.target.value)}
  value={value}
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