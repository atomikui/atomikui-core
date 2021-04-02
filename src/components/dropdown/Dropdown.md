The Dropdown component is a form control that displays a list of selectable options.

### Default State

```jsx
import { useState } from 'react';
import { Dropdown } from '@atomikui/core';

const [value, setValue] = useState('');

<Dropdown
  label="What's your favorite Color?"
  errorText="Please select a color"
  onChange={(e) => setValue(e.target.value)}
  value={value}
  defaultOption={{
    text: 'Select a Color',
    value: '',
  }}
  options={[
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' },
  ]}
/>;
```

### Error State

```jsx
import { useState } from 'react';
import { Dropdown } from '@atomikui/core';

const [value, setValue] = useState('');

<Dropdown
  label="What's your favorite Color?"
  errorText="Please select a color"
  hasError={!value}
  required
  onChange={(e) => setValue(e.target.value)}
  value={value}
  defaultOption={{
    text: 'Select a Color',
    value: '',
  }}
  options={[
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' },
  ]}
/>;
```

### Disabled State

```jsx
import { useState } from 'react';
import { Dropdown } from '@atomikui/core';

<Dropdown
  label="What's your favorite a Color?"
  errorText="Please select a color"
  required
  value="Orange"
  defaultOption={{
    text: 'Select a Color',
    value: '',
  }}
  disabled
  options={[
    { text: 'Red', value: 'Red' },
    { text: 'Orange', value: 'Orange' },
    { text: 'Yellow', value: 'Yellow' },
    { text: 'Green', value: 'Green' },
    { text: 'Blue', value: 'Blue' },
    { text: 'Purple', value: 'Purple' },
  ]}
/>;
```
