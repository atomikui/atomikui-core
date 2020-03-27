### Checkbox

```jsx
import { useState } from 'react';
import { FormOption } from '@alaneicker/react-component-library';

const [checked, setChecked] = useState(false);

<FormOption 
  label="I agree to the terms & conditions" 
  checked={checked}
  name="checkbox1"
  onChange={() => setChecked(!checked)}
/>
```

### Radio Button

```jsx
import { useState } from 'react';
import { FormOption } from '@alaneicker/react-component-library';

const [formOptions, setFormOptions] = useState([
  { label: 'Option 1', name: 'radio1', checked: true },
  { label: 'Option 2', name: 'radio1', checked: false },
  { label: 'Option 3', name: 'radio1', checked: false }
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

const [checkBoxChecked, setCheckboxChecked] = useState(true);
const [radioChecked, setRadioChecked] = useState(true);

<>
  <FormOption 
    label="I agree to the terms & conditions" 
    name="checkbox2" 
    errorText="Please agree to the terms" 
    hasError={checkBoxChecked}
    checked={!checkBoxChecked}
    onChange={() => setCheckboxChecked(!checkBoxChecked)}
  />
  <FormOption 
    type="radio" 
    label="Option 1" 
    name="radio2" 
    errorText="Select an option" 
    hasError={radioChecked}
    checked={!radioChecked}
    onChange={() => setRadioChecked(false)}
  />
</>
```

### Disabled State

```jsx
import { FormOption } from '@alaneicker/react-component-library';

<>
  <FormOption 
    label="I agree to the terms & conditions" 
    errorText="Please agree to the terms" 
    name="checkbox3"
    disabled 
  />
  <FormOption 
    type="radio" 
    label="Option 1" 
    name="radio3" 
    errorText="Select an option" 
    disabled
  />
  <FormOption 
    label="I agree to the terms & conditions" 
    errorText="Please agree to the terms" 
    name="checkbox4"
    disabled 
    checked 
  />
  <FormOption 
    type="radio" 
    label="Option 1" 
    name="radio4" 
    errorText="Select an option" 
    disabled 
    checked 
  />
</>
```