The Alert component is used to provide the user with an important message without disrupting the user's task.

### States (default, info, warning, error, success)

```jsx
import { Alert } from '@alaneicker/react-component-library';

<>
  <Alert>This is a default alert</Alert>
  <Alert variant="info">This is an informational alert</Alert>
  <Alert variant="warning">This is a warning alert</Alert>
  <Alert variant="error">This is a error alert</Alert>
  <Alert variant="success">This is a success alert</Alert>
</>;
```

### Alert with close button

Simply add an `onClose` prop with a callback and a close button will be added to the alert.

```jsx
import { Alert } from '@alaneicker/react-component-library';

<>
  <Alert variant="info" onClose={() => console.log('closed')}>
    This is an alert
  </Alert>
</>;
```
