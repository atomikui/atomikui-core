A switch panel is a grouped series of switches that represent related controls.

```jsx
import { useState } from 'react';
import { SwitchPanel, Switch } from '@alaneicker/atomik-ui';

const [switches, setSwitches] = useState([
  {
    label: 'Send me notifications',
    checked: true,
  },
  {
    label: 'Subscribe me to the newsletter',
    checked: true,
  },
  {
    label: 'Set as default account',
    checked: false,
  },
]);

const handleChange = (index) => {
  setSwitches(
    switches.map((item, i) => {
      return i === index ? { ...item, checked: !item.checked } : item;
    }),
  );
};

<SwitchPanel label="Subscriber Settings">
  {switches.map(({ label, checked, disabled }, index) => (
    <Switch
      key={`switch-${index}`}
      label={label}
      onChange={() => handleChange(index)}
      checked={checked}
      disabled={disabled}
    />
  ))}
</SwitchPanel>;
```
