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
    { text: 'red', value: 'Red' },
    { text: 'orange', value: 'Orange' },
    { text: 'yellow', value: 'Yellow' },
    { text: 'green', value: 'Green' },
    { text: 'blue', value: 'Blue' },
    { text: 'purple', value: 'Purple' }
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
    { text: 'red', value: 'Red' },
    { text: 'orange', value: 'Orange' },
    { text: 'yellow', value: 'Yellow' },
    { text: 'green', value: 'Green' },
    { text: 'blue', value: 'Blue' },
    { text: 'purple', value: 'Purple' }
  ]}
/>
```

### Disabled State

```jsx
import { useState } from 'react';
import { Dropdown } from '@alaneicker/react-component-library';

<Dropdown 
  label="Select a Color"
  errorText="Please select a color"
  required
  value="orange"
  disabled
  options={[
    { text: 'red', value: 'Red' },
    { text: 'orange', value: 'Orange' },
    { text: 'yellow', value: 'Yellow' },
    { text: 'green', value: 'Green' },
    { text: 'blue', value: 'Blue' },
    { text: 'purple', value: 'Purple' }
  ]}
/>
```