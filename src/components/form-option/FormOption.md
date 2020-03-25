### Checkbox

```jsx
import { useState } from 'react';
import { FormOption } from '@alaneicker/react-component-library';

const [checked, setChecked] = useState(false);

<FormOption 
  label="I agree to the terms & conditions" 
  checked={checked}
  onChange={() => setChecked(!checked)}
/>
```

### Radio Button

```jsx
import { useState } from 'react';
import { FormOption } from '@alaneicker/react-component-library';

const [formOptions, setFormOptions] = useState([
  { label: 'Option 1', name: 'option', checked: true },
  { label: 'Option 2', name: 'option', checked: false },
  { label: 'Option 3', name: 'option', checked: false }
]);

const onChange = (index) => {
  const updatesFormOprions = formOptions.map((formOption, i) => {
    return { ...formOption, checked: i === index ? true : false }
  });

  setFormOptions(updatesFormOprions);
};

<>
  {formOptions.map(({ label, name, checked }, i) => (
    <FormOption 
      type="radio" 
      label={label} 
      name={name} 
      checked={checked} 
      onChange={() => onChange(i)}
    />
  ))}
</>
```

### Error State

```jsx
import { useState } from 'react';
import { FormOption } from '@alaneicker/react-component-library';

<>
  <FormOption label="I agree to the terms & conditions" errorText="Please agree to the terms" hasError />
  <FormOption type="radio" label="Option 1" name="option" errorText="Select an option" hasError />
</>
```