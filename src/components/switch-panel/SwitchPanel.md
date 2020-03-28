```jsx
import { useState } from 'react';
import { SwitchPanel, Switch } from '@alaneicker/react-component-library';

const [switches, setSwitches] = useState([
  {
    label: 'Send me notifications',
    checked: false,
  },
  {
    label: 'Subscribe me to the newsletter',
    checked: true,
    disabled: true,
  },
  {
    label: 'Set as default account',
    checked: false,
  },
]);

const handleChange = index => {
  setSwitches(
    switches.map((item, i) => {
      return i === index ? { ...item, checked: !item.checked } : item;
    }),
  );
};

<SwitchPanel>
  {switches.map(({ label, checked, disabled }, i) => (
    <Switch
      key={Math.random()}
      label={label}
      onChange={() => handleChange(i)}
      checked={checked}
      disabled={disabled}
    />
  ))}
</SwitchPanel>;
```
