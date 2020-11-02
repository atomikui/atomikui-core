The Price component can be used to create a stylized version of a price

```jsx
import { Price } from '@atomikui/core';

<Price amount={124.99} label="/ month" />;
```

### Sizes

```jsx
import { Price } from '@atomikui/core';

<>
  <Price amount={124.99} label="/ month" size="sm" />
  <Price amount={124.99} label="/ month" size="md" />
  <Price amount={124.99} label="/ month" />
  <Price amount={124.99} label="/ month" size="lg" />
  <Price amount={124.99} label="/ month" size="xl" />
</>;
```

### Color Themes

There are many color themes to choose from. Simply pass in a `theme` prop with the color of your choice.

#### Dark

```jsx
import { Price } from '@atomikui/core';

<>
  <Price amount={124.99} label="/ month" theme="red" />
  <Price amount={124.99} label="/ month" theme="pink" />
  <Price amount={124.99} label="/ month" theme="purple" />
  <Price amount={124.99} label="/ month" theme="deep-purple" />
  <Price amount={124.99} label="/ month" theme="indigo" />
  <Price amount={124.99} label="/ month" theme="blue" />
  <Price amount={124.99} label="/ month" theme="sky-blue" />
  <Price amount={124.99} label="/ month" theme="cyan" />
  <Price amount={124.99} label="/ month" theme="teal" />
  <Price amount={124.99} label="/ month" theme="green" />
  <Price amount={124.99} label="/ month" theme="light-green" />
  <Price amount={124.99} label="/ month" theme="lime" />
  <Price amount={124.99} label="/ month" theme="yellow" />
  <Price amount={124.99} label="/ month" theme="light-orange" />
  <Price amount={124.99} label="/ month" theme="orange" />
  <Price amount={124.99} label="/ month" theme="deep-orange" />
  <Price amount={124.99} label="/ month" theme="amber" />
  <Price amount={124.99} label="/ month" theme="brown" />
  <Price amount={124.99} label="/ month" theme="gray" />
  <Price amount={124.99} label="/ month" theme="blue-gray" />
  <Price amount={124.99} label="/ month" theme="black" />
</>;
```

#### Light

```jsx
import { Price } from '@atomikui/core';

<>
  <Price amount={124.99} label="/ month" theme="red" themeVariant="light" />
  <Price amount={124.99} label="/ month" theme="pink" themeVariant="light" />
  <Price amount={124.99} label="/ month" theme="purple" themeVariant="light" />
  <Price
    amount={124.99}
    label="/ month"
    theme="deep-purple"
    themeVariant="light"
  />
  <Price amount={124.99} label="/ month" theme="indigo" themeVariant="light" />
  <Price amount={124.99} label="/ month" theme="blue" themeVariant="light" />
  <Price
    amount={124.99}
    label="/ month"
    theme="sky-blue"
    themeVariant="light"
  />
  <Price amount={124.99} label="/ month" theme="cyan" themeVariant="light" />
  <Price amount={124.99} label="/ month" theme="teal" themeVariant="light" />
  <Price amount={124.99} label="/ month" theme="green" themeVariant="light" />
  <Price
    amount={124.99}
    label="/ month"
    theme="light-green"
    themeVariant="light"
  />
  <Price amount={124.99} label="/ month" theme="lime" themeVariant="light" />
  <Price amount={124.99} label="/ month" theme="yellow" themeVariant="light" />
  <Price
    amount={124.99}
    label="/ month"
    theme="light-orange"
    themeVariant="light"
  />
  <Price amount={124.99} label="/ month" theme="orange" themeVariant="light" />
  <Price
    amount={124.99}
    label="/ month"
    theme="deep-orange"
    themeVariant="light"
  />
  <Price amount={124.99} label="/ month" theme="amber" themeVariant="light" />
  <Price amount={124.99} label="/ month" theme="brown" themeVariant="light" />
  <Price amount={124.99} label="/ month" theme="gray" themeVariant="light" />
  <Price
    amount={124.99}
    label="/ month"
    theme="blue-gray"
    themeVariant="light"
  />
  <Price amount={124.99} label="/ month" theme="white" themeVariant="light" />
</>;
```
