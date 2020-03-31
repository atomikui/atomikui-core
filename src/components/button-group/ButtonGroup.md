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

### Button Group Variations

```jsx
import { ButtonGroup } from '@alaneicker/react-component-library';

<>
  <ButtonGroup
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

```jsx
import { ButtonGroup } from '@alaneicker/react-component-library';

<>
  <ButtonGroup
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
