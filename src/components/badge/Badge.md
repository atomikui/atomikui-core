The Badge component scales to match the size of the parent element by using relative font sizing.

```jsx
import { Badge } from '@alaneicker/react-component-library';

<>
  <h1>
    Example Heading <Badge type="info">Info</Badge>
  </h1>
  <h2>
    Example Heading <Badge type="info">Info</Badge>
  </h2>
  <h3>
    Example Heading <Badge type="info">Info</Badge>
  </h3>
  <h4>
    Example Heading <Badge type="info">Info</Badge>
  </h4>
</>;
```

### Badge Themes

```jsx
import { Badge } from '@alaneicker/react-component-library';

<>
  <Badge>Default</Badge>
  <Badge type="info">Info</Badge>
  <Badge type="warning">Warning</Badge>
  <Badge type="error">Error</Badge>
  <Badge type="success">Success</Badge>
</>;
```

### Badge Shapes

```jsx
import { Badge } from '@alaneicker/react-component-library';

<>
  <Badge type="info">Default</Badge>
  <Badge shape="square" type="info">
    Square
  </Badge>
  <Badge shape="pill" type="info">
    Pill
  </Badge>
</>;
```
