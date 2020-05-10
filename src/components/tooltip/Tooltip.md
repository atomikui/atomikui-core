A Tooltip displays helpful te text when an element is hovered over, focused, or tapped.

```jsx
import { Tooltip, Button, Link } from '@alaneicker/react-component-library';
import { Grid, Row, Col } from 'react-flexbox-grid';

<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
  <Tooltip data-tooltip="This is a tooltip" align="top-center">
    <Button size="md">Button Trigger</Button>
  </Tooltip>
  <Tooltip data-tooltip="This is a tooltip" align="top-center">
    <Link href="#">Link Trigger</Link>
  </Tooltip>
</div>;
```

### Tooltip - Alignment

```jsx
import { Tooltip, Button } from '@alaneicker/react-component-library';

<>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
    }}
  >
    <Tooltip data-tooltip="This is a tooltip">
      <Button size="md">top-left</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="top-center">
      <Button size="md">top-center</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="top-right">
      <Button size="md">top-right</Button>
    </Tooltip>
  </div>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
    }}
  >
    <Tooltip data-tooltip="This is a tooltip" align="right">
      <Button size="md">right</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="left">
      <Button size="md">left</Button>
    </Tooltip>
  </div>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
    }}
  >
    <Tooltip data-tooltip="This is a tooltip" align="bottom-left">
      <Button size="md">bottom-left</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="bottom-center">
      <Button size="md">bottom-center</Button>
    </Tooltip>
    <Tooltip data-tooltip="This is a tooltip" align="bottom-right">
      <Button size="md">bottom-right</Button>
    </Tooltip>
  </div>
</>;
```

### Tooltip - onClick

```jsx
import { Tooltip, Button } from '@alaneicker/react-component-library';

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Tooltip data-tooltip="This is a tooltip" align="top-center" triggerOnClick>
    <Button size="md">On Click</Button>
  </Tooltip>
</div>;
```

### Theme Variant

```jsx
import { Tooltip, Button } from '@alaneicker/react-component-library';

<div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Tooltip data-tooltip="This is a tooltip" variant="white" align="top-center">
    <Button size="md">White</Button>
  </Tooltip>
  <Tooltip data-tooltip="This is a tooltip" variant="info" align="top-center">
    <Button size="md">Info</Button>
  </Tooltip>
  <Tooltip
    data-tooltip="This is a tooltip"
    variant="warning"
    align="top-center"
  >
    <Button size="md">Warning</Button>
  </Tooltip>
  <Tooltip data-tooltip="This is a tooltip" variant="error" align="top-center">
    <Button size="md">Error</Button>
  </Tooltip>
  <Tooltip
    data-tooltip="This is a tooltip"
    variant="success"
    align="top-center"
  >
    <Button size="md">Success</Button>
  </Tooltip>
</div>;
```
