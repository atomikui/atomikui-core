### Button Variants

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button type="submit">Default</Button>
  <Button type="submit" variant="primary">
    Primary
  </Button>
  <Button type="submit" variant="secondary">
    Secondary
  </Button>
  <Button type="submit" variant="tertiary">
    Tertiary
  </Button>
  <Button type="submit" variant="hollow">
    Hollow
  </Button>
  <Button type="submit" variant="link">
    Link
  </Button>
</>;
```

### Pill Button

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button type="submit" shape="pill">
    Default
  </Button>
  <Button type="submit" variant="primary" shape="pill">
    Primary
  </Button>
  <Button type="submit" variant="secondary" shape="pill">
    Secondary
  </Button>
  <Button type="submit" variant="tertiary" shape="pill">
    Tertiary
  </Button>
</>;
```

### Disabled Button

```jsx
import { Button } from '@alaneicker/react-component-library';

<Button type="submit" variant="primary" disabled>
  Disabled
</Button>;
```

### Responsive Button

```jsx
import { Button } from '@alaneicker/react-component-library';

<Button type="submit" variant="primary" block>
  Block Button
</Button>;
```

### Button Sizes

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button type="submit" size="sm">
    Small
  </Button>
  <Button type="submit" variant="primary" size="md">
    Medium
  </Button>
  <Button type="submit" variant="secondary">
    Default
  </Button>
  <Button type="submit" variant="tertiary" size="lg">
    Large
  </Button>
</>;
```
