The `Overlay` component is used to block user interaction while processes are taking place.

```jsx
import { useState } from 'react';
import { Overlay, Button } from '@atomikui/core';

const [isActive, setIsActive] = useState(false);

<>
  <Button theme="blue" onClick={() => setIsActive(true)}>
    Show Overlay
  </Button>

  <Overlay onClick={() => setIsActive(false)} isActive={isActive} />
</>;
```

### Overlay with Children

```jsx
import { useState } from 'react';
import { Overlay, Button, Spinner } from '@atomikui/core';

const [isActive, setIsActive] = useState(false);

<>
  <Button theme="blue" onClick={() => setIsActive(true)}>
    Show Overlay
  </Button>

  <Overlay onClick={() => setIsActive(false)} isActive={isActive}>
    <Spinner size="xlg" theme="white" />
  </Overlay>
</>;
```
