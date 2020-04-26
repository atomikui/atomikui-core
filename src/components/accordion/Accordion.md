The `Accordion` component organizes content within collapsable items. It allows the display of only one collapsed item at a time.

### Accordion - Single Panel Open

```jsx
import { Accordion, AccordionItem } from '@alaneicker/react-component-library';

<Accordion inverse>
  <AccordionItem label="Accordion Heading 1">
    Accordion Item 1 content...
  </AccordionItem>
  <AccordionItem label="Accordion Heading 2">
    Accordion Item 2 content...
  </AccordionItem>
  <AccordionItem label="Accordion Heading 3">
    Accordion Item 3 content...
  </AccordionItem>
</Accordion>;
```

<!-- ### Accordion - Multiple Panels Open

```jsx
import { Accordion } from '@alaneicker/react-component-library';

<Accordion
  multipleOpen
  panels={[
    { label: 'Panel Heading 1', content: 'Panel 1 content...' },
    { label: 'Panel Heading 2', content: 'Panel 2 content...' },
    { label: 'Panel Heading 3', content: 'Panel 3 content...' },
  ]}
/>;
```

### Accordion With Default Expanded Panel

```jsx
import { Accordion } from '@alaneicker/react-component-library';

<Accordion
  multipleOpen
  panels={[
    { label: 'Panel Heading 1', content: 'Panel 1 content...', expanded: true },
    { label: 'Panel Heading 2', content: 'Panel 2 content...' },
    { label: 'Panel Heading 3', content: 'Panel 3 content...' },
  ]}
/>;
``` -->
