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
  <Tooltip
    trigger={<Button theme="blue">Button Trigger</Button>}
    align="top-center"
  >
    This is a tooltip
  </Tooltip>
  <p style={{ marginLeft: '16px' }}>
    This is a tooltip nested
    <Tooltip
      trigger={
        <Button theme="link">
          <b>tooltip</b>
        </Button>
      }
      align="top-center"
    >
      This is a tooltip
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
    <Tooltip trigger={<Button theme="blue">top-left</Button>}>
      This is a tooltip
    </Tooltip>
    <Tooltip
      trigger={<Button theme="blue">top-center</Button>}
      align="top-center"
    >
      This is a tooltip
    </Tooltip>
    <Tooltip
      trigger={<Button theme="blue">top-right</Button>}
      align="top-right"
    >
      This is a tooltip
    </Tooltip>
  </div>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
    }}
  >
    <Tooltip trigger={<Button theme="blue">right</Button>} align="right">
      This is a tooltip
    </Tooltip>
    <Tooltip trigger={<Button theme="blue">left</Button>} align="left">
      This is a tooltip
    </Tooltip>
  </div>
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
    }}
  >
    <Tooltip
      trigger={<Button theme="blue">bottom-left</Button>}
      align="bottom-left"
    >
      This is a tooltip
    </Tooltip>
    <Tooltip
      trigger={<Button theme="blue">bottom-center</Button>}
      align="bottom-center"
    >
      This is a tooltip
    </Tooltip>
    <Tooltip
      trigger={<Button theme="blue">bottom-right</Button>}
      align="bottom-right"
    >
      This is a tooltip
    </Tooltip>
  </div>
</>;
```

### Tooltip - onClick

```jsx
import { Tooltip, Button } from '@atomikui/core';

<div style={{ display: 'flex', justifyContent: 'space-around' }}>
  <Tooltip
    trigger={<Button theme="blue">On Click</Button>}
    align="top-center"
    triggerOnClick
  >
    This is a tooltip
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
    trigger={<Button theme="blue">Info</Button>}
    theme="info"
    align="top-center"
  >
    This is a tooltip
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    trigger={<Button theme="blue">light-gray</Button>}
    theme="light-gray"
    align="top-center"
  >
    This is a tooltip
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    trigger={<Button theme="blue">Warning</Button>}
    theme="warning"
    align="top-center"
  >
    This is a tooltip
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    trigger={<Button theme="blue">Error</Button>}
    theme="error"
    align="top-center"
  >
    This is a tooltip
  </Tooltip>
  <Tooltip
    className="margin-bottom-8"
    trigger={<Button theme="blue">Success</Button>}
    theme="success"
    align="top-center"
  >
    This is a tooltip
  </Tooltip>
</div>;
```
