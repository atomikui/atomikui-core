The CheckOption component is a form control that renders a checkbox and radio button. Use this component when displaying a list of choices.

### Checkbox

```jsx
import { useState } from 'react';
import { CheckOption } from '@atomikui/core';

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
import shortid from 'shortid';
import { useState } from 'react';
import { CheckOption } from '@atomikui/core';

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
    <div key={shortid.generate()}>
      <CheckOption
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
import { CheckOption } from '@atomikui/core';

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
import { CheckOption } from '@atomikui/core';

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

### Checkbox Color Themes

There are many color themes to choose from. simplay pass in a `theme` prop with the color of your choice.

#### Dark Themes

```jsx
import { useState } from 'react';
import { CheckOption } from '@atomikui/core';

const [checked, setChecked] = useState(false);

<>
  <CheckOption theme="red" label="red" checked={true} />
  <CheckOption theme="pink" label="pink" checked={true} />
  <CheckOption theme="purple" label="purple" checked={true} />
  <CheckOption theme="deep-purple" label="deep-purple" checked={true} />
  <CheckOption theme="indigo" label="indigo" checked={true} />
  <CheckOption theme="blue" label="blue" checked={true} />
  <CheckOption theme="sky-blue" label="sky-blue" checked={true} />
  <CheckOption theme="cyan" label="cyan" checked={true} />
  <CheckOption theme="teal" label="teal" checked={true} />
  <CheckOption theme="green" label="green" checked={true} />
  <CheckOption theme="light-green" label="light-green" checked={true} />
  <CheckOption theme="lime" label="lime" checked={true} />
  <CheckOption theme="yellow" label="yellow" checked={true} />
  <CheckOption theme="light-orange" label="light-orange" checked={true} />
  <CheckOption theme="orange" label="orange" checked={true} />
  <CheckOption theme="deep-orange" label="deep-orange" checked={true} />
  <CheckOption theme="amber" label="amber" checked={true} />
  <CheckOption theme="brown" label="brown" checked={true} />
  <CheckOption theme="gray" label="gray" checked={true} />
  <CheckOption theme="blue-gray" label="blue-gray" checked={true} />
  <CheckOption theme="black" label="black" checked={true} />
</>;
```

#### Light Themes

```jsx
import { useState } from 'react';
import { CheckOption } from '@atomikui/core';

const [checked, setChecked] = useState(false);

<>
  <CheckOption theme="red" themeVariant="light" label="red" checked={true} />
  <CheckOption theme="pink" themeVariant="light" label="pink" checked={true} />
  <CheckOption
    theme="purple"
    themeVariant="light"
    label="purple"
    checked={true}
  />
  <CheckOption
    theme="deep-purple"
    themeVariant="light"
    label="deep-purple"
    checked={true}
  />
  <CheckOption
    theme="indigo"
    themeVariant="light"
    label="indigo"
    checked={true}
  />
  <CheckOption theme="blue" themeVariant="light" label="blue" checked={true} />
  <CheckOption
    theme="sky-blue"
    themeVariant="light"
    label="sky-blue"
    checked={true}
  />
  <CheckOption theme="cyan" themeVariant="light" label="cyan" checked={true} />
  <CheckOption theme="teal" themeVariant="light" label="teal" checked={true} />
  <CheckOption
    theme="green"
    themeVariant="light"
    label="green"
    checked={true}
  />
  <CheckOption
    theme="light-green"
    themeVariant="light"
    label="light-green"
    checked={true}
  />
  <CheckOption theme="lime" themeVariant="light" label="lime" checked={true} />
  <CheckOption
    theme="yellow"
    themeVariant="light"
    label="yellow"
    checked={true}
  />
  <CheckOption
    theme="light-orange"
    themeVariant="light"
    label="light-orange"
    checked={true}
  />
  <CheckOption
    theme="orange"
    themeVariant="light"
    label="orange"
    checked={true}
  />
  <CheckOption
    theme="deep-orange"
    themeVariant="light"
    label="deep-orange"
    checked={true}
  />
  <CheckOption
    theme="amber"
    themeVariant="light"
    label="amber"
    checked={true}
  />
  <CheckOption
    theme="brown"
    themeVariant="light"
    label="brown"
    checked={true}
  />
  <CheckOption theme="gray" themeVariant="light" label="gray" checked={true} />
  <CheckOption
    theme="blue-gray"
    themeVariant="light"
    label="blue-gray"
    checked={true}
  />
  <CheckOption
    theme="white"
    themeVariant="light"
    label="white"
    checked={true}
  />
</>;
```
