The Stepper is used to represent a series of steps that have been or need to be completed.

### Default Stepper

```jsx
import { Stepper } from '@atomikui/core';

<Stepper title="stepper 1">
  <Stepper.Item label="Personal Info" href="/personal-info" isComplete={true}>
    1
  </Stepper.Item>
  <Stepper.Item label="Contact Info" href="/contact-info" isActive={true}>
    2
  </Stepper.Item>
  <Stepper.Item label="Billing Info" href="/billing-info">
    3
  </Stepper.Item>
  <Stepper.Item label="Summary" href="/summary">
    4
  </Stepper.Item>
</Stepper>;
```

### Stepper with Labels on Top

```jsx
import { Stepper, Step } from '@atomikui/core';

<Stepper title="stepper 2" topLabels>
  <Stepper.Item label="Personal Info" href="/personal-info" isComplete={true}>
    1
  </Stepper.Item>
  <Stepper.Item label="Contact Info" href="/contact-info" isActive={true}>
    2
  </Stepper.Item>
  <Stepper.Item label="Billing Info" href="/billing-info">
    3
  </Stepper.Item>
  <Stepper.Item label="Summary" href="/summary">
    4
  </Stepper.Item>
</Stepper>;
```

### Stepper with Inline Labels

```jsx
import { Stepper, Step } from '@atomikui/core';

<Stepper title="stepper 3" inline>
  <Stepper.Item label="Personal Info" href="/personal-info" isComplete={true}>
    1
  </Stepper.Item>
  <Stepper.Item label="Contact Info" href="/contact-info" isActive={true}>
    2
  </Stepper.Item>
  <Stepper.Item label="Billing Info" href="/billing-info">
    3
  </Stepper.Item>
  <Stepper.Item label="Summary" href="/summary">
    4
  </Stepper.Item>
</Stepper>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="StepperItem" />;
```

### Stepper
