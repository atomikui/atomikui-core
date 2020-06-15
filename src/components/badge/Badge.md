The Badge component scales to match the size of the parent element by using relative font sizing.

```jsx
import { Badge } from '@alaneicker/atomik-ui';

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
import { Badge } from '@alaneicker/atomik-ui';

<>
  <Badge>Default</Badge>
  <Badge theme="light-gray">Light Gray</Badge>
  <Badge theme="light-blue">Light Blue</Badge>
  <Badge theme="info">Info</Badge>
  <Badge theme="warning">Warning</Badge>
  <Badge theme="error">Error</Badge>
  <Badge theme="success">Success</Badge>
  <Badge theme="outline">Outline</Badge>
</>;
```

### Badge Shapes

```jsx
import { Badge } from '@alaneicker/atomik-ui';

<>
  <Badge>Default</Badge>
  <Badge shape="square">Square</Badge>
  <Badge shape="pill">Pill</Badge>
</>;
```
