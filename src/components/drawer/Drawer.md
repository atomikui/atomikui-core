Drawers are commonly referred to as a side nav. The Drawer component allows for top, bottom, left and right positioning as well a push style drawer.

### Left Aligned Drawer (Default)

```jsx
import { useState } from 'react';
import { Drawer, Button, Link, List, ListItem } from '@atomikui/core';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="blue" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <List type="menu">
      <List.Item>
        <Link href="/home">Home</Link>
      </List.Item>
      <List.Item>
        <Link href="/about">About</Link>
      </List.Item>
      <List.Item>
        <Link href="/services">Services</Link>
      </List.Item>
      <List.Item>
        <Link href="/blocg">Blog</Link>
      </List.Item>
      <List.Item>
        <Link href="/contact">Contact</Link>
      </List.Item>
    </List>
  </Drawer>
</>;
```

### Right Aligned Drawer

```jsx
import { useState } from 'react';
import { Drawer, Button, Link, List, ListItem } from '@atomikui/core';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="blue" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
    <List type="menu">
      <List.Item>
        <Link href="/home">Home</Link>
      </List.Item>
      <List.Item>
        <Link href="/about">About</Link>
      </List.Item>
      <List.Item>
        <Link href="/services">Services</Link>
      </List.Item>
      <List.Item>
        <Link href="/blocg">Blog</Link>
      </List.Item>
      <List.Item>
        <Link href="/contact">Contact</Link>
      </List.Item>
    </List>
  </Drawer>
</>;
```

### Top Aligned Drawer

```jsx
import { useState } from 'react';
import { Drawer, Button, Link, List, ListItem } from '@atomikui/core';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="blue" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="top">
    <List type="menu">
      <List.Item>
        <Link href="/home">Home</Link>
      </List.Item>
      <List.Item>
        <Link href="/about">About</Link>
      </List.Item>
      <List.Item>
        <Link href="/services">Services</Link>
      </List.Item>
      <List.Item>
        <Link href="/blocg">Blog</Link>
      </List.Item>
      <List.Item>
        <Link href="/contact">Contact</Link>
      </List.Item>
    </List>
  </Drawer>
</>;
```

### Bottom Aligned Drawer

```jsx
import { useState } from 'react';
import { Drawer, Button, Link, List, ListItem } from '@atomikui/core';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="blue" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="bottom">
    <List type="menu">
      <List.Item>
        <Link href="/home">Home</Link>
      </List.Item>
      <List.Item>
        <Link href="/about">About</Link>
      </List.Item>
      <List.Item>
        <Link href="/services">Services</Link>
      </List.Item>
      <List.Item>
        <Link href="/blocg">Blog</Link>
      </List.Item>
      <List.Item>
        <Link href="/contact">Contact</Link>
      </List.Item>
    </List>
  </Drawer>
</>;
```
