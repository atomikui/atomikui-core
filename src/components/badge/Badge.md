The Badge component scales to match the size of the parent element by using relative font sizing.

```jsx
import { Badge } from '@alaneicker/react-component-library';

<>
  <h1>
    Example Heading <Badge>Info</Badge>
  </h1>
  <h2>
    Example Heading <Badge>Info</Badge>
  </h2>
  <h3>
    Example Heading <Badge>Info</Badge>
  </h3>
  <h4>
    Example Heading <Badge>Info</Badge>
  </h4>
</>;
```

### Badge Themes

```jsx
import { Badge } from '@alaneicker/react-component-library';

<>
  <Badge>Default</Badge>
  <Badge variant="light-gray">Light Gray</Badge>
  <Badge variant="light-blue">Light Blue</Badge>
  <Badge variant="info">Info</Badge>
  <Badge variant="warning">Warning</Badge>
  <Badge variant="error">Error</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="outline">Outline</Badge>
</>;
```

### Badge Shapes

```jsx
import { Badge } from '@alaneicker/react-component-library';

<>
  <Badge variant="info">Default</Badge>
  <Badge shape="square" variant="info">
    Square
  </Badge>
  <Badge shape="pill" variant="info">
    Pill
  </Badge>
</>;
```
