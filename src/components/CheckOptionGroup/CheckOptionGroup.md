The CheckOptionGroup component can be used to create groups of related checkboxes or radio buttons.

### Checkbox Group

```jsx
import { useState } from 'react';
import { CheckOptionGroup, CheckOption } from '@atomikui/core';

const [options, setOptions] = useState([
  { label: 'Pizza', name: 'pizza', defaultChecked: false },
  { label: 'Hamburgers', name: 'hamburgers', defaultChecked: false },
  { label: 'French Fries', name: 'frenchFries', defaultChecked: false },
  { label: 'Sushi', name: 'sushi', defaultChecked: false },
  { label: 'Pasta', name: 'pasta', defaultChecked: false },
  { label: 'Cake', name: 'cake', defaultChecked: false },
]);

const handleChange = (index) => {
  const option = options[index];
  setOptions(
    options.map((option, idx) =>
      index === idx
        ? { ...option, defaultChecked: !option.defaultChecked }
        : option,
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
  { type: 'radio', name: 'food', label: 'Pizza', defaultChecked: false },
  { type: 'radio', name: 'food', label: 'Hamburgers', defaultChecked: false },
  { type: 'radio', name: 'food', label: 'French Fries', defaultChecked: false },
  { type: 'radio', name: 'food', label: 'Sushi', defaultChecked: false },
  { type: 'radio', name: 'food', label: 'Pasta', defaultChecked: false },
  { type: 'radio', name: 'food', label: 'Cake', defaultChecked: false },
]);

const handleChange = (index) => {
  const option = options[index];
  setOptions(
    options.map((option, idx) => ({
      ...option,
      defaultChecked: index === idx ? true : false,
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
  { label: 'Pizza', name: 'pizza', defaultChecked: false },
  { label: 'Hamburgers', name: 'hamburgers', defaultChecked: false },
  { label: 'French Fries', name: 'frenchFries', defaultChecked: false },
  { label: 'Sushi', name: 'sushi', defaultChecked: false },
  { label: 'Pasta', name: 'pasta', defaultChecked: false },
  { label: 'Cake', name: 'cake', defaultChecked: false },
]);

const handleChange = (index) => {
  const option = options[index];
  setOptions(
    options.map((option, idx) =>
      index === idx
        ? { ...option, defaultChecked: !option.defaultChecked }
        : option,
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
