The Alert component is used to provide the user with an important message without disrupting the user's task.

### States (default, info, warning, error, success)

```jsx
import { Alert } from '@alaneicker/atomik-ui';

<>
  <Alert>This is a default alert</Alert>
  <Alert type="dark">This is an dark themed alert</Alert>
  <Alert type="info">This is an info themed alert</Alert>
  <Alert type="warning">This is a warning themed alert</Alert>
  <Alert type="error">This is a error themed alert</Alert>
  <Alert type="success">This is a success themed alert</Alert>
</>;
```

### Alert With Custom Icon

```jsx
import { Alert, Spinner } from '@alaneicker/atomik-ui';

<Alert type="dark" align="middle" icon={<Spinner theme="blue" />}>
  Please wait while we load your content
</Alert>;
```

### Dismissable Alert

Simply add an `onClose` prop with a callback and a close button will be added to the alert.

```jsx
import { Alert } from '@alaneicker/atomik-ui';

<>
  <Alert type="info" onClose={() => console.log('closed')}>
    This is an alert
  </Alert>
</>;
```
