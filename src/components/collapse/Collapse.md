```jsx
import { Collapse, List, ListItem } from '@alaneicker/atomik-ui';

<Collapse toggleText="Car Brands">
  <List>
    <ListItem>Chevrolet</ListItem>
    <ListItem>Ford</ListItem>
    <ListItem>GMC</ListItem>
    <ListItem>Honda</ListItem>
  </List>
</Collapse>;
```

### Trigger Text ans Icon Alignments

```jsx
import { Collapse, List, ListItem } from '@alaneicker/atomik-ui';

<>
  <Collapse className="margin-bottom-16" toggleText="Car Brands">
    <List>
      <ListItem>Chevrolet</ListItem>
      <ListItem>Ford</ListItem>
      <ListItem>GMC</ListItem>
      <ListItem>Honda</ListItem>
    </List>
  </Collapse>
  <Collapse
    className="margin-bottom-16"
    toggleText="Car Brands"
    alignTiggerIconRight
  >
    <List>
      <ListItem>Chevrolet</ListItem>
      <ListItem>Ford</ListItem>
      <ListItem>GMC</ListItem>
      <ListItem>Honda</ListItem>
    </List>
  </Collapse>
  <Collapse
    className="margin-bottom-16"
    toggleText="Car Brands"
    alignTriggerRight
  >
    <List>
      <ListItem>Chevrolet</ListItem>
      <ListItem>Ford</ListItem>
      <ListItem>GMC</ListItem>
      <ListItem>Honda</ListItem>
    </List>
  </Collapse>
  <Collapse toggleText="Car Brands" alignTriggerRight alignTiggerIconRight>
    <List>
      <ListItem>Chevrolet</ListItem>
      <ListItem>Ford</ListItem>
      <ListItem>GMC</ListItem>
      <ListItem>Honda</ListItem>
    </List>
  </Collapse>
</>;
```

### Collabse With Custom Trigger

```jsx
import { useState } from 'react';
import { Collapse, List, ListItem, Button } from '@alaneicker/atomik-ui';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button className="margin-bottom-16" onClick={() => setIsOpen(!isOpen)}>
    Toggle
  </Button>

  <Collapse isOpen={isOpen} noTrigger>
    <List>
      <ListItem>Chevrolet</ListItem>
      <ListItem>Ford</ListItem>
      <ListItem>GMC</ListItem>
      <ListItem>Honda</ListItem>
    </List>
  </Collapse>
</>;
```

```jsx
import { Collapse, List, ListItem } from '@alaneicker/atomik-ui';

<Collapse toggleText="Car Brands">
  <List>
    <ListItem>Chevrolet</ListItem>
    <ListItem>Ford</ListItem>
    <ListItem>GMC</ListItem>
    <ListItem>Honda</ListItem>
  </List>
</Collapse>;
```

### Collapse Wrapped in a Container

```jsx
import { Card, Collapse, List, ListItem } from '@alaneicker/atomik-ui';

<Card title="Collapse Card">
  <Collapse toggleText="Car Brands">
    <List>
      <ListItem>Chevrolet</ListItem>
      <ListItem>Ford</ListItem>
      <ListItem>GMC</ListItem>
      <ListItem>Honda</ListItem>
    </List>
  </Collapse>
</Card>;
```
