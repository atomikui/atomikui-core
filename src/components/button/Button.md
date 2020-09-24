The Button component is a form control that triggers an action when clicked.

### Default Button

```jsx
import { Button } from '@alaneicker/atomik-ui';

<Button>Default</Button>;
```

### Button Color Themes

The Button offers 20 dark and 20 themeVariant="light" color themes.

#### Dark Themes

```jsx
import { Button } from '@alaneicker/atomik-ui';

<>
  <Button theme="red">red</Button>
  <Button theme="pink">pink</Button>
  <Button theme="purple">purple</Button>
  <Button theme="deep-purple">deep-purple</Button>
  <Button theme="indigo">indigo</Button>
  <Button theme="blue">blue</Button>
  <Button theme="sky-blue">sky-blue</Button>
  <Button theme="cyan">cyan</Button>
  <Button theme="teal">teal</Button>
  <Button theme="green">green</Button>
  <Button theme="light-green">light-green</Button>
  <Button theme="lime">lime</Button>
  <Button theme="yellow">yellow</Button>
  <Button theme="light-orange">light-orange</Button>
  <Button theme="orange">orange</Button>
  <Button theme="deep-orange">deep-orange</Button>
  <Button theme="amber">amber</Button>
  <Button theme="brown">brown</Button>
  <Button theme="gray">gray</Button>
  <Button theme="blue-gray">blue-gray</Button>
  <Button theme="black">black</Button>
</>;
```

#### Light Themes

```jsx
import { Button } from '@alaneicker/atomik-ui';

<>
  <Button theme="red" themeVariant="light">
    red
  </Button>
  <Button theme="pink" themeVariant="light">
    pink
  </Button>
  <Button theme="purple" themeVariant="light">
    purple
  </Button>
  <Button theme="deep-purple" themeVariant="light">
    deep-purple
  </Button>
  <Button theme="indigo" themeVariant="light">
    indigo
  </Button>
  <Button theme="blue" themeVariant="light">
    blue
  </Button>
  <Button theme="sky-blue" themeVariant="light">
    sky-blue
  </Button>
  <Button theme="cyan" themeVariant="light">
    cyan
  </Button>
  <Button theme="teal" themeVariant="light">
    teal
  </Button>
  <Button theme="green" themeVariant="light">
    green
  </Button>
  <Button theme="light-green" themeVariant="light">
    light-green
  </Button>
  <Button theme="lime" themeVariant="light">
    lime
  </Button>
  <Button theme="yellow" themeVariant="light">
    yellow
  </Button>
  <Button theme="light-orange" themeVariant="light">
    light-orange
  </Button>
  <Button theme="orange" themeVariant="light">
    orange
  </Button>
  <Button theme="deep-orange" themeVariant="light">
    deep-orange
  </Button>
  <Button theme="amber" themeVariant="light">
    amber
  </Button>
  <Button theme="brown" themeVariant="light">
    brown
  </Button>
  <Button theme="gray" themeVariant="light">
    gray
  </Button>
  <Button theme="blue-gray" themeVariant="light">
    blue-gray
  </Button>
  <Button theme="white">white</Button>
</>;
```

### Link Button

```jsx
import { Button } from '@alaneicker/atomik-ui';

<Button theme="link">Link</Button>;
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
  <Button aria-label="download">
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
