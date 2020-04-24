A Tooltip displays helpful te text when an element is hovered over, focused, or tapped.

```jsx
import { Tooltip, Button, Link } from '@alaneicker/react-component-library';

<div className="flex flex--align-middle flex--hr-32">
  <Tooltip data-tooltip="This is a tooltip" align="top-center">
    <Button variant="primary">Button Trigger</Button>
  </Tooltip>
  <Tooltip data-tooltip="This is a tooltip" align="top-center">
    <Link href="">Link Trigger</Link>
  </Tooltip>
</div>;
```

### Tooltip - Alignment

```jsx
import { Tooltip, Button } from '@alaneicker/react-component-library';

<>
  <div className="flex flex--space-between">
    <Tooltip data-tooltip="This is a tooltip">
      <Button variant="primary">top-left</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="top-center">
      <Button variant="primary">top-center</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="top-right">
      <Button variant="primary">top-right</Button>
    </Tooltip>
  </div>
  <div className="flex flex--space-between margin-top-16 margin-bottom-16">
    <Tooltip data-tooltip="This is a tooltip" align="right">
      <Button variant="primary">right</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="left">
      <Button variant="primary">left</Button>
    </Tooltip>
  </div>
  <div className="flex flex--space-between">
    <Tooltip data-tooltip="This is a tooltip" align="bottom-left">
      <Button variant="primary">bottom-left</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="bottom-center">
      <Button variant="primary">bottom-center</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="bottom-right">
      <Button variant="primary">bottom-right</Button>
    </Tooltip>
  </div>
</>;
```

### Tooltip - onClick

```jsx
import { Tooltip, Button } from '@alaneicker/react-component-library';

<Tooltip data-tooltip="This is a tooltip" triggerOnClick>
  <Button variant="primary">On Click</Button>
</Tooltip>;
```
