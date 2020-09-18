The Stepper is used to represent a series of steps that have been or need to be completed.

### Default Stepper

```jsx
import { Stepper, Step } from '@alaneicker/atomik-ui';

<Stepper title="stepper 1">
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

### Stepper with Labels on Top

```jsx
import { Stepper, Step } from '@alaneicker/atomik-ui';

<Stepper title="stepper 2" topLabels>
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

### Stepper with Inline Labels

```jsx
import { Stepper, Step } from '@alaneicker/atomik-ui';

<Stepper title="stepper 3" inline>
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

#### API

[`<Step />`](https://alaneicker1975.github.io/atomik-ui/#/Navigation/Step)
