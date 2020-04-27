Drawers are commonly referred to as a side nav. The Drawer component allows for top, bottom, left and right positioning as well a push style drawer.

### Left Aligned Drawer (Default)

```jsx
import { useState } from 'react';
import {
  Drawer,
  Button,
  Link,
  Menu,
  MenuItem,
} from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <Menu>
      <MenuItem>
        <Link href="/home">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about">About</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/services">Services</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/blocg">Blog</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/contact">Contact</Link>
      </MenuItem>
    </Menu>
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
  Menu,
  MenuItem,
} from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
    <Menu>
      <MenuItem>
        <Link href="/home">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about">About</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/services">Services</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/blocg">Blog</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/contact">Contact</Link>
      </MenuItem>
    </Menu>
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
  Menu,
  MenuItem,
} from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="top">
    <Menu>
      <MenuItem>
        <Link href="/home">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about">About</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/services">Services</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/blocg">Blog</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/contact">Contact</Link>
      </MenuItem>
    </Menu>
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
  Menu,
  MenuItem,
} from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button theme="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="bottom">
    <Menu>
      <MenuItem>
        <Link href="/home">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/about">About</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/services">Services</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/blocg">Blog</Link>
      </MenuItem>
      <MenuItem>
        <Link href="/contact">Contact</Link>
      </MenuItem>
    </Menu>
  </Drawer>
</>;
```
