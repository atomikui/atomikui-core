The `Accordion` component organizes content within collapsable items. It allows the display of only one collapsed item at a time.

### Accordion - Single Panel Open

```jsx
import { Accordion } from '@alaneicker/react-component-library';

<Accordion
  items={[
    { title: 'Item 1', content: 'Panel 1 content...' },
    { title: 'Item 2', content: 'Panel 2 content...' },
    { title: 'Item 3', content: 'Panel 3 content...' },
  ]}
/>;
```

### Accordion - Multiple Panels Open

```jsx
import { Accordion } from '@alaneicker/react-component-library';

<Accordion
  multipleOpen
  items={[
    { title: 'Item 1', content: 'Panel 1 content...' },
    { title: 'Item 2', content: 'Panel 2 content...' },
    { title: 'Item 3', content: 'Panel 3 content...' },
  ]}
/>;
```
