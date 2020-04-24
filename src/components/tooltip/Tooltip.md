A Tooltip displays helpful te text when an element is hovered over, focused, or tapped.

### Tooltip - Top Aligned

```jsx
import { Tooltip, Button } from '@alaneicker/react-component-library';

<>
  <Tooltip data-tooltip="This is a tooltip" triggerOnClick>
    <Button variant="primary">top-left</Button>
  </Tooltip>
  <Tooltip data-tooltip="This is a tooltip" align="top-center">
    <Button variant="primary">top-center</Button>
  </Tooltip>
  <Tooltip data-tooltip="This is a tooltip" align="top-right">
    <Button variant="primary">top-right</Button>
  </Tooltip>
</>;
```

### Tooltip - Bottom Aligned

```jsx
import { Tooltip, Button } from '@alaneicker/react-component-library';

<>
  <Tooltip data-tooltip="This is a tooltip" align="bottom-left">
    <Button variant="primary">bottom-left</Button>
  </Tooltip>
  <Tooltip data-tooltip="This is a tooltip" align="bottom-center">
    <Button variant="primary">bottom-center</Button>
  </Tooltip>
  <Tooltip data-tooltip="This is a tooltip" align="bottom-right">
    <Button variant="primary">bottom-right</Button>
  </Tooltip>
</>;
```
