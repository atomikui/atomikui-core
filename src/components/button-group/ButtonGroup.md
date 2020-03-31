### Managing Button Group State

The `ButtonGroup` component offers an `onChange` callback that can be attached to each item to return the selected index and value. The eample below shows how state can be managed externally.

```jsx
import { useState } from 'react';
import { ButtonGroup } from '@alaneicker/react-component-library';

const [checked, setAsChecked] = useState(1);
const [checkedValue, setCheckedValue] = useState('Option');

const options = [
  {
    text: 'Acura',
    value: 'Acura',
  },
  {
    text: 'Chevrolet',
    value: 'Chevrolet',
  },
  {
    text: 'Ford',
    value: 'Ford',
  },
  {
    text: 'Volkswagen',
    value: 'Volkswagen',
  },
];

<ButtonGroup
  label="Favorite Car Brand"
  options={options.map((option, i) => {
    const onChange = ({ value, index }) => {
      setAsChecked(index);
      setCheckedValue(value);
    };

    return i === checked
      ? {
          ...option,
          checked: true,
          onchange,
        }
      : { ...option, onChange };
  })}
/>;
```

### Button Group Variants

Variants include `Primary`, `Secondary`, and `Tertiary`.

```jsx
import { ButtonGroup } from '@alaneicker/react-component-library';

<>
  <ButtonGroup
    label="Default Button Group"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Primary Button Group"
    variant="primary"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Secondary Button Group"
    variant="secondary"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Tertiary Button Group"
    variant="tertiary"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
</>;
```

### button Group Sizes

Sizes include `sm`, `md`, and `lg`.

```jsx
import { ButtonGroup } from '@alaneicker/react-component-library';

<>
  <ButtonGroup
    label="Small Button Group"
    size="sm"
    variant="primary"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Medium Button Group"
    size="md"
    variant="primary"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Default Button Group"
    variant="primary"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
  <ButtonGroup
    label="Large Button Group"
    size="lg"
    variant="primary"
    options={[
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Option',
        value: 'Option',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
</>;
```

### Flexible Button Group

A `ButtonGroup` with many options do not work well on smaller devices. In this case, it is recommended to use a `DropDown` menu to convey the list of options.

```jsx
import { ButtonGroup } from '@alaneicker/react-component-library';

<ButtonGroup
  label="Favorite Car Brand"
  options={[
    {
      text: 'Acura',
      value: 'Acura',
    },
    {
      text: 'Chevrolet',
      value: 'Chevrolet',
    },
    {
      text: 'Ford',
      value: 'Ford',
    },
    {
      text: 'Volkswagen',
      value: 'Volkswagen',
    },
  ]}
  stretch
/>;
```
