Drawers are commonly referred to as a side nav. The Drawer component allows for top, bottom, left and right positioning as well a push style drawer.

### Left Aligned Drawer (Default)

```jsx
import { useState } from 'react';
import {
  Drawer,
  Button,
  Link,
  List,
  ListItem,
} from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <List type="menu">
      <ListItem>
        <Link href="/home">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link href="/services">Services</Link>
      </ListItem>
      <ListItem>
        <Link href="/blocg">Blog</Link>
      </ListItem>
      <ListItem>
        <Link href="/contact">Contact</Link>
      </ListItem>
    </List>
  </Drawer>
</>;
```

### Right Aligned Drawer

```jsx
import { useState } from 'react';
import {
  Drawer,
  Button,
  Link,
  List,
  ListItem,
} from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
    <List type="menu">
      <ListItem>
        <Link href="/home">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link href="/services">Services</Link>
      </ListItem>
      <ListItem>
        <Link href="/blocg">Blog</Link>
      </ListItem>
      <ListItem>
        <Link href="/contact">Contact</Link>
      </ListItem>
    </List>
  </Drawer>
</>;
```

### Top Aligned Drawer

```jsx
import { useState } from 'react';
import {
  Drawer,
  Button,
  Link,
  List,
  ListItem,
} from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="top">
    <List type="menu">
      <ListItem>
        <Link href="/home">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link href="/services">Services</Link>
      </ListItem>
      <ListItem>
        <Link href="/blocg">Blog</Link>
      </ListItem>
      <ListItem>
        <Link href="/contact">Contact</Link>
      </ListItem>
    </List>
  </Drawer>
</>;
```

### Bottom Aligned Drawer

```jsx
import { useState } from 'react';
import {
  Drawer,
  Button,
  Link,
  List,
  ListItem,
} from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="bottom">
    <List type="menu">
      <ListItem>
        <Link href="/home">Home</Link>
      </ListItem>
      <ListItem>
        <Link href="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link href="/services">Services</Link>
      </ListItem>
      <ListItem>
        <Link href="/blocg">Blog</Link>
      </ListItem>
      <ListItem>
        <Link href="/contact">Contact</Link>
      </ListItem>
    </List>
  </Drawer>
</>;
```
