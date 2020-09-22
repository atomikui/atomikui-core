The Spinner component can be used tp indicate that a process is taking place. Unline the ProgressBar components, the Spinner does not indicate quantitative progress.

### Color Themes

There are many color themes to choose from. simplay pass in a `theme` prop with the color of your choice.

#### Dark

```jsx
import { Spinner } from '@alaneicker/atomik-ui';

<>
  <Spinner />
  <Spinner theme="red" />
  <Spinner theme="pink" />
  <Spinner theme="purple" />
  <Spinner theme="deep-purple" />
  <Spinner theme="indigo" />
  <Spinner theme="blue" />
  <Spinner theme="sky-blue" />
  <Spinner theme="teal" />
  <Spinner theme="green" />
  <Spinner theme="light-green" />
  <Spinner theme="pickle" />
  <Spinner theme="yellow" />
  <Spinner theme="light-orange" />
  <Spinner theme="orange" />
  <Spinner theme="deep-orange" />
  <Spinner theme="amber" />
  <Spinner theme="brown" />
  <Spinner theme="gray" />
  <Spinner theme="blue-gray" />
  <Spinner theme="black" />
</>;
```

#### Light

```jsx
import { Spinner } from '@alaneicker/atomik-ui';

<>
  <Spinner theme="red" themeVariant="light" />
  <Spinner theme="pink" themeVariant="light" />
  <Spinner theme="purple" themeVariant="light" />
  <Spinner theme="deep-purple" themeVariant="light" />
  <Spinner theme="indigo" themeVariant="light" />
  <Spinner theme="blue" themeVariant="light" />
  <Spinner theme="sky-blue" themeVariant="light" />
  <Spinner theme="teal" themeVariant="light" />
  <Spinner theme="green" themeVariant="light" />
  <Spinner theme="light-green" themeVariant="light" />
  <Spinner theme="pickle" themeVariant="light" />
  <Spinner theme="yellow" themeVariant="light" />
  <Spinner theme="light-orange" themeVariant="light" />
  <Spinner theme="orange" themeVariant="light" />
  <Spinner theme="deep-orange" themeVariant="light" />
  <Spinner theme="amber" themeVariant="light" />
  <Spinner theme="brown" themeVariant="light" />
  <Spinner theme="gray" themeVariant="light" />
  <Spinner theme="blue-gray" themeVariant="light" />
  <Spinner theme="white" themeVariant="light" />
</>;
```

### Sizes

```jsx
<>
  <Spinner size="sm" />
  <Spinner size="md" />
  <Spinner />
  <Spinner size="lg" />
  <Spinner size="xlg" />
</>
```
