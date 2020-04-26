The `Accordion` component organizes content within collapsable items. It allows the display of only one collapsed item at a time.

### Accordion - Single Panel Open

```jsx
import { Accordion, AccordionItem } from '@alaneicker/react-component-library';

<Accordion>
  <AccordionItem label="Accordion Heading 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in varius
    est. Mauris lacinia lacinia lectus. Sed finibus orci sed nisl eleifend, eu
    feugiat augue molestie. Quisque laoreet eros sit amet dolor varius, in
    varius ligula gravida. Pellentesque auctor aliquam nulla, et venenatis
    lectus malesuada et. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Maecenas in varius est. Mauris lacinia lacinia lectus. Sed finibus
    orci sed nisl eleifend, eu feugiat augue molestie. Quisque laoreet eros sit
    amet dolor varius, in varius ligula gravida. Pellentesque auctor aliquam
    nulla, et venenatis lectus malesuada et. Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Maecenas in varius est. Mauris lacinia lacinia
    lectus. Sed finibus orci sed nisl eleifend, eu feugiat augue molestie.
    Quisque laoreet eros sit amet dolor varius, in varius ligula gravida.
    Pellentesque auctor aliquam nulla, et venenatis lectus malesuada et.
  </AccordionItem>
  <AccordionItem label="Accordion Heading 2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in varius
    est. Mauris lacinia lacinia lectus. Sed finibus orci sed nisl eleifend, eu
    feugiat augue molestie. Quisque laoreet eros sit amet dolor varius, in
    varius ligula gravida. Pellentesque auctor aliquam nulla, et venenatis
    lectus malesuada et.
  </AccordionItem>
  <AccordionItem label="Accordion Heading 3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in varius
    est. Mauris lacinia lacinia lectus. Sed finibus orci sed nisl eleifend, eu
    feugiat augue molestie. Quisque laoreet eros sit amet dolor varius, in
    varius ligula gravida. Pellentesque auctor aliquam nulla, et venenatis
    lectus malesuada et.
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
