The Tag component scales to match the size of the parent element by using relative font sizing.

```jsx
import { Tag } from '@atomikui/core';

<>
  <h1>
    Example Heading <Tag>Info</Tag>
  </h1>
  <h2>
    Example Heading <Tag>Info</Tag>
  </h2>
  <h3>
    Example Heading <Tag>Info</Tag>
  </h3>
  <h4>
    Example Heading <Tag>Info</Tag>
  </h4>
</>;
```

### Tag Color Themes

The Tag offers 20 dark and 20 light color themes.

#### Dark Themes

```jsx
import { Tag } from '@atomikui/core';

<>
  <Tag theme="red">red</Tag>
  <Tag theme="pink">pink</Tag>
  <Tag theme="purple">purple</Tag>
  <Tag theme="deep-purple">deep-purple</Tag>
  <Tag theme="indigo">indigo</Tag>
  <Tag theme="blue">blue</Tag>
  <Tag theme="sky-blue">sky-blue</Tag>
  <Tag theme="cyan">cyan</Tag>
  <Tag theme="teal">teal</Tag>
  <Tag theme="green">green</Tag>
  <Tag theme="light-green">light-green</Tag>
  <Tag theme="lime">lime</Tag>
  <Tag theme="yellow">yellow</Tag>
  <Tag theme="light-orange">light-orange</Tag>
  <Tag theme="orange">orange</Tag>
  <Tag theme="deep-orange">deep-orange</Tag>
  <Tag theme="amber">amber</Tag>
  <Tag theme="brown">brown</Tag>
  <Tag theme="gray">gray</Tag>
  <Tag theme="blue-gray">blue-gray</Tag>
  <Tag theme="black">black</Tag>
</>;
```

#### Light Themes

```jsx
import { Tag } from '@atomikui/core';

<>
  <Tag theme="red" themeVariant="light">
    red
  </Tag>
  <Tag theme="pink" themeVariant="light">
    pink
  </Tag>
  <Tag theme="purple" themeVariant="light">
    purple
  </Tag>
  <Tag theme="deep-purple" themeVariant="light">
    deep-purple
  </Tag>
  <Tag theme="indigo" themeVariant="light">
    indigo
  </Tag>
  <Tag theme="blue" themeVariant="light">
    blue
  </Tag>
  <Tag theme="sky-blue" themeVariant="light">
    sky-blue
  </Tag>
  <Tag theme="cyan" themeVariant="light">
    cyan
  </Tag>
  <Tag theme="teal" themeVariant="light">
    teal
  </Tag>
  <Tag theme="green" themeVariant="light">
    green
  </Tag>
  <Tag theme="light-green" themeVariant="light">
    light-green
  </Tag>
  <Tag theme="lime" themeVariant="light">
    lime
  </Tag>
  <Tag theme="yellow" themeVariant="light">
    yellow
  </Tag>
  <Tag theme="light-orange" themeVariant="light">
    light-orange
  </Tag>
  <Tag theme="orange" themeVariant="light">
    orange
  </Tag>
  <Tag theme="deep-orange" themeVariant="light">
    deep-orange
  </Tag>
  <Tag theme="amber" themeVariant="light">
    amber
  </Tag>
  <Tag theme="brown" themeVariant="light">
    brown
  </Tag>
  <Tag theme="gray" themeVariant="light">
    gray
  </Tag>
  <Tag theme="blue-gray" themeVariant="light">
    blue-gray
  </Tag>
  <Tag theme="white" themeVariant="light">
    white
  </Tag>
</>;
```

### Tag Shapes

```jsx
import { Tag } from '@atomikui/core';

<>
  <Tag>Default</Tag>
  <Tag shape="square">Square</Tag>
  <Tag shape="pill">Pill</Tag>
</>;
```
