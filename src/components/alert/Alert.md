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

### Alignment

```jsx
import { Alert } from '@alaneicker/react-component-library';

<>
  <Alert variant="info">This alert is left aligned</Alert>
  <Alert variant="success" align="center">
    This alert is center aligned
  </Alert>
  <Alert variant="error" align="right">
    This alert is right aligned
  </Alert>
</>;
```
