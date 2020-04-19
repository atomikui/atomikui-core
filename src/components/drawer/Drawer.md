Drawers are commonly referred to as a side nav. The Drawer component allows for top, bottom, left and right positioning as well a push style drawer.

### Fixed Drawer With Overlay

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

### Fixed Drawer - Left

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

### Fixed Drawer - Right

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

### Fixed Drawer - Bottom

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
