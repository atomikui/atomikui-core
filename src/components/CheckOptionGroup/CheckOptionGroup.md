The CheckOptionGroup component can be used to create groups of related checkboxes or radio buttons.

### Checkbox Group

```jsx
import { useState } from 'react';
import { CheckOptionGroup, CheckOption } from '@atomikui/core';

const [options, setOptions] = useState([
  { label: 'Pizza', name: 'pizza', checked: false },
  { label: 'Hamburgers', name: 'hamburgers', checked: false },
  { label: 'French Fries', name: 'frenchFries', checked: false },
  { label: 'Sushi', name: 'sushi', checked: false },
  { label: 'Pasta', name: 'pasta', checked: false },
  { label: 'Cake', name: 'cake', checked: false },
]);

const handleChange = (index) => {
  const option = options[index];
  setOptions(
    options.map((option, idx) =>
      index === idx ? { ...option, checked: !option.checked } : option,
    ),
  );
};

<CheckOptionGroup
  label="Select all of your favorite foods"
  onChange={(index) => handleChange(index)}
>
  {options.map((props, index) => (
    <CheckOption key={`checkbox-${index}`} {...props} />
  ))}
</CheckOptionGroup>;
```

### Radio Button Group

```jsx
import { useState } from 'react';
import { CheckOptionGroup, CheckOption } from '@atomikui/core';

const [options, setOptions] = useState([
  { type: 'radio', name: 'food', label: 'Pizza', checked: false },
  { type: 'radio', name: 'food', label: 'Hamburgers', checked: false },
  { type: 'radio', name: 'food', label: 'French Fries', checked: false },
  { type: 'radio', name: 'food', label: 'Sushi', checked: false },
  { type: 'radio', name: 'food', label: 'Pasta', checked: false },
  { type: 'radio', name: 'food', label: 'Cake', checked: false },
]);

const handleChange = (index) => {
  const option = options[index];
  setOptions(
    options.map((option, idx) => ({
      ...option,
      checked: index === idx ? true : false,
    })),
  );
};

<CheckOptionGroup
  label="Select one favorite food"
  onChange={(index) => handleChange(index)}
>
  {options.map((props, index) => (
    <CheckOption key={`readio-${index}`} {...props} />
  ))}
</CheckOptionGroup>;
```

### Responsive Grid layout

The `cols` prop can be used to set the grid column widths at responsive breakpoints.

```jsx
import { useState } from 'react';
import { CheckOptionGroup, CheckOption } from '@atomikui/core';

const [options, setOptions] = useState([
  { label: 'Pizza', name: 'pizza', checked: false },
  { label: 'Hamburgers', name: 'hamburgers', checked: false },
  { label: 'French Fries', name: 'frenchFries', checked: false },
  { label: 'Sushi', name: 'sushi', checked: false },
  { label: 'Pasta', name: 'pasta', checked: false },
  { label: 'Cake', name: 'cake', checked: false },
]);

const handleChange = (index) => {
  const option = options[index];
  setOptions(
    options.map((option, idx) =>
      index === idx ? { ...option, checked: !option.checked } : option,
    ),
  );
};

<CheckOptionGroup
  cols={{ xs: 12, sm: 6, md: 6, lg: 6 }}
  label="Select all of your favorite foods"
  onChange={(index) => handleChange(index)}
>
  {options.map((props, index) => (
    <CheckOption key={`checkbox-${index}`} {...props} />
  ))}
</CheckOptionGroup>;
```
