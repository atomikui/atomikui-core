The Collapse component allows for the toggling of content visibility.

### Basic Usage

```jsx
import { Collapse, List } from '@atomikui/core';

<Collapse toggleText="Car Brands">
  <List>
    <List.Item>Chevrolet</List.Item>
    <List.Item>Ford</List.Item>
    <List.Item>GMC</List.Item>
    <List.Item>Honda</List.Item>
  </List>
</Collapse>;
```

### Trigger Text and Icon Alignment

```jsx
import { Collapse, List } from '@atomikui/core';

<>
  <Collapse className="margin-bottom-16" toggleText="Car Brands">
    <List>
      <List.Item>Chevrolet</List.Item>
      <List.Item>Ford</List.Item>
      <List.Item>GMC</List.Item>
      <List.Item>Honda</List.Item>
    </List>
  </Collapse>
  <Collapse
    className="margin-bottom-16"
    toggleText="Car Brands"
    rightAlignTriggerIcon
  >
    <List>
      <List.Item>Chevrolet</List.Item>
      <List.Item>Ford</List.Item>
      <List.Item>GMC</List.Item>
      <List.Item>Honda</List.Item>
    </List>
  </Collapse>
  <Collapse
    className="margin-bottom-16"
    toggleText="Car Brands"
    rightAlignTrigger
  >
    <List>
      <List.Item>Chevrolet</List.Item>
      <List.Item>Ford</List.Item>
      <List.Item>GMC</List.Item>
      <List.Item>Honda</List.Item>
    </List>
  </Collapse>
  <Collapse toggleText="Car Brands" rightAlignTrigger rightAlignTriggerIcon>
    <List>
      <List.Item>Chevrolet</List.Item>
      <List.Item>Ford</List.Item>
      <List.Item>GMC</List.Item>
      <List.Item>Honda</List.Item>
    </List>
  </Collapse>
</>;
```

### Collapse With Custom Trigger

```jsx
import { useState } from 'react';
import { Collapse, List, Button } from '@atomikui/core';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button className="margin-bottom-16" onClick={() => setIsOpen(!isOpen)}>
    Toggle
  </Button>

  <Collapse isOpen={isOpen} noTrigger>
    <List>
      <List.Item>Chevrolet</List.Item>
      <List.Item>Ford</List.Item>
      <List.Item>GMC</List.Item>
      <List.Item>Honda</List.Item>
    </List>
  </Collapse>
</>;
```

### Collapse Wrapped in a Container

```jsx
import { Card, Collapse, List } from '@atomikui/core';

<Card title="Collapse Card">
  <Collapse toggleText="Car Brands">
    <List>
      <List.Item>Chevrolet</List.Item>
      <List.Item>Ford</List.Item>
      <List.Item>GMC</List.Item>
      <List.Item>Honda</List.Item>
    </List>
  </Collapse>
</Card>;
```
