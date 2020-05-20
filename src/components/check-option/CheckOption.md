The CheckOption component is a form control that renders a checkbox and radio button. Use this component when displaying a list of choices.

### Checkbox

```jsx
import { useState } from 'react';
import { CheckOption } from '@alaneicker/atomik-ui';

const [checked, setChecked] = useState(false);

<CheckOption
  label="I agree to the terms & conditions"
  checked={checked}
  name="checkbox1"
  onChange={() => setChecked(!checked)}
/>;
```

### Radio Button

```jsx
import { useState } from 'react';
import { CheckOption } from '@alaneicker/atomik-ui';

const [checkOptions, setCheckOptions] = useState([
  { label: 'Option 1', name: 'radio1', checked: true },
  { label: 'Option 2', name: 'radio1', checked: false },
  { label: 'Option 3', name: 'radio1', checked: false },
]);

const onChange = (index) => {
  const updatesCheckOprions = checkOptions.map((checkOption, i) => {
    return { ...checkOption, checked: i === index ? true : false };
  });

  setCheckOptions(updatesCheckOprions);
};

<>
  {checkOptions.map(({ label, name, checked }, index) => (
    <div>
      <CheckOption
        key={`form-option-${index}`}
        type="radio"
        label={label}
        name={name}
        checked={checked}
        onChange={() => onChange(index)}
      />
    </div>
  ))}
</>;
```

### Error State

```jsx
import { useState } from 'react';
import { CheckOption } from '@alaneicker/atomik-ui';

const [checkBoxChecked, setCheckboxChecked] = useState(true);
const [radioChecked, setRadioChecked] = useState(true);

<>
  <CheckOption
    label="I agree to the terms & conditions"
    name="checkbox2"
    errorText="Please agree to the terms"
    hasError={checkBoxChecked}
    checked={!checkBoxChecked}
    onChange={() => setCheckboxChecked(!checkBoxChecked)}
  />
  <CheckOption
    type="radio"
    label="Option 1"
    name="radio2"
    errorText="Select an option"
    hasError={radioChecked}
    checked={!radioChecked}
    onChange={() => setRadioChecked(false)}
  />
</>;
```

### Disabled State

```jsx
import { CheckOption } from '@alaneicker/atomik-ui';

<>
  <CheckOption
    label="I agree to the terms & conditions"
    errorText="Please agree to the terms"
    name="checkbox3"
    disabled
  />
  <CheckOption
    type="radio"
    label="Option 1"
    name="radio3"
    errorText="Select an option"
    disabled
  />
  <CheckOption
    label="I agree to the terms & conditions"
    errorText="Please agree to the terms"
    name="checkbox4"
    disabled
    checked
  />
  <CheckOption
    type="radio"
    label="Option 1"
    name="radio4"
    errorText="Select an option"
    disabled
    checked
  />
</>;
```
