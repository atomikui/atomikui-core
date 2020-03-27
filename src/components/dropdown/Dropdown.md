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
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' }
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
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' }
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
  value="Orange"
  disabled
  options={[
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' }
  ]}
/>
```