The Badge component can be used to convey informational data in an unobtusive manner.

```jsx
import { Badge } from '@atomikui/core';

<Badge label="Downloads" value="500k" />;
```

### Color Themes

There are many color themes to choose from. Simply pass in a `theme` prop with the color of your choice.

#### Dark

```jsx
import { Badge } from '@atomikui/core';

<>
  <Badge label="Downloads" value="500k" theme="red" />
  <Badge label="Downloads" value="500k" theme="pink" />
  <Badge label="Downloads" value="500k" theme="purple" />
  <Badge label="Downloads" value="500k" theme="deep-purple" />
  <Badge label="Downloads" value="500k" theme="indigo" />
  <Badge label="Downloads" value="500k" theme="blue" />
  <Badge label="Downloads" value="500k" theme="sky-blue" />
  <Badge label="Downloads" value="500k" theme="cyan" />
  <Badge label="Downloads" value="500k" theme="teal" />
  <Badge label="Downloads" value="500k" theme="green" />
  <Badge label="Downloads" value="500k" theme="light-green" />
  <Badge label="Downloads" value="500k" theme="lime" />
  <Badge label="Downloads" value="500k" theme="yellow" />
  <Badge label="Downloads" value="500k" theme="light-orange" />
  <Badge label="Downloads" value="500k" theme="orange" />
  <Badge label="Downloads" value="500k" theme="deep-orange" />
  <Badge label="Downloads" value="500k" theme="amber" />
  <Badge label="Downloads" value="500k" theme="gray" />
  <Badge label="Downloads" value="500k" theme="blue-gray" />
  <Badge label="Downloads" value="500k" theme="black" />
</>;
```

#### Light

```jsx
import { Badge } from '@atomikui/core';

<>
  <Badge label="Downloads" value="500k" theme="red" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="pink" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="purple" themeVariant="light" />
  <Badge
    label="Downloads"
    value="500k"
    theme="deep-purple"
    themeVariant="light"
  />
  <Badge label="Downloads" value="500k" theme="indigo" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="blue" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="sky-blue" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="cyan" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="teal" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="green" themeVariant="light" />
  <Badge
    label="Downloads"
    value="500k"
    theme="light-green"
    themeVariant="light"
  />
  <Badge label="Downloads" value="500k" theme="lime" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="yellow" themeVariant="light" />
  <Badge
    label="Downloads"
    value="500k"
    theme="light-orange"
    themeVariant="light"
  />
  <Badge label="Downloads" value="500k" theme="orange" themeVariant="light" />
  <Badge
    label="Downloads"
    value="500k"
    theme="deep-orange"
    themeVariant="light"
  />
  <Badge label="Downloads" value="500k" theme="amber" themeVariant="light" />
  <Badge label="Downloads" value="500k" theme="gray" themeVariant="light" />
  <Badge
    label="Downloads"
    value="500k"
    theme="blue-gray"
    themeVariant="light"
  />
  <Badge label="Downloads" value="500k" theme="white" themeVariant="light" />
</>;
```
