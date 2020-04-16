The `Stepper` is used to represent a series of steps that have been or need to be completed.

### Default

```jsx
import { Stepper, Step } from '@alaneicker/react-component-library';

<Stepper>
  <Step label="Personal Info" href="/personal-info" isComplete={true}>
    1
  </Step>
  <Step label="Contact Info" href="/contact-info" isActive={true}>
    2
  </Step>
  <Step label="Billing Info" href="/billing-info">
    3
  </Step>
  <Step label="Summary" href="/summary">
    4
  </Step>
</Stepper>;
```

### Inline

```jsx
import { Stepper, Step } from '@alaneicker/react-component-library';

<Stepper inline>
  <Step label="Personal Info" href="/personal-info" isComplete={true}>
    1
  </Step>
  <Step label="Contact Info" href="/contact-info" isActive={true}>
    2
  </Step>
  <Step label="Billing Info" href="/billing-info">
    3
  </Step>
  <Step label="Summary" href="/summary">
    4
  </Step>
</Stepper>;
```
