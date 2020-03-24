```jsx
import { Stepper } from '@alaneicker/react-component-library';

<Stepper steps={[
  { label: 'Personal Info', isComplete: true },
  { label: 'Contact Info', isActive: true },
  { label: 'Billing Info', isComplete: false },
  { label: 'Summary', isComplete: false },
]} />
```