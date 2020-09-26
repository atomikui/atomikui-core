A Tooltip displays helpful te text when an element is hovered over, focused, or tapped.

```jsx
import { Tooltip, Button } from '@atomikui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';

<div
  style={{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }}
>
  <Tooltip text="This is a tooltip" align="top-center">
    <Button theme="blue">Button Trigger</Button>
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
import { Tooltip, Button } from '@atomikui/core';

<>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
    }}
  >
    <Tooltip text="This is a tooltip">
      <Button theme="blue">top-left</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="top-center">
      <Button theme="blue">top-center</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="top-right">
      <Button theme="blue">top-right</Button>
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
      <Button theme="blue">right</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="left">
      <Button theme="blue">left</Button>
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
      <Button theme="blue">bottom-left</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="bottom-center">
      <Button theme="blue">bottom-center</Button>
    </Tooltip>
    <Tooltip text="This is a tooltip" align="bottom-right">
      <Button theme="blue">bottom-right</Button>
    </Tooltip>
  </div>
</>;
```

### Tooltip - onClick

```jsx
import { Tooltip, Button } from '@atomikui/core';

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Tooltip text="This is a tooltip" align="top-center" triggerOnClick>
    <Button theme="blue">On Click</Button>
  </Tooltip>
</div>;
```

### Theme Variant

```jsx
import { Tooltip, Button } from '@atomikui/core';

<div
  style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="info"
    align="top-center"
  >
    <Button theme="blue">Info</Button>
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="light-gray"
    align="top-center"
  >
    <Button theme="blue">light-gray</Button>
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="warning"
    align="top-center"
  >
    <Button theme="blue">Warning</Button>
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="error"
    align="top-center"
  >
    <Button theme="blue">Error</Button>
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    text="This is a tooltip"
    theme="success"
    align="top-center"
  >
    <Button theme="blue">Success</Button>
  </Tooltip>
</div>;
```
