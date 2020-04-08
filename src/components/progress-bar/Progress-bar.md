### Basic Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/react-component-library';

const now = 60;

<>
  <ProgressBar now={now} label={`${now}%`} />
</>;
```

### Theme Variants

```jsx
import { ProgressBar } from '@alaneicker/react-component-library';

const variants = [
  { now: 60, variant: 'success' },
  { now: 40, variant: 'warning' },
  { now: 50, variant: 'info' },
  { now: 80, variant: 'error' },
];

<>
  {variants.map(({ now, variant, animated }, index) => (
    <ProgressBar
      key={`progress-bar-${index}`}
      variant={variant}
      now={now}
      label={`${now}%`}
      animated={animated}
    />
  ))}
</>;
```

### Animated Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/react-component-library';

const variants = [
  { now: 70, variant: '', animated: true },
  { now: 60, variant: 'success', animated: true },
  { now: 40, variant: 'warning', animated: true },
  { now: 50, variant: 'info', animated: true },
  { now: 80, variant: 'error', animated: true },
];

<>
  {variants.map(({ now, variant, animated }, index) => (
    <ProgressBar
      key={`progress-bar-${index}`}
      variant={variant}
      now={now}
      animated={animated}
    />
  ))}
</>;
```
