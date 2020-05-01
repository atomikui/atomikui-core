The TabPanel is used with the Tabs componwnt. The `state` prop is an array consisting of the current selected index and the panel's identifying index and is used to toggle the visibility of the panel.

```jsx
import { useState } from 'react';
import { TabPanel } from '@alaneicker/react-component-library';

const [currentIndex, setCurrentIndex] = useState(0);

<TabPanel state={[currentIndex, 0]}>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem elit,
  aliquam sit amet elit et, porta hendrerit turpis. Donec metus nulla, aliquam
  sagittis sagittis vel, maximus sit amet turpis. Curabitur nec dapibus quam.
</TabPanel>;
```

#### Used With:

[`<Tabs />`](/#/Content/Tabs)
