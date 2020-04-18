### Button Variants

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button>Default</Button>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="tertiary">Tertiary</Button>
  <Button variant="warning">Warning</Button>
  <Button variant="hollow">Hollow</Button>
  <Button variant="link">Link</Button>
</>;
```

### Button Shapes

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button variant="primary">Default</Button>
  <Button variant="primary" shape="square">
    Square
  </Button>
  <Button variant="primary" shape="pill">
    Pill
  </Button>
</>;
```

### Disabled Button

```jsx
import { Button } from '@alaneicker/react-component-library';

<Button variant="primary" disabled>
  Disabled
</Button>;
```

### Responsive Button

```jsx
import { Button } from '@alaneicker/react-component-library';

<Button variant="primary" block>
  Block Button
</Button>;
```

### Button Sizes

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button size="sm">Small</Button>
  <Button variant="primary" size="md">
    Medium
  </Button>
  <Button variant="secondary">Default</Button>
  <Button variant="tertiary" size="lg">
    Large
  </Button>
</>;
```
