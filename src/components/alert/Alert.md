### States (default, info, warning, error, success)

```jsx
import { Alert } from '@alaneicker/react-component-library';

<>
  <Alert>This is a default alert</Alert>
  <Alert type="info">This is an informational alert</Alert>
  <Alert type="warning">This is a warning alert</Alert>
  <Alert type="error">This is a error alert</Alert>
  <Alert type="success">This is a success alert</Alert>
</>;
```

### Alignment

```jsx
import { Alert } from '@alaneicker/react-component-library';

<>
  <Alert type="info">This alert is left aligned</Alert>
  <Alert type="success" align="center">
    This alert is center aligned
  </Alert>
  <Alert type="error" align="right">
    This alert is right aligned
  </Alert>
</>;
```
