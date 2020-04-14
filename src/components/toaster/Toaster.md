```jsx
import { useState } from 'react';
import { Toaster, Button } from '@alaneicker/react-component-library';

const [toasts, setToasts] = useState([]);

<>
  <Toaster toasts={toasts} />

  <Button
    variant="primary"
    size="md"
    onClick={() =>
      setToasts([...toasts, { message: 'This is a toast message.' }])
    }
  >
    Make Toast
  </Button>
</>;
```

```jsx
import { Toaster } from '@alaneicker/react-component-library';

<Toaster
  toasts={[
    { message: 'This is a default message.' },
    { type: 'info', message: 'This is a information message.' },
    { type: 'warning', message: 'This is a warning message.' },
    { type: 'error', message: 'This is a error message.' },
    { type: 'success', message: 'This is a success message.' },
  ]}
/>;
```
