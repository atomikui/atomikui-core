The Button component is a form control that triggers an action when clicked.

### Button themes

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button>Default</Button>
  <Button theme="primary">Primary</Button>
  <Button theme="secondary">Secondary</Button>
  <Button theme="tertiary">Tertiary</Button>
  <Button theme="warning">Warning</Button>
  <Button theme="hollow">Hollow</Button>
  <Button theme="link">Link</Button>
</>;
```

### Button Shapes

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button theme="primary">Default</Button>
  <Button theme="primary" shape="square">
    Square
  </Button>
  <Button theme="primary" shape="pill">
    Pill
  </Button>
</>;
```

### Disabled Button

```jsx
import { Button } from '@alaneicker/react-component-library';

<Button theme="primary" disabled>
  Disabled
</Button>;
```

### Icon Button

```jsx
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@alaneicker/react-component-library';

<Button theme="primary">
  <Icon icon={faCloudDownloadAlt} size="lg" className="margin-right-8" />
  Download
</Button>;
```

### Responsive Button

```jsx
import { Button } from '@alaneicker/react-component-library';

<Button theme="primary" block>
  Block Button
</Button>;
```

### Button Sizes

```jsx
import { Button } from '@alaneicker/react-component-library';

<>
  <Button size="sm">Small</Button>
  <Button theme="primary" size="md">
    Medium
  </Button>
  <Button theme="secondary">Default</Button>
  <Button theme="tertiary" size="lg">
    Large
  </Button>
</>;
```
