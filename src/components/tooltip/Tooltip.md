A Tooltip displays helpful te text when an element is hovered over, focused, or tapped.

```jsx
import { Tooltip, Button } from '@alaneicker/atomik-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';

<div
  style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }}
>
  <Tooltip text="This is a tooltip" align="top-center">
    <Button size="md">Button Trigger</Button>
  </Tooltip>
  <p style={{ marginLeft: '16px' }}>
    This is a tooltip nested
    <Tooltip text="This is a tooltip" align="top-center">
      <Button theme="link" href="#">
        tooltip
      </Button>
    </Tooltip> inside of some text content.
  </p>
</div>;
```

### Tooltip - Alignment

```jsx
import { Tooltip, Button } from '@alaneicker/atomik-ui';

<>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
    }}
  >
    <Tooltip text="This is a tooltip">
      <Button size="md">top-left</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="top-center">
      <Button size="md">top-center</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="top-right">
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
    <Tooltip text="This is a tooltip" align="right">
      <Button size="md">right</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="left">
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
    <Tooltip text="This is a tooltip" align="bottom-left">
      <Button size="md">bottom-left</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="bottom-center">
      <Button size="md">bottom-center</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="bottom-right">
      <Button size="md">bottom-right</Button>
    </Tooltip>
  </div>
</>;
```

### Tooltip - onClick

```jsx
import { Tooltip, Button } from '@alaneicker/atomik-ui';

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Tooltip text="This is a tooltip" align="top-center" triggerOnClick>
    <Button size="md">On Click</Button>
  </Tooltip>
</div>;
```

### Theme Variant

```jsx
import { Tooltip, Button } from '@alaneicker/atomik-ui';

<div
  style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="info"
    align="top-center"
  >
    <Button size="md">Info</Button>
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="light-gray"
    align="top-center"
  >
    <Button size="md">light-gray</Button>
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="warning"
    align="top-center"
  >
    <Button size="md">Warning</Button>
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="error"
    align="top-center"
  >
    <Button size="md">Error</Button>
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="success"
    align="top-center"
  >
    <Button size="md">Success</Button>
  </Tooltip>
</div>;
```
