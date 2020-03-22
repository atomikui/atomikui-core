```jsx
import { useState } from 'react';
import { SwitchPanel, Switch } from '@alaneicker/react-component-library';

const [switches, setSwitches] = useState([
  {
    label: 'Send me notifications',
    defaultChecked: true,
  },
  {
    label: 'Subscribe me to the newsletter',
    defaultChecked: false,
  },
  {
    label: 'Set as default account',
    defaultChecked: false,
  }
]);

const handleChange = index => {
  setSwitches(
    switches.map((item, i) => {
      return i === index ? { ...item, defaultChecked: !item.defaultChecked } : item;
    })
  );
};

<SwitchPanel>
  {switches.map(({ label, defaultChecked }, i) => (
    <Switch 
      key={Math.random()}
      label={label} 
      onChange={() => handleChange(i)} 
      defaultChecked={defaultChecked}
    />
  ))}
</SwitchPanel>
```