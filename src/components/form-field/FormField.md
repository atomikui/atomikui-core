### Text Field

```jsx
import { useState } from 'react';
import { FormField } from '@alaneicker/react-component-library';

const [value, setValue] = useState('');

<FormField
  type="text" 
  label="Search" 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Textarea

```jsx
import { useState } from 'react';
import { FormField } from '@alaneicker/react-component-library';

const [value, setValue] = useState('');

<FormField
  type="textarea" 
  label="Enter your comments" 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Help Text

```jsx
import { useState } from 'react';
import { FormField } from '@alaneicker/react-component-library';

const [value, setValue] = useState('');

<FormField
  type="text" 
  label="Phone Number" 
  value={value}
  helpText="Expected format: (000) 000-0000"
  onChange={(e) => setValue(e.target.value)}
/>
```

### Error State

```jsx
import { useState } from 'react';
import { FormField } from '@alaneicker/react-component-library';

const [value, setValue] = useState('');

<FormField
  type="text" 
  label="Search" 
  value={value}
  hasError={!value}
  errorText="This fields is required"
  onChange={(e) => setValue(e.target.value)}
/>
```

### Read Only

```jsx
import { useState } from 'react';
import { FormField } from '@alaneicker/react-component-library';

<FormField
  type="text" 
  label="Search" 
  value="This field is read only"
  readOnly
/>
```

### Disabled

```jsx
import { useState } from 'react';
import { FormField } from '@alaneicker/react-component-library';

<FormField
  type="text" 
  label="Search" 
  value="This field is disabled"
  disabled
/>
```