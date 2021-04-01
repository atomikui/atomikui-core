The Tabs component can be used to simplify switching between different views.

```jsx
import { useState } from 'react';
import { Tabs } from '@atomikui/core';

const [currentIndex, setCurrentIndex] = useState(0);

<>
  <Tabs onChange={(index) => setCurrentIndex(index)}>
    <Tabs.Button label="Tab One" />
    <Tabs.Button label="Tab Two" />
    <Tabs.Button label="Tab Three" />
    <Tabs.Panel state={[currentIndex, 0]}>Item One</Tabs.Panel>
    <Tabs.Panel state={[currentIndex, 1]}>Item Two</Tabs.Panel>
    <Tabs.Panel state={[currentIndex, 2]}>Item Three</Tabs.Panel>
  </Tabs>
</>;
```

### Setting an Intial Active Tab

Use the `initialActiveTab` prop to set an initial active tab.

```jsx
import { useState } from 'react';
import { Tabs } from '@atomikui/core';

const [currentIndex, setCurrentIndex] = useState(2);

<>
  <Tabs
    onChange={(index) => setCurrentIndex(index)}
    initialActiveTab={currentIndex}
  >
    <Tabs.Button label="Tab One" />
    <Tabs.Button label="Tab Two" />
    <Tabs.Button label="Tab Three" />
    <Tabs.Panel state={[currentIndex, 0]}>Item One</Tabs.Panel>
    <Tabs.Panel state={[currentIndex, 1]}>Item Two</Tabs.Panel>
    <Tabs.Panel state={[currentIndex, 2]}>Item Three</Tabs.Panel>
  </Tabs>
</>;
```

### Tabs Alignment

The Tabs children can be aligned with the `align` prop. It accepts a value of `center`, `right` or `stretch`.

```jsx
import { Tabs } from '@atomikui/core';

<>
  <Tabs>
    <Tabs.Button label="Tab One" />
    <Tabs.Button label="Tab Two" />
    <Tabs.Button label="Tab Three" />
  </Tabs>
  <br />
  <Tabs align="center">
    <Tabs.Button label="Tab One" />
    <Tabs.Button label="Tab Two" />
    <Tabs.Button label="Tab Three" />
  </Tabs>
  <br />
  <Tabs align="right">
    <Tabs.Button label="Tab One" />
    <Tabs.Button label="Tab Two" />
    <Tabs.Button label="Tab Three" />
  </Tabs>
  <br />
  <Tabs align="stretch">
    <Tabs.Button label="Tab One" />
    <Tabs.Button label="Tab Two" />
    <Tabs.Button label="Tab Three" />
  </Tabs>
</>;
```

### Comparison Variant

```jsx
import { useState } from 'react';
import { Tabs, Price } from '@atomikui/core';

const [currentIndex, setCurrentIndex] = useState(0);

<>
  <Tabs
    onChange={(index) => setCurrentIndex(index)}
    align="stretch"
    initialActiveTab={1}
    comparison
  >
    <Tabs.Button label="Silver">
      <Price amount={49} label="/ year" size="lg" color="light-green" />
    </Tabs.Button>
    <Tabs.Button label="Gold">
      <Price amount={69} label="/ year" size="lg" color="light-green" />
    </Tabs.Button>
    <Tabs.Button label="Paltinum">
      <Price amount={99} label="/ year" size="lg" color="light-green" />
    </Tabs.Button>
    <Tabs.Panel state={[currentIndex, 0]}>
      <h3 className="text-size-24">Silver Plan</h3>
    </Tabs.Panel>
    <Tabs.Panel state={[currentIndex, 1]}>
      <h3 className="text-size-24">Gold Plan</h3>
    </Tabs.Panel>
    <Tabs.Panel state={[currentIndex, 2]}>
      <h3 className="text-size-24">Platinum Plan</h3>
    </Tabs.Panel>
  </Tabs>
</>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="TabButton" />;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="TabPanel" />;
```

### Tabs
