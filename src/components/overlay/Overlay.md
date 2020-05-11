The `Overlay` component is used to block user interaction while processes are taking place.

```jsx
import { useState } from 'react';
import { Overlay, Button } from '@alaneicker/atomik-ui';

const [isActive, setIsActive] = useState(false);

<>
  <Button theme="primary" onClick={() => setIsActive(true)}>
    Show Overlay
  </Button>

  <Overlay onClick={() => setIsActive(false)} isActive={isActive} />
</>;
```

### Overlay with Children

```jsx
import { useState } from 'react';
import { Overlay, Button, Spinner } from '@alaneicker/atomik-ui';

const [isActive, setIsActive] = useState(false);

<>
  <Button theme="primary" onClick={() => setIsActive(true)}>
    Show Overlay
  </Button>

  <Overlay onClick={() => setIsActive(false)} isActive={isActive}>
    <Spinner size="xlg" theme="white" />
  </Overlay>
</>;
```
