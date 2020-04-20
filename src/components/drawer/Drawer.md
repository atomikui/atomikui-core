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
  <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      facilisis magna nulla, a convallis tortor dignissim sit amet. Fusce non
      dictum felis. Fusce velit mi, placerat a feugiat sagittis, facilisis vel
      lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. In vitae eros nunc. Pellentesque sed nisi tempor,
      mollis eros posuere, maximus mauris. Donec tincidunt, dui quis tincidunt
      pharetra, arcu erat commodo tortor, pharetra maximus sapien lectus quis
      eros. Aliquam erat volutpat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
      facilisis magna nulla, a convallis tortor dignissim sit amet. Fusce non
      dictum felis. Fusce velit mi, placerat a feugiat sagittis, facilisis vel
      lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. In vitae eros nunc. Pellentesque sed nisi tempor,
      mollis eros posuere, maximus mauris. Donec tincidunt, dui quis tincidunt
      pharetra, arcu erat commodo tortor, pharetra maximus sapien lectus quis
      eros. Aliquam erat volutpat.
    </p>
  </Drawer>
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
