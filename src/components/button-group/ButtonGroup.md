### Managing Button Group State

The `ButtonGroup` component offers an `onChange` callback that can be attached to each item to return the selected index and value. The eample below shows how state can be managed externally.

```jsx
import { useState } from 'react';
import { ButtonGroup } from '@alaneicker/react-component-library';

const [checked, setAsChecked] = useState(1);
const [checkedValue, setCheckedValue] = useState('orange');

const options = [
  {
    text: 'Red',
    value: 'red',
  },
  {
    text: 'Orange',
    value: 'orange',
  },
  {
    text: 'Green',
    value: 'green',
  },
  {
    text: 'Blue',
    value: 'blue',
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
        text: 'Red',
        value: 'red',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Orange',
        value: 'orange',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Green',
        value: 'green',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Blue',
        value: 'blue',
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
        text: 'Red',
        value: 'red',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Orange',
        value: 'orange',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Green',
        value: 'green',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Blue',
        value: 'blue',
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
        text: 'Red',
        value: 'red',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Orange',
        value: 'orange',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Green',
        value: 'green',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Blue',
        value: 'blue',
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
        text: 'Red',
        value: 'red',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Orange',
        value: 'orange',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Green',
        value: 'green',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Blue',
        value: 'blue',
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
        text: 'Red',
        value: 'red',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Orange',
        value: 'orange',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Green',
        value: 'green',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Blue',
        value: 'blue',
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
        text: 'Red',
        value: 'red',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Orange',
        value: 'orange',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Green',
        value: 'green',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Blue',
        value: 'blue',
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
        text: 'Red',
        value: 'red',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Orange',
        value: 'orange',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Green',
        value: 'green',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Blue',
        value: 'blue',
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
        text: 'Red',
        value: 'red',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Orange',
        value: 'orange',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Green',
        value: 'green',
        onChange: (details) => {
          console.log(details);
        },
      },
      {
        text: 'Blue',
        value: 'blue',
        onChange: (details) => {
          console.log(details);
        },
      },
    ]}
  />
</>;
```
