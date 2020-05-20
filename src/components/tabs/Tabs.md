The Tabs component can be used to simplify switching between different views.

```jsx
import { useState } from 'react';
import { Tabs, Tab, TabPanel } from '@alaneicker/atomik-ui';

const [currentIndex, setCurrentIndex] = useState(0);

<>
  <Tabs onChange={(index) => setCurrentIndex(index)}>
    <Tab label="Tab One" />
    <Tab label="Tab Two" />
    <Tab label="Tab Three" />
  </Tabs>
  <TabPanel state={[currentIndex, 0]}>Item One</TabPanel>
  <TabPanel state={[currentIndex, 1]}>Item Two</TabPanel>
  <TabPanel state={[currentIndex, 2]}>Item Three</TabPanel>
</>;
```

### Setting an Intial Active Tab

Use the `initialActiveTab` prop to set an initial active tab.

```jsx
import { useState } from 'react';
import { Tabs, Tab, TabPanel } from '@alaneicker/atomik-ui';

const [currentIndex, setCurrentIndex] = useState(2);

<>
  <Tabs
    onChange={(index) => setCurrentIndex(index)}
    initialActiveTab={currentIndex}
  >
    <Tab label="Tab One" />
    <Tab label="Tab Two" />
    <Tab label="Tab Three" />
  </Tabs>
  <TabPanel state={[currentIndex, 0]}>Item One</TabPanel>
  <TabPanel state={[currentIndex, 1]}>Item Two</TabPanel>
  <TabPanel state={[currentIndex, 2]}>Item Three</TabPanel>
</>;
```

### Tabs Alignment

The Tabs children can be aligned with the `align` prop. It accepts a value of `center`, `right` or `stretch`.

```jsx
import { Tabs, Tab } from '@alaneicker/atomik-ui';

<>
  {/* Left aligned - default */}
  <Tabs>
    <Tab label="Tab One" />
    <Tab label="Tab Two" />
    <Tab label="Tab Three" />
  </Tabs>
  <br />
  {/* Center aligned */}
  <Tabs align="center">
    <Tab label="Tab One" />
    <Tab label="Tab Two" />
    <Tab label="Tab Three" />
  </Tabs>
  <br />
  {/* Right aligned */}
  <Tabs align="right">
    <Tab label="Tab One" />
    <Tab label="Tab Two" />
    <Tab label="Tab Three" />
  </Tabs>
  <br />
  {/* Children fill parent */}
  <Tabs align="stretch">
    <Tab label="Tab One" />
    <Tab label="Tab Two" />
    <Tab label="Tab Three" />
  </Tabs>
</>;
```

### Comparison Variant

```jsx
import { useState } from 'react';
import { Tabs, Tab, TabPanel, Price } from '@alaneicker/atomik-ui';

const [currentIndex, setCurrentIndex] = useState(0);

<>
  <Tabs onChange={(index) => setCurrentIndex(index)} align="stretch" comparison>
    <Tab label="Silver">
      <Price amount={49} label="/ year" size="lg" color="light-green" />
    </Tab>
    <Tab label="Gold">
      <Price amount={69} label="/ year" size="lg" color="light-green" />
    </Tab>
    <Tab label="Paltinum Plan">
      <Price amount={99} label="/ year" size="lg" color="light-green" />
    </Tab>
  </Tabs>
  <TabPanel state={[currentIndex, 0]}>
    <h3 className="text-size-24">Silver Plan</h3>
  </TabPanel>
  <TabPanel state={[currentIndex, 1]}>
    <h3 className="text-size-24">Gold Plan</h3>
  </TabPanel>
  <TabPanel state={[currentIndex, 2]}>
    <h3 className="text-size-24">Platinum Plan</h3>
  </TabPanel>
</>;
```
