The Accordion component is a collection of expandable AccordionItems. It allows the display of one or more content panel at a time.

### Accordion - Single Panel Open

```jsx
import { Accordion, AccordionItem } from '@alaneicker/react-component-library';

<Accordion>
  <AccordionItem label="Accordion Heading 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
  <AccordionItem label="Accordion Heading 2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
  <AccordionItem label="Accordion Heading 3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
</Accordion>;
```

### Accordion - Multiple Panels Open

```jsx
import { Accordion, AccordionItem } from '@alaneicker/react-component-library';

<Accordion multipleOpen>
  <AccordionItem label="Accordion Heading 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
  <AccordionItem label="Accordion Heading 2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
  <AccordionItem label="Accordion Heading 3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
</Accordion>;
```

### Accordion - Dark Theme

```jsx
import { Accordion, AccordionItem } from '@alaneicker/react-component-library';

<Accordion theme="dark">
  <AccordionItem label="Accordion Heading 1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
  <AccordionItem label="Accordion Heading 2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
  <AccordionItem label="Accordion Heading 3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam
    justo, luctus eu tincidunt at, commodo vitae arcu. Suspendisse quis
    ultricies diam. Phasellus velit metus, aliquet ac venenatis et, faucibus vel
    est. Fusce erat sapien, aliquam id nisl quis, bibendum dignissim metus. Sed
    convallis nibh vel maximus eleifend. Duis tristique turpis dui, in volutpat
    nisi fringilla et. Suspendisse convallis cursus sodales. Suspendisse id
    neque sed nunc volutpat volutpat a consequat ante. Quisque sed felis vitae
    turpis molestie rhoncus. Sed vitae mauris quam. Nam efficitur venenatis
    pulvinar. Suspendisse potenti.
  </AccordionItem>
</Accordion>;
```
