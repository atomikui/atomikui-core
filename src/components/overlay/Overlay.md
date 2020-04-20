The `Overlay` component is used to block user interaction while processes are taking place.

```jsx
import { useState } from 'react';
import { Overlay, Button } from '@alaneicker/react-component-library';

const [isActive, setIsActive] = useState(false);

<>
  <Button variant="primary" onClick={() => setIsActive(true)}>
    Show Overlay
  </Button>

  <Overlay onClick={() => setIsActive(false)} isActive={isActive} />
</>;
```

### Overlay with Children

```jsx
import { useState } from 'react';
import { Overlay, Button, Spinner } from '@alaneicker/react-component-library';

const [isActive, setIsActive] = useState(false);

<>
  <Button variant="primary" onClick={() => setIsActive(true)}>
    Show Overlay
  </Button>

  <Overlay
    onClick={() => setIsActive(false)}
    variant="white"
    isActive={isActive}
  >
    <Spinner size="xlg" variant="blue" />
  </Overlay>
</>;
```
