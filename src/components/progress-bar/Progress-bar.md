The ProgressBar component is used as an indicator quantitative progress.

### Basic Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

const now = 60;

<>
  <ProgressBar now={now} label={`${now}%`} />
</>;
```

### Theme Variants

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

<>
  <ProgressBar now={60} variant="success" />
  <ProgressBar now={40} variant="warning" />
  <ProgressBar now={50} variant="info" />
  <ProgressBar now={80} variant="error" />
</>;
```

### Animated Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/atomik-ui';

<>
  <ProgressBar now={70} animated />
  <ProgressBar now={60} variant="success" animated />
  <ProgressBar now={40} variant="warning" animated />
  <ProgressBar now={50} variant="info" animated />
  <ProgressBar now={80} variant="error" animated />
</>;
```
