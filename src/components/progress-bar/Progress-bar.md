### Basic Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/react-component-library';

const now = 60;

<>
  <ProgressBar now={now} label={`${now}%`} />
</>
```

### Theme Variants

```jsx
import { ProgressBar } from '@alaneicker/react-component-library';

const now = 60;
const now2 = 40;
const now3 = 50;
const now4 = 80;

<>
  <ProgressBar variant="success" now={now} label={`${now}%`} />
  <ProgressBar variant="warning" now={now2} label={`${now2}%`} />
  <ProgressBar variant="info" now={now3} label={`${now3}%`} />
  <ProgressBar variant="error" now={now4} label={`${now4}%`} />
</>
```

### Animated Progress Bar

```jsx
import { ProgressBar } from '@alaneicker/react-component-library';

const now = 60;
const now2 = 40;
const now3 = 50;
const now4 = 80;

<>
  <ProgressBar variant="success" now={now} label={`${now}%`} animated />
  <ProgressBar variant="warning" now={now2} label={`${now2}%`} animated />
  <ProgressBar variant="info" now={now3} label={`${now3}%`} animated />
  <ProgressBar variant="error" now={now4} label={`${now4}%`} animated />
</>
```