### Tooltip - Top Aligned

```jsx
import { Tooltip, Button } from '@alaneicker/react-component-library';

<>
  <Tooltip data-content="This is a tooltip">
    <Button variant="primary">top-left</Button>
  </Tooltip>
  <Tooltip data-content="This is a tooltip" align="top-center">
    <Button variant="primary">top-center</Button>
  </Tooltip>
  <Tooltip data-content="This is a tooltip" align="top-right">
    <Button variant="primary">top-right</Button>
  </Tooltip>
</>;
```
