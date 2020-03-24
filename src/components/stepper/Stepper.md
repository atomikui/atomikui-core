```jsx
import { useState } from 'react';
import { Stepper } from '@alaneicker/react-component-library';

const [steps, setSteps] = useState([
  { label: 'Personal Info', isComplete: true },
  { label: 'Contact Info', isActive: true },
  { label: 'Billing Info', isComplete: false },
  { label: 'Summary', isComplete: false },
]);

<Stepper steps={steps} />
```