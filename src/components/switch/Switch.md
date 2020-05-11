Switches toggle the state of a single setting on or off.

### Default Layout (Flexbox)

```jsx
import { useState } from 'react';
import { Switch } from '@alaneicker/atomik-ui';

const [isChecked, setIsChecked] = useState(false);

const handleChange = (checked) => {
  setIsChecked(!isChecked);
};

<Switch
  label="Send me notifications"
  onChange={handleChange}
  checked={isChecked}
/>;
```

### Stacked Layout

```jsx
import { useState } from 'react';
import { Switch } from '@alaneicker/atomik-ui';

const [isChecked, setIsChecked] = useState(false);

const handleChange = (checked) => {
  setIsChecked(!isChecked);
};

<Switch
  layout="stacked"
  label="Send me notifications"
  onChange={handleChange}
  checked={isChecked}
/>;
```

### Error State

```jsx
import { useState } from 'react';
import { Switch } from '@alaneicker/atomik-ui';

const [isChecked, setIsChecked] = useState(false);

const handleChange = (checked) => {
  setIsChecked(!isChecked);
};

<Switch
  label="Send me notifications"
  onChange={handleChange}
  checked={isChecked}
  errorText="This field is required"
  hasError={!isChecked}
  required
/>;
```

### Disabled State

```jsx
import { Switch } from '@alaneicker/atomik-ui';

<Switch
  label="Send me notifications"
  checked={false}
  disabled={true}
  required
/>;
```
