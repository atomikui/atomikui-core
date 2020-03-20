### States (default, info, warning, error, success)

```jsx
import { Alert } from 'react-component-library';

<>
  <Alert text="This is a default alert" />
  <Alert text="This is an informational alert" type="info" />
  <Alert text="This is a warning alert" type="warning" />
  <Alert text="This is a error alert" type="error" />
  <Alert text="This is a success alert" type="success" />
</>
```

### Alignment

```jsx
import { Alert } from 'react-component-library';

<>
  <Alert text="This alert is left aligned" type="info" />
  <Alert text="This alert is center aligned" type="success" align="center" />
  <Alert text="This alert is right aligned" type="error" align="right" />
</>
```