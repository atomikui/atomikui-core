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

### Badge Color Themes

The Badge offers 20 dark and 20 light color themes.

#### Dark Themes

```jsx
import { Badge } from '@alaneicker/atomik-ui';

<>
  <Badge theme="red">red</Badge>
  <Badge theme="pink">pink</Badge>
  <Badge theme="purple">purple</Badge>
  <Badge theme="deep-purple">deep-purple</Badge>
  <Badge theme="indigo">indigo</Badge>
  <Badge theme="blue">blue</Badge>
  <Badge theme="sky-blue">sky-blue</Badge>
  <Badge theme="cyan">cyan</Badge>
  <Badge theme="teal">teal</Badge>
  <Badge theme="green">NE</Badge>
  <Badge theme="light-green">light-green</Badge>
  <Badge theme="lime">lime</Badge>
  <Badge theme="yellow">yellow</Badge>
  <Badge theme="light-orange">light-orange</Badge>
  <Badge theme="orange">orange</Badge>
  <Badge theme="deep-orange">deep-orange</Badge>
  <Badge theme="amber">amber</Badge>
  <Badge theme="brown">brown</Badge>
  <Badge theme="gray">gray</Badge>
  <Badge theme="blue-gray">blue-gray</Badge>
  <Badge theme="black">black</Badge>
</>;
```

#### Light Themes

```jsx
import { Badge } from '@alaneicker/atomik-ui';

<>
  <Badge theme="red" themeVariant="light">
    red
  </Badge>
  <Badge theme="pink" themeVariant="light">
    pink
  </Badge>
  <Badge theme="purple" themeVariant="light">
    purple
  </Badge>
  <Badge theme="deep-purple" themeVariant="light">
    deep-purple
  </Badge>
  <Badge theme="indigo" themeVariant="light">
    indigo
  </Badge>
  <Badge theme="blue" themeVariant="light">
    blue
  </Badge>
  <Badge theme="sky-blue" themeVariant="light">
    sky-blue
  </Badge>
  <Badge theme="cyan" themeVariant="light">
    cyan
  </Badge>
  <Badge theme="teal" themeVariant="light">
    teal
  </Badge>
  <Badge theme="green" themeVariant="light">
    NE
  </Badge>
  <Badge theme="light-green" themeVariant="light">
    light-green
  </Badge>
  <Badge theme="lime" themeVariant="light">
    lime
  </Badge>
  <Badge theme="yellow" themeVariant="light">
    yellow
  </Badge>
  <Badge theme="light-orange" themeVariant="light">
    light-orange
  </Badge>
  <Badge theme="orange" themeVariant="light">
    orange
  </Badge>
  <Badge theme="deep-orange" themeVariant="light">
    deep-orange
  </Badge>
  <Badge theme="amber" themeVariant="light">
    amber
  </Badge>
  <Badge theme="brown" themeVariant="light">
    brown
  </Badge>
  <Badge theme="gray" themeVariant="light">
    gray
  </Badge>
  <Badge theme="blue-gray" themeVariant="light">
    blue-gray
  </Badge>
  <Badge theme="white" themeVariant="light">
    white
  </Badge>
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
