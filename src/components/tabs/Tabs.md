The Tabs component can be used to simplify switching between different views.

```jsx
import { Tabs } from '@atomikui/core';

<>
  <Tabs onChange={(index) => setCurrentIndex(index)}>
    <Tabs.Button label="Tab One" content="Item One" />
    <Tabs.Button label="Tab Two" content="Item Two" />
    <Tabs.Button label="Tab Three" content="Item Three" />
  </Tabs>
</>;
```

### Setting an Intial Active Tab

Use the `initialActiveTab` prop to set an initial active tab.

```jsx
import { Tabs } from '@atomikui/core';

<>
  <Tabs onChange={(index) => setCurrentIndex(index)} initialActiveTab={2}>
    <Tabs.Button label="Tab One" content="Item One" />
    <Tabs.Button label="Tab Two" content="Item Two" />
    <Tabs.Button label="Tab Three" content="Item Three" />
  </Tabs>
</>;
```

### Tabs Alignment

The Tabs children can be aligned with the `align` prop. It accepts a value of `center`, `right` or `stretch`.

```jsx
import { Tabs } from '@atomikui/core';

<>
  <Tabs>
    <Tabs.Button label="Tab One" content="Item One" />
    <Tabs.Button label="Tab Two" content="Item Two" />
    <Tabs.Button label="Tab Three" content="Item Three" />
  </Tabs>
  <br />
  <Tabs align="center">
    <Tabs.Button label="Tab One" content="Item One" />
    <Tabs.Button label="Tab Two" content="Item Two" />
    <Tabs.Button label="Tab Three" content="Item Three" />
  </Tabs>
  <br />
  <Tabs align="right">
    <Tabs.Button label="Tab One" content="Item One" />
    <Tabs.Button label="Tab Two" content="Item Two" />
    <Tabs.Button label="Tab Three" content="Item Three" />
  </Tabs>
  <br />
  <Tabs align="stretch">
    <Tabs.Button label="Tab One" content="Item One" />
    <Tabs.Button label="Tab Two" content="Item Two" />
    <Tabs.Button label="Tab Three" content="Item Three" />
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
    <Tabs.Button
      label="Silver"
      content={<h3 className="text-size-24">Silver Plan</h3>}
    >
      <Price amount={49} label="/ year" size="lg" color="light-green" />
    </Tabs.Button>
    <Tabs.Button
      label="Gold"
      content={<h3 className="text-size-24">Gold Plan</h3>}
    >
      <Price amount={69} label="/ year" size="lg" color="light-green" />
    </Tabs.Button>
    <Tabs.Button
      label="Paltinum"
      content={<h3 className="text-size-24">Platinum Plan</h3>}
    >
      <Price amount={99} label="/ year" size="lg" color="light-green" />
    </Tabs.Button>
  </Tabs>
</>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="TabButton" />;
```

### Tabs
