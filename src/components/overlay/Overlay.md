The `Overlay` component is used to block user interaction while processes are taking place.

```jsx
import { useState } from 'react';
import { Overlay, Button } from '@alaneicker/react-component-library';

const [open, setOpen] = useState(false);

<>
  <Button variant="primary" onClick={() => setOpen(true)}>
    Show Overlay
  </Button>

  {open && <Overlay onClick={() => setOpen(false)} />}
</>;
```

### Overlay with Children

```jsx
import { useState } from 'react';
import { Overlay, Button, Spinner } from '@alaneicker/react-component-library';

const [open, setOpen] = useState(false);

<>
  <Button variant="primary" onClick={() => setOpen(true)}>
    Show Overlay
  </Button>

  {open && (
    <Overlay onClick={() => setOpen(false)} variant="white">
      <Spinner size="xlg" color="blue" />
    </Overlay>
  )}
</>;
```
