```jsx
import { Stepper } from '@alaneicker/react-component-library';

<Stepper steps={[
  { label: 'Personal Info', href: '/personal-info', isComplete: true },
  { label: 'Contact Info', href: '/contact-info', isActive: true },
  { label: 'Billing Info', href: '/billing-info', isComplete: false },
  { label: 'Summary', href: '/summary', isComplete: false },
]} />
```