The Tabs component can be used to simplify switching between different views.

```jsx
import { Tabs } from '@atomikui/core';

<Tabs>
  <Tabs.Item label="Tab One" content="Item One" />
  <Tabs.Item label="Tab Two" content="Item Two" />
  <Tabs.Item label="Tab Three" content="Item Three" />
</Tabs>;
```

### Setting an Intial Active Tab

Use the `initialActiveTab` prop to set an initial active tab.

```jsx
import { Tabs } from '@atomikui/core';

<Tabs initialActiveTab={2}>
  <Tabs.Item label="Tab One" content="Item One" />
  <Tabs.Item label="Tab Two" content="Item Two" />
  <Tabs.Item label="Tab Three" content="Item Three" />
</Tabs>;
```

### Tabs Alignment

The Tabs children can be aligned with the `align` prop. It accepts a value of `center`, `right` or `stretch`.

```jsx
import { Tabs } from '@atomikui/core';

<>
  <Tabs>
    <Tabs.Item label="Tab One" content="Item One" />
    <Tabs.Item label="Tab Two" content="Item Two" />
    <Tabs.Item label="Tab Three" content="Item Three" />
  </Tabs>
  <br />
  <Tabs align="center">
    <Tabs.Item label="Tab One" content="Item One" />
    <Tabs.Item label="Tab Two" content="Item Two" />
    <Tabs.Item label="Tab Three" content="Item Three" />
  </Tabs>
  <br />
  <Tabs align="right">
    <Tabs.Item label="Tab One" content="Item One" />
    <Tabs.Item label="Tab Two" content="Item Two" />
    <Tabs.Item label="Tab Three" content="Item Three" />
  </Tabs>
  <br />
  <Tabs align="stretch">
    <Tabs.Item label="Tab One" content="Item One" />
    <Tabs.Item label="Tab Two" content="Item Two" />
    <Tabs.Item label="Tab Three" content="Item Three" />
  </Tabs>
</>;
```

### Comparison Variant

```jsx
import { Tabs, Price } from '@atomikui/core';

<Tabs align="stretch" initialActiveTab={1} comparison>
  <Tabs.Item
    label="Silver"
    content={<h3 className="text-size-24">Silver Plan</h3>}
  >
    <Price amount={49} label="/ year" size="lg" color="light-green" />
  </Tabs.Item>
  <Tabs.Item label="Gold" content={<h3 className="text-size-24">Gold Plan</h3>}>
    <Price amount={69} label="/ year" size="lg" color="light-green" />
  </Tabs.Item>
  <Tabs.Item
    label="Paltinum"
    content={<h3 className="text-size-24">Platinum Plan</h3>}
  >
    <Price amount={99} label="/ year" size="lg" color="light-green" />
  </Tabs.Item>
</Tabs>;
```

```jsx noeditor
import IframeProps from '../../../styleguide/components/IframeProps';

<IframeProps component="TabItem" />;
```

### Tabs
