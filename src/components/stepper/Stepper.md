The Stepper is used to represent a series of steps that have been or need to be completed.

### Default Stepper

```jsx
import { Stepper } from '@atomikui/core';

<Stepper title="stepper 1">
  <Stepper.Step label="Personal Info" href="/personal-info" isComplete={true}>
    1
  </Stepper.Step>
  <Stepper.Step label="Contact Info" href="/contact-info" isActive={true}>
    2
  </Stepper.Step>
  <Stepper.Step label="Billing Info" href="/billing-info">
    3
  </Stepper.Step>
  <Stepper.Step label="Summary" href="/summary">
    4
  </Stepper.Step>
</Stepper>;
```

### Stepper with Labels on Top

```jsx
import { Stepper, Step } from '@atomikui/core';

<Stepper title="stepper 2" topLabels>
  <Stepper.Step label="Personal Info" href="/personal-info" isComplete={true}>
    1
  </Stepper.Step>
  <Stepper.Step label="Contact Info" href="/contact-info" isActive={true}>
    2
  </Stepper.Step>
  <Stepper.Step label="Billing Info" href="/billing-info">
    3
  </Stepper.Step>
  <Stepper.Step label="Summary" href="/summary">
    4
  </Stepper.Step>
</Stepper>;
```

### Stepper with Inline Labels

```jsx
import { Stepper, Step } from '@atomikui/core';

<Stepper title="stepper 3" inline>
  <Stepper.Step label="Personal Info" href="/personal-info" isComplete={true}>
    1
  </Stepper.Step>
  <Stepper.Step label="Contact Info" href="/contact-info" isActive={true}>
    2
  </Stepper.Step>
  <Stepper.Step label="Billing Info" href="/billing-info">
    3
  </Stepper.Step>
  <Stepper.Step label="Summary" href="/summary">
    4
  </Stepper.Step>
</Stepper>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="Step" />;
```

### Stepper
