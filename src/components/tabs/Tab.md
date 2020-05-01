A Tab is a child of the Tabs component and is used to toggle the visibility of a TabPanel.

```jsx
import { useState } from 'react';
import { Tab } from '@alaneicker/react-component-library';

<>
  <Tab label="Tab One" />
  <Tab label="Tab Two" className="is-active" />
  <Tab label="Tab Three" />
</>;
```

#### Used With:

[`<Tabs />`](/#/Content/Tabs)

[`<TabPanel />`](/#/Content/TabPanel)
