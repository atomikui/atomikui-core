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

#### Dark

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
  <Badge theme="pickle">pickle</Badge>
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

#### Light

```jsx
import { Badge } from '@alaneicker/atomik-ui';

<>
  <Badge theme="red" light>
    red
  </Badge>
  <Badge theme="pink" light>
    pink
  </Badge>
  <Badge theme="purple" light>
    purple
  </Badge>
  <Badge theme="deep-purple" light>
    deep-purple
  </Badge>
  <Badge theme="indigo" light>
    indigo
  </Badge>
  <Badge theme="blue" light>
    blue
  </Badge>
  <Badge theme="sky-blue" light>
    sky-blue
  </Badge>
  <Badge theme="cyan" light>
    cyan
  </Badge>
  <Badge theme="teal" light>
    teal
  </Badge>
  <Badge theme="green" light>
    NE
  </Badge>
  <Badge theme="light-green" light>
    light-green
  </Badge>
  <Badge theme="pickle" light>
    pickle
  </Badge>
  <Badge theme="yellow" light>
    yellow
  </Badge>
  <Badge theme="light-orange" light>
    light-orange
  </Badge>
  <Badge theme="orange" light>
    orange
  </Badge>
  <Badge theme="deep-orange" light>
    deep-orange
  </Badge>
  <Badge theme="amber" light>
    amber
  </Badge>
  <Badge theme="brown" light>
    brown
  </Badge>
  <Badge theme="gray" light>
    gray
  </Badge>
  <Badge theme="blue-gray" light>
    blue-gray
  </Badge>
  <Badge theme="black" light>
    black
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
