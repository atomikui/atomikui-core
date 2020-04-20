Drawers are commonly referred to as a side nav. The Drawer component allows for top, bottom, left and right positioning as well a push style drawer.

### Left Aligned Drawer (Default)

```jsx
import { useState } from 'react';
import { Drawer, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button variant="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <ul class="rcl-menu" style={{ width: '250px' }}>
      <li>
        <Button>Home</Button>
      </li>
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Services</a>
      </li>
      <li>
        <a href="">Blog</a>
      </li>
      <li>
        <a href="">Conact</a>
      </li>
    </ul>
  </Drawer>
</>;
```

### Right Aligned Drawer

```jsx
import { useState } from 'react';
import { Drawer, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button variant="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" />
</>;
```

### Top Aligned Drawer

```jsx
import { useState } from 'react';
import { Drawer, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button variant="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="top" />
</>;
```

### Bottom Aligned Drawer

```jsx
import { useState } from 'react';
import { Drawer, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button variant="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    position="bottom"
  ></Drawer>
</>;
```

### Push Style Drawer

```jsx
import { useState } from 'react';
import { Drawer, Button } from '@alaneicker/react-component-library';

const [isOpen, setIsOpen] = useState(false);

<>
  <Button variant="primary" size="md" onClick={() => setIsOpen(!isOpen)}>
    Toggle Drawer
  </Button>
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
</>;
```
