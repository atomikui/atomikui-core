```jsx
import {
  withToastProvider,
  useToast,
  Button,
} from '@alaneicker/react-component-library';

const RandomToastGenerator = withToastProvider(() => {
  const toast = useToast();
  const toastMessages = [
    { type: null, content: 'This is a default toast message!' },
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

  return (
    <Button variant="primary" size="md" onClick={() => setRandomToast()}>
      Add Toast
    </Button>
  );
});

<RandomToastGenerator />;
```
