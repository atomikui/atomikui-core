The Button component is a form control that triggers an action when clicked.

### Default Button

```jsx
import { Button } from '@alaneicker/atomik-ui';

<Button>Default</Button>;
```

### Dark Themed Buttons

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
  <Button theme="pickle">pickle</Button>
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

### Light Themed Buttons

```jsx
import { Button } from '@alaneicker/atomik-ui';

<>
  <Button theme="red" light>
    red
  </Button>
  <Button theme="pink" light>
    pink
  </Button>
  <Button theme="purple" light>
    purple
  </Button>
  <Button theme="deep-purple" light>
    deep-purple
  </Button>
  <Button theme="indigo" light>
    indigo
  </Button>
  <Button theme="blue" light>
    blue
  </Button>
  <Button theme="sky-blue" light>
    sky-blue
  </Button>
  <Button theme="cyan" light>
    cyan
  </Button>
  <Button theme="teal" light>
    teal
  </Button>
  <Button theme="green" light>
    green
  </Button>
  <Button theme="light-green" light>
    light-green
  </Button>
  <Button theme="pickle" light>
    pickle
  </Button>
  <Button theme="yellow" light>
    yellow
  </Button>
  <Button theme="light-orange" light>
    light-orange
  </Button>
  <Button theme="orange" light>
    orange
  </Button>
  <Button theme="deep-orange" light>
    deep-orange
  </Button>
  <Button theme="amber" light>
    amber
  </Button>
  <Button theme="brown" light>
    brown
  </Button>
  <Button theme="gray" light>
    gray
  </Button>
  <Button theme="blue-gray" light>
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
