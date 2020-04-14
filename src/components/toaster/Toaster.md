```jsx
import { useState } from 'react';
import { Toaster } from '@alaneicker/react-component-library';

const [toasts, setToast] = useState([
  { message: 'This is a default message.' },
  { type: 'info', message: 'This is a information message.' },
  { type: 'warning', message: 'This is a warning message.' },
  { type: 'error', message: 'This is a error message.' },
  { type: 'success', message: 'This is a success message.' },
]);

<Toaster toasts={toasts} />;
```