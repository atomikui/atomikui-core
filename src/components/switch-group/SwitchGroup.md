A switch panel is a grouped series of switches that represent related controls.

```jsx
import { useState } from 'react';
import shortid from 'shortid';
import { SwitchGroup, Switch } from '@atomikui/core';

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

<SwitchGroup label="Subscriber Settings">
  {switches.map(({ label, checked, disabled }, index) => (
    <Switch
      key={shortid.generate()}
      label={label}
      onChange={() => handleChange(index)}
      checked={checked}
      disabled={disabled}
    />
  ))}
</SwitchGroup>;
```
