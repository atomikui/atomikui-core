Toasts are lightweight notifications that mimic the push notifications of mobile and desktop operating systems.

The `withToastProvider` is a HOC (Higher Order Component) that can be used to wrap a component, giving it access to the `useToast` hook.

### Use Case

Below is an example of how we can use the withToastProvider and useToast hook to generate random toast messages.

```jsx
import { useEffect } from 'react';
import {
  withToastProvider,
  useToast,
  Button,
} from '@alaneicker/react-component-library';

const RandomToastGenerator = withToastProvider(() => {
  const toast = useToast();

  const toastMessages = [
    { content: 'This is a default toast message!' },
    { type: 'info', content: 'This is an informational toast message!' },
    { type: 'warning', content: 'This is a warning toast message!' },
    { type: 'error', content: 'This is an error toast message!' },
    { type: 'success', content: 'This is a success toast message!' },
  ];

  const setRandomToast = () => {
    const newToast =
      toastMessages[Math.floor(Math.random() * toastMessages.length)];

    toast.add(newToast.type, newToast.content);
  };

  // Show random toast on initial mount
  useEffect(() => {
    setRandomToast();
  }, []);

  return (
    <Button variant="primary" size="md" onClick={setRandomToast}>
      Add Random Toast
    </Button>
  );
});

<RandomToastGenerator />;
```

### Toast Positioning

To position where the toast messages will appear, simply pass a `position` prop to the component wrapped with the withToastProvider HOC and give it a value of `top-left`, `top-center`, `bottom-left`, `bottom-center`, or `bottom-right`. The default position is top right.

E.g. `<RandomToastGenerator position="bottom-right" />`

### Toast Duration

By default, the toast will remain visible for 7 seconds before being closed. The `duration` prop can be used to set a custom duration. The example below sets the toast duration to 10 seconds.

`<RandomToastGenerator duration={10000} />`

If you'd like the toast to remain visible until manually closed, simply set the duration to -1. This will make the duration infinite.

`<RandomToastGenerator duration={-1} />`
