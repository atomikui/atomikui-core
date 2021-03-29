The Alert component is used to provide the user with an important message without disrupting the user's task.

### Solid Alert

```jsx
import { Alert } from '@atomikui/core';

<>
  <Alert>This is a default alert</Alert>
  <Alert theme="dark">This is an dark themed alert</Alert>
  <Alert theme="info">This is an info themed alert</Alert>
  <Alert theme="warning">This is a warning themed alert</Alert>
  <Alert theme="error">This is a error themed alert</Alert>
  <Alert theme="success">This is a success themed alert</Alert>
</>;
```

### Bordered Alert

```jsx
import { Alert } from '@atomikui/core';

<>
  <Alert variant="bordered">This is a default alert</Alert>
  <Alert variant="bordered" theme="dark">
    This is an dark themed alert
  </Alert>
  <Alert variant="bordered" theme="info">
    This is an info themed alert
  </Alert>
  <Alert variant="bordered" theme="warning">
    This is a warning themed alert
  </Alert>
  <Alert variant="bordered" theme="error">
    This is a error themed alert
  </Alert>
  <Alert variant="bordered" theme="success">
    This is a success themed alert
  </Alert>
</>;
```

### Alert With Custom Icon

```jsx
import { Alert, Spinner } from '@atomikui/core';

<Alert theme="dark" align="middle" icon={<Spinner theme="cyan" />}>
  Please wait while we load your content
</Alert>;
```

### Dismissable Alert

Simply add an `onClose` prop with a callback and a close button will be added to the alert.

```jsx
import { Alert } from '@atomikui/core';

<>
  <Alert theme="info" onClose={() => console.log('closed')}>
    This is an alert
  </Alert>
</>;
```
