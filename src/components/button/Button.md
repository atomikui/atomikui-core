The Button component is a form control that triggers an action when clicked.

### Button themes

```jsx
import { Button } from '@alaneicker/atomik-ui';

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
import { Button } from '@alaneicker/atomik-ui';

<>
  <Button>Default</Button>
  <Button shape="square">Square</Button>
  <Button shape="pill">Pill</Button>
</>;
```

### Disabled Button

```jsx
import { Button } from '@alaneicker/atomik-ui';

<Button disabled>Disabled</Button>;
```

### Icon Button

```jsx
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@alaneicker/atomik-ui';

<>
  <Button>
    <Icon icon={faCloudDownloadAlt} size="lg" className="margin-right-8" />
    Download
  </Button>
  <Button ariaLabel="download">
    <Icon icon={faCloudDownloadAlt} size="lg" />
  </Button>
</>;
```

### Responsive Button

```jsx
import { Button } from '@alaneicker/atomik-ui';

<Button block>Block Button</Button>;
```

### Button Sizes

```jsx
import { Button } from '@alaneicker/atomik-ui';

<>
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button>Default</Button>
  <Button size="lg">Large</Button>
</>;
```
