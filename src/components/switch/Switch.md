### Default Layout (Flexbox)

```jsx
import { useState } from 'react';
import { Switch } from '@alaneicker/react-component-library';

const [isChecked, setIsChecked] = useState(false);

const handleChange = checked => {
  setIsChecked(!isChecked);
};

<Switch label="Send me notifications" onChange={handleChange} defaultChecked={isChecked} />
```

### Stacked Layout

```jsx
import { useState } from 'react';
import { Switch } from '@alaneicker/react-component-library';

const [isChecked, setIsChecked] = useState(false);

const handleChange = checked => {
  setIsChecked(!isChecked);
};

<Switch layout="stacked" label="Send me notifications" onChange={handleChange} defaultChecked={isChecked} />
```

### Error State

```jsx
import { useState } from 'react';
import { Switch } from '@alaneicker/react-component-library';

const [isChecked, setIsChecked] = useState(false);

const handleChange = checked => {
  setIsChecked(!isChecked);
};

<Switch 
  label="Send me notifications" 
  onChange={handleChange} 
  defaultChecked={isChecked}
  errorText="This field is required"
  hasError
  required />
```